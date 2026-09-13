# Google Slides sync

[Open the editable Ask ONE deck](https://docs.google.com/presentation/d/1knHzzM91yvkAoxI2M55gq7JRWaIxpgf-Rf3duWitK5I/edit).

`google-slides.json` records the presentation ID and native slide IDs in local presentation order. Native IDs are stable identifiers, not current slide numbers. `minimumTextWidthsPt` records the two label widths verified in the live editor; maintain these checks when replacing those elements. Update this mapping when slides are added, removed or reordered.

## Completion rule

Update and verify the local deck by default. Sync this existing Google Slides deck only when the user explicitly requests a Google Drive or Google Slides sync, as required by the root AGENTS.md. When requested, sync visible content, speaker notes, slide order, styling and changed diagram images. Keep text and tables native and editable; diagrams may remain images. Documentation or helper-code changes that do not affect the presentation do not require a deck mutation.

If authentication or connector access prevents syncing, complete the local work and report the Google Slides update as blocked. Never report both versions as updated without checking the remote result.

## Workflow

1. Read the full current presentation through the authenticated Google Drive/Slides connector and save its unmodified resource in `.sync/before-google.json`. Inspect existing content and user edits before choosing targeted updates. Preserve existing slide and element identities where practical.
2. Edit `slides.md`, notes, styles or diagram assets. Run `pnpm --dir slides build` from the repository root.
3. Start Slidev in one terminal: `pnpm --dir slides exec slidev slides.md --port 3030`. In another, run `pnpm --dir slides google:capture http://localhost:3030`. Inspect the captured slide PNGs. The capture command accepts optional output-directory and slide-count arguments; its default count comes from the manifest.
4. Apply targeted native Google Slides requests through the connector. Read fresh object IDs and revision information before writing. Use text/style updates for small edits, native shapes and tables for new compositions, and uploaded image assets for changed diagrams. Update the native speaker-note shapes too. Read back the final order; moving a single slide is safer than submitting an arbitrary permutation to `updateSlidesPosition`.
5. Save a fresh complete presentation resource as `.sync/after-google.json`, then run `pnpm --dir slides google:verify .sync/after-google.json`. Paths passed to this command are relative to the slides package when invoked with `pnpm --dir slides`. Resolve every reported content, order, note or media-count mismatch.
6. Check the live Google Slides editor as well as native thumbnails: narrow text boxes can wrap in the editor even when API thumbnails look correct. Render every native slide after structural changes (or each affected slide after a small edit), inspect at presentation size, and repair clipping, wrapping, alignment, footer and diagram-placement issues. Use native slide thumbnails when PDF export is unavailable. The JSON checker does not detect visual misalignment or validate image pixels. Re-render repaired slides before finishing.

## Saved code

- `scripts/capture-google-source.cjs`: adapted from the successful conversion's Playwright capture. Saves text runs, styles, geometry, tables, image assets and full-slide screenshots under `.sync/`. Captures footer text directly to avoid the oversized-footer bug found during conversion.
- `scripts/verify-google-slides.mjs`: checks a complete native presentation resource against a fresh local capture and current speaker notes. Accepts either a raw Slides resource or a connector response with `structuredContent`.
- `google-slides.json`: destination and current slide mapping.

These are capture and verification helpers, not an automatic publisher. Native layout adjustments and authenticated writes still run through the connector. The one-off request generator from the initial conversion was not retained as a publisher: it recreated objects, relied on a fixed mapping, and required manual repairs. Replaying those requests would conflict with existing IDs and later edits.

Keep API snapshots, rendered assets and downloaded thumbnail URLs in ignored `.sync/`; keep credentials out of the repository. Slidev's standard PPTX export rasterizes slides and does not satisfy the editable-content requirement.

## Latest verified sync — 13 September 2026

The existing deck now matches all 29 local slides, including the separate PoC timeline, expanded technical section and removal of internal learning content. Existing slide IDs and editable objects were retained wherever practical. All native slide thumbnails were visually reviewed, with targeted live-editor checks and repairs to roadmap columns, table spacing and cost-assumption placement. The final content, notes, slide-order and media-count checks passed. Readbacks and QA images are in ignored `.sync/sync29/`. PDF and PowerPoint remain earlier snapshots.
