---
title: Project Rules
status: active
updated: 2026-09-23
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

- September 12 design scope: ZERO added subtext or other copy. Preserve existing wording, headings, navigation, page structure, photographs, and approved layouts. A request for clip-art aesthetic refinement is not permission to redesign a page or write content.
- Reuse the exact approved clip-art assets. Change only their requested placement, scale, integration, or meaningful interaction; do not regenerate or substitute artwork without Bridget requesting it.
- Home and the main Services page are excluded from new draft explorations. Preserve approved additive Services details. A separate Checkmark Tonight page does not replace Services.
- Before showing a design change, compare against the starting page: no added words, no unrelated layout/media changes, and no substituted clip art. Reject the result internally if it fails. Stop and explain a missing asset instead of improvising a replacement.
- Keep design communication minimal. Show the visual change rather than paragraphs of explanation.

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

## Session continuity — standing instruction

At every new chat and resumed session, complete the mandatory context review and working-version verification in `../AGENTS.md` before opening a preview or making changes. Keep Project State, Next Steps, and relevant change/decision records current throughout work and before the session ends, without a reminder from Bridget. Record what is implemented, what is approved, what remains, where the current files/preview live, and whether changes are local or published. Avoid duplicate entries when no state changed. These notes supplement, and never replace, the Source of Truth checklist.

## Verify the working baseline

- September 23: the current website is in `/Users/bridges/GITHUB/CheckmarkAudio.com`, previewed on port 4191. The `48c9` worktree contains an older September 5 snapshot. Before editing or presenting a preview, verify the checkout, latest local work, and the server's serving directory; neither a familiar URL nor GitHub Pages proves the preview is current.
- Preserve staged, unstaged, and untracked work in the current checkout. Recover individual elements from evidence; never roll the whole website back or overwrite newer technical fixes with an older branch.
- Preserve the approved Services rack with seven movable faders and large gold CD, the original layered microphone/paper demo background, and the photo-bevel removal. Exploratory boards do not override these saved designs.

## Assistant attribution and team communication

Standing instruction from Bridget, September 23, 2026. Applies to Codex, Claude, Grok, and all other human/assistant contributors:

- Every new or materially revised Markdown work entry must name the work's author/assistant, provider and exact model when known, date, task/chat title or identifier, and scope. Separate the person/assistant who implemented work from the assistant who reviewed, documented, or committed it.
- Use `Author: <assistant/provider; model if verified>` and `Task: <title or id>` on dated entries. State changed files/behavior, validation actually performed, current status (draft/implemented/approved/committed/pushed), and remaining work. Include relevant commit hashes or references when available.
- Preserve earlier authorship when updating an entry. Add an update attribution instead of claiming the original work. Never infer model or author from style, Git's shared account name, or assumptions. Mark unknown attribution explicitly and cite the task/commit evidence that is available.
- For a summary combining several contributors, distinguish their roles and evidence. Do not retrospectively label all historical work as the current assistant's work. Keep the startup review and handoff requirements above so incoming Grok or other teammates use the same current context.

## Git and handoff

- Preserve user changes; never clean a dirty tree by reverting work you did not create.
- Before committing, review the exact changed-file list.
- Before pushing `main`, sync with `origin/main` and report the final commit hash.
- Current state belongs in the short active records, not only in a branch name, chat, or browser cache.
