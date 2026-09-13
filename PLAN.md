# Ask ONE main plan: local slide generation

Status: preliminary project proposal; business definition and research remain open

Scope: local Slidev source and supporting documentation. PDF and PowerPoint exports are opt-in under AGENTS.md. Google Slides sync also requires an explicit request.

This is the authoritative plan for the next slide revision. Use it for slide content, audience boundaries, milestones and completion checks. Treat `docs/plan.md` and `slide-docs.md` as supporting material about the earlier proposal and deck. Where they conflict with this brief, follow this plan and update the deck documentation during generation. The earlier CLI research plan is archived in [docs/archive/maersk-research-spike-plan.md](docs/archive/maersk-research-spike-plan.md).

## Generation handoff

1. Read this plan completely and inspect the current `slides/slides.md`, `slides/style.css` and diagram assets.
2. Draft the manager section, then adapt the technical section according to the planned slide order. Follow the internal-only information boundaries below.
3. Use the existing local Slidev project. Run `pnpm --dir slides build`, then visually inspect the affected slides in the local browser and perform the reading checks below. Inspect the complete deck when changing shared styles or structure. Follow AGENTS.md for optional exports.
4. Update the narrative and final count in `slides/README.md` and `slide-docs.md`. Remove any instruction there that requires automatic Google Slides sync, following the local-only default in `AGENTS.md`.
5. Mark the implementation checklist as work completes, and record the output paths and any unresolved verification limitations here.

Repository note (verified 13 September 2026): slide source and assets are now ordinary files in the root Git index. Earlier generation records describe the former gitlink. Keep the portable source archive current alongside the tracked source.

## Current planning update — 13 September 2026

This update implements the latest user direction and supersedes older staffing displays and slide-number references below. Keep **nine months as the proposed implementation duration, excluding discovery and the PoC**. Implementation Month 1 starts after the separate PoC review and agreement to proceed. Calendar kickoff remains TBC, and discovery/PoC findings can revise the forecast. Discovery and PoC durations are additional and TBC / to be discussed. Do not replace the proposal with an unspecified implementation duration.

- Slide 9: suggested roles for PoC and implementation, with every headcount and allocation **TBC / to be discussed**. No numerical team-size recommendation appears in the slides or notes.
- New Slide 10: a separate proposed eight-week PoC after discovery. Every proposed achievement, duration, sequence and exit criterion is **TBC / to be discussed**. Weeks 1–2: journey, permitted sample and evaluation plan. Weeks 3–4: sample answers, citations, service links and fallback. Weeks 5–6: quality/search comparison, content changes, safety, response time and service costs. Weeks 7–8: demo, gaps, backlog and a revised implementation recommendation. The eight-week breakdown is discussion material, not a validated estimate.
- Slide 11: preserve nine months for implementation only: Months 1–4 core development, Months 5–6 hardening/demo, Month 7 pilot, Month 8 conditional production release and Month 9 stabilization. Retain the known implementation outcomes and separate readiness gates. Detailed requirements and acceptance criteria remain subject to PO/PPO-led agreement.
- Adapt the staged evidence structure from `../payloadcms-poc/apps/slides/slides.md`, without importing its staffing assumptions.
- Current deck: 29 slides. Manager section 1–14, technical overview 15, core technical slides 16–27, reference diagrams 28–29. Resource quantities and role allocations appear only on Slide 9. Service costs remain separate on Slide 27.
- Local update only. The existing Google Slides deck remains at the earlier 22-slide revision until explicitly requested to sync. Preserve PDF/PowerPoint snapshots.

## Phase sequence and presentation boundary

Present discovery, a separate proposed two-month PoC (approximately eight weeks), and nine months of implementation after the PoC review and agreement to proceed. Discovery duration, PoC timing and calendar kickoff remain TBC / to be discussed. Do not present the team's internal learning, training or self-study process in slides or speaker notes, or include a separate learning month in the project timeline.

Current order: resource Slide 9, PoC Slide 10, implementation Slide 11 and risks Slide 12. The manager section ends at Slide 14. Technical overview 15, core technical 16–27, references 28–29.

## Goal

Restructure the Ask ONE deck so managers can understand the proposal without a presenter. The opening section will follow the logic of a concise executive proposal: opportunity, solution, execution, business case and decision. A compact manager overview will map that reading path immediately after the cover. A separate technical section will follow it, introduced by its own overview.

The deck will propose approval to begin the Ask ONE project through the first MVP: discovery, proof of concept (PoC), development, limited pilot, controlled production release and stabilization. Discovery is the first project phase, not the entire proposal. Explain what customers can do with the feature and why it could be valuable to both customers and ONE before presenting delivery and validation details.

Do not create a dedicated approval or call-to-action slide. Use “Project proposal: first MVP” on the cover and a short statement on the roadmap: “Proposed first-MVP project. Further PO/PPO-led research and the PoC must inform scope, cost and schedule.” Close the manager section with expected outcomes and how success will be measured, then transition to the technical section.

Project approval is not an unconditional promise to release or an assertion that budget has already been approved. The nine-month implementation proposal excludes discovery and the PoC and remains provisional. Discovery and the PoC are review gates within the proposed project; their findings may require a scope change, revised funding or schedule, or a pause/stop decision. Pilot and production gates remain mandatory. The deck should support a whole-project decision without inventing a finalized budget or suggesting that a PoC result guarantees delivery.

## Required PO/PPO involvement before finalizing the project definition

Use the term PO/PPO consistently in the slides, without expanding it, as requested.

Further PO/PPO involvement is required to clarify the business specification, guide research and prioritize features. The current research and proposal are not concluded. A technical PoC alone cannot finalize the business case, requirements or delivery plan.

PO/PPO must work with business stakeholders, customer-facing functions, content owners and the delivery team to:

- Validate the customer problems and priority journeys through further research, including comparison with existing search and help.
- Define business requirements, supported topics, expected answer behavior, exceptions and the correct next action for customers.
- Prioritize the feature backlog and acceptance criteria within the agreed English-only, public-content, single-question limits. These limits remain constraints, not proof that the detailed specification is complete.
- Agree useful content coverage, review responsibilities and the approval path with content owners.
- Review usability findings, the value measures, operating/support needs, cost assumptions and technical feasibility before drawing a delivery conclusion.

Start this collaboration during discovery and continue it through the PoC and pilot. No PO/PPO allocation, workshop date or business sign-off is assumed to have been secured.

Before treating the project definition and delivery forecast as a baseline, record an agreed business specification and prioritized MVP backlog, the research findings, initial acceptance criteria, the content plan, a cost assessment and unresolved dependencies. PO/PPO and the accountable stakeholders must review these alongside the PoC results. Open questions need an owner and a next review point. If material issues remain, continue research, narrow the proposal or publish a revised estimate rather than declaring the work concluded. Final project completion still requires the release and stabilization acceptance work.

The slides may describe this required PO/PPO business collaboration, as explicitly requested. Show staffing quantities and role allocations only on the dedicated resource slide, clearly marked as a placeholder. Other slides and their notes must omit staffing details. Partner-team involvement stays in Markdown only.

## Decisions already made

- The manager section comes first and includes a compact overview after the cover. It groups the proposal into customer case, evidence, first-release planning, and outcomes.
- The technical section starts after a clear section break that also acts as a technical overview. Twelve core slides explain the system in sequence, with detailed controls in notes and two reference diagrams.
- The revised target is 29 slides: 14 manager slides including the new overview, one technical overview, twelve core technical slides and two reference diagrams. Include a dedicated resource placeholder and a separate monthly service-cost estimate. Keep the roadmap and risks on adjacent slides. Readability takes priority over an exact count.
- Frame the proposal around beginning the whole first-MVP project, with evidence-based review gates. Do not reduce the request to one month of discovery or add a standalone approval slide.
- Nine months is a rough estimation scenario only, not a concluded delivery plan. Further PO/PPO-led business research and technical investigation may change it before or after the PoC. All implementation month numbers are relative to implementation kickoff after the PoC review and assume timely decisions between stages.
- A working product preview is targeted for the end of Month 4.
- The formal manager demo is targeted for the end of Month 6. A separate readiness review determines whether the service can enter the pilot. A successful demo alone does not establish readiness.
- A limited user pilot is targeted for Month 7.
- The controlled production release is tentatively targeted for Month 8. Month 9 covers planned stabilization and priority fixes. It is not a full month of spare capacity.
- The Markdown plan retains the internal staffing assumption: six developers, one technical architect or technical lead, one product owner, two QA engineers and one UI/UX designer. A second UI/UX designer can join during research, prototyping and user testing if available. Keep these earlier quantities internal only. The resource slide now uses TBC / to be discussed for both phase headcounts. Do not repeat staffing in other slides or their notes.
- The technical architect owns the day-to-day security and privacy design as part of the technical leadership role. The resource slide may summarize this role. Detailed assignments remain internal.
- The Markdown plan records the established working relationships with the GCP and Drupal teams. Their organizational involvement does not appear in the slides.
- The first MVP supports English only. It uses public content and handles one question at a time.
- Multilingual support, authenticated data, transactions and complex integrations remain outside the first MVP.
- The Month 7 pilot uses a deliberately limited audience.
- Content approval is a critical-path risk, but not the only schedule risk. Business decisions, research findings, feasibility, integration/access dependencies, quality/security testing and operational readiness can also move every milestone.
- Only the local deck will be updated. Google Slides will be synchronized only if the user asks for it explicitly.

## Success criteria

The first fourteen slides must work as a standalone management proposal. Slide 2 should provide a short thematic map rather than repeat every slide title. A reader should be able to identify:

- the customer opportunity;
- what the feature does, with a concrete example and clear limits;
- the expected benefits for ONE customers and for ONE;
- what the current research does and does not prove;
- what the first MVP will deliver and how discovery helps define it;
- why the roadmap is a rough estimate only and which unresolved risks can change it;
- the required PO/PPO involvement before business requirements and feature priorities can be finalized;
- the proposed resource placeholder, without implying secured allocations;
- the reason to invest in the project and how its value will be tested;
- the whole-project proposal and the review gates that protect against an unsupported delivery commitment.

The manager section must use plain English, readable text and a clear visual order. Important qualifications must appear on the slide rather than only in speaker notes.

Read the rendered manager section without notes: a reader must be able to explain what Ask ONE does, how it differs from a list of search results, the expected benefits for customers and ONE, the MVP boundaries, and the proposed project with its review gates. Read the technical section the same way: a technical manager must be able to explain why the approach fits, its main unresolved assumptions and how the PoC will investigate them. Successful exports and font-size checks alone do not satisfy these criteria.

## Current slide order

The revised deck has 29 slides. The manager section ends at Slide 14, followed by a technical overview, twelve core technical slides and two appendix diagrams.

### Manager proposal

| Slide | Working title | Purpose and required content |
|---:|---|---|
| 1 | Ask ONE: answers from trusted ONE guidance | Lead with the customer benefit. Use “Project proposal: first MVP” as the subtitle, not a discovery-only approval request. |
| 2 | Manager overview | Group the manager section into four themes: opportunity and experience; value and evidence; first-release planning; options and success. Keep the wording short and explain that technical detail follows after the manager outcomes. |
| 3 | Easier access to trusted ONE guidance | Explain the customer difficulty to investigate: finding the right guidance and understanding what to do next. Do not present unmeasured ONE customer problems as established facts. |
| 4 | What Ask ONE would do for customers | Explain the feature in plain English: ask a question, receive a short explanation based on approved public ONE guidance, open the source and follow a relevant service link. Explain its limits and fallback. |
| 5 | From a question to a useful next step | Use a clearly fictional enquiry-preparation example that summarizes guidance rather than merely directing the customer to a guide. Show the question, answer, source and service link. Distinguish explaining a process from carrying it out. |
| 6 | Expected value for customers and ONE | Separate customer benefits from ONE benefits, using the benefit guidance below. Describe value, not testing machinery. Label benefits as expected, not measured. |
| 7 | Further business research is required | Retain the Ask Maersk evidence boundary. State visibly that PO/PPO must help validate customer needs and clarify business requirements and feature priorities before the proposal can be finalized. |
| 8 | Proposed first-release scope | Present the English-only, public-content, single-question MVP, visible sources and service links. Summarize exclusions. Show the detailed business specification as unfinished. Discovery, PO/PPO collaboration and the PoC define and validate this proposed release. |
| 9 | Proposed delivery resources | Show suggested roles for PoC and implementation, with all counts and allocations TBC / to be discussed. No numerical headcount. Staffing appears on this slide only. |
| 10 | PoC timeline and expected evidence | Eight proposed weeks with draft exit evidence, all TBC / to be discussed. Secure sample permission before kickoff. |
| 11 | Nine-month proposal and delivery outcomes | Show the whole-project scope and rough nine-month roadmap. Include separate discovery and PoC before implementation, Month 4 preview, Month 6 demo, Month 7 pilot, Month 8 conditional release and Month 9 stabilization. Make all month labels tentative and state that research and risk findings can revise them before or after the PoC. Use the whole-project framing without an approval banner. |
| 12 | Several risks can change scope and dates | Cover business decisions, content readiness, technical feasibility/integration and readiness testing. Pair each risk with further work or a response. Retain the permitted sample before the PoC, approved minimum content before the pilot and separate pilot/production gates. |
| 13 | Potential extensions after the first MVP | Retain the seven customer-facing options and the visible statement that they are outside the nine-month estimate and subject to separate assessment and approval. |
| 14 | What success would look like | Close with useful outcomes for customers and ONE and a concise measurement approach. Compare with existing search/help, include operating cost and explain when evidence will become available. No separate approval request or invented ROI. |

## Manager explanation: what the feature does

Use this as the content direction, not as a paragraph to paste in full onto a slide:

“Ask ONE would help customers understand public ONE guidance by asking a question in everyday English. It would give a short explanation based on approved content, show the source, and point to the relevant ONE service when the customer needs to take action.”

Show four understandable steps on Slide 4:

1. **Ask:** The customer asks one question in English about a supported public topic.
2. **Understand:** Ask ONE explains the relevant guidance in plain language rather than only listing pages.
3. **Check:** The customer can open the source to read the original guidance and details.
4. **Continue:** A link takes the customer to the relevant existing ONE service or support channel.

Keep the distinction from search honest: this is a proposed explanation-and-navigation experience, not a claim that AI is always better than search. It must be compared with the existing journey.

Explain the first-release limits visibly: no customer-account access, shipment-specific answers, live tracking or bookings/transactions. Linking to ONE eCommerce does not mean retrieving its data or completing an action there. If approved content cannot support an answer, the service should say so and direct the customer to permitted guidance or support rather than guess.

Keep the example explicitly fictional unless approved real source material is supplied. It describes preparing an enquiry and linking to the service, without filling or submitting the form. Never attribute invented requirements to actual ONE policy. Explain “source” as the original ONE page or document that the customer can open. Leave retrieval, model selection and screening mechanics to the technical section.

## Expected benefits for customers and ONE

The manager section needs an explicit value explanation before the roadmap. Measures alone do not explain why the feature is worth considering. Use three clear benefit pairs on Slide 6; keep detailed measurement reasoning here and on Slide 14.

| Customer benefit | Potential benefit for ONE | What would demonstrate value |
|---|---|---|
| Spend less effort finding and understanding relevant guidance. | Make approved public content more useful through customer self-service. | Compare time to useful guidance, task completion and customer feedback against existing search/help. |
| Understand the next step and reach the relevant service more easily. | Help customers reach the appropriate digital service with less avoidable navigation or misdirection. | Test whether customers choose the right next action; a link click alone does not prove task completion. |
| Get a source-backed explanation for supported routine questions. | Potentially reduce repetitive guidance enquiries, allowing support to focus on issues that need human help. | Measure supported-question resolution and subsequent support needs in the pilot. Do not assume an unanswered or abandoned session represents a resolved enquiry. |

Use “Expected benefits to validate” as a short qualification. Do not claim measured savings, support reduction, revenue growth, staffing reductions or guaranteed answer accuracy. Sources make an answer checkable; they do not automatically make it correct.

Slide 6 explains **why it matters**. Slide 14 explains **how we will know it works**. Avoid repeating the same benefit statements across both slides. Slide 14 should connect outcomes to representative comparisons, observed pilot tasks, service cost per admitted question and separately recorded content maintenance and support effort. Total project budget and ROI remain unfinalized. The dedicated service-cost slide may show source-backed illustrative monthly service budgets with assumptions and exclusions. Do not confuse these with staffing costs, total implementation cost or proven returns.

### Technical focus

For each substantive technical slide, explain the proposed approach and why it fits, the main unresolved question, and what the PoC will test. Weave these into the slide's explanation rather than repeating a rigid three-box layout. Distinguish what a bounded PoC can investigate from what requires later production testing. The section divider needs no such detail; appendix diagrams should use a short caption for the relevant assumption and link back to the substantive explanation.

| Slide | Working title | Purpose and required content |
|---:|---|---|
| 15 | Technical overview | Introduce the implementation reasoning through five themes: answer flow and boundaries; content approval and freshness; security and usage protection; quality, operations and service costs; technical reference diagrams. |
| 16 | How a question becomes an answer | Bring the existing architecture overview forward and combine it with platform direction. Define GKE and explain retrieval, managed inference and the MVP/future boundary. |
| 17 | How approved content stays current | Combine the source lifecycle and minimum review workflow. Existing tools come first; a custom Hub remains conditional. |
| 18 | Answer safety and data protection | Distinguish deterministic citation/source eligibility checks from imperfect semantic assessment and human evaluation. Keep traffic quotas on the next slide. |
| 19 | Protection against bots and excessive use | Retain the dedicated CAPTCHA, rolling quota, concurrency, spending and origin-access slide. Explain enforced pilot participation separately from anonymous public release. |
| 20 | Quality and production readiness | Combine evaluation evidence with monitoring, regression testing, rollback and release readiness. Preserve detailed operations and evaluation-tool notes without repeating them on the core slide. |
| 21 | Tools with distinct responsibilities | GCP baseline, self-hosted Phoenix, Ragas jobs and Promptfoo Community. Proposed adoption TBC. |
| 22–23 | Tracing and evaluation diagrams | Editable draw.io workflows, asynchronous evidence and human review. |
| 24–26 | Proposed metric scorecards | Quality, performance/reliability, safety/cost/freshness. Targets TBC before formal testing. |
| 27 | Estimated monthly service costs | End the technical argument with the services just explained. Separate token calculations from infrastructure allowances. Show exclusions and unconfirmed Cloudflare coverage. |
| 28 | Security flow | Preserve the existing technical reference diagram. |
| 29 | Knowledge and quality workflow | Preserve the existing technical reference diagram. |


## Bot, access and usage protection

Include one dedicated technical slide after Answer safety and data protection. Separate bot/traffic and cost protection from prompt-injection and answer-safety controls. Show backend-validated CAPTCHA/Turnstile, burst limits, rolling hourly/daily question quotas, concurrency and token/retry ceilings, global usage admission controls, restricted origin access and retry guidance.

Keep numerical limits in notes as illustrative starting points only: one active answer per anonymous session, five questions per minute, 30 per rolling hour and 100 per rolling 24 hours. These are not finalized product rules. Combine session and IP signals rather than using IP alone. Anonymous sessions can be replaced, and a shared office IP can represent many legitimate customers.

Enforce shared atomic counters across replicas before paid processing. CAPTCHA is not customer authentication. Restrict origin access to prevent gateway bypass and protect administration separately. The limited pilot needs an enforced participation gate without bringing account-specific customer data into MVP scope.

Test missing/replayed challenge tokens, direct API/origin calls, parallel requests, quota-store failures and legitimate shared-network use. Tune policy during the PoC and validate load, recovery and accessibility before release. Budget alerts alone are not spending enforcement. Confirm Cloudflare entitlements and any additional service costs rather than assuming all controls are already deployed or covered by existing estimates.

Official references: [Turnstile server validation](https://developers.cloudflare.com/turnstile/get-started/server-side-validation/), [origin protection](https://developers.cloudflare.com/fundamentals/security/protect-your-origin-server/) and [bot protection](https://developers.cloudflare.com/use-cases/solutions/stop-malicious-bots/).

## Resource placeholder and ML support

Slide 9 is the only slide that may show staffing quantities or role allocations. Show suggested developer, technical architect, PO/PPO, user interface/experience and quality assurance roles for both PoC and implementation. All headcounts, members and allocations are **TBC / to be discussed**. Do not display numerical staffing quantities. Do not imply confirmed availability, a finalized allocation or proof that the schedule is safe. Keep the optional second designer and detailed developer split in the internal assumptions only.

No additional machine-learning engineer is planned for the first MVP. Present managed inference as an architectural choice, not proof that delivery capacity is adequate. Allocate learning, implementation experiments and evaluation work during discovery and the PoC. Managed inference avoids custom model training, but reliable retrieval, source handling and answer evaluation still need evidence. Use PoC findings to reassess scope and time rather than treating the learning effort as free or already complete. Do not add a specialist-support recommendation to the slides.

## Estimated monthly service costs

Place the baseline estimate after the tooling and metrics slides, with a concise self-hosted tooling cost note on the same slide. The resource placeholder remains in the manager section. Do not duplicate the service-cost table in the manager section.

Slide 27 must use the title **Estimated monthly service costs**. These estimates cover incremental cloud/service running costs only, not resource costs, salaries, contractors, content-owner effort, one-time implementation or total project funding.

Use [the dated GCP service-cost estimate](reports/ask-one-gcp-cost-estimate.md) as the auditable source. Read it before revising the figures. It records official pricing links, token calculations, infrastructure allowances, exclusions and decisions to confirm after the PoC.

| Monthly usage example | Illustrative service budget (USD/month) |
|---|---:|
| 10,000 questions | $600–1,500 |
| 100,000 questions | $1,200–3,000 |

These are planning envelopes, not measured demand, supplier quotations, spending caps or capacity guarantees. They include 25% contingency plus rounding. Assumptions: one generation call per question, 3,000 input tokens and 500 total billed output tokens including reasoning, a small text corpus, one production deployment and a small shared non-production environment.

The illustrative Gemini 2.5 Flash calculation is $21.50/$215 monthly at these volumes, using published input/output rates checked on 12 September 2026. Model choice is not final. The larger budget includes additional GKE capacity, candidate Cloud SQL/pgvector retrieval and backups, GCS, optional screening, embeddings, observability, networking and routine evaluation. Clearly identify infrastructure amounts as planning allowances rather than verified regional SKU quotations.

Reuse existing GKE/GCP without charging unrelated baseline spending again. Additional capacity is not free. Confirm region, availability requirements, existing headroom, database size, environment count, source volumes and actual model usage after the PoC. New service requirements, higher traffic, lengthy reasoning, extra calls or major architecture changes can exceed these ranges. Do not multiply the monthly examples by nine to present a project budget.

## Proposed nine-month implementation timeline

Nine months is the proposed implementation scenario after the PoC review. Discovery and PoC time are additional, with durations TBC / to be discussed. Neither the phase durations nor the end date have been validated. Business requirements, feature priorities and further research with PO/PPO remain open. The Month 4 preview, Month 6 demo, Month 7 pilot, Month 8 release and Month 9 stabilization are tentative scenario markers, not commitments or evidence that those dates are safe. Reassess at the business-research review, after the PoC and whenever a material assumption changes. Schedule a separate bounded PoC after discovery, with its timing and achievements TBC / to be discussed. A representative sample with permission for the intended PoC use must be available before the PoC begins. Confirm its scope and duration during discovery, then reassess the remaining schedule using the PoC findings. If business decisions, the sample, feasibility work or readiness testing take longer, revise downstream dates rather than compressing validation and stabilization. More content alone does not resolve the other dependencies.

| Tentative period | Focus | Evidence or review point |
|---|---|---|
| Before implementation; duration TBC | Discovery and definition | PO/PPO must guide research into customer needs, clarify business requirements and prioritize the first journey and features. Identify the minimum useful content set and initial MVP scope. Secure a representative sample with permission for PoC use. Draft representative questions, the evaluation approach, acceptance criteria, security/privacy requirements and operating assumptions. Review the proposed PoC with management. |
| Before implementation; two months TBC | Bounded PoC and foundations | Test ingestion, retrieval, grounded answers and citations with a permitted sample. Begin instrumentation, regression checks and security testing. Assess Drupal synchronization and existing content-review tools. Use the results to revise the MVP scope, architecture, costs and delivery estimate before committing to the build. |
| Months 1–4 | Core product development | Build the customer journey, Drupal synchronization, feedback and minimum content-review capability. Run evaluation and security checks throughout development. Aim for a working preview at the end of Month 4. |
| Months 5–6 | Hardening and manager demo | Expand the evaluation set, test failures and access controls, and tune performance and cost. Validate monitoring, screening, rate limits, caching and rollback. Aim for a formal manager demo at the end of Month 6, followed by a separate pilot-readiness review. |
| Month 7 | Controlled user pilot | The team releases the service to a limited group of users. QA, content owners and platform specialists measure quality, usability, reliability and cost against the agreed criteria. |
| Month 8 | Controlled production release | The team resolves the pilot findings, completes the production-readiness review and releases the service to production users in controlled stages. |
| Month 9 | Stabilization | Monitor production use, resolve priority issues and improve operating procedures. Reassess the duration if the production release moves. |

Label the roadmap “Rough estimate only. Further research required.” State that scope and dates are not finalized and may change before or after the PoC. The Month 8 release remains conditional on pilot results and content readiness. Missed gates trigger a revised forecast, potentially beyond Month 9. Do not absorb delays by assuming that stabilization can be skipped.

## Agreed MVP limits and proposed capabilities

English, anonymous public access and one question at a time remain agreed scope limits. The capabilities below are the current proposal within those limits. PO/PPO-led research must still define the supported journeys, detailed business rules, feature priorities and acceptance criteria.

- English only
- Anonymous access
- Public ONE content
- One question at a time
- Grounded answers with visible sources
- Links to relevant ONE services
- Feedback, evaluation, guardrails, caching and monitoring
- Drupal content synchronization, including updates and removals
- Minimum content-review capability: source status, approval, update/removal handling and review history

Discovery will assess whether existing tools can provide the content-review capability. The PoC will validate that choice. A custom Hub requires a demonstrated gap and an explicit scope decision. The timeline does not assume a fully bespoke Hub.

The first MVP excludes multilingual support, authenticated or shipment-specific data, transactions, complex integrations, multi-turn conversation and autonomous agents. These capabilities require separate approval after the first release.

The Month 7 pilot will use a limited audience and a controlled content set. It is not a broad public launch.

## Potential extensions after the first MVP

Include one manager slide with these seven options. The order is for reading, not a committed delivery sequence.

Keep each option to its name and one short description of customer value. Keep the assessment detail in this Markdown. Give the slide less visual emphasis than the MVP explanation and benefits, and do not add dates or individual feature pitches.

| Option | Customer benefit to describe on the slide | Evidence needed before prioritization |
|---|---|---|
| More languages | Ask questions and receive useful guidance in additional languages. | Demand by language, approved localized content and evaluation for each language. |
| eCommerce integrations | Connect to eCommerce services for current schedules and supported tasks. | Validated journeys, available APIs, data freshness and access requirements. Public lookups and account-specific lookups may need different controls. |
| Other ONE services | Connect with additional ONE services to help customers complete more tasks. | Identify journeys beyond eCommerce, available APIs, service ownership, data permissions and integration effort. This is deeper integration, distinct from the links already included in the MVP. |
| Forms integration | Help prepare enquiry or service-request forms for customer review before submission. | Validate form fields, permitted prefilling, privacy, consent, routing and error handling. Submission requires customer confirmation and separately authorized write access. No autonomous submission is proposed. |
| Features for signed-in customers | Apply customer-specific permissions to account and shipment information. | Identity integration, account-level permissions, privacy requirements and tested isolation between customers. Signing in alone does not establish permission to see every record. |
| Follow-up questions | Clarify a question and continue the same task without starting again. | Evidence that conversation improves task completion, with session handling and evaluation across several turns. |
| Connected customer support | Transfer an unresolved question and relevant context to support with the customer's consent. | Support workflow integration, consent, agreed context sharing and a reliable handoff process. |

Use this visible qualification: “Potential extensions beyond the first MVP. Priorities and dates will depend on customer demand, feasibility and separate approval.” Keep these options outside the rough nine-month estimate. Explain that integration connects services while signed-in features enforce customer-specific permissions; these capabilities may overlap. Show GCP and eCommerce systems only where relevant to capability, without discussing partner-team involvement or staffing.

Keep the following additional ideas in this Markdown as a longer-term candidate list rather than crowding the slide:

- Opt-in alerts about relevant shipment or service changes, subject to event availability and notification preferences.
- Guided transactions such as preparing a service request, with explicit customer confirmation and separately authorized write APIs.
- Content insights that help owners identify unanswered questions, stale guidance and useful FAQ additions. Owners review changes before publication.
- Voice interaction, if user research demonstrates demand and accessibility or usability benefits.

Future features should not automatically expand the MVP backlog or require a custom agent framework. During discovery, record only the dependencies worth preserving in the initial design, such as language metadata and reliable source identifiers.

## Other factors that can change scope or schedule

Content readiness is one major dependency within a wider unresolved risk set. These are planning risks to investigate, not claims that failures have already occurred.

| Risk or unknown | Further work required | Response if unresolved |
|---|---|---|
| Business requirements and priorities | PO/PPO-led customer research, stakeholder review, business rules, exceptions and a prioritized backlog. | Continue clarification or narrow the journey. Reassess scope and dates before committing to the build. |
| Technical feasibility and answer quality | Test representative questions, retrieval, extraction, citations, fallbacks and comparison with simpler search. | Revise the design or useful topic set, extend the PoC, or pause the approach if evidence is insufficient. |
| Content synchronization and platform access | Validate update/removal behavior, available interfaces, environments, access and deployment dependencies. | Resolve dependencies and revise sequencing. Demonstration shortcuts do not count as production readiness. |
| Security, privacy and reliability | Start requirements and tests during discovery/PoC, then validate failures, performance, protection and recovery. | Address blocking findings and move pilot/release dates. Keep readiness gates intact. |
| Usability, operating cost and support readiness | Test customer journeys and support needs, estimate usage and maintenance costs, and define monitoring and operating procedures. | Simplify the experience, revise cost assumptions or defer release until acceptable evidence exists. |
| Decision timing and delivery capacity | Confirm stakeholder review availability, dependencies and delivery assumptions. Keep staffing quantities and allocations on the dedicated resource slide only. | Publish a revised forecast when decisions or capacity change. Do not silently compress testing or stabilization. |

PO/PPO should coordinate business decisions while technical and content specialists provide the relevant evidence. At each review, record the evidence, unresolved issues, decision owners and effects on scope, cost and dates. Re-estimation may extend beyond nine months. The content-specific response below remains mandatory as well.

## Critical timeline risk: content approval

PO/PPO and content owners must collaborate to confirm and finalize the content scope, resolve gaps and approve the material. Delayed decisions can heavily affect the schedule because the team needs representative, approved content to validate a useful customer journey.

Development and illustrative demos can continue with permitted samples, clearly labeled as sample-based. That evidence does not establish readiness for a pilot or production release.

These are proposed dependency dates to agree with PO/PPO and content owners, not commitments already received:

- During discovery, jointly define the minimum useful content set for the first journey, identify sources and owners, and agree the approval path and review dates.
- Before the PoC begins, provisionally by the end of discovery, secure a representative sample with permission for the intended development and evaluation use. If it is unavailable, revise the PoC start date. Permission to use a sample in the PoC does not establish approval for public release.
- Before the Month 6 manager demo, approve the content used in the end-to-end experience.
- Before the Month 7 pilot, confirm the pilot content set, its audience and its owners.
- Before the Month 8 release, confirm that production content is current, approved and covered by an ongoing maintenance process.

If supplementary sources arrive late, PO/PPO and content owners should assess whether a smaller approved topic set still supports a useful release. If the minimum useful set is unavailable, revise the PoC, pilot or release schedule as appropriate. Record unresolved approvals and their impact at each review. Adding developers cannot replace content decisions.

On the roadmap, use plain wording: “Content scope and approval require PO/PPO and content-owner collaboration. Delays may significantly move the pilot and release dates.” This requested content dependency is appropriate slide content. Staffing quantities and role allocations belong only on the dedicated resource slide. Keep GCP/Drupal-team involvement in Markdown only.

## Pilot and production gates

During discovery, define the evaluation method, initial acceptance criteria and required evidence. Refine these using the PoC, then agree thresholds before formal readiness testing. Do not select thresholds after seeing the results. Before the pilot, agree its audience, duration and minimum evidence needed for a release decision. These details remain discovery outputs rather than invented percentages in this slide brief.

### Pilot-readiness review, tentatively Month 6

Hold this review separately from the manager demo. Assess recorded test evidence against the agreed criteria.

The pilot proceeds only when:

- content owners have approved the pilot sources;
- the main customer journey works from question to grounded answer and source;
- the team has agreed the quality, security, privacy and reliability criteria;
- preliminary evaluation results meet those criteria;
- monitoring, safe fallback and rollback are ready;
- no critical unresolved defect remains.

### Production-readiness review, tentatively Month 8

The production release proceeds only when:

- the limited pilot meets the agreed quality, security, reliability and usability criteria;
- production content is approved, current and assigned to accountable owners;
- the team has resolved the release-blocking pilot findings;
- production monitoring, support, fallback and rollback procedures are ready;
- the product owner, technical architect, QA and accountable content owners approve the release.

If a gate does not pass, assess the remediation work and publish a revised forecast. A release in Month 9 is one possible outcome, not an automatic fallback. Preserve time for stabilization after the actual release.

## Internal delivery assumptions

Retain detailed delivery assumptions here. Only the dedicated resource slide may show staffing, with quantities TBC / to be discussed. The numerical assumptions below are historical internal discussion material, not the current staffing proposal. GCP/Drupal-team involvement stays out of all slides and notes.

### Core team

| Role | Quantity | Primary responsibility |
|---|---:|---|
| Developers | 2 | AI, retrieval and document-processing work |
| Developers | 2 | Backend services, platform work and Drupal integration |
| Developers | 2 | Customer interface and Knowledge Hub |
| Technical architect or technical lead | 1 | Architecture, security and privacy design, technical decisions, cross-team coordination and delivery quality |
| Product owner | 1 | Scope, priorities, stakeholder decisions and acceptance criteria |
| QA engineers | 2 | Functional, integration, automation, performance, security and AI-quality testing |
| UI/UX designer | 1 baseline, 2 when available | Customer research, interaction design, prototypes, usability testing and accessible visual design |

The baseline core team has 11 people. A second UI/UX designer increases the team to 12 during the stages where additional design and research capacity provides the most value.

### Established delivery partners

The team already has working relationships with the GCP and Drupal teams. The GCP team will support platform access, identity and access management, networking, deployment and operational readiness. The Drupal team will support content access, content models, synchronization and content lifecycle decisions.

Content owners must still approve which sources the service can use and confirm their audience, version and maintenance responsibilities. The technical architect handles security and privacy design within the project. Any formal organizational approval remains with the accountable governance function when required.

The timeline assumes that the GCP team, Drupal team and content owners can review decisions and unblock the core team at the agreed milestones.

## Final-review clarity requirements

- Preserve all 14 manager slides, including the overview, resource and PoC slides. Use PO/PPO without expansion. Spell out quality assurance, user interface/experience and machine learning on the resource slide.
- The example must show a useful explanation, a checkable source and a next step. Its enquiry guidance is explicitly fictional, not ONE policy. Forms integration remains future scope; an ordinary service link does not submit data.
- Explain content-delay responses in natural English: defer optional topics, and revise pilot/release dates if essential content remains unapproved.
- Distinguish overall operating cost (including human content/support effort) from the service-only running-cost estimate.
- Separate source eligibility and citation-link checks from semantic support assessment. Neither automated assessment nor a valid citation guarantees correctness. Human evaluation remains necessary.
- The pilot requires enforced participation controls. This is separate from the planned anonymous public release and does not introduce account-specific customer data.
- Keep unconfirmed Cloudflare plan coverage and excluded upgrade fees visible on the service-cost slide. Infrastructure amounts remain allowances, not configured quotations.

## Writing and visual standards

- Write for a reader who will not hear a presentation.
- Use short sentences and familiar words.
- Use direct titles that name the subject of each slide.
- Define technical terms when they first appear. Keep unnecessary technical terms out of the manager section.
- Separate observed evidence, proposed design and expected benefits. Do not present a proposal as an existing capability.
- State material limitations on the slide. Keep detailed sources and technical qualifications in speaker notes.
- Concentrate the rough-estimate qualification and broader delivery risks on the roadmap/risk slides. Explain the required PO/PPO business research on the research/scope slides. Repeat a limitation elsewhere only when it changes how that slide should be interpreted. Keep the separate future-feature scope qualification on its own slide.
- Use one dominant visual, timeline or comparison on each manager slide.
- Prefer a flat reading order over grids of small cards.
- Use at least 20px body text in the manager section where practical. Use at least 17px in the technical section.
- Preserve the current ONE logo, Noto Sans typeface, magenta palette, footer and 16:9 format.
- Preserve the existing technical diagrams unless visual review identifies a specific readability problem.

## Implementation checklist

Two-part navigation revision complete. The 12 existing manager slides are retained behind a new manager overview, and the technical divider is now an editable technical overview. Earlier generation records remain historical.

- [x] Add the resource placeholder only on Slide 9 and the service-cost estimate on Slide 27.
- [x] Verify service-cost arithmetic, assumptions and official pricing sources.
- [x] Add a manager overview after the cover and convert the technical divider into a technical overview.
- [x] Review the full 29-slide deck in the browser, update documentation and refresh the source archive.

- [x] Retain the existing manager proposal and insert the overview as Slide 2; retain the future-features slide.
- [x] Remove the dedicated approval slide and replace discovery-only wording in the cover, narrative and notes. Retain the post-PoC reassessment and readiness gates.
- [x] Convert the technical section break into the Technical overview at Slide 15.
- [x] Retain the existing technical content as Slides 16–27 without repeating the manager narrative.
- [x] Retain the architecture diagram on Slide 16 and the two appendix diagrams as Slides 28–29.
- [x] Confine the staffing placeholder to the dedicated resource slide. Keep partner-team involvement out of all slide content and notes.
- [x] Review all speaker notes and keep the evidence boundaries and source references that still apply.
- [x] Update the local deck documentation with the new narrative and slide count.
- [x] Build Slidev and inspect the affected slides in the local browser at a consistent size. Inspect the complete deck for shared style or structural changes.
- [x] When explicitly requested, export only the requested format and inspect its rendering for text fit and missing assets. Report verification limitations. These export checks are conditional, not prerequisites for routine local slide updates.
- [x] If PowerPoint is requested, the existing Slidev export is a rasterized visual copy. The Slidev source remains editable; native editable PowerPoint text or diagrams require a separate request.
- [x] Correct clipped text, collisions, weak hierarchy, small type and broken images.
- [x] Read the complete manager section without notes and confirm that the proposal is understandable without narration.
- [x] Read the technical section without notes and confirm that each substantive slide explains the approach, why it fits, the main unresolved question and the planned PoC investigation or later validation.

## Final validation

The work is complete when:

- the local Slidev build succeeds;
- the affected slides pass browser visual inspection, with the complete 29-slide deck checked for shared style or structural changes;
- any explicitly requested exports succeed and pass format-specific visual inspection; otherwise no PDF or PowerPoint export is required;
- the manager section answers the questions listed under Success criteria, including feature behavior and distinct customer/ONE benefits;
- the timeline shows provisional milestones for a Month 4 working preview, Month 6 manager demo and separate pilot-readiness review, Month 7 limited user pilot, Month 8 controlled production release and Month 9 stabilization;
- all month labels are visibly tentative, with further PO/PPO-led research required and scope/schedule reassessment before or after the PoC as findings emerge;
- the slides explicitly state that business requirements, feature priorities and the delivery plan are not finalized;
- the risk slide covers business, content, technical and operational/readiness dependencies, with actions and re-estimation rather than content risk alone;
- evaluation and security work begin during discovery and the PoC and continue throughout development;
- the content plan requires a permitted representative sample before the PoC begins;
- the first MVP is clearly limited to English, public content and one question at a time;
- authenticated data, transactions, multilingual support and complex integrations are clearly outside the first MVP;
- the future-features slide explains the seven proposed extensions without dates, delivery promises or inclusion in the nine-month estimate;
- content approval appears as a major schedule dependency requiring PO/PPO and content-owner collaboration, with proposed dates and responses to delayed approvals;
- the Month 7 pilot and Month 8 production release use the defined go/no-go criteria;
- staffing quantities and role allocations appear only on the dedicated resource slide as a placeholder, with no GCP/Drupal-team involvement anywhere in slide content or notes;
- the Markdown plan retains the staffing, technical-lead responsibility and delivery-partner assumptions for internal planning;
- no unsupported duration, budget, ROI, saving or product result appears in the deck; illustrative service budgets show assumptions, exclusions and their preliminary status;
- the technical section remains detailed and starts only after the manager outcomes and measurement slide;
- both audiences pass the reading checks in Success criteria, and repeated caveats do not obscure the customer value or technical reasoning;
- the local documentation matches the final slide order and count;
- only when sync is explicitly requested, the existing Google Slides deck matches the 29-slide local order, keeps narrative content editable and keeps the diagrams as images;
- a fresh remote readback, native slide render and live-editor review show no unresolved clipping, wrapping or layout defects.

## Historical generation record — 12 September 2026

This records the earlier 20-slide discovery proposal. Its PDF and PPTX remain available under their original filenames. The editable source and portable archive follow the latest local revision recorded below.

- Final deck: 20 slides. Slides 1–10 form the manager proposal; Slide 11 is the divider; Slides 12–17 explain the technical approach; Slides 18–20 retain the existing reference diagrams.
- Outputs: [PDF](slides/ask-one-discovery-proposal.pdf), [PowerPoint visual copy](slides/ask-one-discovery-proposal.pptx), and [editable Slidev source](slides/slides.md).
- Preservation: [portable source archive](deliverables/ask-one-slides-source.zip). The root gitlink is unchanged. No claim is made that edits inside slides/ are tracked by root Git.
- Build, PDF export and PPTX export passed. Both exports contain 20 slides/pages. Browser checks found no missing images.
- Visual review covered every PDF page and all 20 slides rendered through Keynote's PowerPoint import. Final spacing refinements to Slides 7 and 17 were rechecked in the final PDF and the final PPTX's embedded slide images. Final PPTX backgrounds were also compared with the PDF across all 20 slides.
- Corrected low-contrast introductory text, duplicate list numbering, hidden footers, and crowded evidence, risk and operations layouts. Manager and substantive technical slides were read without notes against the success criteria.
- Verification boundary: Microsoft PowerPoint itself was not available. Keynote supplied the independent import/render check; the final two spacing refinements were checked through the raster slide assets rather than a second Keynote import. The PPTX intentionally has rasterized backgrounds, not native editable text.
- QA renders are temporary local files under /tmp/ask-one-slide-qa/. The source archive and deliverable files are the durable handoff.
- Updated the local README, root README and slide-docs.md. Earlier deck notes are retained in docs/archive/ask-one-prior-deck-notes.md.
- Staffing and partner-team involvement remain in this plan only. No Google Drive or Google Slides content was changed.

## Earlier generation record — whole-project revision

- Outputs: [PDF](slides/ask-one-project-proposal.pdf), [PowerPoint visual copy](slides/ask-one-project-proposal.pptx), and [editable source](slides/slides.md).
- Added the plain-English feature explanation and paired customer/ONE benefits. Removed the dedicated approval slide. Reframed the cover, MVP scope, roadmap and closing outcomes around the whole project.
- Preserved the provisional nine-month estimate, post-PoC scope/cost review, content dependencies, first-MVP boundaries and release gates. Technical content and original diagrams remain intact, with updated numbering.
- Build and both exports passed. PDF contains 21 pages; Keynote imported all 21 PPTX slides. Reviewed every PDF page and every slide in the Keynote-rendered PDF. Fixed crowding on the benefits and outcomes slides before final export. Browser checks found no missing images.
- Reading checks covered manager feature/value clarity and the technical approach, open questions and validation boundaries. A source/notes scan found no discovery-only approval request or prohibited staffing/partner-team involvement.
- PPTX remains a rasterized visual copy. Independent import/render validation used Keynote, not Microsoft PowerPoint.
- Updated PLAN.md, both READMEs and slide-docs.md. Refreshed the portable source archive without changing the root Git gitlink. Older discovery-proposal exports were retained.
- QA renders are temporary files under /tmp/ask-one-project-qa/. No Google Drive or Google Slides content was changed.

### Future-options update

Added Other ONE services and Forms integration to Slide 10, bringing the list to seven options. Both remain outside the MVP and nine-month estimate. The forms option includes customer review before submission; permissions, privacy and any write integration require separate assessment. Updated the narrative guide and source archive. The deck remains 21 slides. Build and both exports passed, and the changed slide was visually checked in the PDF and Keynote-rendered PPTX. No remote deck changes were made.

## Earlier local revision — business research and estimation risks

- The proposal remains preliminary. Required PO/PPO involvement now covers customer/business research, business specifications, feature prioritization and acceptance criteria, not only content approval.
- Slides 6–9 and 11 distinguish agreed MVP limits from unfinished requirements and make every roadmap milestone part of a rough estimation scenario. Broader business, technical, integration and operational risks have explicit responses. Content readiness and separate release gates remain visible.
- The deck remains 21 slides. The local Slidev build passed. Browser checks covered all 21 slides for missing assets and content bounds; visual review covered the changed slides. Crowding on Slides 8 and 9 was corrected and rechecked.
- Updated local documentation and the portable source archive. Existing PDF and PowerPoint files were preserved unchanged and predate this revision. No PDF, PowerPoint or Google Slides export/sync was performed.
- Browser QA screenshots are temporary files under /tmp/ask-one-research-open-qa/. The current editable deck is slides/slides.md.

## Earlier local revision — resources and service costs

- The local deck now contains 23 slides: manager proposal 1–12, technical divider 13, technical detail 14–20 and appendix diagrams 21–23.
- Slide 8 contains the only staffing placeholder. Slide 15 contains the monthly service-cost estimate, immediately after platform direction. No additional ML engineer is planned.
- The service budgets distinguish published token calculations from infrastructure allowances. Assumptions, exclusions and pricing links are in [the research report](reports/ask-one-gcp-cost-estimate.md). They are preliminary monthly running costs, not project funding.
- Reviewed all 23 slides for narrative consistency and browser layout at 1280 × 720. No missing images were found. Corrected crowding on the new slides and rechecked them, with content ending above the footer.
- Updated PLAN.md, AGENTS.md, both READMEs and the narrative guide. The portable source archive preserves the deck and cost report without changing the root gitlink.
- Existing PDF and PowerPoint snapshots remain unchanged. No PDF/PowerPoint export or Google Slides sync was performed.
- Temporary browser QA renders: /tmp/ask-one-services-qa/.

## Earlier local revision — bot and access protection

- Added Slide 19 after Security controls. It covers server-validated CAPTCHA, burst and rolling quotas, concurrency and spending controls, restricted backend access and customer retry guidance.
- Numerical limits remain illustrative notes for validation. The slide distinguishes CAPTCHA from identity and requires a separate pilot access gate. No deployed protection is asserted.
- The deck now has 24 slides. Manager slides 1–12 and the divider at 13 are unchanged. Technical slides are 14–21 and appendix diagrams are 22–24.
- Slidev build passed. Browser checks covered all 24 slides for missing images and content bounds. Visually checked the new slide and shifted technical slides, and corrected the new slide's initial crowding.
- Updated documentation and the portable source archive. No PDF/PowerPoint export or Google Slides sync was performed.

## Earlier local revision — final audience review

- Retained all 12 manager slides. Improved the fictional enquiry example, content-risk wording, future-feature distinctions and overall operating-cost definition. Slides use PO/PPO without expansion as requested.
- Reorganized technical content into six core slides: architecture, approved content lifecycle, answer safety, bot/access protection, quality/readiness and monthly service costs. The security and knowledge-workflow diagrams remain appendix references. All three original diagram assets are preserved unchanged.
- The deck now has 21 slides: manager 1–12, divider 13, core technical 14–19 and references 20–21. Detailed evaluation and operational controls remain in notes.
- Clarified imperfect semantic assessment, restricted pilot participation versus anonymous public access, and unconfirmed Cloudflare coverage/excluded new plan fees.
- Reviewed all slides in the browser. Corrected crowding on the combined lifecycle and readiness slides and rechecked them. No missing images were found. Local build passed.
- Updated supporting documentation, the cost-report placement and the portable source archive. No PDF/PowerPoint export or Google Slides sync was performed.

## Earlier revision — two-part navigation and Google Slides sync

- Added an editable manager overview after the cover and converted the former technical divider into an editable technical overview. The deck now has 22 slides: manager Slides 1–13, technical overview Slide 14, core technical Slides 15–20 and reference diagrams Slides 21–22.
- Kept narrative content native and editable in Google Slides. The architecture and reference diagrams remain image assets.
- The local Slidev build passed. A fresh 22-slide browser capture and structural verification passed with no failures; the new overview slides and the manager-to-technical transition were visually inspected.
- Synchronized the existing Google Slides presentation in place. A fresh remote readback confirmed the 22-slide order, and live-editor checks of both overview slides plus a complete grid review found no unresolved clipping, wrapping, collision, alignment or missing-image defects.
- Updated the plan, both READMEs and the narrative guide, and refreshed the portable source archive. Existing PDF and PowerPoint snapshots remain unchanged and predate this revision.

## Current revision — wording and standalone reading review, 13 September 2026

- Reviewed all 22 slides and their notes against this brief. Simplified headings and sentences, defined MVP near the start, clarified the dated Ask Maersk evidence, and replaced compressed technical wording with explicit explanations. Preserved the scope, staffing boundary, provisional schedule, service-cost figures and existing diagrams.
- Built the local Slidev deck and visually inspected all 22 browser renders. Shortened crowded copy and adjusted roadmap row spacing. The manager section and technical section were read without speaker notes.
- Updated the existing Google Slides deck in place, retaining native text, tables, object identities and speaker notes. A complete final readback passed the text, notes, order and media checks for all 22 slides.
- Inspected every native slide rendering and the live editor grid. Corrected native table spacing on Slides 10, 16, 18 and 20, then re-rendered and inspected those slides in the editor. No unresolved clipping or overlap remains in the reviewed renderings.
- Updated local documentation and the portable source archive. PDF and PowerPoint snapshots remain unchanged. Temporary browser and native QA images are under `/tmp/ask-one-wording-final/` and `/tmp/ask-one-wording-google/`. Ignored `.sync/` files retain the connector readbacks.

## Local validation — separate PoC and implementation, 13 September 2026

- Local deck: 23 slides. Added proposed PoC achievements and timing, all TBC / to be discussed. Team quantities are TBC for both phases.
- Nine implementation months begin after the separate PoC review. Discovery and PoC time are additional. Retained the Month 4 preview, Month 6 demo, Month 7 pilot, Month 8 conditional release and Month 9 stabilization.
- Slidev build passed. Reviewed all 23 browser renders and corrected timeline footer collisions. Final changed slides fit above the footer and all images loaded. Temporary QA: `/tmp/ask-one-poc-final/`.
- Updated documentation and the portable source archive. No Google Slides sync or PDF/PowerPoint export. Existing remote deck and exports remain earlier snapshots.

## Local validation — learning preparation, 13 September 2026

- Added learning Slide 10 and expanded the PoC to a proposed two months (about eight weeks). The 24-slide deck shows one month learning, two months PoC and nine months implementation, excluding extra discovery and approval gaps. Learning may overlap discovery.
- TA training preparation and developer self-learning are on resource Slide 9 only. All staffing allocations remain TBC / to be discussed. Learning activities, outcomes and PoC timing remain discussion proposals.
- Local Slidev build passed. Browser captures covered all 24 slides, with visual review and no content/footer crossings or missing images. QA: `/tmp/ask-one-learning-qa/`. Updated documentation and the source archive. No remote sync or PDF/PowerPoint export.

## Editorial review — 13 September 2026

Reviewed all 24 slides and speaker notes for plain English, consistent proposal language and terminology. Clarified source-backed answers, feedback, content approval, PoC evidence and implementation milestones. Removed repeated notes while retaining technical qualifications and source references. The one-month learning phase, two-month PoC and separate nine-month implementation proposal are unchanged. All staffing allocations and learning/PoC proposals remain TBC / to be discussed.

Validation: Slidev build passed. Reviewed all 24 browser renders, corrected crowded wording and resource-table spacing, and rechecked the final outcomes and service-cost slides. No unresolved footer collisions or missing images were found. Source archive refreshed. QA images: `/tmp/ask-one-editorial-final/`. Google Slides and PDF/PowerPoint snapshots remain unchanged.

## Resource wording update

Remove the sentence stating that no additional machine learning engineer is planned from the resource slide, as requested. This supersedes earlier instructions to display that assumption. Keep the learning and evaluation allowance and all headcounts TBC.

## Superseded — TA-led team learning

The resource slide must clearly state that the TA will prepare and lead team training, guide practical exercises and review learning progress. Developer self-study reinforces the TA-led programme. Training timing, availability and allocations remain TBC / to be discussed. Keep role assignments on the dedicated resource slide.

## Current local revision — tools and measurement

The 31-slide deck adds seven technical slides: tool responsibilities (22), tracing and evaluation diagrams (23–24), metric scorecards (25–27), and self-hosting costs (29). Baseline service costs move to 28 and reference diagrams to 30–31. Preserve the 15-slide manager section, with named success measures on Slide 15. This revision supersedes prior instructions to keep tool choices only in notes.

Propose self-hosted Phoenix, Ragas jobs and Promptfoo Community alongside GCP. Tool adoption, hosting configuration and metric thresholds are TBC / to be discussed. The original service envelopes exclude unpriced increases from the new tools. Measure incremental capacity and evaluator usage, reconcile existing allowances once, and then revise the total. No paid Enterprise licence is assumed.

Validation: Slidev build passed. Captured all 31 local browser slides, visually reviewed the deck and rechecked adjusted outcomes, tooling and metric layouts. All images loaded and no content crossed the footer boundary. Two new SVGs contain embedded editable draw.io XML. Updated narrative documentation and refreshed the portable source archive. QA captures: `/tmp/ask-one-tools-verified/`. No Google Slides sync or PDF/PowerPoint export.

## Current revision — feasible metrics and GCP involvement

User direction supersedes the preceding 31-slide revision: remove the dedicated self-hosting cost slide and retain a short option/cost note on Slide 28. The current deck has 30 slides, with references at 29–30. Diagram icons identify GCP services or generic activities, without substituting unrelated product logos.

Explicit technical roles: Vertex AI generation, embeddings and evaluation model calls; Model Armor screening enforced by the app; Cloud Trace request timings; Cloud Monitoring health/alerts; Cloud Logging errors; Phoenix selected answer review; Ragas sample evaluation and Promptfoo scoped tests. Keep native GCP evaluation as a comparison option and avoid duplicate paid scoring.

Only commit to useful, collectable measures on slides and notes. Use browser/server timings, app error counts, provider token metadata and periodically allocated service billing. Use reviewed sample questions for answer/citation passes, useful evidence, faithfulness and fallback. Use labeled security tests for attack successes/false blocks and content timestamps for update/removal delays. Track blocking findings. Pilot outcomes require observed tasks and participant reports. Do not imply automated production truth, complete attack detection, exhaustive recall, support-ticket attribution or cost per successful answer. Targets remain TBC / to be discussed.

Validation: local Slidev build passed. Captured and visually reviewed all 30 browser slides, including both icon diagrams and the revised collection-method tables. No missing images or footer crossings were found. Updated slide references and documentation and refreshed the source archive. QA: `/tmp/ask-one-refined-qa/`. No Google Slides sync or PDF/PowerPoint export.

## Diagram style reference

Use the supplied architecture diagram as the visual reference: an adaptive canvas (white in light mode, dark in dark mode), rounded outlined nodes, contrasting headings, muted descriptions, prominent icons and coloured connectors. Author diagrams with the same light-base palette as the originals so draw.io does not invert a dark base to gray. The tracing and evaluation diagrams on Slides 23–24 now follow this style and retain embedded editable draw.io data. Slide content and the 30-slide order are unchanged. Local build passed and both affected browser slides were visually checked. Theme correction verified in light and dark browser modes: backgrounds match the original (`#FFFFFF` / `#121212`). Build and Slides 23–24 visual checks passed. QA: `/tmp/ask-one-theme-qa/`.

## Final standalone wording review

Reviewed the full 30-slide deck and notes for reading without a presenter. Defined abbreviations, explained tool responsibilities and metric collection in plain English, clarified pilot evidence, and simplified diagram labels. Updated the architecture diagram to refer to discovery and the PoC and removed the implied commitment to a custom hub. Scope, the separate learning/PoC phases, proposed nine implementation months, staffing TBC and service-cost assumptions remain unchanged.

Final validation: Slidev build passed. Reviewed all 30 slides as a standalone narrative and inspected browser captures. Corrected crowded content and rechecked the affected slides. All images loaded, with no body text crossing the footer. QA: `/tmp/ask-one-standalone-final/`. Documentation and source archive refreshed. No Google Slides sync or PDF/PowerPoint export.


## Combined evaluation tools

Phoenix + Ragas are grouped as one proposed quality-evaluation flow on Slides 22 and 24. Promptfoo security results join the same human review before release. The deck remains 30 slides; integration mechanics stay out of the visible proposal.

Validation: Slidev build passed. Visually checked browser renders of Slides 22–24 with no clipping or overlaps. The evaluation SVG retains embedded editable draw.io data. Portable source archive refreshed. No Google Slides sync or PDF/PowerPoint export. QA: `/tmp/ask-one-tools-22.png` through `/tmp/ask-one-tools-24.png`.


## Full-deck review corrections — 13 September 2026

The local deck retains all 30 slides and the existing manager/technical order. Corrected rate denominators, checked-answer timing and percentile wording, content-removal propagation, resource-role wording and PoC sample prerequisites. Cloud SQL is a candidate retrieval database and Model Armor is the proposed screening service, subject to PoC validation. The service-cost slide explicitly identifies infrastructure allowances and excludes unpriced additional tooling workloads. The three reference diagrams use larger labels, retain editable draw.io data and identify content review as MVP scope with a conditional custom hub.

Validation: Slidev build passed. Visually reviewed all 30 browser renders and rechecked the adjusted resource, cost and reference-diagram slides. No unresolved clipping or footer overlaps were found. Verified embedded draw.io XML in the three revised SVGs. Updated the portable source archive. Browser QA: `/tmp/ask-one-fixes-qa/`. Google Slides and PDF/PowerPoint snapshots remain unchanged.


## Current revision — internal learning removed

User direction supersedes all earlier learning-phase instructions and historical slide counts. Remove the learning slide and all team-learning, training and self-study references from slides and notes. The current deck has 29 slides: manager proposal 1–14, technical overview 15, core technical slides 16–27, reference diagrams 28–29. Resource roles stay on Slide 9. The two-month PoC and nine-month implementation proposal remain separate, with discovery and approval timing additional and TBC.


## Learning process removed — 13 September 2026

Removed the dedicated learning slide and all internal team-learning references from the resource slide, overview, timeline and speaker notes. The deck now has 29 slides: manager proposal 1–14, technical overview 15, technical detail 16–27 and references 28–29. The proposed two-month PoC and nine-month implementation remain separate. Updated slide references, footers and the portable source archive. Slidev build passed, and all 29 browser renderings were visually checked. QA: `/tmp/ask-one-no-learning-qa/`. Google Slides and PDF/PowerPoint snapshots remain unchanged.


## Google Slides sync completed — 13 September 2026

Synchronized all 29 slides to the existing editable Google Slides deck, including visible content, speaker notes, slide order and diagram images. The internal learning process remains excluded. Preserved the existing deck and sharing, all original slide IDs and nearly all original native element IDs. Added seven slides using the existing native layouts.

Validation: the fresh local 29-slide browser capture matches the final native readback with no content, notes, order or media-count failures. Reviewed all native slide thumbnails and checked the live editor. Fixed roadmap header wrapping, table spacing and the cost table covering its assumptions; retained text sizes. The layout checker reports no errors; its small-text advisories reflect the existing dense presentation design. Saved verification evidence under ignored `slides/.sync/sync29/` and refreshed the source archive. PDF and PowerPoint snapshots remain unchanged. Future slide work remains local by default unless another sync is explicitly requested.
