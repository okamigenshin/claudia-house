import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { jobs, supporters, site } from "@/lib/content";
import { asset } from "@/lib/config";

export const metadata = { title: "Get Involved | Claudia House" };

export default function GetInvolved() {
  return (
    <>
      <PageBanner crumb="Get Involved" title="Join our mission" lead="Give, volunteer, or build a career — every contribution helps a young person become a future leader." />

      {/* DONATE */}
      <section className="section">
        <div className="wrap grid items-start gap-14 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Make a Donation</p>
            <h2 className="mt-4">Seed a brighter future</h2>
            <p className="soft mt-5">
              We need seed money to keep building Claudia House — from home remodeling to furnishing. Your
              gift helps fight youth homelessness and gives young people the guidance to become
              self-sufficient adults and productive members of society.
            </p>
            <p className="soft mt-4">
              Claudia House is a tax-exempt public charity under IRC Section 501(c)(3). Donations are
              tax-deductible (official IRS approval letter available on request).
            </p>
          </div>
          <div className="card bg-[var(--color-tint)] p-10">
            <h3>Give today</h3>
            <div className="my-5 flex flex-wrap gap-2.5">
              {["$25", "$50", "$100", "$250", "Other"].map((a, i) => (
                <span key={a} className={`rounded-full border px-5 py-2.5 text-[15px] font-medium ${i === 1 ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white" : "border-[var(--color-line)] text-[var(--color-ink-soft)]"}`}>{a}</span>
              ))}
            </div>
            <a href="#" className="btn btn-primary w-full justify-center">Donate with PayPal</a>
            <p className="mt-3 text-sm italic text-[#94a9b1]">PayPal / card donation widget integrates here.</p>
          </div>
        </div>
      </section>

      {/* FRED MEYER */}
      <section className="section bg-[var(--color-tint)]">
        <div className="wrap grid items-center gap-14 lg:grid-cols-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset("/images/gallery/gallery-17-garden-raised-bed.jpeg")} alt="Raised garden bed at Claudia House" className="aspect-[16/10] w-full rounded-3xl object-cover" />
          <div>
            <p className="eyebrow">When You Shop, You Give</p>
            <h2 className="mt-4">Fred Meyer Community Rewards</h2>
            <p className="soft mt-5">
              Link your Rewards Card to Claudia House (code <strong>PQ447</strong>) and we receive quarterly
              donations from Fred Meyer — at no cost to you. Just log in to your rewards account, search
              &ldquo;Claudia House,&rdquo; and link.
            </p>
          </div>
        </div>
      </section>

      {/* VOLUNTEER */}
      <section className="section">
        <div className="wrap">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="eyebrow">Volunteer Today</p>
            <h2 className="mt-4">Share your time &amp; talent</h2>
            <p className="soft mt-4">We&rsquo;re building a pool of drivers, mentors, and professionals who can contribute skills and time to youth learning and development.</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              { t: "Mentor", b: "Be a steady, encouraging presence for a young person." },
              { t: "Drive", b: "Help youth get to school, work, appointments, and outings." },
              { t: "Teach a Skill", b: "Share your professional expertise through workshops." },
            ].map((x) => (
              <div key={x.t} className="card">
                <div className="card-ic"><span className="block h-3 w-3 rounded-sm bg-current" /></div>
                <h3>{x.t}</h3>
                <p className="soft mt-2">{x.b}</p>
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
            <p className="eyebrow">Careers</p>
            <h2 className="mt-4">We&rsquo;re hiring</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {jobs.map((j) => (
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
          <p className="eyebrow mb-10 text-center">Our Supporters</p>
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
