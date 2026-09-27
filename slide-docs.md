# Ask ONE project proposal: narrative and evidence guide

The local presentation has **23 slides**. Slides 1–14 are a standalone manager proposal; Slides 15–21 present the technical choice and evidence needed to make it; Slides 22–23 are architecture references. [PLAN.md](PLAN.md) is the authoritative brief and retains internal delivery assumptions and historical revisions.

## Reading order

| Slides | Subject |
|---|---|
| 1–2 | First-MVP project framing and manager overview |
| 3–5 | Customer opportunity, proposed experience and fictional example |
| 6–7 | Expected value and the business research still required |
| 8–9 | Proposed first-release scope and resource placeholder |
| 10–12 | Separate PoC, provisional eight-month implementation and delivery risks |
| 13–14 | Future options and success measures |
| 15 | Custom Agent Retrieval working default versus direct RAG Engine |
| 16 | ONE-owned publishing, API and checks around the selected retrieval path |
| 17–18 | Approved content, withdrawal, answer safety and traffic protection |
| 19 | Comparable PoC gates and the retrieval selection rule |
| 20 | Operating signals and ONE response actions |
| 21 | Illustrative monthly service budgets for both paths at two volumes |
| 22–23 | Full custom workflow and RAG Engine service maps |

## Proposal and evidence boundaries

Ask ONE would explain approved public ONE guidance in English, show the source and link to an existing service when a customer needs to act. The first release handles one question at a time. Account-specific information, live tracking, transactions and multi-turn interaction are outside scope. The enquiry answer and source on Slide 5 are fictional; they do not state ONE policy. An answer with a citation can still be wrong.

The customer problem and expected benefits need validation against existing search and help. PO/PPO-led discovery must clarify journeys, business rules, feature priorities and the minimum useful content set. The proposed PoC begins only with a representative sample permitted for that use. Pilot observation and participant feedback, not clicks alone, test customer outcomes. No demand forecast, ROI, saving or achieved quality level is asserted.

The proposed eight months are implementation time **after** discovery and the separate PoC. Month 4 preview, Month 6 manager demo, Month 7 limited pilot and Month 8 conditional release are scenario markers. A failed business, content, security, technical or operational gate can change the scope and forecast. Stabilization begins after the actual release.

## Technical choice

The working PoC default is a custom workflow using standalone Agent Retrieval as the managed vector and passage store. ONE prepares passages, controls approved versions, runs the customer API and checks answers. Direct RAG Engine is the comparison path: it manages more ingestion and retrieval, while ONE still owns source approval, withdrawal, the API, screening enforcement, citations, evaluation and release decisions. Changing paths later requires re-import, reindexing and regression tests.

Both paths use the same approved content and reviewed questions. The selection gates on Slide 19 cover answer and citation quality, appropriate refusal, approved-version filtering, update and withdrawal, security and regional requirements, p95 response time, error rate, complete monthly service cost and ONE-owned implementation and operating work. Agree sample coverage and pass thresholds before formal tests. Google currently lists Singapore RAG Engine as Preview and says its data residency control is unsupported. A future GA date alone does not settle the selection. See the [managed RAG](reports/ask-one-managed-rag-research-2026-09-27.md) and [custom component](reports/ask-one-custom-rag-component-research-2026-09-27.md) research notes.

Source eligibility and citation-link checks can be deterministic. Groundedness measures support from supplied passages; it is not independent factual truth. Judged Recall@k diagnoses retrieval on a reviewed set; it is not exhaustive corpus recall. Human review remains necessary. Approved source changes must reach retrieval and any answer cache, and removed content must stop appearing. The minimum content-review workflow uses existing tools if they meet the need; a separate hub requires an explicit scope decision.

Model Armor screening and Cloudflare traffic controls are proposed, subject to testing and service terms. The app must enforce screening decisions, quotas, cost ceilings and fallback. Protect administration and the backend. The limited pilot needs an enforced participation gate; public MVP access remains anonymous. Test false blocks, bypasses, parallel requests, failures and recovery. Numerical limits are not approved product policy.

Cloud Trace, Cloud Logging and Cloud Monitoring with application-owned OpenTelemetry spans are the default operating stack. Google Gen AI evaluation on saved cases is conditional on approved processing location; its published region list does not include Singapore. Agent Platform online monitors have deployed-agent telemetry prerequisites and are not automatic for this GKE app. Protected logs need redaction, access and retention rules. Measure p50/p95 end-to-end time, failures, content-change delay, tokens and allocated service cost per admitted question. Targets remain TBC.

## Costs and sources

Slide 21 contains **service costs only**. At **10,000 / 100,000 questions per month**, preliminary planning budgets are **US$1,000 / US$2,500 for the custom workflow** and **US$2,500 / US$3,500 for direct RAG Engine**. They include safety headroom but are not vendor quotes or demand forecasts. The slide tells readers to contact Google Cloud for an actual quote. The [cost report](reports/ask-one-gcp-cost-estimate.md) separates the current component allowances from its earlier, superseded retrieval design. Both scenarios assume an existing GKE cluster with extra app capacity, a modest corpus, Gemini 2.5 Flash, required Model Armor, one reranking pass per question, and production plus small non-production use. Document AI OCR is optional and excluded. The custom workflow uses performance-optimized Agent Retrieval. The direct RAG Engine figure uses Singapore Spanner Enterprise at the published rate, Scaled production at a one-node minimum and Basic non-production; autoscaling or different Preview billing changes the outcome. Speaker notes show the component arithmetic and pricing links. Reprice both complete stacks at matched measured usage after the PoC. Staffing, content-owner effort, one-time implementation and Cloudflare upgrades are excluded from the displayed figures.

Slide-specific sources and qualifications remain in the speaker notes. Key product references: [RAG Engine regions](https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/rag-engine/rag-overview), [deployment modes](https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/rag-engine/deployment-modes), [Model Armor](https://docs.cloud.google.com/model-armor/overview), [Agent Platform observability](https://docs.cloud.google.com/gemini-enterprise-agent-platform/optimize/observability/overview) and [evaluation](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/evaluation-overview).

## Local source and snapshots

The editable source is [slides/slides.md](slides/slides.md); diagram sources and SVG exports are under [slides/public/diagrams](slides/public/diagrams). The [portable source archive](deliverables/ask-one-slides-source.zip) is a copy of the local source. The [editable Google Slides companion](https://docs.google.com/presentation/d/1knHzzM91yvkAoxI2M55gq7JRWaIxpgf-Rf3duWitK5I/edit) matches all 23 slides as of 27 September 2026. Native text, tables, notes and diagram images were verified. PDF and PowerPoint remain earlier snapshots.
