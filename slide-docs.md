# Ask ONE team research outline

Status: before Phase 1. Personal research informs the direction. Formal team discovery has not started.

The deck uses 12 main slides and 3 technical references. It focuses on a proposed customer experience and the evidence needed to define an experiment. It does not request management approval or delivery funding.

## Narrative

1. Ask ONE: AI self-service
2. Illustrative answer with a source and next action
3. Observed Ask Maersk patterns and research limits
4. GKE application, retrieval and Vertex AI generation
5. A small, governed knowledge workflow
6. Illustrative Knowledge & Quality Hub review queue
7. Application access controls and a restricted-source example
8. A reviewed evaluation case using the same customer question
9. Request tracing, service health and cost controls
10. Concrete Phase 1 outputs
11. Work packages, contributors and visible outputs
12. First research actions and a team review
13. Platform architecture reference
14. Security chain reference
15. Knowledge and quality workflow reference

## Evidence and example boundaries

The Ask Maersk observations come from `reports/maersk-research-2026-08-31.md`. Incomplete recordings cannot establish production reliability or ONE demand. The customer answer, source label, Hub entries and evaluation case are illustrative concepts. They are not real source citations, shipping instructions, live product states or measured test results.

The GCP/GKE direction is user supplied. Vertex AI provides managed inference outside GKE. Detailed components, access, capacity and costs remain research topics. `docs/plan.md` informs candidate implementation choices. Speaker notes retain the supporting evidence and technical qualifications from the longer deck.

## Presentation approach

Use one document-guidance example throughout. Show proposed behavior and concrete outputs in the main narrative. Keep detailed qualifications and source references in notes. The Hub SVG remains available as a source asset, while the main deck uses an editable workspace concept.

## Document collection and RAG research

Phase 1 must investigate which documents and CMS data the team can collect, use and maintain. Source owners and collection permissions must be established separately from end-user access permissions. Candidate acquisition methods include CMS APIs/exports, governed uploads and permitted crawling, subject to actual system capability and authorization.

Required outputs:

- A source inventory covering CMS collections, document libraries and team-held files, with owners, reuse permissions, audience, language/region, versions and effective dates.
- A proposed governance workflow covering collection approval, ingestion review, source conflicts, updates, expiry, retention and removal from indexes/caches.
- A cross-source content and field eligibility matrix recommending include, transform, live API or exclude, with reasons and unresolved questions.
- Representative sample findings on text and OCR extraction, structured blocks, tables, attachments, citation traceability and retrieval quality.
- Estimates for collection, cleanup and ongoing maintenance, with accountable owners and a recommended document set for a possible PoC.

CMS pages and FAQs, manuals, SOPs, approved policies, regional guidance, shared libraries and support knowledge are candidates to assess. Word documents, PDFs, spreadsheets and scans require format-specific extraction checks. Published status alone does not establish suitability or permission. News, PDFs and tables need specific checks. Time-sensitive operational data may require a live API. Proposed default exclusions include drafts, personal/restricted data, obsolete duplicates and navigation-only content. Exceptions require explicit review.

These are Phase 1 research outputs. Production connectors, ingestion, access enforcement and lifecycle automation remain later implementation work.

## Phase 1 completion versus product readiness

A completed first phase supplies research findings, proposed requirements, options, estimates, risks and an actionable next-stage recommendation. Detailed requirements depend on the findings. Any focused technical experiments belong within the agreed Phase 1 allowance.

Product-quality percentages, latency targets and production readiness require later evidence from an implemented system. Earlier illustrative numerical targets are omitted from the evaluation view to avoid confusing proposed requirements with measured results. Phase 1 should propose measures and thresholds before a PoC.

The existing appendix diagrams retain their editable source assets. Detailed component choices remain subject to validation; diagram labels no longer imply a fixed release sequence or dataset size. Prominent headers and phase notes identify the three appendix diagrams as implementation concepts. They do not establish a Phase 1 backlog or approved feature sequence.

## Proposed product metrics

The metrics and evaluation slides follow the solution and operating model, before the discovery plan to distinguish future product performance from discovery deliverables. It covers task completion and helpfulness, answer correctness and citations, safe refusal, service completion and latency, source freshness and update/removal completion, and cost per successful answer.

Phase 1 should propose definitions, evaluation samples, baselines, targets and metric owners. A later PoC supplies measured results. Numerical thresholds remain open for agreement. Detailed technical diagnostics and candidate evaluation tools remain in the slide notes.

## Restored technical context

The technical foundation, Hub, lifecycle and evaluation slides restore detail from the earlier proposal while keeping it within the personal-research concept category. They describe possible later capabilities and explicit questions for Phase 1. The intended hosting environment is our GCP/GKE infrastructure, with Vertex AI as the proposed managed AI service. Detailed component choices and features remain open; Phase 1 does not include production delivery.

The application and APIs would run on our GKE infrastructure in GCP and call Gemini through Vertex AI. Managed model inference is separate from our GKE workloads. Cloudflare remains the proposed edge. Document version storage, Cloud SQL/pgvector retrieval, screening and any authorized live integrations require detailed validation. The Hub could manage sources, approvals, quality evidence and release history across CMS and non-CMS documentation. Phase 1 should assess whether existing tools can meet those needs before proposing a new interface.

The Golden Dataset means a proposed reviewed evaluation set. Ragas, Vertex AI Evaluation, deterministic checks and human review are assessment options. Query tracing and usage metrics would support later service operation. None represents current measured Ask ONE performance.

## Approval narrative and benefit discipline

The current stage precedes Phase 1. The presenter’s personal research provides inputs, not evidence that formal team discovery or product delivery has occurred. The team, including PPO, would agree research scope and contributors. A team review brings together findings, effort estimates and proposed success criteria to shape a bounded experiment.

Expected benefits are hypotheses: faster access to useful answers, better support referrals, fewer unnecessary service transitions and potentially less avoidable support effort. Phase 1 should establish customer needs and baselines. No adoption, saving, support reduction or service-level result is claimed.

Generative AI and RAG are directly relevant to the proposed document-answering experience: explain guidance and retrieve approved CMS and non-CMS sources. They are a capability and an approach, not equivalent tools to buy. Ragas is relevant as an optional evaluation framework, not a runtime requirement or a committed selection. Compare with ordinary search and curated FAQs during discovery.

AI agents are removed from the core proposal because there is no validated requirement for autonomous orchestration. Shipment or schedule lookups remain conditional research options; controlled API integration may suffice. An agent framework should only be reconsidered if a validated use case demonstrates additional value. Autonomous agents and transactions are outside the requested discovery approval.

## Security, cost, speed and availability

Phase 1 should define the requirements, owners and test approach. Later implementation would enforce controls and provide measured evidence. Candidate safeguards include source permissions, least-privilege tool access, input/output screening, injection tests, audit trails, rate limits, model/token/tool-call budgets, source-version-aware caching, bounded retries, timeouts, monitoring and fallback to search/support.

Budget alerts are not spend enforcement. Application quotas and caps need defined behavior when limits are reached. Cache and fallback paths must preserve audience restrictions, source versions and removal rules. Security checks must remain effective during degradation. Availability needs an agreed target and measurement window, while speed needs an agreed workload and p50/p95 measures. No uptime or response-time guarantee is made.

Ragas faithfulness measures support in retrieved context, not independent factual truth. Its metrics complement human and security review. Evaluation itself consumes resources and needs a budget. Framework selection remains open.

## Observability and continuous improvement

A later Ask ONE service would need dashboards for quality, availability, latency, errors and cost; request traces linking retrieval, source versions, model calls and policy decisions; and security monitoring for denied access, suspected injection, unusual usage and administrative changes. Phase 1 should define requirements, alert owners, escalation, incident responsibilities and operating effort, while checking which existing platform tools can meet the need.

Telemetry should use necessary metadata, with redaction, restricted access, sampling and retention rules. Raw customer content and credentials should not be logged by default. Traces explain processing steps and evidence, not hidden model reasoning. Monitoring complements preventive controls and cannot guarantee detection of every attack.

The proposed improvement cycle is human controlled: review feedback and failures, identify the cause, approve a source/retrieval/prompt change, run quality and security evaluations, release, compare results and roll back when needed. Feedback does not automatically train a model or publish content. The Hub could retain review and release history. These are future capabilities to assess, not current operational results.

## Effort and timing

No duration, staffing quantity, budget, saving or launch date has been established. Agree the Phase 1 effort allowance and review date before beginning. Later estimates should cover content work, integration, product build and testing as well as ongoing platform, AI, monitoring and support costs.

## Diagram deliverables

- `slides/public/diagrams/ask-one-gcp-architecture.drawio.svg`
- `slides/public/diagrams/ask-one-security-chain.drawio.svg`
- `slides/public/diagrams/ask-one-knowledge-quality-loop.drawio.svg`
- `slides/public/diagrams/ask-one-hub-operating-model.drawio.svg`

Each SVG contains embedded draw.io XML, Google Cloud product icons where applicable, and the Cloudflare mark for the internet edge.

## Source register

Internal:

- `reports/maersk-research-2026-08-31.md`
- `docs/plan.md`
- Visual reference: `../payloadcms-demo-main/apps/slides`

External primary sources:

- ONE website: https://www.one-line.com/
- ONE eCommerce portal: https://ecomm.one-line.com/one-ecom
- Cloudflare secure application delivery: https://developers.cloudflare.com/reference-architecture/design-guides/secure-application-delivery/
- Google Cloud icon library: https://cloud.google.com/icons
- Vertex AI generative AI: https://cloud.google.com/vertex-ai/generative-ai/docs
- Vertex AI pricing dimensions: https://cloud.google.com/vertex-ai/generative-ai/pricing
- Model Armor: https://cloud.google.com/security/products/model-armor
- Ragas: https://www.ragas.io/
- Ragas RAG evaluation: https://docs.ragas.io/en/stable/getstarted/rag_eval/
- Google Cloud Observability: https://cloud.google.com/products/observability

Additional primary references verified for this review:

- RAG definition: https://cloud.google.com/use-cases/retrieval-augmented-generation
- Ragas metrics: https://docs.ragas.io/en/stable/concepts/metrics/available_metrics/
- Ragas faithfulness: https://docs.ragas.io/en/stable/concepts/metrics/available_metrics/faithfulness/

## Diagram consistency review

The four icon-based diagrams reflect the same pre-Phase-1 boundary as the main slides. The architecture separates the browser, our GKE workloads and managed Vertex AI; Model Armor is a screening option called by the application, which enforces verdicts. Conditional read-only APIs require authorization. Observability spans the service rather than only a cache.

Security includes application authorization, audience-aware retrieval, response checks and protected monitoring. Grounding instructions alone are not a correctness guarantee. The knowledge flow keeps candidate content staged until evaluation and owner approval, with feedback returning through review and retesting. The Hub has no “start now” commitment, and no diagram commits a next release or fixed test-set size. Generic capability icons replace product icons where a specific product is not proposed.
