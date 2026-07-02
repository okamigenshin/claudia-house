import PageBanner from "@/components/PageBanner";
import CtaBand from "@/components/CtaBand";
import { programs } from "@/lib/content";
import { asset } from "@/lib/config";

export const metadata = { title: "Programs | Claudia House" };

export default function Programs() {
  return (
    <>
      <PageBanner crumb="Programs" title={programs.bannerTitle} lead={programs.bannerLead} />

      {/* STAGES */}
      <section className="section">
        <div className="wrap grid gap-6 lg:grid-cols-3">
          {programs.stages.map((s) => (
            <div key={s.t} className={`card ${s.feature ? "border-2 border-[var(--color-primary)]" : ""}`}>
              <p className="eyebrow">{s.n}</p>
              <h3 className="my-3">{s.t}</h3>
              <p className="soft">{s.b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="section bg-[var(--color-tint)]">
        <div className="wrap">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="eyebrow">{programs.focusEyebrow}</p>
            <h2 className="mt-4">{programs.focusTitle}</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {programs.focusAreas.map((f, i) => (
              <div key={f.title} className={`card ${i === 4 ? "md:col-span-2" : ""}`}>
                <h3>{f.title}</h3>
                <p className="soft mt-2">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="section">
        <div className="wrap grid items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="eyebrow">{programs.educationEyebrow}</p>
            <h2 className="mt-4">{programs.educationTitle}</h2>
            <p className="soft mt-5">{programs.educationBody1}</p>
            <p className="soft mt-4">{programs.educationBody2}</p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset(programs.educationImage)} alt={programs.educationImageAlt} className="aspect-[4/3] w-full rounded-3xl object-cover" />
        </div>
      </section>

      {/* ORIENTATION */}
      <section className="section bg-[var(--color-tint)]">
        <div className="wrap">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="eyebrow">{programs.orientationEyebrow}</p>
            <h2 className="mt-4">{programs.orientationTitle}</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {programs.orientation.map((o) => (
              <div key={o.label} className="card">
                <p className="eyebrow">{o.label}</p>
                <h3 className="my-3">{o.title}</h3>
                <p className="soft">{o.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ELIGIBILITY & REFERRALS */}
      <section className="section">
        <div className="wrap grid gap-14 lg:grid-cols-2">
          <div>
            <p className="eyebrow">{programs.eligibilityEyebrow}</p>
            <h3 className="mt-3 text-[1.6rem]">{programs.eligibilityTitle}</h3>
            <p className="soft mt-4">{programs.eligibilityBody}</p>
          </div>
          <div>
            <p className="eyebrow">{programs.referralsEyebrow}</p>
            <h3 className="mt-3 text-[1.6rem]">{programs.referralsTitle}</h3>
            <p className="soft mt-4">{programs.referralsBody}</p>
          </div>
        </div>
      </section>

      <CtaBand title={programs.ctaTitle} lead={programs.ctaLead} cta={programs.ctaButton} href="/contact" />
    </>
  );
}
