import Link from "next/link";
import { site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary-deep)] text-[#cfeaf2]">
      <div className="wrap py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.4fr]">
          <div>
            <div className="font-display text-2xl font-black text-white">
              CLAUDIA<span className="text-[#5fd3e8]">HOUSE</span>
            </div>
            <p className="mt-4 max-w-xs text-[#aecfd8]">
              A safe home and a fresh start for Oregon&rsquo;s youth. Building future leaders: mind, body, and spirit.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xl text-white">Explore</h3>
            {[
              ["About", "/about"], ["Programs", "/programs"], ["Our Team", "/team"], ["Gallery", "/gallery"],
            ].map(([label, href]) => (
              <Link key={href} href={href} className="mb-2 block text-[#cfeaf2] hover:text-white">{label}</Link>
            ))}
          </div>

          <div>
            <h3 className="mb-4 text-xl text-white">Get Involved</h3>
            {[
              ["Donate", "/get-involved"], ["Volunteer", "/get-involved"], ["Careers", "/get-involved"], ["Contact", "/contact"],
            ].map(([label, href], i) => (
              <Link key={i} href={href} className="mb-2 block text-[#cfeaf2] hover:text-white">{label}</Link>
            ))}
          </div>

          <div>
            <h3 className="mb-4 text-xl text-white">Stay Updated</h3>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email"
                aria-label="Email address"
                className="rounded-[10px] px-4 py-3 text-[var(--color-ink)]"
              />
              <button type="submit" className="btn btn-primary w-full justify-center">Subscribe</button>
            </form>
            <p className="mt-4 text-[15px] text-[#aecfd8]">
              {site.address}<br />
              {site.phone} &middot; {site.email}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-6 text-sm text-[#9fc7d2] sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {site.name} &middot; 501(c)(3) Nonprofit &middot; All Rights Reserved</p>
          <a
            href="https://authexlabs.com"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1.5 text-[#9fc7d2] transition-colors hover:text-white"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Domain and Email Security by Authex Labs
          </a>
        </div>
      </div>
    </footer>
  );
}
