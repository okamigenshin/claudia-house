import PageBanner from "@/components/PageBanner";
import { site } from "@/lib/content";

export const metadata = { title: "Contact | Claudia House" };

export default function Contact() {
  return (
    <>
      <PageBanner crumb="Contact" title="Get in touch" lead="Questions, referrals, volunteering, or partnership — we'd love to hear from you." />

      <section className="section">
        <div className="wrap grid gap-16 lg:grid-cols-2">
          {/* FORM */}
          <div>
            <h2 className="text-[2rem]">Send us a message</h2>
            {/* Static export: wire this to a form service (Formspree/Web3Forms) or an email backend. */}
            <form className="mt-6" action="https://formspree.io/f/your-id" method="POST">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="First name" name="first_name" />
                <Field label="Last name" name="last_name" />
              </div>
              <Field label="Email" name="email" type="email" />
              <div className="mb-5">
                <label className="mb-2 block text-sm font-semibold text-[var(--color-primary-deep)]">Reason for contact</label>
                <select name="reason" className="w-full rounded-[10px] border border-[var(--color-line)] bg-white px-4 py-3.5 text-[1.0625rem]">
                  <option>General inquiry</option>
                  <option>Make a referral</option>
                  <option>Volunteer</option>
                  <option>Donate / sponsor</option>
                  <option>Careers</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="mb-2 block text-sm font-semibold text-[var(--color-primary-deep)]">Message</label>
                <textarea name="message" rows={6} className="w-full rounded-[10px] border border-[var(--color-line)] bg-white px-4 py-3.5 text-[1.0625rem]" />
              </div>
              <button type="submit" className="btn btn-primary">Send message &rarr;</button>
            </form>
          </div>

          {/* DETAILS */}
          <div>
            <h2 className="text-[2rem]">Contact details</h2>
            <div className="mt-6">
              <Detail title="Address"><span className="soft">{site.address}</span></Detail>
              <Detail title="Phone"><a href={site.phoneHref}>{site.phone}</a></Detail>
              <Detail title="Email">
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
          <p className="soft mt-4">News, events, and ways to help — straight to your inbox.</p>
          <form className="mx-auto mt-7 flex max-w-md gap-3">
            <input type="email" placeholder="Your email" aria-label="Email" className="flex-1 rounded-full border border-[var(--color-line)] bg-white px-5 py-3.5 text-[1.0625rem]" />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div className="mb-5">
      <label className="mb-2 block text-sm font-semibold text-[var(--color-primary-deep)]">{label}</label>
      <input type={type} name={name} className="w-full rounded-[10px] border border-[var(--color-line)] bg-white px-4 py-3.5 text-[1.0625rem]" />
    </div>
  );
}

function Detail({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4 border-b border-[var(--color-line)] py-5">
      <div className="card-ic mb-0 shrink-0"><span className="block h-3 w-3 rounded-sm bg-current" /></div>
      <div><strong className="text-[var(--color-primary-deep)]">{title}</strong><br />{children}</div>
    </div>
  );
}
