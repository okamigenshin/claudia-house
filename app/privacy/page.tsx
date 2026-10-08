import PageBanner from "@/components/PageBanner";
import { site } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Claudia House handles information collected through this website, including email enquiries and external services.",
  path: "/privacy/",
});

// NOTE FOR THE ORGANISATION
// This page describes what the website itself actually does: it is a static
// site with no analytics, no advertising tags, no cookies and no third-party
// trackers. Everything below was written from the site's real behaviour rather
// than from a generic template.
//
// It is NOT legal advice, and it does not describe how Claudia House handles
// client or programme records offline — that belongs in a separate, broader
// privacy notice. Please have it reviewed before relying on it for grant or
// advertising applications.

const UPDATED = "October 2026";

export default function Privacy() {
  return (
    <>
      <PageBanner
        path="/privacy/"
        crumb="Privacy Policy"
        title="Privacy Policy"
        lead="What this website collects, why, and what we never do with it."
      />

      <section className="section">
        <div className="wrap mx-auto max-w-4xl">
          <p className="soft">Last updated: {UPDATED}</p>

          <Block title="The short version">
            <p className="soft mt-4">
              This website does not track you. It sets no cookies, runs no analytics, and includes no
              advertising or social media trackers. The only information we receive is what you choose to
              send to us by email or phone.
            </p>
          </Block>

          <Block title="What we collect">
            <p className="soft mt-4">
              <strong>Enquiries.</strong> If you email or call us, we receive the information you
              choose to share. We use it to respond to your enquiry. This website does not collect
              contact form submissions or newsletter sign-ups.
            </p>
            <p className="soft mt-4">
              GitHub Pages may log request information when serving the site. The Google Maps embed
              and external donation links are subject to their providers&rsquo; own data practices.
            </p>
          </Block>

          <Block title="What we never do">
            <ul className="soft mt-4 list-disc space-y-2 pl-5">
              <li>We never sell, rent or trade your information.</li>
              <li>We never share donor or supporter details with other organisations for their own marketing.</li>
              <li>We never use your information for automated decision-making or profiling.</li>
            </ul>
          </Block>

          <Block title="Donations">
            <p className="soft mt-4">
              Donations are processed by PayPal on PayPal&rsquo;s own website. Your card and payment details
              are entered there, not here, and are never seen or stored by Claudia House or by this site.
              PayPal&rsquo;s handling of that information is governed by their privacy policy.
            </p>
          </Block>

          <Block title="Services we rely on">
            <p className="soft mt-4">
              This site is hosted on GitHub Pages, which may log standard server request information as part
              of delivering the page. The
              map on our contact page is embedded from Google Maps, which may set its own cookies if you
              interact with it. We do not control those services&rsquo; own data practices.
            </p>
          </Block>

          <Block title="How long we keep things">
            <p className="soft mt-4">
              We keep enquiries only as long as needed to respond and to maintain reasonable records of our
              work.
            </p>
          </Block>

          <Block title="Your choices">
            <p className="soft mt-4">
              You can ask us at any time to tell you what information we hold about you, correct it, or
              delete it. Email{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-[var(--color-primary-deep)] underline decoration-[var(--color-line)] underline-offset-4">
                {site.email}
              </a>{" "}
              and we will action it.
            </p>
          </Block>

          <Block title="Children">
            <p className="soft mt-4">
              Claudia House serves young adults aged 18&ndash;25. This website is not directed at children and
              we do not knowingly collect information from anyone under 18 through it.
            </p>
          </Block>

          <Block title="Changes">
            <p className="soft mt-4">
              If this policy changes we will update the date at the top of this page.
            </p>
          </Block>

          <Block title="Contact us">
            <p className="soft mt-4">
              Questions about this policy can go to{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-[var(--color-primary-deep)] underline decoration-[var(--color-line)] underline-offset-4">
                {site.email}
              </a>{" "}
              or {site.phone}, or by post to {site.address}.
            </p>
          </Block>
        </div>
      </section>
    </>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-12">
      <h2 className="text-[1.5rem] leading-tight">{title}</h2>
      {children}
    </div>
  );
}
