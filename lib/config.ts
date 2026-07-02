// basePath for image URLs — must resolve to the same value as next.config.ts
// (both read NEXT_PUBLIC_BASE_PATH). next/link and _next assets get the prefix
// automatically; plain <img src="/..."> tags do NOT, so route them through asset().
// Root-domain hosting: build with NEXT_PUBLIC_BASE_PATH= (empty).
export const BASE_PATH =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (process.env.NODE_ENV === "production" ? "/claudia-house" : "");

export const asset = (path: string) => `${BASE_PATH}${path}`;
