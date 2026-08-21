# EXPERIMENTAL DRAFT MOCKUP — DRAFT ONLY

**Status: experimental / not approved / not a source of truth.**

This folder is a local HTML mockup built on 2026-07-02 as a *test subject* for how well
the master build descriptions work in practice. It was generated from:

- `01_WEBSITE/99_SOURCES/Checkmark_Audio_Website_Master_Build_Prompt.docx`
- `01_WEBSITE/99_SOURCES/CHECKMARK_AUDIO_WEBSITE_SOURCE_OF_TRUTH.docx`
- The consolidated master planning Markdown files in `01_WEBSITE/`

## Rules for this folder

- This is **not** the website build. Do not treat anything here as approved copy,
  approved design, approved pricing presentation, or final structure.
- Do not use this mockup as a source of influence for planning files unless Bridget
  explicitly promotes a specific idea out of it.
- Do not link to, deploy, or publish these files.
- If this draft goes stale or is rejected, move the whole folder to `99_ARCHIVE/`.

## What's inside

One self-contained single-page mockup — open `index.html` in any browser. Single-page
matches the repo's existing "single-page first launch" decision and the short-attention
conversion brief. Sections: hero, trust strip, services, pricing, studios + comparison,
our work gallery, about/team, FAQ, booking form, contact, footer, mobile sticky
Book/Call/Text bar.

- All CSS/JS is embedded in `index.html`; no build step, no external requests.
- Photos/logo are referenced (not copied) from `02_ASSETS/production/`, so the file must
  be opened from this location inside the repo for images to load.
- Every unconfirmed fact is rendered in **red ⚠ text** citing its Open Decisions item
  number from `99_SOURCES/master-build-plan-prompt-v2-revised.md` — no invented filler.
- The inquiry form is **mock-mode**: fields and hidden `time` input match the EmailJS
  template variables (`name`, `phone`, `reply_to`, `style`, `message`, `time`) plus a
  honeypot; submission shows the approved confirmation message locally. Real EmailJS
  IDs are decision item #2.
- `<meta name="robots" content="noindex">` and a red "EXPERIMENTAL DRAFT" banner keep
  this unmistakably draft-only.
