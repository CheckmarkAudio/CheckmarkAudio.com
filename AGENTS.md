# AGENTS.md

## Project

This repository is the Checkmark Audio website rebuild and planning system.

Active planning source:

- `01_WEBSITE/99_SOURCES/CHECKMARK_AUDIO_WEBSITE_SOURCE_OF_TRUTH.docx`

Core handler rules:

- `01_WEBSITE/00_INDEX/source-of-truth-rule.md`
- `01_WEBSITE/00_INDEX/handler-filing-protocol.md`
- `01_WEBSITE/09_ASSETS/asset-naming-guide.md`
- `01_WEBSITE/08_SEO/`

## Standing Workflow

- Read the source-of-truth and handler rules before making website-planning, SEO, asset, or content changes.
- Keep the main checklist clean: concise answers under the matching checkbox item, with only short SEO notes and SEO gaps when useful.
- Put longer research notes, sources, or audit trails in appendix-style notes or the matching Markdown planning file, not in the main checklist body.
- Do not begin full website implementation until Bridget explicitly says planning is ready to become build work.

## SEO Accuracy Rule

When answering SEO questions, separate ranking weight from best practice.

Use this tier language:

- Critical: strongly affects indexing, local visibility, conversion, accessibility, or launch readiness.
- Helpful: worthwhile best practice with meaningful indirect or smaller SEO value.
- Nice-to-have: useful polish, but not urgent.
- Not worth doing: low value compared with time cost.

For SEO claims that affect many files, page architecture, metadata, schema, image naming, accessibility, redirects, or public launch decisions:

- Verify against Google Search Central or another primary source before giving confident advice.
- Say when something is a small ranking signal but still a best practice.
- Do not dismiss a best practice just because it is not the largest ranking factor.
- If a recommendation is based on inference or general web practice, label it as an inference.

## Image And Asset Naming

Website image filenames matter for organization, accessibility workflow, and image SEO. They are not usually the strongest SEO signal, but descriptive names are still a best practice.

Before renaming or moving multiple assets:

- Pause and state the exact naming rule.
- Confirm whether numbers should preserve order, chronology, page position, or campaign grouping.
- Search for references and update links in the same pass.

Preferred website image format:

```text
00-visual-description-service-location.ext
```

Examples:

- `00-vocal-booth-recording-albuquerque.jpg`
- `01-control-room-mixing-mastering.jpg`
- `02-gavin-engineering-session-checkmark-audio.jpg`
- `03-studio-sign-recording-studio-albuquerque.jpg`

Use concise lowercase kebab-case. Avoid camera names, hashes, vague names, and generic filenames.

## Source Of Truth Rules

- The active DOCX must not be renamed unless Bridget explicitly approves it.
- Do not create a second active source-of-truth checklist.
- Archive stale drafts in `99_ARCHIVE/` instead of letting them steer the build.
- Public-facing school content belongs to the separate school website; reference-only school material stays archived.

## Git

- Before committing, check status and confirm the changed file list matches the request.
- Do not revert user changes unless Bridget explicitly asks.
- If pushing to `main`, make sure local `main` is synced with `origin/main` and report the final commit hash.
