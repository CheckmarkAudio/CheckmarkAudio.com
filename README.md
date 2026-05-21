# Checkmark Audio Website

Static GitHub Pages rebuild for CheckmarkAudio.com. The current production entry point is `index.html`.

## Local Preview

Open `index.html` directly in a browser, or run a tiny local server:

```sh
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Deploying To GitHub Pages

1. Push this folder to the GitHub repository for `CheckmarkAudio.com`.
2. In GitHub, open **Settings > Pages**.
3. Set the source to the main branch and root folder.
4. Confirm the custom domain is `CheckmarkAudio.com`.

The `CNAME` file is included so GitHub Pages keeps the custom domain attached after deploys.
The static launch also includes `.nojekyll`, `404.html`, `robots.txt`, and `sitemap.xml`.

## Asset Policy

The public site should use optimized files from `assets/`. Keep full-resolution Wix downloads in `original-assets/` locally as source material; that folder is ignored by Git so the deployed site stays lightweight.

Project history, migration context, and asset naming rules live in `docs/`.

## Booking Note

The current Wix booking flow is replaced with direct consultation requests by email and phone. Add a scheduling provider link later if you want automated calendar booking after the domain cutover.

## Pulling Media From Wix

Wix does not provide a clean full-site HTML/CSS export. For media migration, use Wix Media Manager downloads when possible. If there is no bulk download button, you can export a local Chrome HAR from the Wix Media Manager network traffic and let this repo extract media URLs.

Suggested workflow:

1. In Chrome DevTools, open the **Network** tab.
2. Refresh the Wix Media Manager page.
3. Scroll through the full media library so every item loads.
4. Right-click the Network request list and choose **Save all as HAR with content**.
5. Save it into this repo as `wix-export/media.har`.
6. Run:

```sh
node tools/extract-wix-media.mjs wix-export/media.har
node tools/download-wix-media.mjs wix-export/wix-media-urls.txt original-assets
```

HAR files can contain sensitive request metadata. Keep `wix-export/*.har` local and do not commit it.
