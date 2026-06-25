---
title: Checkmark Audio Website Growth System
status: active
phase: all_phases
kpi:
  - booking_conversion
  - local_seo_visibility
  - pricing_clarity
  - portfolio_trust
tags:
  - website_completion
  - source_of_truth
  - organization
  - planning
---

# Checkmark Audio Website Growth System

This folder is the website encyclopedia for the post-Wix Checkmark Audio website. It organizes the completion playbook by subject, not only by project phase, so every page, asset, blocker, SEO target, and KPI can be found quickly.

The source of truth is `99_SOURCES/CHECKMARK_AUDIO_WEBSITE_SOURCE_OF_TRUTH.docx`. The working master checklist is `00_INDEX/completion-playbook-master-checklist.md`.

Archived legacy references live outside this active website folder in `99_ARCHIVE/`.

Do not rename or replace the source-of-truth DOCX without Bridget explicitly approving that change.

## Folder Map

- `00_INDEX/` - master index, launch roadmap, content trackers, tag standards, and readiness dashboards.
- `01_PAGES/` - core website page requirements: Home, Services, Pricing, Book Now, Contact, FAQ, and Policies.
- `02_SERVICES/` - recording, vocal production, mixing, mastering, production, band recording, podcast, photography, and EPK services.
- `03_STUDIOS/` - Studio A, Studio B, room comparison, gear highlights, photos needed, and booking use cases.
- `04_PROOF/` - audio/video examples, Checkmark Live Sessions, testimonials, credits, case studies, and student proof.
- `05_BRAND/` - team list, bios, About story, mission, Albuquerque community positioning, and brand decisions.
- `07_POLICIES/` - deposit, cancellation, no-show, refund, revisions, file delivery, privacy, terms, and trust language.
- `08_SEO/` - URL map, local keyword pages, metadata, schema, analytics, Search Console, and sitemap planning.
- `09_ASSETS/` - website-ready assets once collected: logos, photos, audio, video, headshots, and portfolio media.
- `10_PHASES/` - phase plans and notes on what was done during each launch phase.
- `99_SOURCES/` - active source-of-truth DOCX and playbook summaries.

Separate-school, imported-conversion, old design-draft, and legacy DOCX references are archived in `99_ARCHIVE/`.

## System Rule

Actual website knowledge belongs in a subject folder. Phase notes only record timing, decisions, and progress.

Example: pricing requirements live in `01_PAGES/`, related service rates live in `02_SERVICES/`, and the note that pricing was worked on in Phase 2 lives in `10_PHASES/`.

## Tag Rule

Every important Markdown file should include frontmatter tags so the site system can be searched like an encyclopedia:

```md
---
title: Pricing Page Requirements
status: needs_content
phase: phase_02_core_pages
page: pricing
kpi:
  - pricing_clarity
  - booking_conversion
tags:
  - pricing
  - booking
  - conversion
  - needs_pricing
  - needs_gavin_approval
---
```

Use `00_INDEX/tag-system-guide.md` as the source of truth for statuses, phases, KPIs, and tags.
