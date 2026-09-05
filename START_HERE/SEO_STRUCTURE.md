---
title: SEO-First Site Structure
status: planning_pending_page_intent_approval
updated: 2026-08-21
---

# SEO-First Site Structure

This file records the current direction for making search visibility a primary lens for the replacement website without weakening accuracy, accessibility, conversion, brand presentation, booking, performance, or source-of-truth controls.

The SEO Master Plan and SEO Training Manual have been reviewed together. Their roles and current project overrides are defined in `DOCUMENT_MAP.md`. The paths below remain proposed canonical targets, not authorization to rename active files, publish pages, or create redirects.

## Core Page Rule

Each major service should have one authoritative, useful canonical page rather than several thin pages repeating similar keywords. A service page must help a real client understand the service, hear or see relevant proof, evaluate fit, and take the correct booking or inquiry action.

Do not create near-duplicate location pages, doorway pages, keyword-stuffed variants, or several pages competing for the same intent. Supporting pages should link to the authoritative service page rather than reproduce it.

## Proposed Canonical Service Paths

| Major topic | Proposed canonical path | Current state |
| --- | --- | --- |
| Recording studio | `/recording-studio-albuquerque` | Proposed; content and final URL pending SEO review |
| Vocal recording | `/vocal-recording-albuquerque` | Proposed; content and final URL pending SEO review |
| Mixing and mastering | `/mixing-mastering-albuquerque` | Proposed; content and final URL pending SEO review |
| Music production | `/music-production-albuquerque` | Proposed; content and final URL pending SEO review |
| Band recording | `/band-recording-albuquerque` | Proposed; content and final URL pending SEO review |
| Podcast recording | `/podcast-recording-albuquerque` | Proposed; content and final URL pending SEO review |

School search intent belongs to the separate school website. CheckmarkAudio.com may include a concise introduction and link, but it should not publish a competing `/audio-engineering-school-albuquerque` service page.

Other possible service targets, including artist photography or artist media, remain undecided until the SEO document, actual search intent, available proof, and business priorities are reviewed.

## Page and File Naming Rules

- Use short, descriptive, lowercase, hyphen-separated public paths.
- Give each major search intent one canonical destination.
- Choose final URLs before renaming active HTML files.
- The repository root contains the active in-development homepage and supporting pages. The proposed paths above do not authorize renaming them until the page-intent map is approved.
- Do not rename support, system, email-template, archive, or internal planning files merely to add keywords; only public-facing page and media names should reflect public search intent.
- Preserve redirects from every replaced Wix URL and any replacement-site URL changed after publication.
- Update internal links, navigation, canonicals, sitemap entries, structured data, analytics references, and tests in the same pass as any approved page rename.
- Do not put every keyword into every filename. Names should describe the page or asset naturally.
- Page titles, headings, copy, alt text, captions, and structured data must remain accurate and useful rather than mechanically repeating the URL phrase.

## Implementation Sequence

1. Reconcile the SEO Master Plan and SEO Training Manual against the Source of Truth and confirmed current decisions using `DOCUMENT_MAP.md`.
2. Build a page-intent map showing the audience need, primary query theme, canonical page, supporting proof, and conversion action for each proposed page.
3. Compare the proposed map with the current Wix URLs and all ten replacement-site root content pages.
4. Approve the final page list and URL convention.
5. Create a complete old-to-new redirect map before renaming or removing public pages.
6. Rename or create pages in one controlled pass, updating all references at the same time.
7. Add unique titles, descriptions, headings, canonicals, social-preview metadata, structured data, and sitemap entries.
8. Check for duplicated intent, thin content, broken links, redirect chains, inaccessible interactions, and mobile layout problems.
9. Keep the replacement blocked from indexing until the full launch review is approved.

## Wix Media Intake Found

The primary downloaded Wix export candidate is:

`/Users/bridges/Downloads/Site Files (1)`

Inventory observed on 2026-07-30:

- 425 files totaling approximately 1.21 GB.
- 283 JPG, 12 JPEG, 60 PNG, 3 WebP, and 1 AVIF image.
- 27 ARW camera RAW files.
- 19 MP4 and 5 MOV video files.
- 8 MP3 and 3 WAV audio files.
- 4 PDF files.

Related archives found in `/Users/bridges/Downloads/`:

- `Site Files (1).zip` — approximately 1.2 GB; appears to correspond to the extracted folder above.
- `Site Files.zip` — approximately 261 MB; 45 files.
- `DemoTracks.zip` — approximately 127 MB.
- `Before After.zip` — approximately 88 MB; two WAV files.
- `images.zip` — approximately 35 MB; 23 image files.

These downloads must not be bulk-copied into `MEDIA/`. First:

1. Compare hashes against `MEDIA/MEDIA_CATALOG.md` and identify exact duplicates.
2. Separate website-owned material from unrelated, private, licensed, school-only, or unapproved client material.
3. Confirm credits and public-use permission for people, client work, music, logos, and testimonials.
4. Select full-resolution source files and assign internal catalog records.
5. Create optimized web variants only for approved site use.
6. Name approved files with Gavin's formula from `SEO/ASSET_NAMING_RULES.md`.
7. Regenerate the media inventory and update every website reference in the same pass.

## Pending Decisions

- Final approval of the six proposed canonical paths.
- Whether mixing and mastering should remain one authoritative page or become two pages only if research proves distinct intent and each page can be substantial.
- Whether artist photography or artist-media work merits another authoritative service page.
- Which existing Wix URLs require direct redirects to each canonical page.
- Which downloaded Wix media is owned, current, approved, and useful for each page.
- Which recommendations from the two SEO documents belong in the active implementation checklist after outdated assumptions are removed.
