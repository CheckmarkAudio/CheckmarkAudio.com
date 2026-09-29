# Hosting and publishing

Decided 2026-09-29 by Gavin: the live site is hosted on Netlify. GitHub stays the source of truth; Netlify watches this repo and publishes it. GitHub Pages remains a development preview until launch.

## Where the site can be seen

| Address | What it shows | Search engines |
|---|---|---|
| `checkmarkaudio.netlify.app` | Whatever is on `main` right now | Blocked |
| `deploy-preview-<PR number>--checkmarkaudio.netlify.app` | That pull request's changes, before they reach `main` | Blocked |
| `checkmarkaudio.com` | Still the Wix site, until the DNS switch | Wix |

## Making changes safely

1. Work on a branch and open a pull request. Nothing goes live from a branch.
2. Netlify posts a preview link on the pull request. Review it on desktop and phone.
3. When Gavin says ship it, merge the pull request. `main` updates and Netlify republishes within a few minutes.
4. If something is wrong after a merge, use Netlify's Deploys page to publish the previous version again, then fix it in a new pull request.

Once the domain points at Netlify, merging to `main` changes the public website immediately. Do not push directly to `main` from then on.

## Launch day

1. Set `SITE_LAUNCHED=true` for the Production context in Netlify (Site configuration → Environment variables), then redeploy. This removes the noindex tags and opens `robots.txt`.
2. Add `www.checkmarkaudio.com` and `checkmarkaudio.com` under Domain management, then update the website records in Wix DNS as `NEXT_STEPS.md` section 5 describes. Keep every email record.

## How the build works

`netlify.toml` runs `scripts/build-public.mjs`, which copies only Git-tracked site pages, their code and web media into `public/`. Internal documents, DRAFTS, ARCHIVE and media masters are never published. `_redirects` sends the old Wix addresses to the new pages.
