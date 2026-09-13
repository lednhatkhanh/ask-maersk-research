# Ask ONE project proposal

The local deck has **29 slides**: a 14-slide manager proposal with a short overview, a technical overview, twelve core technical slides and two reference diagrams. Separate PoC and implementation timeline slides precede the delivery-risk slide.

The deck proposes the whole first-MVP project, from discovery through stabilization, with review gates and no dedicated approval slide. The nine-month implementation proposal starts after the separate discovery and PoC phases. Further PO/PPO involvement must clarify business requirements, research and feature priorities before the project definition can be finalized. Business, content, technical and operational risks can change scope and dates before or after the PoC. The resource slide suggests roles for both phases, with all headcounts and allocations TBC / to be discussed. PoC achievements and detailed timing are also TBC / to be discussed. The proposed nine months cover implementation only, excluding discovery and the PoC. The technical section includes a separate monthly service-cost estimate that excludes staffing. Partner-team involvement stays in the internal [main plan](../PLAN.md), not in slide content or notes.

## Open the presentation

- [Last exported PDF snapshot](ask-one-project-proposal.pdf)
- [Last exported PowerPoint snapshot](ask-one-project-proposal.pptx)
- [Editable local source](slides.md)
- [Narrative and evidence guide](../slide-docs.md)

The live Slidev source is authoritative. Under [AGENTS.md](../AGENTS.md), routine updates use a local build and browser visual review; PDF and PowerPoint exports require an explicit request. Existing exports predate the business-research, resource and service-cost revisions. PowerPoint slides use rasterized backgrounds, not native editable text or diagrams.

## Run and build

From the repository root:

```bash
pnpm --dir slides install
pnpm --dir slides dev
pnpm --dir slides build
```

## Optional exports — only when requested

```bash
pnpm --dir slides export
pnpm --dir slides export:pptx
```

Open the URL printed by Slidev. Press `p` for presenter mode and notes. Exports use the filenames linked above.

## Source structure

- `slides.md` — slide content and source-qualified speaker notes.
- `style.css` and `global-bottom.vue` — ONE styling and page footers.
- `public/` — local logo, fonts, product icons and existing diagrams.
- `public/diagrams/*.drawio.svg` — diagrams with embedded editable draw.io data.

The source archive in `../deliverables/` is a portable copy of the local presentation. Source files and assets are also tracked as ordinary files in the root repository. The archive excludes dependencies and research captures.

## Google Slides

The [editable Google Slides deck](https://docs.google.com/presentation/d/1knHzzM91yvkAoxI2M55gq7JRWaIxpgf-Rf3duWitK5I/edit) was synchronized in place on 13 September 2026 and now matches the current 29-slide source. Narrative content remains native and editable; diagrams remain images. Future local revisions still follow the local-only default in [AGENTS.md](../AGENTS.md) unless the user explicitly requests another sync.

The proposal includes a separate two-month PoC, followed by nine months of implementation after review and agreement to proceed. Discovery and approval timing remain additional and TBC. Internal team preparation is outside the presentation.

The local 29-slide editorial revision uses consistent proposal language, clearer descriptions of PoC evidence and implementation outcomes, and shorter speaker notes. The phase durations, TBC qualifications, service-cost figures and original diagrams remain intact. Google Slides now matches this revision; PDF/PowerPoint snapshots remain unchanged.

## Proposed tools and metrics — 13 September 2026

The local deck adds Phoenix as a proposed self-hosted review workspace, Ragas evaluation jobs and Promptfoo Community security tests alongside GCP. Two editable draw.io diagrams explain telemetry and test evidence. Three scorecards name quality, latency, reliability, safety, freshness and service-cost measures. All targets and adoption decisions remain TBC / to be discussed. The manager outcomes retain comparison with existing search/help.

The existing monthly service envelopes are baseline estimates. Additional tooling workloads must be sized and reconciled against existing allowances before publishing a revised total. No Enterprise subscription is assumed. The subsequent Google Slides sync includes this revision; PDF/PowerPoint snapshots remain unchanged. See [tool comparison](../reports/ask-one-llm-tool-comparison.md) and [measurement checklist](../reports/ask-one-metrics-and-gcp-baseline.md).

## Feasible measurement and GCP refinement

The current 29-slide deck folds the self-hosting option into the single service-cost slide (27). The two new workflow diagrams use embedded GCP service icons and generic activity icons for evaluation tools. The technical content explicitly identifies Vertex AI, Model Armor, Cloud Trace, Cloud Monitoring and Cloud Logging.

The metric slides now state collection methods: app timings/errors/token metadata and periodic service billing; reviewed answer/fallback cases and Ragas faithfulness on a versioned sample; Promptfoo attack tests, reviewed false blocks, source propagation timestamps and unresolved blocking findings. Pilot task observation and participant feedback support customer outcomes. There is no assumed automatic measurement of customer resolution, exhaustive retrieval recall or cost per successful production answer. Broader metric research remains a reference checklist, not the proposed collection commitment. Thresholds remain TBC.

## Diagram style reference

Use the supplied architecture diagram as the visual reference: an adaptive canvas (white in light mode, dark in dark mode), rounded outlined nodes, contrasting headings, muted descriptions, prominent icons and coloured connectors. Author diagrams with the same light-base palette as the originals so draw.io does not invert a dark base to gray. The tracing and evaluation diagrams on Slides 22–23 now follow this style and retain embedded editable draw.io data. Slide content and the 29-slide order are unchanged. Local build passed and both affected browser slides were visually checked. Theme correction verified in light and dark browser modes: backgrounds match the original (`#FFFFFF` / `#121212`). Build and Slides 22–23 visual checks passed. QA: `/tmp/ask-one-theme-qa/`.

## Final standalone wording review

Reviewed the full 29-slide deck and notes for reading without a presenter. Defined abbreviations, explained tool responsibilities and metric collection in plain English, clarified pilot evidence, and simplified diagram labels. Updated the architecture diagram to refer to discovery and the PoC and removed the implied commitment to a custom hub. Scope, the separate PoC phase, proposed nine implementation months, staffing TBC and service-cost assumptions remain unchanged.


## Combined evaluation tools

Phoenix + Ragas are grouped as one proposed quality-evaluation flow on Slides 21 and 24. Promptfoo security results join the same human review before release. The deck remains 29 slides; integration mechanics stay out of the visible proposal.


## Full-deck review corrections — 13 September 2026

The local deck retains all 29 slides and the existing manager/technical order. Corrected rate denominators, checked-answer timing and percentile wording, content-removal propagation, resource-role wording and PoC sample prerequisites. Cloud SQL is a candidate retrieval database and Model Armor is the proposed screening service, subject to PoC validation. The service-cost slide explicitly identifies infrastructure allowances and excludes unpriced additional tooling workloads. The three reference diagrams use larger labels, retain editable draw.io data and identify content review as MVP scope with a conditional custom hub.

Validation: Slidev build passed. Visually reviewed all 30 browser renders and rechecked the adjusted resource, cost and reference-diagram slides. No unresolved clipping or footer overlaps were found. Verified embedded draw.io XML in the three revised SVGs. Updated the portable source archive. Browser QA: `/tmp/ask-one-fixes-qa/`. Google Slides and PDF/PowerPoint snapshots remain unchanged.


## Learning process removed — 13 September 2026

Removed the dedicated learning slide and all internal team-learning references from the resource slide, overview, timeline and speaker notes. The deck now has 29 slides: manager proposal 1–14, technical overview 15, technical detail 16–27 and references 28–29. The proposed two-month PoC and nine-month implementation remain separate. Updated slide references, footers and the portable source archive. Slidev build passed, and all 29 browser renderings were visually checked. QA: `/tmp/ask-one-no-learning-qa/`. Google Slides and PDF/PowerPoint snapshots remain unchanged.


## Google Slides sync completed — 13 September 2026

Synchronized all 29 slides to the existing editable Google Slides deck, including visible content, speaker notes, slide order and diagram images. The internal learning process remains excluded. Preserved the existing deck and sharing, all original slide IDs and nearly all original native element IDs. Added seven slides using the existing native layouts.

Validation: the fresh local 29-slide browser capture matches the final native readback with no content, notes, order or media-count failures. Reviewed all native slide thumbnails and checked the live editor. Fixed roadmap header wrapping, table spacing and the cost table covering its assumptions; retained text sizes. The layout checker reports no errors; its small-text advisories reflect the existing dense presentation design. Saved verification evidence under ignored `slides/.sync/sync29/` and refreshed the source archive. PDF and PowerPoint snapshots remain unchanged. Future slide work remains local by default unless another sync is explicitly requested.
