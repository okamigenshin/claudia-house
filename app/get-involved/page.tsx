import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { jobs, majorSupporters, communitySupporters, supporterLinks, site } from "@/lib/content";
import { asset } from "@/lib/config";
import Icon, { type IconName } from "@/components/Icon";

export const metadata = {
  title: "Get Involved",
  description:
    "Donate, volunteer, or apply for a Case Manager or Direct Care role at Claudia House, a Portland 501(c)(3) supporting justice-involved young adults ages 18–25.",
  alternates: { canonical: "/get-involved/" },
  openGraph: {
    title: "Get Involved | Claudia House",
    description:
      "Donate, volunteer, or apply for a Case Manager or Direct Care role at Claudia House, a Portland 501(c)(3) supporting justice-involved young adults ages 18–25.",
    url: "/get-involved/",
  },
};

export default function GetInvolved() {
  return (
    <>
      <PageBanner path="/get-involved/" crumb="Get Involved" title="Join our mission" lead="Give, volunteer, or build a career. Every contribution helps a young person become a future leader." />

      {/* DONATE */}
      <section className="section">
        <div className="wrap grid items-start gap-14 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Make a Donation</p>
            <h2 className="mt-4">Seed a brighter future</h2>
            <p className="soft mt-5">
              We need seed money to keep building Claudia House, from home remodeling to furnishing. Your
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
            {/* The amount chips that used to sit here were inert <span>s — they
                looked selectable but did nothing. Amount selection is handled on
                PayPal's own page, configured via the hosted button. */}
            <p className="soft mt-3">Donations are processed securely by PayPal.</p>
            <a
              href={site.donateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-6 w-full justify-center"
            >
              Donate with PayPal
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </section>

      {/* FRED MEYER */}
      <section className="section bg-[var(--color-tint)]">
        <div className="wrap grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* order flips so the heading leads on mobile, matching the other alternating rows */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset("/images/gallery/gallery-17-garden-raised-bed.jpeg")} alt="Raised garden bed at Claudia House" loading="lazy" className="order-2 aspect-[16/10] w-full rounded-3xl object-cover lg:order-1" />
          <div className="order-1 lg:order-2">
            <p className="eyebrow">When You Shop, You Give</p>
            <h2 className="mt-4">Fred Meyer Community Rewards</h2>
            <p className="soft mt-5">
              Link your Rewards Card to Claudia House (code <strong>PQ447</strong>) and we receive quarterly
              donations from Fred Meyer, at no cost to you. Just log in to your rewards account, search
              &ldquo;Claudia House,&rdquo; and link.
            </p>
            <a
              href="https://www.fredmeyer.com/topic/community-rewards-4"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm mt-6"
            >
              Link your Rewards Card &rarr;
            </a>
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
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: "userPlus", t: "Mentor", b: "Be a steady, encouraging presence for a young person." },
              { icon: "car", t: "Drive", b: "Help youth get to school, work, appointments, and outings." },
              { icon: "lightbulb", t: "Teach a Skill", b: "Share your professional expertise through workshops." },
            ].map((x) => (
              <div key={x.t} className="card">
                <div className="card-ic"><Icon name={x.icon as IconName} /></div>
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
              <div key={j.title} className="card flex flex-col p-10">
                <h3>{j.title}</h3>
                <p className="mt-1.5 text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)]">{j.meta}</p>
                <p className="soft mt-4 mb-5">{j.body}</p>
                <a href={`mailto:${site.careersEmail}`} className="btn btn-outline btn-sm mt-auto self-start">Apply by email</a>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center soft">Apply: send your resume &amp; cover letter to <a href={`mailto:${site.careersEmail}`}>{site.careersEmail}</a></p>
        </div>
      </section>

      {/* MAJOR SUPPORTERS */}
      <section className="section">
        <div className="wrap">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Major Supporters</p>
            <p className="soft mt-4">We are grateful to the organizations whose significant and ongoing support helps make our work possible:</p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {majorSupporters.map((s) => (
              <span key={s} className="rounded-2xl border-2 border-[var(--color-primary)] bg-[var(--color-tint)] px-8 py-4 text-lg font-semibold text-[var(--color-primary-deep)]">{s}</span>
            ))}
          </div>

          <div className="mx-auto mt-20 max-w-2xl text-center">
            <p className="eyebrow">Community Supporters</p>
            <p className="soft mt-4">We are grateful to the foundations, businesses, organizations, and individuals who support Claudia House and the young people we serve.</p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {communitySupporters.map((s) => {
              const cls = "rounded-xl border border-[var(--color-line)] px-6 py-3 font-medium text-[var(--color-primary-deep)]";
              const href = supporterLinks[s];
              return href ? (
                <a key={s} href={href} target="_blank" rel="noopener noreferrer" className={`${cls} transition-colors hover:bg-[var(--color-tint)] hover:border-[var(--color-primary)]`}>{s}</a>
              ) : (
                <span key={s} className={cls}>{s}</span>
              );
            })}
          </div>
        </div>
      </section>

      {/* WEBSITE ACKNOWLEDGMENT */}
      <section className="border-t border-[var(--color-line)] py-24">
        <div className="wrap mx-auto max-w-4xl text-center">
          <p className="eyebrow">Website Acknowledgment</p>
          <p className="soft mt-5 text-balance leading-[1.8]">
            This website was designed, developed, and secured through the generous donation of time and expertise from{" "}
            <a href="https://hemanthvishnu.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-[var(--color-primary-deep)] underline decoration-[var(--color-line)] underline-offset-4 hover:decoration-[var(--color-primary)]">Hemanth Vishnu Akula</a>, Founder at{" "}
            <a href="https://authexlabs.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-[var(--color-primary-deep)] underline decoration-[var(--color-line)] underline-offset-4 hover:decoration-[var(--color-primary)]">Authex Labs</a>.
          </p>
          <p className="soft mt-4 text-balance leading-[1.8]">
            Thank you for supporting Claudia House and helping us strengthen our online&nbsp;presence.
          </p>
          <p className="mt-7 text-sm italic text-[var(--color-ink-soft)]">
            {/* nbsp keeps the separator tied to the name so it can never start a line */}
            <a href="https://authexlabs.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[var(--color-primary)]">Authex Labs</a>&nbsp;&middot; Glasgow, United Kingdom
          </p>
        </div>
      </section>
    </>
  );
}
