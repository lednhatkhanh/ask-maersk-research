# Ask ONE project proposal: narrative and evidence guide

The presentation has 29 slides. It proposes the **whole first-MVP project**, with review gates, rather than discovery alone. A manager overview and a technical overview divide the two reading paths. There is no dedicated approval slide. [PLAN.md](PLAN.md) remains the authoritative brief and retains internal staffing and delivery assumptions. [Earlier deck notes](docs/archive/ask-one-prior-deck-notes.md) are archived; their narrative and timing are superseded.

## Reading order

| Slides | Subject |
|---|---|
| 1 | Cover and project framing |
| 2 | Manager overview |
| 3–5 | Customer opportunity, plain-English feature explanation and illustrative example |
| 6 | Expected benefits for customers and ONE |
| 7 | Ask Maersk evidence limits and required PO/PPO-led business research |
| 8 | Proposed first-MVP scope within agreed limits; detailed requirements remain open |
| 9 | Resource placeholder (the only slide with staffing) |
| 10 | Proposed PoC timeline and exit evidence, all TBC / to be discussed |
| 11–12 | Nine-month implementation proposal and outcomes and wider delivery risks |
| 13 | Future options outside the nine-month estimate |
| 14 | Outcomes and how success will be measured |
| 15 | Technical overview |
| 16 | Architecture overview and the question-to-answer path |
| 17 | Approved content lifecycle and minimum review workflow |
| 18 | Answer safety and data protection |
| 19 | Bot protection, access and usage limits |
| 20 | Quality and production readiness |
| 21 | Proposed GCP, Phoenix, Ragas and Promptfoo responsibilities |
| 22–23 | Editable diagrams for tracing and evaluation workflows |
| 24 | Sample-based quality checks and collection methods |
| 25 | Response time, errors, tokens and service cost |
| 26 | Scoped safety tests and content freshness |
| 27 | Baseline monthly service costs, excluding staffing |
| 28–29 | Security and knowledge-workflow reference diagrams |

The feature explanation distinguishes asking, understanding, checking the source and continuing to the right service. Service links do not imply access to shipment data or transaction execution. Expected benefits include less customer effort, more useful ONE content, better routes to digital services and potentially fewer routine enquiries. These remain hypotheses. A click or abandoned session is not proof of resolution.

The slides use PO/PPO without expansion, as requested. The resource slide spells out quality assurance and user interface and user experience design. Overall operating cost includes human content/support effort; the later service-cost estimate excludes that effort.

## Estimate and scope boundaries

The proposal includes a separate two-month PoC, followed by nine months of implementation after review and agreement to proceed. Discovery and approval timing remain additional and TBC. Internal team preparation is outside the presentation.

The user confirmed nine months for implementation only, excluding discovery and the PoC. Implementation Month 1 starts after the PoC review and agreement to proceed. The separate PoC slide suggests four proposed two-week stages: agree the test, build a sample flow, test quality and controls, and review feasibility. All PoC achievements, timing and exit evidence are TBC / to be discussed. This adapts the staged evidence structure from the PayloadCMS PoC deck without copying its team size or duration.

The proposed nine-month implementation timeline starts after the PoC review. Discovery and PoC time are additional. Months 1–4 cover core development. Its durations and dates are unvalidated. Further PO/PPO involvement must guide customer research, clarify business requirements and prioritize features before the project definition can be finalized. Business rules, acceptance criteria and the detailed backlog remain open. Reassess scope, feasibility, costs and dates at business reviews, after the PoC and whenever material assumptions change. Within this tentative scenario, Month 4 is a working preview; Month 6 is a manager demo, with a separate pilot-readiness review. Month 7 is a limited pilot. Month 8 is a conditional production target. Month 9 is stabilization, not spare capacity. Failed gates move the forecast and can extend it beyond Month 9; stabilization follows the actual release.

Business decisions, answer quality, integration/access dependencies, security/reliability testing, usability, cost and operating support can also extend the schedule. Continue research or revise the design and forecast when these remain unresolved. PO/PPO and content owners must agree useful guidance, resolve gaps and approve it for the intended audience. A permitted representative sample is needed before the PoC. An approved minimum useful content set is needed before the pilot. Supplementary content delays may allow a narrower scope; a missing minimum set moves dates.

The MVP serves anonymous customers in English, from public content, one question at a time. More languages, eCommerce integrations, other ONE services, forms integration, signed-in features, follow-up conversations and connected support are future candidates. They have no committed dates and are outside the nine-month estimate. Forms may guide entry or prefill permitted details for customer review. Submission needs explicit customer confirmation and authorized write access. Other ONE services means deeper integrations beyond the service links already included in the MVP.

## Evidence discipline

The Ask Maersk observations come from [the August 2026 research report](reports/maersk-research-2026-08-31.md). They show examples of an experience, not ONE customer demand, answer correctness, a proven business return or production reliability. Some captures are incomplete.

The enquiry-preparation answer and source label are fictional examples, not actual ONE guidance. The example explains what to prepare and links to the enquiry service without filling or submitting a form. Evaluation cases remain conceptual, not passing results.

Compare Ask ONE with ordinary search and help journeys on the same questions. Discovery defines measures and an initial evaluation approach. The PoC supplies initial evidence; the pilot tests defined users and workloads. No ROI, saving, latency guarantee or quality percentage is asserted.

## Resources and service costs

The resource slide suggests roles for PoC and implementation separately. Every headcount, member and allocation is TBC / to be discussed. No numerical team size appears. Staffing details are confined to that slide.

The technical section shows illustrative incremental service budgets of US$600–1,500/month at 10,000 questions and US$1,200–3,000/month at 100,000 questions. Published model-token calculations are distinct from infrastructure allowances. Existing GKE reuse does not make extra capacity free. These figures exclude staffing, human content work and one-time implementation. They are not a total project budget or a demand forecast. See [the dated estimate and assumptions](reports/ask-one-gcp-cost-estimate.md). Confirm configuration and usage after the PoC.

## Technical reasoning

- GKE hosts the proposed application and APIs. Gemini inference runs through Vertex AI. Retrieval supplies approved source passages; the application controls source selection, citations and response handling.
- Cloud SQL with pgvector is an initial retrieval option, not a finalized choice. The PoC must examine useful retrieval, response time and cost. Compare with simpler search before fixing the components.
- Source updates and removals must reach the index and cache. The PoC tests a sample lifecycle; scale, recovery and production automation need later validation.
- The minimum review workflow needs source status, approval, updates/removals and review history. Assess existing tools first. A custom Knowledge and Quality Hub is conditional.
- Security starts in discovery and the PoC. Treat retrieved content as untrusted input; test injection, restricted documents, unsupported answers and screening failures. Model Armor is a candidate screening layer, not a substitute for application enforcement.
- Evaluation combines deterministic checks, automated assessment and human judgment. Ragas and Vertex AI Evaluation are options. Faithfulness to retrieved context is not independent factual truth.
- Operational evidence links requests, source versions, policy decisions, performance and cost. Logs need redaction, restricted access and retention rules. Improvement stays human-reviewed and tested; feedback does not automatically publish content.

Citation-link and source-eligibility checks are distinct from imperfect semantic assessment. A valid citation does not prove a claim. The dedicated bot-protection slide proposes server-validated CAPTCHA, burst and rolling limits, shared backend quotas, concurrency and spending controls, and restricted origin access. Anonymous sessions and CAPTCHA do not establish customer identity. Numerical examples remain in notes for PoC validation, not as approved policy. The limited pilot requires enforced participation controls, while the intended public release remains anonymous. Confirm edge-service entitlements and additional costs.

## Source register

Speaker notes retain the slide-specific sources and qualifications.

- [Google Cloud RAG overview](https://cloud.google.com/use-cases/retrieval-augmented-generation)
- [GKE overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/kubernetes-engine-overview)
- [Vertex AI generative AI overview](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/overview)
- [Model Armor overview](https://docs.cloud.google.com/model-armor/overview)
- [Ragas faithfulness](https://docs.ragas.io/en/stable/concepts/metrics/available_metrics/faithfulness/)
- [Vertex AI model-based evaluation](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/models/evaluate-judge-model)
- [Supporting proposal research](docs/plan.md)

All three existing diagrams preserve their embedded draw.io sources. The architecture overview is now in the main technical narrative; the security and knowledge-workflow diagrams remain appendix references. Conditional live APIs remain outside the MVP.

## Deliverables and maintenance

See [slides/README.md](slides/README.md) for the live local source, commands and earlier export snapshots. PDF and PowerPoint were not regenerated for this revision. PowerPoint is a visual copy with rasterized backgrounds; the Slidev source remains editable.

The local source and the existing editable Google Slides deck both contain 29 slides. The Google Slides deck was synchronized in place on 13 September 2026. The revised wording defines MVP early, makes the research and release conditions explicit, and explains the technical controls in sentences that stand on their own. Narrative content is editable in Google Slides; the diagrams remain images. Staffing quantities and role allocations appear only on the dedicated resource slide, marked as a placeholder. GCP/Drupal-team involvement stays in PLAN.md only. The technical service-cost slide excludes staffing and one-time implementation.

The local 29-slide editorial revision uses consistent proposal language, clearer descriptions of PoC evidence and implementation outcomes, and shorter speaker notes. The phase durations, TBC qualifications, service-cost figures and original diagrams remain intact. Google Slides now matches this revision; PDF/PowerPoint snapshots remain unchanged.

## Proposed tools and metrics — 13 September 2026

The local deck adds Phoenix as a proposed self-hosted review workspace, Ragas evaluation jobs and Promptfoo Community security tests alongside GCP. Two editable draw.io diagrams explain telemetry and test evidence. Three scorecards name quality, latency, reliability, safety, freshness and service-cost measures. All targets and adoption decisions remain TBC / to be discussed. The manager outcomes retain comparison with existing search/help.

The existing monthly service envelopes are baseline estimates. Additional tooling workloads must be sized and reconciled against existing allowances before publishing a revised total. No Enterprise subscription is assumed. The subsequent Google Slides sync includes this revision; PDF/PowerPoint snapshots remain unchanged. See [tool comparison](reports/ask-one-llm-tool-comparison.md) and [measurement checklist](reports/ask-one-metrics-and-gcp-baseline.md).

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
