---
title: UI Layout Standard
program_section: brand_ui
audience: teacher
status: draft
owner: Checkmark Audio School
---

# UI Layout Standard

This is the working UI playbook for the Checkmark Audio School app and curriculum surfaces. It should guide the learning app prototype, curriculum document renderer, teacher dashboard, and any future student portal work.

## Design Direction

Lead with **warm classroom clarity**, not a gray dashboard. The default experience should feel like a premium school workspace: white paper, black ink, controlled gold, generous breathing room, and dense information where it helps students know what to do next.

The app can still offer a dark studio mode, but dark mode is secondary. It should feel like focused evening studio work, not the main brand answer.

## First Screen Blueprint

The first screen after login should answer four questions without making the student hunt:

- **Where am I in the program?** Cohort, week, module, chapter, and class are visible near the top.
- **What should I do next?** One primary continuation action appears above the fold.
- **What am I making?** The active deliverable is named in plain language.
- **Why does it matter?** The connection to portfolio work is visible in the active lesson or milestone area.

## App Shell

- Use a contained shell on desktop, centered with a max width around `1200px`.
- Use warm paper outside the shell and white panels inside it.
- Keep the header sticky, compact, and utilitarian.
- Use the school logo as a real brand signal, not tiny decoration.
- Keep top nav horizontal on desktop and scrollable on small screens.
- Use one gold primary action at a time in the header.

## Page Structure

Each major app page should use this order:

1. **Page head:** program position, page title, one sentence of context, one primary action when needed.
2. **Primary work area:** the next class, active module, current assignment, or deliverable.
3. **Supporting panels:** progress, schedule, materials, feedback, and resources.
4. **Secondary history:** completed work, older classes, archive material.

## Visual Draft Rules

- Avoid gray backgrounds as the default canvas.
- Avoid cloudy gradient washes behind the whole app.
- Use gold as signal, not wallpaper.
- Use purple only for milestone/key-concept emphasis.
- Keep cards at `8px` radius and widgets at `12px` radius unless a production component requires otherwise.
- Prefer flat surfaces with visible borders over heavy shadows.
- Use icons for tool actions and tight text labels for learning actions.
- Keep micro-labels uppercase and small; keep lesson titles readable and direct.

## Student Dashboard Composition

The dashboard should be a working surface, not a marketing page.

- Left column: continue card, class stats, this-week learning tasks.
- Right column: program progress, next class, final project or active milestone.
- The continue card is the hero. It should carry the strongest visual weight.
- Progress should be useful but quiet; do not make the whole dashboard a gamified scoreboard.

## Curriculum View

- Module tabs or segmented controls sit above chapter cards.
- Chapter cards show module, class count, title, short outcome, and progress.
- The module color is a small strip or badge only. It should not flood the card.
- Completed chapters use a checkmark and subdued success state.

## Lesson View

Lesson pages should be built for students in a studio:

- Put the objective and final output at the top.
- Separate Class 1 and Class 2 clearly.
- Use callouts for key concept, listening task, safety, and deliverable.
- Technical targets use mono type: `-14 LUFS`, `2.4 kHz`, `120 ms`.
- Submission areas should feel practical and obvious, not decorative.

## Current Revision Notes

This pass changes the visual draft away from Claude's gray-first dashboard feel:

- Default theme is now **Classroom Studio**: warm paper background, white panels, black ink.
- Studio Dark remains available as a toggle.
- Shell gradients are reduced in the default UI.
- Cards and widgets use tighter radii.
- The login brand panel is black-and-gold, while the form side stays warm and readable.
