---
title: Project Context
status: active
phase: all_phases
tags:
  - consolidated
  - website_planning
---

# Project Context

This file consolidates the active planning notes that previously lived in several smaller Markdown files. The archived originals are preserved under `99_ARCHIVE/reference/consolidated-md-sources/2026-07-02/`.

Current rule: this master file is the active planning file for this folder. Any older file paths mentioned inside archived source sections are historical references only.


---

## Archived Source: `00_START/project-history.md`

# Project History

## 2026-05-20

- Started the CheckmarkAudio.com rebuild from an empty local folder.
- Initialized the local Git repository.
- Built an initial static GitHub Pages-ready draft.
- Created `blueprint.html` as a local review wrapper. It is now archived at `99_ARCHIVE/design-drafts/website-design-drafts/historical-static-previews/02-static-site-blueprint.html`.
- Extracted original-quality Wix Media Manager image assets using a Chrome Network HAR workflow.
- Downloaded 29 authenticated Wix media assets into `99_ARCHIVE/ignored-local/original-assets/`.
- Added `WEBSITE_REVAMP_CHECKLIST.md` as the main working checklist.
- Created `preview-current-modern.html` to keep the existing Wix homepage structure while modernizing the presentation. It is now archived at `99_ARCHIVE/design-drafts/website-design-drafts/historical-static-previews/00-current-site-modernized-preview.html`.
- Promoted the current-site modernized preview into `index.html` as the active deployable baseline.
- Optimized selected production images into `assets/`.
- Created organized production asset folders under `02_ASSETS/production/`.
- Crawled public CheckmarkAudio.com pages for additional Wix media URLs.
- Downloaded 90 public Wix media files into `99_ARCHIVE/ignored-local/original-assets/public-crawl/`.
- Renamed the public crawl images with numeric, descriptive names.
- Moved the unique source image library into tracked folders under `02_ASSETS/library/`.
- Deduplicated the loose authenticated Wix downloads against the public crawl image set.
- Audited source and production assets.
- Found 91 tracked source image files, 0 source video files, and 0 exact duplicate source groups after deduplication.
- Wrote `04_MIGRATION/asset-inventory.json` and `00_START/source-asset-inventory.md`.
- Decided the first Wix-replacement launch should remain a static single-page GitHub Pages site.
- Added `404.html`, `robots.txt`, `sitemap.xml`, and `00_START/site-structure.md`.
- Added LocalBusiness structured data to `index.html`.
- Added `00_START/video-asset-capture.md` for the remaining Wix video capture workflow.
- Built `preview-mak-inspired.html` as an editorial/luxury concept inspired by MAK Management's visual direction, using Checkmark Audio content and assets. It is now archived at `99_ARCHIVE/design-drafts/website-design-drafts/historical-static-previews/01-editorial-mak-inspired-preview.html`.


## 2026-06-25

- Moved the website completion playbook system into the correct `CheckmarkAudio.com` repo at `01_WEBSITE/`.
- Established `01_WEBSITE/99_SOURCES/CHECKMARK_AUDIO_WEBSITE_SOURCE_OF_TRUTH.docx` as the single active DOCX checklist for Codex/Claude.
- Kept `99_ARCHIVE/reference/legacy-docs/LEGACY_BRIDGET_WEBSITE_COMPLETION_GUIDE.docx` as reference-only.
- Added `01_WEBSITE/00_INDEX/source-of-truth-rule.md` to prevent renaming, duplicate active DOCX files, or accidental edits to legacy/Desktop copies.
- Updated `README.md` and `00_START/README.md` with the active source-of-truth path and handler-rule paths.
- Removed the confusing lower appendix from the DOCX so the main checklist is the only build source inside the document.
- Verified the address checklist format: answer on the checklist line, `SEO:` below it, and `SEO gaps:` with nested checkboxes.

## Current Direction

The priority is to get off Wix with a clean static site first, then continue polishing the UI. The current build intentionally keeps the original site structure closer to the Wix version while improving cleanliness, contrast, image use, and responsiveness.

---

## Archived Source: `00_START/context-history.md`

# Context History

## Business

Checkmark Audio is a recording studio in Albuquerque, New Mexico.

Public contact details currently used:

- Address: 5413 Lomas Blvd, Albuquerque, NM 87110
- Phone: 505-267-0558
- Email: CheckmarkAudio@gmail.com

Core services reflected from the existing site:

- Recording
- Mixing
- Mastering
- Studio rental
- Artist promotion
- Artist photography
- Music education
- Gift cards
- Booking / consultation

## Migration Goal

Move the public marketing website off Wix and onto a GitHub-hosted static site, while preserving enough of the current site structure that clients are not confused by the transition.

## Design Notes

- The first draft felt too changed and too chunky.
- The preferred near-term direction is: keep the current Wix layout/order, make it cleaner, more professional, darker in places, with white/gray breaks like the existing site.
- Typography should not feel oversized or cartoonish.
- The hero should use a full-page/header image treatment.
- Testimonials should feel like floating quote elements rather than heavy blocks.

## Asset Notes

- `02_ASSETS/library/` contains the tracked source image library with human-readable names.
- `99_ARCHIVE/ignored-local/original-assets/` is now only temporary local intake and is intentionally ignored by Git.
- `02_ASSETS/production/` contains deployable optimized files with professional names.
- More final asset selection is still needed before launch, but the source image library is now browseable and tracked.

## 2026-06-25 Website Completion Handoff

The website completion planning system was moved into the correct repo, `CheckmarkAudio.com`, under `01_WEBSITE/`. Treat the older `CHECKMARK_SCHOOL` copy as a wrong-folder archive/reference only.

Active source-of-truth DOCX:

- `01_WEBSITE/99_SOURCES/CHECKMARK_AUDIO_WEBSITE_SOURCE_OF_TRUTH.docx`

Handler rules:

- `01_WEBSITE/00_INDEX/source-of-truth-rule.md`
- `01_WEBSITE/00_INDEX/handler-filing-protocol.md`

Current checklist format for quick factual answers:

- Put the factual answer on the checklist line.
- Use `SEO:` for where the answer already appears publicly.
- Use `SEO gaps:` with nested checkboxes for missing SEO/web-presence opportunities.
- Do not use `Source:` on the main checklist. The approved source pool is Bridget, Gavin, and the current `checkmarkaudio.com` site.

Current verified example:

- `Correct address: 5413 Lomas Blvd NE, Albuquerque, NM, USA`
- `SEO: Current website page title/metadata includes this address.`
- `SEO gaps:` includes footer, Google Business Profile/Maps, booking flow/client emails, and LocalBusiness schema.

---

## Archived Source: `00_START/site-structure.md`

# Site Structure

## Version 1 Launch Structure

The first GitHub Pages launch is a static single-page site:

```text
/
```

The homepage includes the major sections needed to replace the current Wix site quickly:

- Contact/header
- Navigation
- Hero
- Testimonial
- Albuquerque Recording Studio / affiliation strip
- Video placeholder
- Recording / Mixing / Mastering
- Gift card callout
- Gallery
- Booking/contact
- Footer

## Included Static Support Files

```text
index.html
404.html
robots.txt
sitemap.xml
CNAME
```

## Future Page Split

After the Wix cutover is stable, split the site into dedicated pages if needed:

```text
/services/
/studios/
/gallery/
/about/
/booking/
/gift-card/
```

For launch speed, the single-page structure is acceptable because it preserves the core client-facing information and keeps deployment simple.

---

## Archived Source: `00_START/production-readiness.md`

# Production Readiness

## Ready

- `index.html` is the active static homepage.
- `CNAME` is present for `CheckmarkAudio.com`.
- `.nojekyll` is present so GitHub Pages serves static files directly.
- Production assets are available under `02_ASSETS/production/`.
- Full-resolution source assets are kept locally and ignored by Git.
- The site can be hosted by GitHub Pages as a static site.

## Still Needed Before Launch

- Review and refine UI polish.
- Confirm final navigation labels.
- Confirm booking destination.
- Confirm gift card destination.
- Confirm social media URLs.
- Confirm whether the new site needs multiple pages or a single homepage first.
- Capture and organize Wix video assets.
- Replace placeholder partner/affiliation text with real logo assets where desired.
- Run final mobile and desktop visual QA.
- Commit the production files.
- Push to GitHub.
- Enable GitHub Pages.
- Point DNS / custom domain when ready.

## Launch Principle

Keep Wix live until the GitHub Pages version is visually approved, all links are checked, and the custom domain has been tested.

---

## Archived Source: `00_START/asset-system.md`

# Asset System

## Folder Strategy

Use this structure for production assets:

```text
assets/
  library/
    public-crawl/
    original-uploads/
  production/
    brand/
    hero/
    gallery/
    video/
```

Use `02_ASSETS/library/` for tracked source-library images with readable names. Use `02_ASSETS/production/` for optimized deployable files selected for the active website.

Keep temporary raw downloads local only:

```text
99_ARCHIVE/ignored-local/original-assets/
```

`99_ARCHIVE/ignored-local/original-assets/` is ignored by Git and should be treated as intake only. Move usable website images into `02_ASSETS/library/` after deduping and renaming.

## Naming Convention

Asset names should use a numeric prefix plus a short visual description:

```text
[number]-[brief-description].[ext]
```

Rules:

- Use lowercase.
- Use hyphens.
- Use two-digit numeric prefixes inside each folder.
- Keep page/usage area in the folder path when an asset is production-ready: `hero`, `gallery`, `brand`, `video`.
- Keep broader source images in `02_ASSETS/library/public-crawl/` or `02_ASSETS/library/original-uploads/`.
- Use simple subject names: `studio-sign`, `control-room`, `vocal-booth`, `microphone`.
- Do not use raw Wix IDs for production asset filenames.

## Current Production Assets

```text
02_ASSETS/production/brand/00-checkmark-audio-logo-mark.png
02_ASSETS/production/hero/00-studio-sign-hero.jpg
02_ASSETS/production/video/00-studio-video-still.jpg
02_ASSETS/production/gallery/00-control-room-instruments.jpg
02_ASSETS/production/gallery/01-live-room.jpg
02_ASSETS/production/gallery/02-blue-microphone-pop-filter.jpg
02_ASSETS/production/gallery/03-artist-portrait.jpg
02_ASSETS/production/gallery/04-control-room.jpg
02_ASSETS/production/gallery/05-microphone-pop-filter.jpg
02_ASSETS/production/gallery/06-synth-keyboards.jpg
02_ASSETS/production/gallery/07-compressor-rack.jpg
02_ASSETS/production/gallery/08-vocal-booth-artist.jpg
```

## Source Asset Inventory

- Tracked source library: 91 unique image files.
- Public CheckmarkAudio.com crawl: 90 cleaned files in `02_ASSETS/library/public-crawl/`.
- Unique authenticated Wix Media Manager upload: 1 file in `02_ASSETS/library/original-uploads/`.
- Current production optimized set: about 2.1 MB.
- Current source audit found 0 exact duplicate groups after deduping the old authenticated extraction against the public crawl.
- Current source audit found 0 video files.

## Next Asset Tasks

- Pick final hero candidates.
- Pick final gallery candidates.
- Gather video assets from Wix video library.
- Create `02_ASSETS/production/social/` if social preview images are created.
- Create `02_ASSETS/production/team/` if team headshots are used.

---

## Archived Source: `00_START/source-asset-inventory.md`

# Source Asset Inventory

Generated: 2026-06-25T11:24:56.016Z

## Summary

- Source archive: 91 files, 375.75 MB
- Source images: 91
- Source videos: 0
- Source other files: 0
- Production assets: 12 files, 2.13 MB
- Duplicate source hash groups: 0

## Production Assets

- `02_ASSETS/production/brand/00-checkmark-audio-logo-mark.png` (0.07 MB)
- `02_ASSETS/production/gallery/00-control-room-instruments.jpg` (0.289 MB)
- `02_ASSETS/production/gallery/01-live-room.jpg` (0.234 MB)
- `02_ASSETS/production/gallery/02-blue-microphone-pop-filter.jpg` (0.143 MB)
- `02_ASSETS/production/gallery/03-artist-portrait.jpg` (0.221 MB)
- `02_ASSETS/production/gallery/04-control-room.jpg` (0.075 MB)
- `02_ASSETS/production/gallery/05-microphone-pop-filter.jpg` (0.08 MB)
- `02_ASSETS/production/gallery/06-synth-keyboards.jpg` (0.097 MB)
- `02_ASSETS/production/gallery/07-compressor-rack.jpg` (0.111 MB)
- `02_ASSETS/production/gallery/08-vocal-booth-artist.jpg` (0.129 MB)
- `02_ASSETS/production/hero/00-studio-sign-hero.jpg` (0.394 MB)
- `02_ASSETS/production/video/00-studio-video-still.jpg` (0.283 MB)

## Duplicate Source Groups

No exact duplicate source files found by SHA-256.

---

## Archived Source: `00_START/video-asset-capture.md`

# Wix Video Asset Capture

The image asset capture is complete. Video files were not present in the current source inventory, so videos need a focused Wix Media Manager capture.

## Goal

Create:

```text
99_ARCHIVE/ignored-local/wix-export/videos.har
```

Then run the existing extractor/downloader against it.

## Browser Steps

1. Open Wix Media Manager while logged in.
2. Go to the Videos section or filter the media library to videos.
3. Open Chrome DevTools.
4. Go to the Network tab.
5. Clear the Network request list.
6. Make sure All is selected, not only Img or Media.
7. Refresh the Wix Media Manager page.
8. Return to the Videos section if Wix resets the view.
9. Scroll through the full video library slowly so every item loads.
10. Right-click a request row.
11. Choose Copy > Copy all as HAR (sanitized).
12. Open TextEdit.
13. Choose Format > Make Plain Text.
14. Paste.
15. Save as:

```text
/Users/bridges/GITHUB/CheckmarkAudio.com/99_ARCHIVE/ignored-local/wix-export/videos.har
```

## Extraction Commands

After `videos.har` exists:

```sh
cd /Users/bridges/GITHUB/CheckmarkAudio.com
node 98_TOOLS/extract-wix-media.mjs 99_ARCHIVE/ignored-local/wix-export/videos.har 99_ARCHIVE/ignored-local/wix-export/videos
node 98_TOOLS/download-wix-media.mjs 99_ARCHIVE/ignored-local/wix-export/videos/wix-media-urls.txt 99_ARCHIVE/ignored-local/original-assets/videos
node 98_TOOLS/audit-assets.mjs
```

## Current Status

- Video HAR file: not captured yet.
- Source audit currently shows 0 video files.
- Next action requires a logged-in Wix browser session.

---

## Archived Source: `00_START/website-revamp-checklist.md`

# Checkmark Audio Website Revamp Checklist

This is the working checklist for rebuilding CheckmarkAudio.com outside of Wix and migrating it to GitHub.

For the newer detailed website completion system, use `01_WEBSITE/00_INDEX/completion-playbook-master-checklist.md`. This file remains the original migration checklist for the static Wix-replacement baseline.

## Current Status

- Static site draft exists in `index.html`.
- Historical blueprint wrapper is archived at `99_ARCHIVE/design-drafts/website-design-drafts/historical-static-previews/02-static-site-blueprint.html`.
- Git repository has been initialized locally.
- GitHub Pages support files are started with `CNAME` and `README.md`.
- First media extraction pass is complete for images/photos.
- The current-site modernized preview has been promoted into `index.html` as the active Wix-replacement build.
- More professional UI polishing is still needed, but the site now has a deployable static baseline.

## Media Gathering

- [x] Create local tooling to extract Wix media URLs from a HAR file.
- [x] Create local tooling to download extracted media URLs.
- [x] Capture first Wix Media Manager HAR.
- [x] Extract 29 Wix media URLs from the first HAR.
- [x] Download 29 original-quality media files into `99_ARCHIVE/ignored-local/original-assets/`.
- [x] Confirm first extracted set is mostly high-resolution images/photos.
- [x] Crawl public CheckmarkAudio.com pages for additional media references.
- [x] Download 90 public-site Wix media files into `99_ARCHIVE/ignored-local/original-assets/public-crawl/`.
- [x] Move unique source images into tracked library folders under `02_ASSETS/library/`.
- [x] Establish organized production asset naming under `02_ASSETS/production/`.
- [x] Audit source and production assets into `04_MIGRATION/asset-inventory.json`.
- [x] Create readable source asset inventory at `00_START/source-asset-inventory.md`.
- [x] Document focused Wix video capture workflow in `00_START/video-asset-capture.md`.
- [ ] Capture Wix video library HAR as `99_ARCHIVE/ignored-local/wix-export/videos.har`.
- [ ] Extract video URLs from the video HAR.
- [ ] Download video originals into `99_ARCHIVE/ignored-local/original-assets/` or `99_ARCHIVE/ignored-local/original-assets/videos/`.
- [x] Rename source image library files to human-readable numeric names.
- [x] Create optimized web versions in `assets/` for the active homepage.
- [ ] Decide which photos belong in hero, studio, gallery, team, and background sections.

## Content Needed

- [ ] Final service list.
- [ ] Pricing or package structure, if public-facing.
- [ ] Updated booking flow or preferred scheduling provider.
- [ ] Gift card link or decision to remove gift cards.
- [ ] Social links.
- [ ] Testimonials/reviews to feature.
- [ ] Updated team names, titles, bios, and headshots.
- [ ] Studio A and Studio B descriptions.
- [ ] Artist promotion details.
- [ ] Music education details.
- [ ] Contact preferences: phone, email, form, booking link, or all of the above.

## Design Preview Work

- [ ] Build alternate preview concept 1: clean editorial studio site.
- [ ] Build alternate preview concept 2: darker premium audio brand.
- [ ] Build alternate preview concept 3: bold artist-first/music-culture direction.
- [x] Build current-site modernized preview that keeps the Wix homepage structure closer to the original. Archived at `99_ARCHIVE/design-drafts/website-design-drafts/historical-static-previews/00-current-site-modernized-preview.html`.
- [x] Build MAK-inspired editorial/luxury preview using Checkmark Audio media. Archived at `99_ARCHIVE/design-drafts/website-design-drafts/historical-static-previews/01-editorial-mak-inspired-preview.html`.
- [ ] Compare mobile hero treatments.
- [ ] Compare navigation styles.
- [ ] Compare gallery layouts using extracted original photos.
- [ ] Choose final visual direction before polishing implementation.
- [ ] Replace the current first-pass preview only after `CHECKMARK_AUDIO_WEBSITE_SOURCE_OF_TRUTH.docx` is filled enough to guide the final build.

## Technical Build

- [x] Create static HTML/CSS/JS baseline.
- [x] Promote the current-site modernized preview to `index.html`.
- [x] Create local preview path.
- [x] Decide whether to keep the site static or move to a framework such as Astro/Next/Vite.
- [x] Add final page structure: home, services, studios, gallery, about, contact/booking.
- [x] Add SEO metadata.
- [x] Add Open Graph/social preview images.
- [x] Add LocalBusiness structured data.
- [x] Add launch support files: `404.html`, `robots.txt`, `sitemap.xml`.
- [ ] Add analytics, if desired.
- [ ] Add contact form backend or use mailto/scheduling link.
- [ ] Test desktop layouts.
- [ ] Test mobile layouts.
- [ ] Check accessibility basics.
- [ ] Compress final production assets.

## Wix Migration

- [ ] Finish gathering all images.
- [ ] Finish gathering all videos.
- [ ] Export or manually copy current page text where needed.
- [ ] Confirm all external integrations: booking, gift cards, social, maps, email.
- [ ] Confirm DNS plan for moving `CheckmarkAudio.com` to GitHub Pages or another host.
- [ ] Keep Wix live until the new site is reviewed and ready.

## GitHub / Deployment

- [ ] Commit current rebuild files.
- [ ] Create GitHub repository or connect to existing repo.
- [ ] Push local repo to GitHub.
- [ ] Enable GitHub Pages.
- [ ] Configure custom domain.
- [ ] Verify HTTPS.
- [ ] Final launch check before DNS cutover.

---

## Archived Source: `00_START/repo-organization-baseline-plan.md`

# Repo Organization Baseline Plan

Generated: 2026-06-25

## Purpose

This plan captures how to bring the transferred website-completion files into a clean baseline inside the correct `CheckmarkAudio.com` repo.

The goal is not to start building new pages yet. The goal is to make sure the repo has one clear source of truth, one clean folder map, and no confusing leftovers from the old `CHECKMARK_SCHOOL` location.

## Current Repo Baseline

The original `CheckmarkAudio.com` repo is a static GitHub Pages website migration:

- `index.html` is the active deployable homepage.
- `404.html`, `robots.txt`, `sitemap.xml`, `CNAME`, and `.nojekyll` support GitHub Pages.
- `02_ASSETS/production/` contains deployable optimized website assets.
- `04_MIGRATION/` and `98_TOOLS/` support Wix media extraction and asset audits.
- `docs/` contains short migration context, production-readiness notes, asset rules, site structure, and project history.
- `WEBSITE_REVAMP_CHECKLIST.md` remains the older high-level website revamp checklist.

## Transferred File Baseline

The transferred system now lives in:

```text
01_WEBSITE/
03_EMAIL_TEMPLATES/
```

`01_WEBSITE/` is a planning encyclopedia for the full post-Wix website. It is organized by subject:

- `00_INDEX/` for master checklists, handler rules, launch roadmap, status dashboards, and source-of-truth rules.
- `01_PAGES/` for core website page requirements.
- `02_SERVICES/` for service-specific planning.
- `03_STUDIOS/` for Studio A, Studio B, and room comparison planning.
- `04_PROOF/` for portfolio and testimonial needs.
- `05_BRAND/` for about/team/brand story planning.
- `99_ARCHIVE/reference/checkmark-school/` for the studio-site link-out/pathway to the separate Checkmark Audio School site.
- `07_POLICIES/` for policy requirements.
- `08_SEO/` for metadata, schema, local SEO, analytics, and URL planning.
- `09_ASSETS/` for asset naming and inventory planning.
- `10_PHASES/` for phased growth and launch notes.
- `99_SOURCES/` for source documents and source summaries.

`03_EMAIL_TEMPLATES/` contains EmailJS-ready HTML templates for internal inquiry notifications, client inquiry confirmations, and booking confirmations.

## Source Of Truth Rule

There should be exactly one active website-completion DOCX:

```text
01_WEBSITE/99_SOURCES/CHECKMARK_AUDIO_WEBSITE_SOURCE_OF_TRUTH.docx
```

The legacy guide should remain reference-only:

```text
99_ARCHIVE/reference/legacy-docs/LEGACY_BRIDGET_WEBSITE_COMPLETION_GUIDE.docx
```

Do not edit Desktop originals, old `CHECKMARK_SCHOOL` copies, or duplicate DOCX files unless Bridget explicitly asks for a new snapshot or replacement.

## Issues Found During Audit

1. The current branch is `main`, with transferred files unstaged.
2. The transfer added references to the new source-of-truth DOCX in `README.md`, `00_START/README.md`, `00_START/context-history.md`, and `00_START/project-history.md`.
3. Resolved: imported the missing `09_BRAND_UI/` reference material into `99_ARCHIVE/reference/imported-assets/imported-brand-ui/`.
4. Resolved: imported the referenced `12_CONVERSIONS/` material into `99_ARCHIVE/reference/imported-assets/imported-conversions/`.
5. Resolved: imported limited school curriculum/syllabus references into `99_ARCHIVE/reference/checkmark-school/references/` as external reference-only context.
6. `01_WEBSITE/README.md` is the only important Markdown file in the transferred folder without frontmatter.
7. `WEBSITE_REVAMP_CHECKLIST.md` and `01_WEBSITE/00_INDEX/completion-playbook-master-checklist.md` overlap in purpose but serve different eras: the former is the original migration checklist, and the latter is the full website completion operating checklist.

## Organization Decision

Keep both systems, but give each a clear job:

- Original repo docs explain the current static Wix-replacement baseline.
- `01_WEBSITE/` explains the larger website completion and post-Wix growth plan.
- `03_EMAIL_TEMPLATES/` stays at repo root because these are implementation artifacts the website can use directly.
- The DOCX in `99_SOURCES/` remains the active business/planning checklist.

## Cleanup Plan

### Phase 1: Lock The Baseline

- Keep transferred files unstaged until the chat-session text is reviewed.
- Confirm that `CHECKMARK_SCHOOL` is no longer the working repo for website completion.
- Confirm that the active repo is `/Users/bridges/GITHUB/CheckmarkAudio.com`.
- Commit the transfer only after path issues and source-of-truth wording are cleaned up.

### Phase 2: Fix Broken Or Imported Paths

- Keep imported brand/UI reference material under `99_ARCHIVE/reference/imported-assets/imported-brand-ui/`.
- Keep imported conversion reference material under `99_ARCHIVE/reference/imported-assets/imported-conversions/`.
- Keep imported school reference files under `99_ARCHIVE/reference/checkmark-school/references/` as reference-only material. The real school project still belongs in `CHECKMARK_SCHOOL` until its own website/repo plan changes.
- Promote only approved public-facing, optimized assets into `02_ASSETS/production/`.

### Phase 3: Normalize Documentation

- Add frontmatter to `01_WEBSITE/README.md`.
- Add a short note in `WEBSITE_REVAMP_CHECKLIST.md` pointing readers to `01_WEBSITE/00_INDEX/completion-playbook-master-checklist.md` for the newer completion system.
- Keep `00_START/project-history.md` as the chronological record.
- Keep `00_START/context-history.md` as the short operational memory.

### Phase 4: Separate Planning From Implementation

- Planning stays in `01_WEBSITE/`.
- Current website implementation stays at repo root while the site is static.
- Production assets stay in `02_ASSETS/production/`.
- Tracked source-library images stay in `02_ASSETS/library/`.
- Temporary raw downloads stay local-only in ignored `99_ARCHIVE/ignored-local/original-assets/`.
- EmailJS templates stay in `03_EMAIL_TEMPLATES/` until they are wired into a form.

### Phase 5: Prepare For Build Work

- Finish the DOCX checklist answers before large website implementation.
- Prioritize homepage, services, pricing, booking, contact, about, and portfolio.
- Keep the first deployable goal conservative: a clean static site that can replace Wix safely.
- Only split into many pages after navigation, content, pricing, contact info, and booking flow are approved.

## Recommended Folder Rules Going Forward

- `docs/` is short repo memory and migration status.
- `01_WEBSITE/` is the detailed website planning encyclopedia.
- `01_WEBSITE/99_SOURCES/` is for source docs, not everyday notes.
- `01_WEBSITE/10_PHASES/` is a logbook, not the main filing cabinet.
- `99_ARCHIVE/design-drafts/website-design-drafts/` is for archived visual concepts and historical previews only.
- `02_ASSETS/library/` is for tracked source images that may be selected later.
- `02_ASSETS/production/` is for optimized deployable assets only.
- `03_EMAIL_TEMPLATES/` is for paste-ready or implementation-ready email templates.
- Do not create parallel folders for the same topic unless the existing folder map cannot hold the work.

## Next Safe Move

After the recent chat-session text is reviewed, clean the imported path issues first. The first concrete edits should be small:

1. Add frontmatter to `01_WEBSITE/README.md`.
2. Add a cross-reference from the older revamp checklist to the newer completion checklist.
3. Review imported reference assets and decide what, if anything, should be promoted into `02_ASSETS/production/`.

Then commit the transfer as a clean baseline before new website build work begins.
