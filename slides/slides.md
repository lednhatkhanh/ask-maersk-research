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
The proposal covers the whole first-MVP project, with review gates. Business research and detailed requirements are not concluded. The nine-month estimate and costs remain provisional and require reassessment after the PoC. Project approval does not guarantee release or establish finalized funding.
Sources: PLAN.md, Goal and Decisions already made.
-->

---
class: deck-slide manager-slide overview-slide
---

<p class="kicker">Manager overview</p>
<h1>The proposal in four parts</h1>
<p class="intro">The proposal covers the customer experience and expected benefits, followed by the plan for a first release.</p>
<div class="feature-list feature-steps overview-list">
<div><h2>01 &nbsp; Customer experience</h2><p>What customers need help with and how Ask ONE could help.</p></div>
<div><h2>02 &nbsp; Benefits and research</h2><p>What we hope to improve, what we have observed and what we still need to learn.</p></div>
<div><h2>03 &nbsp; First-release planning</h2><p>What the first release would include, the resources it may need and the proposed schedule.</p></div>
<div><h2>04 &nbsp; Options and success</h2><p>How we would measure success and which features could follow later.</p></div>
</div>
<p class="takeaway">MVP means minimum viable product: the first release with enough capability to test customer value. Technical detail follows on Slide 14.</p>

<!--
Navigation slide. The four themes group the proposal without repeating every slide title.
All scope, value, resource and schedule statements retain the qualifications on their substantive slides.
Source: PLAN.md, Current slide order and Success criteria.
-->

---
class: deck-slide manager-slide
---

<p class="kicker">The opportunity</p>
<h1>Easier access to ONE guidance</h1>
<p class="intro">Could asking a question help customers find and understand the right ONE guidance more easily?</p>
<div class="comparison">
<section>
<h2>The customer problem to investigate</h2>
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
<p class="intro">A customer asks a question in everyday English. Ask ONE would explain approved public ONE guidance and show where to read more.</p>
<div class="feature-list feature-steps">
<div><h2>01 &nbsp; Ask</h2><p>Ask one question about a supported public topic.</p></div>
<div><h2>02 &nbsp; Understand</h2><p>Read a short explanation of the relevant guidance.</p></div>
<div><h2>03 &nbsp; Check</h2><p>Open the original ONE page or document to check the details.</p></div>
<div><h2>04 &nbsp; Continue</h2><p>Follow a link to the relevant ONE service or support channel.</p></div>
</div>
<p class="takeaway">If approved content does not answer the question, Ask ONE should say so and offer a guidance or support link.</p>
<p class="caption">The first release does not access accounts, provide live tracking or shipment-specific answers, or complete bookings and transactions.</p>

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
<div><h2>A source to check</h2><p>Let the customer check the guidance and read further.</p></div>
<div><h2>A link to continue</h2><p>Open the enquiry service to continue. Ask ONE does not fill in or submit the form.</p></div>
</section>
</div>
<p class="caption">Fictional answer and source, created only to demonstrate the experience. This is not actual ONE policy or a live service.</p>

<!--
Preserve the boundary between public document guidance and future authorized live data.
The enquiry answer and guide are wholly fictional, not attributed to an actual ONE publication. They demonstrate summarizing guidance rather than only linking to it. Production examples require approved content.
Sources: PLAN.md, proposed customer experience and confirmed MVP boundaries.
-->

---
class: deck-slide manager-slide benefits-slide
---

<p class="kicker">Expected benefits to validate</p>
<h1>Why this could help customers and ONE</h1>
<p class="intro">Customers could get routine help more easily and make better use of ONE’s digital services.</p>
<table class="benefits-table">
<thead><tr><th>For ONE customers</th><th>For ONE</th></tr></thead>
<tbody>
<tr><td><strong>Less effort finding answers</strong><br>Understand relevant guidance without piecing together several pages.</td><td><strong>More useful public content</strong><br>Help customers use the guidance ONE already publishes.</td></tr>
<tr><td><strong>A clearer next step</strong><br>Find the service that fits the task more easily.</td><td><strong>Easier access to digital services</strong><br>Help customers reach the right service with fewer detours.</td></tr>
<tr><td><strong>Help with routine questions</strong><br>Read an explanation and check its original source.</td><td><strong>Potentially fewer repetitive enquiries</strong><br>Give support more time for issues that need human help.</td></tr>
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
<thead><tr><th>What the recordings show</th><th>Questions for ONE research</th></tr></thead>
<tbody>
<tr><td>Answers explain shipping topics and show related content.</td><td>Can approved ONE content support accurate, useful answers?</td></tr>
<tr><td>An answer about schedules directs customers to official tools or local offices.</td><td>Do service links help customers complete their next step?</td></tr>
<tr><td>Some recordings do not capture a complete response.</td><td>Can Ask ONE answer a representative set of customer questions reliably?</td></tr>
</tbody>
</table>
<p class="takeaway">PO/PPO must guide customer research and agree business requirements and feature priorities. The proposal is still preliminary.</p>

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

<p class="kicker">First release scope</p>
<h1>Proposed first-release scope</h1>
<div class="discovery-layout">
<section>
<h2>Proposed capabilities</h2>
<ol class="numbered-list">
<li><strong>Answers from approved guidance</strong><p>Short explanations with sources customers can open.</p></li>
<li><strong>Links to the relevant service</strong><p>Show where to continue and let customers rate the answer.</p></li>
<li><strong>Content and quality controls</strong><p>Keep sources current, review answers and monitor the service.</p></li>
</ol>
</section>
<section class="scope-summary">
<h2>Agreed MVP limits</h2>
<p class="scope-key">English only<br>Public ONE content<br>One question at a time</p>
<p>No customer sign-in is needed.</p>
<p class="scope-later"><strong>Outside this release:</strong> more languages, account or shipment data, transactions, follow-up conversation and complex integrations.</p>
</section>
</div>
<p class="caption">Discovery with PO/PPO will define requirements and priorities within these limits. A proof of concept (PoC) will test technical feasibility. The detailed scope remains open.</p>

<!--
Discovery and the PoC are the first phases of the whole project, not the entire proposal.
The MVP includes Drupal content updates/removals, feedback, evaluation, guardrails, caching and monitoring.
Assess existing tools for source status, approval and review history. A custom Hub needs a demonstrated gap.
Security requirements and evaluation questions start during discovery. Secure a permitted sample before the PoC.
Source: PLAN.md, Goal, Agreed MVP limits and proposed capabilities and Rough nine-month delivery estimate.
-->


---
class: deck-slide manager-slide resources-slide
---

<p class="kicker">Proposed resources</p>
<h1>Proposed delivery team</h1>
<p class="intro">Placeholder: 11 people. The team will revise the roles and allocations after discovery.</p>
<table class="resources-table">
<thead><tr><th>Role</th><th>People</th><th>Main contribution</th></tr></thead>
<tbody>
<tr><td>Developers</td><td>6</td><td>Build the customer interface, content search and application services.</td></tr>
<tr><td>Technical architect (TA)</td><td>1</td><td>Guide architecture, security, privacy and technical quality.</td></tr>
<tr><td>Product owner (PO)</td><td>1</td><td>Clarify business needs, priorities and acceptance criteria.</td></tr>
<tr><td>User interface / experience designer</td><td>1</td><td>Research customer journeys and test usability.</td></tr>
<tr><td>Quality assurance engineers</td><td>2</td><td>Test functionality, answer quality and release readiness.</td></tr>
</tbody>
</table>
<p class="takeaway">No additional machine learning engineer is planned. The proposal uses a managed AI service without custom model training. Allow time for learning and evaluation.</p>
<p class="caption">Availability is unconfirmed. Discovery and the PoC must test whether this team can deliver the agreed scope and schedule.</p>

<!--
User-supplied resource placeholder: one team, 6 developers, 1 TA, 1 PO, 1 UI/UX, 2 QA. No allocation or staffing approval is asserted.
Managed Gemini inference with retrieval does not assume custom model training. At least one accountable developer/TA needs applied RAG and evaluation experience.
Allow learning and evaluation work during discovery and the PoC, then reassess delivery assumptions from the evidence.
Detailed developer allocation and delivery-partner involvement stay in the internal plan.
Sources: PLAN.md, Resource placeholder and ML support; reports/ask-one-gcp-cost-estimate.md, ML assessment;
https://docs.cloud.google.com/vertex-ai/generative-ai/docs/rag-overview
-->

---
class: deck-slide manager-slide timeline-slide
---

<p class="kicker">Planning scenario, not a commitment</p>
<h1>Rough nine-month delivery estimate</h1>
<p class="intro">Proposed first-MVP project. Further PO/PPO-led research and the PoC must inform scope, cost and schedule.</p>
<table class="timeline-table">
<thead><tr><th>Tentative period</th><th>Focus</th><th>Target outcome</th></tr></thead>
<tbody>
<tr><td>Month 1</td><td>Discovery</td><td>Business research, permitted sample and PoC scope</td></tr>
<tr><td>Month 2</td><td>Focused PoC</td><td>Test feasibility and revise scope, costs and dates</td></tr>
<tr><td>Months 3–4</td><td>Core development</td><td>Working product preview by the end of Month 4</td></tr>
<tr><td>Months 5–6</td><td>Testing and refinement</td><td>End of Month 6: manager demo, then pilot review</td></tr>
<tr class="milestone"><td>Month 7</td><td>Limited user pilot</td><td>Test with invited users and approved content</td></tr>
<tr class="milestone"><td>Month 8</td><td>Target production release</td><td>Release in stages if the pilot and readiness review pass</td></tr>
<tr><td>Month 9</td><td>Stabilization</td><td>Monitor use, fix priority issues and improve operations</td></tr>
</tbody>
</table>
<p class="caption">All months are tentative and start from discovery kickoff. Research or testing may change any date, before or after the PoC. Evaluation and security work begin in discovery.</p>

<!--
This is an unvalidated estimation scenario, not a concluded delivery plan. PO/PPO-led research must clarify business needs and feature priorities. Review the schedule after business clarification, after the PoC and whenever a material dependency changes.
The PoC is provisionally placed in Month 2. Its scope and duration must be confirmed during discovery.
A manager demo does not establish pilot readiness. The next slide explains the separate readiness reviews.
Stabilization is planned work, not a full month of contingency.
Source: PLAN.md, Rough nine-month delivery estimate.
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
<tr><td>Technical feasibility</td><td>Test answer quality and content updates. Confirm access to the required systems.</td><td>Revise the design or extend the PoC and update the estimate.</td></tr>
<tr><td>Release readiness</td><td>Test security, reliability and usability. Confirm operating costs and support procedures.</td><td>Fix critical issues before starting the pilot or releasing to production.</td></tr>
</tbody>
</table>
<p class="takeaway">Pilot and production each need a readiness review, even after a successful demo. Content approval delays can move both dates. The project may extend beyond Month 9, including stabilization.</p>

<!--
Content approval remains a critical-path risk but is not the only schedule dependency. No listed risk is a confirmed failure.
PO/PPO involvement must cover business specifications, customer research, feature priorities and acceptance criteria as well as content.
A representative permitted sample is required before the PoC. The minimum useful content set must be approved before the pilot.
PO/PPO and content owners may narrow supplementary topics. If minimum content is absent, revise the dates.
Start security, privacy and evaluation work in discovery and the PoC. Later readiness testing must cover performance, recovery and operational support.
The Month 6 demo is tentative. Pilot and production reviews remain separate and evidence-based.
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
<div><h2>Connected customer support</h2><p>With the customer’s consent, pass the question and relevant details to support.</p></div>
</div>
<p class="takeaway">These options are outside the nine-month estimate. Customer demand, feasibility and separate approval will determine priorities and dates.</p>

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
<tr><td><strong>Useful, correct guidance</strong></td><td>Check answer accuracy, sources and the customer’s next action.</td></tr>
<tr><td><strong>Less customer effort</strong></td><td>Time to useful guidance, task completion and customer feedback.</td></tr>
<tr><td><strong>Fewer routine support enquiries</strong></td><td>Check whether customers resolve supported questions without contacting support.</td></tr>
<tr><td><strong>Acceptable overall operating cost</strong></td><td>Service charges plus content maintenance and support effort, measured per successful answer.</td></tr>
</tbody>
</table>
<p class="takeaway">PO/PPO-led research defines needs and success criteria. The PoC informs scope and cost. The pilot tests outcomes before production release.</p>
<p class="caption">Budget and return on investment remain open. A click or abandoned session does not prove that a question was resolved.</p>

<!--
Whole-project proposal, with evidence-based scope, cost and readiness reviews.
Define success and thresholds before formal testing. Source clicks alone do not prove completion.
Cost drivers include application/platform work, model and retrieval usage, screening, evaluation, content upkeep and operating support.
Separate incremental AI consumption from existing platform costs. No quantified ROI or savings are asserted.
Source: PLAN.md, Expected benefits for customers and ONE, Pilot and production gates.
-->


---
class: deck-slide section-slide technical-overview
---

<p class="kicker">Technical overview</p>
<h1>Technical design and controls</h1>
<div class="technical-toc">
<div>
<section><span class="technical-toc-number">01</span><h2>Answer flow and system boundaries</h2><p>How the system would answer a question using approved source content.</p></section>
<section><span class="technical-toc-number">02</span><h2>Content approval and updates</h2><p>How the service would approve sources and apply updates.</p></section>
<section><span class="technical-toc-number">03</span><h2>Security and usage protection</h2><p>Answer checks, data protection and usage limits.</p></section>
</div>
<div>
<section><span class="technical-toc-number">04</span><h2>Quality, operations and service costs</h2><p>How we would assess release readiness and estimate service costs.</p></section>
<section><span class="technical-toc-number">05</span><h2>Technical reference diagrams</h2><p>The security checks and content review process in detail.</p></section>
</div>
</div>
<p class="section-detail">The PoC will test the proposed design. Further testing must establish readiness for production.</p>

<!--
Section overview. Technical slides distinguish proposed requirements, candidate components and later production validation.
Source: PLAN.md, Technical focus.
-->

---
class: deck-slide appendix-slide architecture-overview
---

<p class="kicker">Technical approach</p>
<h1>How a question becomes an answer</h1>
<div class="reference-image"><img src="/diagrams/ask-one-gcp-architecture.drawio.svg" alt="Proposed architecture: Cloudflare protects the GKE application, governed content supplies retrieval, and Vertex AI generates answers. Dashed live APIs are future options." /></div>
<p class="reference-caption">GKE (Google Kubernetes Engine) would run the app. Cloud SQL is a candidate for finding source passages, which Vertex AI would use to draft answers. The PoC will test retrieval and response time. Dashed live API links are future scope.</p>

<!--

GKE hosts application workloads; managed Gemini inference is separate from the cluster. RAG supplies context but does not guarantee correctness.
Cloud SQL/pgvector is a feasibility option, not a final architecture decision. Region, access, capacity and networking remain to validate.
The proposed dataflow reuses the existing reference diagram, with future APIs explicitly outside the initial MVP.
Sources: PLAN.md; docs/plan.md, architecture;
https://cloud.google.com/kubernetes-engine/docs/concepts/kubernetes-engine-overview
https://cloud.google.com/vertex-ai/generative-ai/docs/overview
https://cloud.google.com/use-cases/retrieval-augmented-generation


Existing diagram retained with embedded editable draw.io source.
Future live APIs are outside the current MVP and have no delivery commitment. GKE hosts the app; Vertex AI supplies managed inference.
Cloud SQL/pgvector, screening and storage configuration remain candidate choices.
Sources: PLAN.md; docs/plan.md, architecture.
Icon sources: https://cloud.google.com/icons and https://simpleicons.org/

Cloud Storage retains source versions. Cloud SQL with pgvector is a candidate retrieval store. Retrieval-augmented generation supplies source context to managed Gemini inference.
The overview diagram is unchanged and retains embedded editable draw.io source. The detailed security and lifecycle flows remain appendix references.
Citation eligibility checks are deterministic where possible. Semantic support assessment is imperfect and needs evaluation; the model cannot guarantee truth.
-->

---
class: deck-slide technical-slide
---

<p class="kicker">Approved content and review</p>
<h1>How approved content stays current</h1>
<p class="intro">Track the source and approved version of each passage so answers use current guidance.</p>
<table class="lifecycle-table">
<thead><tr><th>Stage</th><th>What the service needs to do</th><th>What the PoC will test</th></tr></thead>
<tbody>
<tr><td>Collect and approve</td><td>Register permitted public sources and their owners. Exclude drafts and restricted content.</td><td>Does the sample contain enough guidance to answer the test questions?</td></tr>
<tr><td>Prepare and index</td><td>Extract passages with source IDs, versions and links.</td><td>Can we extract useful text from tables and attachments and retain source links?</td></tr>
<tr><td>Review and release</td><td>Record approval, test results and release history.</td><td>Can we repeat an answer test using the same approved source version?</td></tr>
<tr><td>Update and remove</td><td>Apply Drupal updates and removals to searchable passages and saved answers.</td><td>Do updates and removals stop the service from using outdated guidance?</td></tr>
</tbody>
</table>
<p class="takeaway">Use existing review tools if they meet the requirements. Build a custom review Hub only if needed. Test scale and recovery before release.</p>

<!--

Collection permission and permission to expose content to end users are separate decisions.
Evaluate CMS body fields, structured blocks, attachments and relationships rather than indiscriminately indexing page markup.
Documents, PDFs, tables and scans need extraction-specific checks. Public publication alone does not establish eligibility for reuse.
Store source lineage, audience, language and effective/version dates as appropriate. Deletion must propagate to retrieval and caches.
Sources: PLAN.md, Agreed MVP limits and proposed capabilities; docs/plan.md, content readiness and continuous improvement.


The minimum content-review capability is in scope. A bespoke Hub is conditional on discovery and PoC findings.
Production connectors, identity for administrative actions and operational release control require later implementation.
User feedback does not automatically publish content or train the model.
Source: PLAN.md, Agreed MVP limits and proposed capabilities and Technical focus.

The review queue is an optional interface, not a separate committed product. Minimum workflow capabilities remain in scope.
-->

---
class: deck-slide technical-slide
---

<p class="kicker">Security controls</p>
<h1>Answer safety and data protection</h1>
<p class="intro">The service must use approved sources, protect administration and check questions and answers for unsafe content.</p>
<div class="security-content">
<section class="control-list">
<div><h2>Before retrieval</h2><p>Select only approved public sources. Protect administrative actions with access controls.</p></div>
<div><h2>During generation</h2><p>Treat source text as reference material, not instructions. Never send restricted content to the model.</p></div>
<div><h2>Before the response</h2><p>Check source permissions and citation links. Assess whether the sources support the answer. Withhold answers that fail the checks.</p></div>
</section>
<section class="security-tests">
<h2>Test from the PoC onward</h2>
<p>Test attempts to bypass source restrictions, inject malicious instructions or produce unsupported claims.</p>
<p>Model Armor could screen questions and answers. Test whether it blocks legitimate content or slows responses.</p>
<p class="test-conclusion">A valid citation does not prove an answer is correct. Automated checks can miss errors, so human evaluation remains necessary.</p>
</section>
</div>

<!--
No deployed controls are claimed. Model Armor screening complements application authorization and source eligibility.
For direct screening calls, the application must enforce the verdict. Screening cannot guarantee that every attack is detected.
Public MVP traffic does not require end-user login; administration does require appropriate authentication and authorization. Future authenticated customer features are separate scope.
Source: https://docs.cloud.google.com/model-armor/overview
Internal sources: PLAN.md; docs/plan.md, guardrails and trust.
-->

---
class: deck-slide technical-slide abuse-protection-slide
---

<p class="kicker">Proposed access and usage protection</p>
<h1>Protection against bots and excessive use</h1>
<p class="intro">Filter traffic through Cloudflare and enforce application limits before paid AI processing.</p>
<table class="abuse-protection-table">
<thead><tr><th>Protection</th><th>Proposed behavior</th></tr></thead>
<tbody>
<tr><td>Bot and traffic filtering</td><td>Use Cloudflare to filter attacks. Verify bot challenges, such as Turnstile, on the server.</td></tr>
<tr><td>Burst and rolling limits</td><td>Limit requests per minute and questions over the preceding hour and 24 hours. Combine session and IP controls.</td></tr>
<tr><td>Concurrency and spending</td><td>Limit active answers, tokens and retries. Enforce a service-wide usage ceiling before starting more AI work.</td></tr>
<tr><td>Backend access</td><td>Allow backend traffic only through the approved gateway. Protect model credentials and administration.</td></tr>
</tbody>
</table>
<p class="takeaway">The PoC will test gateway bypass, reused bot challenges and simultaneous requests. Tune limits as usage evidence becomes available.</p>
<p class="caption">Enforce access for invited pilot users. Public access would need no sign-in. Bot checks do not prove identity. When limits apply, show when to retry and link to guidance.</p>

<!--
This slide addresses automated abuse, access and service consumption. The preceding Security controls slide addresses source restrictions, prompt injection and answer screening.
Illustrative starting values only: one active generation per anonymous session, five questions per minute, 30 in a rolling hour and 100 in a rolling 24 hours. These are not approved product policy. Confirm with usage, accessibility and load testing.
A rolling window counts the preceding interval at each request, rather than resetting on a clock boundary.
Enforce shared, atomic quota/concurrency reservations across application replicas before expensive processing. Decide how failed requests and retries count. Apply cheap edge limits before challenge verification. Do not trust client counters or arbitrary forwarded IP headers.
Server-side Turnstile validation must check success and expected hostname/action. Tokens expire after five minutes and are single-use. A successful challenge does not bypass quotas.
Anonymous session IDs are accounting signals, not identities. Sessions can be recreated and IPs rotated. Combine layered limits with global admission controls; monitor false positives for shared networks.
Restrict origin access so direct calls cannot bypass the gateway. CORS, hidden URLs and CAPTCHA do not establish authorization. Administration needs authentication and appropriate permissions.
A pilot gate controls participation without adding account-specific customer data to MVP scope. Confirm its implementation during discovery.
Bound input length, billed output including reasoning, retries and concurrent work. Budget alerts alone do not enforce spending limits. If controls fail, fall back to ordinary guidance rather than unbounded generation.
PoC tests include absent/invalid/replayed tokens, direct-origin attempts, rapid and sustained traffic, parallel requests across replicas and limit-store failure. Later readiness testing covers distributed abuse, load, recovery and accessibility.
Cloudflare plan entitlements and any extra service costs remain to confirm. This slide does not assert that current service estimates include a plan upgrade.
Sources:
https://developers.cloudflare.com/turnstile/get-started/server-side-validation/
https://developers.cloudflare.com/fundamentals/security/protect-your-origin-server/
https://developers.cloudflare.com/use-cases/solutions/stop-malicious-bots/
PLAN.md, Bot, access and usage protection.
-->

---
class: deck-slide technical-slide quality-readiness-slide
---

<p class="kicker">Evidence for release and continued operation</p>
<h1>Quality and production readiness</h1>
<p class="intro">Compare Ask ONE with existing search. Agree what counts as a passing result before formal testing.</p>
<table class="quality-readiness-table">
<thead><tr><th>Evidence</th><th>How to establish it</th></tr></thead>
<tbody>
<tr><td>Correct, useful answers</td><td>Check sources and permissions, then assess answers automatically and through human review. Test when the service should decline to answer.</td></tr>
<tr><td>Reliable operation</td><td>Test response time and recovery from failures. Monitor errors and usage while protecting sensitive data in logs.</td></tr>
<tr><td>Safe changes</td><td>Track source and release versions. Repeat tests before each change and keep a way to restore the previous version.</td></tr>
<tr><td>Readiness to release</td><td>Review pilot results, content approval and support procedures. Fix critical issues before production.</td></tr>
</tbody>
</table>
<p class="takeaway">The PoC supplies early evidence. Release depends on readiness tests and a successful limited pilot.</p>
<p class="caption">Automated evaluation is supporting evidence. It does not replace human judgment or the separate pilot and production reviews.</p>

<!--

Illustrative test specification, not a passing result. No numeric thresholds or sample sizes are invented.
Ragas faithfulness measures consistency with retrieved context, not independent factual truth. A source can be wrong even when the answer repeats it faithfully.
Evaluation costs, repeated-run variability, false positives, dataset review and versioning require consideration.
Sources: PLAN.md, Pilot and production gates;
https://docs.ragas.io/en/stable/concepts/metrics/available_metrics/faithfulness/
https://docs.cloud.google.com/vertex-ai/generative-ai/docs/models/evaluate-judge-model


Trace IDs identify processing events and supporting evidence, not hidden model reasoning.
Avoid logging raw customer questions, documents or sensitive responses by default. Define access, sampling, retention and deletion rules.
Budget alerts notify; enforcement requires application limits. Cache hits and fallback must preserve source eligibility, versions and deletion requirements.
Use available platform observability where suitable. No existing Ask ONE deployment or measured operating costs are asserted.
Sources: PLAN.md; docs/plan.md, caching, evaluation and operations.

Detailed operational controls: bound retries and timeouts, measure response latency/errors and cost per successful answer, redact traces, restrict access and set retention/deletion policies. Trace IDs identify events and source versions, not hidden reasoning.
Ragas and Vertex AI Evaluation remain options rather than prescribed dependencies. Judge-model scores do not prove correctness. Version evaluation datasets and investigate disagreement with human review.
Example test aligned with the fictional manager example: enquiry preparation guidance. Expected behavior summarizes only the approved test source, cites it, and links to the enquiry service without filling or submitting forms. Test broken citations, invented requirements and ineligible sources.
-->

---
class: deck-slide technical-slide service-costs-slide
---

<p class="kicker">Service costs only</p>
<h1>Estimated monthly service costs</h1>
<p class="intro">USD per month, above existing platform spending. Includes additional GKE capacity.</p>
<table class="service-costs-table">
<thead><tr><th>Service component</th><th>10,000 questions / month</th><th>100,000 questions / month</th></tr></thead>
<tbody>
<tr><td>Vertex AI (Gemini 2.5 Flash example)</td><td>$22</td><td>$215</td></tr>
<tr><td>Additional GKE capacity</td><td>$100–300</td><td>$200–600</td></tr>
<tr><td>Cloud SQL retrieval and backups</td><td>$250–650</td><td>$350–1,000</td></tr>
<tr><td>Storage, screening and other operations</td><td>$64–189</td><td>$155–445</td></tr>
<tr class="cost-total"><td>Planning budget, with contingency</td><td>$600–1,500 / month</td><td>$1,200–3,000 / month</td></tr>
</tbody>
</table>
<p class="cost-assumptions">Assumes one AI call per question with 3,000 input and 500 billed output tokens, plus a small test environment. Tokens are units of text billed by the model. Usage volumes are illustrative.</p>
<p class="takeaway">Excludes staffing and one-time implementation. Infrastructure amounts are planning allowances. Confirm usage, configuration and the service budget after the PoC.</p>
<p class="caption">Google Cloud pricing checked 12 Sep 2026. Includes 25% contingency and rounding. Cloudflare coverage needs confirmation. New plan fees are excluded.</p>

<!--
Source and full calculation: reports/ask-one-gcp-cost-estimate.md. All prices USD, standard published rates, no negotiated discounts or tax.
Illustrative Gemini 2.5 Flash: $0.30/M input tokens and $2.50/M output tokens including reasoning. 3,000 input + 500 total billed output = $0.00215/question; $21.50 at 10k, $215 at 100k. This model is a pricing example, not a finalized deployment choice.
GKE and Cloud SQL are budget allowances, not regional SKU quotes. Singapore is provisional. Validate existing headroom, region, availability/HA, database size, network and environment count. Extra capacity is not free.
Combined row at 10k: GCS $5–20 + Model Armor $4 rounded + embeddings $5–15 + logging/monitoring/network/routine evaluation $50–150 = $64–189.
At 100k: $10–30 + $35 + $10–30 + $100–350 = $155–445. Model Armor is optional and uses a gross rate before free entitlements.
Subtotals $436–1,161 / $920–2,260. Add 25% contingency and round to planning envelopes. These are not caps or capacity guarantees.
Assumes a small text corpus up to 100 GiB, one production deployment and small shared non-production usage. No new cluster fee or unrelated existing platform spend is charged again.
Excludes one-time ingestion/OCR, migration, training, dedicated GPUs, multi-region recovery, premium support and new third-party/Cloudflare plan fees. Confirm existing coverage. Major changes require a new estimate.
Monthly services budget is distinct from implementation and the broader operating-effort measure on the outcomes slide. Do not multiply by nine to infer a total project budget.
Official sources checked 12 September 2026:
https://cloud.google.com/vertex-ai/generative-ai/pricing
https://cloud.google.com/kubernetes-engine/pricing
https://cloud.google.com/sql/pricing
https://cloud.google.com/storage/pricing
https://cloud.google.com/security/products/model-armor
https://cloud.google.com/products/observability/pricing
-->

---
class: deck-slide appendix-slide
---

<p class="kicker">Technical reference</p>
<h1>Security flow</h1>
<div class="reference-image"><img src="/diagrams/ask-one-security-chain.drawio.svg" alt="Proposed request flow with authorization, screening, retrieval, generation, answer checks and safe fallback" /></div>
<p class="reference-caption">The application must enforce every check and withhold an answer if a required check fails. The PoC will test these failure paths. See Slide 17 for answer checks and Slide 18 for traffic limits.</p>

<!--
Existing diagram retained with embedded editable draw.io source. The application enforces access and screening verdicts.
Authorization includes source eligibility and protected administration. Customer-account access remains outside the first MVP.
Source: https://docs.cloud.google.com/model-armor/overview
Internal source: docs/plan.md, guardrails and trust.
-->

---
class: deck-slide appendix-slide
---

<p class="kicker">Technical reference</p>
<h1>Knowledge and quality workflow</h1>
<div class="reference-image"><img src="/diagrams/ask-one-knowledge-quality-loop.drawio.svg" alt="Proposed governed source lifecycle connecting registration, staging, evaluation, approval, release and improvement" /></div>
<p class="reference-caption">Content changes must pass review before they affect answers. The PoC will test an update and a removal. See Slide 16 for content handling and Slide 19 for release checks.</p>

<!--
Existing diagram retained with embedded editable draw.io source.
Reviewed test questions and their version history are conceptual requirements. No dataset size, passed quality score or fixed release sequence is claimed.
Feedback returns through owner review and evaluation. It does not automatically publish new guidance.
Sources: PLAN.md; docs/plan.md, continuous improvement and evaluation.
-->
