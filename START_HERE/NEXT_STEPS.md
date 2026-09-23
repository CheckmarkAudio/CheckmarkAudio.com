---
title: Next Steps
status: finishing_and_migration_preparation
updated: 2026-09-23
---

# Finish and migrate CheckmarkAudio.com

This is the execution order and migration runbook, not a second completion checklist. `CHECKMARK_AUDIO_WEBSITE_SOURCE_OF_TRUTH.docx` remains the acceptance authority. September 12 request: finish the aesthetics, music, outstanding corrections, then migrate from Wix. Preparation is authorized; perform the actual domain cutover after the final review. No DNS changes have been made in this pass.

## Current working baseline — September 23

- Continue in `/Users/bridges/GITHUB/CheckmarkAudio.com`, preview port 4191. Read its current records and inspect staged/unstaged/untracked work before editing. The older `48c9` worktree and GitHub Pages preview are not the latest design baseline.
- Preserve the Services seven-fader rack and large CD, the exact layered microphone/paper demo background, and flat photo collections. Preserve all later navigation, audio, and editor work. The September 23 recovery found these intact; do not recreate them from older drafts or perform a whole-site rollback.
- Checkmark Live's page is present, but no top-navigation tab exists. Await an explicit navigation direction before adding or moving a tab; retain its current Services/footer access meanwhile.
- September 23 update — OpenAI Codex (GPT-6), task “Astra audit Claude website changes”: Bridget now authorizes the current main-checkout checkpoint and push, limited to the current website and necessary files. Older versions, draft galleries, and superseded exports must remain local. Website checkpoint `18bd0f964cc2abbcbeac05c1d0f89289addd7ec8` was pushed and remote-verified; confirm the matching GitHub Pages build finishes. Do not merge stale website code or include oversized raw audio/DAW sources; preserve those in the documented local backup. No domain cutover is authorized.

## 1. Finish the approved aesthetic

Codex implements and verifies; Bridget/Gavin review one coherent desktop/phone preview.

- Preserve the approved homepage and existing Services selector. Services gets only the already requested additive Mixing/Mastering content; no replacement Services design.
- Retain the approved microphone-02 repeating background at its selected scale/opacity, seamless edge correction, and full paper overlay. Use original-resolution assets.
- Keep the Team 07C light editorial grid, fine rules, restrained typography, black transparent headphones. Do not revive the rejected scattered/cabled instrument variations. Tony still needs an approved portrait or an intentional initials treatment with no “selection pending” copy.
- Keep 404 10A (patchbay/disconnected cable) and dedicated Checkmark Live 04A. Checkmark Live and the Community/Checkmark Tonight page have different purposes.
- Audit all visible art for true transparency, sharpness and integration. Photo compilations and review banner stay flat, without rounded gold bevels. Use dimensional treatment only on appropriate equipment/functional controls.
- Final pass across Home, Services, Recording, Mixing & Mastering, Checkmark Live, Studio A, Studio B, Team, Community, Q&A and 404: spacing, readable typography, mobile crops, menus, tap targets, keyboard focus, reduced motion, and image loading.
- Settle Community title finish and any remaining optional consultation-panel placement only if still wanted. They are not permission to redesign the site.
- Record approved screenshots after Bridget accepts the rendered pages. Existing implementation is not automatic visual approval.

## 2. Finish the music and media

- September 23 update — OpenAI Codex (GPT-6), task “Astra audit Claude website changes”: all active website samples are now 15 seconds; Bridget authorized commit and push on September 23 ("push it"). Review the automatically selected high-activity passages, particularly phrase boundaries, in the demo reel and both comparisons. Original masters and 30-second backups are preserved. Publish this current audio update and supporting records only; do not include raw projects, old clips, or unrelated new files.

- “Hear the difference” now has previous/next arrows; Love All of Me was removed because it is Richard’s work. Do not re-add it from older notes or assets.
- Current comparisons: Song of Solomon and provisionally titled Tape. Confirm Tape’s title and engineer before launch.
- GavinMaster contains Solo, Song of Solomon, Hyper4, IgneusRocks and Anthill. Only Song of Solomon has an identified unmixed partner. Bridget/Gavin provide or identify the other unmixed exports. Never fake an unmixed version or pair unrelated renders.
- Independently curate the 11-track “Inside the work” reel. Confirm which tracks are Gavin’s, artist/display titles, permissions and preferred order; existing inclusion is not proof of authorship. More approved masters can go in this reel without requiring unmixed versions.
- Compare original and web audio, confirm chosen excerpts, timing when toggling, start/pause/seek/end/replay, single-player playback and mobile behavior. Preserve sound levels unless Gavin requests level matching.
- Finish the studio-tour web asset and confirm permission; the prior audit found it local-only. No broken tour player at launch. Originals remain private/local; only approved optimized derivatives ship.

## 3. Close launch gaps

- Reconcile the Source of Truth requirements against the implemented site: pricing, about/team, contact/arrival/hours, portfolio, school introduction/link, artist development and policy coverage. Existing sections can satisfy requirements where appropriate; do not create pages merely to increase page count.
- Finalize factual copy and approved privacy/terms/studio policies for the actual services used. Remove public “pending,” development banners and edit controls in the production build. Keep them where useful in local development.
- Build a production artifact allowlist: publish only website pages, runtime code and approved referenced media, excluding internal documents, draft mockups, source audio projects and unapproved media. This is a generated deployment output, not a second active site.
- Complete the 21-URL Wix inventory with Search Console/analytics and any active business links. Draft relevant permanent redirects. Gift cards, paid bookings, payment requests and store URLs need explicit preserve/replace/retire decisions; a free consultation is not a substitute for paid booking.
- Add final canonicals, titles/descriptions, social previews, accurate schema, sitemap and redirects. Preserve development noindex; enable production indexing only with the approved launch release. Noindex is not access control.
- Run authorized real EmailJS delivery tests and a Cal.com test booking/confirmation/cancellation, including timezone, availability and calendar sync. Verify every consultation entry point and both intended inquiry recipients. Obtain explicit authorization before sending test messages or creating bookings.
- Verify all pages and assets from the deployed preview on another computer/phone, keyboard/contrast, performance and audio/video playback. Configure agreed analytics and Search Console.

## 4. Host selection and deploy rehearsal

Recommended: a dedicated Netlify project for this public studio site, with external DNS retained at its current provider. Confirm account, plan and bandwidth before provisioning. This is not the separate cm-audio.vercel.app staff workspace.

GitHub Pages is currently the development preview. Its published limits prohibit using it as free hosting for running an online business; it should not be selected as the production destination for this site. [GitHub policy](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits)

Netlify supports external DNS and server-side redirects. Create the production deployment from the reviewed public artifact, first verify its preview URL, then add both `www.checkmarkaudio.com` and `checkmarkaudio.com`. Proposed canonical: `https://www.checkmarkaudio.com/`, consistent with the current Wix inventory. Use the actual project’s DNS instructions, not guessed values. Confirm plan suitability before purchase. [External DNS](https://docs.netlify.com/manage/domains/configure-domains/configure-external-dns/) · [Redirects](https://docs.netlify.com/manage/routing/redirects/overview/)

## 5. Wix cutover, step by step

1. Confirm who holds domain registration and authoritative DNS. The following Wix clicks apply only if DNS is managed there; a domain merely pointed at Wix may require changes at another provider.
2. Save the existing DNS values, Wix settings and relevant business exports, old URL list and current working website reference. Keep Wix live for rollback. DNS migration does not copy Wix orders, contacts, bookings or payment workflows.
3. Finish the replacement deployment and redirects on the new host. Set up both domain names, the intended canonical redirect, domain verification and HTTPS provisioning. Validate everything possible before switching; check certificate issuance immediately after DNS changes if it depends on them.
4. Review the exact release with Bridget/Gavin and approve the cutover window. Keep a recorded rollback owner and old DNS values ready.
5. In Wix: **Domains → Domain Actions beside checkmarkaudio.com → Manage DNS Records**.
6. Update the root **A (Host)** record(s) to the exact destination supplied by the new host. Wix uses a blank Host Name when the host specifies `@`. Replace only conflicting records for the website root.
7. Update **CNAME (Aliases)** for `www` to the supplied new-host destination. Remove only the conflicting old `www` destination. Save changes.
8. Preserve mail MX, SPF, DKIM, DMARC, verification records and unrelated subdomains. Do not transfer registration or change nameservers as part of this simple pointing cutover.
9. Allow for DNS propagation, then check apex and www, HTTPS, redirects, 404, all media, inquiry and booking from separate networks/devices. Wix says propagation can take up to 48 hours. [Wix’s official external-site pointing instructions](https://support.wix.com/en/article/connecting-a-wix-domain-to-an-external-site)
10. Verify production has the approved indexing settings, canonical URLs and sitemap; submit the sitemap in Search Console and inspect key URLs. Old-path redirects must run on the new host once it serves the domain; Wix-only redirect settings cannot do that work.
11. If a critical failure occurs, restore the saved website DNS records to Wix and investigate; rollback also takes DNS propagation time. Preserve email records throughout.
12. Monitor immediately after launch and over the following days: errors, leads, bookings, mobile playback and Search Console. Cancel only the Wix website subscription after acceptance and business-workflow reconciliation; retain domain registration/email renewals if still needed.

## First work block

Codex: prepare page-by-page fidelity review, audit music attribution/reference use, and draft the URL mapping/public deployment boundary. Bridget/Gavin: supply Tony’s portrait or approve initials, confirm Tape and the main reel’s Gavin selections, and identify additional unmixed exports. Choose the production host/account before deployment setup. No need to decide portal, merch expansion or paid-session automation to finish the public site unless an existing Wix workflow depends on it.
