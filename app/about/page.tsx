import PageBanner from "@/components/PageBanner";
import CtaBand from "@/components/CtaBand";
import { aboutStory, commitments } from "@/lib/content";

export const metadata = { title: "About | Claudia House" };

export default function About() {
  return (
    <>
      <PageBanner crumb="About" title="Our story & mission" lead="A legacy of welcome, carried forward for a new generation of Oregon's youth." />

      {/* STORY — Born from Experience. Built for Possibility. */}
      <section className="section">
        <div className="wrap mx-auto max-w-3xl">
          <p className="eyebrow">{aboutStory.eyebrow}</p>
          <h2 className="mt-4">{aboutStory.title}</h2>
          <p className="soft mt-6">{aboutStory.intro}</p>

          {aboutStory.sections.map((s) => (
            <div key={s.heading}>
              <h3 className="mt-12">{s.heading}</h3>
              {s.paras.map((p, i) => (
                <p key={i} className="soft mt-4">{p}</p>
              ))}
            </div>
          ))}

          <div className="mt-10 border-t border-[var(--color-line)] pt-8">
            {aboutStory.closing.map((p, i) => (
              <p key={i} className="soft mt-4 first:mt-0">{p}</p>
            ))}
            <p className="mt-8 font-display text-[1.75rem] font-bold leading-snug text-[var(--color-primary-deep)]">
              {aboutStory.pullquote}
            </p>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="section bg-[var(--color-tint)]">
        <div className="wrap grid gap-8 lg:grid-cols-2">
          <div className="card p-12">
            <p className="eyebrow">Mission</p>
            <h3 className="mt-3 text-[1.75rem]">Stability that lasts</h3>
            <p className="soft mt-3">To increase youth&rsquo;s behavioral, educational, and placement stability through short-term emergent care or longer-term care.</p>
          </div>
          <div className="card p-12">
            <p className="eyebrow">Vision</p>
            <h3 className="mt-3 text-[1.75rem]">Mind, body &amp; spirit</h3>
            <p className="soft mt-3">Balanced growth across mental, physical, and spiritual dimensions — helping young people overcome obstacles and succeed.</p>
          </div>
        </div>
      </section>

      {/* COMMITMENTS */}
      <section className="section">
        <div className="wrap">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="eyebrow">Our Commitment</p>
            <h2 className="mt-4">How we empower youth</h2>
            <p className="soft mt-4">Stable housing, life skills, and holistic support in an environment designed for comfort and care.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {commitments.map((c) => (
              <div key={c.title} className="card">
                <div className="card-ic"><span className="block h-3 w-3 rounded-sm bg-current" /></div>
                <h3>{c.title}</h3>
                <p className="soft mt-2">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Meet the people behind the mission" lead="Our board and staff bring decades of social work, child welfare, and community service." cta="Meet our team" href="/team" />
    </>
  );
}
