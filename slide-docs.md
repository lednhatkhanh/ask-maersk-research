# Ask ONE project proposal: narrative and evidence guide

The presentation has 22 slides. It proposes the **whole first-MVP project**, with review gates, rather than discovery alone. A manager overview and a technical overview divide the two reading paths. There is no dedicated approval slide. [PLAN.md](PLAN.md) remains the authoritative brief and retains internal staffing and delivery assumptions. [Earlier deck notes](docs/archive/ask-one-prior-deck-notes.md) are archived; their narrative and timing are superseded.

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
| 10–11 | Rough estimate, wider delivery risks and readiness gates |
| 12 | Future options outside the nine-month estimate |
| 13 | Outcomes and how success will be measured |
| 14 | Technical overview |
| 15 | Architecture overview and the question-to-answer path |
| 16 | Approved content lifecycle and minimum review workflow |
| 17 | Answer safety and data protection |
| 18 | Bot protection, access and usage limits |
| 19 | Quality and production readiness |
| 20 | Estimated monthly service costs, excluding staffing |
| 21–22 | Security and knowledge-workflow reference diagrams |

The feature explanation distinguishes asking, understanding, checking the source and continuing to the right service. Service links do not imply access to shipment data or transaction execution. Expected benefits include less customer effort, more useful ONE content, better routes to digital services and potentially fewer routine enquiries. These remain hypotheses. A click or abandoned session is not proof of resolution.

The slides use PO/PPO without expansion, as requested. The resource slide spells out quality assurance, user interface/experience and machine learning. Overall operating cost includes human content/support effort; the later service-cost estimate excludes that effort.

## Estimate and scope boundaries

The rough nine-month scenario runs from discovery kickoff. Its durations and dates are unvalidated. Further PO/PPO involvement must guide customer research, clarify business requirements and prioritize features before the project definition can be finalized. Business rules, acceptance criteria and the detailed backlog remain open. Reassess scope, feasibility, costs and dates at business reviews, after the PoC and whenever material assumptions change. Within this tentative scenario, Month 4 is a working preview; Month 6 is a manager demo, with a separate pilot-readiness review. Month 7 is a limited pilot. Month 8 is a conditional production target. Month 9 is stabilization, not spare capacity. Failed gates move the forecast and can extend it beyond Month 9; stabilization follows the actual release.

Business decisions, answer quality, integration/access dependencies, security/reliability testing, usability, cost and operating support can also extend the schedule. Continue research or revise the design and forecast when these remain unresolved. PO/PPO and content owners must agree useful guidance, resolve gaps and approve it for the intended audience. A permitted representative sample is needed before the PoC. An approved minimum useful content set is needed before the pilot. Supplementary content delays may allow a narrower scope; a missing minimum set moves dates.

The MVP serves anonymous customers in English, from public content, one question at a time. More languages, eCommerce integrations, other ONE services, forms integration, signed-in features, follow-up conversations and connected support are future candidates. They have no committed dates and are outside the nine-month estimate. Forms may guide entry or prefill permitted details for customer review. Submission needs explicit customer confirmation and authorized write access. Other ONE services means deeper integrations beyond the service links already included in the MVP.

## Evidence discipline

The Ask Maersk observations come from [the August 2026 research report](reports/maersk-research-2026-08-31.md). They show examples of an experience, not ONE customer demand, answer correctness, a proven business return or production reliability. Some captures are incomplete.

The enquiry-preparation answer and source label are fictional examples, not actual ONE guidance. The example explains what to prepare and links to the enquiry service without filling or submitting a form. Evaluation cases remain conceptual, not passing results.

Compare Ask ONE with ordinary search and help journeys on the same questions. Discovery defines measures and an initial evaluation approach. The PoC supplies initial evidence; the pilot tests defined users and workloads. No ROI, saving, latency guarantee or quality percentage is asserted.

## Resources and service costs

The resource slide shows one placeholder team: 6 developers, 1 TA, 1 PO, 1 UI/UX and 2 QA. The team will revise availability and allocations. No additional ML engineer is planned. Learning and evaluation work belong in discovery and the PoC. Staffing details are confined to that slide.

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

The local source and the existing editable Google Slides deck are synchronized at 22 slides. Narrative content is editable in Google Slides; the diagrams remain images. Staffing quantities and role allocations appear only on the dedicated resource slide, marked as a placeholder. GCP/Drupal-team involvement stays in PLAN.md only. The technical service-cost slide excludes staffing and one-time implementation.
