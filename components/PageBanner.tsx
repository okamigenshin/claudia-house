import Link from "next/link";

export default function PageBanner({
  crumb,
  title,
  lead,
}: {
  crumb: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="bg-[var(--color-tint)] pt-20 pb-[4.5rem]">
      <div className="wrap">
        <p className="mb-3 text-sm text-[var(--color-ink-soft)]">
          <Link href="/" className="text-[var(--color-primary)]">Home</Link> / {crumb}
        </p>
        <h1 className="text-[clamp(2.4rem,4.6vw,3.75rem)]">{title}</h1>
        {lead && <p className="lead mt-4 max-w-2xl">{lead}</p>}
      </div>
    </section>
  );
}
