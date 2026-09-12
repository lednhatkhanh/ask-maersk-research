## Agent skills

### Issue tracker

Issues are tracked as local Markdown files under `.scratch/`. See `docs/agents/issue-tracker.md`.

### Triage labels

Triage uses the five default canonical labels. See `docs/agents/triage-labels.md`.

### Domain docs

This repository uses a single-context layout. See `docs/agents/domain.md`.

### Presentation sync

Before generating or revising the Ask ONE slides, read the root `PLAN.md` completely. It is the authoritative slide brief and implementation checklist. Use older proposal documents as supporting evidence, and follow `PLAN.md` when their scope or narrative conflicts. Show staffing quantities and role allocations only on the dedicated resource slide, clearly marked as a placeholder. Keep them out of every other slide and its speaker notes. Keep GCP/Drupal-team involvement in the Markdown plan only. Label the separate cost slide as service costs and exclude staffing costs. The requested PO/PPO and content-owner collaboration dependency may appear in the slides.

By default, update and verify only the local slides under `slides/`. Update the existing editable Google Slides deck and verify both renderings only when the user explicitly asks for a Google Drive or Google Slides sync. When sync is requested, read `slides/GOOGLE_SLIDES.md` for the target, workflow, and saved helpers.

For local slide changes, build Slidev and visually inspect the affected slides in the browser. Export PDF or PowerPoint only when the user explicitly requests that format; routine slide updates do not require either export. Preserve existing export files, but treat them as snapshots that may lag behind the source.
