// Static pages need content hashes, not reusable/non-random CSP nonces.
import { createHash } from "node:crypto";
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const hash = (text) => `'sha256-${createHash("sha256").update(text).digest("base64")}'`;
async function secure(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      await secure(path);
    } else if (entry.name.endsWith(".html")) {
      let html = await readFile(path, "utf8");
      const scripts = [...html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)]
        .filter(([tag, body]) => !/\bsrc\s*=/i.test(tag.split(">")[0]) && body)
        .map(([, body]) => hash(body));
      const styles = [...html.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/gi)]
        .map(([, body]) => hash(body));
      const csp = [
        "default-src 'none'",
        `script-src 'self' ${[...new Set(scripts)].join(" ")}`,
        `style-src 'self' ${[...new Set(styles)].join(" ")}`,
        "style-src-attr 'unsafe-inline'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self'",
        "frame-src https://www.google.com",
        "object-src 'none'",
        "base-uri 'none'",
        "form-action 'none'",
        "upgrade-insecure-requests",
      ].join("; ");
      if (!/<meta charSet="utf-8"\s*\/?\s*>/i.test(html)) {
        throw new Error(`Missing charset in ${path}`);
      }
      html = html.replace(/<meta charSet="utf-8"\s*\/?\s*>/i,
        (charset) => `${charset}<meta http-equiv="Content-Security-Policy" content="${csp}"/><meta name="referrer" content="no-referrer"/>`);
      await writeFile(path, html);
    }
  }
}

await secure("out");
await writeFile("out/.nojekyll", "");
console.log("Applied hashed CSP and referrer policy to exported pages.");
