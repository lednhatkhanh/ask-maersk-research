# Ask ONE project proposal

The local deck has **22 slides**: a 13-slide manager proposal with a short overview, a technical overview, six core technical slides and two reference diagrams. The roadmap uses two slides so milestones and wider delivery risks stay readable.

The deck proposes the whole first-MVP project, from discovery through stabilization, with review gates and no dedicated approval slide. The nine-month path is a rough scenario only. Further PO/PPO involvement must clarify business requirements, research and feature priorities before the project definition can be finalized. Business, content, technical and operational risks can change scope and dates before or after the PoC. Staffing appears only on the dedicated resource slide as a placeholder. The technical section includes a separate monthly service-cost estimate that excludes staffing. Partner-team involvement stays in the internal [main plan](../PLAN.md), not in slide content or notes.

## Open the presentation

- [Last exported PDF snapshot](ask-one-project-proposal.pdf)
- [Last exported PowerPoint snapshot](ask-one-project-proposal.pptx)
- [Editable local source](slides.md)
- [Narrative and evidence guide](../slide-docs.md)

The live Slidev source is authoritative. Under [AGENTS.md](../AGENTS.md), routine updates use a local build and browser visual review; PDF and PowerPoint exports require an explicit request. Existing exports predate the business-research, resource and service-cost revisions. PowerPoint slides use rasterized backgrounds, not native editable text or diagrams.

## Run and build

From the repository root:

```bash
pnpm --dir slides install
pnpm --dir slides dev
pnpm --dir slides build
```

## Optional exports — only when requested

```bash
pnpm --dir slides export
pnpm --dir slides export:pptx
```

Open the URL printed by Slidev. Press `p` for presenter mode and notes. Exports use the filenames linked above.

## Source structure

- `slides.md` — slide content and source-qualified speaker notes.
- `style.css` and `global-bottom.vue` — ONE styling and page footers.
- `public/` — local logo, fonts, product icons and existing diagrams.
- `public/diagrams/*.drawio.svg` — diagrams with embedded editable draw.io data.

The source archive in `../deliverables/` preserves the local presentation independently of the existing root Git gitlink. It excludes dependencies and research captures.

## Google Slides

The [editable Google Slides deck](https://docs.google.com/presentation/d/1knHzzM91yvkAoxI2M55gq7JRWaIxpgf-Rf3duWitK5I/edit) is synchronized with this 22-slide revision. Narrative content remains native and editable; diagrams remain images. Future local revisions still follow the local-only default in [AGENTS.md](../AGENTS.md) unless the user explicitly requests another sync.
