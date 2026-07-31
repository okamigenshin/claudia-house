// Emits lib/image-sizes.json — { "/images/...": [width, height] } for every
// image in public/images. Used to set intrinsic width/height on <img> tags so
// the browser can reserve space before the file loads (prevents layout shift),
// without forcing a fixed aspect-ratio that would break the masonry gallery.
//
// Re-run after scripts/optimize-images.mjs whenever images change:
//   node scripts/image-sizes.mjs
import { readdirSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const ROOT = "E:/Claude/Claudia House/website";
const DIR = `${ROOT}/public/images`;

function walk(d, acc = []) {
  for (const e of readdirSync(d)) {
    const p = join(d, e);
    if (statSync(p).isDirectory()) walk(p, acc);
    else if (/\.(jpe?g|png)$/i.test(e)) acc.push(p);
  }
  return acc;
}

const out = {};
for (const f of walk(DIR)) {
  const key = "/images" + f.split("\\").join("/").replace(DIR, "");
  const { width, height } = await sharp(f).metadata();
  out[key] = [width, height];
}

const sorted = Object.fromEntries(Object.entries(out).sort(([a], [b]) => a.localeCompare(b)));
writeFileSync(`${ROOT}/lib/image-sizes.json`, JSON.stringify(sorted, null, 2) + "\n");
console.log(`wrote lib/image-sizes.json — ${Object.keys(sorted).length} images`);
