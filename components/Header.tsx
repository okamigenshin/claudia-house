"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav } from "@/lib/content";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-white/90 backdrop-blur">
      <div className="wrap flex h-[84px] items-center justify-between">
        <Link href="/" className="font-display text-2xl font-black tracking-tight text-[var(--color-primary-deep)]">
          CLAUDIA<span className="text-[var(--color-primary)]">HOUSE</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-base font-medium transition-colors hover:text-[var(--color-primary)] ${
                isActive(item.href) ? "text-[var(--color-primary)]" : "text-[var(--color-ink)]"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/get-involved" className="btn btn-primary btn-sm">Donate</Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-[var(--color-primary-deep)]"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="lg:hidden border-t border-[var(--color-line)] bg-white px-6 py-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`block py-3 text-lg font-medium ${
                isActive(item.href) ? "text-[var(--color-primary)]" : "text-[var(--color-ink)]"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/get-involved" onClick={() => setOpen(false)} className="btn btn-primary mt-3 w-full justify-center">
            Donate
          </Link>
        </nav>
      )}
    </header>
  );
}
