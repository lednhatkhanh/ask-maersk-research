# Ask ONE: LLM tooling comparison

Research date: 13 September 2026. Official product documentation and public list prices were checked live. This is a proposed shortlist, not a procurement decision or proof that any service is enabled in ONE's GCP environment. Currency is USD unless stated otherwise. No slides were changed for this research.

Read alongside the [GCP baseline and full measurement checklist](ask-one-metrics-and-gcp-baseline.md).

## Recommendation

**Keep GCP as the operational and security foundation. Trial one LLM engineering workspace only if it improves the team's evaluation and debugging workflow.** My first hosted candidate is Langfuse; Phoenix is a strong candidate when keeping the workspace inside GCP is more important. Ragas is a useful evaluation library that can feed either workspace. Promptfoo adds adversarial testing. Do not deploy Langfuse, Phoenix, Arize AX and LangSmith together.

This is a workflow recommendation, not a claim that GCP lacks tracing or evaluation. Cloud Trace accepts OpenTelemetry and supports instrumented GenAI prompts, responses and tool calls. Google's Gen AI evaluation service provides rubrics, deterministic metrics, custom Python evaluation functions and dataset workflows. Third-party value must be demonstrated through easier investigation, annotation, experiment comparison or portable RAG metrics. [Cloud Trace](https://docs.cloud.google.com/trace/docs/overview), [Gen AI evaluation](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/evaluation-overview).

## Capability and overlap

| Tool | Tracing and observability | Evaluation | What “security” means here | Ask ONE decision |
| --- | --- | --- | --- | --- |
| Ragas | Evaluation results; not the primary production tracing workspace | RAG metrics, custom metrics, experiments and synthetic test data | Quality/safety checks can be implemented; not an inline protection boundary | Use selectively for portable RAG checks when native evaluations do not provide the desired workflow |
| Langfuse | LLM trace/session inspection, usage, cost and prompt versions | Datasets, experiments, human annotations and LLM judges; accepts Ragas scores | Platform access controls and trace-data handling; do not count these as prompt-injection blocking | First hosted workspace candidate |
| Phoenix | OpenTelemetry/OpenInference trace investigation | Code/LLM/human scores, datasets, experiments, prompt iteration; Ragas integration | Self-host controls protect the workspace; not an inline application firewall | Strong self-host candidate; compare with Langfuse instead of adding both |
| Arize AX | Managed trace investigation and token/latency/cost analysis | Online/offline evaluation, annotations and experiment workflows | Enterprise platform governance/access features | Consider when managed analysis and enterprise support justify it |
| Promptfoo | Test reports, not the primary production trace backend | Regression evaluation and application-specific adversarial testing | Security testing finds weaknesses; it does not block live user requests | Focused addition for security validation |
| LangSmith | LLM tracing, monitoring and prompt workflows | Online/offline evaluations and annotation | Platform security; separate gateway has runtime data controls | Alternative if its workflow wins; avoid additional deployment/gateway services without an identified gap |

Capability sources: [Ragas overview](https://docs.ragas.io/en/stable/), [Langfuse documentation/pricing](https://langfuse.com/pricing), [Phoenix overview](https://arize.com/docs/phoenix), [Arize AX capabilities](https://arize.com/pricing/), [Promptfoo FAQ](https://www.promptfoo.dev/docs/faq/), [LangSmith services](https://www.langchain.com/pricing). The selection and runtime-security boundaries in this table are our assessment of their documented roles.

## Ragas: good fit, with a specific job

Ragas is an evaluation library, not a replacement for the complete operations stack. Its metric catalog separates retrieval quality from response quality: context precision/recall, noise sensitivity, response relevancy and faithfulness, alongside factual correctness and custom rubrics. It also supports synthetic evaluation data. [Metric catalog](https://docs.ragas.io/en/stable/concepts/metrics/available_metrics/), [Ragas overview](https://docs.ragas.io/en/stable/).

For Ask ONE, use it to compare chunking, retrieval, reranking, prompt and model changes on the same approved questions. Our recommendation is to start with a small set of useful scores, calibrate them against content-owner judgments and inspect failures. Faithfulness to retrieved text does not establish that the text is current, correct or suitable for that market. Add explicit checks for source version, locale, citation validity, allowed service links and appropriate fallback.

Ragas can use Vertex AI models as evaluators. Its open-source repository uses Apache-2.0. The library itself does not imply a hosted monthly subscription, but evaluation and synthetic-data generation consume model/embedding calls and compute. Configure usage capture; the cost guide says `evaluate()` does not automatically calculate token usage without the relevant parser, and notes limitations for test-generation transform accounting. Do not reuse the old example model prices in that guide. [Vertex AI integration](https://docs.ragas.io/en/stable/howtos/applications/vertexai_x_ragas/), [repository/license](https://github.com/vibrantlabsai/ragas), [cost accounting](https://docs.ragas.io/en/stable/howtos/applications/_cost/).

Langfuse can attach Ragas results to experiment runs and traces. It also has managed evaluator templates developed with Ragas, so installing a separate Ragas runner is optional if those templates satisfy the requirements. Pin whichever implementation and judge configuration we choose so scores remain comparable. [Ragas integration](https://langfuse.com/integrations/frameworks/ragas).

## Prices and billing traps

| Product | Public plan snapshot | Qualification |
| --- | --- | --- |
| Langfuse Cloud | Hobby free: 50,000 units/month, 30-day access, two users. Core $29/month: 100,000 units, 90-day access. Pro $199/month: 100,000 units, three-year access. Teams add-on $300/month; Enterprise $2,499/month. | Paid-plan initial overage $8 per 100,000 units; lower marginal rates at greater volume. Teams adds enterprise SSO/finer RBAC; audit logs are Enterprise. |
| Arize AX | Free: 25,000 spans and 1 GB/month, 15-day retention. Pro $50/month: 50,000 spans and 10 GB/month, 30-day retention. Enterprise custom. | Free/Pro are SaaS; enterprise also offers self-hosting. No public overage schedule was established from the reviewed page. |
| Phoenix self-host | No license fee or usage/feature limits stated by vendor | You pay infrastructure and operating effort; it is a different product/deployment decision from AX Pro. |
| Ragas library | Apache-2.0 open source | Judge/embedding calls, test generation, compute and maintenance still cost money; enterprise collaboration is not a published fixed-rate hosted plan on the reviewed site. |
| Promptfoo | Community free with 10,000 red-team probes/month; Enterprise and On-Premise custom | A probe is a request to the target. Model calls and target execution still need budgeting. |
| LangSmith | Developer $0, one seat, 5,000 base traces/month. Plus $39/seat/month, 10,000 base traces/month. Enterprise custom. | Usage extra; current page uses storage/compute units (LSU $1, LCU $1.50). Base trace retention 14 days; extended 400 days. Obtain a current workload estimate. |

Sources: [Langfuse prices](https://langfuse.com/pricing), [AX prices](https://arize.com/pricing/), [Phoenix self-hosting](https://arize.com/docs/phoenix/self-hosting), [Ragas repository](https://github.com/vibrantlabsai/ragas), [Ragas commercial contact](https://www.ragas.io/), [Promptfoo prices](https://www.promptfoo.dev/pricing/), [LangSmith prices](https://www.langchain.com/pricing).

**A trace, span and Langfuse unit are different billing quantities.** Langfuse units equal traces + observations + scores, including objects created by experiments and annotations. A single user request can create several units. As an illustrative calculation, 100,000 requests × (one trace + five observations + two scores) = 800,000 units; Core would be $29 + 7 × $8 = $85/month before extra experiment objects, judge calls or other services. This is not an Ask ONE traffic forecast. [Billable units](https://langfuse.com/docs/administration/billable-units), [rates](https://langfuse.com/pricing).

Treat “unlimited evals” on the AX pricing page as a product allowance, not evidence of unlimited free evaluator-model inference. Confirm evaluator provider, included credits, limits, overages and billing in the trial/quote. Similarly, a free open-source evaluation runner does not make target-model calls free.

Self-hosting Langfuse introduces web and worker services, PostgreSQL, ClickHouse, Redis/Valkey and object storage. The documented Docker Compose option does not include production HA/scaling/backups. Budget maintenance, upgrades, retention, backup/restore and incidents as well as compute/storage. [Langfuse self-host architecture](https://langfuse.com/self-hosting).

Phoenix supports Docker, Kubernetes/Helm and Cloud Run deployment, and provides authentication, permissions and retention configuration. Its self-hosted deployment can remain air-gapped, but selecting an external evaluator still creates a separate model-data flow. Compare practical deployment and maintenance effort in the PoC; do not infer that “free” makes either candidate operationally free. [Phoenix self-hosting](https://arize.com/docs/phoenix/self-hosting).

## Security: keep three responsibilities distinct

1. **Platform security:** who can read traces, manage projects and export data. SSO/RBAC/audit logs belong here.
2. **Runtime application protection:** how malicious inputs, unsafe outputs and sensitive data are handled before exposure.
3. **Security evaluation:** whether those controls withstand representative attacks and how frequently they incorrectly block legitimate users.

Model Armor is the native runtime candidate: it screens prompts/responses for injection, jailbreaks, sensitive data and harmful content, and can inspect documents. Its filters and enforcement modes need configuration and testing; availability in GCP is not proof that Ask ONE already uses it. A GKE application must integrate the appropriate API/gateway flow. [Model Armor overview](https://docs.cloud.google.com/model-armor/overview), [GKE integration example](https://cloud.google.com/blog/products/identity-security/securing-ai-inference-on-gke-with-model-armor).

Promptfoo complements runtime controls by exercising direct/indirect injection, RAG poisoning, exfiltration, policy violations and other adversarial scenarios against the application. Its red-team target can be an HTTP API, browser or model. The attack-generation provider is separate from the target provider, so configure both deliberately for data location and costs. [Red-team quickstart](https://www.promptfoo.dev/docs/red-team/quickstart/), [application security testing](https://www.promptfoo.dev/red-teaming/).

## Avoiding unnecessary overlap

The proposed responsibility split is:

- **GCP operational telemetry:** infrastructure metrics, service logs, distributed latency/error tracing and operational alerting. Use one consistent trace ID and OpenTelemetry instrumentation. GCP can also receive GenAI spans. [Cloud Trace](https://docs.cloud.google.com/trace/docs/overview).
- **GCP runtime safety candidate:** Model Armor, alongside the application's explicit retrieval permissions, source allowlists and safe fallback rules. Platform IAM does not establish that every answer is correct or every public prompt is safe. [Model Armor](https://docs.cloud.google.com/model-armor/overview).
- **Evaluation baseline:** first test Google's native evaluation workflow against Ask ONE's actual rubric. Add Ragas when its specific metrics or portability are useful. [Native evaluation](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/evaluation-overview).
- **Optional single LLM workspace:** Langfuse or Phoenix/AX or LangSmith for experiment/annotation/trace workflows. Store only the spans and content required for that work; do not copy all operational logs into another backend.
- **Adversarial test suite:** Promptfoo before releases and periodically, with realistic content and permissions. Feed findings into the same quality review instead of creating an unrelated security scorecard.

Some overlap is inevitable. The useful objective is one owner and one primary workflow per responsibility, with shared identifiers and minimal duplicate ingestion.

## PoC selection gate

Before committing to a workspace, demonstrate these tasks on the same representative dataset:

- Find why one answer failed: retrieval, stale source, prompt, model, service link or fallback.
- Compare two prompt/retrieval versions and attach content-owner reviews.
- Export scores and traces, correlate with GCP operational telemetry and capture true client-visible latency separately.
- Mask sensitive fields before export; prove retention and deletion behavior.
- Measure spans/units and bytes per request, evaluator calls/tokens, sampling coverage and SDK/export overhead.
- Calculate monthly cost for expected traffic and a peak scenario, including self-hosting operations where relevant.

Choose the native-only route if it satisfies those tasks acceptably. Add one workspace only if the observed benefit justifies its subscription, data flow and operational burden. Thresholds and ownership remain to be discussed during PoC planning.
