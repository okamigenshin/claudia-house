// basePath for GitHub Pages project site. Must match next.config.ts.
// next/link and _next assets get this prefix automatically; plain <img src="/...">
// tags do NOT, so route image paths through asset().
export const BASE_PATH = process.env.NODE_ENV === "production" ? "/claudia-house" : "";

export const asset = (path: string) => `${BASE_PATH}${path}`;
