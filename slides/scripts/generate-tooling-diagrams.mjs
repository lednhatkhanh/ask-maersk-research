import fs from 'node:fs';
import {execFileSync} from 'node:child_process';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const iconFiles={browser:'WebMobile-512-color.svg',app:'GKE-512-color.svg',telemetry:'tooling/workflow.svg',gcp:'Observability-512-color.svg',phoenix:'tooling/chart.svg',tests:'tooling/clipboard-check.svg',candidate:'VertexAI-512-color.svg',attacks:'tooling/shield-check.svg',ragas:'tooling/clipboard-check.svg',reports:'tooling/shield-check.svg',review:'tooling/clipboard-check.svg'};
// Match the original light-base palette; draw.io exports adaptive light/dark colours.
const accents={browser:'#00a6a6',app:'#0B5FFF',telemetry:'#2E8B57',gcp:'#0B5FFF',phoenix:'#00a6a6',tests:'#2E8B57',candidate:'#0B5FFF',attacks:'#FF5A5F',ragas:'#2E8B57',reports:'#FF5A5F',review:'#0B5FFF'};
const esc=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
function make(name,nodes,edges){let cells='<mxCell id="0"/><mxCell id="1" parent="0"/>';
for(const [id,label,x,y,w,h,accent=false]of nodes){cells+=`<mxCell id="${id}" value="${esc(label.replace('<br>', '</font><br><font color="#5D7388">').replace('<b>', '<font color="#17324D"><b>')+'</font>')}" style="rounded=1;arcSize=16;whiteSpace=wrap;html=1;fontFamily=Arial;fontSize=19;spacing=10;spacingLeft=60;align=left;fillColor=#FFFFFF;strokeColor=${accents[id]};fontColor=#17324D;strokeWidth=2;" vertex="1" parent="1"><mxGeometry x="${x}" y="${y}" width="${w}" height="${h}" as="geometry"/></mxCell>`;
const svg=fs.readFileSync(path.join(root,'public/icons',iconFiles[id]),'utf8').replaceAll('currentColor',accents[id]);
const uri='data:image/svg+xml,'+encodeURIComponent(svg);
cells+=`<mxCell id="icon-${id}" value="" style="shape=image;html=1;imageAspect=1;aspect=fixed;image=${esc(uri)};" vertex="1" parent="${id}"><mxGeometry x="14" y="${h/2-19}" width="38" height="38" as="geometry"/></mxCell>`;
}
for(const [i,[a,b,label='']]of edges.entries())cells+=`<mxCell id="e${i}" value="${esc(label)}" style="edgeStyle=orthogonalEdgeStyle;rounded=1;html=1;fontFamily=Arial;fontSize=17;fontColor=#5D7388;labelBackgroundColor=#FFFFFF;strokeColor=${accents[a]};strokeWidth=2;endArrow=block;endFill=1;" edge="1" parent="1" source="${a}" target="${b}"><mxGeometry relative="1" as="geometry"/></mxCell>`;
const source='/tmp/'+name+'.drawio';
fs.writeFileSync(source,`<mxfile><diagram name="${name}"><mxGraphModel page="0" background="#FFFFFF"><root>${cells}</root></mxGraphModel></diagram></mxfile>`);
execFileSync('/Applications/draw.io.app/Contents/MacOS/draw.io',['-x','-f','svg','-e','-b','15','-o',path.join(root,'public/diagrams',name+'.drawio.svg'),source],{stdio:'inherit'});
fs.unlinkSync(source);
}
make('ask-one-tooling-traces',[
['browser','<b>Customer browser</b><br>Visible answer timing',20,20,260,105],
['app','<b>Ask ONE on GKE</b><br>Vertex AI + Model Armor calls',380,20,290,105,true],
['telemetry','<b>Protected event data</b><br>Request IDs, sensitive data removed',380,195,290,105],
['gcp','<b>Cloud Trace</b><br>Cloud Monitoring + Logging',20,365,290,105],
['phoenix','<b>Phoenix in GCP</b><br>Answer traces and experiments',740,365,310,105,true]
],[['browser','app','question'],['app','telemetry','record events'],['telemetry','gcp','operational signals'],['telemetry','phoenix','answer trace details']]);
make('ask-one-tooling-evaluation',[
['tests','<b>Reviewed test set</b><br>Questions and expected evidence',20,20,280,105],
['candidate','<b>Ask ONE test version</b><br>Vertex AI + Model Armor',390,20,300,105,true],
['attacks','<b>Promptfoo</b><br>Simulated attack inputs',790,20,280,105],
['ragas','<b>Phoenix + Ragas</b><br>Quality evaluation and experiments',390,190,300,105],
['reports','<b>Security test reports</b><br>Failures and retest evidence',790,190,280,105],
['review','<b>Review before release</b><br>Human review of quality and security findings',390,365,680,105,true]
],[['tests','candidate'],['attacks','candidate','test'],['candidate','ragas','answers + passages'],['attacks','reports','results'],['ragas','review','quality results'],['reports','review']]);
