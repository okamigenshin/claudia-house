// Absolute-URL helpers for metadata (Open Graph, canonicals, sitemap, JSON-LD).
//
// IMPORTANT: unlike next/link and _next assets, the Metadata API does NOT apply
// next.config.ts's basePath to og:image / canonical / sitemap URLs. Everything
// here therefore builds fully-qualified URLs by hand.
//
// Moving to the real domain is a two-variable change at build time:
//   NEXT_PUBLIC_SITE_URL=https://claudiahouse.com  NEXT_PUBLIC_BASE_PATH=  npm run build
import { BASE_PATH } from "./config";

export const SITE_ORIGIN =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://okamigenshin.github.io";

/** Origin + basePath, no trailing slash. e.g. https://okamigenshin.github.io/claudia-house */
export const SITE_URL = `${SITE_ORIGIN}${BASE_PATH}`;

/** Absolute URL for a site-root-relative path. abs("/about/") -> https://.../claudia-house/about/ */
export const abs = (path: string) =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

export const ORG = {
  name: "Claudia House",
  legalName: "Claudia House",
  streetAddress: "7310 SE Lambert St",
  addressLocality: "Portland",
  addressRegion: "OR",
  postalCode: "97206",
  addressCountry: "US",
  telephone: "+1-503-379-0116",
  email: "info@claudiahouse.com",
  careersEmail: "staff@claudiahouse.com",
  description:
    "Claudia House is a Portland, Oregon 501(c)(3) nonprofit operating a Residential Independent Living Program for justice-involved young adults ages 18–25.",
};

export const OG_IMAGE = {
  url: abs("/images/shared/og-image.jpg"),
  width: 1200,
  height: 630,
  alt: "Claudia House — Where Youth Dream Big",
};

/** Organisation graph, rendered once in the root layout. */
export function orgJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: ORG.name,
    url: abs("/"),
    logo: abs("/images/shared/logo.jpeg"),
    image: OG_IMAGE.url,
    description: ORG.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: ORG.streetAddress,
      addressLocality: ORG.addressLocality,
      addressRegion: ORG.addressRegion,
      postalCode: ORG.postalCode,
      addressCountry: ORG.addressCountry,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: ORG.telephone,
        email: ORG.email,
        areaServed: "US-OR",
        availableLanguage: ["English", "Spanish", "French"],
      },
      {
        "@type": "ContactPoint",
        contactType: "human resources",
        email: ORG.careersEmail,
      },
    ],
    // sameAs intentionally omitted until real social profiles exist —
    // publishing placeholder URLs is worse than publishing none.
  };
}

/** Breadcrumb trail for an interior page. */
export function breadcrumbJsonLd(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: abs("/") },
      { "@type": "ListItem", position: 2, name, item: abs(path) },
    ],
  };
}

/** <script type="application/ld+json"> payload. */
export const jsonLdProps = (data: object) => ({
  type: "application/ld+json",
  dangerouslySetInnerHTML: { __html: JSON.stringify(data) },
});
