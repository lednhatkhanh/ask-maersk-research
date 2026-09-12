# Ask ONE: preliminary monthly service costs

Pricing checked: 12 September 2026. Status: illustrative planning estimate, not a quotation or approved budget. Re-estimate after discovery and the PoC.

## Manager summary

For an English, public-content, single-question MVP, allow approximately **US$600–1,500/month at 10,000 questions** or **US$1,200–3,000/month at 100,000 questions** for incremental cloud/service running costs under the assumptions below. These are budget envelopes, not measured demand, expected bills, capacity guarantees, or hard spending caps.

This is **SERVICE COSTS ONLY**. It excludes every salary, contractor, staffing allocation and content-owner effort. It is neither the total project cost nor a nine-month implementation budget. Existing ONE application platform spending is not charged again. Additional capacity, database resources and usage attributable to Ask ONE are included as allowances.

The current technical proposal includes GKE application workloads, managed Gemini inference through Vertex AI, Cloud Storage (GCS) source versions, candidate Cloud SQL PostgreSQL/pgvector retrieval, optional Model Armor screening, and evaluation/monitoring. Counting only model tokens would materially understate the service budget.

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
| Optional Model Armor screening | $4 | $35 | Gross token-rate calculation below, before free allotments. |
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

Model Armor lists $0.10 per million tokens above a two-million-token monthly free tier. Conservatively ignoring the free tier, screening 3,500 tokens per question gives $3.50 or $35/month. The input/output mix actually screened and available account entitlements must be checked. Screening is optional in this estimate and does not replace application controls or security review. [Model Armor pricing](https://cloud.google.com/security/products/model-armor).

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
