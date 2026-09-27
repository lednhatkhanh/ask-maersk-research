# Ask ONE: preliminary monthly service costs

Original pricing checked: 12 September 2026. Current two-path update: 27 September 2026. Status: illustrative planning estimate, not a quotation or approved budget. Re-estimate after discovery and the PoC.

## Current custom-path planning budget — 27 September 2026

For the current custom workflow using **standalone Agent Retrieval**, show approximately **US$1,000/month at 10,000 questions** or **US$2,500/month at 100,000 questions** as preliminary service budgets. These include safety headroom; they are not expected bills, Singapore calculator quotes, demand forecasts or spending caps. The earlier figures below document a different retrieval design and are not the slide budgets.

| Monthly component (USD) | 10,000 questions | 100,000 questions | Basis |
| --- | ---: | ---: | --- |
| Gemini 2.5 Flash generation | $22 | $215 | Published rates; one call with 3,000 input and 500 total billed output tokens per question. |
| Standalone Agent Retrieval | $200 | $400 | **Allowance** for performance-optimized ANN capacity, payload storage and operations; not a saved regional calculator estimate. |
| Required reranking | $10 | $100 | One pass of at most 100 candidates per question at the published Ranking API gross rate; verify integrated VertexRanker billing. |
| Additional app capacity on existing GKE | $300 | $600 | **Allowance** for production and small non-production use. |
| GCS source versions, embeddings and Model Armor | $39 | $95 | Combined storage/embedding allowances plus conservative screening arithmetic. |
| Logging, networking and routine evaluation | $150 | $350 | **Allowance** for modest ongoing operations and review. |
| Component subtotal before planning headroom | **$721** | **$1,760** | Sum of the rows above. |
| **Rounded planning budget** | **~$1,000** | **~$2,500** | Includes room for sizing and usage uncertainty. |

Assumptions: a modest text corpus, an existing shared GKE cluster with additional app capacity charged, performance-optimized Agent Retrieval, one production deployment plus small non-production use, one generation call and one reranking pass per question, moderate updates and routine evaluation. Google lists performance-optimized Agent Retrieval capacity at **$0.065 per CU-hour**, with payload storage and operations charged separately; **$2.30 per CU-hour** for storage-optimized capacity would require a new estimate if selected. Confirm the Singapore configuration, corpus size, peak concurrency and full usage in the PoC. Gemini model choice and its output-token consumption can change the result. [Agent Retrieval pricing](https://cloud.google.com/products/gemini-enterprise-agent-platform/pricing), [Gemini pricing](https://cloud.google.com/gemini-enterprise-agent-platform/generative-ai/pricing), [Model Armor pricing](https://cloud.google.com/security/products/model-armor).

The slide figures exclude staffing, content-owner effort, one-time implementation and any Cloudflare plan upgrade. Bulk OCR/parsing, a large evaluation campaign, a new dedicated GKE cluster, high-availability expansion, more expensive models and a storage-optimized retrieval tier also need separate sizing.

## Direct RAG Engine with Spanner Scaled — 27 September 2026

For a **Scaled production deployment** and a separate small **Basic non-production deployment**, show approximately **US$2,500/month at 10,000 questions** or **US$3,500/month at 100,000 questions** as preliminary service budgets with safety headroom. These are for direct RAG Engine using its RAG-managed Spanner database, not Serverless mode or a separately billed vector database. The question volumes match the custom-path examples; they are not forecasts.

Google states that the RAG-managed Spanner Basic tier provisions **100 processing units** and Scaled starts at **one node (1,000 processing units)**, with autoscaling to ten nodes. Selecting Singapore on Google's Spanner pricing page shows Enterprise edition at **$1.40712 per node-hour**, versus **$1.23** in Iowa, so Singapore is about **14% higher** on this compute line. At 730 hours/month, one Scaled node is about **$1,027/month** and one Basic non-production instance about **$103/month**. These are capacity floors, not a guarantee that one production node meets response-time or throughput needs. [RAG Engine billing](https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/rag-engine/rag-engine-billing), [Spanner tiers](https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/rag-engine/spanner-mode), [Spanner regional pricing](https://cloud.google.com/spanner/pricing).

| Monthly component (USD) | 10,000 questions | 100,000 questions | Basis |
| --- | ---: | ---: | --- |
| Spanner Enterprise capacity: one Scaled production node plus Basic non-production | $1,130 | $1,130 | Published Singapore rate applied to 730 hours; excludes extra autoscaled nodes. |
| Spanner storage and backups | $25 | $50 | **Allowance** for a modest corpus and retained backups. |
| Gemini 2.5 Flash generation | $22 | $215 | Same token scenario as the custom path. |
| Required reranking | $10 | $100 | One Ranking API pass of at most 100 candidates per question at the published gross rate. |
| Additional app capacity on existing GKE | $300 | $600 | **Allowance** kept common for a conservative comparison. |
| GCS source versions, embeddings and Model Armor | $39 | $95 | Same small-corpus and screening scenario as the custom path. |
| Logging, networking and routine evaluation | $150 | $350 | **Allowance** for modest ongoing operations and review. |
| Component subtotal before planning headroom | **$1,676** | **$2,540** | Rounded sum of the rows above. |
| **Rounded planning budget** | **~$2,500** | **~$3,500** | Includes room for sizing and usage uncertainty. |

RAG Engine's default parser and fixed-size chunking are documented as free, while model-based parsing, embeddings, generation and reranking can be billed separately; one required reranking pass is included; model-based parsing and OCR are outside this example. The published Ranking API rate is $1 per 1,000 queries, with up to 100 candidate documents per query; larger sets or multiple passes raise the charge. Verify the billable method and regional data handling. [Ranking pricing](https://cloud.google.com/generative-ai-app-builder/pricing). A second continuously active production node would add about **$1,027/month before headroom**. Making non-production Scaled instead of Basic would add about **$924/month before headroom**. Singapore RAG Engine remains **Preview**. Its overview describes managed Spanner billing for GA locations, so confirm the actual Preview billing terms; this planning figure conservatively assumes Spanner is charged. The same page says data-residency controls are unsupported, so a Singapore endpoint alone is not a data-residency assurance. [RAG Engine billing](https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/rag-engine/rag-engine-billing), [deployment modes](https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/rag-engine/deployment-modes), [region and launch stage](https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/rag-engine/rag-overview).

Both current paths must be repriced after the PoC with actual corpus size, peak concurrency, token use, model choice, environment count and optional services. Contact Google Cloud for an actual quote for the chosen regional configurations before using either estimate as a funding baseline. Staffing, content-owner effort, one-time implementation, Cloudflare upgrades, large OCR/parsing, heavy evaluation and a new dedicated GKE cluster are excluded from the slide figures.

## Historical estimate for the previous retrieval design

For an English, public-content, single-question MVP, allow approximately **US$600–1,500/month at 10,000 questions** or **US$1,200–3,000/month at 100,000 questions** for incremental cloud/service running costs under the assumptions below. These are budget envelopes, not measured demand, expected bills, capacity guarantees, or hard spending caps.

This is **SERVICE COSTS ONLY**. It excludes every salary, contractor, staffing allocation and content-owner effort. It is neither the total project cost nor a nine-month implementation budget. Existing ONE application platform spending is not charged again. Additional capacity, database resources and usage attributable to Ask ONE are included as allowances.

The earlier technical proposal included GKE application workloads, managed Gemini inference through Vertex AI, Cloud Storage (GCS) source versions, candidate Cloud SQL PostgreSQL/pgvector retrieval, proposed Model Armor screening, and evaluation/monitoring. Counting only model tokens would materially understate the service budget.

## Self-hosted tooling option — 13 September 2026

The September 13 slide proposal included self-hosted Phoenix in GCP, Ragas evaluation jobs and Promptfoo Community test runners. That design has since been superseded. No Enterprise licence fee was assumed. Phoenix uses ELv2 and Ragas uses Apache 2.0. Promptfoo Community listed 10,000 red-team probes/month. Sources: [Phoenix self-hosting](https://arize.com/docs/phoenix/self-hosting), [Ragas licence](https://github.com/vibrantlabsai/ragas/blob/main/LICENSE), [Promptfoo pricing](https://www.promptfoo.dev/pricing/).

**The envelopes below remain baseline estimates, not revised totals including these new workloads.** Additional monthly service costs are TBC / to be discussed. Size Phoenix compute, database, retained traces and backups; evaluation/test runner compute; model and embedding calls; storage and network usage. Reconcile the existing telemetry/routine-evaluation allowance before adding incremental costs so the same workload is charged only once. Free licensing does not imply spare capacity or free inference. Hosting operations require effort, which remains outside this service-only estimate.

## Scenario assumptions

- One production deployment plus a small, shared non-production environment. No dedicated GPU or self-hosted model, multi-region disaster-recovery estate, or provisioned model throughput.
- Reuse ONE's existing GKE/GCP application platform. Existing cluster-management fees and unrelated workloads remain part of the existing baseline. Additional workloads still consume capacity; shared does not mean free.
- Singapore (`asia-southeast1`) is a provisional infrastructure planning location, not a confirmed deployment choice. The database and compute amounts below are explicit allowances, not verified Singapore SKU quotations. Confirm model endpoint availability, data residency, regional rates, machine shape and HA topology before approval.
- 10,000 or 100,000 questions per month are illustrative scenarios. Actual monthly volume and peak concurrency need research. Both scenarios assume the same bounded feature set.
- One answer-generation call per question, averaging 3,000 input tokens including retrieved passages and 500 **total billed output tokens, including reasoning**. No assumed cache discount. Extra calls, longer context, thinking and retries must be measured.
- Small text corpus: provisionally no more than 100 GiB of stored source versions and moderate ingestion changes. Source retention, document count, index size and evaluation workload are not confirmed.
- Custom application retrieval from PostgreSQL/pgvector supplies passages to the model. Managed RAG Engine, Vertex AI Search, paid grounding tools and separate vector-search services are not assumed on top of this path.
- Modest ongoing automated evaluation and non-production API usage are covered by the operations allowance; initial bulk ingestion, OCR, migration or a large benchmark campaign require separate estimates.

## Auditable monthly estimate

All amounts are USD. Rounded model/screening values deliberately simplify the management view. Items labelled **allowance** are our planning judgments, not Google price quotes.

| Service component | 10,000 questions/month | 100,000 questions/month | Basis |
| --- | ---: | ---: | --- |
| Vertex AI answer generation | $22 | $215 | Illustrative Gemini 2.5 Flash rate calculation below; model selection is not final. |
| Additional GKE application capacity | $100–300 | $200–600 | **Allowance** for application/API and ingestion workloads across production and small non-production usage. |
| Cloud SQL retrieval database and backups | $250–650 | $350–1,000 | **Allowance** for a modest database footprint, backups and small non-production use; edition, HA, sizing and reuse need validation. |
| GCS source versions and operations | $5–20 | $10–30 | **Allowance** for a small retained corpus and requests; bulk public downloads are not assumed. |
| Proposed Model Armor screening | $4 | $35 | Gross token-rate calculation below, before free allotments. |
| Embeddings and routine re-indexing | $5–15 | $10–30 | **Allowance** pending selected embedding model, corpus and update rate. |
| Logging, monitoring, networking and routine evaluation | $50–150 | $100–350 | **Allowance** for modest telemetry, networking and additional test/model calls; not a priced enterprise evaluation subscription. |
| Subtotal | $436–1,161 | $920–2,260 | Sum of the rows above. |
| Subtotal plus 25% contingency | $545–1,451 | $1,150–2,825 | Contingency applied to both ends, rounded to whole dollars. |
| **Rounded planning envelope** | **$600–1,500** | **$1,200–3,000** | Rounded budgeting figures; revisit after PoC measurements. |

### Token calculations

Google lists standard Gemini 2.5 Flash text input at $0.30 per million tokens and output, including reasoning, at $2.50 per million. This is a transparent price example, **not a recommendation to lock a future release to this model**. Confirm lifecycle, endpoint and quality before selection. [Google model pricing](https://cloud.google.com/vertex-ai/generative-ai/pricing).

```text
Per question = (3,000 × $0.30 + 500 × $2.50) / 1,000,000
             = $0.00215
10,000 questions = $21.50
100,000 questions = $215.00
```

For sensitivity, an additional 1,000 billed output tokens per question adds $25/month at 10,000 questions or $250/month at 100,000 questions under that rate. More expensive models and multiple generation calls can increase this further; measure actual token use, not just the visible answer length.

Model Armor lists $0.10 per million tokens above a two-million-token monthly free tier. Conservatively ignoring the free tier, screening 3,500 tokens per question gives $3.50 or $35/month. The input/output mix actually screened and available account entitlements must be checked. Model Armor is the proposed screening service, subject to PoC validation. Screening does not replace application controls or security review. [Model Armor pricing](https://cloud.google.com/security/products/model-armor).

### Infrastructure pricing evidence and limits

- GKE pricing separates workload compute from the cluster fee; the published fee is $0.10 per cluster-hour. Reusing an existing cluster does not create a second cluster fee, but extra nodes or billed pod resources still cost money. If a new cluster is required, add its fee and capacity after configuration is known. [GKE pricing](https://cloud.google.com/kubernetes-engine/pricing).
- Cloud SQL pricing depends on edition, CPU/memory, region and availability configuration. The public pricing page could be located and its pricing dimensions checked through search, but the full page repeatedly timed out in this research session. Consequently no precise regional CPU/HA rates are claimed; replace the allowance with a saved calculator estimate once sizing and topology are agreed. [Cloud SQL pricing](https://cloud.google.com/sql/pricing).
- Cloud Storage charges depend on location, class, stored volume, operations and transfer. Retained versions and lifecycle rules affect the storage footprint. The allowance is not a quote for a selected regional SKU. [Cloud Storage pricing](https://cloud.google.com/storage/pricing).
- Logging lists $0.50/GiB ingested into log storage beyond its first 50 GiB/project/month, including up to 30 days' retention. Other observability and networking charges depend on usage. Existing shared allowances cannot be assumed available to Ask ONE. [Google Cloud Observability pricing](https://cloud.google.com/products/observability/pricing).

## Exclusions and conditions that require re-estimation

Exclude payroll and contractors, human content preparation/review, one-time implementation/migration, taxes and exchange-rate changes, negotiated discounts/credits, premium support contracts, new third-party licences, and Cloudflare plan upgrades. Existing Cloudflare coverage is a dependency to confirm; a required upgrade is additional service cost.

This estimate does not include managed RAG/Search products in addition to custom retrieval, OCR/Document AI, fine-tuning/training, dedicated GPUs, provisioned model throughput, heavy analytics, large-scale evaluation runs, large data transfer, multiple full-sized environments or multi-region recovery. If any becomes necessary, add it explicitly. A 25% contingency is not enough to absorb arbitrary scope or architecture changes.

Monthly request count does not determine application or database capacity by itself. Concurrency, response latency, vector index size, source refresh workloads, HA, retention, abuse and environment count may dominate. Traffic exceeding the scenarios or a materially different model can exceed the envelope. Do not multiply these steady-state examples by nine and present that as a full project budget; implementation spending ramps differently.

## Decisions needed before the service budget can conclude

1. PO/PPO and business owners confirm likely demand, supported journeys, success measures, feature scope and pilot audience.
2. PO/PPO and content owners agree source volume, ownership, permissions, approval, refresh and retention.
3. TA validates existing GKE headroom, network/edge arrangements, deployment region, required HA, database sizing, non-production environments and shared billing allocations.
4. The PoC measures grounded-answer quality, average and upper-percentile tokens, model calls per question, retrieval latency, screening impact, ingestion effort and evaluation usage.
5. Produce a calculator-backed estimate using the chosen SKUs and refresh current rates. Set budget alerts, quotas, rate limits, bounded generation and service-level cost reporting; alerts alone are not spending caps.

## Does this MVP require a dedicated ML engineer?

**Assessment, not a vendor staffing claim:** a full-time ML engineer is not an automatic prerequisite for this scope. The proposal uses managed foundation-model inference with retrieved context rather than building or training a model. Google's RAG documentation describes ingestion, transformation, embeddings, indexing, retrieval and generation as the core stages. [Google RAG overview](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/rag-overview).

No additional ML engineer or specialist-support allocation is planned. Include learning, experimentation and evaluation in discovery and the PoC. Managed inference removes the need to train a custom model for this scope, but it does not remove the work required to validate retrieval, source governance, answer quality, security and operations.

Use PoC evidence to reassess the implementation approach and schedule. Do not assume team size guarantees the nine-month scenario. Business decisions and content-owner approval remain separate dependencies.

## Suggested slide wording

Placement: last core technical slide, after Quality and production readiness.

Title: **Estimated monthly service costs**

Show 10,000 and 100,000 monthly-question examples with the rounded envelopes; separate model usage from the combined infrastructure/operations allowances. State on-slide: **“Incremental service costs only; excludes staffing. Existing GKE is reused. Usage and configuration are assumptions, not forecasts. Confirm after the PoC.”** Keep auditable assumptions in notes and link this report from the plan.
