---
title: Project State
status: active_development_not_launch_approved
updated: 2026-09-05
---

# Project State

Checkmark Audio's replacement is built in the repository root and is still in development. Wix remains the production website at CheckmarkAudio.com. Domain cutover requires Bridget's explicit approval after launch QA.

The Source of Truth DOCX remains the only active completion checklist. This file summarizes implementation; `NEXT_STEPS.md` routes remaining work. The detailed dated diagnostics and contributor evidence are in `../MIGRATION/STATUS_2026-09-05.md`.

## Git and hosting

The September 5 audit began with local `main` at `6eab017`, 15 commits ahead of `origin/main` at `5c6a282`. All 15 were attributed to Claude Opus 5. One additional uncommitted change updated the inner-page champagne stylesheet cache version. This synchronization checkpoint includes that change, the unfinished Team phone-layout fix, expanded diagnostics, and reconciled project records. The completed implementation checkpoint `7b5a38c128a1d8de38e75dbe18f173e75cd1b5aa` was pushed and verified: local/remote matched, the tree was clean, GitHub Pages build 33964659571 succeeded, and the deployed Team phone layout passed its browser check. This documentation follow-up records the verified outcome.

GitHub Pages already publishes `main` at https://checkmarkaudio.github.io/CheckmarkAudio.com/. It is a public development preview, not the production domain. The GitHub Pages API reported no custom domain, HTTPS enforced, and a successful previous build. Pushing `main` updates this preview. It does not redirect the Wix domain. All ten content pages retain `noindex,nofollow`; `robots.txt` remains `Disallow: /`.

## Current website

September 5 design exploration: Bridget requested carrying the Services icons' champagne line art and edges across the site, starting with the homepage demo unit. `../DRAFTS/active/service-line-style-2026-09-05/` compares an outline console, studio window, and line-art rack, plus matching photo and inquiry samples. Bridget’s follow-up adds subtle bevels and raised controls to the proposals. Bridget approved the rounded bevel direction for site-wide implementation and asked to commit/push the study first. The recommended Outline console guides the demo frame; root rollout is the next step.

Ten content pages are active: Home, Services, Recording, Mixing & Mastering, Live Recordings, Studio A, Studio B, Team, Community, and Q & A. `404.html` is the error page. There is no second active website tree.

September 5 navigation decision: the header's Services item links directly to `services.html`, the selected six-state Services page. The Recording / Mixing & Mastering / Live Recordings header dropdown and toggle are removed on desktop and phones. Existing detail-page files and non-header links remain available; this change does not retire their URLs.

The August 21 recovered homepage is the protected baseline, with later explicitly selected refinements recorded in `WEBSITE_CHANGE_LOG.md`. Current features include:

- The selected cinematic homepage with the same four hero photographs, the September 1 lower-third treatment, and Claude's September 4–5 champagne palette, matching buttons, contact bar, alternating section tones, and shorter copy.
- Services' six-state signal-path selector, matched cinematic Studio A/B pages and galleries, the five-person editorial Team composition, and Community's broadcast-wall layout with an aligned foreground cutout and distressed title.
- A music-reactive sound demo using 11 tracked 30-second MP3 clips, followed by the Millie raw/mastered comparison using tracked M4A files.
- A continuous review marquee on desktop and compact manual review controls on phones. The review counter is visually hidden publicly but stays available to assistive technology and visible in localhost edit mode.
- A selectable Cal.com calendar for the free one-hour consultation, plus the branded EmailJS inquiry path. The homepage consultation sidebar is parked in `DRAFTS/active/calendar-info-panel-2026-09-03/`; its Call the studio button is preserved there. The inquiry section is light, and its contact card moves below the calendar on phones.
- The September 5 Team fix: at widths up to 620px, all five profiles appear in a compact vertical list with 112px portraits and visible names/roles. The former horizontal carousel and its script are no longer loaded. Tablet and desktop arrangements are retained. Matt and Tony still need approved portraits.

The September 5 Community photo follow-up restores the original darker lead photograph and matching foreground cutout, with the earlier 1.22 brightness filter. The paired layers move down together so only the cap tip crosses the desktop/tablet title; phones keep the photograph below the title. A local title-finish comparison is active in `../DRAFTS/active/community-title-finishes-2026-09-05/`; clean champagne, soft metallic, and warm ivory remain proposals pending Bridget's choice.

The September 5 polish follow-up keeps Claude's latest direction and the completed Team layout. It unifies the phone-menu CTA with the champagne buttons, improves inquiry placeholder/focus contrast, removes the contact card's misleading “below” wording, aligns shared cache versions, and keeps the desktop Services title on one line.

The Team layout implements Bridget's last request to Claude, supplied again on September 5; it is ready for visual review, not recorded as a newly approved screenshot baseline. The September 5 affiliates fix is implemented for review: five existing logos form one centered desktop banner and three over two at widths up to 900px, without cell borders or an empty sixth cell.

## Durable media editing

`MEDIA/WEBSITE_MEDIA_SELECTIONS.json` is canonical. Claude's `b2d4c25` added direct saving through `python3 scripts/dev-server.py`, with backups in `.media-backups/`, atomic replacement, validation, and protection against large slot deletions. A generic static server only offers export fallback. During this audit port 4173 ran a generic server; the correct server was verified separately on port 4187 with a successful save-capability probe. No canonical selections were overwritten by the audit.

Hero mobile crops inherit the desktop focal anchor when no explicit phone framing exists. The September 5 follow-up fixes a loader omission in `e175f1d`: `mobileFramed` now survives browser reload and exported canonical JSON loading. All four existing photographs now have individual phone profiles in `MEDIA/WEBSITE_MEDIA_SELECTIONS.json`; desktop profiles, image choices, ordering, and the separate reference export remain unchanged. The new phone framing awaits visual review.

The loose media export is preserved under `DRAFTS/reference/media-selection-export-2026-09-02/`. Its slots already match canonical; differing hero order/labels/alt text remain unapplied for Bridget's review.

Approved textures are no longer missing: the microphone pattern and procedural Community grit are implemented, with sources in `MEDIA/IMAGES/TEXTURES/APPROVED/SOURCES.md`. Other texture sourcing remains optional future work.

## Migration readiness

The website is ready for continued development review, not domain cutover. Thirty basic page/viewport checks passed at 390, 768, and 1440px; the Team fix also passed at 320, 375, 390, and 620px. These are not a full accessibility, performance, or live transaction sign-off.

Critical gaps: approved final URL/page-intent and redirect mapping; final content/proof/privacy/terms approval; production hosting and a deployable public-file boundary; missing hosted tour video; metadata/canonicals/social previews/schema/sitemap; analytics/Search Console; end-to-end inquiry/booking verification; final accessibility/performance QA; explicit cutover approval and rollback plan.

GitHub cannot reproduce the entire local media library. Twenty audio masters (~384 MiB), 62 video files (~8.04 GiB), 14 texture references, and one Affinity lock file remain local and are now explicitly ignored. The homepage tour and two optional WAV fallback paths are not tracked. The M4A comparison and 11 demo clips are tracked. Do not bulk-add masters: choose storage and reconcile permissions first.

## Contributor record

- Codex GPT-5.6 Sol: session metadata confirms the earlier `Create unique page mockups`, `Update header branding`, and `Review project context handoff` tasks. This includes the page-design/responsive work summarized by commits `6daca1b`, `35bc852`, and `5c6a282`; the commits themselves use the shared CheckmarkAudio author identity.
- Claude Sonnet 5: the homepage Studio A/B chooser (`2a2ff7c`).
- Claude Fable 5: Community depth/brightness/grit, sound visualizer and clips, and Studio B media persistence, identified by Git co-author trailers in the September 1–2 commits.
- Claude Opus 5: direct media saving (`b2d4c25`) and the 15 September 4–5 polish commits ending at `6eab017`.
- Codex GPT-6 Astra: September 5 audit, Team phone-layout completion, cache fix preservation, diagnostic tooling, Git reconciliation, and current documentation. Exact model attribution is not inferred for older work without session or Git evidence.

Historical records remain in Git, `WEBSITE_CHANGE_LOG.md`, `DRAFTS/reference/`, and `ARCHIVE/`. Existing studies under `DRAFTS/active/` need a later routing review; that folder is not empty. Do not revive them automatically.
