import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const icons = path.join(root, 'public', 'icons')
const output = path.join(root, 'public', 'diagrams', 'ask-one-poc-security-flow.drawio')

const color = {
  ink: '#17324D',
  muted: '#50677D',
  line: '#C7D1DA',
  blue: '#0B5FFF',
  magenta: '#C50072',
  orange: '#F38020',
  green: '#2E8B57',
}

const escape = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')

const geometry = (x, y, width, height) => `<mxGeometry x="${x}" y="${y}" width="${width}" height="${height}" as="geometry"/>`
const cells = []

function box(id, x, y, width, height, stroke) {
  cells.push(`<mxCell id="${id}" value="" style="rounded=1;arcSize=12;whiteSpace=wrap;html=1;fillColor=#FFFFFF;strokeColor=${stroke};strokeWidth=1.7;" vertex="1" parent="1">${geometry(x, y, width, height)}</mxCell>`)
}

function label(id, value, x, y, width, height, options = {}) {
  const style = [
    'text', 'html=1', 'strokeColor=none', 'fillColor=none',
    `fontColor=${options.color ?? color.ink}`,
    `fontSize=${options.size ?? 17}`,
    `fontStyle=${options.bold ? 1 : 0}`,
    'align=left', 'verticalAlign=middle', 'whiteSpace=wrap', 'overflow=hidden',
  ].join(';')
  cells.push(`<mxCell id="${id}" value="${escape(value)}" style="${style}" vertex="1" parent="1">${geometry(x, y, width, height)}</mxCell>`)
}

function icon(id, file, x, y) {
  const svg = fs.readFileSync(path.join(icons, file), 'utf8')
  const data = `data:image/svg+xml,${encodeURIComponent(svg)}`
  cells.push(`<mxCell id="${id}" value="" style="shape=image;imageAspect=0;aspect=fixed;image=${data};" vertex="1" parent="1">${geometry(x, y, 36, 36)}</mxCell>`)
}

function arrow(id, source, target, stroke) {
  cells.push(`<mxCell id="${id}" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=1;html=1;endArrow=block;endFill=1;strokeColor=${stroke};strokeWidth=2.4;exitX=1;exitY=0.5;entryX=0;entryY=0.5;" edge="1" parent="1" source="${source}" target="${target}"><mxGeometry relative="1" as="geometry"/></mxCell>`)
}

const cards = [
  { id: 'edge', x: 16, width: 208, title: 'Cloudflare', icon: 'Cloudflare.svg', stroke: color.orange,
    lines: ['WAF filters traffic', 'Turnstile issues token', 'Origin is restricted'] },
  { id: 'verify', x: 252, width: 208, title: 'GKE verification', icon: 'GKE-512-color.svg', stroke: color.blue,
    lines: ['Server calls Siteverify', 'Reject expiry or replay', 'Validate request shape'] },
  { id: 'admit', x: 488, width: 220, title: 'GKE admission', icon: 'Databases-512-color.svg', stroke: color.blue,
    lines: ['Memorystore counters', 'Session/IP burst', 'Rolling hour/day', 'Active, token/retry, spend'] },
  { id: 'model', x: 736, width: 220, title: 'Model Armor', icon: 'SecurityIdentity-512-color.svg', stroke: color.magenta,
    lines: ['Screen prompt + evidence', 'Call Gemini', 'Screen model response', 'GKE enforces verdicts'] },
  { id: 'answer', x: 984, width: 200, title: 'ONE validation', icon: 'ManagementTools-512-color.svg', stroke: color.green,
    lines: ['Check source version', 'Verify cited claims', 'Check service link', 'Safe fallback on failure'] },
]

label('admission-heading', 'REQUEST ADMISSION', 16, 0, 692, 24, { color: color.blue, size: 15, bold: true })
label('answer-heading', 'ANSWER SAFETY', 736, 0, 448, 24, { color: color.magenta, size: 15, bold: true })
for (const card of cards) {
  box(`${card.id}-box`, card.x, 31, card.width, 250, card.stroke)
  icon(`${card.id}-icon`, card.icon, card.x + 13, 44)
  label(`${card.id}-title`, card.title, card.x + 57, 43, card.width - 65, 41, { size: 18, bold: true })
  const lineHeight = card.lines.length === 4 ? 41 : 52
  card.lines.forEach((line, index) => {
    label(`${card.id}-line-${index}`, line, card.x + 15, 94 + index * lineHeight, card.width - 30, lineHeight, { size: 17, color: color.muted })
  })
}
for (let index = 0; index < cards.length - 1; index++) {
  arrow(`flow-${index}`, `${cards[index].id}-box`, `${cards[index + 1].id}-box`, color.blue)
}
label('source-rule', 'Only approved public source versions enter retrieval. Retrieved text is treated as data, never as instructions.', 16, 301, 1168, 35, { size: 17, bold: true })

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<mxfile host="Electron" modified="2026-09-28T00:00:00.000Z" agent="Codex" version="27.0.9">
  <diagram id="ask-one-poc-security" name="POC request security">
    <mxGraphModel dx="1200" dy="340" grid="0" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" background="#FFFFFF" adaptiveColors="none" pageScale="1" pageWidth="1200" pageHeight="350" math="0" shadow="0">
      <root><mxCell id="0"/><mxCell id="1" parent="0"/>${cells.join('')}</root>
    </mxGraphModel>
  </diagram>
</mxfile>`
fs.writeFileSync(output, xml)
process.stdout.write(`${output}\n`)
