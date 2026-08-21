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
