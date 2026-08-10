---
title: Project State
status: active
updated: 2026-08-10
---

# Project State

## Project North Star — Do Not Reinterpret

Checkmark Audio is replacing its current Wix-hosted marketing website with an independent website built and maintained from this repository. Wix is the temporary production host while the replacement is built, reviewed, and tested; it is not the long-term website plan. The custom domain moves only after explicit approval and a successful cutover check.

The replacement-site inquiry path includes Checkmark Audio's branded EmailJS emails plus an intentionally read-only Cal.com calendar. New clients use the inquiry form. Future established-client self-booking will be built behind shared Supabase client accounts.

This file is the short operational front door for every new session. `DOCUMENT_MAP.md` defines the required reading, short document names, roles, and conflict order. `NEXT_STEPS.md` holds current actions, `SEO_STRUCTURE.md` holds the SEO-first page and file structure, `PLATFORM_ARCHITECTURE.md` holds the cross-repo/Supabase decisions for future client accounts, and `CHECKMARK_AUDIO_WEBSITE_SOURCE_OF_TRUTH.docx` remains the only active source-of-truth checklist.

## Current Direction

The current design direction is `MOCKUP/index.html` (moved out of the repository root so an internal, non-authoritative draft can't be mistaken for the live build), promoted from the July 2 working draft after Bridget and Gavin chose to improve that version instead of starting over. It is explicitly not to be used to influence decisions until Bridget starts the official build — see `MOCKUP/index.html`'s on-page banner and root `README.md`.

On August 8, Bridget approved the typography character and deep-black, warm-cream, champagne-gold, micro-red color direction developed in `DRAFTS/active/website-visual-concepts/2026-07-24/` for the active brand guide. On August 10, she confirmed `CM- LOGO.png` as the canonical white logo linework. Exact-mask white, black, and gold-gradient PNGs now form the approved web-preparation set in `MEDIA/IMAGES/`; `SEO/LOGO_ASSET_MANIFEST.md` records validation and prohibited substitutes. The logo shown in generated mockups and `CMA_Logo_Black.png` are prohibited. Exact production font files still require final selection. The visual website concept remains a draft and does not replace `MOCKUP/index.html` without a separate promotion decision.

The site should lead with three forms of proof:

1. Who we work with.
2. What we sound like.
3. What the studio and work look like.

The presentation should feel modern, editorial, professional, and distinctly Checkmark Audio. It should alternate light and dark sections, avoid oversized chunky typography, use real studio media, and make booking, calling, and texting obvious.

## Current Build

- `index.html` is the only active homepage.
- `services.html` contains service details.
- `team.html` contains the current team-profile placeholders.
- `site.css` contains shared styling.
- `DRAFTS/reference/previous-scrolling-consultation-design.html` preserves the prior self-contained scrolling homepage and email-consultation flow as a protected feature reference.
- The homepage now moves from a concise hero to a verified review carousel, then a synchronized raw/mixed listening comparison before services.
- Homepage sections alternate flat white and black backgrounds with restrained gold accents, bright crimson primary actions, and red-magenta hover states; yellow-to-black background gradients were removed.
- The site is still an internal draft and remains `noindex`.
- Wix stays live until this replacement is approved, tested, and ready for DNS cutover.

## Current Content State

- Contact details and core service categories are documented.
- The approved starting-price model is vocal recording from $50/hour, general studio/engineering from $65/hour, and band recording from $75/hour; project work is quoted. The active public copy still needs a consistency check before launch.
- The inquiry form is live and sends real EmailJS email (service/template IDs configured in `index.html`); the embedded Cal.com calendar is intentionally read-only (`inert`) rather than self-bookable — see `PLATFORM_ARCHITECTURE.md` for why. Spam protection beyond the honeypot field is still open.
- The before/after player uses two synchronized audio layers so visitors can switch between raw and mixed without restarting. A time-aligned audio pair and approved credits are still needed.
- The carousel uses verified five-star Yelp and BBB review excerpts. Verified Google review text, attribution, and final display approval are still needed.
- The active pages have unique draft titles and descriptions, one H1 each, descriptive image text, and homepage `WebSite` plus `LocalBusiness` schema using confirmed facts only. Canonicals, public social-preview metadata, sitemap expansion, analytics, and Search Console remain launch tasks.
- Team names and roles are represented, while photos, biographies, specialties, credits, and social links remain incomplete.
- Studio A and Studio B need final facts, gear details, photo selections, and approved starting prices.

## Repository Simplification

On July 16, 2026, the repo was reduced from seven numbered work areas and eleven nested website-planning categories to six obvious folders. The prior planning and document structure was preserved under:

`ARCHIVE/project-system-before-simplification-2026-07-16/`

Active website media was transferred into `MEDIA/` and renamed under the approved catalog convention. Important information was not deleted. The archive is evidence and history; this folder is the active navigation layer.

## Project History

- May 20: Wix migration and local static-site work began; Wix media was gathered and GitHub Pages was established.
- June 25: the website-completion DOCX and consolidated planning system became the source of truth.
- July 2: the current full website draft, service page, team placeholders, review carousel, and before/after audio mechanics were assembled.
- July 16: Bridget and Gavin selected the July 2 draft as the version to improve and approved the simplified six-folder repository.
- July 17: the promoted homepage was revised into a proof-first light/dark sequence with music demos and multiple reviews near the top, a flatter black-white-gold palette, and shorter copy across the active pages.
- July 18: the statistic and proof-link bars were removed; reviews were converted to a verified carousel; the listening section became a synchronized Raw/Mixed A-B player; and redundant homepage copy was reduced.
- July 18: the first draft-safe SEO pass added concise page-specific metadata, confirmed-fact homepage schema, and explicit image loading dimensions while preserving the draft indexing block.
- July 22: Bridget reconfirmed that this repository is building the Wix replacement and selected Cal.com plus the existing branded EmailJS templates as the replacement-site booking direction.
- July 26: the inquiry form and Cal.com calendar went live with real EmailJS sends; after iterating on layout, the calendar was made intentionally read-only (`inert`) rather than self-bookable, per Gavin's direction that new clients go through the inquiry form while established clients get self-booking later through a client-accounts system. That system will run on a shared Supabase backend with Checkmark Audio's internal staff tool (two separate repos, one backend) — full plan in `PLATFORM_ARCHITECTURE.md`.
- July 30: Bridget made SEO a primary planning lens and directed the project toward one authoritative canonical page per major service. Proposed Albuquerque service paths and the located Wix-download intake are recorded in `SEO_STRUCTURE.md`; final naming and structure remain pending approval of the reconciled page-intent map.
- July 30: the SEO Master Plan and Gavin's SEO Training Manual were reviewed together. Both are now mandatory inputs with distinct roles under `DOCUMENT_MAP.md`; the Source of Truth remains the only active checklist. Bridget confirmed that the school stays separate and approved the $50/$65/$75 starting-price model.
- July 30: media SEO implementation began. The 124 previously cataloged images remain in the active `MEDIA/` library; 478 unreviewed Wix files were moved without deletion or modification into the ignored local intake, organized as 386 images, 24 audio files, 37 videos, 27 RAW files, and 4 documents. An integrity audit found that 427 are zero-byte placeholders; only 31 images, 9 audio files, and 11 videos currently contain data, and one nonempty video pair is an exact duplicate. `MEDIA_SEO_PLAN.md` controls recovery, classification, permission review, naming, factual metadata, optimization, promotion, and page assignment.
- July 31: repeated small-batch Wix downloads recovered most missing media. All Wix-generated batch folders were consolidated into flat protected intake folders. The usable set now includes 504 decodable images, 20 nonempty audio files, 41 nonempty videos, and 5 documents; 107 zero-byte placeholders remain. Exact duplicates were preserved and identified for the human review and SEO rename queue.
- July 31: Bridget clarified that the manual's simple flat working structure and public filename formula are authoritative. The manual-derived SEO, content, and brand references were first created under `docs/`, then consolidated into one root-level `SEO/` folder at Bridget's direction to eliminate unnecessary nesting. All 628 readable images, 20 audio files, and 41 videos now live directly in their three `MEDIA/` folders; 107 zero-byte files are isolated in `MEDIA/UNREADABLE`. Full visual contact-sheet reviews replaced camera-number, hash-only, workflow-noise, sentence-length, one-word, project-shorthand, and underspecified image names with concise factual names. Local studio, service, room, and exterior images include `albuquerque-nm` selectively where that context is truthful and useful; location terms are not forced onto decorative logos, third-party marks, or artwork. Active website references were updated and validated.
- July 31: Checkmark Audio logo naming was standardized: every image visibly representing the Checkmark Audio logo now includes both `checkmark-audio` and `logo`, including the gold transparent logo variants. Third-party and separate-brand marks retain their real identities. The next SEO Training Manual gate is media qualification and page assignment before optimization, embedded metadata, or contextual alt-text writing.
- July 31: Claude's `usage_scope` and `Gallery` qualification updates were accepted. The first full qualification inventory now covers all 796 current media records with stable IDs, proposed page assignments, people/third-party review flags, 32 clear separate-school scope candidates, and proposed keeper/alternate choices for 127 exact-duplicate groups. No item was granted public permission automatically. The current gate is human review in `MEDIA/MEDIA_QUALIFICATION_REVIEW.xlsx`, with approved decisions preserved in `MEDIA/MEDIA_METADATA.csv` before optimization or alt-text work.
- August 2: A full-file SHA-256 audit deleted 116 byte-identical readable-image copies across 111 groups, retaining one complete copy from every group. No similar angle, crop, edit, resolution, or metadata variant was removed. The library now contains 506 readable images with 506 unique hashes; `MEDIA/EXACT_DUPLICATE_DELETION_LOG.csv` records every retained and deleted path. The metadata CSV and formatted review workbook were synchronized to all 674 current media records, including two previously uncataloged current images.
- August 8: Bridget approved the editorial-serif, expressive-italic, condensed-label typography direction and the deep-black, warm-cream, champagne-gold, micro-red color character for the brand guide. The generated mockup logo was explicitly rejected. `SEO/BRAND_STYLE_GUIDE.md` now records the approved direction, logo prohibition, and remaining font/license/logo decisions; the related website concept remains in `DRAFTS/` until separately promoted.
- August 10: Bridget designated `CM- LOGO.png` as the canonical logo geometry and rejected `CMA_Logo_Black.png` because its lower microphone curve is incorrect. Exact-alpha white, black, and gold-gradient PNG variants were added to `MEDIA/IMAGES/`; the active brand guide and `SEO/LOGO_ASSET_MANIFEST.md` now label approved, canonical, working, pending, placeholder, and prohibited material for clear development and pull-request handoff.

## Work Next

Use [`DOCUMENT_MAP.md`](DOCUMENT_MAP.md) for document roles and conflict handling, [`NEXT_STEPS.md`](NEXT_STEPS.md) for the active checklist, [`SEO_STRUCTURE.md`](SEO_STRUCTURE.md) for SEO-first page/file planning, [`MEDIA_SEO_PLAN.md`](MEDIA_SEO_PLAN.md) for media intake and optimization, and [`WEBSITE_PLAN.md`](WEBSITE_PLAN.md) for earlier build detail that has not been superseded.
