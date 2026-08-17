// Derives usable logo assets from the supplied flat-background JPEG.
//
// The source (public/images/shared/logo.jpeg, 1200x1200) is a lockup on solid
// royal blue with no transparency, so it can't be placed on the site's white or
// deep-teal surfaces as-is. This keys out the background into an alpha mask and
// re-tints the artwork to palette colours.
//
// Measured bands in the source:
//   emblem        y 197..756   x 318..877
//   "Claudia House" y 810..908 x 180..1020
//   "Dream big"   y 946..1016  x 448..768
//
//   node scripts/build-logo.mjs
import sharp from "sharp";
import { writeFileSync } from "node:fs";

const SRC = "E:/Claude/Claudia House/website/public/images/shared/logo.jpeg";
const OUT = "E:/Claude/Claudia House/website/public/images/shared";

const BG = [66, 123, 210];    // flat background
const INK = [0, 0, 34];       // darkest artwork colour
const MAXD = BG.reduce((a, c, i) => a + Math.abs(c - INK[i]), 0);

const hex = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));

/** Crop a region, key the background to alpha, re-tint the artwork. */
async function make({ left, top, width, height, tint, outWidth, file }) {
  const { data, info } = await sharp(SRC)
    .extract({ left, top, width, height })
    .raw()
    .toBuffer({ resolveWithObject: true });

  const [tr, tg, tb] = hex(tint);
  const px = info.width * info.height;
  const rgba = Buffer.alloc(px * 4);

  for (let i = 0; i < px; i++) {
    const s = i * info.channels;
    const d =
      Math.abs(data[s] - BG[0]) + Math.abs(data[s + 1] - BG[1]) + Math.abs(data[s + 2] - BG[2]);
    let a = d / MAXD;
    if (a < 0.14) a = 0;                       // drop JPEG haze around edges
    else a = Math.min(1, (a - 0.14) / 0.72);   // re-expand the remaining range
    const o = i * 4;
    rgba[o] = tr; rgba[o + 1] = tg; rgba[o + 2] = tb;
    rgba[o + 3] = Math.round(a * 255);
  }

  const buf = await sharp(rgba, { raw: { width: info.width, height: info.height, channels: 4 } })
    .resize({ width: outWidth })
    .png({ compressionLevel: 9 })
    .toBuffer();

  writeFileSync(`${OUT}/${file}`, buf);
  const m = await sharp(buf).metadata();
  console.log(`  ${file.padEnd(26)} ${m.width}x${m.height}  ${Math.round(buf.length / 1024)}KB  tint ${tint}`);
}

console.log("building logo assets:");

// Header mark: emblem only, deep teal, on white surfaces
await make({
  left: 310, top: 189, width: 576, height: 576,
  tint: "#164e63", outWidth: 256, file: "logo-mark.png",
});

// Footer lockup: emblem + name + tagline, light, for the deep-teal footer
await make({
  left: 170, top: 185, width: 860, height: 845,
  tint: "#cfeaf2", outWidth: 520, file: "logo-lockup-light.png",
});

// Same lockup in deep teal, for light backgrounds (About page, print)
await make({
  left: 170, top: 185, width: 860, height: 845,
  tint: "#164e63", outWidth: 520, file: "logo-lockup-dark.png",
});
