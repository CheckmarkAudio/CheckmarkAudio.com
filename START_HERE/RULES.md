---
title: Project Rules
status: active
updated: 2026-08-21
---

# Project Rules

## Authority

1. Bridget and Gavin's newest confirmed decisions
2. `CHECKMARK_AUDIO_WEBSITE_SOURCE_OF_TRUTH.docx` as the only active completion checklist
3. SEO Master Plan for SEO architecture and sequence
4. SEO Training Manual for recurring workflow and QA
5. Current active Markdown records in `START_HERE/`
6. The public Wix site as reference, not automatic truth
7. `DRAFTS/reference/` and `ARCHIVE/` only when historical evidence is explicitly needed

When sources conflict, record the newer confirmed decision in `PROJECT_STATE.md` and the appropriate subject file. Do not create a second checklist.

## One active website

- The repository root is the only active replacement website.
- Root `index.html` is the protected homepage Bridget selected on 2026-08-21.
- Do not create another active website, parallel `index.html`, or near-copy folder.
- Keep the replacement `noindex` and keep Wix live until explicit launch approval.
- A browser-local visual edit is not protected until written into root files and `MEDIA/WEBSITE_MEDIA_SELECTIONS.json`.
- Log approved visual changes in `WEBSITE_CHANGE_LOG.md` and store an approved screenshot in `APPROVED_VISUAL_BASELINES/` when appearance materially changes.

## Draft and archive routing

- A genuinely active off-direction idea gets one dated folder under `DRAFTS/active/`, with one README explaining purpose and relation to root.
- A paused comparison or useful study belongs in `DRAFTS/reference/`.
- A rejected or permanently superseded direction belongs in `ARCHIVE/`.
- Never keep the same concept active in two locations.
- Archived history is preserved; do not delete it merely because it is old or duplicated.
- Revive archive material only through a documented decision.

## Content and behavior

- Do not invent business facts, prices, policies, reviews, credits, statistics, team details, permissions, or booking details.
- Keep the free consultation selectable through Cal.com and the inquiry path through branded EmailJS unless Bridget changes that decision.
- Paid-session booking and client accounts are separate future work.
- School search intent stays on the separate school website.

## Media

- `MEDIA/` is the only active website-media library.
- Follow `SEO/ASSET_NAMING_RULES.md`: lowercase kebab-case and useful, factual terms only.
- Do not keyword-stuff, invent locations, or repeat filenames as alt text.
- Update all references in the same pass when moving or renaming active media.
- Keep large source media and optimized website media distinct according to `MEDIA_SEO_PLAN.md`.

## SEO and launch

- Use one authoritative page per approved major search intent.
- Treat unapproved paths in `SEO_STRUCTURE.md` as proposals.
- Public URL changes require links, canonicals, sitemap, schema, tests, and redirect mapping in the same pass.
- Verify important SEO, accessibility, schema, privacy, and launch claims against primary sources.
- Remove `noindex` and change domain routing only after explicit launch approval and successful final QA.

## Git and handoff

- Preserve user changes; never clean a dirty tree by reverting work you did not create.
- Before committing, review the exact changed-file list.
- Before pushing `main`, sync with `origin/main` and report the final commit hash.
- Current state belongs in the short active records, not only in a branch name, chat, or browser cache.
