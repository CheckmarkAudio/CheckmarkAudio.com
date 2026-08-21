---
title: Project State
status: active
updated: 2026-08-21
---

# Project State

## North star

Checkmark Audio is replacing its Wix-hosted marketing website with an independent site built in this repository. Wix remains public only while the replacement is developed, reviewed, and tested. Domain cutover requires Bridget's explicit approval.

The replacement conversion path is a selectable Cal.com calendar for the free one-hour consultation plus branded EmailJS inquiry emails. Paid project-session self-booking is separate future work.

The Source of Truth DOCX is the only active completion checklist. `DOCUMENT_MAP.md` defines authority and routing; this file records the short current state.

## Current canonical website

The repository root is the only active website. It contains nine pages: `index.html`, `services.html`, `recording.html`, `mixing-mastering.html`, `live-recordings.html`, `studio-a.html`, `studio-b.html`, `team.html`, and `community.html`.

On 2026-08-21 Bridget identified the browser-edited editorial homepage she wanted preserved. Its local media selections and crops were recovered, reviewed against her four screenshots, written into files, and promoted to root `index.html`. This supersedes the homepage previously at root.

Protected records:

- `START_HERE/APPROVED_VISUAL_BASELINES/` — four approved wide-desktop hero screenshots
- `MEDIA/WEBSITE_MEDIA_SELECTIONS.json` — canonical hero and section-media selections/crops
- `START_HERE/WEBSITE_CHANGE_LOG.md` — chronological design decisions
- `START_HERE/WEBSITE_CHANGE_PROTOCOL.md` — design-change procedure
- `START_HERE/OPEN_DESIGN_QUESTIONS.md` — unresolved visual decisions

The homepage's four approved hero images are the studio sign, patch bay/rack gear, control-room microphone, and Antoine guitarist image recorded in the selection JSON. The three approved homepage section images are also file-backed there.

The root site remains visibly marked as in development and `noindex`. It is not public production. It retains the real EmailJS inquiry flow and selectable Cal.com consultation calendar.

## Repository organization

- Root: one canonical website only
- `START_HERE/`: current state, authority, decisions, and active actions
- `MEDIA/`: one active media library
- `DRAFTS/active/`: off-direction work currently expected to continue; currently empty except its README
- `DRAFTS/reference/`: paused/protected design studies
- `ARCHIVE/`: permanently superseded directions and historical systems

The former top-level `MOCKUP/` is archived at `ARCHIVE/old-website-directions/mockup-before-root-build-2026-08-11/`. The pre-recovery root homepage and recovered preview copies are in their dated archive folders. There is deliberately no second active site tree.

## Active brand and content facts

- Active official logo standards are the matching gold, black, and white 2000×2000 transparent files recorded in `SEO/LOGO_ASSET_MANIFEST.md`; superseded logo work is archived.
- Approved visual character: deep black, warm cream, champagne gold, restrained red accent, editorial serif, expressive italic, and condensed labels.
- Approved starting-price model: vocal recording from $50/hour, general studio/engineering from $65/hour, band recording from $75/hour; project work is quoted.
- Studio-client policies are approved in `POLICIES/01_STUDIO_CLIENT/POLICY_SET.md`. Website privacy/legal documents retain the statuses written in their files.
- Do not infer missing team, studio, rights, testimonial, policy, or business facts.

## What remains open

Use `NEXT_STEPS.md` for the live list. The principal open areas are human review of the complete root site; final page-intent/URL approval; remaining team and studio facts; public review/proof approval; privacy/legal completion; responsive, accessibility, link, form, metadata, and launch QA; and controlled hosting/domain cutover.

## History note

Earlier directions, contradictory build attempts, and the July repository system are preserved in Git and `ARCHIVE/`. They are evidence, not current instructions. New sessions should not reconstruct current state from branch names, browser local storage, or archived previews when the files above answer it directly.
