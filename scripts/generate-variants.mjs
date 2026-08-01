// Generates responsive WebP + JPEG variants for every image, and writes
// lib/image-variants.json describing them.
//
// Static export can't use next/image (no server to optimise on request), so
// responsive images are built ahead of time and wired up with <picture>/srcset
// by components/Img.tsx.
//
// Run after scripts/optimize-images.mjs:
//   node scripts/optimize-images.mjs && node scripts/generate-variants.mjs
import { readdirSync, statSync, writeFileSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { join, dirname, basename, extname } from "node:path";
import sharp from "sharp";

const ROOT = "E:/Claude/Claudia House/website";
const DIR = `${ROOT}/public/images`;
const OUT_DIRNAME = "r";              // variants live alongside, in an "r" subfolder
const WIDTHS = [480, 960, 1440];
const WEBP_Q = 78;
const JPEG_Q = 80;

function walk(d, acc = []) {
  for (const e of readdirSync(d)) {
    if (e === OUT_DIRNAME) continue;                 // don't recurse into generated output
    const p = join(d, e);
    if (statSync(p).isDirectory()) walk(p, acc);
    else if (/\.(jpe?g|png)$/i.test(e)) acc.push(p);
  }
  return acc;
}

// clear previously generated variants so removed sources don't linger
for (const d of walk(DIR).map((f) => join(dirname(f), OUT_DIRNAME))) {
  if (existsSync(d)) rmSync(d, { recursive: true, force: true });
}

const manifest = {};
let srcBytes = 0;
let genBytes = 0;

for (const f of walk(DIR)) {
  const fwd = f.split("\\").join("/");
  const key = "/images" + fwd.replace(DIR, "");
  const meta = await sharp(f).metadata();
  srcBytes += statSync(f).size;

  const outDir = join(dirname(f), OUT_DIRNAME);
  mkdirSync(outDir, { recursive: true });
  const stem = basename(f, extname(f));

  const widths = WIDTHS.filter((w) => w < meta.width);   // never upscale
  const entry = { w: meta.width, h: meta.height, webp: [], jpg: [] };

  // full-size webp always, plus each smaller width in both formats
  const full = join(outDir, `${stem}.webp`);
  await sharp(f).webp({ quality: WEBP_Q }).toFile(full);
  genBytes += statSync(full).size;
  entry.webp.push({ w: meta.width, u: `/images${dirname(fwd.replace(DIR, ""))}/${OUT_DIRNAME}/${stem}.webp`.replace("//", "/") });

  for (const w of widths) {
    const wp = join(outDir, `${stem}-${w}.webp`);
    const jp = join(outDir, `${stem}-${w}.jpg`);
    await sharp(f).resize({ width: w }).webp({ quality: WEBP_Q }).toFile(wp);
    await sharp(f).resize({ width: w }).jpeg({ quality: JPEG_Q, mozjpeg: true, progressive: true }).toFile(jp);
    genBytes += statSync(wp).size + statSync(jp).size;
    const rel = dirname(fwd.replace(DIR, ""));
    entry.webp.push({ w, u: `/images${rel}/${OUT_DIRNAME}/${stem}-${w}.webp`.replace("//", "/") });
    entry.jpg.push({ w, u: `/images${rel}/${OUT_DIRNAME}/${stem}-${w}.jpg`.replace("//", "/") });
  }

  entry.webp.sort((a, b) => a.w - b.w);
  entry.jpg.sort((a, b) => a.w - b.w);
  manifest[key] = entry;
}

const sorted = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)));
writeFileSync(`${ROOT}/lib/image-variants.json`, JSON.stringify(sorted, null, 1) + "\n");

console.log(`sources      : ${Object.keys(sorted).length} images, ${(srcBytes / 1048576).toFixed(2)} MB`);
console.log(`variants     : ${(genBytes / 1048576).toFixed(2)} MB generated`);
console.log(`wrote lib/image-variants.json`);
