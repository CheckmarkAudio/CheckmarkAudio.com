# Checkmark Audio Website

Static GitHub Pages rebuild for CheckmarkAudio.com. The current production entry point is `index.html`.

## Folder Map

- `00_START/`: quick-start docs, project history, migration notes, and baseline planning.
- `01_WEBSITE/`: website completion playbook and the active source-of-truth DOCX.
- `02_ASSETS/`: tracked source image library and optimized production assets.
- `03_EMAIL_TEMPLATES/`: EmailJS-ready templates and email copy.
- `04_MIGRATION/`: Wix migration manifests, URL records, and asset audit output.
- `98_TOOLS/`: local helper scripts for extraction, downloads, and asset audits.
- `99_ARCHIVE/`: archived or ignored local material that should not drive the website build.

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

The public site should use optimized deployable files from `02_ASSETS/production/`.
The tracked source image library now lives in `02_ASSETS/library/`, with cleaned, descriptive filenames so future website planning can find usable images without digging through Wix hashes.
Keep new raw one-off downloads in `99_ARCHIVE/ignored-local/original-assets/` only as temporary local intake; that folder is ignored by Git.

Project history, migration context, and asset naming rules live in `00_START/`.

## Booking Note

The current Wix booking flow is replaced with direct consultation requests by email and phone. Add a scheduling provider link later if you want automated calendar booking after the domain cutover.

## Pulling Media From Wix

Wix does not provide a clean full-site HTML/CSS export. For media migration, use Wix Media Manager downloads when possible. If there is no bulk download button, you can export a local Chrome HAR from the Wix Media Manager network traffic and let this repo extract media URLs.

Suggested workflow:

1. In Chrome DevTools, open the **Network** tab.
2. Refresh the Wix Media Manager page.
3. Scroll through the full media library so every item loads.
4. Right-click the Network request list and choose **Save all as HAR with content**.
5. Save it into this repo as `99_ARCHIVE/ignored-local/wix-export/media.har`.
6. Run:

```sh
node 98_TOOLS/extract-wix-media.mjs 99_ARCHIVE/ignored-local/wix-export/media.har
node 98_TOOLS/download-wix-media.mjs 99_ARCHIVE/ignored-local/wix-export/wix-media-urls.txt 99_ARCHIVE/ignored-local/original-assets
```

HAR files can contain sensitive request metadata. Keep `99_ARCHIVE/ignored-local/wix-export/*.har` local and do not commit it.

## Website Completion Source Of Truth

The active website completion checklist lives at `01_WEBSITE/99_SOURCES/CHECKMARK_AUDIO_WEBSITE_SOURCE_OF_TRUTH.docx`. Codex and Claude should update that DOCX only for checklist answers, SEO notes, SEO gaps, and build-ready planning.

The handler rules for this workflow live at `01_WEBSITE/00_INDEX/source-of-truth-rule.md` and `01_WEBSITE/00_INDEX/handler-filing-protocol.md`.
