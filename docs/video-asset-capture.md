# Wix Video Asset Capture

The image asset capture is complete. Video files were not present in the current source inventory, so videos need a focused Wix Media Manager capture.

## Goal

Create:

```text
wix-export/videos.har
```

Then run the existing extractor/downloader against it.

## Browser Steps

1. Open Wix Media Manager while logged in.
2. Go to the Videos section or filter the media library to videos.
3. Open Chrome DevTools.
4. Go to the Network tab.
5. Clear the Network request list.
6. Make sure All is selected, not only Img or Media.
7. Refresh the Wix Media Manager page.
8. Return to the Videos section if Wix resets the view.
9. Scroll through the full video library slowly so every item loads.
10. Right-click a request row.
11. Choose Copy > Copy all as HAR (sanitized).
12. Open TextEdit.
13. Choose Format > Make Plain Text.
14. Paste.
15. Save as:

```text
/Users/bridges/GITHUB/CheckmarkAudio.com/wix-export/videos.har
```

## Extraction Commands

After `videos.har` exists:

```sh
cd /Users/bridges/GITHUB/CheckmarkAudio.com
node tools/extract-wix-media.mjs wix-export/videos.har wix-export/videos
node tools/download-wix-media.mjs wix-export/videos/wix-media-urls.txt original-assets/videos
node tools/audit-assets.mjs
```

## Current Status

- Video HAR file: not captured yet.
- Source audit currently shows 0 video files.
- Next action requires a logged-in Wix browser session.
