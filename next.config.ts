import type { NextConfig } from "next";

// Base path. Defaults to "/claudia-house" for the GitHub Pages project site,
// and "" in dev so localhost works. To host at a ROOT domain (Vercel, custom
// domain, etc.) build with the env var set empty: NEXT_PUBLIC_BASE_PATH=
const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (process.env.NODE_ENV === "production" ? "/claudia-house" : "");

const nextConfig: NextConfig = {
  // Produce a fully static `out/` folder for GitHub Pages.
  output: "export",
  // No server in a static export, so skip the image optimizer.
  images: { unoptimized: true },
  // Folder-style routes (/about/ -> /about/index.html).
  trailingSlash: true,
  // Serve under the repo subpath on Pages.
  basePath,
};

export default nextConfig;
