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
    text(`${id}-title`, title, x + 54, y + 5, width - 66, options.titleHeight ?? 40, { size: options.titleSize ?? 16, bold: true, align: 'left' }),
    text(`${id}-detail`, detail, x + 14, y + 64, width - 28, height - 64, { size: options.detailSize ?? 16, font: palette.muted, align: 'left', valign: 'top' }),
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
  const large = { titleSize: 18, titleHeight: 54, detailSize: 18 }
  cells.push(text('title', 'Custom workflow · services and ownership', 40, 12, 1120, 44, { size: 26, bold: true, align: 'left', font: palette.navy }))
  cells.push(text('subtitle', 'ONE builds the application and passage pipeline; managed services run storage, search, models and screening.', 40, 60, 1120, 30, { size: 16, align: 'left', font: palette.muted }))
  cells.push(text('content-label', 'APPROVED CONTENT AND INDEXING', 40, 110, 700, 26, { size: 15, bold: true, align: 'left', font: palette.green }))
  cells.push(service('sources', 'WebMobile-512-color.svg', 'ONE / Drupal', 'Approved public pages and files', 40, 150, 200, 135, { stroke: palette.green, ...large }))
  cells.push(service('storage', 'Cloud_Storage-512-color.svg', 'Cloud Storage', 'Versioned originals and export', 270, 150, 200, 135, { stroke: palette.green, ...large }))
  cells.push(service('ingest', 'GKE-512-color.svg', 'ONE ingest · GKE', 'Extract, chunk, publish, withdraw', 500, 150, 200, 135, { stroke: palette.blue, ...large }))
  cells.push(service('embed', 'VertexAI-512-color.svg', 'Vertex AI', 'Pinned text embedding model', 730, 150, 200, 135, { stroke: palette.cyan, ...large }))
  cells.push(service('index', 'Databases-512-color.svg', 'Agent Retrieval', 'Managed passage and vector store', 960, 150, 200, 135, { stroke: palette.green, ...large }))
  cells.push(text('question-label', 'CUSTOMER QUESTION AND CHECKED ANSWER', 40, 350, 700, 26, { size: 15, bold: true, align: 'left', font: palette.blue }))
  cells.push(service('customer', 'Cloudflare.svg', 'ONE + Cloudflare', 'Website and traffic protection', 40, 390, 200, 135, { stroke: '#F38020', ...large }))
  cells.push(service('api', 'GKE-512-color.svg', 'ONE API · GKE', 'Limits, retrieval and answer checks', 270, 390, 200, 135, { stroke: palette.blue, ...large }))
  cells.push(service('search', 'Databases-512-color.svg', 'Agent Retrieval', 'Filtered vector + text candidates', 500, 390, 200, 135, { stroke: palette.green, ...large }))
  cells.push(service('rank', 'ManagementTools-512-color.svg', 'VertexRanker', 'Required reranking of candidates', 730, 390, 200, 135, { stroke: palette.amber, ...large }))
  cells.push(service('answer', 'VertexAI-512-color.svg', 'Gemini', 'Answer; ONE checks citations', 960, 390, 200, 135, { stroke: palette.cyan, ...large }))
  cells.push(text('support-label', 'REQUIRED CONTROLS AND EVALUATION · OPTIONAL OCR', 40, 595, 850, 26, { size: 15, bold: true, align: 'left', font: palette.coral }))
  cells.push(service('armor', 'SecurityIdentity-512-color.svg', 'Model Armor', 'Required question + answer screening', 40, 635, 250, 135, { stroke: palette.coral, ...large }))
  cells.push(service('observe', 'Observability-512-color.svg', 'Cloud Observability', 'Logging, Monitoring and Trace', 330, 635, 250, 135, { stroke: palette.blue, ...large }))
  cells.push(service('ocr', 'IntegrationServices-512-color.svg', 'Document AI OCR', 'Optional for difficult documents', 620, 635, 250, 135, { stroke: palette.amber, dashed: true, ...large }))
  cells.push(service('eval', 'ManagementTools-512-color.svg', 'ONE evaluation', 'Reviewed cases; Google Evals not listed for Singapore', 910, 635, 250, 135, { stroke: palette.green, ...large }))
  for (const [id, a, b] of [['c1','sources','storage'],['c2','storage','ingest'],['c3','ingest','embed'],['c4','embed','index'],['q1','customer','api'],['q2','api','search'],['q3','search','rank'],['q4','rank','answer']]) cells.push(edge(id, `${a}-box`, `${b}-box`, '', { color: id.startsWith('c') ? palette.green : palette.blue }))
  cells.push(edge('ocr-to-ingest', 'ocr-box', 'ingest-box', '', { color: palette.amber, dashed: true, exitX: 0.1, exitY: 0, entryX: 0.8, entryY: 1 }))
  cells.push(text('note', 'ONE enforces screening results and reviews answer quality. Confirm ranking location, latency and cost before release.', 40, 820, 1120, 35, { size: 17, font: palette.muted, align: 'left' }))
  return diagramXml('Custom service map', 1200, 700, cells)
}

function securityChain() {
  const cells = []
  cells.push(text('title', 'Proposed security flow · enforce controls in the application', 40, 20, 1120, 44, { size: 25, bold: true, align: 'left', font: palette.navy }))
  cells.push(text('subtitle', 'Any failed policy check stops the answer; fallback preserves access restrictions. Monitoring covers every stage.', 40, 62, 1120, 28, { size: 14, align: 'left', font: palette.muted }))

  const items = [
    ['s1', 'Cloudflare.svg', '1 · Cloudflare', 'DNS/CDN · WAF · DDoS · rate limit', '#F38020'],
    ['s2', 'GKE-512-color.svg', '2 · Authorize', 'identity / audience · schema · quotas', palette.blue],
    ['s3', 'SecurityIdentity-512-color.svg', '3 · Screen input', 'Check malicious instructions and sensitive data; proposed Model Armor', palette.coral],
    ['s4', 'Databases-512-color.svg', '4 · Retrieve', 'Agent Retrieval; approved audience and version', palette.green],
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
    ['evaluate', 'ManagementTools-512-color.svg', '6 · Evaluate', 'Source checks, reviewed cases and human assessment', 620, 365, palette.blue],
    ['gate', 'SecurityIdentity-512-color.svg', '7 · Release decision', 'Owner reviews evidence; approve, remediate or stop', 330, 365, palette.green],
    ['publish', 'Databases-512-color.svg', '8 · Publish', 'Agent Retrieval; update / remove; invalidate cache; rollback', 40, 365, palette.green],
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

function ragEngineBoundary() {
  const cells = []
  const large = { titleSize: 18, titleHeight: 54, detailSize: 18 }
  cells.push(text('title', 'Direct RAG Engine · services and ownership', 40, 12, 1120, 44, { size: 26, bold: true, align: 'left', font: palette.navy }))
  cells.push(text('subtitle', 'ONE keeps publishing and answer control; RAG Engine manages the corpus and retrieval workflow.', 40, 60, 1120, 30, { size: 16, align: 'left', font: palette.muted }))
  cells.push(text('content-label', 'APPROVED CONTENT AND MANAGED INGESTION', 40, 110, 700, 26, { size: 15, bold: true, align: 'left', font: palette.green }))
  cells.push(service('sources', 'WebMobile-512-color.svg', 'ONE / Drupal', 'Approved public pages and files', 40, 150, 200, 135, { stroke: palette.green, ...large }))
  cells.push(service('storage', 'Cloud_Storage-512-color.svg', 'Cloud Storage', 'Versioned originals and export', 270, 150, 200, 135, { stroke: palette.green, ...large }))
  cells.push(service('publish', 'GKE-512-color.svg', 'ONE publish · GKE', 'Approve, import and withdraw', 500, 150, 200, 135, { stroke: palette.blue, ...large }))
  cells.push(service('ingest', 'VertexAI-512-color.svg', 'RAG Engine', 'Parse, chunk, embed and index', 730, 150, 200, 135, { stroke: palette.blue, ...large }))
  cells.push(service('db', 'Databases-512-color.svg', 'Spanner Scaled', 'Managed production corpus store', 960, 150, 200, 135, { stroke: palette.green, ...large }))
  cells.push(text('question-label', 'CUSTOMER QUESTION AND CHECKED ANSWER', 40, 350, 700, 26, { size: 15, bold: true, align: 'left', font: palette.blue }))
  cells.push(service('customer', 'Cloudflare.svg', 'ONE + Cloudflare', 'Website and traffic protection', 40, 390, 200, 135, { stroke: '#F38020', ...large }))
  cells.push(service('api', 'GKE-512-color.svg', 'ONE API · GKE', 'Limits, retrieval and answer checks', 270, 390, 200, 135, { stroke: palette.blue, ...large }))
  cells.push(service('search', 'Databases-512-color.svg', 'RAG Engine', 'Retrieve approved corpus passages', 500, 390, 200, 135, { stroke: palette.blue, ...large }))
  cells.push(service('rank', 'ManagementTools-512-color.svg', 'Ranking API', 'Required reranking of passages', 730, 390, 200, 135, { stroke: palette.amber, ...large }))
  cells.push(service('answer', 'VertexAI-512-color.svg', 'Gemini', 'Answer; ONE checks citations', 960, 390, 200, 135, { stroke: palette.cyan, ...large }))
  cells.push(text('support-label', 'REQUIRED CONTROLS AND EVALUATION · OPTIONAL OCR', 40, 595, 850, 26, { size: 15, bold: true, align: 'left', font: palette.coral }))
  cells.push(service('armor', 'SecurityIdentity-512-color.svg', 'Model Armor', 'Required question + answer screening', 40, 635, 250, 135, { stroke: palette.coral, ...large }))
  cells.push(service('observe', 'Observability-512-color.svg', 'Cloud Observability', 'Logging, Monitoring and Trace', 330, 635, 250, 135, { stroke: palette.blue, ...large }))
  cells.push(service('ocr', 'IntegrationServices-512-color.svg', 'Document AI OCR', 'Optional for scanned PDFs', 620, 635, 250, 135, { stroke: palette.amber, dashed: true, ...large }))
  cells.push(service('eval', 'ManagementTools-512-color.svg', 'ONE evaluation', 'Reviewed cases; Google Evals not listed for Singapore', 910, 635, 250, 135, { stroke: palette.green, ...large }))
  for (const [id, a, b] of [['c1','sources','storage'],['c2','storage','publish'],['c3','publish','ingest'],['c4','ingest','db'],['q1','customer','api'],['q2','api','search'],['q3','search','rank'],['q4','rank','answer']]) cells.push(edge(id, `${a}-box`, `${b}-box`, '', { color: id.startsWith('c') ? palette.green : palette.blue }))
  cells.push(edge('ocr-to-ingest', 'ocr-box', 'ingest-box', '', { color: palette.amber, dashed: true, exitX: 0.5, exitY: 0, entryX: 0.5, entryY: 1 }))
  cells.push(text('note', 'Singapore RAG Engine is Preview; its data residency control is unsupported. Confirm ranking location and full cost.', 40, 820, 1120, 35, { size: 17, font: palette.muted, align: 'left' }))
  return diagramXml('RAG Engine service map', 1200, 700, cells)
}

function ragEngineWorkflow() {
  const cells = []
  cells.push(text('title', 'RAG Engine · ingest and retrieval workflow', 40, 20, 1120, 44, { size: 25, bold: true, align: 'left', font: palette.navy }))
  cells.push(text('subtitle', 'The managed stages prepare evidence; the ONE app remains responsible for the final answer', 40, 62, 1120, 28, { size: 14, align: 'left', font: palette.muted }))
  cells.push(text('ingest-label', 'INGEST APPROVED DOCUMENTS', 40, 110, 500, 24, { size: 12, bold: true, align: 'left', font: palette.green }))
  const upper = [
    ['docs', 'Cloud_Storage-512-color.svg', 'Approved files', 'ONE source versions', 40, palette.green],
    ['parse', 'IntegrationServices-512-color.svg', 'Parse', 'Extract usable text', 275, palette.blue],
    ['chunk', 'IntegrationServices-512-color.svg', 'Chunk', 'Split into passages', 510, palette.blue],
    ['embed', 'VertexAI-512-color.svg', 'Embed + index', 'Create searchable vectors', 745, palette.blue],
    ['index', 'Databases-512-color.svg', 'Corpus', 'Managed index', 980, palette.green],
  ]
  for (const [id, icon, title, detail, x, stroke] of upper) cells.push(service(id, icon, title, detail, x, 155, 185, 135, { stroke }))
  cells.push(text('query-label', 'RETRIEVE FOR A CUSTOMER QUESTION', 40, 355, 600, 24, { size: 12, bold: true, align: 'left', font: palette.blue }))
  const lower = [
    ['ask', 'WebMobile-512-color.svg', 'Question', 'ONE customer', 40, palette.cyan],
    ['prepare', 'GKE-512-color.svg', 'Prepare query', 'ONE API and policy', 275, palette.blue],
    ['retrieve', 'Databases-512-color.svg', 'Retrieve', 'Query corpus passages', 510, palette.blue],
    ['rank', 'ManagementTools-512-color.svg', 'Rank + serve', 'PoC choice; return passages', 745, palette.blue],
    ['answer', 'VertexAI-512-color.svg', 'Answer', 'Gemini + ONE checks', 980, palette.coral],
  ]
  for (const [id, icon, title, detail, x, stroke] of lower) cells.push(service(id, icon, title, detail, x, 405, 185, 135, { stroke }))
  for (const [i, a, b] of [['i1','docs','parse'],['i2','parse','chunk'],['i3','chunk','embed'],['i4','embed','index'],['r1','ask','prepare'],['r2','prepare','retrieve'],['r3','retrieve','rank'],['r4','rank','answer']]) cells.push(edge(i, `${a}-box`, `${b}-box`, '', { color: i.startsWith('i') ? palette.green : palette.blue }))
  cells.push(text('note', 'Ranking configuration depends on deployment mode. ONE validates source eligibility, citations and fallback before release.', 40, 675, 1120, 40, { size: 16, font: palette.muted }))
  return diagramXml('RAG Engine workflow', 1200, 760, cells)
}

function proposalBoundary() {
  const cells = []
  const large = { titleSize: 18, detailSize: 18 }
  cells.push(text('content-label', 'PUBLISH APPROVED CONTENT', 40, 15, 500, 24, { size: 15, bold: true, align: 'left', font: palette.green }))
  cells.push(service('sources', 'WebMobile-512-color.svg', 'ONE sources', 'Public pages and documents', 40, 80, 215, 135, { stroke: palette.green, ...large }))
  cells.push(service('publish', 'ManagementTools-512-color.svg', 'ONE publishing', 'Approve, version and withdraw', 330, 80, 215, 135, { stroke: palette.green, ...large }))
  cells.push(text('choice-label', 'SELECT ONE RETRIEVAL PATH', 640, 15, 500, 24, { size: 15, bold: true, align: 'left', font: palette.blue }))
  cells.push(service('retrieval', 'Databases-512-color.svg', 'Selected retrieval', 'Custom: Agent Retrieval; direct: RAG Engine', 640, 80, 220, 135, { stroke: palette.blue, ...large }))
  cells.push(text('answer-label', 'SERVE A CHECKED ANSWER', 40, 270, 500, 24, { size: 15, bold: true, align: 'left', font: palette.blue }))
  cells.push(service('customer', 'WebMobile-512-color.svg', 'Customer', 'Question on ONE website', 40, 310, 215, 135, { stroke: palette.cyan, ...large }))
  cells.push(service('api', 'GKE-512-color.svg', 'ONE API on GKE', 'Usage limits and retrieval call', 330, 310, 215, 135, { stroke: palette.blue, ...large }))
  cells.push(service('gemini', 'VertexAI-512-color.svg', 'Gemini', 'Answer from selected evidence', 640, 310, 220, 135, { stroke: palette.cyan, ...large }))
  cells.push(service('checks', 'SecurityIdentity-512-color.svg', 'ONE checks', 'Screening, citations and fallback', 940, 310, 220, 135, { stroke: palette.coral, ...large }))
  cells.push(edge('content-to-publish', 'sources-box', 'publish-box', '', { color: palette.green }))
  cells.push(edge('publish-to-retrieval', 'publish-box', 'retrieval-box', '', { color: palette.green }))
  cells.push(edge('question-to-api', 'customer-box', 'api-box', '', { color: palette.blue }))
  cells.push(edge('api-to-retrieval', 'api-box', 'retrieval-box', 'passages', { color: palette.blue, both: true, exitX: 0.75, exitY: 0, entryX: 0.2, entryY: 1 }))
  cells.push(edge('api-to-gemini', 'api-box', 'gemini-box', '', { color: palette.cyan }))
  cells.push(edge('gemini-to-checks', 'gemini-box', 'checks-box', '', { color: palette.coral }))
  return diagramXml('Proposal boundary', 1200, 440, cells)
}

fs.mkdirSync(outputDir, { recursive: true })

const diagrams = [
  ['ask-one-gcp-architecture.drawio', architecture()],
  ['ask-one-security-chain.drawio', securityChain()],
  ['ask-one-knowledge-quality-loop.drawio', knowledgeQuality()],
  ['ask-one-hub-operating-model.drawio', hubModel()],
  ['ask-one-rag-engine-boundary.drawio', ragEngineBoundary()],
  ['ask-one-rag-engine-workflow.drawio', ragEngineWorkflow()],
  ['ask-one-proposal-boundary.drawio', proposalBoundary()],
]

for (const [file, xml] of diagrams) {
  fs.writeFileSync(path.join(outputDir, file), xml)
}

console.log(`Generated ${diagrams.length} draw.io source files in ${outputDir}`)
