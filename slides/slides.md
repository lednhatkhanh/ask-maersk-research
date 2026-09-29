---
theme: default
title: 'Ask ONE POC'
titleTemplate: '%s'
author: 'ONE'
info: |
  Ask ONE proof of concept. Five executive subjects, with context evidence first, followed by technical evidence.
colorSchema: light
aspectRatio: 16/9
canvasWidth: 1280
presenter: true
browserExporter: true
exportFilename: ask-one-project-proposal
class: proposal-cover
fonts:
  provider: none
defaults:
  layout: default
  transition: fade
---

<img class="hero-logo" src="/one-logo.svg" alt="Ocean Network Express" />
<div class="hero-copy">
<p class="hero-name">Ask ONE</p>
<h1>Answers from<br>trusted ONE guidance</h1>
<p class="hero-description">A focused proof of concept for clear answers and useful next steps.</p>
</div>
<p class="hero-subtitle">Project proposal · Two-month POC</p>

<!--
This proposal is for a two-month proof of concept. It does not estimate full implementation or imply that Ask ONE is an existing ONE service. Source: PLAN.md, Current direction.
-->

---
class: deck-slide poc-slide
---

<h1>Ask ONE is worth a focused POC</h1>
<p class="lead">ONE already publishes useful guidance. Ask ONE could turn it into a clear answer and next step on the website.</p>
<div class="poc-columns">
<section><h2>The opening</h2><p>Today’s search returns text matches and file links. Customers still open pages and documents to piece together guidance.</p></section>
<section><h2>The proposal</h2><p>Ask ONE can answer from approved pages, PDFs, Word files and FAQs. Images and video transcripts can join the content later.</p></section>
</div>
<p class="poc-bottom">Start with trusted answers. Grow Ask ONE into the entry point for connected ONE services and AI capabilities.</p>

<!--
The supplied ONE search screenshot shows text results and PDF links. This slide describes the observed search journey, not an inability to index PDF content. The POC uses approved Insight, FAQ and selected document content; image/OCR and video-derived guidance are later options requiring their own source processing and checks. The Live Chat screenshots show a country/city step and an outside-hours form in one route. Sources: user screenshots, 28 September 2026; reports/ask-one-content-formats-and-reranking-2026-09-28.md; https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/rag-engine/supported-documents
-->

---
class: deck-slide poc-slide
---

<h1>Ask Maersk already links answers to services</h1>
<p class="competitor-lead">Its live site turns a shipping question into guidance with source links and relevant service suggestions.</p>
<div class="competitor-proof">
  <figure class="competitor-answer"><img src="/images/ask-maersk-answer-top-2026-09-28.png" alt="Ask Maersk panel showing a dangerous cargo question and the beginning of its generated answer" /><figcaption>Ask Maersk answer</figcaption></figure>
  <figure class="competitor-sources"><img src="/images/ask-maersk-sources-services-2026-09-28.png" alt="Ask Maersk answer showing source links and related service cards" /><figcaption>Sources and related services</figcaption></figure>
</div>
<p class="competitor-close"><strong>Ask ONE POC</strong> Prove the core journey: a question, a cited ONE answer and a relevant service link.</p>

<!--
Sources: live Ask Maersk screenshots captured from https://www.maersk.com/ on 28 September 2026, using the same public dangerous-cargo example shown in the reviewer-supplied screenshots. The two crops show natural-language question entry, the generated answer, source links and suggested services. They are evidence of visible experience, not answer quality, customer uptake or technical implementation. Ask ONE is proposed to match the core question-to-answer-to-service journey; the POC is limited to one independent English question and one cited answer from approved public content with a relevant guide or service link.
-->

---
class: deck-slide poc-slide
---

<h1>Ask ONE can grow into ONE’s digital copilot</h1>
<p class="lead">Begin with a trusted answer. The same entry point can later know more, connect customers to services and work with other agents.</p>
<div class="copilot-roadmap">
<section class="copilot-start"><div class="copilot-icon"><svg viewBox="0 0 48 48" aria-hidden="true"><path d="M8 10h32v23H22l-9 7v-7H8z"/><path d="M17 18h14M17 24h10"/></svg></div><span>POC + FIRST MVP</span><h2>Answer</h2><p>One English question. One cited answer from approved public content.</p></section>
<section><div class="copilot-icon"><svg viewBox="0 0 48 48" aria-hidden="true"><path d="M12 9h19l6 6v24H12z"/><path d="M31 9v7h6M17 23h14M17 29h14M17 35h10"/></svg></div><span>NEXT</span><h2>Know more</h2><p>Add approved data sources, more file types, images, video guidance and languages.</p></section>
<section><div class="copilot-icon"><svg viewBox="0 0 48 48" aria-hidden="true"><rect x="5" y="18" width="11" height="11" rx="2"/><rect x="32" y="6" width="11" height="11" rx="2"/><rect x="32" y="31" width="11" height="11" rx="2"/><path d="M16 23.5h9l8-12M25 23.5l8 13"/></svg></div><span>LATER</span><h2>Act</h2><p>Connect booking and schedule search. Integrate other agents, such as a booking agent.</p></section>
<section><div class="copilot-icon"><svg viewBox="0 0 48 48" aria-hidden="true"><path d="M9 12h23v17H19l-6 5v-5H9z"/><path d="M24 35h11l5 4v-4h2V20h-6M16 20h11"/></svg></div><span>LATER</span><h2>Remember</h2><p>Use sign-in and permissions for memory and a longer, multi-turn conversation.</p></section>
</div>
<p class="copilot-thread">One Ask ONE entry point, growing with ONE’s content and services.</p>

<!--
The POC tests one independent English question and one answer from approved public content; the first MVP keeps that interaction boundary. The Next and Later cards are growth possibilities beyond the first MVP, not POC commitments. More approved data sources and content types require ownership, parsing, metadata and citation checks. Images and video require separate processing. Language expansion needs reviewed content and evaluation cases per language. Booking and schedule search are later service connections. Other agents may be integrated later; a booking agent is one example, not a feature built by this proposal. Signed-in journeys and any memory require identity, consent, permissions, retention and privacy design; multi-turn conversations are outside the first MVP. Source: PLAN.md, Current direction, Agreed MVP limits and Potential extensions; reviewer clarification, 28 September 2026.
-->

---
class: deck-slide poc-slide poc-ui-slide
---

<h1>Proposed Ask ONE experience</h1>
<div class="poc-site">
  <div class="poc-site-nav"><img src="/one-logo.svg" alt="ONE" /><span>Price</span><span>Book</span><span>Track</span><span>Schedule</span><span>Services</span><span>Contact Us</span></div>
  <div class="poc-site-body"><div class="poc-site-message">Your Number ONE<br>Shipping Partner</div>
    <div class="poc-ui-panel">
      <div class="poc-ui-title"><strong>Ask ONE</strong></div>
      <div class="poc-ui-question">How to prepare an online booking?</div>
      <div class="poc-ui-answer">Start with the booking guide to check the details you need. When you are ready, open Book to continue.</div>
      <div class="poc-ui-source">Example source <strong>Booking guide ↗</strong></div>
      <div class="poc-ui-links"><b>Open Book ↗</b></div>
      <div class="poc-ui-feedback"><span>Was this helpful?</span><button type="button" aria-label="Helpful answer"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10v12H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h3Zm0 0 4-7a2 2 0 0 1 2-1 2 2 0 0 1 2 2v5h5a2 2 0 0 1 2 2l-1 8a2 2 0 0 1-2 2H7" /></svg></button><button type="button" aria-label="Not helpful answer"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10v12H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h3Zm0 0 4-7a2 2 0 0 1 2-1 2 2 0 0 1 2 2v5h5a2 2 0 0 1 2 2l-1 8a2 2 0 0 1-2 2H7" transform="rotate(180 12 12)" /></svg></button></div>
      <div class="poc-ui-input">Ask a new question <span>➜</span></div>
    </div>
  </div>
</div>
<div class="poc-scope-band"><strong>First MVP</strong><span>One question → one answer</span><span>English only</span><span>Approved public content only</span></div>

<!--
Visual direction: user-supplied ONE homepage and Ask Maersk screenshots, 28 September 2026. This screen, answer and guide are illustrative, not ONE policy. POC and first MVP share the same single-turn interaction contract: one English question receives one answer from approved public content, with a citation and relevant service link. Ask a new question starts a new independent request; there is no multi-turn conversation or account context. The thumbs-up/down control illustrates a first-MVP feedback feature. The POC evaluation uses reviewed cases and internal task checks; it does not claim customer feedback. The POC does not access accounts, make bookings or connect to Live Chat.
-->

---
class: deck-slide poc-slide
---

<h1>Expected value for customers and ONE</h1>
<p class="lead">Ask ONE could turn published guidance into a useful answer and a clearer route into ONE’s digital services. The POC will test that promise.</p>
<table class="benefit-pairs"><thead><tr><th>For ONE customers</th><th>For ONE</th></tr></thead><tbody>
<tr><td><strong>Less effort finding answers</strong><span>Understand guidance without piecing together several pages.</span></td><td><strong>More value from ONE content</strong><span>Use approved pages, PDFs and Word files in answers. Images and video transcripts can follow.</span></td></tr>
<tr><td><strong>A clearer next step</strong><span>Find the guide or service that fits the task.</span></td><td><strong>More digital engagement</strong><span>Help customers reach existing services with fewer detours.</span></td></tr>
<tr><td><strong>Routine answers on demand</strong><span>Get public guidance without waiting for a support conversation.</span></td><td><strong>Less repetitive support effort</strong><span>Leave people more time for issues that need human help.</span></td></tr>
<tr><td><strong>Confidence in the answer</strong><span>Open the source and see when Ask ONE cannot answer safely.</span></td><td><strong>Clearer content gaps</strong><span>Use unanswered questions, then customer ratings in a later pilot, to improve guidance.</span></td></tr>
</tbody></table>

<!--
These are expected benefits, not measured savings. The POC compares representative tasks using internal reviewers and current search/help; customer ratings and support-demand effects need a later pilot or release. The approved document set is limited in the POC; OCR/image and video content need separate source processing, approval, citation and cost checks before later use. Sources: PLAN.md, Expected benefits; user-supplied earlier value slide; reports/ask-one-content-formats-and-reranking-2026-09-28.md.
-->

---
class: deck-slide poc-slide
---

<h1>A focused two-month POC</h1>
<div class="poc-steps">
<div><span>Weeks 1–2</span><h2>Choose the journey</h2><p>Agree questions and source permissions. Prepare the Drupal Insight sync and content approved by eCommerce or business owners.</p></div>
<div><span>Weeks 3–6</span><h2>Build and compare</h2><p>Build the answer, source and service-link journey. Version the content and run the same cases through both GCP approaches.</p></div>
<div><span>Weeks 7–8</span><h2>Show the evidence</h2><p>Run target tasks with QA and business reviewers. Review security, content withdrawal, service use and the success gate.</p></div>
</div>
<p class="poc-bottom">The two-month result supports a credible full-project proposal and an informed architecture choice.</p>

<!--
Two months is the proposed POC duration, subject to access and source approval. No full-implementation estimate or production commitment is made here. Source: PLAN.md, earlier two-month PoC direction and review gates.
-->

---
class: deck-slide poc-slide
---

<h1>Address the main risks early</h1>
<table class="poc-table"><thead><tr><th>Risk</th><th>Our actions</th></tr></thead><tbody>
<tr><td>Technical feasibility</td><td>Run identical questions through both GCP approaches; compare answer quality, content withdrawal, response time and cost.</td></tr>
<tr><td>Singapore availability of GCP services</td><td>Check official Google Cloud documentation and confirm availability, Preview limits and options with GCP support. Bring the findings to the Architecture Committee.</td></tr>
<tr><td>Architecture fit</td><td>Ask the Architecture Committee early for design advice and technical options. Use its advice to refine the POC before testing.</td></tr>
<tr><td>Overlap with Live Chat</td><td>Keep the POC on sourced public guidance and service links. Review overlapping questions and entry points with the Live Chat bot owners.</td></tr>
<tr><td>Wrong or outdated answers</td><td>Content owners approve sources; QA checks claims, citations, changed pages and safe fallback.</td></tr>
</tbody></table>

<!--
AC means Architecture Committee. Check the region and launch stage of every proposed GCP service and the relevant features against official product documentation, then confirm the interpretation, Preview limits and viable regional options with GCP support. As of 28 September 2026, Google lists direct RAG Engine in Singapore as Preview; Model Armor lists Singapore but notes limited data-residency feature support there. Bring the documented findings and support advice to AC before fixing the POC design. Sources: https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/rag-engine/rag-overview ; https://docs.cloud.google.com/model-armor/locations ; https://docs.cloud.google.com/model-armor/feature-availability-by-region .
-->

---
class: deck-slide poc-slide
---

<h1>What the POC needs to begin</h1>
<div class="poc-actions">
<div><span>1</span><p><strong>Choose the first journey.</strong> PO/PPO agrees the customer tasks and the eCommerce or business owner approves the added content.</p></div>
<div><span>2</span><p><strong>Prepare the source sync.</strong> Confirm Drupal Insight access, metadata, versioning and removal; add approved eCommerce and business material.</p></div>
<div><span>3</span><p><strong>Review the design early.</strong> The Architecture Committee and technical reviewers identify constraints. QA and content owners agree how to judge the results.</p></div>
<div><span>4</span><p><strong>Agree the exit bar.</strong> QA and business reviewers set the task cases and pass values before formal testing.</p></div>
</div>
<p class="poc-bottom"><strong>Decision requested:</strong> Endorse the two-month POC in principle. Confirm staffing and access before kickoff.</p>

<!--
Named responsibilities are collaboration dependencies, not staffing allocations. The requested decision is an in-principle endorsement of a bounded two-month POC. Agree the first journey, permitted sources, staffing and access before kickoff. Review progress weekly and revisit the pass values only through an explicit, recorded scope change before the formal test run. Source: PLAN.md, Current direction, Required PO/PPO involvement and review gates.
-->

---
class: deck-slide poc-slide resources-slide
---

<h1>POC staffing to agree</h1>
<div class="resource-cards">
<section><h2>Team size</h2><strong>TBC</strong><p>Confirm availability for the proposed two-month POC before kickoff.</p></section>
<section><h2>Roles and allocations</h2><strong>TBC</strong><p>Plan for product, technical lead, engineering, quality assurance and user experience contributions. Agree each allocation with the owners.</p></section>
</div>

<!--
This is the only slide with staffing size and allocation placeholders. No named people or secured capacity are implied. Partner-team involvement stays in PLAN.md only. Source: PLAN.md, Resource placeholder and Required PO/PPO involvement.
-->

---
class: deck-slide poc-slide
---

<h1>A clear success gate after two months</h1>
<p class="lead">A successful POC earns trust in the answer and gives ONE a sound basis for the full-project proposal.</p>
<table class="poc-table gate-table"><thead><tr><th>Gate</th><th>Evidence at the exit</th></tr></thead><tbody>
<tr><td>Useful answers</td><td>QA and business reviewers complete representative customer tasks with clearer answers and the right next action versus current search/help.</td></tr>
<tr><td>Trusted content</td><td>QA checks that important claims cite approved sources and that content updates and withdrawals reach the answer.</td></tr>
<tr><td>Safe in use</td><td>No unresolved critical wrong answers, private data exposure or successful prompt injection. Security and QA retests pass the agreed bar.</td></tr>
<tr><td>Fit to build on</td><td>Technical feedback is addressed, and a path meets the agreed regional, response-time and service-cost limits.</td></tr>
</tbody></table>

<!--
Set numerical pass values and a representative task sample before the run. QA and business-reviewer results are POC evidence about task usefulness, not measured customer feedback or public-release approval. Actual customer behavior requires a later pilot or release. Source: PLAN.md, review gates and reports/ask-one-poc-story-and-evaluation-research-2026-09-28.md.
-->

---
class: proposal-cover technical-cover
---

<img class="hero-logo" src="/one-logo.svg" alt="Ocean Network Express" />
<div class="hero-copy">
<p class="hero-name">Ask ONE</p>
<h1>Technical approach</h1>
<p class="hero-description">A proposed design to review, test and improve through the POC.</p>
</div>
<p class="hero-subtitle">Architecture · QA · Security · Observability</p>

<!--
The following section describes candidate POC design and evaluation, not an approved production architecture. Source: PLAN.md, Current direction.
-->

---
class: deck-slide poc-slide rag-tradeoff-slide
---

<h1>Two GCP paths for one Ask ONE experience</h1>
<div class="rag-tradeoff">
  <section><h2>Custom flow + Agent Retrieval</h2><p>ONE prepares and embeds content. Agent Retrieval indexes, searches and reranks it. More control, with more integration to own.</p></section>
  <section><h2>Direct RAG Engine</h2><p>Google manages import through retrieval. Less integration work, with a higher service estimate and Singapore Preview status.</p></section>
</div>
<h2 class="rag-cost-heading">Illustrative monthly service costs · excluding staffing</h2>
<table class="rag-cost-table"><thead><tr><th>Monthly questions</th><th>Custom + Agent Retrieval</th><th>Direct RAG Engine</th></tr></thead><tbody>
<tr><td>10,000</td><td>~US$1,200</td><td>~US$3,000</td></tr>
<tr><td>100,000</td><td>~US$3,000</td><td>~US$4,200</td></tr>
</tbody></table>
<p class="rag-cost-close">Confirm the actual quote for the chosen GCP services and Singapore configuration with GCP support.</p>

<!--
The next two slides trace each path. In the custom path, ONE runs source preparation, embedding calls and answer assembly while standalone Agent Retrieval manages indexed hybrid search and VertexRanker. In the direct path, RAG Engine manages import, transformation, embedding orchestration, corpus indexing and retrieval. ONE still owns source governance, GKE API, security enforcement, citations and QA in both. Less ONE-owned integration work for direct RAG Engine is an inference from the service boundary, not a measured saving. The displayed monthly figures are illustrative service-cost allowances, not POC bills, traffic forecasts, approved budgets or implementation estimates. The underlying scenarios include one reranking pass per question but exclude OCR, image/video processing and staffing. The direct scenario assumes RAG-managed Spanner Scaled for production and Basic for non-production; other deployment modes exist and may price differently. Confirm Singapore Preview terms and obtain an actual quote from GCP for the selected regional service stack before using these figures for funding. Sources: reports/ask-one-gcp-cost-estimate.md, updated 28 September 2026; https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/rag-engine/rag-overview; https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/rag-engine/deployment-modes; https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/rag-engine/rag-engine-billing
-->

---
class: deck-slide poc-slide architecture-slide
---

<h1>Custom flow: ONE owns content preparation</h1>
<div class="icon-diagram architecture-diagram"><img src="/diagrams/ask-one-poc-custom-architecture.drawio.svg" alt="Custom flow: approved ONE content is versioned in Cloud Storage, optionally OCR processed, chunked and embedded by ONE, then indexed in Agent Retrieval. A website question passes Cloudflare and the GKE API to hybrid search and VertexRanker, then Gemini and GKE answer checks." /></div>

<!--
The custom path keeps the ingestion and answer pipeline in ONE's control. The ONE publishing job takes approved Drupal Insights and additional eCommerce/business content, versions the public sources in Cloud Storage, optionally runs Document AI OCR on approved scans, then parses, chunks and embeds content. Standalone Agent Retrieval stores Data Objects and metadata and provides hybrid search plus integrated VertexRanker. On each question, the ONE website goes through Cloudflare to the Ask ONE API on GKE, which validates/admissions the request, selects eligible sources, calls Agent Retrieval, sends evidence to Gemini, invokes Model Armor, checks citations/source versions and service links, then returns the ONE answer. The diagram separates the managed search service from ONE-owned preparation and answer controls. Agent Retrieval lists Singapore support and is GA; validate product configuration and regional fit with AC. Sources: https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/vector-search-2/overview; https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/vector-search-2/data-objects/data-objects; https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/vector-search-2/query-search/search; https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/vector-search-2/query-search/reranking; https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr
-->

---
class: deck-slide poc-slide architecture-slide
---

<h1>Direct RAG Engine: Google runs ingestion and retrieval</h1>
<div class="icon-diagram architecture-diagram"><img src="/diagrams/ask-one-poc-rag-engine-architecture.drawio.svg" alt="Direct RAG Engine flow: approved ONE content is versioned in Cloud Storage and optionally OCR processed, then RAG Engine imports, parses, chunks, embeds and indexes it. A website question passes Cloudflare and the GKE API to RAG Engine retrieval and ranking, then Gemini and GKE answer checks." /></div>

<!--
The website, Cloudflare and Ask ONE API on GKE remain in ONE's system. ONE still selects and versions approved public content in Cloud Storage, with optional Document AI OCR before import for approved scans. RAG Engine imports files into a corpus and handles parsing, chunking, embedding orchestration, indexing and retrieval. GKE calls retrieveContexts, can rerank with the Ranking API, passes retrieved passages to Gemini and enforces Model Armor verdicts, citation/source-version checks and the service link before returning the answer. The direct path cost slide assumes RAG-managed Spanner Scaled production and Basic non-production; RAG Engine also has other deployment modes, so the POC must confirm the actual mode, regional terms and bill. Singapore is Preview in the checked product table. Sources: https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/rag-engine/rag-overview; https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/rag-engine/use-data-ingestion; https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/rag-engine/rag-quickstart; https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/rag-engine/retrieval-and-ranking; https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/rag-engine/deployment-modes; reports/ask-one-gcp-cost-estimate.md
-->

---
class: deck-slide poc-slide tech-diagram-slide
---

<h1>Every change reruns the same reviewed cases</h1>
<div class="icon-diagram qa-icon-diagram"><img src="/diagrams/ask-one-poc-qa-pipeline.drawio.svg" alt="Icon-led QA flow: reviewed cases in Cloud Storage pass a preflight and run against both POC paths alongside Promptfoo attacks, followed by QA review, fixes and reruns" /></div>
<p class="poc-bottom">QA checks failed answers against approved sources, adds confirmed issues to the regression set and reruns after each fix.</p>

<!--
Version the case set, source snapshot, prompt, model and retrieval configuration together. Rerun the same cases on both POC paths after relevant code, configuration or approved-content changes. An existing CI runner or a manual script is sufficient; Cloud Build is one optional automation choice, not part of the Ask ONE request path. Promptfoo attacks include API probes plus an isolated poisoned document corpus for indirect injection. QA checks each failed case against its approved source and expected result, assigns a cause and owner, fixes it, adds a regression case and reruns. The POC has no customer-feedback stream. Sources: reports/ask-one-poc-story-and-evaluation-research-2026-09-28.md; https://www.promptfoo.dev/docs/red-team/rag/; https://docs.cloud.google.com/gemini/enterprise/docs/evaluate-search-quality
-->

---
class: deck-slide poc-slide metric-slide
---

<h1>Start with a QA evaluation checklist</h1>
<table class="poc-table metric-table"><thead><tr><th>Check first</th><th>What goes in the reviewed case</th><th>What QA looks for</th></tr></thead><tbody>
<tr><td>Expected result</td><td>Question, approved source/version, key facts, correct action and fallback.</td><td>Content owner signs the case before the run.</td></tr>
<tr><td>Retrieval &amp; rank</td><td>Passage that should appear; permitted market and version.</td><td>Judged Recall@k, top-result order before/after reranking and stale hits.</td></tr>
<tr><td>Answer</td><td>Facts the answer must include and claims it must avoid.</td><td>Correctness, completeness and claim support in the cited passage.</td></tr>
<tr><td>Customer action</td><td>Right guide or eCommerce destination for the task.</td><td>Task completion and time against current search/help.</td></tr>
<tr><td>Safety &amp; service</td><td>Unsupported, private, changed-content and attack cases.</td><td>Fallback, false blocks, withdrawal lag, p95 time and cost/question.</td></tr>
</tbody></table>
<p class="poc-bottom">Agree pass values before testing. Review serious failed cases individually, even when the average looks good.</p>

<!--
The likely term the technical lead had in mind is an evaluation rubric or golden test set: a reviewed list of cases with expected facts and outcomes. Recall@k is judged on labeled cases, not an exhaustive corpus measure. Run paired cases with reranking on/off; compare top-result order, answer/citation pass, latency and cost. Reranking cannot restore a relevant passage that retrieval never found. Human QA owns release-relevant verdicts. Sources: reports/ask-one-content-formats-and-reranking-2026-09-28.md; https://docs.cloud.google.com/gemini/enterprise/docs/evaluate-search-quality; https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/vector-search-2/query-search/reranking
-->

---
class: deck-slide poc-slide security-control-slide
---

<h1>Protect each request and check every answer</h1>
<div class="icon-diagram security-icon-diagram"><img src="/diagrams/ask-one-poc-security-flow.drawio.svg" alt="Security flow: Cloudflare WAF and Turnstile, GKE server-side Siteverify, shared Memorystore limits, Model Armor before and after Gemini, then ONE source and citation validation" /></div>
<p class="security-outcome">A failed gate stops the model call or the answer. Ask ONE records the reason and offers a safe fallback.</p>
<p class="security-test">Promptfoo and QA rehearse token replay, direct-origin calls, bursts, rolling limits, budget stops and poisoned pages.</p>

<!--
Siteverify is mandatory for Turnstile. The server must reject missing, expired or replayed tokens and direct-origin access must be restricted. The GKE API owns request-shape checks and shared atomic Memorystore counters across replicas: per-session and IP burst, rolling hour/day, one active answer, token/retry ceiling and application spending stop. Test shared-office-IP fairness, counter-store failure and budget hit as well as parallel bursts. Only approved current public source versions enter retrieval; retrieved content is untrusted. Model Armor screens the incoming prompt and context before Gemini and the generated response after Gemini; GKE enforces the verdict. The app checks claim support, citations and the service link before showing the answer. A pre-generation failure avoids the model call; a post-generation failure withholds the answer. Promptfoo probes the API for direct injection and data leakage; an isolated poisoned-source corpus tests indirect injection. QA reviews attack successes and false blocks, fixes confirmed failures, adds regression cases and reruns. Sources: https://developers.cloudflare.com/turnstile/get-started/server-side-validation/; https://developers.cloudflare.com/fundamentals/security/protect-your-origin-server/; https://docs.cloud.google.com/model-armor/overview; https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview; https://www.promptfoo.dev/docs/red-team/rag/; https://www.promptfoo.dev/docs/red-team/plugins/rag-poisoning/
-->

---
class: deck-slide poc-slide observation-slide
---

<h1>Every failed answer should be explainable</h1>
<div class="trace-line"><span>Admit</span><span>Retrieve</span><span>Generate</span><span>Screen</span><span>Cite</span></div>
<table class="poc-table observation-table"><thead><tr><th>GCP service</th><th>What the app sends</th><th>What the team does with it</th></tr></thead><tbody>
<tr><td>Cloud Trace</td><td>OpenTelemetry spans for each stage, with one request ID and elapsed time.</td><td>Find the slow stage; review p50/p95 end-to-end time.</td></tr>
<tr><td>Cloud Logging</td><td>Structured decision, source ID/version, refusal or block reason, error and token use; redact customer text.</td><td>Reproduce a failed answer and check content withdrawal.</td></tr>
<tr><td>Cloud Monitoring</td><td>Error, 429, refusal, quota-store health, withdrawal lag and allocated cost per admitted question.</td><td>Alert on a breach, inspect the trace and disable paid calls or roll back a bad source/config.</td></tr>
</tbody></table>

<!--
Application spans are required; the GCP services do not automatically explain answer quality. Billing alerts are advisory, so the app admission gate enforces usage stops. Sources: https://docs.cloud.google.com/kubernetes-engine/docs/concepts/managed-otel-gke; https://docs.cloud.google.com/billing/docs/how-to/budgets
-->

---
class: deck-slide poc-slide technical-feedback-slide
---

<h1>Help shape the technical architecture</h1>
<p class="lead">Singapore deployment is required. We want AC's recommendations on the architecture, technical decisions and how to compare both GCP paths.</p>
<div class="technical-feedback">
  <section><h2>System design</h2><p>Please review the proposed architecture and share your technical suggestions.</p></section>
  <section><h2>Technical choices</h2><p>What trade-offs or alternatives matter for the two paths and later service or agent integrations?</p></section>
  <section><h2>Evidence</h2><p>Which tests, limits and operating signals should guide the POC decision?</p></section>
</div>

<!--
This is a request for AC's technical advice on the proposed POC design, not a request to approve one retrieval product in advance. Singapore deployment is a firm requirement, not a question for AC to decide. Ask AC, security, platform and QA reviewers for architecture recommendations, technical alternatives, missing tests and operating concerns. Content selection, approval, updates and withdrawals remain with content owners and the delivery team; they are not requests for AC's content advice. Record each technical recommendation with an owner and its effect on the design or versioned case set. Future booking, schedule search and separately built specialist agents are extension examples, not POC integrations. Source: PLAN.md, Current direction and user review, 28 September 2026.
-->
