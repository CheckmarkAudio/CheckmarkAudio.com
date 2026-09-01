// Cut the foreground people out of a photo, keeping the original canvas size.
//
// Used for the Community page depth effect, where the foreground subjects are
// layered above the COMMUNITY title. Uses the macOS Vision framework — the same
// subject-isolation the iPhone lock screen depth effect uses.
//
// Usage (needs macOS 14+; run from the repository root):
//     swift MEDIA/IMAGES/make-subject-cutout.swift <input-photo> <output-dir>
//
// Writes cutout-all.png (every foreground subject) plus one PNG per subject, all
// on the SAME canvas size as the input so the cutout overlays the original 1:1 —
// that exact registration is what keeps the depth layer aligned. Convert the
// chosen file to webp before committing it, and update the community-depth
// data-depth-for attribute in community.html if the source photo changes.

import Foundation
import Vision
import CoreImage

let args = CommandLine.arguments
guard args.count >= 3 else {
    print("usage: cutout <input-image> <output-dir>")
    exit(1)
}
let inputPath = args[1]
let outDir = args[2]

guard let src = CGImageSourceCreateWithURL(URL(fileURLWithPath: inputPath) as CFURL, nil),
      let cgImage = CGImageSourceCreateImageAtIndex(src, 0, nil) else {
    print("ERROR: could not load \(inputPath)")
    exit(1)
}
print("loaded \(cgImage.width)x\(cgImage.height)")

let request = VNGenerateForegroundInstanceMaskRequest()
let handler = VNImageRequestHandler(cgImage: cgImage, options: [:])
do {
    try handler.perform([request])
} catch {
    print("ERROR: vision failed: \(error)")
    exit(1)
}

guard let observation = request.results?.first else {
    print("ERROR: no foreground instances found")
    exit(1)
}
let instances = observation.allInstances
print("instances found: \(instances.count) -> \(Array(instances))")

let ciContext = CIContext()
func save(_ pb: CVPixelBuffer, _ name: String) {
    let ci = CIImage(cvPixelBuffer: pb)
    guard let png = ciContext.pngRepresentation(
        of: ci, format: .RGBA8,
        colorSpace: CGColorSpace(name: CGColorSpace.sRGB)!) else {
        print("ERROR: encode failed for \(name)"); return
    }
    let path = "\(outDir)/\(name)"
    try? png.write(to: URL(fileURLWithPath: path))
    print("wrote \(name)")
}

// Full-canvas cutouts (not cropped) so they overlay the original 1:1.
if let all = try? observation.generateMaskedImage(
    ofInstances: instances, from: handler, croppedToInstancesExtent: false) {
    save(all, "cutout-all.png")
}
for idx in instances {
    if let one = try? observation.generateMaskedImage(
        ofInstances: [idx], from: handler, croppedToInstancesExtent: false) {
        save(one, "cutout-\(idx).png")
    }
}
print("done")
