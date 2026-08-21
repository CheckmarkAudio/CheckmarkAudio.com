# Learning App — UI Kit

A high-fidelity, click-through recreation of the **Checkmark Audio School** student
learning interface. It dresses the real curriculum (3 modules · 8 chapters each · 48
classes) in the school's gold-forward brand, revised toward a warm paper / black ink /
gold signal UI rather than a gray dashboard shell.

> These are **cosmetic recreations** for prototyping — not production code. Data is faked.

## Run it

Open `index.html`. It boots at the **login** screen → click **Sign In** → you land in the
app. Everything is a working click-through:

- **Top nav** — Overview · Curriculum · My Work · Calendar · Resources (gold active pill).
- **Overview** — "Continue where you left off", program-progress ring, stat tiles,
  this-week callouts, next class, final-project milestone.
- **Curriculum** — module switcher (Module 3 active) + Module 3 chapter cards. Click any
  chapter → **Lesson detail**.
- **Lesson detail** — chapter objective, Class 1 / Class 2 plans with curriculum callouts
  (key concept / safety / listening / deliverable), technical targets (−14 LUFS etc.),
  required materials, and a submit-deliverable panel.
- **My Work** — deliverables list with status badges.
- **Theme toggle** (sun/moon, top-right) flips Classroom Studio ↔ Studio Dark live.

## Files

| File | Role |
| --- | --- |
| `index.html` | Entry point — loads React + Babel + Lucide + the JSX below. |
| `kit.css` | All chrome + component styles (shell, header, nav, cards, callouts, buttons, login). Tokens come from `../../colors_and_type.css`. |
| `Primitives.jsx` | `Icon` (Lucide), `Button`, `Badge`, `Progress`, `ProgressRing`, `Callout`, `LessonCard`. |
| `AppShell.jsx` | Sticky header (brand · resume pill · theme · bell · avatar) + top nav. |
| `LoginScreen.jsx` | Split branding / form login. |
| `OverviewScreen.jsx` | Student dashboard. |
| `CurriculumScreen.jsx` | Module switcher + chapter cards. |
| `LessonScreen.jsx` | Chapter / class plan detail. |
| `WorkScreen.jsx` | Deliverables list + `Placeholder` for Calendar/Resources. |
| `app.jsx` | Auth gate + nav routing + theme state. |

## Source fidelity

Lifted from `Dashboard-V3` (the parent brand codebase):
- **Shell:** contained max-width frame, 16px radius, warm paper default, sticky blurred
  header — adapted from `.dashboard-shell` + `Layout.tsx`.
- **Top nav:** horizontal pills, active = gradient gold fill + gold ring + inset highlight
  — from `TopNavItem` in `Layout.tsx`.
- **Buttons / badges / cards:** gold primary, surface-alt secondary, ghost; pill badges
  with tinted backgrounds; `bg-surface + hairline border + radius` cards with hover lift —
  from `ui/Button.tsx`, `ui/Badge.tsx`, `ui/Card.tsx`.
- **Icon tiles:** near-black `ink` tile with gold glyph — from `.icon-tile-ink`.
- **Login:** split branding panel with blurred glow + gold mark — from `pages/Login.tsx`.

Educational additions on top of the parent brand: per-module hues, the four **curriculum
callouts**, the lesson/chapter card with module strip + progress, and JetBrains Mono
technical readouts. Icons are **Lucide** (the parent app's icon set), loaded from CDN.
