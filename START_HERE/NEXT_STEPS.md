---
title: Next Steps
status: finishing_and_migration_preparation
updated: 2026-10-08
---

# Finish and migrate CheckmarkAudio.com

## October 8, 2026 — review Country Medicine identity correction

Author: OpenAI Codex; GPT-5.
Task: Correct the selected blonde artist's identity and add Country Medicine to Featured Artists.
Scope/status: The retained homepage headphones portrait, related Studio A image, Checkmark Tonight credit, filenames, and media records now identify Country Medicine. dontcallkody remains attributed only to the confirmed Austin + zardex imagery. Country Medicine is added to the existing artist mosaic without removing or reformatting another artist. Desktop and phone review, media-reference checks, canonical JSON, metadata shape, regenerated media index, source/public parity, and the 212-file noindex artifact pass. Implementation commit `b0c44e8` is pushed to both the review branch and shared `main`.

Next: Include Country Medicine's Featured Artists card and corrected credits in final Netlify acceptance review. Preserve all other artist entries and keep Wix, DNS, domain routing, and indexing unchanged until cutover approval.

## October 8, 2026 — complete the controlled Netlify domain cutover

Author: OpenAI Codex; GPT-5.
Task: Define the next steps after committing the current website baseline for Netlify and the future `checkmarkaudio.com` cutover.
Scope/status: Website implementation commit `eaa68b0` is on both the review branch and shared `origin/main`. The Netlify build publishes only `public/`, and the current artifact remains deliberately blocked from search indexing. Wix, DNS, custom-domain routing, email DNS records, and launch indexing have not been changed.

Next: Confirm Netlify successfully builds the final shared-main commit and review its HTTPS site URL on desktop and phone. Then add both `checkmarkaudio.com` and `www.checkmarkaudio.com` in Netlify without changing DNS, document the exact Netlify-provided records, preserve all mail-related DNS records, and choose the canonical hostname. Only after final owner approval should the web DNS records move from Wix to Netlify. Verify SSL, redirects, inquiry delivery, Cal.com, navigation, 404 handling, and mobile rendering before enabling `SITE_LAUNCHED=true`; keep Wix available until the cutover and rollback window are complete.

## October 8, 2026 — review the homepage artist teaser and Antoine portrait

Author: OpenAI Codex; GPT-5.
Task: Replace the first two homepage teaser images and move Antoine's black-and-white portrait into the second teaser slot.
Scope/status: The homepage teaser shows Country Medicine, Antoine, and Kai Warrior in black and white. Antoine's dedicated artist card uses the requested color interview headshot. Country Medicine was subsequently added to the Featured Artists gallery; all other cards and the teaser's third image remain unchanged.

Next: Include the teaser and Antoine crop in the final Netlify desktop/phone acceptance review; keep Wix, DNS, domain routing, and indexing unchanged until cutover approval.

## October 7, 2026 — review the refreshed Services selector photos

Author: OpenAI Codex; GPT-5.
Task: Replace the four owner-identified Services images from the gold/yellow and gray Finder-tagged media pool.
Scope/status: Mixing + Mastering now shows the illuminated analog rack, Live Recordings shows musicians recording guitar and keyboard together, Podcast + Voice-over shows the close studio microphone, and Artist Media shows dontcallkody and zardex in the requested Albuquerque photo shoot. The exact Artist Media source has been added as a web-ready WebP. Production and every other Services selection remain unchanged. Committed and pushed in `eaa68b0`.

Next: Include all selector states, especially the mobile Artist Media crop, in final Netlify acceptance testing; keep Wix, DNS, domain routing, and indexing unchanged until cutover approval.

## October 7, 2026 — review the extended Featured Artists roster

Author: OpenAI Codex; GPT-5.
Task: Add requested and clearly identified artists without changing the approved page design.
Update (2026-10-08) author: OpenAI Codex; GPT-5. Task: Remove Gardenview and Unchained, replace Antoine's color image with his black-and-white portrait, and move Jjune after Daniel / Mira Como Suena.
Scope/status: Christian's standalone card remains removed because he is represented in NEH. Antoine, Tiny House Elevator, Marz, and Jjune remain in the established mosaic styles. Gardenview and Unchained are no longer in the active roster, Antoine uses the requested interview headshot on his dedicated card, and Jjune now appears directly after Daniel / Mira Como Suena. Every other artist presentation remains unchanged. Committed and pushed in `eaa68b0`.

Next: Include the corrected 13-artist roster and Antoine crop in final Netlify acceptance testing; preserve the remaining artist entries and keep Wix, DNS, domain routing, and indexing unchanged until cutover approval.

## October 7, 2026 — review the Studio B editorial story

Author: OpenAI Codex; GPT-5.
Task: Replace the detached Studio B gallery with integrated image-and-text chapters.
Scope/status: The red-booth hero and upper three-photo detail rail remain unchanged. The lower page now pairs `Best uses` with the ZEDi control desk, `The room` with the vocal setup, and `Plan your session` with the warm golden microphone image. The non-Studio-B booth connection, blue-light booth media, and duplicate workstation tile are no longer active on Studio B. Committed and pushed in `eaa68b0`.

Next: Include the complete Studio B story in final Netlify desktop/phone acceptance testing; keep Wix, DNS, domain routing, and indexing unchanged until cutover approval.

## October 7, 2026 — continue from the shared main baseline

Author: OpenAI Codex; GPT-5.
Task: Hand the complete current website state to Claude and Codex through `main`.
Scope/status: Bridget authorized all current review-branch image and editorial work for commit and push to `main`. The implementation line now includes every October 6 owner-tagged page-media update, Studio B correction, Featured Artists expansion, the October 7 Studio A editorial story, and the shared header alignment through implementation commit `59eceb2`. Wix production, DNS, domain routing, launch approval, and indexing were not changed.

Next: Claude or any incoming assistant should fetch `origin/main`, verify the reported final remote hash, and read Project State, Rules, Document Map, Next Steps, and the recent Change Log before editing. Continue visual refinement from this shared baseline; do not revive stale worktrees or overwrite the separate dirty primary checkout.

## October 7, 2026 — review the revised Studio A editorial story

Author: OpenAI Codex; GPT-5.
Task: Integrate Studio A text and gallery images into an editorial scrolling narrative.
Scope/status: Studio A now moves from its unchanged hero and three-photo detail rail into three image-led editorial chapters. `Production` is a full-bleed photograph with overlaid copy, `Artist interview` uses the same approved black acoustic-panel texture as the inquiry banner, and `Behind the scenes` now carries the planning copy as a photographic overlay. A cymbal detail and a wider unidentified-guitarist session image form the final asymmetrical image pair before the closing banner. Bridget confirmed that the guitarist is not dontcallkody, so the active page and media selection remain deliberately generic rather than guessing the artist. The rejected flat red/cream draft and the subsequent white-and-gold Studio A treatment have both been removed. White-and-gold texture remains a homepage-only direction and should not appear on Studio A or Studio B. Implemented in `59eceb2` and included in the owner-authorized `main` handoff.

Next: Continue review from `origin/main`; preserve this approved image structure unless Bridget requests another change. Do not alter Wix, DNS, the custom domain, or indexing as part of ordinary visual refinement.

## October 7, 2026 — review the centered header wordmark

Author: OpenAI Codex; GPT-5.
Task: Center the `Checkmark Audio` wordmark against the logo.
Scope/status: The shared header title now has a small proportional optical offset that aligns its visible letterforms with the logo center on desktop and responsive layouts. Implemented in `59eceb2` and included in the owner-authorized `main` handoff.

Next: Preserve the optical alignment while continuing from `origin/main`. Do not alter Wix, DNS, or indexing as part of ordinary visual refinement.

## October 7, 2026 — review the corrected Studio B rail

Author: OpenAI Codex; GPT-5.
Task: Correct the third Studio B detail photo.
Scope/status: The third image beneath the Studio B cover now uses the confirmed blue-tagged Zardex recording-session photograph instead of the incorrect bright control-room image, and the canonical media record marks it as placed. All three Studio A/B detail-rail photos now display at their natural full-image ratio when stacked, replacing the unreadable narrow-strip crop. The 214-file release artifact remains `noindex`; implementation commit `8d3ed8e` is pushed to `codex/netlify-review-release`, and pull request #4's Netlify checks pass.

Owner correction: the red sound-booth image is restored as Studio B's hero and should remain there unless Bridget requests another change. The console close-up now appears only once, as a regular-size third gallery tile rather than the hero or oversized gallery lead.

Gallery correction: the redundant large `Artist session` tile is removed. The six remaining Studio B gallery sources and captions now match the canonical media slots; preserve the one-instance blue-booth treatment unless Bridget requests another change.

Next: Review `https://deploy-preview-4--checkmarkaudio.netlify.app/studio-b.html` and the other changed pages on desktop and phone. Do not merge pull request #4 or alter Wix/DNS/indexing without a separate explicit approval.

## October 6, 2026 — review the expanded artist roster

Author: OpenAI Codex; GPT-5.
Task: Expand the Featured Artists gallery and add the full NEH band.
Scope/status: The review page now presents Diego, Lobo, Millie, Vohn, Kai Warrior, dontcallkody + zardex, NEH, Daniel / Mira Como Suena, Gregorio and the Unknown, and Christian in a deliberately mixed grid. NEH and Kai Warrior are the only paired-photo treatments; the other entries use one strong image each. The page passes desktop and phone layout/image checks, and the 214-file `noindex` artifact is included in pushed implementation commit `8d3ed8e`.

Next: Bridget and Gavin review the artist names, ordering, image permissions, NEH pairing, and Daniel / Mira Como Suena label in pull request #4's hosted preview. Preserve the outside-the-studio, performance, and promotional emphasis unless they request a different balance.

## October 6, 2026 — review the Featured Artists and tagged-media update

Author: OpenAI Codex; GPT-5.
Task: Featured Artists page and owner-tagged media placement.
Scope/status: Pushed implementation commit `8d3ed8e` contains the Featured Artists page, homepage artist teaser, shared Artists navigation, and owner-selected color-graded image replacements across Home, Services, Studio A, Studio B, and Checkmark Tonight. Local desktop/mobile rendering, syntax, media JSON, metadata shape, links, whitespace, and the 214-file generated Netlify artifact pass. The artifact includes the renamed dontcallkody/zardex assets and remains `noindex,nofollow`. Local preview: `http://127.0.0.1:4193/featured-artists.html`; pull request #4's hosted deploy preview is ready.

October 6 owner correction: the mistakenly blue-tagged old vocal-booth snapshot was removed from every active placement and replaced with the Studio B console/current booth imagery. Its source file remains preserved but unused.

October 6 homepage correction: the purple motion guitarist photograph is no longer a hero slide, and the banner now rotates through three stronger images. Only the page-one Featured Artists strip uses three native black-and-white portraits. The dedicated Featured Artists gallery keeps its original color and black-and-white selections; do not apply a page-wide grayscale treatment.

October 6 gallery correction: the two Kai Warrior portraits are one responsive side-by-side feature with one shared name caption. Preserve this pairing and its individual focal crops unless Bridget requests another arrangement.

October 8 Checkmark Tonight identity correction: the thumbnail grid remains caption-free and opens an accessible full-screen viewer with navigation and confirmed artist credits. Preserve the interaction. Bridget confirmed that the blonde artist is Country Medicine and that dontcallkody is Austin, a man. The purple light-trail portrait and live-recording preparation photo still require owner identification before those two viewer credits can be filled.

October 6 SEO naming correction: the new blue-tagged zardex Studio B portrait and two green-tagged dontcallkody/zardex portraits now have optimized lowercase WebP names and catalog records. They are intentionally unplaced. Next visual pass: decide whether the blue image belongs in Studio B and which green image belongs on Featured Artists; do not add both automatically if that makes the gallery repetitive.

October 6 Services correction: preserve the restored collaborative Production photograph showing Gavin recording a band with Richard present. The keyboard image remains available for a later secondary placement; do not displace another approved image merely to use it.

October 6 homepage banner correction: preserve the approved order of studio sign, airborne red-electric-guitar pose, and control-room microphone. Keep Richard out of the banner and keep the guitarist's face outside the visible crop on desktop and phone.

Next: Bridget and Gavin review the Featured Artists wording, image order, Studio A/B placement, and Checkmark Tonight gallery in the hosted preview; supply any missing artist names and confirm public-use permission. Keep the pull request unmerged, keep `SITE_LAUNCHED` off, and leave Wix/DNS untouched until later launch approval.

## October 5, 2026 — Netlify review release ready for hosted review

Author: OpenAI Codex; GPT-5.
Task: Prepare clean Netlify review release.
Scope/status: Isolated branch `codex/netlify-review-release` contains the existing Claude-authored Netlify configuration plus audited active website changes in implementation commit `af82ca9`. The generated non-indexed artifact is 175 files / approximately 61 MB and excludes internal planning, drafts, archives, raw masters, and unused media-library material. Desktop and phone QA passed across the ten active pages, including rendered media and the homepage audio/video players. Pull request #4 and its Netlify Deploy Preview are live; Wix production and DNS remain untouched.

Next: review `https://deploy-preview-4--checkmarkaudio.netlify.app/` on desktop and phone, listen through the comparison/demo samples, and confirm the studio media and Services content. Keep pull request #4 unmerged during review. Merging to `main`, enabling production indexing, or changing the custom-domain DNS each require a later explicit approval.

## October 5, 2026 — listening metadata release complete

Author: OpenAI Codex; GPT-5.
Task: Commit and push approved October 5 metadata corrections and affiliate links.
Scope/status: the five owner-confirmed title/artist corrections, the 15-second `Love never Dies — Bloodshot` final-song demo excerpt, matching comparison label, and five official affiliate badge links are pushed to `origin/main` in `f30e5a6eaa8aa0b26e589611f1d2a915e1cccf01`. Validation covered syntax, JSON, whitespace, full MP3 decode/checksum, browser metadata/playback, external links, and responsive badge layout. Unrelated local work was preserved and excluded.

Next: listen-review the Bloodshot excerpt and corrected reel labels, then continue the existing website completion list. Hosted deployment remains unchecked; keep the replacement noindex and keep Wix live. No DNS/domain work is authorized by this release.

## October 3, 2026 — swap demo and comparison positions

Author: OpenAI Codex; GPT-6.
Task: adding music tracks (`01a0fdad-2931-7ca0-aa72-34edc50734c9`), listening-player position trial.
Scope: Bridget requested swapping the demo and before/after comparison while keeping the backgrounds where they were. The first, light paper section now contains Hear the difference and its comparison; the second, dark felt section contains Inside the work and the existing demo console. Headings follow their players; `#work` continues to target the comparison and `#homepage-reel-title` follows the demo. The four visual drafts remain unselected; no new unit design was promoted.

Changed `index.html`, narrowly extended console selectors in `checkmark-rounded-bevels.css` and `checkmark-gold-theme.css` so the existing console style follows its new parent, and added light-ground comparison title/caption colors in `checkmark-comparison.css`. Recorded placement in `MEDIA/WEBSITE_MEDIA_SELECTIONS.json`. Background images, base colors, blend/overlay treatment and order are preserved; no audio, playlist, logo or playback script changed. The newer header/transparency fix from the other task is preserved.

Validation: browser computed styles before/after match both backgrounds exactly (paper overlay 0.72; dark felt overlay 0.34). Visually reviewed both players at 1440px and 390px; settled 320px layout has no page overflow or out-of-bounds player elements. Verified mixed/unmixed selection, Song of Solomon/Tape navigation, demo track navigation, and playback exclusivity in both directions. Confirmed unique player/anchor IDs, valid media JSON, scoped whitespace checks, and byte-identical unrelated homepage markup after excluding the two swapped sections and three CSS cache versions.

Status/next: Bridget approved this player placement on October 3 and requested a scoped commit/push. This entry accompanies that approved commit; remote delivery is verified after push. Preview port 4191 serves the root checkout. Next: simplify the smartphone comparison with Before and After side by side. Previous contact/map/tour/header work and visual drafts remain local and outside this commit; Wix remains production.


## October 2, 2026 — three additional demos ready for listening review

Author: OpenAI Codex; GPT-6.
Task: adding music tracks (`01a0fdad-2931-7ca0-aa72-34edc50734c9`).
Scope/status: added owner-confirmed Are You Alright (without Master), MAI and Raudo after Hyper and before the three retained original songs. There are now 16 demos. Selected 15-second cuts: Are You Alright 02:02.25; MAI 00:10.8; Raudo 00:14.8. MAI/Raudo start about two seconds before the first sustained bass entrances inferred from audio analysis. All three decode/play to 15 seconds; source hashes, title/order/path, JS/JSON and scoped whitespace checks pass. Source masters preserved locally and Git-ignored.

Next: listen/review musical cut boundaries and the impactful-passage choice; identify Bloodshot / Love never Dies in Tape13. Current additions plus VALAO/BOOM remain local/uncommitted on `9b97485`, preview 4191. No staging, push or deployment in this follow-up. Existing ordering, styling and comparisons are preserved; exact source records are in the audio selection manifest.

## October 2, 2026 — VALAO and BOOM source matches resolved

Author: OpenAI Codex; GPT-6.
Task: adding music tracks (`01a0fdad-2931-7ca0-aa72-34edc50734c9`).
Scope/status: implemented VALAO first at the owner-specified 00:44–00:58 (14 seconds), and renamed the identified Bagpipebeat selection BOOM, placed after BULLSHIT / before Up Next with a 00:40–00:55 excerpt. Source manifests updated; original masters preserved. Both clips decode, play and show correct durations; JS/JSON/scoped diff checks pass. New work is local/uncommitted on `9b97485`, preview 4191; prior reel push remains intact.

Next: review BOOM’s automatically selected passage and identify Bloodshot / Love never Dies within Tape13. VALAO and BOOM no longer need locating. Existing comparisons, remaining tracks, design and other contributors’ work remain unchanged. See Project State and audio selection manifest for source details. No commit, push, staging or deployment changes in this follow-up.

October 2 publication authorization — Author: OpenAI Codex; GPT-6. Task: adding music tracks (`01a0fdad-2931-7ca0-aa72-34edc50734c9`). Bridget approved these five added clips and requested commit/push before the separate map, consultation and studio-tour fixes. Original source masters remain local-only; unrelated work is excluded. Remote synchronization and scoped validation precede the push.

## October 2, 2026 — finish requested demo reel updates

Author: OpenAI Codex; GPT-6.
Task: adding music tracks (`01a0fdad-2931-7ca0-aa72-34edc50734c9`).
Scope/status: requested original numbered removals and eight available selections are implemented locally; Prolly in the Club, Save You and Greif follow the new selections per Bridget, Solo appears once. Source/master files and prior contributors' work remain intact. See Project State and `MEDIA/AUDIO/demo-clips/selection.json` for current order/source positions and verification. All 11 active clips decode to 15 seconds; browser navigation and playback exclusivity, syntax/JSON and scoped diff checks passed. No commit, push, staging or deployment changes.

Next: locate named VALAO (cut 0:44–0:56 or 0:58), identify unnamed BOOM, and identify the Bloodshot / Love never Dies passage in the 32:32 Tape13 master. Insert these at their requested positions, then review the automated excerpt cuts by listening. Codex recommends Tape 1 unmixed stay in the existing comparison only; Bridget asked for a recommendation, not yet an explicit final placement decision. The located source folder is `MEDIA/AUDIO/CMA Demo Reels/`; recent AirDrop provenance is unverified. Keep root `main` at `f26243e`, preview 4191, current design and existing Services changes. This supersedes the older unspecific 11-track curation instruction below; publication work remains separate.
October 2 approval update — Author: OpenAI Codex; GPT-6. Task: adding music tracks (`01a0fdad-2931-7ca0-aa72-34edc50734c9`). Bridget approved the current reel and explicitly authorized committing and pushing this task’s changes. Missing-track work remains pending; this does not approve Wix/domain cutover. Commit scope excludes other contributors’ pending website, Services, media and draft work. Remote history fetched and matches the starting local HEAD; scoped checks passed. Delivery verified: implementation commit `d04807ea3aad52b3143a05861e69599088fda407` was pushed to `origin/main` and matched GitHub’s main ref on October 2. This documentation follow-up records that result. Hosted build completion was not checked. Unrelated local work remains unstaged; Wix/domain routing is unchanged.


This is the execution order and migration runbook, not a second completion checklist. `CHECKMARK_AUDIO_WEBSITE_SOURCE_OF_TRUTH.docx` remains the acceptance authority. September 12 request: finish the aesthetics, music, outstanding corrections, then migrate from Wix. Preparation is authorized; perform the actual domain cutover after the final review. No DNS changes have been made in this pass.

## Current working baseline — September 23

- Continue in `/Users/bridges/GITHUB/CheckmarkAudio.com`, preview port 4191. Read its current records and inspect staged/unstaged/untracked work before editing. The older `48c9` worktree and GitHub Pages preview are not the latest design baseline.
- Preserve the Services seven-fader rack and large CD, the exact layered microphone/paper demo background, and flat photo collections. Preserve all later navigation, audio, and editor work. The September 23 recovery found these intact; do not recreate them from older drafts or perform a whole-site rollback.
- September 25 supersedes the earlier navigation hold: Live opens Checkmark Tonight at `community.html`; the separate paid Checkmark Live service retains Services/footer access.
- September 23 update — OpenAI Codex (GPT-6), task “Astra audit Claude website changes”: Bridget now authorizes the current main-checkout checkpoint and push, limited to the current website and necessary files. Older versions, draft galleries, and superseded exports must remain local. Website checkpoint `18bd0f964cc2abbcbeac05c1d0f89289addd7ec8` was pushed and remote-verified; confirm the matching GitHub Pages build finishes. Do not merge stale website code or include oversized raw audio/DAW sources; preserve those in the documented local backup. No domain cutover is authorized.

## 1. Finish the approved aesthetic

Codex implements and verifies; Bridget/Gavin review one coherent desktop/phone preview.

- Preserve the approved homepage and existing Services selector. Services gets only the already requested additive Mixing/Mastering content; no replacement Services design.
- Retain the approved microphone-02 repeating background at its selected scale/opacity, seamless edge correction, and full paper overlay. Use original-resolution assets.
- Keep the Team 07C light editorial grid, fine rules, restrained typography, black transparent headphones. Do not revive the rejected scattered/cabled instrument variations. Tony still needs an approved portrait or an intentional initials treatment with no “selection pending” copy.
- Keep 404 10A (patchbay/disconnected cable) and dedicated Checkmark Live 04A. Checkmark Live and the Community/Checkmark Tonight page have different purposes.
- Audit all visible art for true transparency, sharpness and integration. Photo compilations and review banner stay flat, without rounded gold bevels. Use dimensional treatment only on appropriate equipment/functional controls.
- Final pass across Home, Services, Recording, Mixing & Mastering, Checkmark Live, Studio A, Studio B, Team, Community, Q&A and 404: spacing, readable typography, mobile crops, menus, tap targets, keyboard focus, reduced motion, and image loading.
- Review the September 25 Checkmark Tonight implementation; the older Community title-finish exploration is superseded.
- Record approved screenshots after Bridget accepts the rendered pages. Existing implementation is not automatic visual approval.

## 2. Finish the music and media

- September 23 update — OpenAI Codex (GPT-6), task “Astra audit Claude website changes”: all active website samples are now 15 seconds, pushed and remote-verified in `89bbe33adb49f8546676da8f5a6e1ee8999e8889` after Bridget's September 23 authorization. GitHub Pages was building that commit at verification; check deployment completion. Review the automatically selected high-activity passages, particularly phrase boundaries, in the demo reel and both comparisons. Original masters and 30-second backups are preserved. Only the current audio update and supporting records were committed; raw projects, old clips, and unrelated new `GROK_BOT/` files remain outside this push.

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

## September 25, 2026 — current visual review

Author: OpenAI Codex; GPT-6.
Task: 01a08746-c9e1-7e63-aac3-39e70c220654.

Review implemented Checkmark Tonight at `http://127.0.0.1:4191/community.html`. Live replaces Community in navigation and follows Bridget's selected 04A reference with original assets. Desktop/mobile and syntax checks passed; local/uncommitted, not published. Earlier Team/Community draft batches were rejected; do not continue them. Preserve Services and the separate paid live-recording service page. Remaining launch and Grok cleanup work stays separate.

### September 25 — authorized Git handoff

Author: OpenAI Codex; GPT-6.
Task: 01a08746-c9e1-7e63-aac3-39e70c220654.

Bridget requested committing and pushing this task’s Checkmark Tonight work before Grok continues. Scope: Tonight page/CSS, Live navigation labels, hero media registration and this task’s records only. Other contributors’ edits, archives and draft galleries stay untouched and unstaged. Remote main fetched before checkpoint. Implementation commit `54fbf79fc6daea2f1a710e750eb4ab60ec044eea` was pushed to `origin/main` and verified with `git ls-remote`. Grok should start from that implementation plus this handoff record, preserving the remaining local changes. Hosted build completion was not checked. Wix/domain cutover is not part of this request.

## September 25, 2026 — approved light grey reviews and transparent affiliate logo

Author: OpenAI Codex; GPT-6.
Task: 01a08746-c9e1-7e63-aac3-39e70c220654.

Bridget approved the light grey review-banner draft and removal of “Built on trust,” and requested commit/push. Implemented a scoped `checkmark-review-grey.css` override (#eeeeec with existing texture desaturated at .18 opacity), removed that eyebrow in `index.html`, and replaced the film-school logo reference with `MEDIA/IMAGES/BY_PAGE/home/los-angeles-film-school-logo-transparent.png`. Extracted original light lettering from the existing 1024×238 logo into RGBA with antialiased alpha; original source retained. Browser verified the grey banner, absent eyebrow, retained reviews/stars and clean logo on black. PNG alpha spans 0–255. Concurrent checkpoint `24dafa5` captured this task’s index.html references while this work was underway; Codex implemented those review/logo references. This follow-up supplies their CSS/PNG dependencies. Other contributors’ remaining texture/media/cleanup changes are preserved. Status: approved implementation committed and pushed in `9f5de4684116988651ed45020a1a6e009b688341`, verified against origin/main. Hosted build completion not checked. No Wix cutover. Next: Grok may continue from this checkpoint while preserving remaining local work.
