import fs from 'node:fs'
import { execFileSync } from 'node:child_process'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const diagramDir = path.join(root, 'public/diagrams')
const iconFiles = {
  browser: 'WebMobile-512-color.svg', app: 'GKE-512-color.svg', telemetry: 'tooling/workflow.svg',
  gcp: 'Observability-512-color.svg', tests: 'tooling/clipboard-check.svg',
  candidate: 'VertexAI-512-color.svg', attacks: 'tooling/shield-check.svg',
  checks: 'tooling/clipboard-check.svg', reports: 'Observability-512-color.svg',
  review: 'tooling/clipboard-check.svg',
}
const accents = {
  browser: '#00A6A6', app: '#0B5FFF', telemetry: '#2E8B57', gcp: '#0B5FFF',
  tests: '#2E8B57', candidate: '#0B5FFF', attacks: '#FF5A5F', checks: '#2E8B57',
  reports: '#0B5FFF', review: '#0B5FFF',
}
const escapeXml = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;')

function make(name, nodes, edges) {
  let cells = '<mxCell id="0"/><mxCell id="1" parent="0"/>'
  for (const [id, title, detail, x, y, width, height] of nodes) {
    const label = `<b>${title}</b><br><font color="#5D7388">${detail}</font>`
    cells += `<mxCell id="${id}" value="${escapeXml(label)}" style="rounded=1;arcSize=16;whiteSpace=wrap;html=1;fontFamily=Arial;fontSize=19;spacing=10;spacingLeft=60;align=left;fillColor=#FFFFFF;strokeColor=${accents[id]};fontColor=#17324D;strokeWidth=2;" vertex="1" parent="1"><mxGeometry x="${x}" y="${y}" width="${width}" height="${height}" as="geometry"/></mxCell>`
    const svg = fs.readFileSync(path.join(root, 'public/icons', iconFiles[id]), 'utf8').replaceAll('currentColor', accents[id])
    const uri = 'data:image/svg+xml,' + encodeURIComponent(svg)
    cells += `<mxCell id="icon-${id}" value="" style="shape=image;html=1;imageAspect=1;aspect=fixed;image=${escapeXml(uri)};" vertex="1" parent="${id}"><mxGeometry x="14" y="${height / 2 - 19}" width="38" height="38" as="geometry"/></mxCell>`
  }
  for (const [i, [from, to, label = '']] of edges.entries()) {
    cells += `<mxCell id="e${i}" value="${escapeXml(label)}" style="edgeStyle=orthogonalEdgeStyle;rounded=1;html=1;fontFamily=Arial;fontSize=17;fontColor=#5D7388;labelBackgroundColor=#FFFFFF;strokeColor=${accents[from]};strokeWidth=2;endArrow=block;endFill=1;" edge="1" parent="1" source="${from}" target="${to}"><mxGeometry relative="1" as="geometry"/></mxCell>`
  }
  const drawio = path.join(diagramDir, `${name}.drawio`)
  const output = `${drawio}.svg`
  fs.writeFileSync(drawio, `<mxfile><diagram name="${name}"><mxGraphModel page="0" background="#FFFFFF"><root>${cells}</root></mxGraphModel></diagram></mxfile>`)
  execFileSync('/Applications/draw.io.app/Contents/MacOS/draw.io', ['-x', '-f', 'svg', '-e', '-b', '15', '-o', output, drawio], { stdio: 'inherit' })
}

make('ask-one-tooling-traces', [
  ['browser', 'Customer browser', 'Visible answer timing', 20, 20, 270, 105],
  ['app', 'Ask ONE on GKE', 'Retrieval, model and answer checks', 385, 20, 340, 105],
  ['telemetry', 'Protected telemetry', 'Shared ID; redact sensitive data', 385, 195, 340, 105],
  ['gcp', 'Cloud Observability', 'Trace, Logging and Monitoring', 385, 365, 340, 105],
], [['browser', 'app', 'question'], ['app', 'telemetry', 'spans + events'], ['telemetry', 'gcp', 'health + timing']])

make('ask-one-tooling-evaluation', [
  ['tests', 'Reviewed cases', 'Questions, sources and expected behavior', 20, 20, 300, 105],
  ['candidate', 'Ask ONE test version', 'Gemini, retrieval and app checks', 395, 20, 320, 105],
  ['attacks', 'Security cases', 'Optional Promptfoo tests', 790, 20, 300, 105],
  ['checks', 'Deterministic checks', 'Source IDs, withdrawal and citations', 20, 195, 300, 105],
  ['reports', 'Google evaluation', 'Saved-case scoring if region approved', 395, 195, 320, 105],
  ['review', 'Human release review', 'Answer quality, security and gaps', 395, 365, 400, 105],
], [['tests', 'candidate'], ['attacks', 'candidate', 'test'], ['tests', 'checks'], ['candidate', 'reports', 'saved cases'], ['reports', 'review']])
