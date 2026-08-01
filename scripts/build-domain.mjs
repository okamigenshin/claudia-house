// Builds the site for the real domain (root path, no /claudia-house prefix).
// Cross-platform: sets the env vars in-process rather than relying on shell syntax.
//
//   npm run build:domain     -> build only
//   npm run deploy:domain    -> build + .nojekyll + push to gh-pages
//
// public/CNAME tells GitHub Pages to serve the site at claudiahouse.com, and is
// copied into out/ automatically as part of the static export.
import { spawnSync } from "node:child_process";

const env = {
  ...process.env,
  NEXT_PUBLIC_SITE_URL: "https://claudiahouse.com",
  NEXT_PUBLIC_BASE_PATH: "",          // empty = serve from the domain root
};

console.log("Building for https://claudiahouse.com (basePath: none)\n");
const r = spawnSync("npx", ["next", "build"], { env, stdio: "inherit", shell: true });
process.exit(r.status ?? 1);
