import PageBanner from "@/components/PageBanner";
import Icon, { type IconName } from "@/components/Icon";
import { site } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact Claudia House in Portland, Oregon for referrals, volunteering, donations or general enquiries. Call 503-379-0116 or email info@claudiahouse.com.",
  path: "/contact/",
});

export default function Contact() {
  return (
    <>
      <PageBanner path="/contact/" crumb="Contact" title="Get in touch" lead="Questions, referrals, volunteering, or partnership. We'd love to hear from you." />

      <section className="section">
        <div className="wrap grid gap-16 lg:grid-cols-2">
          {/* FORM */}
          <div>
            <h2 className="text-[2rem]">Send us a message</h2>
            <p className="soft mt-6">Email or call us with your questions, referrals, or enquiries.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`mailto:${site.email}`} className="btn btn-primary">Email us &rarr;</a>
              <a href={site.phoneHref} className="btn btn-outline">{site.phone}</a>
            </div>
          </div>

          {/* DETAILS */}
          <div>
            <h2 className="text-[2rem]">Contact details</h2>
            <div className="mt-6">
              <Detail icon="mapPin" title="Address"><span className="soft">{site.address}</span></Detail>
              <Detail icon="phone" title="Phone"><a href={site.phoneHref}>{site.phone}</a></Detail>
              <Detail icon="mail" title="Email">
                <a href={`mailto:${site.email}`}>{site.email}</a><br />
                <a href={`mailto:${site.careersEmail}`}>{site.careersEmail}</a> <span className="soft">(careers)</span>
              </Detail>
            </div>
            <iframe
              title="Map to Claudia House"
              className="mt-7 h-64 w-full rounded-2xl border border-[var(--color-line)]"
              loading="lazy"
              src="https://www.google.com/maps?q=7310+SE+Lambert+St,+Portland,+OR+97206&output=embed"
            />
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-[var(--color-tint)] py-20">
        <div className="wrap mx-auto max-w-xl text-center">
          <p className="eyebrow">Stay Connected</p>
          <h2 className="mt-4">Stay in touch</h2>
          <p className="soft mt-4">Get in touch for news, events, and ways to help.</p>
          <a href={`mailto:${site.email}`} className="btn btn-primary mt-7">Email us &rarr;</a>
        </div>
      </section>
    </>
  );
}

function Detail({ icon, title, children }: { icon: IconName; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4 border-b border-[var(--color-line)] py-5">
      <div className="card-ic mb-0 shrink-0"><Icon name={icon} size={22} /></div>
      <div><strong className="text-[var(--color-primary-deep)]">{title}</strong><br />{children}</div>
    </div>
  );
}
