#!/usr/bin/env python3
"""
Re-export a color-corrected original from MEDIA/ORIGINALS/ back into every
MEDIA/IMAGES/ location that already uses that filename, overwriting in
place (same path, same name) so nothing else on the site needs to change.

Usage:
    python3 scripts/update-web-image.py acoustic-guitar-front-product-photo
    python3 scripts/update-web-image.py acoustic-guitar-front-product-photo antoine-album-cover-1
    python3 scripts/update-web-image.py --all

Quality/size defaults match the last known-good settings for this site
(quality 95, longest edge capped at 2400px, never upscaled).
"""
import argparse
import sys
from pathlib import Path

from PIL import Image, ImageOps

REPO_ROOT = Path(__file__).resolve().parent.parent
ORIGINALS_DIR = REPO_ROOT / "MEDIA" / "ORIGINALS"
IMAGES_DIR = REPO_ROOT / "MEDIA" / "IMAGES"
ORIGINAL_EXTS = [".jpg", ".jpeg", ".png", ".tif", ".tiff", ".heic"]


def find_original(stem: str) -> Path | None:
    for ext in ORIGINAL_EXTS:
        candidate = ORIGINALS_DIR / f"{stem}{ext}"
        if candidate.exists():
            return candidate
    return None


def find_web_targets(stem: str) -> list[Path]:
    return sorted(IMAGES_DIR.rglob(f"{stem}.webp"))


def render_webp(source: Path, quality: int, max_edge: int) -> bytes:
    with Image.open(source) as im:
        im = ImageOps.exif_transpose(im)
        if im.mode not in ("RGB", "RGBA"):
            im = im.convert("RGBA" if "A" in im.getbands() else "RGB")

        w, h = im.size
        longest = max(w, h)
        if longest > max_edge:
            scale = max_edge / longest
            im = im.resize((round(w * scale), round(h * scale)), Image.LANCZOS)

        from io import BytesIO
        buf = BytesIO()
        im.save(buf, format="WEBP", quality=quality, method=6)
        return buf.getvalue()


def update_one(stem: str, quality: int, max_edge: int) -> bool:
    source = find_original(stem)
    if source is None:
        print(f"  SKIP  {stem}: no file found in MEDIA/ORIGINALS/ (tried {', '.join(ORIGINAL_EXTS)})")
        return False

    targets = find_web_targets(stem)
    if not targets:
        print(f"  SKIP  {stem}: original found, but no matching .webp under MEDIA/IMAGES/")
        return False

    data = render_webp(source, quality, max_edge)
    for target in targets:
        before = target.stat().st_size
        target.write_bytes(data)
        after = target.stat().st_size
        print(f"  OK    {target.relative_to(REPO_ROOT)}  ({before // 1024}KB -> {after // 1024}KB)")
    return True


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("names", nargs="*", help="filename stems (no extension) to regenerate")
    parser.add_argument("--all", action="store_true", help="regenerate every original in MEDIA/ORIGINALS/")
    parser.add_argument("--quality", type=int, default=95)
    parser.add_argument("--max-edge", type=int, default=2400)
    args = parser.parse_args()

    if not args.all and not args.names:
        parser.error("pass one or more filename stems, or --all")

    if args.all:
        stems = sorted({p.stem for p in ORIGINALS_DIR.iterdir() if p.suffix.lower() in ORIGINAL_EXTS})
    else:
        stems = args.names

    ok = 0
    for stem in stems:
        print(f"{stem}:")
        if update_one(stem, args.quality, args.max_edge):
            ok += 1

    print(f"\n{ok}/{len(stems)} regenerated.")
    return 0 if ok == len(stems) else 1


if __name__ == "__main__":
    sys.exit(main())
