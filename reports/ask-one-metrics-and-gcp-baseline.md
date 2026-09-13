# Ask ONE: GCP baseline and measurement checklist

Research date: 13 September 2026. This is a proposed measurement plan, not measured performance, approved targets or a procurement decision. Applies to the English-only, public-content, single-question Ask ONE proposal on GKE using managed generation and custom retrieval. No slide changes accompany this report.

Read alongside [tool comparison](ask-one-llm-tool-comparison.md) and [existing service-cost estimate](ask-one-gcp-cost-estimate.md).

## Recommended division of responsibility

Keep operational metrics, logs, alerts and service-level objectives in Google Cloud Monitoring/Logging/Trace. Instrument the application with OpenTelemetry and correlate the customer request, retrieval, model calls and output checks. GCP's current documentation explicitly supports generative-AI telemetry and viewing prompt/response events in Cloud Trace. This is not limited to an agent hosted on Agent Engine, although framework-specific automatic instrumentation must be checked for the actual Node.js/GKE implementation. Instrumenting the custom retrieval and application checks remains engineering work. [Google AI observability](https://docs.cloud.google.com/stackdriver/docs/instrumentation/ai-agent-overview).

Use Google's Gen AI evaluation service as the first comparison baseline for rubric-based, computation-based and custom evaluation. Its current documentation distinguishes a newer preview client from a GA evaluation module. Confirm the exact API, region and maturity needed before adoption. Some Vertex AI documentation now redirects to Gemini Enterprise Agent Platform URLs; that is not a reason to migrate Ask ONE's runtime. [Evaluation overview](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/evaluation-overview).

Use Model Armor as the candidate prompt/response screening layer. Keep source eligibility, citation validation, administration permissions, pilot access and fail-safe decisions in the application. Screening detects selected risks; it does not prove correctness or enforce every business rule. [Model Armor overview](https://docs.cloud.google.com/model-armor/overview), [screening integration](https://docs.cloud.google.com/model-armor/sanitize-prompts-responses).

A specialist LLM product must earn its place through faster investigation, dataset review, annotations or repeatable experiments. Do not buy another platform simply to duplicate CPU, error-rate, latency or token dashboards. Pick at most one primary LLM review interface. Evaluation code such as Ragas can supplement it if specific retrieval diagnostics are missing. Use a single source of truth for each metric and versioned dataset; do not pay multiple tools to judge every answer independently.

## What each term means

- **Tracing:** reconstruct one request as related spans and events. It explains where time went and which sources, model version and checks affected an answer.
- **Observability:** aggregate telemetry to understand service health, changes, failures and cost over time. Tracing is one input.
- **Evaluation:** assess the quality and correctness of answers, retrieval and fallback against agreed criteria. An HTTP 200 is not a quality score.
- **Runtime security:** enforce permissions and policy before information or an action reaches the user. An evaluation result or a vendor's SOC 2 certification is not runtime enforcement.
- **Platform security:** protect the monitoring/evaluation tool itself through identity, access, audit, retention and deployment controls. Evaluate these separately from runtime protections for Ask ONE.

## Measurement rules

The following checklist is an Ask ONE design recommendation. Metric definitions and thresholds need agreement before formal tests. It is not a claim that every vendor automatically collects these fields.

1. Record counts and denominators alongside percentages. Separate offered requests, admitted requests, generated answers, safe fallbacks, blocked traffic, failures, cancellations and sampled evaluations.
2. Measure durations as histograms and report p50, p95 and p99 with sample size and time window. Tail estimates from small PoC samples are unstable. Never average percentile values across servers.
3. Break down by environment, release, model/version, prompt version, retrieval configuration, source/index version, topic, cache state, answer/fallback outcome and streaming mode. Avoid raw questions, identities or request IDs as metric labels; keep correlation identifiers in traces.
4. Use representative load and a consistent dataset. Report changes against the same baseline, with confidence intervals and repeated runs where appropriate.
5. Use real customer evidence for business outcomes. Synthetic questions expand coverage but do not establish customer demand or real resolution rates.
6. Do not infer model hidden reasoning from traces. Record observable operations and decisions, with source/version references.

## 1. Customer-visible performance

| Measure | Definition / reporting requirement |
|---|---|
| Time to acknowledgement | Browser submit to useful progress indication. A spinner is not an answer. |
| User-visible time to first answer token | Browser submit to the first actual answer content displayed. Report separately from progress text. |
| Model time to first token (TTFT) | Model request dispatch to first returned answer token. Specify whether provider measurement is server-side or client-observed. Exclude metadata/role-only chunks. |
| Time to first safe answer | Browser submit to the first content that has passed the configured release checks. This is the more important user SLI if output screening buffers the answer. |
| End-to-end completion latency | Browser submit to final answer, citations and service links rendered. Track p50/p95/p99 for each outcome. |
| Model completion latency | Model dispatch to final response received; distinguish it from application completion. |
| Inter-token/chunk gaps | Streaming pauses, including p95 gap and longest stall. Network chunks are not necessarily individual tokens. |
| Output throughput | Visible answer tokens divided by generation interval, with explicit interval and tokenizer. Keep reasoning tokens separate. |
| Cancellation latency | User cancel to application/model work stopping, and paid work that continued after cancel. |
| Citation/link rendering delay | Answer text available to sources and service links actually usable. |
| Client/server difference | Browser-visible time versus server trace time, by region/device/network where permitted. |

**Safety and streaming:** if the policy requires checking the whole answer before release, provider streaming will not give the customer the same TTFT benefit. Measure buffering and screening separately. Do not release unchecked tokens merely to improve a latency chart. A deterministic source check and semantic support review can have different timing constraints. This follows the proposed application-enforced response gate; it is a design consequence, not a claim about automatic Model Armor streaming support.

OpenTelemetry defines conventions for generative-AI telemetry; pin the semantic-convention and SDK versions used, rather than assuming every exporter emits identical metrics. [OpenTelemetry generative-AI conventions](https://opentelemetry.io/docs/specs/semconv/gen-ai/).

## 2. Pipeline and capacity

| Measure | What to track |
|---|---|
| Stage latency | Edge/challenge validation, admission/queue wait, input screening, embedding, retrieval, reranking if present, generation, citation checks, output screening and rendering. |
| Pipeline critical path | Separate exclusive stage duration from overlapping spans. Do not sum parallel work as if serial. |
| Traffic and concurrency | Monthly/daily/hourly questions; requests per second at peak; admitted requests; concurrent in-flight generations. |
| Queue health | Depth, oldest age, wait time, rejected work and worker saturation. |
| Provider pressure | Requests/tokens per minute, quota headroom, 429s, timeout rate, retries and backoff time. |
| GKE health | CPU/memory, restarts, out-of-memory events, pod/node availability, scaling delay and resource headroom. |
| Retrieval database | Query latency, connection-pool wait, CPU/memory/IO, storage/index size, slow queries, backup status and restore duration. |
| Cache | Hit rate, served-answer correctness, age, avoided calls, lookup latency and invalidation delay. Separate application answer cache from provider prompt caching. |
| Saturation tests | Maximum sustained concurrency that still meets agreed latency/error/quality conditions; burst and recovery behavior. |

Use existing GCP infrastructure monitoring for these. The specialist tool adds value only where it joins a slow or incorrect answer to its exact retrieval/model/experiment context.

## 3. Cost and budgeting

| Measure | Definition / reason |
|---|---|
| Total monthly service cost | Generation + retrieval/database + compute + storage + screening + embeddings + telemetry + networking + evaluation + licences. Separate one-time costs and staffing. |
| Cost per submitted question | All allocated service costs divided by submitted legitimate questions; identify policy on abuse traffic. |
| Cost per delivered answer | Relevant cost numerator divided by delivered answers. Report safe fallbacks separately. |
| Cost per successful answer | Period cost divided by answers meeting the agreed success definition. If success is estimated from a sample, disclose extrapolation and uncertainty. |
| Variable model cost per request | Sum billed tokens and applicable rates for all model calls, including retries, judges, reformulation and reranking if used. |
| Token distribution | Uncached input, cached input, visible output and reasoning output; mean/p50/p95, maximum, context utilization and truncation. Avoid double-counting reasoning already included in total output. |
| Calls per question | Generation, retry, fallback-model and evaluation calls, separated by purpose. |
| Evaluation spend | Cases × candidates × repetitions × metrics × actual judge calls, plus tokens/embeddings and human review effort. Not every metric is exactly one judge call. |
| Telemetry spend | Spans/observations/events per question, bytes, sampling percentage, retention, query/scanned volume, overages and duplicate exports. |
| Content processing | Initial ingestion/OCR if required, embeddings, changed content, reindexing, storage versions and deletion work. |
| Fixed versus variable cost | Infrastructure baseline, licence minimums and reserved capacity versus per-question consumption. |
| Forecast and burn | Actual versus budget, daily burn, forecast month-end, cost anomaly count and enforced spend-limit events. |
| Tool total ownership cost | Subscription plus judge/model fees, infrastructure, databases, backup/restore, upgrades, integration and operational support effort. Self-hosted does not mean free. |
| Overall operating effort | Content review and support hours, separately from cloud/service cost. Use approved internal rates only if converting to money. |

### Existing Ask ONE numbers to remember

These come from the repository's dated planning estimate, read during this review, not from measured usage. Infrastructure figures remain allowances.

| Assumption | 10,000 questions/month | 100,000 questions/month |
|---|---:|---:|
| Incremental service planning envelope | $600–1,500/month | $1,200–3,000/month |
| Illustrative generation component | $21.50/month | $215/month |
| Envelope divided by questions | $0.06–0.15/question | $0.012–0.03/question |

Generation example: one call with 3,000 input tokens and 500 total billed output tokens, including reasoning. At the verified standard Gemini 2.5 Flash text rates of $0.30/M input and $2.50/M output, this equals **$0.00215/question**. Rates still appear on Google's official pricing page at this review; model choice and deployment availability remain to validate. The lower per-question envelope at higher volume assumes fixed costs are spread across more traffic; it is not a capacity guarantee. [Model pricing](https://cloud.google.com/gemini-enterprise-agent-platform/generative-ai/pricing).

The old envelope includes 25% contingency and rounding. It excludes payroll, content-owner effort, one-time implementation, new third-party licences and Cloudflare upgrades. Any new paid evaluation/observability platform requires an explicit added line item, or a documented replacement of an existing allowance. Do not assume it fits the $50–150 / $100–350 monthly operations allowance. [Existing estimate](ask-one-gcp-cost-estimate.md).

Model Armor lists 2M tokens/month free and $0.10 per additional million. The original gross 3,500 screened-token scenario was $3.50 / $35 before free-tier treatment; actual scanned content may differ from model context and existing shared entitlement is unconfirmed. [Model Armor pricing](https://cloud.google.com/security/products/model-armor).

Cloud Trace charges now need attention to both ingested and scanned spans. Logging/metrics storage, retention and sampling also affect cost. Do not describe native observability as free merely because it is in GCP. [Observability pricing](https://cloud.google.com/products/observability/pricing).

## 4. Retrieval and content quality

| Measure | Definition / requirement |
|---|---|
| Retrieval recall@k | Fraction of annotated relevant evidence retrieved in the top k; agree evidence granularity (document or passage). |
| Retrieval precision@k | Relevant results among the top k returned. Distinguish this simple definition from a library's rank-weighted context-precision score. |
| Ranking quality | MRR for first relevant hit or nDCG@k for graded/multiple relevant results; choose one suited to the task. |
| Context relevance/noise | Useful versus irrelevant retrieved material, duplication and contradictory sources. |
| Evidence sufficiency | Whether the retrieved context contains enough information to answer the question, assessed separately from the generated response. |
| No-result rate | Queries with no eligible evidence, split into supported-topic failures and correctly unsupported topics. |
| Source eligibility | Draft, restricted, unapproved or removed passages retrieved or exposed. Track failures explicitly. |
| Extraction quality | Tables, attachments and structured content correctly extracted; broken source mapping and missing fields. |
| Content coverage | Agreed questions/topics supported by approved content; important gaps and owner review backlog. |
| Freshness | Source change to index availability; removal to retrieval/cache exclusion; p95 and maximum delay. |
| Content operations | Sync success/error rate, backlog size/age, failed documents, stale versions, broken URLs and review age. |

## 5. Answer evaluation

| Measure | Definition / caution |
|---|---|
| Human-reviewed correctness | Correct answers on the approved evaluation set; assess material errors by severity, not only a mean score. |
| Faithfulness / groundedness | Whether answer claims are supported by the supplied evidence. A faithful answer can still repeat an incorrect source. |
| Answer relevance | Whether it addresses the customer's actual question. |
| Completeness | Required facts or next steps covered without unsupported additions. |
| Citation validity | Source identifier/version is eligible and URL/anchor resolves. |
| Citation support | Claims actually supported by cited evidence; separate from a working URL. |
| Citation coverage | Material factual claims with supporting citations / material claims requiring support. |
| Appropriate fallback | Correct refusal/fallback on unanswerable questions; wrong-answer rate on those questions. |
| Over-refusal | Answerable supported questions incorrectly declined / answerable test questions. |
| Service-link accuracy | Correct destination and relevant next action; no claim to perform a transaction. |
| Clarity | Readability, concise English, terminology and useful explanation rather than a list of links. |
| Robustness | Paraphrases, typos, ambiguous/unsupported queries, long input, contradictory/stale evidence and repeat-run variability. |
| Baseline improvement | Paired comparison against existing search/help and a simpler retrieval approach on the same tasks. |
| Regression rate | Previously passing cases that fail after model, prompt, source or retrieval changes. |
| Evaluator calibration | Judge-human agreement, false positive/negative rates, inter-reviewer agreement and disagreement resolution. |
| Test coverage | Cases and results per topic/risk slice, sample size, annotation completeness, held-out cases and version history. |

Never reduce release readiness to one overall “RAG score.” Keep retrieval quality, answer support, correctness and customer usefulness separate. Freeze the acceptance rubric for a release comparison, even if a tool can generate adaptive rubrics. Otherwise the measuring instrument changes during the experiment.

## 6. Security and privacy

| Measure | Definition / requirement |
|---|---|
| Attack success rate | Successful policy bypasses / attempted attacks in the documented adversarial suite, with breakdown by attack class. |
| Prompt injection | Direct and source-borne instructions that alter behavior, leak data or bypass allowed sources. |
| Sensitive-data exposure | Restricted source, PII/secret or protected administrative data in outputs, traces, logs or exports. |
| Screening accuracy | Detection rate on malicious cases and false-block rate on benign cases. A larger block rate alone is not success. |
| Enforcement reliability | Screening failure/timeout cases handled safely, policy decisions actually applied, bypass attempts and fail-open events. |
| Source/administration access | Failed and successful unauthorized access attempts, cross-scope access and missing approvals. |
| Bot/quota enforcement | Replayed challenge acceptance, gateway bypass, quota overshoot, concurrency races and false rejections for shared networks. |
| Security latency/cost | Input/output screening duration, retry/failure rates, tokens screened and added cost per request. |
| Telemetry privacy | Percentage with redaction applied, unredacted test leaks, unexpected exports, retention/deletion compliance and access audits. |
| Defects and remediation | Open release-blocking defects, age/severity, remediation and retest evidence. |

Proposed non-negotiable release conditions: no known release-blocking security defect, no observed unauthorized-source exposure in the agreed suite, and mandatory source/citation checks enforced on every released answer. These are proposed controls, not statistically proven zero risk. Even zero failures in n independent representative tests leaves uncertainty (roughly 3/n as a 95% upper bound under the rule-of-three approximation).

## 7. Reliability and operational readiness

Track legitimate-request availability, 5xx/network failures, timeouts, partial responses, provider failures, retry exhaustion, fallback availability, mean time to detect/recover, SLO error-budget burn, rollback time, backup/restore results, deployment failure rate, source-sync recovery, and runbook coverage. A safe unsupported-topic fallback can be a successful technical response; distinguish it from a generated-answer success and a customer resolution.

Track trace coverage, missing spans, export failures, sampling bias, evaluation job completion and telemetry delay. A quiet dashboard is not evidence of health if telemetry is failing.

## 8. Customer value

Track task completion, time to useful guidance, correct next-action choice, user-rated helpfulness with response rate, abandonment, repeated questions, fallback-to-support use and verified supported-question resolution. Compare with existing search/help. Link clicks or silence after an answer do not prove resolution. Record content-maintenance and support effort alongside service cost so operational savings are not invented.

## Initial dashboard and decision cadence

Start with 12 tiles: legitimate volume; customer-visible first-safe-answer p95; completion p95; failure/timeout rate; monthly spend forecast; cost per successful answer; human correctness; claim support/citation coverage; retrieval recall@k; correct fallback and over-refusal; content freshness/removal lag; security violations and false blocks.

The underlying checklist remains necessary for diagnosis. Suggested cadence: operational and security alerts continuously; usage, latency and cost daily; quality/content reviews weekly; full regression before releases and after material model/prompt/index changes; business outcomes during controlled pilot reviews.

Do not invent “good” latency or quality targets before evidence. During the PoC, measure distributions and human-reviewed baselines. Before pilot, agree numeric latency, quality, freshness, spend and reliability thresholds with PO/PPO, content owners and the technical lead. Each target needs an owner, denominator, time window, sample requirement, alert/review action and exception policy. Trial tool performance is not a replacement for these decisions.
