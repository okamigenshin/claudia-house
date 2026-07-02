import Link from "next/link";
import { pillars, gallery, supporters } from "@/lib/content";
import { asset } from "@/lib/config";

const stats = [
  { n: "100%", l: "Trauma-informed, culturally responsive care" },
  { n: "4", l: "Core pillars: Housing, Employment, Education, Finance" },
  { n: "ILP", l: "Residential Independent Living Program" },
  { n: "18–25", l: "Young adults served on their path to independence" },
];

const homeGallery = gallery.slice(0, 6);

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="section pt-20">
        <div className="wrap grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="eyebrow">Portland, Oregon · 501(c)(3) Nonprofit</p>
            <h1 className="mt-4">Where youth dream big</h1>
            <p className="lead mt-6 max-w-lg">
              Claudia House gives Oregon&rsquo;s young people stable housing, life skills, and holistic
              support — so they can overcome obstacles and build self-sufficient futures.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/get-involved" className="btn btn-primary">Support a Youth &rarr;</Link>
              <Link href="/programs" className="btn btn-outline">Make a Referral</Link>
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("/images/shared/hero-background.jpg")}
            alt="A group of diverse, smiling young people sitting together"
            className="aspect-[5/4] w-full rounded-3xl object-cover shadow-sm"
          />
        </div>
      </section>

      {/* MISSION */}
      <section className="section bg-[var(--color-tint)]">
        <div className="wrap mx-auto max-w-3xl text-center">
          <p className="eyebrow">Our Mission</p>
          <h2 className="mt-4">Increasing youth&rsquo;s behavioral, educational, and placement stability</h2>
          <p className="lead mt-6">
            Named after a social worker and mother who welcomed teens of every background into her home,
            Claudia House continues her legacy through short-term emergent and longer-term care built on a
            balance of mind, body, and spirit.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="section">
        <div className="wrap grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l}>
              <div className="font-display text-[3.5rem] font-black leading-none text-[var(--color-primary)]">{s.n}</div>
              <p className="soft mt-2">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="section bg-[var(--color-tint)]">
        <div className="wrap">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="eyebrow">What We Do</p>
            <h2 className="mt-4">Pathways to independent living</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <div key={p.title} className="card">
                <div className="card-ic"><Dot /></div>
                <h3>{p.title}</h3>
                <p className="soft mt-2">{p.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/programs" className="btn btn-outline">Explore all programs &rarr;</Link>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="section">
        <div className="wrap">
          <div className="mb-14 grid items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="eyebrow">A Real Home</p>
              <h2 className="mt-4">Step inside Claudia House</h2>
              <p className="lead mt-5">
                Comfortable bedrooms, shared living spaces, a garden, and walls full of encouragement —
                designed so every young person feels they belong.
              </p>
              <Link href="/gallery" className="btn btn-outline mt-7">View the gallery &rarr;</Link>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset("/images/shared/banner-claudia.jpg")}
              alt="The welcoming front porch of Claudia House"
              className="aspect-[16/10] w-full rounded-3xl object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {homeGallery.map((img) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={img.src} src={asset(img.src)} alt={img.alt} className="aspect-[4/3] w-full rounded-2xl object-cover" />
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="section bg-[var(--color-tint)]">
        <div className="wrap mx-auto max-w-4xl text-center">
          <p className="font-display text-[clamp(1.75rem,3.4vw,2.6rem)] font-bold leading-snug text-[var(--color-primary-deep)]">
            &ldquo;Do not apologize for who you are or where you are in life — just set your sights high.&rdquo;
          </p>
        </div>
      </section>

      {/* GET INVOLVED */}
      <section className="section">
        <div className="wrap">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="eyebrow">Get Involved</p>
            <h2 className="mt-4">Help a young person build their future</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              { t: "Donate", b: "Seed our home — from remodeling to furnishings. Tax-deductible 501(c)(3).", c: "Give Now", primary: true },
              { t: "Volunteer", b: "Mentor, drive, or share a professional skill with our youth.", c: "Join Us" },
              { t: "Careers", b: "Case Managers & Direct Care staff — do meaningful work.", c: "See Roles" },
            ].map((x) => (
              <div key={x.t} className="card">
                <div className="card-ic"><Dot /></div>
                <h3>{x.t}</h3>
                <p className="soft mt-2">{x.b}</p>
                <Link href="/get-involved" className={`btn btn-sm mt-5 ${x.primary ? "btn-primary" : "btn-outline"}`}>{x.c}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="bg-[var(--color-tint)] py-20">
        <div className="wrap">
          <p className="eyebrow mb-9 text-center">In Partnership With</p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {supporters.slice(0, 6).map((s) => (
              <span key={s} className="text-lg font-semibold text-[var(--color-primary-deep)] opacity-70">{s}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Dot() {
  return <span className="block h-3 w-3 rounded-sm bg-current" aria-hidden="true" />;
}
