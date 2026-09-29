import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const iconDir = path.join(root, 'public', 'icons')
const diagramDir = path.join(root, 'public', 'diagrams')

const C = { ink: '#17324D', muted: '#4F6479', blue: '#0B5FFF', pink: '#C50072', green: '#168054', gray: '#CCD6DF', pale: '#F3F7FB' }
const esc = s => String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;')
const geo = (x,y,w,h) => `<mxGeometry x="${x}" y="${y}" width="${w}" height="${h}" as="geometry"/>`

function make(kind) {
  const cells = []
  const put = s => cells.push(s)
  function text(id, value, x,y,w,h, {size=16,bold=false,color=C.ink,align='left'}={}) {
    put(`<mxCell id="${id}" value="${esc(value)}" style="text;html=1;strokeColor=none;fillColor=none;fontColor=${color};fontSize=${size};fontStyle=${bold?1:0};align=${align};verticalAlign=middle;whiteSpace=wrap;overflow=hidden;" vertex="1" parent="1">${geo(x,y,w,h)}</mxCell>`)
  }
  function box(id,x,y,w,h,stroke=C.gray) {
    put(`<mxCell id="${id}" value="" style="rounded=1;arcSize=12;whiteSpace=wrap;html=1;fillColor=#FFFFFF;strokeColor=${stroke};strokeWidth=1.7;" vertex="1" parent="1">${geo(x,y,w,h)}</mxCell>`)
  }
  function icon(id,file,x,y,size=38) {
    const svg=fs.readFileSync(path.join(iconDir,file),'utf8')
    const data=`data:image/svg+xml,${encodeURIComponent(svg)}`
    put(`<mxCell id="${id}" value="" style="shape=image;imageAspect=0;aspect=fixed;image=${data};" vertex="1" parent="1">${geo(x,y,size,size)}</mxCell>`)
  }
  function card(id,x,y,w,h,title,lines,iconFile,stroke=C.gray) {
    box(id,x,y,w,h,stroke)
    icon(`${id}-icon`,iconFile,x+13,y+10,38)
    text(`${id}-title`,title,x+57,y+9,w-67,41,{size:18,bold:true})
    lines.forEach((line,i)=>text(`${id}-line-${i}`,line,x+14,y+57+i*25,w-28,27,{size:15,color:C.muted}))
  }
  function arrow(id,source,target,color=C.blue,vertical=false) {
    const anchors=vertical?'exitX=0.5;exitY=1;entryX=0.5;entryY=0;':'exitX=1;exitY=0.5;entryX=0;entryY=0.5;'
    put(`<mxCell id="${id}" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=1;html=1;endArrow=block;endFill=1;strokeColor=${color};strokeWidth=2.6;${anchors}" edge="1" parent="1" source="${source}" target="${target}"><mxGeometry relative="1" as="geometry"/></mxCell>`)
  }
  text('publish-label','1  PUBLISH APPROVED CONTENT',16,0,600,26,{size:17,bold:true,color:C.pink})
  text('query-label','2  ANSWER A WEBSITE QUESTION',16,223,600,26,{size:17,bold:true,color:C.blue})

  if (kind==='custom') {
    const top=[
      ['sources',16,33,251,159,'Approved sources',['Drupal Insights','eCommerce + business'], 'IntegrationServices-512-color.svg',C.pink],
      ['snapshot',289,33,251,159,'ONE publishing job',['Approve + version','Cloud Storage snapshot'],'Cloud_Storage-512-color.svg',C.blue],
      ['prepare',562,33,287,159,'ONE preparation',['Document AI OCR for scans','Parse + chunk','Vertex AI embeddings'],'VertexAI-512-color.svg',C.blue],
      ['index',871,33,313,159,'Agent Retrieval index',['Data Objects + metadata','Google managed search store'],'Databases-512-color.svg',C.green],
    ]
    top.forEach(args=>card(...args))
    ;[['sources','snapshot'],['snapshot','prepare'],['prepare','index']].forEach(([a,b],i)=>arrow(`pub-${i}`,a,b))
    const bottom=[
      ['site',16,257,172,153,'ONE site',['Question'],'WebMobile-512-color.svg',C.pink],
      ['edge',206,257,170,153,'Cloudflare',['WAF + Turnstile'],'Cloudflare.svg',C.blue],
      ['api',394,257,192,153,'GKE API',['Verify + limit','Choose sources'],'GKE-512-color.svg',C.blue],
      ['search',604,257,228,153,'Agent Retrieval',['Hybrid search','VertexRanker'],'Databases-512-color.svg',C.green],
      ['gemini',850,257,140,153,'Gemini',['Draft answer'],'VertexAI-512-color.svg',C.blue],
      ['check',1008,257,176,153,'GKE checks',['Model Armor','Citations + link','ONE answer'],'SecurityIdentity-512-color.svg',C.pink],
    ]
    bottom.forEach(args=>card(...args))
    ;[['site','edge'],['edge','api'],['api','search'],['search','gemini'],['gemini','check']].forEach(([a,b],i)=>arrow(`ask-${i}`,a,b))
    arrow('corpus-query','index','search',C.green,true)
    text('owner','ONE builds ingestion and answer logic; Agent Retrieval provides the managed search index and reranker.',16,425,1168,33,{size:18,bold:true})
  } else {
    const top=[
      ['sources',16,33,251,159,'Approved sources',['Drupal Insights','eCommerce + business'],'IntegrationServices-512-color.svg',C.pink],
      ['snapshot',289,33,251,159,'ONE publishing job',['Approve + version','Cloud Storage snapshot','Document AI OCR for scans'],'Cloud_Storage-512-color.svg',C.blue],
      ['import',562,33,287,159,'RAG Engine import',['Import approved files','Parse + chunk'],'VertexAI-512-color.svg',C.green],
      ['corpus',871,33,313,159,'RAG Engine corpus',['Embed + index passages','Managed retrieval store'],'Databases-512-color.svg',C.green],
    ]
    top.forEach(args=>card(...args))
    ;[['sources','snapshot'],['snapshot','import'],['import','corpus']].forEach(([a,b],i)=>arrow(`pub-${i}`,a,b))
    const bottom=[
      ['site',16,257,172,153,'ONE site',['Question'],'WebMobile-512-color.svg',C.pink],
      ['edge',206,257,170,153,'Cloudflare',['WAF + Turnstile'],'Cloudflare.svg',C.blue],
      ['api',394,257,192,153,'GKE API',['Verify + limit','Choose corpus'],'GKE-512-color.svg',C.blue],
      ['search',604,257,228,153,'RAG Engine',['Retrieve passages','Ranking API option'],'VertexAI-512-color.svg',C.green],
      ['gemini',850,257,140,153,'Gemini',['Draft answer'],'VertexAI-512-color.svg',C.blue],
      ['check',1008,257,176,153,'GKE checks',['Model Armor','Citations + link','ONE answer'],'SecurityIdentity-512-color.svg',C.pink],
    ]
    bottom.forEach(args=>card(...args))
    ;[['site','edge'],['edge','api'],['api','search'],['search','gemini'],['gemini','check']].forEach(([a,b],i)=>arrow(`ask-${i}`,a,b))
    arrow('corpus-query','corpus','search',C.green,true)
    text('owner','RAG Engine manages import through retrieval; ONE still owns approval, the GKE API and answer checks.',16,425,1168,33,{size:18,bold:true})
  }
  const xml=`<?xml version="1.0" encoding="UTF-8"?>\n<mxfile host="Electron" modified="2026-09-28T00:00:00.000Z" agent="Codex" version="27.0.9"><diagram id="ask-one-${kind}-architecture" name="${kind==='custom'?'Custom flow':'Direct RAG Engine'}"><mxGraphModel dx="1200" dy="470" grid="0" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" background="#FFFFFF" adaptiveColors="none" pageScale="1" pageWidth="1200" pageHeight="470" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/>${cells.join('')}</root></mxGraphModel></diagram></mxfile>`
  const output=path.join(diagramDir,`ask-one-poc-${kind}-architecture.drawio`)
  fs.writeFileSync(output,xml)
  process.stdout.write(`${output}\n`)
}

make('custom')
make('rag-engine')
