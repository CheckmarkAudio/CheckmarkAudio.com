# CheckmarkAudio.com

This repository contains Checkmark Audio's independent replacement website. The current Wix site remains public until this replacement is approved, tested, and deliberately launched.

## Canonical website

The only active website is at the repository root:

- `index.html` — approved working homepage direction recovered and promoted on 2026-08-21
- `services.html` — service overview and approved starting-price guidance
- `recording.html`, `mixing-mastering.html`, `live-recordings.html` — detailed service pages
- `studio-a.html`, `studio-b.html`, `team.html`, `community.html` — supporting pages
- `faq.html` — public-facing questions and answers currently under review
- `site.css` and the root `checkmark-*.css` / `checkmark-*.js` files — canonical website support files

The root site remains `noindex` and visibly marked as in development. GitHub Pages publishes a public [development preview](https://checkmarkaudio.github.io/CheckmarkAudio.com/) from `main`; it is not the production CheckmarkAudio.com domain. Pushing updates that preview while Wix remains live.

Current reconciliation, contributor history, diagnostics, and launch gaps: [`MIGRATION/STATUS_2026-09-05.md`](MIGRATION/STATUS_2026-09-05.md). The affiliates grid and unfinished Team phone layout are now implemented for review; see `START_HERE/NEXT_STEPS.md` for remaining decisions.

## Folder map

- `START_HERE/` — current project state, rules, decisions, and next actions
- `MEDIA/` — the only active website media library
- `SEO/` — SEO requirements, inventories, and research
- `POLICIES/` — organized approved and reference policy documents
- `EMAIL/` — inquiry-email assets and documentation
- `DRAFTS/active/` — only genuinely active off-direction experiments, each in its own dated folder
- `DRAFTS/reference/` — retained design studies that are not active
- `ARCHIVE/` — superseded website directions and historical systems; never use as current by default
- `MIGRATION/` — launch and migration records
- `scripts/` — maintenance utilities

There is deliberately no second active website folder and no top-level `MOCKUP/`.

## Protected homepage direction

The homepage selected by Bridget on 2026-08-21 is the root `index.html`. Its approved hero references are in `START_HERE/APPROVED_VISUAL_BASELINES/`, and its canonical media/crop record is `MEDIA/WEBSITE_MEDIA_SELECTIONS.json`.

Visual editor changes stored in a browser are working changes only. An approved change is not protected until it is also written into the root files and the selection record.

## Local preview

From the repository root, run `python3 scripts/dev-server.py` and open `http://localhost:4173/`. This server enables direct media-editor saving with local backups; a generic static server only supports export fallback. If the port is occupied, pass a free port, for example `python3 scripts/dev-server.py 4187`. Do not open HTML files directly from Finder because the media index and interactive tools require HTTP.

## Production boundary

- Keep Wix live until the replacement passes review and launch checks.
- The free consultation uses a selectable Cal.com calendar.
- The inquiry form uses the branded EmailJS workflow.
- Paid project-session self-booking remains separate future work.
- Do not remove `noindex` or point the domain here without Bridget's explicit launch approval.
