"use client";

import { useEffect, useState } from "react";
import { gallery, type GalleryCategory } from "@/lib/content";
import { asset } from "@/lib/config";

const filters: ("All" | GalleryCategory)[] = [
  "All", "Exterior", "Living Spaces", "Bedrooms", "Outdoors & Garden",
];

export default function Gallery() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items = gallery.filter((g) => filter === "All" || g.cat === filter);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => (i === null ? i : (i + 1) % items.length));
      if (e.key === "ArrowLeft") setLightbox((i) => (i === null ? i : (i - 1 + items.length) % items.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, items.length]);

  return (
    <div>
      {/* Filters */}
      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => { setFilter(f); setLightbox(null); }}
            className={`rounded-full border px-5 py-2.5 text-[15px] font-medium transition-colors ${
              filter === f
                ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
                : "border-[var(--color-line)] text-[var(--color-ink-soft)] hover:bg-[var(--color-muted)]"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Masonry grid */}
      <div className="[column-gap:1rem] sm:columns-2 lg:columns-3">
        {items.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setLightbox(i)}
            className="mb-4 block w-full overflow-hidden rounded-2xl border border-[var(--color-line)] [break-inside:avoid]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset(img.src)}
              alt={img.alt}
              loading="lazy"
              className="w-full transition-transform duration-300 hover:scale-[1.03]"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-6 text-4xl text-white"
            aria-label="Close"
            onClick={() => setLightbox(null)}
          >
            &times;
          </button>
          <button
            className="absolute left-4 text-5xl text-white/80 hover:text-white"
            aria-label="Previous"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + items.length) % items.length); }}
          >
            &#8249;
          </button>
          <figure className="max-h-[88vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset(items[lightbox].src)} alt={items[lightbox].alt} className="max-h-[80vh] w-auto rounded-lg" />
            <figcaption className="mt-3 text-center text-white/80">{items[lightbox].alt}</figcaption>
          </figure>
          <button
            className="absolute right-4 text-5xl text-white/80 hover:text-white"
            aria-label="Next"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % items.length); }}
          >
            &#8250;
          </button>
        </div>
      )}
    </div>
  );
}
