import Link from "next/link";

export default function CtaBand({
  title,
  lead,
  cta,
  href,
}: {
  title: string;
  lead: string;
  cta: string;
  href: string;
}) {
  return (
    <section className="section bg-[var(--color-primary-deep)] text-center">
      <div className="wrap">
        <h2 className="text-white">{title}</h2>
        <p className="lead mx-auto mt-4 max-w-2xl text-[#bfe3ec]">{lead}</p>
        <Link href={href} className="btn btn-primary mt-8">{cta} &rarr;</Link>
      </div>
    </section>
  );
}
