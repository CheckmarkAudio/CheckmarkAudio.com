#!/usr/bin/env python3
"""Brighten an underexposed photo by lifting its shadows.

Applies a gamma curve plus a gentle S-curve, which raises dark tones steeply
while leaving white at white. This is what a CSS `brightness()` filter cannot
do: brightness multiplies every pixel, so it blows out highlights long before
it opens deep shadows.

Used for the Community banner, whose source sits at a median luminance of
about 17/255. If a matching transparent cutout exists (the depth-effect
layer), pass it too — it must get the IDENTICAL curve or the two layers stop
matching where they overlap.

Usage (from the repository root):
    python3 MEDIA/IMAGES/make-brightened-photo.py <photo> [--cutout <cutout>] [--exp 0.45]

Lower --exp means brighter (0.55 is a moderate lift, 0.45 stronger, 0.65
subtle). 1.0 leaves the image unchanged. Outputs alongside the source with a
`-brightened` suffix and prints before/after luminance so the change is
measurable rather than guessed at.
"""
import argparse, os
from PIL import Image, ImageStat


def build_lut(exp):
    lut = []
    for v in range(256):
        x = (v / 255.0) ** exp
        x = x + 0.10 * x * (1 - x) * (2 * x - 1)   # keep some contrast
        lut.append(min(255, max(0, round(x * 255))))
    return lut


def stats(img):
    g = img.convert('L')
    h = g.histogram()
    tot = sum(h)
    def pct(p):
        c = 0
        for v, n in enumerate(h):
            c += n
            if c >= tot * p:
                return v
        return 255
    return round(ImageStat.Stat(g).mean[0], 1), pct(.25), pct(.5), pct(.75)


def out_path(path):
    root, ext = os.path.splitext(path)
    # Keep the descriptor last: "...-brightened-foreground-cutout.webp",
    # which is what community.html references.
    for tail in ('-foreground-cutout',):
        if root.endswith(tail):
            return f'{root[:-len(tail)]}-brightened{tail}{ext}'
    return f'{root}-brightened{ext}'


ap = argparse.ArgumentParser()
ap.add_argument('photo')
ap.add_argument('--cutout', help='matching transparent cutout, gets the same curve')
ap.add_argument('--exp', type=float, default=0.45, help='lower = brighter (default 0.45)')
args = ap.parse_args()

lut = build_lut(args.exp)

im = Image.open(args.photo).convert('RGB')
before = stats(im)
lifted = im.point(lut * 3)
after = stats(lifted)
dst = out_path(args.photo)
lifted.save(dst, 'WEBP', quality=90, method=6)
print(f'exp={args.exp}')
print(f'  before  mean {before[0]}  p25/p50/p75 {before[1]}/{before[2]}/{before[3]}')
print(f'  after   mean {after[0]}  p25/p50/p75 {after[1]}/{after[2]}/{after[3]}')
print(f'  wrote {dst} ({round(os.path.getsize(dst)/1024)} KB)')

if args.cutout:
    cu = Image.open(args.cutout).convert('RGBA')
    r, g, b, a = cu.split()
    rgb = Image.merge('RGB', (r, g, b)).point(lut * 3)
    cdst = out_path(args.cutout)
    Image.merge('RGBA', (*rgb.split(), a)).save(cdst, 'WEBP', quality=90, method=6)
    print(f'  wrote {cdst} ({round(os.path.getsize(cdst)/1024)} KB)')
