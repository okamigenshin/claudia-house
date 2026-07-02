import PageBanner from "@/components/PageBanner";
import CtaBand from "@/components/CtaBand";
import { about } from "@/lib/content";
import { asset } from "@/lib/config";

export const metadata = { title: "About | Claudia House" };

export default function About() {
  return (
    <>
      <PageBanner crumb="About" title={about.bannerTitle} lead={about.bannerLead} />

      {/* STORY */}
      <section className="section">
        <div className="wrap grid items-center gap-14 lg:grid-cols-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset(about.storyImage)} alt={about.storyImageAlt} className="aspect-[4/3] w-full rounded-3xl object-cover" />
          <div>
            <p className="eyebrow">{about.storyEyebrow}</p>
            <h2 className="mt-4">{about.storyTitle}</h2>
            <p className="soft mt-5">{about.storyBody1}</p>
            <p className="soft mt-4">{about.storyBody2}</p>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="section bg-[var(--color-tint)]">
        <div className="wrap grid gap-8 lg:grid-cols-2">
          <div className="card p-12">
            <p className="eyebrow">Mission</p>
            <h3 className="mt-3 text-[1.75rem]">{about.missionCardTitle}</h3>
            <p className="soft mt-3">{about.missionCardBody}</p>
          </div>
          <div className="card p-12">
            <p className="eyebrow">Vision</p>
            <h3 className="mt-3 text-[1.75rem]">{about.visionCardTitle}</h3>
            <p className="soft mt-3">{about.visionCardBody}</p>
          </div>
        </div>
      </section>

      {/* COMMITMENTS */}
      <section className="section">
        <div className="wrap">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="eyebrow">{about.commitmentEyebrow}</p>
            <h2 className="mt-4">{about.commitmentTitle}</h2>
            <p className="soft mt-4">{about.commitmentIntro}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {about.commitments.map((c) => (
              <div key={c.title} className="card">
                <div className="card-ic"><span className="block h-3 w-3 rounded-sm bg-current" /></div>
                <h3>{c.title}</h3>
                <p className="soft mt-2">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={about.ctaTitle} lead={about.ctaLead} cta={about.ctaButton} href="/team" />
    </>
  );
}
