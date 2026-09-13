import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const scriptDir = path.dirname(fileURLToPath(import.meta.url))
const projectDir = path.resolve(scriptDir, '..')
const iconDir = path.join(projectDir, 'public', 'icons')
const outputDir = path.join(projectDir, 'public', 'diagrams')

const palette = {
  navy: '#051C2C',
  blue: '#0B5FFF',
  cyan: '#00A6A6',
  coral: '#FF5A5F',
  amber: '#F6B73C',
  green: '#2E8B57',
  ink: '#17324D',
  muted: '#5D7388',
  line: '#B8C6D1',
  cloud: '#F3F7FA',
  white: '#FFFFFF',
}

const escapeXml = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')

const icons = new Map()

function iconUri(file) {
  if (!icons.has(file)) {
    const svg = fs.readFileSync(path.join(iconDir, file), 'utf8')
    icons.set(file, `data:image/svg+xml,${encodeURIComponent(svg)}`)
  }
  return icons.get(file)
}

function geometry(x, y, width, height, relative = false) {
  return `<mxGeometry x="${x}" y="${y}" width="${width}" height="${height}"${relative ? ' relative="1"' : ''} as="geometry" />`
}

function rect(id, label, x, y, width, height, options = {}) {
  const {
    fill = palette.white,
    stroke = palette.line,
    font = palette.ink,
    size = 17,
    bold = false,
    rounded = 16,
    align = 'center',
    valign = 'middle',
    dashed = false,
  } = options
  const style = [
    `rounded=${rounded ? 1 : 0}`,
    `arcSize=${rounded}`,
    'whiteSpace=wrap',
    'html=1',
    `fillColor=${fill}`,
    `strokeColor=${stroke}`,
    'strokeWidth=1.5',
    `fontColor=${font}`,
    `fontSize=${size}`,
    `fontStyle=${bold ? 1 : 0}`,
    `align=${align}`,
    `verticalAlign=${valign}`,
    'spacing=10',
    `dashed=${dashed ? 1 : 0}`,
  ].join(';')
  return `<mxCell id="${id}" value="${escapeXml(label)}" style="${style}" vertex="1" parent="1">${geometry(x, y, width, height)}</mxCell>`
}

function text(id, label, x, y, width, height, options = {}) {
  const {
    font = palette.ink,
    size = 17,
    bold = false,
    align = 'center',
    valign = 'middle',
  } = options
  const style = [
    'text',
    'html=1',
    'strokeColor=none',
    'fillColor=none',
    `fontColor=${font}`,
    `fontSize=${size}`,
    `fontStyle=${bold ? 1 : 0}`,
    `align=${align}`,
    `verticalAlign=${valign}`,
    'whiteSpace=wrap',
    'overflow=hidden',
  ].join(';')
  return `<mxCell id="${id}" value="${escapeXml(label)}" style="${style}" vertex="1" parent="1">${geometry(x, y, width, height)}</mxCell>`
}

function image(id, file, x, y, width = 54, height = 54) {
  const style = [
    'shape=image',
    'verticalLabelPosition=bottom',
    'verticalAlign=top',
    'imageAspect=0',
    'aspect=fixed',
    `image=${iconUri(file)}`,
  ].join(';')
  return `<mxCell id="${id}" value="" style="${style}" vertex="1" parent="1">${geometry(x, y, width, height)}</mxCell>`
}

function service(id, file, title, detail, x, y, width = 175, height = 104, options = {}) {
  height = Math.max(height, 135)
  const fill = options.fill ?? palette.white
  const stroke = options.stroke ?? palette.line
  return [
    rect(`${id}-box`, '', x, y, width, height, { fill, stroke, rounded: 14, dashed: options.dashed ?? false }),
    image(`${id}-icon`, file, x + 14, y + 12, 32, 32),
    text(`${id}-title`, title, x + 54, y + 5, width - 66, 40, { size: 16, bold: true, align: 'left' }),
    text(`${id}-detail`, detail, x + 14, y + 64, width - 28, height - 64, { size: 16, font: palette.muted, align: 'left', valign: 'top' }),
  ].join('')
}

function edge(id, source, target, label = '', options = {}) {
  const color = options.color ?? palette.blue
  const dashed = options.dashed ?? false
  const width = options.width ?? 2
  const style = [
    'edgeStyle=orthogonalEdgeStyle',
    'rounded=1',
    'orthogonalLoop=1',
    'jettySize=auto',
    'html=1',
    'endArrow=block',
    'endFill=1',
    ...(options.both ? ['startArrow=block', 'startFill=1'] : []),
    `strokeColor=${color}`,
    `strokeWidth=${width}`,
    `dashed=${dashed ? 1 : 0}`,
    `fontColor=${palette.muted}`,
    'fontSize=12',
    'labelBackgroundColor=#FFFFFF',
  ]
  if (options.exitX !== undefined) style.push(`exitX=${options.exitX}`, `exitY=${options.exitY ?? 1}`, 'exitDx=0', 'exitDy=0')
  if (options.entryX !== undefined) style.push(`entryX=${options.entryX}`, `entryY=${options.entryY ?? 0}`, 'entryDx=0', 'entryDy=0')
  const serializedStyle = style.join(';')
  const points = options.points?.length
    ? `<Array as="points">${options.points.map((point) => `<mxPoint x="${point.x}" y="${point.y}" />`).join('')}</Array>`
    : ''
  return `<mxCell id="${id}" value="${escapeXml(label)}" style="${serializedStyle}" edge="1" parent="1" source="${source}" target="${target}"><mxGeometry relative="1" as="geometry">${points}</mxGeometry></mxCell>`
}

function diagramXml(name, width, height, cells) {
  const orderedCells = [...cells].sort((left, right) => {
    const leftIsEdge = left.includes(' edge="1"')
    const rightIsEdge = right.includes(' edge="1"')
    if (leftIsEdge === rightIsEdge) return 0
    return leftIsEdge ? -1 : 1
  })
  return `<?xml version="1.0" encoding="UTF-8"?>
<mxfile host="Electron" modified="2026-09-06T00:00:00.000Z" agent="Codex" version="27.0.9">
  <diagram id="${escapeXml(name.toLowerCase().replaceAll(' ', '-'))}" name="${escapeXml(name)}">
    <mxGraphModel dx="${width}" dy="${height}" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="${width}" pageHeight="${height}" math="0" shadow="0" background="#FFFFFF" adaptiveColors="auto">
      <root>
        <mxCell id="0" />
        <mxCell id="1" parent="0" />
        ${orderedCells.join('\n        ').replace(/(<mxGeometry|<mxPoint)([^>]+)/g, (match) => match.includes('relative="1"') ? match : match.replace(/\b(y)="([\d.]+)"/g, (_, key, value) => `${key}="${Number(value) * (name === 'Hub operating model' ? 1 : 0.78)}"`))}
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>
`
}

function architecture() {
  const cells = []
  cells.push(text('title', 'Ask ONE on our GKE · managed AI through Vertex AI', 40, 20, 1120, 44, { size: 25, bold: true, align: 'left', font: palette.navy }))
  cells.push(text('subtitle', 'Proposed design · Discovery and the PoC will validate requirements, access, capacity and cost', 40, 62, 1120, 28, { size: 14, align: 'left', font: palette.muted }))
  cells.push(text('request-label', 'CUSTOMER REQUEST / CHECKED RESPONSE', 40, 104, 560, 24, { size: 12, bold: true, align: 'left', font: palette.blue }))
  cells.push(service('web', 'WebMobile-512-color.svg', 'Customer', 'Browser / ONE website', 40, 145, 215, 115, { stroke: palette.cyan }))
  cells.push(service('edge', 'Cloudflare.svg', 'Cloudflare edge', 'Proposed WAF / CDN / DDoS controls', 340, 145, 215, 115, { stroke: '#F38020' }))
  cells.push(service('gke', 'GKE-512-color.svg', 'Our GKE in GCP', 'Web app and Node.js API; source access and answer checks', 640, 145, 235, 115, { stroke: palette.blue }))
  cells.push(service('vertex', 'VertexAI-512-color.svg', 'Vertex AI', 'Managed Gemini API; outside the GKE workload', 940, 145, 220, 115, { stroke: palette.cyan }))
  cells.push(text('knowledge-label', 'GOVERNED KNOWLEDGE · PROPOSED STORAGE AND SCREENING OPTIONS', 40, 314, 1000, 24, { size: 12, bold: true, align: 'left', font: palette.green }))
  cells.push(service('sources', 'WebMobile-512-color.svg', 'Approved sources', 'CMS + manuals + policies + document libraries', 40, 365, 235, 120, { stroke: palette.green }))
  cells.push(service('ingest', 'IntegrationServices-512-color.svg', 'Governed ingestion', 'Stage, validate, evaluate and approve before release', 340, 365, 235, 120, { stroke: palette.amber }))
  cells.push(service('stores', 'CloudSQL-512-color.svg', 'Knowledge stores', 'Source versions in Cloud Storage; candidate Cloud SQL/pgvector retrieval', 640, 365, 235, 120, { stroke: palette.green }))
  cells.push(service('armor', 'SecurityIdentity-512-color.svg', 'Model Armor', 'Proposed screening service; the app enforces its verdicts', 940, 365, 220, 120, { stroke: palette.coral }))
  cells.push(text('api-label', 'CONDITIONAL LIVE LOOKUPS · OPERATING CONTROLS', 40, 535, 700, 24, { size: 12, bold: true, align: 'left', font: palette.coral }))
  cells.push(service('ecom', 'IntegrationServices-512-color.svg', 'ONE live APIs', 'Shipment / schedule access only if justified and authorized', 40, 590, 235, 120, { stroke: palette.coral, dashed: true }))
  cells.push(service('policy', 'SecurityIdentity-512-color.svg', 'API access in GKE', 'Identity, allowed fields, quotas and audit; no agent required', 340, 590, 235, 120, { stroke: palette.coral, dashed: true }))
  cells.push(service('observe', 'Observability-512-color.svg', 'Service observability', 'Traces, quality, security alerts, latency and cost; protected logs', 640, 590, 235, 120, { stroke: palette.blue }))
  cells.push(rect('ops-note', 'OPERATING REQUIREMENTS\nVersion-aware cache; updates / removal; alert owners and rollback', 940, 590, 220, 120, { size: 14, font: palette.muted, dashed: true }))
  cells.push(edge('e1', 'web-box', 'edge-box', 'HTTPS', { both: true }))
  cells.push(edge('e2', 'edge-box', 'gke-box', '', { both: true }))
  cells.push(edge('e3', 'gke-box', 'vertex-box', 'model API', { both: true }))
  cells.push(edge('e4', 'sources-box', 'ingest-box', '', { color: palette.green }))
  cells.push(edge('e5', 'ingest-box', 'stores-box', '', { color: palette.green }))
  cells.push(edge('e6', 'gke-box', 'stores-box', 'retrieve', { color: palette.green, both: true }))
  cells.push(edge('e7', 'gke-box', 'armor-box', 'screening API', { color: palette.coral, both: true, exitX: 0.85, exitY: 1, entryX: 0, entryY: 0.5, points: [{ x: 840, y: 290 }, { x: 910, y: 290 }, { x: 910, y: 425 }] }))
  cells.push(edge('e8', 'policy-box', 'ecom-box', 'read only', { color: palette.coral, dashed: true, both: true }))
  cells.push(edge('e9', 'gke-box', 'policy-box', '', { color: palette.coral, dashed: true, both: true, exitX: 0, exitY: 0.8, entryX: 0.5, entryY: 0, points: [{ x: 610, y: 237 }, { x: 610, y: 550 }, { x: 457, y: 550 }] }))
  cells.push(edge('e10', 'stores-box', 'observe-box', 'source events', { color: palette.blue, dashed: true }))
  cells.push(text('trace-note', 'Observability correlates application, retrieval, model and security events across the service.', 40, 820, 1120, 24, { size: 14, font: palette.muted }))
  return diagramXml('Architecture', 1200, 800, cells)
}

function securityChain() {
  const cells = []
  cells.push(text('title', 'Proposed security flow · enforce controls in the application', 40, 20, 1120, 44, { size: 25, bold: true, align: 'left', font: palette.navy }))
  cells.push(text('subtitle', 'Any failed policy check stops the answer; fallback preserves access restrictions. Monitoring covers every stage.', 40, 62, 1120, 28, { size: 14, align: 'left', font: palette.muted }))

  const items = [
    ['s1', 'Cloudflare.svg', '1 · Cloudflare', 'DNS/CDN · WAF · DDoS · rate limit', '#F38020'],
    ['s2', 'GKE-512-color.svg', '2 · Authorize', 'identity / audience · schema · quotas', palette.blue],
    ['s3', 'SecurityIdentity-512-color.svg', '3 · Screen input', 'Check malicious instructions and sensitive data; proposed Model Armor', palette.coral],
    ['s4', 'CloudSQL-512-color.svg', '4 · Retrieve', 'approved sources; enforce audience and version', palette.green],
    ['s5', 'VertexAI-512-color.svg', '5 · Generate', 'Vertex AI / Gemini; instruct grounding in sources', palette.cyan],
    ['s6', 'ManagementTools-512-color.svg', '6 · Check answer', 'source support · citation validity · refusal', palette.amber],
    ['s7', 'SecurityIdentity-512-color.svg', '7 · Screen output', 'leakage · harmful content', palette.coral],
    ['s8', 'Observability-512-color.svg', '8 · Return answer', 'checked answer + citations; record outcome', palette.blue],
  ]

  items.forEach((item, index) => {
    const col = index % 4
    const row = Math.floor(index / 4)
    const x = row === 0 ? 45 + col * 285 : 45 + (3 - col) * 285
    const y = 150 + row * 230
    cells.push(service(item[0], item[1], item[2], item[3], x, y, 240, 120, { stroke: item[4] }))
    if (index < items.length - 1 && index !== 3) {
      cells.push(edge(`e${index}`, `${item[0]}-box`, `${items[index + 1][0]}-box`, '', { color: item[4] }))
    }
  })
  cells.push(edge('turn', 's4-box', 's5-box', '', { color: palette.green }))
  cells.push(rect('fallback', 'SAFE FALLBACK\nrefuse / support / permitted search', 390, 620, 420, 82, { fill: '#FFF3F1', stroke: palette.coral, font: palette.coral, size: 18, bold: true }))
  cells.push(edge('fail1', 's3-box', 'fallback', 'block', { color: palette.coral, dashed: true }))
  cells.push(edge('fail2', 's6-box', 'fallback', 'unsupported', { color: palette.coral, dashed: true }))
  cells.push(edge('fail3', 's7-box', 'fallback', 'block', { color: palette.coral, dashed: true }))

  cells.push(text('monitor', 'Across all stages: redacted traces, denied access, suspicious activity and alerts to incident owners.', 40, 790, 1120, 28, { size: 14, font: palette.muted }))
  return diagramXml('Security chain', 1200, 780, cells)
}

function knowledgeQuality() {
  const cells = []
  cells.push(text('title', 'Proposed knowledge lifecycle · evaluate before publishing', 40, 20, 1120, 44, { size: 25, bold: true, align: 'left', font: palette.navy }))
  cells.push(text('subtitle', 'Keep changes staged until quality, security and owner review approve release. Feedback returns through testing.', 40, 62, 1120, 28, { size: 14, align: 'left', font: palette.muted }))
  const nodes = [
    ['source', 'WebMobile-512-color.svg', '1 · Register', 'CMS + documents; owners, permissions and versions', 40, 135, palette.blue],
    ['stage', 'Cloud_Storage-512-color.svg', '2 · Stage + validate', 'Quarantine; malware, sensitive data and extraction checks', 330, 135, palette.coral],
    ['process', 'IntegrationServices-512-color.svg', '3 · Prepare content', 'Split into passages, embed and index in staging; retain permissions', 620, 135, palette.amber],
    ['review', 'ManagementTools-512-color.svg', '4 · Owner review', 'Content, audience, versions and retrieval samples', 910, 135, palette.blue],
    ['answer', 'VertexAI-512-color.svg', '5 · Test answers', 'Staged sources + candidate prompt / Gemini model', 910, 365, palette.cyan],
    ['evaluate', 'ManagementTools-512-color.svg', '6 · Evaluate', 'Proposed Phoenix + Ragas; human review and security tests', 620, 365, palette.blue],
    ['gate', 'SecurityIdentity-512-color.svg', '7 · Release decision', 'Owner reviews evidence; approve, remediate or stop', 330, 365, palette.green],
    ['publish', 'CloudSQL-512-color.svg', '8 · Publish', 'Approved version; update / remove; invalidate cache; rollback', 40, 365, palette.green],
    ['hub', 'ManagementTools-512-color.svg', 'Review + improve', 'Feedback and incidents → owner → approved fix → retest', 40, 610, palette.blue],
    ['golden', 'ManagementTools-512-color.svg', 'Reviewed test set', 'Questions, sources, expected answers / refusals; size agreed in discovery', 620, 610, palette.amber],
  ]
  for (const [id, icon, title, detail, x, y, stroke] of nodes) cells.push(service(id, icon, title, detail, x, y, 245, 135, { stroke }))
  for (const [i, from, to] of [[1,'source','stage'],[2,'stage','process'],[3,'process','review'],[4,'review','answer'],[5,'answer','evaluate'],[6,'evaluate','gate'],[7,'gate','publish']]) cells.push(edge(`flow${i}`, `${from}-box`, `${to}-box`, '', { color: palette.blue }))
  cells.push(edge('feedback', 'publish-box', 'hub-box', 'feedback / incidents', { color: palette.blue, dashed: true }))
  cells.push(edge('remediate', 'gate-box', 'hub-box', 'remediate', { color: palette.coral, dashed: true, exitX: 0.5, exitY: 1, entryX: 1, entryY: 0.25, points: [{ x: 452, y: 644 }] }))
  cells.push(edge('fix', 'hub-box', 'source-box', '', { color: palette.coral, dashed: true, exitX: 0, exitY: 0.5, entryX: 0, entryY: 0.5, points: [{ x: 15, y: 677 }, { x: 15, y: 202 }] }))
  cells.push(edge('reference', 'golden-box', 'evaluate-box', 'expected outcomes', { color: palette.amber }))
  cells.push(edge('newcase', 'hub-box', 'golden-box', 'review new cases', { color: palette.amber, dashed: true }))
  cells.push(text('scope', 'Proposed MVP content workflow. A custom review hub remains conditional.', 40, 835, 1120, 28, { size: 14, font: palette.muted }))
  return diagramXml('Knowledge quality loop', 1200, 830, cells)
}

function hubModel() {
  const cells = []
  cells.push(text('title', 'Proposed Hub · owners govern knowledge and improvements', 40, 20, 1120, 44, { size: 25, bold: true, align: 'left', font: palette.navy }))
  cells.push(text('subtitle', 'Phase 1 defines operating needs and tests whether existing tools can provide the workspace.', 40, 62, 1120, 28, { size: 14, align: 'left', font: palette.muted }))

  cells.push(service('hub', 'ManagementTools-512-color.svg', 'Knowledge & Quality Hub', 'One accountable operating view · RBAC · audit · human approval', 390, 120, 420, 120, { stroke: palette.blue, fill: '#F5F9FF' }))

  cells.push(text('now-label', 'CORE WORKSPACE', 40, 292, 160, 26, { size: 13, bold: true, align: 'left', font: palette.green }))
  cells.push(service('sources', 'Cloud_Storage-512-color.svg', 'Source control', 'CMS + documents · owners · access · versions · expiry', 40, 330, 345, 115, { stroke: palette.green }))
  cells.push(service('release', 'ManagementTools-512-color.svg', 'Governed releases', 'review · approve · publish · rollback', 425, 330, 345, 115, { stroke: palette.blue }))
  cells.push(service('evidence', 'ManagementTools-512-color.svg', 'Evidence + audit', 'reviewed test set · feedback · restricted audit history', 810, 330, 345, 115, { stroke: palette.coral }))

  cells.push(text('future-label', 'OPTIONAL EXTENSIONS · REQUIRE EVIDENCE OF VALUE', 40, 505, 520, 26, { size: 13, bold: true, align: 'left', font: palette.amber }))
  cells.push(service('gaps', 'BigQuery-512-color.svg', 'Content gaps', 'unanswered intents · missing coverage', 40, 543, 345, 115, { stroke: palette.amber, fill: '#FFFCF3', dashed: true }))
  cells.push(service('health', 'Observability-512-color.svg', 'Content health', 'stale or conflicting sources · trends', 425, 543, 345, 115, { stroke: palette.amber, fill: '#FFFCF3', dashed: true }))
  cells.push(service('suggest', 'VertexAI-512-color.svg', 'Improvement suggestions', 'FAQ drafts · prioritization · human approval', 810, 543, 345, 115, { stroke: palette.amber, fill: '#FFFCF3', dashed: true }))

  cells.push(edge('e-sources', 'hub-box', 'sources-box', '', { color: palette.green }))
  cells.push(edge('e-evidence', 'hub-box', 'evidence-box', '', { color: palette.blue }))
  cells.push(edge('e-gaps', 'health-box', 'gaps-box', '', { color: palette.amber, dashed: true }))
  cells.push(edge('e-suggest', 'health-box', 'suggest-box', '', { color: palette.amber, dashed: true }))
  cells.push(edge('e-now', 'hub-box', 'release-box', 'control', { color: palette.blue }))
  cells.push(edge('e-future', 'release-box', 'health-box', 'assess later', { color: palette.amber, dashed: true }))

  cells.push(text('roles', 'CONTENT  ·  PRODUCT  ·  QA  ·  SECURITY  ·  OPERATIONS  ·  FINANCE', 155, 708, 890, 30, { size: 15, bold: true, font: palette.navy }))

  return diagramXml('Hub operating model', 1200, 800, cells)
}

fs.mkdirSync(outputDir, { recursive: true })

const diagrams = [
  ['ask-one-gcp-architecture.drawio', architecture()],
  ['ask-one-security-chain.drawio', securityChain()],
  ['ask-one-knowledge-quality-loop.drawio', knowledgeQuality()],
  ['ask-one-hub-operating-model.drawio', hubModel()],
]

for (const [file, xml] of diagrams) {
  fs.writeFileSync(path.join(outputDir, file), xml)
}

console.log(`Generated ${diagrams.length} draw.io source files in ${outputDir}`)
