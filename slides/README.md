# Ask ONE project proposal

The editable local deck has **23 slides**: a 14-slide manager proposal, seven technical proposal slides, and two architecture references. The manager section presents the customer case, expected value, scope, delivery plan and outcomes. The technical section compares a custom workflow using managed Agent Retrieval with direct RAG Engine, then shows the shared application boundary, controls, PoC selection evidence, operating signals and service costs.

The proposal covers discovery, a separate proposed PoC and **eight months of implementation** after the PoC review. The schedule and project definition are provisional. At 10,000 and 100,000 monthly questions respectively, the illustrative service budgets are **about US$1,000 / US$2,500 for the custom workflow** and **US$2,500 / US$3,500 for direct RAG Engine with Scaled production**. These planning figures exclude staffing and implementation. See the [authoritative plan](../PLAN.md) and [narrative and evidence guide](../slide-docs.md).

## Open the presentation

- [Editable local source](slides.md)
- [Last exported PDF snapshot](ask-one-project-proposal.pdf)
- [Last exported PowerPoint snapshot](ask-one-project-proposal.pptx)

The PDF and PowerPoint files predate this local revision. The PowerPoint is a visual copy with rasterized backgrounds. Export either format only when requested, as directed by [AGENTS.md](../AGENTS.md).

## Run and build

From the repository root:

```bash
pnpm --dir slides install
pnpm --dir slides dev
pnpm --dir slides build
```

Open the URL printed by Slidev. Press `p` for presenter mode and source-qualified notes.

## Source and diagrams

- `slides.md` contains the slide text and speaker notes.
- `style.css` and `global-bottom.vue` provide ONE styling and footers.
- `public/diagrams/*.drawio` are editable diagram sources; matching SVG files embed the draw.io data.
- `scripts/generate-diagrams.mjs` creates the architecture diagram sources, including the new shared-boundary view.
- The [portable source archive](../deliverables/ask-one-slides-source.zip) contains the local deck and assets without dependencies.

The main technical diagram shows the ONE-owned publishing and customer API around one selected retrieval path. Slides 22–23 show full service maps for the custom workflow and direct RAG Engine, with required Model Armor and reranking, optional OCR, and the Singapore evaluation limitation. Other earlier diagram assets remain in the source tree as research references.

## Google Slides

The [editable Google Slides deck](https://docs.google.com/presentation/d/1knHzzM91yvkAoxI2M55gq7JRWaIxpgf-Rf3duWitK5I/edit) was synchronized on 27 September 2026 to match this 23-slide local deck. Text and tables remain native objects; diagrams remain images. Local changes do not trigger a later sync; follow [slides/GOOGLE_SLIDES.md](GOOGLE_SLIDES.md) when another sync is explicitly requested.
