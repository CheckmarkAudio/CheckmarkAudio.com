# Claude handoff

Read `AGENTS.md` and the four first documents it lists before website work.

The repository root is the only active replacement website. `index.html` is the recovered homepage Bridget selected on 2026-08-21. Its approved desktop references are in `START_HERE/APPROVED_VISUAL_BASELINES/`, and the canonical image/crop data is in `MEDIA/WEBSITE_MEDIA_SELECTIONS.json`.

Do not create a parallel homepage, revive an archived mockup, or treat browser-local editor settings as safely saved. Write approved visual changes into the root implementation and selection record. Keep `noindex`; Wix remains public until explicit launch approval.

## September 5 handoff

Claude's last completed polish commit was `6eab017` (Opus 5). Codex GPT-6 Astra then completed the interrupted Team phone-layout request as compact vertical profiles. The affiliates grid is now implemented for review: five centered logos, three over two on phones/tablets, no cell separators, and one banner row on desktop. The September 5 follow-up also fixes hero crop persistence and completes palette/contrast/Services-title polish while preserving Claude's main direction. Read `START_HERE/PROJECT_STATE.md`, `START_HERE/NEXT_STEPS.md`, and `MIGRATION/STATUS_2026-09-05.md` for current state and attribution. Earlier Codex sessions are verified as GPT-5.6 Sol.

Use `python3 scripts/dev-server.py` for direct editor saves. GitHub Pages already publishes `main` as a development preview; no production custom domain is attached. Large media masters and unlicensed texture references remain local-only. Run both `node MIGRATION/check-site-links.mjs` and its `--tracked` variant; the latter currently identifies the tour and optional WAV fallback deployment gaps.
