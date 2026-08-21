#!/usr/bin/env python3
"""Create clean geometric SVG companions for the official transparent logo PNGs."""

from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
IMAGE_DIR = ROOT / "MEDIA" / "IMAGES"


LOGO_GEOMETRY = '''  <g class="logo-mark">
    <path d="M21 96V82C21 39 54 7 95 7s74 32 74 75v14" fill="none" stroke="{paint}" stroke-width="6" stroke-linecap="round"/>
    <rect x="10" y="89" width="43" height="76" rx="12"/>
    <rect x="5" y="101" width="12" height="52" rx="6"/>
    <rect x="137" y="89" width="43" height="76" rx="12"/>
    <rect x="173" y="101" width="12" height="52" rx="6"/>
    <path d="M69 90a26 26 0 0 1 52 0Z"/>
    <rect x="68" y="96" width="54" height="9" rx="1"/>
    <rect x="68" y="113" width="54" height="9" rx="1"/>
    <rect x="68" y="130" width="54" height="9" rx="1"/>
    <rect x="68" y="147" width="54" height="9" rx="1"/>
    <rect x="92" y="88" width="6" height="71" rx="3"/>
    <path d="M69 157h52a26 26 0 0 1-52 0Z"/>
    <path d="M61 158a34 34 0 0 0 68 0" fill="none" stroke="{paint}" stroke-width="7" stroke-linecap="round"/>
    <rect x="92" y="188" width="6" height="7"/>
    <rect x="76" y="193" width="38" height="5" rx="2.5"/>
  </g>
'''


def write_svg(filename, fill, definitions=""):
    geometry = LOGO_GEOMETRY.format(paint=fill)
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 190 198" role="img" aria-labelledby="title desc">
  <title>Checkmark Audio logo</title>
  <desc>Headphones surrounding a vintage studio microphone.</desc>
{definitions}  <g fill="{fill}">
{geometry}  </g>
</svg>
'''
    (IMAGE_DIR / filename).write_text(svg, encoding="utf-8")


if __name__ == "__main__":
    outputs = [
        ("checkmark-audio-logo-official-black-transparent.svg", "#000000", ""),
        ("checkmark-audio-logo-official-white-transparent.svg", "#ffffff", ""),
        (
            "checkmark-audio-logo-official-gold-gradient-transparent.svg",
            "url(#gold-gradient)",
            '''  <defs>
    <linearGradient id="gold-gradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#f5dda0"/>
      <stop offset="0.42" stop-color="#b87524"/>
      <stop offset="0.66" stop-color="#e7bd62"/>
      <stop offset="1" stop-color="#a9651e"/>
    </linearGradient>
  </defs>
''',
        ),
    ]
    for filename, fill, definitions in outputs:
        write_svg(filename, fill, definitions)
        print(filename)
