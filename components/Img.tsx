import variants from "@/lib/image-variants.json";
import { asset } from "@/lib/config";

type Variant = { w: number; u: string };
type Entry = { w: number; h: number; webp: Variant[]; jpg: Variant[] };

const table = variants as Record<string, Entry>;

/**
 * Responsive <picture> for the site's static images.
 *
 * Static export can't use next/image (no server-side optimiser), so the widths
 * are generated ahead of time by scripts/generate-variants.mjs. The browser
 * downloads exactly one file: the smallest WebP that satisfies `sizes`, falling
 * back to JPEG where WebP isn't supported.
 *
 * Intrinsic width/height are always emitted so the box is reserved before load.
 */
export default function Img({
  src,
  alt,
  className,
  sizes = "100vw",
  priority = false,
}: {
  /** Source-root-relative path, e.g. "/images/shared/hero-background.jpg" */
  src: string;
  alt: string;
  className?: string;
  /** CSS `sizes` — tells the browser how wide this renders so it can pick a width. */
  sizes?: string;
  /** Set on the LCP image only: skips lazy-loading and raises fetch priority. */
  priority?: boolean;
}) {
  const e = table[src];
  const srcSet = (list: Variant[]) => list.map((v) => `${asset(v.u)} ${v.w}w`).join(", ");

  // Unknown source: fall back to a plain img rather than rendering nothing.
  if (!e) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={asset(src)} alt={alt} className={className} loading={priority ? "eager" : "lazy"} />;
  }

  return (
    // `contents` keeps <picture> from generating a box, so the <img> participates
    // directly in the parent grid/flex layout exactly as a bare <img> did.
    <picture className="contents">
      <source type="image/webp" srcSet={srcSet(e.webp)} sizes={sizes} />
      {e.jpg.length > 0 && <source type="image/jpeg" srcSet={srcSet([...e.jpg, { w: e.w, u: src }])} sizes={sizes} />}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset(src)}
        alt={alt}
        width={e.w}
        height={e.h}
        className={className}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        decoding={priority ? "sync" : "async"}
      />
    </picture>
  );
}
