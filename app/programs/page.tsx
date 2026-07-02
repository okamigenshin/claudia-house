import PageBanner from "@/components/PageBanner";
import CtaBand from "@/components/CtaBand";
import { focusAreas } from "@/lib/content";
import { asset } from "@/lib/config";

export const metadata = { title: "Programs | Claudia House" };

const stages = [
  { n: "Stage 01", t: "Pre-Placement", b: "Youth build trust with staff before placement — creating connections that lay the foundation for a successful transition." },
  { n: "Stage 02", t: "In-House Support", b: "Life skills, mentorship, education, and career readiness inside a warm, structured home.", feature: true },
  { n: "Stage 03", t: "Off-Site Services", b: "Expanded care: medical & dental, counseling, psychiatric care, and arts & hobby programs." },
];

export default function Programs() {
  return (
    <>
      <PageBanner crumb="Programs" title="Pathways to ILP" lead="Helping youth thrive with independent-living skills — before, during, and beyond their stay." />

      {/* STAGES */}
      <section className="section">
        <div className="wrap grid gap-6 lg:grid-cols-3">
          {stages.map((s) => (
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
            <p className="eyebrow">In-House Support</p>
            <h2 className="mt-4">Five core skill areas</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {focusAreas.map((f, i) => (
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
            <p className="eyebrow">Education Opportunities</p>
            <h2 className="mt-4">Real schools, colleges &amp; trades</h2>
            <p className="soft mt-5">
              Youth attend public schools (Portland Public, Cleveland, Alliance), colleges & universities
              (Reed, PSU, Clackamas CC, Concordia), and trade & vocational programs (PCC Swan Island,
              NW College of Construction, NECA-IBEW, The Tech Academy, and more).
            </p>
            <p className="soft mt-4">
              Community outings extend the classroom: college & trade visits, business tours, museums, the
              Oregon Coast & Columbia River Gorge, and public-transit practice.
            </p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset("/images/gallery/gallery-07-inspirational-posters-wall.jpg")} alt="A wall of inspirational posters inside the home" className="aspect-[4/3] w-full rounded-3xl object-cover" />
        </div>
      </section>

      {/* ORIENTATION */}
      <section className="section bg-[var(--color-tint)]">
        <div className="wrap">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="eyebrow">Getting Started</p>
            <h2 className="mt-4">The first two weeks</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="card"><p className="eyebrow">Week 1</p><h3 className="my-3">Orientation</h3><p className="soft">Rapport building, resume development, obtaining ID, bus-pass distribution, and a review of program rules & the handbook.</p></div>
            <div className="card"><p className="eyebrow">Week 2</p><h3 className="my-3">Independence</h3><p className="soft">Youth may go out independently as long as they return by curfew, with public-transportation support as needed.</p></div>
          </div>
        </div>
      </section>

      {/* ELIGIBILITY & REFERRALS */}
      <section className="section">
        <div className="wrap grid gap-14 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Eligibility</p>
            <h3 className="mt-3 text-[1.6rem]">Case-by-case considerations</h3>
            <p className="soft mt-4">Accepted individually after evaluation. Not appropriate for youth needing acute psychiatric care/hospitalization or who are not yet ready for ILP basics.</p>
          </div>
          <div>
            <p className="eyebrow">Referrals</p>
            <h3 className="mt-3 text-[1.6rem]">From Oregon Probation &amp; Parole</h3>
            <p className="soft mt-4">Referrals must include: reformation plan, OYA Risk-Need Assessment (RNA), current & previous treatment recommendations, parole/probation conditions, juvenile court orders, and social & family histories.</p>
          </div>
        </div>
      </section>

      <CtaBand title="Have a youth who needs a placement?" lead="Our team is ready to help with referrals and questions." cta="Make a referral" href="/contact" />
    </>
  );
}
