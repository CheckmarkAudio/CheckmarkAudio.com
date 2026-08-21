# Module 1 PDF Conversion Notes

Source PDF:
`/Users/bridges/Desktop/checkmark_production_blueprint_method_render_exact.pdf`

The source PDF is flattened: each page is a single JPEG image inside a PDF. The original design objects and text boxes are not present in the PDF, so they cannot be directly recovered as native InDesign/Illustrator layers.

## Output Folders

- `module1-page-images/`
  Extracted page artwork from the PDF. These preserve the visual design exactly.

- `module1-exact-svg/`
  One SVG per page with the exact page artwork embedded as a single full-page image.

- `module1-editable-overlay-svg/`
  One SVG per page with the page artwork dimmed and OCR text placed on top as editable SVG text objects. Open these in Illustrator, Affinity Designer, or Inkscape to move/edit the recognized text.

- `module1-hocr/`
  Tesseract OCR layout data used to place the editable text.

## Practical Workflow

1. Open a file from `module1-editable-overlay-svg/`.
2. Use the dimmed page art as the exact layout reference.
3. Edit or replace the OCR text objects as needed.
4. When rebuilding clean production artwork, recreate or mask the original raster text underneath.
5. Keep `module1-exact-svg/` nearby as the pixel-perfect visual reference.

## Important Limitation

The OCR text is reconstructed from an image. It will need proofreading and font/spacing cleanup. The design itself is preserved perfectly as raster page art, but individual visual components are not recoverable as separate editable vector objects from this PDF alone.
