import { readdirSync, statSync, readFileSync, writeFileSync } from "node:fs";
import { join, extname } from "node:path";
import sharp from "sharp";

const DIR = "E:/Claude/Claudia House/website/public/images";
const QUALITY = 82;

// Long-edge cap per folder, sized to ~2x the largest slot each image renders in.
// Board portraits sit in a ~279px square card, so 1600px was ~20x the pixels needed.
const CAPS = { board: 800, staff: 1200, services: 1200, support: 1200 };
const DEFAULT_MAX = 1600;  // shared/ (hero, banner) and gallery/ (lightbox shows large)
const capFor = (f) => {
  const m = f.split("\\").join("/").match(/\/images\/([^/]+)\//);
  return (m && CAPS[m[1]]) || DEFAULT_MAX;
};

function walk(d, acc = []) {
  for (const e of readdirSync(d)) {
    const p = join(d, e);
    if (statSync(p).isDirectory()) walk(p, acc);
    else if (/\.(jpe?g|png)$/i.test(e)) acc.push(p);
  }
  return acc;
}

const files = walk(DIR);
let before = 0, after = 0;
const rows = [];

for (const f of files) {
  const src = readFileSync(f);
  before += src.length;
  const img = sharp(src, { failOn: "none" }).rotate(); // honour EXIF orientation, then strip
  const meta = await img.metadata();
  const long = Math.max(meta.width || 0, meta.height || 0);

  // Cap the long edge regardless of orientation. Both dimensions are passed with
  // fit:"inside" so EXIF-rotated portraits are capped correctly too.
  const MAX = capFor(f);
  let pipe = img;
  if (long > MAX) {
    pipe = pipe.resize({ width: MAX, height: MAX, fit: "inside", withoutEnlargement: true });
  }

  const isPng = extname(f).toLowerCase() === ".png";
  const out = isPng
    ? await pipe.png({ compressionLevel: 9, palette: true }).toBuffer()
    : await pipe.jpeg({ quality: QUALITY, mozjpeg: true, progressive: true }).toBuffer();

  // never write a bigger file than we started with
  const final = out.length < src.length ? out : src;
  writeFileSync(f, final);
  after += final.length;

  const m2 = await sharp(final).metadata();
  rows.push({
    f: f.replace(DIR, "").split("\\").join("/"),
    from: `${meta.width}x${meta.height}`,
    to: `${m2.width}x${m2.height}`,
    kbBefore: Math.round(src.length / 1024),
    kbAfter: Math.round(final.length / 1024),
  });
}

rows.sort((a, b) => b.kbBefore - a.kbBefore);
console.log("largest 10 changes:");
for (const r of rows.slice(0, 10))
  console.log(`  ${r.f}\n     ${r.from} -> ${r.to}   ${r.kbBefore}KB -> ${r.kbAfter}KB`);

console.log(`\nfiles: ${files.length}`);
console.log(`TOTAL ${(before / 1048576).toFixed(1)}MB -> ${(after / 1048576).toFixed(1)}MB  (${Math.round((1 - after / before) * 100)}% smaller)`);
