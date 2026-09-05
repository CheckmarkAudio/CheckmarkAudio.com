# September 5 QA evidence

Recorded by Codex GPT-6 Astra. `browser-results.json` contains the 30-page/viewport smoke-check measurements; `team-results.json` verifies the completed vertical phone layout and retained tablet/desktop composition. `team-390.png` is a reviewed implementation screenshot, not a Bridget-approved visual baseline.

The smoke-check server on port 4173 was a generic static server and returned 404 for the editor save-capability probe; that is the expected export fallback, not a missing website asset. The dedicated server on port 4187 returned 200 for the probe. No media selections were written and no real inquiry/booking was submitted.

See `../STATUS_2026-09-05.md` for limitations and the separate tracked-media failures.
