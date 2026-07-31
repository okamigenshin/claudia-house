import Link from "next/link";
import { breadcrumbJsonLd, jsonLdProps } from "@/lib/seo";

export default function PageBanner({
  crumb,
  title,
  lead,
  path,
}: {
  crumb: string;
  title: string;
  lead?: string;
  /** Site-root-relative path of this page, e.g. "/programs/". Powers the breadcrumb JSON-LD. */
  path: string;
}) {
  return (
    <section className="bg-[var(--color-tint)] pt-20 pb-[4.5rem]">
      <div className="wrap">
        <nav aria-label="Breadcrumb" className="mb-3">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-[var(--color-ink-soft)]">
            <li>
              <Link href="/" className="text-[var(--color-primary)]">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">{crumb}</li>
          </ol>
        </nav>
        <h1 className="text-[clamp(2.4rem,4.6vw,3.75rem)]">{title}</h1>
        {lead && <p className="lead mt-4 max-w-2xl">{lead}</p>}
      </div>
      <script {...jsonLdProps(breadcrumbJsonLd(crumb, path))} />
    </section>
  );
}
