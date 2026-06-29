import type { NextConfig } from "next";

// GitHub Pages project site lives under /claudia-house.
// Empty in dev (localhost) so the local server and preview still work.
const basePath = process.env.NODE_ENV === "production" ? "/claudia-house" : "";

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
