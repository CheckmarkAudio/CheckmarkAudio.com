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
