---
title: Platform Architecture
status: active
updated: 2026-09-05
---

# Platform Architecture

This file records the cross-system decisions made starting 2026-07-26 about how `checkmarkaudio.com` (this repo) relates to Checkmark Audio's internal staff tool, and the plan for client accounts and established-client self-booking. Updated 2026-08 once Gavin decided the client portal should be a fully separate site rather than embedded here. Implementation claims about the separate Supabase backend below are historical reports, not reverified by the September 5 website audit. The current public conversion UI is implemented as described below.

## Two Repos, One Shared Backend

`checkmarkaudio.com` and the internal staff tool (repo currently named `Dashboard-V3`, local path `/Users/bridges/GITHUB/Dashboard-V3`, GitHub `CheckmarkAudio/Dashboard-V3`) stay **separate repos** — no merge. They are "partner sites": independently built, independently deployed, connected only through a shared Supabase backend (auth, schema, RLS), not through any direct code coupling.

This split is intentional, not incidental:

- `checkmarkaudio.com` must stay public and SEO-crawlable — this is the client-facing marketing/booking site.
- The staff tool must stay unlisted/low-key — it's an internal operating system (tasks, staff chat, scheduling, eventually accounting), not something the public needs to find.

Merging them would couple the SEO-critical public site's release cycle to the internal tool's, and risk the internal tool getting indexed. Keep them apart.

## Shared Supabase Project

Both apps use the same Supabase project: **"CM- Audio Workspace"** (ref `ncljfjdcyswoeitsooty`), recently renamed from "Checkmark Intern Manager." This project already has the right foundation for this work — notably `public.clients` and `public.studio_hours_of_operation`.

There is a second, unrelated Supabase project in the same org — **"CheckmarkAudio's Project"** (ref `bdyqbsgpeaugttrkobzx`) — which runs a separate content-protection/royalty-tracking system (markers, ownership tokens, royalty distributions). Do not confuse the two or add booking/client-account work to that project.

Supabase org is on the **free plan**; a third project would cost $0/mo per Supabase's own quote, but is unnecessary — no reason to create one when the workspace project already fits.

## The Public Calendar Books Free Consultations Directly

The homepage `#consultation` section embeds a real, fully clickable Cal.com calendar (director decision, 2026-08, superseding an earlier "read-only" version — see history below). It books the **free consultation only** — a fixed 1-hour meeting, open to anyone, no login required.

The earlier concern (new clients self-booking mismatched session scope/length) was about actual **paid project sessions**, which this calendar was never for. A fixed-length consultation doesn't carry that risk, so gating it added friction without a real reason to. The inquiry form (`#inquiryForm` in `#book`) stays as the second path for anyone not ready to pick a time yet.

Established-client self-booking of *real* project sessions is a separate, later capability — see the client portal section below. It does not live on this page.

**History, for context**: the calendar briefly shipped `inert` (visible, not clickable) with an embedded client-login box that would un-gate it — see git history on this file and on `index.html` around 2026-08-01 if that build needs to be referenced. It was reverted the same day once Gavin clarified the portal should be a fully separate site.

## Client Accounts Plan

Full plan, phased build order, and non-negotiables live in the staff-tool repo: `Dashboard-V3/docs/checkmarkaudio-website-integration-handoff.md`.

### The client portal is a separate site (director decision, 2026-08)

Gavin decided the client portal should be its **own site**, not a login area embedded in `checkmarkaudio.com`. This matches the same logic already applied to the staff tool: anything behind a login stays off the SEO-indexed public surface, and `checkmarkaudio.com` stays static/JS-light, which matters for the site's Core Web Vitals and search ranking. No portal repo/domain exists yet — that is unbuilt and separate from the public-site launch.

The earlier "Client Portal — Coming Soon" email-capture box is absent from the current root homepage (verified 2026-09-05). Treat it as historical, not a live feature. A portal CTA requires a separate approved implementation and eventual portal destination.

### Backend — LIVE, portal-agnostic (built 2026-08-01, while Codex was on the SEO media pass)

This part didn't change when the portal moved to a separate site — it's backend, so it doesn't care which frontend calls it.

- **What "established" means** (director decision): no separate flag. A client becomes established simply by creating a portal account — staff hands them the (future) portal's signup link after a real studio visit, and account creation itself is the gate. `clients.auth_user_id IS NOT NULL` doubles as both "has an account" and "established, can self-book real sessions."
- **Schema**: `public.clients` got a nullable, unique `auth_user_id uuid references auth.users(id)` column (migration `add_client_account_linking`). Verified safe before applying — only 4 existing rows, purely additive change, no existing policy touched.
- **Auto-linking**: a trigger (`link_client_by_email()`) on `auth.users` insert matches the new account's email against `clients.email` and sets `auth_user_id` automatically. Guarded against duplicate-email ambiguity — skips linking rather than risking a wrong match or a failed signup.
- **RLS**: additive policy `"clients read own row"` (`auth_user_id = auth.uid()`), alongside the pre-existing staff policy `"team members read clients"` — neither touches the other.
- **Tested live**: triggered a real `signInWithOtp` call against the production Supabase project — succeeded, no errors, before the frontend home for this moved to "future separate portal."
- **Not built yet**: the portal site itself (frontend), any staff-facing UI in Checkmark Workspace to show "has account" status or send the signup link, and Supabase Auth's redirect-URL allowlist (needs the eventual portal domain added in the dashboard once that domain exists — Bridget/Gavin only, no tool covers this).

### Phases 2–4 — not yet built, will live on the future portal site, not here

- `public.studio_hours_of_operation` (already powers the staff tool's `/calendar`) is the shared source of truth for hours whenever real session booking gets built.
- Agreed build order (do not reorder without checking with Gavin):
  2. Client ↔ engineer messaging.
  3. File delivery to clients (separate storage/policies from internal staff files).
  4. Payments, feeding the *existing* planned Checkmark Accountant module — not a second finance system.

Merch shop and further SEO work on this site are independent of the above and don't need to wait on any of it.

## Renaming

- **Supabase project**: done — renamed to "CM- Audio Workspace."
- **Staff tool repo** (`Dashboard-V3`): not yet renamed. Suggested target is `checkmark-workspace`, matching the name that repo's own docs already use internally (e.g. its Accountant handoff doc calls features "first-class Checkmark Workspace module[s]"). Alternates: `checkmark-studio-os`, `checkmark-hq`, `checkmark-crew`. Pending Gavin's final call — see the handoff doc above for the full open-questions list.

## Cross-Reference

If you're doing client-account, calendar-sync, or shared-backend work from *this* repo, also read `Dashboard-V3/docs/checkmarkaudio-website-integration-handoff.md` for the staff-tool side's non-negotiables and open questions — don't duplicate or contradict it here.
