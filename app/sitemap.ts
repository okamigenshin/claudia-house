import type { MetadataRoute } from "next";
import { abs } from "@/lib/seo";

// Static export writes this to out/sitemap.xml at build time.
// URLs must be absolute and include the basePath — the Metadata API does not
// apply next.config.ts's basePath here (see lib/seo.ts).
export const dynamic = "force-static";

const routes: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/about/", priority: 0.9 },
  { path: "/programs/", priority: 0.9 },
  { path: "/get-involved/", priority: 0.9 },
  { path: "/team/", priority: 0.7 },
  { path: "/gallery/", priority: 0.6 },
  { path: "/contact/", priority: 0.8 },
  { path: "/privacy/", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: abs(path),
    changeFrequency: "monthly",
    priority,
  }));
}
