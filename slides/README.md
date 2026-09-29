# Ask ONE POC slides

The editable local deck has **20 slides**. A pink cover opens the proposal. Slides 2–11 make the manager case: the current ONE search journey, live Ask Maersk screenshots of the question-to-answer-to-service experience and Ask ONE's digital-copilot opportunity, the proposed experience and expected benefits, then the two-month POC roadmap, risks, starting inputs, staffing and success gate. Slide 9 requests an in-principle POC endorsement, with staffing and access to confirm before kickoff. The risk slide lists our actions, including official GCP documentation checks and confirmation with GCP support. Slide 12 introduces the technical approach. Slide 13 compares the two GCP paths and their illustrative service costs and asks for an actual GCP quote; Slides 14–15 show separate custom-flow and direct RAG Engine architectures, including content publishing and the website question path. Slides 16–20 cover evaluation, security, observation and feedback requested on the technical design.

The POC will prepare a sync of the Drupal Insight content type and test other approved eCommerce and business content, including a small approved document set. Both the POC and first MVP use one independent English question, one cited answer and approved public content only. The sample UI shows a relevant next action and a proposed first-MVP helpful/not-helpful control. The POC evaluation uses reviewed QA cases and representative tasks run by QA and business reviewers; it has no customer-feedback stream. Live Chat focuses on support enquiries; Ask ONE is proposed as a broader entry point. Beyond the first MVP, more data sources, languages, file types, images and video guidance can broaden the knowledge base. Later, Ask ONE can connect booking and schedule search and integrate other agents, with a booking agent as one example. This proposal does not build that agent. Signed-in journeys could then add permissioned memory and multi-turn conversation. Approved scans could use Document AI OCR, and video guidance could enter through a separate transcription path.

The technical section presents two retrieval paths for comparison. Singapore deployment is required. It asks AC for architecture and technical recommendations on the GKE/API boundary, retrieval trade-offs, future service connections, QA cases, security controls and operating signals. Content approval and lifecycle decisions stay with content owners and the delivery team. Both paths propose reranking retrieved passages before generation; QA compares reranking on and off. Technical feedback changes the POC design and test set before the exit review.

## Open and build

From the repository root:

```bash
pnpm --dir slides dev
pnpm --dir slides build
```

[slides.md](slides.md) is the editable source. [style.css](style.css) and [global-bottom.vue](global-bottom.vue) provide styling and footers. The [POC research note](../reports/ask-one-poc-story-and-evaluation-research-2026-09-28.md) and [content-format research note](../reports/ask-one-content-formats-and-reranking-2026-09-28.md) link evidence to primary sources. [PLAN.md](../PLAN.md) is the current slide brief.

The [UI concept image](ask-one-poc-ui-concept.png) previews the taller native mockup on Slide 5. The [custom-flow architecture](public/diagrams/ask-one-poc-custom-architecture.drawio), [direct RAG Engine architecture](public/diagrams/ask-one-poc-rag-engine-architecture.drawio), [QA pipeline](public/diagrams/ask-one-poc-qa-pipeline.drawio) and [security flow](public/diagrams/ask-one-poc-security-flow.drawio) are editable draw.io sources with SVG renderings in the deck. Run `node scripts/generate-poc-architecture.mjs` and `node scripts/generate-poc-security.mjs` from `slides/` to regenerate their sources before exporting SVG with draw.io.

## Copies and snapshots

The [portable source archive](../deliverables/ask-one-slides-source.zip) contains the local deck source and supporting material. The [existing editable Google Slides deck](https://docs.google.com/presentation/d/1knHzzM91yvkAoxI2M55gq7JRWaIxpgf-Rf3duWitK5I/edit) was synced and visually checked against all 20 local slides on 29 September 2026. PDF and PowerPoint remain older snapshots. Local changes do not sync or export automatically; follow [GOOGLE_SLIDES.md](GOOGLE_SLIDES.md) only when a sync is explicitly requested.
