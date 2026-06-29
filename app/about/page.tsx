import PageBanner from "@/components/PageBanner";
import CtaBand from "@/components/CtaBand";
import { commitments } from "@/lib/content";
import { asset } from "@/lib/config";

export const metadata = { title: "About | Claudia House" };

export default function About() {
  return (
    <>
      <PageBanner crumb="About" title="Our story & mission" lead="A legacy of welcome, carried forward for a new generation of Oregon's youth." />

      {/* STORY */}
      <section className="section">
        <div className="wrap grid items-center gap-14 lg:grid-cols-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset("/images/gallery/gallery-05-living-room-fireplace.jpg")} alt="A warm, furnished living room inside Claudia House" className="aspect-[4/3] w-full rounded-3xl object-cover" />
          <div>
            <p className="eyebrow">Who was Claudia?</p>
            <h2 className="mt-4">Named for a mother who opened her door to every teen</h2>
            <p className="soft mt-5">
              Claudia was a social worker and mother who welcomed all teens — of any ethnicity, race, and
              religion — into her home. She and her spouse adopted three children of diverse backgrounds and
              gave shelter to many more teenagers during their formative years.
            </p>
            <p className="soft mt-4">
              Claudia House continues that spirit of unconditional welcome as an Oregon nonprofit under
              Section 501(c)(3), serving educational and charitable purposes.
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
