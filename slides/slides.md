---
theme: default
title: 'Ask ONE: answers from trusted ONE guidance'
titleTemplate: '%s'
author: 'ONE'
info: |
  Project proposal for the first MVP, from discovery through stabilization. PO/PPO-led business research and the PoC must inform requirements, features, costs and a rough delivery estimate.
colorSchema: light
aspectRatio: 16/9
canvasWidth: 1280
presenter: true
browserExporter: true
exportFilename: ask-one-project-proposal
fonts:
  provider: none
layout: default
class: proposal-cover
defaults:
  layout: default
  transition: fade
---

<img class="hero-logo" src="/one-logo.svg" alt="Ocean Network Express" />
<div class="hero-copy">
<p class="hero-name">Ask ONE</p>
<h1>Answers from<br>trusted ONE guidance</h1>
<p class="hero-description">Help customers understand ONE guidance and find the right service.</p>
</div>
<p class="hero-subtitle">Project proposal: first MVP</p>

<!--
Ask ONE is a proposed customer experience. Formal discovery has not started.
The proposal covers the whole first-MVP project, with review gates. Business research and detailed requirements remain open. The eight-month implementation proposal excludes discovery and the PoC. Schedule and costs remain provisional and require reassessment after the PoC. Project approval does not guarantee release or establish finalized funding.
Sources: PLAN.md, Goal and Decisions already made.
-->

---
class: deck-slide manager-slide overview-slide
---

<p class="kicker">Manager overview</p>
<h1>The proposal in four parts</h1>
<p class="intro">The proposal covers the customer experience and expected benefits, followed by the plan for a first release.</p>
<div class="feature-list feature-steps overview-list">
<div><h2>01 &nbsp; Customer experience</h2><p>The customer problems we need to understand and how Ask ONE could help.</p></div>
<div><h2>02 &nbsp; Benefits and research</h2><p>What we hope to improve, what we have observed and what we still need to learn.</p></div>
<div><h2>03 &nbsp; First-release planning</h2><p>The proposed scope, proof of concept (PoC) and implementation schedule.</p></div>
<div><h2>04 &nbsp; Options and success</h2><p>How we would measure success and which features could follow later.</p></div>
</div>
<p class="takeaway">MVP means minimum viable product: the first release with enough capability to test customer value. Technical detail follows on Slide 15.</p>

<!--
Source: PLAN.md, Current slide order and Success criteria.
-->

---
class: deck-slide manager-slide
---

<p class="kicker">The opportunity</p>
<h1>Easier access to ONE guidance</h1>
<p class="intro">Could a direct question help customers find and understand relevant ONE guidance?</p>
<div class="comparison">
<section>
<h2>The need to investigate</h2>
<p class="big-question">“Which guide applies<br>to my question?”</p>
<p>A customer may need to search several pages, interpret the guidance and decide which service to use next.</p>
</section>
<section>
<h2>How Ask ONE could help</h2>
<p class="big-question accent">An answer, its source<br>and a useful next step</p>
<p>Ask ONE would explain the relevant guidance and link to the ONE service where the customer can take the next step.</p>
</section>
</div>
<p class="takeaway">During discovery, we will compare this approach with existing search and help. We have not yet measured demand or benefits among ONE customers.</p>

<!--
The current journey is a hypothesis to investigate, not a measured finding about ONE customers.
Compare task success and time to useful guidance with ordinary search and curated help.
Sources: PLAN.md, Opportunity and Expected value; docs/plan.md, proposal objective.
-->

---
class: deck-slide manager-slide feature-explanation
---

<p class="kicker">What the feature does</p>
<h1>What customers could do with Ask ONE</h1>
<p class="intro">Customers would ask questions in everyday English and receive explanations based on approved public ONE guidance.</p>
<div class="feature-list feature-steps">
<div><h2>01 &nbsp; Ask</h2><p>Ask one question about a supported public topic.</p></div>
<div><h2>02 &nbsp; Understand</h2><p>Read a short explanation of the relevant guidance.</p></div>
<div><h2>03 &nbsp; Check</h2><p>Open the original ONE page or document to check the details.</p></div>
<div><h2>04 &nbsp; Continue</h2><p>Follow a link to the relevant ONE service or support channel.</p></div>
</div>
<p class="takeaway">If approved content cannot support an answer, Ask ONE would say so and link to guidance or support.</p>
<p class="caption">The first release would not access accounts, provide live tracking or shipment-specific answers, or complete transactions.</p>

<!--
This explanation describes proposed behavior, not an existing Ask ONE service.
Compare it with ordinary search. An explanation is useful only if it is accurate and helps the customer.
A link to eCommerce is navigation, not access to eCommerce data or transaction execution.
Source: PLAN.md, Manager explanation and Agreed MVP limits and proposed capabilities.
-->

---
class: deck-slide manager-slide
---

<p class="kicker">Proposed customer experience</p>
<h1>Example: preparing an enquiry</h1>
<div class="experience">
<section class="answer-example">
<div class="example-header"><h2>Ask ONE</h2><span>Fictional example</span></div>
<p class="question">What should I prepare before sending an enquiry?</p>
<p class="answer">Describe the issue and include a reference if you have one. Check the guide for details, then open the enquiry service.</p>
<div class="source-example"><span>Example source</span><strong>Enquiry preparation guide</strong><p>The answer would link to the supporting section.</p></div>
<div class="example-links"><span>Open guide</span><span>Enquiry service</span></div>
</section>
<section class="explanation">
<div><h2>A short explanation</h2><p>Use approved public content to answer the question in plain English.</p></div>
<div><h2>A source to check</h2><p>Let customers open the original guidance and check the details.</p></div>
<div><h2>A link to continue</h2><p>Link to the enquiry service. Ask ONE would not fill in or submit the form.</p></div>
</section>
</div>
<p class="caption">Fictional answer and source, created only to demonstrate the experience. This is not actual ONE policy or a live service.</p>

<!--
Preserve the boundary between public document guidance and future authorized live data.
The enquiry answer and guide are wholly fictional, not attributed to an actual ONE publication. They demonstrate summarizing guidance rather than only linking to it. Production examples require approved content.
Sources: PLAN.md, Manager explanation and Agreed MVP limits and proposed capabilities.
-->

---
class: deck-slide manager-slide benefits-slide
---

<p class="kicker">Expected benefits to validate</p>
<h1>Expected value for customers and ONE</h1>
<p class="intro">Customers could get routine help more easily and make better use of ONE’s digital services.</p>
<table class="benefits-table">
<thead><tr><th>For ONE customers</th><th>For ONE</th></tr></thead>
<tbody>
<tr><td><strong>Less effort finding answers</strong><br>Understand relevant guidance without piecing together several pages.</td><td><strong>More useful public content</strong><br>Help customers use the guidance ONE already publishes.</td></tr>
<tr><td><strong>A clearer next step</strong><br>Find the service that fits the task more easily.</td><td><strong>Easier access to digital services</strong><br>Help customers reach the right service with fewer detours.</td></tr>
<tr><td><strong>Help with routine questions</strong><br>Read an explanation and check its original source.</td><td><strong>Potentially fewer repetitive enquiries</strong><br>Allow support to focus on issues that need human help.</td></tr>
</tbody>
</table>
<p class="caption">These are expected benefits, not measured results. Visible sources help customers check an answer but do not guarantee accuracy.</p>

<!--
Validate benefits against existing search/help and pilot evidence. No revenue, savings, staffing reduction or guaranteed accuracy is claimed.
Do not infer enquiry reduction from clicks, helpfulness alone or abandoned sessions.
Source: PLAN.md, Expected benefits for customers and ONE.
-->

---
class: deck-slide manager-slide
---

<p class="kicker">Research starting point</p>
<h1>Further business research is required</h1>
<p class="intro">August 2026 recordings of Ask Maersk illustrate the experience. They do not establish what ONE customers need or whether Ask ONE would help.</p>
<table class="evidence-table">
<thead><tr><th>What the recordings show</th><th>Questions to investigate at ONE</th></tr></thead>
<tbody>
<tr><td>Answers explain shipping topics and show related content.</td><td>Can approved ONE content support accurate, useful answers?</td></tr>
<tr><td>An answer about schedules directs customers to official tools or local offices.</td><td>Do service links help customers complete their next step?</td></tr>
<tr><td>Some recordings do not capture a complete response.</td><td>Can Ask ONE answer a representative set of customer questions reliably?</td></tr>
</tbody>
</table>
<p class="takeaway">PO/PPO must guide customer research and help agree requirements and feature priorities. The proposal remains preliminary.</p>

<!--
Dated August 2026 observations, not a current audit of Ask Maersk. The benchmark does not establish demand, correctness, production reliability or business return.
PO/PPO must work with stakeholders on business rules, supported journeys, exceptions, feature priorities and acceptance criteria. Further customer and business research is required. No allocation or business sign-off is assumed.
Sources: reports/maersk-research-2026-08-31.md.
CONTEXT-001 and KNOWLEDGE-001/002 show topic explanations and related content.
SCHEDULE-003 supplies service-referral evidence. Incomplete captures can reflect recorder limitations or application behavior.
Generated report implications referring to Ask ONE are not evidence of an Ask ONE implementation.
-->

---
class: deck-slide manager-slide
---

<p class="kicker">First-release scope</p>
<h1>Proposed first-release scope</h1>
<div class="discovery-layout">
<section>
<h2>Proposed capabilities</h2>
<ol class="numbered-list">
<li><strong>Answers from approved guidance</strong><p>Short explanations with sources customers can open.</p></li>
<li><strong>Links to the relevant service</strong><p>Direct customers to the appropriate service or support channel.</p></li>
<li><strong>Content and quality controls</strong><p>Keep sources current, collect feedback, evaluate answers and monitor the service.</p></li>
</ol>
</section>
<section class="scope-summary">
<h2>Agreed MVP limits</h2>
<p class="scope-key">English only<br>Public ONE content<br>One question at a time</p>
<p>Public access would not require customer sign-in.</p>
<p class="scope-later"><strong>Outside this release:</strong> more languages, account or shipment data, transactions, follow-up conversations and complex integrations.</p>
</section>
</div>
<p class="caption">Discovery with PO/PPO will define requirements and priorities within these limits. A proof of concept (PoC) would test technical feasibility. The detailed scope remains open.</p>

<!--
Discovery and the PoC are the first phases of the whole project, not the entire proposal.
The MVP includes Drupal content updates/removals, feedback, evaluation, guardrails, caching and monitoring.
Assess existing tools for source status, approval and review history. A custom review hub needs a demonstrated gap.
Security requirements and evaluation questions start during discovery. Secure a permitted sample before the PoC.
Source: PLAN.md, Goal, Agreed MVP limits and proposed capabilities and Proposed eight-month implementation timeline.
-->

---
class: deck-slide manager-slide resources-slide
---

<p class="kicker">Proposed resources · TBC / to be discussed</p>
<h1>PoC and implementation roles</h1>
<p class="intro">Team size, assignments and time allocations are to be confirmed (TBC) and discussed for every phase.</p>
<table class="resources-table phase-resources">
<thead><tr><th>Proposed role</th><th>PoC</th><th>Implementation</th><th>Proposed contribution</th></tr></thead>
<tbody>
<tr><td>Developers</td><td>TBC</td><td>TBC</td><td>Application development and integration</td></tr>
<tr><td>Technical architect (TA)</td><td>TBC</td><td>TBC</td><td>Guide architecture, security and privacy</td></tr>
<tr><td>PO/PPO</td><td>TBC</td><td>TBC</td><td>Business needs and acceptance criteria</td></tr>
<tr><td>User interface and user experience design</td><td>TBC</td><td>TBC</td><td>Customer research and usability</td></tr>
<tr><td>Quality assurance</td><td>TBC</td><td>TBC</td><td>Answer quality and release testing</td></tr>
</tbody>
</table>
<p class="takeaway">Confirm role coverage and availability for each phase. Reassess resource needs after the PoC. All allocations remain TBC / to be discussed.</p>

<!--
All counts, role coverage, named members and allocations are TBC / to be discussed, not secured capacity or full-time commitments.
Headcounts remain open for all phases. The same people may continue from the PoC into implementation.
Confirm availability and allocation by phase after scope is agreed. Delivery-partner details stay in PLAN.md.
Source: PLAN.md, current planning update and internal assumptions.
-->

---
class: deck-slide manager-slide poc-timeline-slide
---

<p class="kicker">Proposed PoC · TBC / to be discussed</p>
<h1>PoC timeline and expected evidence</h1>
<p class="intro">Proposed duration: two months, about eight weeks. Timing, scope and expected evidence remain TBC.</p>
<table class="poc-plan-table">
<thead><tr><th>Timing · TBC</th><th>Proposed focus · TBC</th><th>Expected evidence · TBC</th></tr></thead>
<tbody>
<tr><td>Weeks 1–2</td><td>Agree the test scope and criteria</td><td>Confirmed priority journey and already-permitted sample, test questions and draft acceptance criteria</td></tr>
<tr><td>Weeks 3–4</td><td>Build a sample answer flow</td><td>Sample content loaded, answers with valid source links, relevant service links and safe fallback</td></tr>
<tr><td>Weeks 5–6</td><td>Test quality and controls</td><td>Compare the two retrieval approaches with search; test content removal, safety, response time and service costs</td></tr>
<tr><td>Weeks 7–8</td><td>Review feasibility</td><td>Demo and findings, unresolved gaps, prioritized MVP work and revised architecture, costs and schedule</td></tr>
</tbody>
</table>
<p class="takeaway">Proposed review: proceed, narrow scope, extend the PoC or pause. Agree decision criteria before testing.</p>
<p class="caption">Start date: TBC. PO/PPO and content owners must confirm permission to use the sample before the PoC. A demo alone does not establish release readiness.</p>

<!--
This is a discussion draft, not an approved PoC specification. All achievements, ordering, durations and decision criteria on this slide remain TBC / to be discussed.
Adapted from the staged evidence and exit-review structure in ../payloadcms-poc/apps/slides/slides.md. The two-month duration is a separate Ask ONE discussion proposal; staffing remains TBC.
Two months, approximately eight weeks, is a proposed PoC allowance after sufficient discovery. Timing remains TBC / to be discussed. Review progress at the midpoint and narrow scope or extend validation if necessary. Discovery and the PoC are outside the nine implementation months.
During discovery, PO/PPO-led research should select the customer journey, sample, comparison method and proposed criteria. No numeric quality threshold is invented.
The bounded PoC investigates ingestion, retrieval, citations, fallback, updates/removals and representative safety cases. Production scale, recovery and full operational readiness require later testing.
Source: PLAN.md, current planning update, Technical focus and Pilot and production gates.
-->

---
class: deck-slide manager-slide timeline-slide
---

<p class="kicker">Proposed implementation after the PoC</p>
<h1>Eight-month implementation proposal</h1>
<p class="intro">Eight months after agreement to proceed. Discovery and PoC time are additional.</p>
<table class="timeline-table implementation-plan">
<thead><tr><th>Proposed timing</th><th>Phase</th><th>Required delivery outcome</th></tr></thead>
<tbody>
<tr><td>Months 1–4</td><td>Core development</td><td>Month 4 preview: English answers, source and service links, content updates, review and feedback</td></tr>
<tr><td>Months 5–6</td><td>Testing and refinement</td><td>Quality and security checks, monitoring and recovery. Month 6 manager demo, then a separate pilot-readiness review</td></tr>
<tr class="milestone"><td>Month 7</td><td>Limited user pilot</td><td>Test with invited users and approved content. Measure usefulness, reliability and operating cost</td></tr>
<tr class="milestone"><td>Month 8</td><td>Release and stabilization</td><td>Resolve blocking pilot findings; release in stages after the readiness review, then monitor and fix priority issues</td></tr>
</tbody>
</table>
<p class="caption">Start date: TBC. All months are proposed implementation milestones. PoC findings may change the forecast. Pilot and production each require a readiness review.</p>

<!--
The proposed eight months cover implementation only, excluding discovery and the PoC. Month numbers are proposed milestones after the PoC review and agreement to proceed, not committed calendar dates. Kickoff remains TBC.
Implementation outcomes reflect the existing first-MVP direction. Detailed business rules, feature priorities and measurable acceptance criteria still need PO/PPO-led agreement.
Core development includes anonymous public access, one question at a time, Drupal synchronization and the minimum content-review capability. A custom review hub remains conditional.
Evaluation and security begin in discovery and continue through the PoC and implementation. A manager demo is separate from pilot readiness.
Implementation Month 1 begins after the separate discovery and PoC phases and their review. A longer PoC moves the calendar kickoff; its duration is not subtracted from the nine implementation months.
Stabilization begins after the conditional release within Month 8. If the gate or release moves, extend the forecast rather than compressing stabilization.
Source: PLAN.md, current planning update, Agreed MVP limits and Pilot and production gates.
-->

---
class: deck-slide manager-slide
---

<p class="kicker">Unresolved delivery risks</p>
<h1>Risks to scope and schedule</h1>
<table class="delivery-risks">
<thead><tr><th>Risk</th><th>Further work required</th><th>If it remains unresolved</th></tr></thead>
<tbody>
<tr><td>Business decisions</td><td>PO/PPO must clarify requirements and feature priorities through research.</td><td>Continue research or narrow scope, then revise dates.</td></tr>
<tr><td>Content readiness</td><td>PO/PPO and content owners must permit sample use before the PoC and approve essential content before the pilot.</td><td>Defer optional topics. If essential content is not approved, revise pilot and release dates.</td></tr>
<tr><td>Technical feasibility</td><td>Compare retrieval options, content updates, regional terms and system access.</td><td>Revise the design or extend the PoC and update the estimate.</td></tr>
<tr><td>Release readiness</td><td>Test security, reliability and usability. Confirm operating costs and support procedures.</td><td>Fix critical issues before starting the pilot or releasing to production.</td></tr>
</tbody>
</table>
<p class="takeaway">A demo does not clear the pilot or production gates. Unresolved content or technical risks move the dates; stabilization follows the actual release.</p>

<!--
Content approval remains a critical-path risk but is not the only schedule dependency. No listed risk is a confirmed failure.
PO/PPO involvement must cover business specifications, customer research, feature priorities and acceptance criteria as well as content.
A representative permitted sample is required before the PoC. The minimum useful content set must be approved before the pilot.
PO/PPO and content owners may narrow supplementary topics. If minimum content is absent, revise the dates.
Start security, privacy and evaluation work in discovery and the PoC. Later readiness testing must cover performance, recovery and operational support.
The Month 6 demo is TBC / to be discussed. Pilot and production reviews remain separate and evidence-based.
Define thresholds before formal tests and agree pilot audience, duration and evidence requirements before release decisions.
Decision timing, delivery capacity and access/environment dependencies can also affect the estimate. 
Sources: PLAN.md, Required PO/PPO involvement, Other factors that can change scope or schedule, Critical timeline risk and Pilot and production gates.
-->

---
class: deck-slide manager-slide
---

<p class="kicker">Beyond the first MVP</p>
<h1>Potential extensions after the first release</h1>
<div class="feature-list future-options">
<div><h2>More languages</h2><p>Ask questions and receive guidance in additional languages.</p></div>
<div><h2>eCommerce integrations</h2><p>Connect to eCommerce services for current schedules and supported tasks.</p></div>
<div><h2>Other ONE services</h2><p>Connect with additional ONE services to help customers complete more tasks.</p></div>
<div><h2>Forms integration</h2><p>Help prepare enquiry or service-request forms for customer review before submission.</p></div>
<div><h2>Signed-in customer features</h2><p>View permitted account and shipment information after signing in.</p></div>
<div><h2>Follow-up questions</h2><p>Clarify a question and continue the same task without starting again.</p></div>
<div><h2>Handoff to customer support</h2><p>With the customer’s consent, pass the question and relevant details to support.</p></div>
</div>
<p class="takeaway">These options are outside the eight-month implementation proposal. Customer demand, feasibility and separate approval will determine priorities and dates.</p>

<!--
The order is for reading, not a committed release sequence.
An eCommerce API integration is distinct from permission to access account-specific information. Signed-in status alone is insufficient to grant record access.
Future features do not enter the MVP backlog automatically.
Other ONE services means integrations beyond eCommerce, not only the service links already in the MVP. Validate each service, API and permission before selecting a journey.
Forms integration may guide entry or prefill permitted details. Validate fields, privacy, consent and routing. Any submission requires customer confirmation and separately authorized write access; no autonomous submission is proposed.
Source: PLAN.md, Potential extensions after the first MVP.
-->

---
class: deck-slide manager-slide outcomes-slide
---

<p class="kicker">Project outcomes</p>
<h1>What success would look like</h1>
<p class="intro">Compare Ask ONE with existing search and help on the same customer questions.</p>
<table class="outcomes-table">
<thead><tr><th>Outcome to test</th><th>Evidence to collect</th></tr></thead>
<tbody>
<tr><td><strong>Useful, correct guidance</strong></td><td>Review sample answers for accuracy, supporting sources and appropriate responses when guidance is missing.</td></tr>
<tr><td><strong>Less customer effort</strong></td><td>Observe task completion and time to useful guidance during pilot tasks. Compare with search and help.</td></tr>
<tr><td><strong>Questions resolved during the pilot</strong></td><td>Ask pilot participants whether the guidance resolved their question or they still needed support.</td></tr>
<tr><td><strong>Acceptable overall operating cost</strong></td><td>Track service cost per question and record content maintenance and support effort separately.</td></tr>
</tbody>
</table>
<p class="takeaway">PO/PPO-led research defines needs and success criteria. The PoC informs scope and cost. The pilot tests outcomes before production release.</p>
<p class="caption">Targets, project budget and return on investment remain unconfirmed. A click or abandoned session does not prove resolution.</p>

<!--
Whole-project proposal, with evidence-based scope, cost and readiness reviews.
Define success and thresholds before formal testing. Source clicks alone do not prove completion.
Cost drivers include application/platform work, model and retrieval usage, screening, evaluation, content upkeep and operating support.
Separate incremental AI consumption from existing platform costs. No quantified ROI or savings are asserted.
Source: PLAN.md, Expected benefits for customers and ONE, Pilot and production gates.
-->

---
class: deck-slide section-slide technical-overview technical-choice-slide
---
<p class="kicker">Technical proposal</p>
<h1>Two retrieval paths for Ask ONE</h1>
<p class="section-intro">The working PoC default is a custom workflow using managed Agent Retrieval. Test direct RAG Engine on the same content and questions before selecting a path.</p>
<div class="technical-paths">
<section><h2>Custom workflow · working default</h2><p>ONE builds the passage pipeline. Google manages Agent Retrieval, reranking, Gemini and Model Armor.</p><p><strong>Trade-off:</strong> More application work, with direct control over approved versions and withdrawal.</p></section>
<section><h2>Direct RAG Engine · PoC alternative</h2><p>Google manages more ingestion and retrieval. ONE still owns publishing, the customer API and answer release.</p><p><strong>Trade-off:</strong> Less pipeline code, but a later exit needs reindexing; Singapore remains Preview.</p></section>
</div>
<p class="section-detail">Both paths require the same quality, security, content, performance and cost evidence. A future GA date alone does not select RAG Engine.</p>

<!--
Technical recommendation, not a completed product decision. The custom path uses standalone Agent Retrieval as a managed vector and passage store. A later move to RAG Engine requires re-import, reindexing, metadata and withdrawal validation, plus answer regression tests. Compare implementation and operating work during the PoC; neither speed nor cost advantage has been measured.
RAG Engine's published region table lists asia-southeast1 as Preview and no Singapore GA date. Google says RAG Engine data residency controls are unsupported. Confirm exact control requirements before either path is approved for production.
Sources: reports/ask-one-custom-rag-component-research-2026-09-27.md; reports/ask-one-managed-rag-research-2026-09-27.md; https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/rag-engine/rag-overview ; https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/rag-engine/deployment-modes
-->
---
class: deck-slide technical-slide boundary-slide
---
<p class="kicker">Shared application boundary</p>
<h1>What ONE builds in either path</h1>
<div class="reference-image"><img src="/diagrams/ask-one-proposal-boundary.drawio.svg" alt="Approved ONE sources enter an ONE-owned publishing flow. The PoC compares a custom workflow using Agent Retrieval with direct RAG Engine. Both supply evidence to the ONE customer API, Gemini and ONE answer checks." /></div>
<p class="reference-caption">ONE owns source approval, the customer API, usage limits, Model Armor enforcement, citation checks and fallback. Both paths rerank retrieved evidence before Gemini.</p>

<!--
The diagram shows candidate paths, not simultaneous production systems. In the custom path ONE prepares passages and calls standalone Agent Retrieval. In the direct path RAG Engine handles a managed corpus and more of ingestion and retrieval. ONE remains responsible for source publication, versioning and withdrawal in both.
Cloud Trace, Logging and Monitoring receive app-owned telemetry. Model Armor screening and reranking are required in the proposed design; the app enforces screening results and checks ranker failures. RAG Engine does not itself approve ONE content or guarantee citation quality.
Sources: reports/ask-one-custom-rag-component-research-2026-09-27.md; reports/ask-one-managed-rag-research-2026-09-27.md; https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/rag-engine/rag-overview
-->
---
class: deck-slide technical-slide content-decision-slide
---
<p class="kicker">ONE-owned content control</p>
<h1>Approved content and withdrawal</h1>
<p class="intro">Every searchable passage must lead back to an approved public source and version.</p>
<table class="proposal-table content-control-table">
<thead><tr><th>Stage</th><th>ONE control</th><th>PoC evidence</th></tr></thead>
<tbody>
<tr><td><strong>Approve</strong></td><td>Register permitted sources, owners, versions and customer links. Exclude drafts and restricted material.</td><td>The sample covers the chosen questions and citations open the approved source.</td></tr>
<tr><td><strong>Publish changes</strong></td><td>Keep stable source IDs and a portable source snapshot; synchronize approved updates.</td><td>Changed guidance appears in retrieval and answers with the right version.</td></tr>
<tr><td><strong>Withdraw</strong></td><td>Remove old passages and invalidate any answer cache that could reuse them.</td><td>Removed guidance stops appearing in retrieval and checked answers.</td></tr>
</tbody>
</table>
<p class="takeaway">Use existing review tools where they meet these controls. A separate review hub needs evidence of a gap and a scope decision.</p>

<!--
ONE must test exact metadata, filtering, reindexing, deletion and cache behavior in each path. Public availability alone does not establish permission for ingestion or re-use. Content owners approve publication and maintain source accuracy. Human feedback does not automatically update the corpus.
A later switch between Agent Retrieval and RAG Engine is a migration with re-import, reindexing and regression testing, not a one-click configuration change.
Sources: PLAN.md, Agreed MVP limits and proposed capabilities; reports/ask-one-custom-rag-component-research-2026-09-27.md; reports/ask-one-managed-rag-research-2026-09-27.md.
-->
---
class: deck-slide technical-slide safety-decision-slide
---
<p class="kicker">Release and usage controls</p>
<h1>Answer safety and traffic protection</h1>
<p class="intro">The ONE application enforces controls around paid AI work and before returning an answer.</p>
<table class="proposal-table safety-control-table">
<thead><tr><th>Control</th><th>Proposed behavior</th><th>Evidence to collect</th></tr></thead>
<tbody>
<tr><td><strong>Sources and answers</strong></td><td>Use approved public versions. Check citation links and source eligibility; withhold unsupported answers.</td><td>Reviewed accuracy, false refusals and unsafe-answer cases.</td></tr>
<tr><td><strong>Screening</strong></td><td>Use Model Armor on questions and responses; the app enforces its verdict.</td><td>Missed attacks, incorrect blocks and added delay.</td></tr>
<tr><td><strong>Traffic and spend</strong></td><td>Use Cloudflare filtering, server-validated challenges, shared quotas and a service-wide usage ceiling.</td><td>Bypass, replay, parallel-request and limit-failure tests.</td></tr>
<tr><td><strong>Access</strong></td><td>Protect administration and the backend. Restrict pilot participation separately from anonymous public access.</td><td>Access-control and recovery tests before pilot and release.</td></tr>
</tbody>
</table>
<p class="caption">A citation or automated screening result does not prove that an answer is correct. Human review remains part of release decisions.</p>

<!--
Source eligibility and citation-link checks can be deterministic. Semantic support is imperfect; use reviewed cases. Model Armor is a required proposed service, not a deployed protection; Cloudflare controls also remain proposed. For direct Model Armor calls the application must enforce the verdict. Logging may contain sensitive prompt/response material, so configure access, sampling and retention before collection. A pilot gate controls who participates without customer-account data in MVP scope.
Enforce quotas atomically across replicas before expensive work. CAPTCHA does not establish identity. Test direct-origin attempts, invalid/replayed challenge tokens, shared IPs, quota store failure and concurrent requests. Spending alerts alone do not cap usage. Numerical limits remain TBC.
Sources: PLAN.md, Bot, access and usage protection; https://docs.cloud.google.com/model-armor/overview ; https://docs.cloud.google.com/model-armor/configure-logging ; https://developers.cloudflare.com/turnstile/get-started/server-side-validation/
-->
---
class: deck-slide technical-slide selection-gates-slide
---
<p class="kicker">PoC decision</p>
<h1>Evidence that selects a retrieval path</h1>
<p class="intro">Test both options with the same approved corpus, reviewed questions and load profile. Agree pass criteria first.</p>
<table class="proposal-table gates-table">
<thead><tr><th>Gate</th><th>Comparable evidence</th></tr></thead>
<tbody>
<tr><td><strong>Answer quality</strong></td><td>Human-reviewed answers, citations and refusal. Compare reranked results; judged Recall@k and groundedness help diagnose failures.</td></tr>
<tr><td><strong>Content control</strong></td><td>Approved-version filtering and an update and withdrawal drill, including cached answers.</td></tr>
<tr><td><strong>Security and region</strong></td><td>Confirm processing and access requirements. Singapore RAG Engine is Preview; its data residency control is unsupported.</td></tr>
<tr><td><strong>Performance</strong></td><td>p95 end-to-end response time and error rate at the same tested load.</td></tr>
<tr><td><strong>Cost and work</strong></td><td>Complete monthly service costs and the pipeline and operating work ONE would retain.</td></tr>
</tbody>
</table>
<p class="takeaway">Keep the working default only if it passes. Choose RAG Engine if it also passes and reduces ONE-owned work at acceptable cost and control.</p>
<p class="caption">Pass thresholds, sample coverage and the production decision remain TBC. A predicted GA date is not PoC evidence.</p>

<!--
A judged Recall@k measure counts labeled relevant approved passages in the first k results within a reviewed set, not exhaustive corpus recall. Groundedness measures support from supplied passages, not factual truth. Publish test-set coverage, counts and topic mix. Compare with existing search/help for customer value on the manager outcome slide.
Google's current RAG Engine region table marks Singapore Preview; the deployment-mode document says data residency controls are unsupported. Confirm location, data handling, service terms and any feature-specific Preview limits. Even a later GA status does not automatically pass these gates. Define material pass criteria with PO/PPO, content owners and accountable technical reviewers before formal testing. The PoC informs a revised design, cost and schedule; production readiness still requires later testing and the pilot.
Sources: PLAN.md, Pilot and production gates; reports/ask-one-managed-rag-research-2026-09-27.md; reports/ask-one-custom-rag-component-research-2026-09-27.md; https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/rag-engine/rag-overview ; https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/rag-engine/deployment-modes
-->
---
class: deck-slide technical-slide operating-slide
---
<p class="kicker">Production operation</p>
<h1>Signals and response ownership</h1>
<p class="intro">The ONE application records protected request traces and measures service health after the PoC.</p>
<table class="proposal-table operating-table">
<thead><tr><th>Signal</th><th>Default GCP evidence</th><th>ONE response</th></tr></thead>
<tbody>
<tr><td><strong>Slow or failed answers</strong></td><td>p50 and p95 end-to-end time, errors and timeouts in Cloud Trace and Monitoring.</td><td>Find the slow stage, fix it or use fallback.</td></tr>
<tr><td><strong>Answer quality</strong></td><td>Versioned reviewed cases, citations and user feedback. Google Gen AI Evals does not list Singapore.</td><td>Run local checks and human review; use Google Evals only after a data-location decision.</td></tr>
<tr><td><strong>Stale guidance</strong></td><td>Time from approved update or removal to retrieval and cache change.</td><td>Stop affected answers, repair the index and retest.</td></tr>
<tr><td><strong>Usage and safety</strong></td><td>Tokens, allocated service cost per admitted question, quota denials and screened events.</td><td>Enforce limits and investigate false blocks or bypasses.</td></tr>
</tbody>
</table>
<p class="takeaway">Set alert and response thresholds before pilot. The production gate also needs support, fallback and rollback procedures.</p>

<!--
Use app-owned OpenTelemetry spans to Cloud Trace, Cloud Logging for protected errors and Cloud Monitoring for health and alerts. Agent Platform agent dashboards and online monitors require their documented deployment/telemetry prerequisites and do not automatically instrument a GKE application. Google Gen AI evaluation is an optional saved-case scorer; its published supported-region list does not include Singapore, so the data path requires approval. Promptfoo is an optional scoped security test runner.
Time to first checked content can be recorded if streaming is used. Report p50/p95 with sample counts. Error and timeout denominator: admitted requests. Cost per question allocates complete monthly service costs to questions admitted for processing; billing is periodic. Protect raw questions and responses with sampling, redaction, access and retention rules.
Sources: reports/ask-one-managed-rag-research-2026-09-27.md; reports/ask-one-custom-rag-component-research-2026-09-27.md; https://docs.cloud.google.com/gemini-enterprise-agent-platform/optimize/observability/overview ; https://docs.cloud.google.com/gemini-enterprise-agent-platform/optimize/evaluation/evaluate-online ; https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/evaluation-overview
-->
---
class: deck-slide technical-slide service-costs-slide
---
<p class="kicker">Service costs only</p>
<h1>Illustrative monthly service budgets</h1>
<p class="intro">Comparable planning scenarios for two retrieval paths at the same question volumes.</p>
<table class="service-costs-table revised-service-costs">
<thead><tr><th>Questions per month</th><th>Custom workflow: Agent Retrieval</th><th>Direct RAG Engine</th></tr></thead>
<tbody>
<tr><td>10,000</td><td><strong>~US$1,000</strong></td><td><strong>~US$2,500</strong></td></tr>
<tr><td>100,000</td><td><strong>~US$2,500</strong></td><td><strong>~US$3,500</strong></td></tr>
</tbody>
</table>
<p class="cost-assumptions">Both paths assume an existing GKE cluster, a modest corpus, Gemini 2.5 Flash, Model Armor and one reranking pass per question. OCR is optional. The custom path uses performance-optimized Agent Retrieval. RAG Engine assumes Spanner Scaled in production and Basic in small non-production use; autoscaling can raise its cost.</p>
<p class="caption">Estimates with safety headroom, not vendor quotes or demand forecasts. Contact Google Cloud for an actual quote. Singapore RAG Engine remains Preview. Excludes staffing, one-time implementation and any Cloudflare upgrade.</p>

<!--
The custom figures are rounded planning allowances with safety headroom, not observed bills, configured quotes or spending caps. At 10,000 / 100,000 questions per month respectively, the illustrative pre-headroom component allowances are: Gemini 2.5 Flash $22 / $215; standalone Agent Retrieval $200 / $400; required reranking $10 / $100; extra GKE app capacity $300 / $600; GCS source versions, embeddings and Model Armor $39 / $95; logging, networking and routine evaluation $150 / $350. Component totals are $721 / $1,760. The scenario assumes one Gemini generation per question averaging 3,000 input and 500 total billed output tokens, a modest text corpus, performance-optimized ANN capacity, an existing shared GKE cluster, one production environment and small non-production use. Agent Retrieval and infrastructure amounts are allowances, not Singapore calculator outputs. Google lists performance-optimized Agent Retrieval capacity at $0.065 per CU-hour, with storage and operations separately metered; a storage-optimized CU or materially larger environment would change the budget.
The direct RAG Engine figures assume Singapore Spanner Enterprise at the published on-demand rate of $1.40712 per node-hour, 730 hours/month, one Scaled production node ($1,027/month) and a separate Basic non-production project at 100 processing units ($103/month). The $1,130 combined Spanner capacity is a floor, not an autoscaling cap. At 10,000 / 100,000 questions per month respectively, the illustrative pre-headroom component allowances are: Spanner capacity $1,130 / $1,130; Spanner storage and backups $25 / $50; Gemini 2.5 Flash $22 / $215; required reranking $10 / $100; extra GKE app capacity $300 / $600; GCS source versions, embeddings and Model Armor $39 / $95; logging, networking and routine evaluation $150 / $350. Component totals are about $1,676 / $2,540, rounded up with safety headroom to about $2,500 / $3,500. Default RAG Engine parsing and fixed-size chunking are documented as free; paid parsing and OCR are not assumed. One reranking pass of up to 100 candidates per question is included at the published gross Ranking API rate. Google lists the Iowa Spanner Enterprise rate at $1.23 per node-hour; Singapore is about 14% higher. Actual RAG Engine billing in the Preview region needs confirmation, so this budgets Spanner as if charged. Basic may not meet production latency; Scaled can add nodes with load or corpus growth. A second continuously active production node adds about $1,027/month before headroom; Scaled instead of Basic for non-production adds about $924/month before headroom.
After the PoC, price both paths at matched actual request volume, tokens, storage, retrieval and app usage, then contact Google Cloud for an actual configuration-specific quote before treating either budget as a funding baseline. Include production and non-production, backups, parsing, required reranking, screening, telemetry, approved evaluation and any Cloudflare plan change. Cloudflare upgrades are excluded from the displayed budgets. Staffing, content-owner effort and one-time implementation are also excluded. These question volumes are comparison scenarios, not demand forecasts. Cloud Billing data is periodic; cost per question is an allocated estimate.
Sources: reports/ask-one-gcp-cost-estimate.md; reports/ask-one-managed-rag-research-2026-09-27.md; reports/ask-one-custom-rag-component-research-2026-09-27.md; https://cloud.google.com/products/gemini-enterprise-agent-platform/pricing ; https://cloud.google.com/gemini-enterprise-agent-platform/generative-ai/pricing ; https://cloud.google.com/security/products/model-armor ; https://cloud.google.com/spanner/pricing ; https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/rag-engine/rag-engine-billing ; https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/rag-engine/deployment-modes
-->
---
class: deck-slide appendix-slide architecture-overview
---

<p class="kicker">Technical approach</p>
<h1>Custom workflow: service map</h1>
<div class="reference-image"><img src="/diagrams/ask-one-gcp-architecture.drawio.svg" alt="Custom path service map: ONE and Drupal sources, Cloud Storage, GKE ingestion and API, Vertex AI embeddings, Agent Retrieval, required VertexRanker and Model Armor, Gemini, Cloud Observability, optional Document AI OCR and ONE evaluation. Google Evals is not listed for Singapore." /></div>

<!--

GKE hosts application workloads; managed Gemini inference is separate from the cluster. RAG supplies context but does not guarantee correctness.
Standalone Agent Retrieval is the working vector-database default. Model Armor and reranking are required in this proposed design; verify ranker location and failure handling. Google Gen AI Evals does not list Singapore, so local checks and human review are the default. Region, controls, latency, cost, capacity and networking still need validation.
Sources: PLAN.md; docs/plan.md, architecture;
https://cloud.google.com/kubernetes-engine/docs/concepts/kubernetes-engine-overview
https://cloud.google.com/vertex-ai/generative-ai/docs/overview
https://cloud.google.com/use-cases/retrieval-augmented-generation

Sources: PLAN.md; docs/plan.md, architecture.
Icon sources: https://cloud.google.com/icons and https://simpleicons.org/

Cloud Storage retains approved source versions. Agent Retrieval holds searchable passage payloads and vectors. Retrieval supplies source context to managed Gemini inference.
Citation eligibility checks are deterministic where possible. Semantic support assessment is imperfect and needs evaluation; the model cannot guarantee truth.
-->

---
class: deck-slide appendix-slide rag-engine-slide
---

<p class="kicker">Direct RAG Engine option</p>
<h1>RAG Engine: service map</h1>
<div class="reference-image"><img src="/diagrams/ask-one-rag-engine-boundary.drawio.svg" alt="Direct RAG Engine service map: ONE and Drupal sources, Cloud Storage, GKE publishing and API, RAG Engine with managed Spanner Scaled, required Ranking API and Model Armor, Gemini, Cloud Observability, optional Document AI OCR and ONE evaluation. Google Evals is not listed for Singapore." /></div>

<!--
RAG Engine documents ingestion, transformation, embedding, indexing and retrieval. The ranking API is required in the proposed design; its region, behavior, cost and failure path need confirmation. Google Gen AI Evals does not list Singapore, so local checks and human review remain the default. The diagram separates managed retrieval from ONE-owned generation orchestration and answer release. RAG Engine itself does not validate ONE source approval or citations.
Source: https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/rag-engine/rag-overview ; https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/rag-engine/retrieval-and-ranking
-->
