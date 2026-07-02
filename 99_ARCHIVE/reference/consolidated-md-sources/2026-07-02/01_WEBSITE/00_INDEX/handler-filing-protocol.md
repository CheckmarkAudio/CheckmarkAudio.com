---
title: Handler Filing Protocol
status: active
phase: all_phases
kpi:
  - findability
tags:
  - filing_system
  - handlers
  - encyclopedia
  - assets
---

# Handler Filing Protocol

This is the standing protocol for Codex, Claude, or any other handler organizing the Checkmark Audio website system.

## Source Of Truth

The website completion process follows `99_SOURCES/CHECKMARK_AUDIO_WEBSITE_SOURCE_OF_TRUTH.docx`.

This file name must not be changed unless Bridget explicitly approves the rename. See `00_INDEX/source-of-truth-rule.md`.

Use `99_ARCHIVE/reference/legacy-docs/LEGACY_BRIDGET_WEBSITE_COMPLETION_GUIDE.docx` only as the untouched legacy reference. Do not fill answers into the legacy reference.

Use `00_INDEX/completion-playbook-master-checklist.md` as the Markdown operating checklist for the source-of-truth DOCX. Do not replace the playbook with a new plan unless Bridget explicitly approves a change.

## Completion Workflow

For each playbook item, follow this order:

1. Read the next item from `CHECKMARK_AUDIO_WEBSITE_SOURCE_OF_TRUTH.docx`.
2. Summarize the next step to Bridget in plain language.
3. State what information, copy, images, media, prices, policies, or approvals are needed.
4. Review `checkmarkaudio.com` as the existing public reference and use it to answer any checklist questions it can answer.
5. Clearly name knowledge gaps Bridget/Gavin must fill.
6. Show the planning work to Bridget.
7. Wait for Bridget to add, correct, or approve missing details.
8. Add the confirmed details to the correct Markdown files.
9. Update `CHECKMARK_AUDIO_WEBSITE_SOURCE_OF_TRUTH.docx` with the visible answer on or directly under the checklist line, plus checkbox/status notes where appropriate.

Do not move into website build implementation until Bridget explicitly says the planning/checklist phase is ready to become build work.

## Checklist Answer Format

When a checklist item is completed or partially answered, show the work directly under the item.

Preferred format:

```md
- [x] Mission statement

  Answer: Checkmark Audio helps artists, singers, and bands record, produce, mix, and master release-ready music in a professional Albuquerque studio environment.

  SEO: Use this line when the answer has already been located on the current website, Google profile, social profiles, schema, metadata, or other public-facing surfaces.

  SEO gaps:
  - [ ] Add the answer to any important missing website, SEO, schema, social, or conversion surface.
```

Use `Answer:` for the actual copy, decision, or factual response. Do not add a `Source:` line on the main checklist because the approved source pool is Bridget, Gavin, and the current `checkmarkaudio.com` site. Use `SEO:` when checking where an answer already appears publicly. Use `SEO gaps:` for missing SEO, schema, social, map, metadata, or web-presence opportunities; nest those as their own sub-checkboxes so they can be checked off later. If an answer simply needs owner approval or live verification, label that clearly as `Verification Needed:` rather than calling it a gap. This same format should appear in Markdown and in `CHECKMARK_AUDIO_WEBSITE_SOURCE_OF_TRUTH.docx`.

## Main Checklist vs Appendix

The main checklist in `CHECKMARK_AUDIO_WEBSITE_SOURCE_OF_TRUTH.docx` is the build source. Every important answer needed by Codex or Claude to build the website belongs directly on or under the related main checklist line.

The lower appendix is not the build checklist. Use it only for handler evidence, deeper SEO notes, questions for Bridget/Gavin, audit trails, and extra context that would clutter the main checklist. It may include `Source:` or longer research notes when useful, but those lines should not replace the answer on the main checklist.

## First Rule

Do not create loose files at the repository root unless the file is a true repo-level entry point. Website completion planning belongs in `01_WEBSITE/`.

## Where Things Go

- Page requirements go in `01_PAGES/`.
- Service offers go in `02_SERVICES/`.
- Studio A, Studio B, gear, rooms, and room comparison go in `03_STUDIOS/`.
- Portfolio examples, testimonials, proof, credits, and case studies go in `04_PROOF/`.
- Team, About, mission, story, and brand positioning go in `05_BRAND/`.
- Public-facing school copy belongs to the separate school website. Reference-only school material is archived in `99_ARCHIVE/reference/checkmark-school/`.
- Policies, terms, privacy, deposit, cancellation, and trust language go in `07_POLICIES/`.
- SEO, URLs, schema, analytics, sitemap, metadata, and keyword plans go in `08_SEO/`.
- Final website-ready media assets go in `09_ASSETS/`.
- Phase progress notes go in `10_PHASES/`.
- Original source docs go in `99_SOURCES/`.

## Naming Rules

- Use short descriptive names.
- Prefer 1-3 words for asset titles before the extension.
- Use lowercase kebab-case for files: `studio-a.jpg`, `pricing-page.md`, `audio-logo.png`.
- Use uppercase numbered folders only for major encyclopedia sections.
- Do not use dates, screenshots, camera names, or vague words like `final`, `new`, `misc`, `stuff`, `copy`, or `updated` unless the date is the actual subject.

## Markdown Rules

Every important Markdown file needs frontmatter:

```md
---
title: Human Readable Title
status: planned
phase: phase_02_core_pages
kpi:
  - booking_conversion
tags:
  - booking
  - conversion
---
```

Use `tag-system-guide.md` for approved status, phase, KPI, and tag values.

## Asset Rules

- Website-ready images go in `09_ASSETS/`.
- Working screenshots and design references stay near the design system unless they are approved for the public website.
- Generated page sequences can keep numbered names like `page-01.jpg` when order matters.
- Before renaming assets, search for references and update them in the same pass.
- If a file name is not obvious from looking at it, add an asset inventory note.

## Phase Rules

Phase folders are not the filing cabinet. They are the logbook.

If a pricing page is worked on during Phase 2, the pricing requirements still live in `01_PAGES/`; the Phase 2 note only records what changed, what is blocked, and what was decided.
