---
title: Project State
status: active_development_not_launch_approved
updated: 2026-09-23
---

# Project State

Checkmark Audio's replacement is built in the repository root and is still in development. Wix remains the production website at CheckmarkAudio.com. Domain cutover requires Bridget's explicit approval after launch QA.

The Source of Truth DOCX remains the only active completion checklist. This file summarizes implementation; `NEXT_STEPS.md` routes remaining work. The detailed dated diagnostics and contributor evidence are in `../MIGRATION/STATUS_2026-09-05.md`.

## September 23 — Fifteen-second website audio samples

**Author:** OpenAI Codex (GPT-6). **Task:** Astra audit Claude website changes (`01a07160-a400-7e73-8f7c-bf2aac8a5f49`). **Status:** Pushed and remote-verified on September 23: `89bbe33adb49f8546676da8f5a6e1ee8999e8889`. GitHub Pages reported that matching commit building without a reported error. Automated excerpt choices remain adjustable after listening.

Bridget requested 15-second highlights. Re-exported all 11 active demo-reel clips and both active comparison pairs (15 audio files total) directly from the original sources. Selected the strongest sustained RMS-energy window inside the previously featured 30-second segment, with 0.12-second fade-in and 0.45-second fade-out. This is an automated activity-based selection, not a claim of listening-based or chorus selection. Preserve original artist/title/rights uncertainties. No normalization, EQ, compression, or source gain changes were introduced beyond the short fades and output encoding.

Unmixed and mixed exports use the same relative cut, preserving their existing source timing offsets. Updated playback duration fallback, visible duration copy, cache versions, generator default, and reproducible selection manifests (`MEDIA/AUDIO/demo-clips/selection.json`, `MEDIA/AUDIO/mix-comparisons/sources.json`). Kept navigation, slider artwork, texture, player switching and synchronization logic unchanged.

Existing 30-second web excerpts and affected source code were backed up to `/Users/bridges/GITHUB/CheckmarkAudio-backups/2026-09-23-30-second-web-excerpts/`. Full-length masters remain untouched. Total active web-audio size changed from 11,258,439 to 5,648,301 bytes (about 50% smaller). All 15 outputs decoded successfully with signal and measured 15.000 seconds each. Verification by OpenAI Codex (GPT-6), same task: browser reports 15 seconds for the demo and all four comparison audio elements; both comparison tracks load and switching works; starting comparison playback pauses the demo. Playback was left stopped on the first comparison. All 15 files passed full decode/duration checks (15.000 seconds each), original demo-source hashes are unchanged, paired timing offsets are preserved, JS/Python/JSON validation and diff whitespace checks passed. Musical phrase selection remains for listening review; no claim of listening-based selection or complete end/seek QA.

## September 23 — Authorized checkpoint and contributor handoff

**Updated by:** OpenAI Codex (GPT-6), task “Astra audit Claude website changes” (`01a07160-a400-7e73-8f7c-bf2aac8a5f49`). Scope: recovery notes, assistant-attribution rules, and checkpoint coordination; not authorship of all earlier implementation.

Bridget now authorizes committing and pushing the current main checkout. Earlier no-push statements describe their historical phases and are superseded for this checkpoint. Implementation/design approval and Wix cutover remain separate. Checkpoint contents include only the current website and necessary supporting files: preserved Services faders/CD, layered microphone/paper background, flat photos, Checkmark Live artwork, active comparison excerpts, navigation/playback/editor fixes, source records, and team context. Bridget clarified that older versions and draft galleries must not be committed; these stay local in the backup. Team rules now require identifying each assistant's actual contribution; unknown model/author details must remain unknown.

Before-checkpoint backup: `/Users/bridges/GITHUB/CheckmarkAudio-backups/2026-09-23-before-checkpoint/`. Newly pending raw audio/DAW sources are saved there as well as in their original directory, and excluded from normal Git because of oversized files and the source-media boundary. Previously ignored originals/video remain local. The hosted studio-tour video is still a known pending asset, not silently fixed by this checkpoint. The two unique older-worktree visual boards and all new draft/rejected galleries are preserved locally but excluded from this checkpoint. Existing history is not deleted.

**Delivery status (OpenAI Codex / GPT-6):** Website checkpoint `18bd0f964cc2abbcbeac05c1d0f89289addd7ec8` was pushed to `origin/main` and the remote hash verified on September 23. The final delta from the previous remote contains 71 current-site/support files (about 14 MB); no new draft/archive/audit galleries or oversized raw sources. GitHub Pages reported the matching build in progress, with no reported error, at handoff-record preparation. This documentation follow-up records that verified push. The correct local working source remains this main checkout on port 4191; no Wix/DNS cutover occurred.

## September 23 — Current checkout and preview recovery

Standing session instruction: Bridget requires a context review at every new chat/resumption and proactive updates as work changes and before handoff. The enforceable workflow is in `../AGENTS.md` and `RULES.md`; future sessions must verify the current checkout/preview before presenting a website.

The current working website is `/Users/bridges/GITHUB/CheckmarkAudio.com`, with local preview `http://127.0.0.1:4191/`. The `48c9` worktree on `codex/finish-claude-polish` is an older September 5 snapshot and must not be used as the current website or merged wholesale over this checkout. At recovery time GitHub Pages also lacked the newer work. The later authorized checkpoint above updates GitHub; confirm its deployment status before treating that public preview as current.

On September 23, the older preview was mistakenly opened and its missing designs were initially misdiagnosed as regressions. The newer main checkout was then inspected and the correct previews opened. No design rollback or main-site source replacement was needed. The redundant photo-bevel correction made in the old worktree must not overwrite this checkout's September 10 correction.

Confirmed intact in the newer preview:

- Services `#mixing-mastering`: exact approved mixing-rack artwork with seven independently movable illustration faders, plus the large gold mastering CD. All seven controls and loaded artwork were checked; the first fader was keyboard-tested and returned to its starting value. These controls move artwork, not audio levels.
- Homepage “Inside the work”: vintage paper overlay, cream gradient at 0.42/0.32 opacity, and seamless bronze microphone diagram. Desktop sizes are `cover, cover, 80% auto` with `multiply, normal, normal` blending; the phone rule retains `auto 80%` for the artwork. These are the saved layers, not the September 6 texture-board draft.
- Photo collections retain flat edges; functional equipment panels retain their approved treatment.
- Later technical work remains in place: comparison audio and playback exclusivity, calendar shortcut, navigation/scroll corrections, media-editor/photo-library improvements, and improved source-photo exports. This recovery did not modify those files or repeat full functional QA.
- Checkmark Live exists at `live-recordings.html`, with approved microphone and guitar artwork. It is linked through Services/the inner-page footer but currently has no top-navigation tab. Bridget's question about a tab is recorded; no navigation change was made or approved by that question alone.

At inspection, local `main` was `400d177b34823a4dbadd199d99913843bc415b90`, one commit ahead of the locally recorded `origin/main` (`b7e10fc`), with substantial staged, unstaged, and untracked newer work. Those states are preserved. No commit, push, deployment, or DNS change was performed during recovery.

The old local port 8765 was given a temporary redirect to 4191 for website paths; `/DRAFTS/` still serves the older local draft files. This is session-only routing, not a deployed redirect or durable server configuration. If a preview stops, verify its serving directory and restart the main checkout's `scripts/dev-server.py` on 4191. Do not restart a generic server against the stale worktree as the current website.

## September 10 local editorial preview

September 12 latest correction: Bridget rejected the 24 page-refinement renders for added copy, substituted artwork and layout drift. They are archived under `../ARCHIVE/rejected-drafts/page-refinements-2026-09-12/` and are not implementation references. That generation pass did not modify root pages. Current design scope is exact approved clip-art refinement only, with ZERO added copy and preservation of existing layouts/content/media. See RULES.md. Do not generate another replacement-page batch.

The selected Team 07C, 404 10A, Checkmark Live 04A, and additive Services Mixing/Mastering chapters are implemented locally for review. Bridget rejected the first implementation’s screenshot-box artwork and excessive photo bevels. The corrected pass uses six directly extracted transparent PNGs and removes bevels/gold rims from photo collections; actual form/player/equipment panels retain their treatment. This correction remains subject to visual review. The existing Services composition and homepage remain protected. See the September 10 change-log entry and media selection manifest. The September 10 publishing request was canceled before commit/push/deploy. On September 12 Bridget requested the finish-and-migration plan and preparation. The actual cutover follows final review; no DNS changes have been made. NEXT_STEPS.md now contains the execution order and Wix runbook.

## Git and hosting

The September 5 audit began with local `main` at `6eab017`, 15 commits ahead of `origin/main` at `5c6a282`. All 15 were attributed to Claude Opus 5. One additional uncommitted change updated the inner-page champagne stylesheet cache version. This synchronization checkpoint includes that change, the unfinished Team phone-layout fix, expanded diagnostics, and reconciled project records. The completed implementation checkpoint `7b5a38c128a1d8de38e75dbe18f173e75cd1b5aa` was pushed and verified: local/remote matched, the tree was clean, GitHub Pages build 33964659571 succeeded, and the deployed Team phone layout passed its browser check. This documentation follow-up records the verified outcome.

GitHub Pages already publishes `main` at https://checkmarkaudio.github.io/CheckmarkAudio.com/. It is a public development preview, not the production domain. The GitHub Pages API reported no custom domain, HTTPS enforced, and a successful previous build. Pushing `main` updates this preview. It does not redirect the Wix domain. All ten content pages retain `noindex,nofollow`; `robots.txt` remains `Disallow: /`.

## Current website

September 12 correction: historical September 5 bevel descriptions below are superseded by the September 10 corrections: photo compilations and review banner are flat; dimensional styling is limited to suitable equipment/functional panels. Team 07C and the microphone-02/paper treatment are the current direction. See NEXT_STEPS.md for current remaining work.

September 5 evening follow-up: the homepage contact strip now uses larger type (18.72px at a 1440px viewport; 19.2px phone number and 15.2px address on phones) with a 44px phone-link target. Four music-tech homepage drafts are available in `../DRAFTS/active/home-music-tech-2026-09-05/`: Signal flow, Studio schematics, Session windows, and Patchbay. Their added artwork remains confined to the comparison pending Bridget’s choice; the existing Services and demo designs are preserved.

September 5 design exploration: Bridget requested carrying the Services icons' champagne line art and edges across the site, starting with the homepage demo unit. `../DRAFTS/active/service-line-style-2026-09-05/` compares an outline console, studio window, and line-art rack, plus matching photo and inquiry samples. Bridget’s follow-up adds subtle bevels and raised controls to the proposals. Bridget approved the rounded bevel direction for site-wide implementation and asked to commit/push the study first. Study commit `f94fa60` was pushed first. The rounded champagne bevels are now applied across all ten root pages via `checkmark-rounded-bevels.css`: large frames use 18px corners (14px on phones), compact controls use smaller curves, and the homepage demo uses the approved Outline console. Layouts, media selections, section colors, and the separate Community title decision remain intact.

Ten content pages are active: Home, Services, Recording, Mixing & Mastering, Live Recordings, Studio A, Studio B, Team, Community, and Q & A. `404.html` is the error page. There is no second active website tree.

September 5 navigation decision: the header's Services item links directly to `services.html`, the selected six-state Services page. The Recording / Mixing & Mastering / Live Recordings header dropdown and toggle are removed on desktop and phones. Existing detail-page files and non-header links remain available; this change does not retire their URLs.

The August 21 recovered homepage is the protected baseline, with later explicitly selected refinements recorded in `WEBSITE_CHANGE_LOG.md`. Current features include:

- The selected cinematic homepage with the same four hero photographs, the September 1 lower-third treatment, and Claude's September 4–5 champagne palette, matching buttons, contact bar, alternating section tones, and shorter copy.
- Services' six-state signal-path selector, matched cinematic Studio A/B pages and galleries, the three-person editorial Team composition, and Community's broadcast-wall layout with an aligned foreground cutout and distressed title.
- A music-reactive sound demo using 11 tracked 15-second MP3 clips (September 23 update), followed by Song of Solomon and provisionally titled Tape comparisons using local M4A excerpts and previous/next arrows. Love All of Me was removed at Bridget’s request because it is Richard’s work. Further Gavin examples need identified unmixed partners; Tape attribution is pending.
- A continuous review marquee on desktop and compact manual review controls on phones. The review counter is visually hidden publicly but stays available to assistive technology and visible in localhost edit mode.
- A selectable Cal.com calendar for the free one-hour consultation, plus the branded EmailJS inquiry path. The homepage consultation sidebar is parked in `DRAFTS/active/calendar-info-panel-2026-09-03/`; its Call the studio button is preserved there. The inquiry section is light, and its contact card moves below the calendar on phones.
- The September 5 Team fix: at widths up to 620px, all three current profiles appear in a compact vertical list with 112px portraits and visible names/roles. The former horizontal carousel and its script are no longer loaded. The September 5 roster update removes Matt Bow and Richard Baca from the current roster at Bridget’s request: three equal desktop columns, a balanced two-over-one tablet layout, and one compact phone column. Richard’s existing appearances elsewhere in the photo library and site remain in place. Tony still needs an approved portrait.

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

## September 24, 2026 — musician-site Team / Community visual drafts

Author: OpenAI Codex; GPT-6.
Task: 01a08746-c9e1-7e63-aac3-39e70c220654.

Bridget explicitly requested new Team and Community visual mockups using her Eminem, Gregory Porter and Sharam screenshots plus the Bandzoogle musician-design article. This authorizes draft layout/color exploration for these two pages only; Home and Services remain protected. Eight built-in imagegen drafts (T1–T4, C1–C4) are saved in `DRAFTS/active/members-community-2026-09-23/musician-sites.html`, with PNGs and `musician-sites-prompts.json`. Existing headings/roles and the approved headphone/microphone art were supplied as references; no new business copy was requested. These raster outputs approximate source photography/art and are not replacement production assets. Original media, shared logo/navigation and exact approved artwork must be used if a direction is selected.

Status: local unapproved visual drafts; no root HTML/CSS/JS/MEDIA edits, commit, push, deployment or cutover. Validation: inspected all eight renders; corrected repeated caption/invented logo and unrelated small photo inserts; gallery, prompt JSON and all eight PNGs returned HTTP 200. Verified main checkout `fcadc89` and port 4191 process cwd at `/Users/bridges/GITHUB/CheckmarkAudio.com`; existing Grok/documentation changes preserved. Next: Bridget selects or critiques numbered drafts before any implementation.

## September 25, 2026 — Checkmark Tonight / Live

Author: OpenAI Codex; GPT-6.
Task: 01a08746-c9e1-7e63-aac3-39e70c220654.

Bridget selected draft 04A as the implementation reference for Checkmark Tonight and explicitly replaced the Community tab with Live. Implemented in `community.html` with scoped `checkmark-tonight.css`, original transparent microphone/guitar artwork and original studio photography. Shared navigation and homepage navigation now read Live; the stable URL remains `community.html`. Registered the new hero media slot. Main Services and the separate paid `live-recordings.html` page are unchanged.

Status: implemented locally for visual review; no commit, push, publication or Wix cutover. Verified main checkout `fcadc89`, port 4191 serving this repository, desktop rendering and 390px mobile rendering, all three images loaded, CTA destinations, no mobile horizontal overflow, JS syntax, media JSON and diff whitespace. Existing Grok changes preserved. Next: Bridget reviews the implemented Tonight page. September 24 Team/Community draft batches were rejected and are superseded for this page; do not resume those batches.

### September 25 — authorized Git handoff

Author: OpenAI Codex; GPT-6.
Task: 01a08746-c9e1-7e63-aac3-39e70c220654.

Bridget requested committing and pushing this task’s Checkmark Tonight work before Grok continues. Scope: Tonight page/CSS, Live navigation labels, hero media registration and this task’s records only. Other contributors’ edits, archives and draft galleries stay untouched and unstaged. Remote main fetched before checkpoint. Implementation commit `54fbf79fc6daea2f1a710e750eb4ab60ec044eea` was pushed to `origin/main` and verified with `git ls-remote`. Grok should start from that implementation plus this handoff record, preserving the remaining local changes. Hosted build completion was not checked. Wix/domain cutover is not part of this request.
