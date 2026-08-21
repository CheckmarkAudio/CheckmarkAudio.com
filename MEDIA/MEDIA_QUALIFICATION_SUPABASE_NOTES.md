# Media Qualification & Page Assignment — Notes Against the Future Supabase Plan

Written 2026-07-31, before Codex starts the Media Qualification and Page Assignment pass, at Bridget's request: does the planned unified Supabase backend (client accounts, gated calendar, messaging, file delivery, payments — full plan in `START_HERE/PLATFORM_ARCHITECTURE.md`) change anything about this SEO step?

**Short answer: the five-step process itself doesn't need rework. Two cheap additions are worth making now, while `MEDIA_METADATA.csv` still has zero data rows — retrofitting them after hundreds of rows are filled in would be real work later for no reason.**

## What stays exactly the same

- Step 1 (duplicates), Step 3's core ownership/credit/permission confirmation, and the later WebP/AVIF optimization + alt-text pass are all independent of backend architecture. No changes needed.
- The Supabase plan is a separate property (a client portal, different app) — it doesn't add new public pages to checkmarkaudio.com beyond what's already planned (gallery, merch), so it doesn't restructure what "canonical service page" means for Step 4.

## Worth adding now (both touch `MEDIA_METADATA.csv`, currently just a header row)

1. **Add a `usage_scope` column.** Right now Step 3 confirms permission for *public website* use. Once client file delivery (Phase 3 of the Supabase plan) exists, a client's own session photos/files could also be shown *back to that client in their private portal* — a different consent scope than "publish on the public marketing site." Since permission is already being confirmed per-item in this pass, capture both while you're asking rather than re-contacting people later. Suggested values: `public-website`, `private-client-portal`, `internal-staff-only`, `school-site`, `unassigned`.
2. **Add "Gallery" as a valid Step 4 page-assignment target**, if it isn't already an option. A dedicated photo gallery page (matching the old Wix site) is planned but doesn't exist as a page yet, so there's no canonical target for gallery-appropriate images to be assigned to today. Worth having the value available now so those images get tagged correctly on the first pass instead of needing re-triage later.

## Worth flagging, but not part of this pass — no action needed from Codex right now

- Step 2's exclusion categories (school / private-client / third-party / unrelated) already do the right thing for the Supabase plan — material tagged **private-client** in particular isn't being discarded, it's implicitly the seed content for the future client-portal file-delivery feature. Worth a one-line awareness note wherever that category gets documented, so nobody assumes "excluded from the public site" means "excluded, full stop."
- Once client-login pages exist on checkmarkaudio.com (Phase 1 of the Supabase plan — not built yet), those routes will need `noindex`/robots.txt exclusion, same as any authenticated/private page. This is a normal launch-time SEO task for that future phase, not something the current media pass needs to touch.

## Bottom line for Codex

Proceed with the five-step Media Qualification and Page Assignment process as planned. The only change is: when filling in `MEDIA_METADATA.csv`, add the `usage_scope` field (item 1 above) and make sure "Gallery" is a selectable `page_assignment` value (item 2 above). Everything else is unaffected.
