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
