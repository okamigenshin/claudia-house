import PageBanner from "@/components/PageBanner";
import Icon, { type IconName } from "@/components/Icon";
import { site } from "@/lib/content";

export const metadata = {
  title: "Contact",
  description:
    "Contact Claudia House in Portland, Oregon for referrals, volunteering, donations or general enquiries. Call 503-379-0116 or email info@claudiahouse.com.",
  alternates: { canonical: "/contact/" },
  openGraph: {
    title: "Contact | Claudia House",
    description:
      "Contact Claudia House in Portland, Oregon for referrals, volunteering, donations or general enquiries. Call 503-379-0116 or email info@claudiahouse.com.",
    url: "/contact/",
  },
};

export default function Contact() {
  return (
    <>
      <PageBanner path="/contact/" crumb="Contact" title="Get in touch" lead="Questions, referrals, volunteering, or partnership. We'd love to hear from you." />

      <section className="section">
        <div className="wrap grid gap-16 lg:grid-cols-2">
          {/* FORM */}
          <div>
            <h2 className="text-[2rem]">Send us a message</h2>
            {/* Static export: wire this to a form service (Formspree/Web3Forms) or an email backend. */}
            <form className="mt-6" action="https://formspree.io/f/your-id" method="POST">
              <p className="mb-4 text-sm text-[var(--color-ink-soft)]">
                Fields marked <span className="text-[var(--color-accent)]">*</span> are required.
              </p>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="First name" name="first_name" autoComplete="given-name" />
                <Field label="Last name" name="last_name" autoComplete="family-name" />
              </div>
              <Field label="Email" name="email" type="email" autoComplete="email" />
              <div className="mb-5">
                <label htmlFor="field-reason" className="mb-2 block text-sm font-semibold text-[var(--color-primary-deep)]">Reason for contact</label>
                <select id="field-reason" name="reason" className="w-full rounded-[10px] border border-[var(--color-line)] bg-white px-4 py-3.5 text-[1.0625rem]">
                  <option>General inquiry</option>
                  <option>Make a referral</option>
                  <option>Volunteer</option>
                  <option>Donate / sponsor</option>
                  <option>Careers</option>
                </select>
              </div>
              <div className="mb-6">
                <label htmlFor="field-message" className="mb-2 block text-sm font-semibold text-[var(--color-primary-deep)]">
                  Message<span className="ml-1 text-[var(--color-accent)]" aria-hidden="true">*</span>
                </label>
                <textarea id="field-message" name="message" rows={6} required className="w-full rounded-[10px] border border-[var(--color-line)] bg-white px-4 py-3.5 text-[1.0625rem]" />
              </div>
              <button type="submit" className="btn btn-primary">Send message &rarr;</button>
            </form>
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
          <h2 className="mt-4">Subscribe for updates</h2>
          <p className="soft mt-4">News, events, and ways to help, straight to your inbox.</p>
          <form className="mx-auto mt-7 flex max-w-md flex-col gap-3 sm:flex-row">
            <input type="email" placeholder="Your email" aria-label="Email" autoComplete="email" className="flex-1 rounded-full border border-[var(--color-line)] bg-white px-5 py-3.5 text-[1.0625rem]" />
            <button type="submit" className="btn btn-primary justify-center">Subscribe</button>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  required = true,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  // id/htmlFor pairing: without it a screen reader announces only "edit text, blank",
  // and clicking the visible label doesn't focus the input.
  const id = `field-${name}`;
  return (
    <div className="mb-5">
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-[var(--color-primary-deep)]">
        {label}
        {required && <span className="ml-1 text-[var(--color-accent)]" aria-hidden="true">*</span>}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-[10px] border border-[var(--color-line)] bg-white px-4 py-3.5 text-[1.0625rem]"
      />
    </div>
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
