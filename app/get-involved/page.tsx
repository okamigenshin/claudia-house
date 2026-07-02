import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { getInvolved, supporters, site } from "@/lib/content";
import { asset } from "@/lib/config";

export const metadata = { title: "Get Involved | Claudia House" };

const g = getInvolved;

export default function GetInvolved() {
  return (
    <>
      <PageBanner crumb="Get Involved" title={g.bannerTitle} lead={g.bannerLead} />

      {/* DONATE */}
      <section className="section">
        <div className="wrap grid items-start gap-14 lg:grid-cols-2">
          <div>
            <p className="eyebrow">{g.donateEyebrow}</p>
            <h2 className="mt-4">{g.donateTitle}</h2>
            <p className="soft mt-5">{g.donateBody1}</p>
            <p className="soft mt-4">{g.donateBody2}</p>
          </div>
          <div className="card bg-[var(--color-tint)] p-10">
            <h3>{g.donateBoxTitle}</h3>
            <div className="my-5 flex flex-wrap gap-2.5">
              {g.donateAmounts.map((a, i) => (
                <span key={a} className={`rounded-full border px-5 py-2.5 text-[15px] font-medium ${i === 1 ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white" : "border-[var(--color-line)] text-[var(--color-ink-soft)]"}`}>{a}</span>
              ))}
            </div>
            <a href={g.donateUrl} className="btn btn-primary w-full justify-center">{g.donateButton}</a>
            <p className="mt-3 text-sm italic text-[#94a9b1]">PayPal / card donation widget integrates here.</p>
          </div>
        </div>
      </section>

      {/* FRED MEYER */}
      <section className="section bg-[var(--color-tint)]">
        <div className="wrap grid items-center gap-14 lg:grid-cols-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset(g.fredMeyerImage)} alt={g.fredMeyerImageAlt} className="aspect-[16/10] w-full rounded-3xl object-cover" />
          <div>
            <p className="eyebrow">{g.fredMeyerEyebrow}</p>
            <h2 className="mt-4">{g.fredMeyerTitle}</h2>
            <p className="soft mt-5">{g.fredMeyerBody}</p>
          </div>
        </div>
      </section>

      {/* VOLUNTEER */}
      <section className="section">
        <div className="wrap">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="eyebrow">{g.volunteerEyebrow}</p>
            <h2 className="mt-4">{g.volunteerTitle}</h2>
            <p className="soft mt-4">{g.volunteerIntro}</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {g.volunteerCards.map((x) => (
              <div key={x.title} className="card">
                <div className="card-ic"><span className="block h-3 w-3 rounded-sm bg-current" /></div>
                <h3>{x.title}</h3>
                <p className="soft mt-2">{x.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center"><Link href="/contact" className="btn btn-outline">Contact us to volunteer &rarr;</Link></div>
        </div>
      </section>

      {/* CAREERS */}
      <section className="section bg-[var(--color-tint)]">
        <div className="wrap">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="eyebrow">{g.careersEyebrow}</p>
            <h2 className="mt-4">{g.careersTitle}</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {g.jobs.map((j) => (
              <div key={j.title} className="card p-10">
                <h3>{j.title}</h3>
                <p className="mt-1.5 text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)]">{j.meta}</p>
                <p className="soft mt-4">{j.body}</p>
                <a href={`mailto:${site.careersEmail}`} className="btn btn-outline btn-sm mt-5">Apply by email</a>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center soft">Apply: send your resume &amp; cover letter to <a href={`mailto:${site.careersEmail}`}>{site.careersEmail}</a></p>
        </div>
      </section>

      {/* SUPPORTERS */}
      <section className="section">
        <div className="wrap">
          <p className="eyebrow mb-10 text-center">{g.supportersEyebrow}</p>
          <div className="flex flex-wrap justify-center gap-4">
            {supporters.map((s) => (
              <span key={s} className="rounded-xl border border-[var(--color-line)] px-6 py-3 font-medium text-[var(--color-primary-deep)]">{s}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
