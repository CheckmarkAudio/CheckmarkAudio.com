---
title: Codex Handoff Queue
status: active
updated: 2026-08-18
---

# Codex Handoff Queue

A running checklist of build/frontend tasks for Codex, worked out with Claude first so each one is precise before it gets queued up. Claude stays off the actual page-building files (Codex's active build) — this list is where that handoff happens instead.

Check items off once Bridget has actually given them to Codex, not once Codex has finished them — that way this file tracks "handed off," and the actual build status lives wherever Codex is tracking its own work.

## Ready to hand off

- [x] **Review carousel — continuous pan.** Change the 5-star review carousel from a discrete slide-switch to a continuous horizontal marquee pan — reviews scroll steadily sideways in a loop, never pausing/holding on one card, no jump-cut between them. Pause the pan on hover (so someone stopping to read a review actually stops it), and resume automatically as soon as the mouse moves off. Also pause on keyboard focus for accessibility, and respect `prefers-reduced-motion` by falling back to a static or slow-fade state instead of animating.

- [ ] **Background textures on light (and dark) sections.** Add subtle layered texture to the site's background fields — especially the flat cream sections — so the site reads high-quality and deliberately designed rather than flat. Full direction, folder layout, sourcing rules, and layering technique are in `MEDIA/IMAGES/TEXTURES/README.md`. Implementation summary: keep the brand color as the base layer; stack texture above it via CSS background stacking or a pseudo-element using `mix-blend-mode` (`multiply` / `overlay` / `soft-light`) at low opacity (~4–15%) so the texture is felt, not seen; tint everything warm to the cream/gold palette (no off-palette or cold hues); preserve WCAG AA text contrast; use tiled seamless WebP files, not huge images. **Gated on assets:** use only files in `MEDIA/IMAGES/TEXTURES/APPROVED/` — do not pull textures from the reference screenshots or grab unlicensed stock. If `APPROVED/` is empty, the sourcing step (below) comes first.

  - **Codex note, 2026-08-27:** Blocked by the stated asset gate. `MEDIA/IMAGES/TEXTURES/APPROVED/` is empty. Texture sourcing is in “Backlog / still being refined,” so it was intentionally not started and this item remains unchecked.

- [x] **Site-wide media editor — durable, integrated, redesign-proof.** Bridget wants to swap/update the site's photos herself on *every* page, not just the homepage. Current state: the photo editor (`checkmark-hero-editor.js` + `checkmark-site-media-editor.js`) is only loaded by `index.html`; inner pages load only `visual-edit-mode.js`, which has no media swapping — so the edit button disappears off the homepage. Requirements:
  1. **Every page gets the media editor** — same picker (browse the `MEDIA/` library), same crop/position controls, on all heroes, section images, filmstrips, and galleries across all ten pages.
  2. **Durable persistence, not localStorage-only.** Selections must land in `MEDIA/WEBSITE_MEDIA_SELECTIONS.json` (already the canonical record per `PROJECT_STATE.md`) — the browser-local-only saving that nearly lost the homepage edits on 2026-08-21 is exactly what this must eliminate. If a dev-time file-write bridge isn't feasible, the editor must at minimum produce an explicit export (copy/download of the updated JSON) with a clear unsaved-changes indicator — never silently hold edits in one browser.
  3. **Architecturally separate from cosmetics.** Pages should *reference* media through the selection layer (JSON + a small loader) rather than hard-coding image paths in markup, so any future redesign/re-styling of a page cannot break or orphan the editor. The editor is its own wired-in module — one script/CSS pair shared by all pages — not per-page copies that drift.
  4. Stays a localhost/dev-only tool (as now), invisible on the public site.

  - **Codex note, 2026-08-27:** Completed. All ten pages now load the canonical JSON selection layer and share the same localhost-only media editor. Current heroes, homepage feature videos/section images, Services media states, Studio A/B primary images, rails, and galleries are editable. Browser-only changes show a prominent unsaved state and download a complete replacement `WEBSITE_MEDIA_SELECTIONS.json`; the editor never presents localStorage as a finished save.

## Backlog / still being refined

- [ ] **Texture sourcing (precondition for the texture handoff above).** Find and download real, properly licensed (or CC0/free) texture files matching the three reference families — warm brown/gold grunge, B&W industrial (to be warm-tinted), fine geometric linework — at 2000px+ resolution, save them into `MEDIA/IMAGES/TEXTURES/APPROVED/`, and record each file's source + license in a `SOURCES.md` there. Reference screenshots go in `MEDIA/IMAGES/TEXTURES/REFERENCE/`.
