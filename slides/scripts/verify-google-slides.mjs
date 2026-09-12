// Compare a complete Google Slides API response with a fresh local capture.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const deckDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const config = JSON.parse(fs.readFileSync(path.join(deckDir, 'google-slides.json'), 'utf8'));
const input = process.argv[2];
if (!input) {
  console.error('Usage: pnpm google:verify <presentation.json> [capture-directory]');
  process.exit(2);
}
const capture = path.resolve(process.argv[3] || path.join(deckDir, '.sync'));
const raw = JSON.parse(fs.readFileSync(input, 'utf8'));
const native = raw.structuredContent || raw;
if (!Array.isArray(native.slides)) throw new Error('Expected a complete presentation resource or connector structuredContent');
const source = JSON.parse(fs.readFileSync(path.join(capture, 'source.json'), 'utf8'));
const norm = text => text.replace(/\s+/g, ' ').trim().toLowerCase();
const contents = text => (text?.textElements || []).map(e => e.textRun?.content || '').join('');
function elements(items) {
  return (items || []).flatMap(e => e.elementGroup ? elements(e.elementGroup.children) : [e]);
}
function strings(items) {
  return elements(items).flatMap(e => e.shape ? [contents(e.shape.text)] : e.table ?
    e.table.tableRows.flatMap(r => r.tableCells.map(c => contents(c.text))) : []);
}
const failures = [];
// These labels were verified in the live editor; thumbnail-only QA missed wrapping.
const nativeElements = native.slides.flatMap(s => elements(s.pageElements));
for (const [id, minimum] of Object.entries(config.minimumTextWidthsPt || {})) {
  const element = nativeElements.find(e => e.objectId === id);
  if (!element) { failures.push(`Missing layout-checked text box: ${id}`); continue; }
  const width = element.size.width;
  const points = width.magnitude / (width.unit === 'EMU' ? 12700 : 1);
  const renderedWidth = points * Math.abs(element.transform?.scaleX ?? 1);
  if (renderedWidth + 0.05 < minimum) failures.push(`Text box ${id} is too narrow: ${renderedWidth.toFixed(1)}pt; requires ${minimum}pt`);
}

if (native.presentationId !== config.presentationId) failures.push('Wrong presentation ID');
if (native.slides.length !== source.length) failures.push('Native and captured slide counts differ');
if (JSON.stringify(native.slides.map(s => s.objectId)) !== JSON.stringify(config.slideObjectIds)) failures.push('Native order differs from google-slides.json');
const markdown = fs.readFileSync(path.join(deckDir, config.source), 'utf8');
// Current deck convention: one speaker-note HTML comment per slide.
const notes = [...markdown.matchAll(/<!--([\s\S]*?)-->/g)].map(m => norm(m[1]));
if (notes.length !== source.length) failures.push('Expected one speaker-note comment per slide; update the note parser if the source convention changes');
source.forEach((s, i) => {
  const slide = native.slides[i];
  if (!slide) return;
  const actual = strings(slide.pageElements).map(norm);
  const expected = [...s.texts.map(t => t.runs.map(r => r.text).join('')),
    ...s.tables.flatMap(t => t.rows.flatMap(r => r.map(c => c.runs.map(run => run.text).join('')))),
    ...s.texts.filter(t => t.tag === 'LI').map((_, index) => String(index + 1).padStart(2, '0'))].map(norm).filter(Boolean);
  for (const text of expected) {
    const index = actual.indexOf(text);
    if (index < 0) failures.push(`Slide ${i + 1}: missing or changed text: ${text}`);
    else actual.splice(index, 1);
  }
  for (const text of actual.filter(Boolean)) failures.push(`Slide ${i + 1}: extra native text: ${text}`);
  const els = elements(slide.pageElements);
  if (els.filter(e => e.image).length !== s.images.length) failures.push(`Slide ${i + 1}: image count differs`);
  if (els.filter(e => e.table).length !== s.tables.length) failures.push(`Slide ${i + 1}: table count differs`);
  const speakerId = slide.slideProperties?.notesPage?.notesProperties?.speakerNotesObjectId;
  const speaker = slide.slideProperties?.notesPage?.pageElements?.find(e => e.objectId === speakerId);
  if (norm(contents(speaker?.shape?.text)) !== notes[i]) failures.push(`Slide ${i + 1}: speaker notes differ`);
});
console.log(JSON.stringify({ slides: native.slides.length, failures, visualReviewRequired: true }, null, 2));
process.exitCode = failures.length ? 1 : 0;
