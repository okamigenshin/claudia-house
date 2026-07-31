"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { gallery, type GalleryCategory } from "@/lib/content";
import { asset } from "@/lib/config";
import sizes from "@/lib/image-sizes.json";

const filters: ("All" | GalleryCategory)[] = [
  "All", "Exterior", "Living Spaces", "Bedrooms", "Outdoors & Garden",
];

const dim = (src: string): { width?: number; height?: number } => {
  const d = (sizes as Record<string, number[]>)[src];
  return d?.length === 2 ? { width: d[0], height: d[1] } : {};
};

export default function Gallery() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items = gallery.filter((g) => filter === "All" || g.cat === filter);

  const dialogRef = useRef<HTMLDivElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);

  const close = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    if (lightbox === null) return;

    // Lock background scroll while the overlay covers the viewport
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { close(); return; }
      if (e.key === "ArrowRight") { setLightbox((i) => (i === null ? i : (i + 1) % items.length)); return; }
      if (e.key === "ArrowLeft") { setLightbox((i) => (i === null ? i : (i - 1 + items.length) % items.length)); return; }
      if (e.key !== "Tab") return;

      // Trap focus inside the dialog
      const focusables = dialogRef.current?.querySelectorAll<HTMLElement>("button");
      if (!focusables?.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;
      if (e.shiftKey && (active === first || active === dialogRef.current)) {
        e.preventDefault(); last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault(); first.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      openerRef.current?.focus();   // return the user to the thumbnail they opened
    };
  }, [lightbox, items.length, close]);

  return (
    <div>
      {/* Filters */}
      <div className="mb-10 flex flex-wrap justify-center gap-3" role="group" aria-label="Filter gallery by area">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => { setFilter(f); setLightbox(null); }}
            aria-pressed={filter === f}
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
            onClick={(e) => { openerRef.current = e.currentTarget; setLightbox(i); }}
            aria-label={`View larger: ${img.alt}`}
            className="mb-4 block w-full overflow-hidden rounded-2xl border border-[var(--color-line)] [break-inside:avoid]"
          >
            {/* intrinsic width/height let the browser reserve space before load —
                prevents the masonry columns reflowing as each image arrives */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset(img.src)}
              alt={img.alt}
              loading="lazy"
              {...dim(img.src)}
              className="h-auto w-full transition-transform duration-300 hover:scale-[1.03]"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={items[lightbox].alt}
          tabIndex={-1}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4"
          onClick={close}
        >
          <button
            className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-black/40 text-3xl leading-none text-white backdrop-blur-sm transition-colors hover:bg-black/60 sm:top-5 sm:right-6"
            aria-label="Close"
            onClick={(e) => { e.stopPropagation(); close(); }}
          >
            &times;
          </button>
          <button
            className="absolute left-2 flex h-11 w-11 items-center justify-center rounded-full bg-black/40 text-3xl leading-none text-white backdrop-blur-sm transition-colors hover:bg-black/60 sm:left-4 sm:h-14 sm:w-14 sm:text-4xl"
            aria-label="Previous image"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + items.length) % items.length); }}
          >
            &#8249;
          </button>
          <figure className="max-h-[88vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset(items[lightbox].src)} alt={items[lightbox].alt} className="max-h-[80vh] w-auto rounded-2xl" />
            <figcaption className="mt-3 text-center text-white/80">{items[lightbox].alt}</figcaption>
          </figure>
          <button
            className="absolute right-2 flex h-11 w-11 items-center justify-center rounded-full bg-black/40 text-3xl leading-none text-white backdrop-blur-sm transition-colors hover:bg-black/60 sm:right-4 sm:h-14 sm:w-14 sm:text-4xl"
            aria-label="Next image"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % items.length); }}
          >
            &#8250;
          </button>
        </div>
      )}
    </div>
  );
}
