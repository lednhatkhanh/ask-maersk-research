// Capture Slidev text, tables, geometry, images and screenshots for native Google Slides updates.
const {chromium}=require('playwright-chromium');
const fs=require('node:fs');
const path=require('node:path');
const deckDir=path.resolve(__dirname,'..');
const config=JSON.parse(fs.readFileSync(path.join(deckDir,'google-slides.json'),'utf8'));
const base=process.argv[2]||'http://localhost:3030';
const out=path.resolve(process.argv[3]||path.join(deckDir,'.sync'));
const count=Number(process.argv[4]||config.slideObjectIds.length);
if(!Number.isInteger(count)||count<1)throw new Error('Slide count must be a positive integer');
fs.mkdirSync(path.join(out,'source'),{recursive:true});
(async()=>{const b=await chromium.launch({headless:true});const p=await b.newPage({viewport:{width:1280,height:720},deviceScaleFactor:2});const slides=[];
for(let n=1;n<=count;n++) {await p.goto(new URL(String(n),base.replace(/\/$/,'')+'/').href);await p.evaluate(()=>document.fonts.ready);await p.locator('.slidev-layout').filter({visible:true}).first().waitFor();
await p.evaluate(async()=>{await Promise.all([...document.images].map(im=>im.decode().catch(()=>{})));});
const data=await p.evaluate(()=>{
const root=[...document.querySelectorAll('.slidev-layout')].find(e=>e.getBoundingClientRect().width>0);const rr=root.getBoundingClientRect();
function rect(e){const r=e.getBoundingClientRect();return {x:r.x-rr.x,y:r.y-rr.y,w:r.width,h:r.height}}
function css(e){let s=getComputedStyle(e);return {font:s.fontFamily,size:parseFloat(s.fontSize),weight:s.fontWeight,color:s.color,line:parseFloat(s.lineHeight),align:s.textAlign,transform:s.textTransform,letter:parseFloat(s.letterSpacing)||0,background:s.backgroundColor,padding:[s.paddingTop,s.paddingRight,s.paddingBottom,s.paddingLeft].map(parseFloat),borders:['Top','Right','Bottom','Left'].map(k=>({width:parseFloat(s['border'+k+'Width']),color:s['border'+k+'Color']}))}}
const texts=[],boxes=[],images=[],tables=[];
function runs(el){
  const list=[];
  const add=(text,owner)=>{
    const value=text.replace(/\s+/g,' ');
    if(!value.trim())return;
    const s=css(owner);
    const transformed=s.transform==='uppercase'?value.toUpperCase():value;
    const previous=list.at(-1)?.text||'';
    const separator=previous&&!previous.endsWith('\n')&&!/[\s]$/.test(previous)&&!/^[\s,.;:!?)]/.test(transformed)?' ':'';
    list.push({text:separator+transformed,...s});
  };
  const newline=owner=>{
    if(!list.length||list.at(-1).text.endsWith('\n'))return;
    const s=css(owner);
    list.push({text:'\n',...s});
  };
  const visit=node=>{
    if(node.nodeType===Node.TEXT_NODE){add(node.textContent,node.parentElement);return;}
    if(node.nodeType!==Node.ELEMENT_NODE)return;
    if(node.tagName==='BR'){newline(node.parentElement);return;}
    const display=getComputedStyle(node).display;
    const block=display==='block'||display==='list-item'||['P','DIV','H1','H2','H3','LI'].includes(node.tagName);
    if(block&&list.length)newline(node);
    for(const child of node.childNodes)visit(child);
    if(block)newline(node);
  };
  for(const child of el.childNodes)visit(child);
  while(list.length&&list.at(-1).text==='\n')list.pop();
  return list;
}
function walk(el){if(!el.getBoundingClientRect().width)return;const s=css(el);if(el.tagName==='IMG'){images.push({src:el.src,alt:el.alt,rect:rect(el),...s,natural:[el.naturalWidth,el.naturalHeight]});return;}
if(el.tagName==='TABLE'){tables.push({rect:rect(el),rows:[...el.rows].map(r=>[...r.cells].map(c=>({rect:rect(c),runs:runs(c),...css(c)})))});return;}
if(s.background!=='rgba(0, 0, 0, 0)'||s.borders.some(b=>b.width))boxes.push({rect:rect(el),...s});
const hasDirect=[...el.childNodes].some(n=>n.nodeType===3&&n.textContent.trim());const blockChildren=[...el.children].some(c=>!['SPAN','B','STRONG','EM','A','SMALL','BR','I'].includes(c.tagName)||getComputedStyle(c).display==='block');
if(hasDirect&&!blockChildren||['P','H1','H2','H3','LI'].includes(el.tagName)){texts.push({rect:rect(el),runs:runs(el),tag:el.tagName,...s});return;}
for(const ch of el.children)walk(ch);
}
walk(root);const foot=[...document.querySelectorAll('.deck-footer')].find(e=>e.getBoundingClientRect().width);if(foot){walk(foot);const brand=foot.querySelector('.footer-brand');if(brand){const nd=[...brand.childNodes].find(n=>n.nodeType===3&&n.textContent.trim());if(nd){const range=document.createRange();range.selectNodeContents(nd);const r=range.getBoundingClientRect(),style=css(brand);texts.push({rect:{x:r.x-rr.x,y:r.y-rr.y,w:r.width,h:r.height},runs:[{text:nd.textContent.trim(),...style}],tag:'SPAN',...style});}}}
for(const im of images)if(!im.natural[0]||!im.natural[1])throw new Error('Unrendered image: '+im.src);
return {background:css(root).background,texts,boxes,images,tables};});
for(let j=0;j<data.images.length;j++){const im=data.images[j];const loc=p.locator('img').filter({visible:true});let target;for(let k=0;k<await loc.count();k++){if(await loc.nth(k).getAttribute('src')===new URL(im.src).pathname){target=loc.nth(k);break;}}if(target){im.path=`${out}/source/image-${n}-${j}.png`;await target.screenshot({path:im.path});}}
await p.screenshot({path:`${out}/source/slide-${String(n).padStart(2,'0')}.png`});slides.push(data);console.log(n,data.texts.length,data.tables.length,data.images.length);
}fs.writeFileSync(path.join(out,'source.json'),JSON.stringify(slides));await b.close();})().catch(error=>{console.error(error);process.exit(1);});
