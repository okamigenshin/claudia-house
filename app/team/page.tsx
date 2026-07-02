import PageBanner from "@/components/PageBanner";
import CtaBand from "@/components/CtaBand";
import { team } from "@/lib/content";
import { asset } from "@/lib/config";

export const metadata = { title: "Our Team | Claudia House" };

export default function Team() {
  return (
    <>
      <PageBanner crumb="Our Team" title={team.bannerTitle} lead={team.bannerLead} />

      {/* STAFF */}
      <section className="section">
        <div className="wrap">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="eyebrow">{team.staffEyebrow}</p>
            <h2 className="mt-4">{team.staffTitle}</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {team.staff.map((p) => (
              <article key={p.name} className="overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={asset(p.img)} alt={`Portrait of ${p.name}`} className="aspect-[4/3] w-full object-cover" />
                <div className="p-7">
                  <h3>{p.name}</h3>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)]">{p.role}</p>
                  <p className="soft mt-3">{p.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BOARD */}
      <section className="section bg-[var(--color-tint)]">
        <div className="wrap">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="eyebrow">{team.boardEyebrow}</p>
            <h2 className="mt-4">{team.boardTitle}</h2>
          </div>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {team.board.map((p) => (
              <article key={p.name} className="overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={asset(p.img)} alt={`Portrait of ${p.name}`} className="aspect-square w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-[1.3rem]">{p.name}</h3>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)]">{p.role}</p>
                  <p className="soft mt-3">{p.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={team.ctaTitle} lead={team.ctaLead} cta={team.ctaButton} href="/get-involved" />
    </>
  );
}
