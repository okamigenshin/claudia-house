import Link from "next/link";
import { home, gallery, supporters } from "@/lib/content";
import { asset } from "@/lib/config";

const homeGallery = gallery.slice(0, 6);

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="section pt-20">
        <div className="wrap grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="eyebrow">{home.heroEyebrow}</p>
            <h1 className="mt-4">{home.heroTitle}</h1>
            <p className="lead mt-6 max-w-lg">{home.heroLead}</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/get-involved" className="btn btn-primary">{home.heroPrimaryCta} &rarr;</Link>
              <Link href="/programs" className="btn btn-outline">{home.heroSecondaryCta}</Link>
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset(home.heroImage)}
            alt={home.heroImageAlt}
            className="aspect-[5/4] w-full rounded-3xl object-cover shadow-sm"
          />
        </div>
      </section>

      {/* MISSION */}
      <section className="section bg-[var(--color-tint)]">
        <div className="wrap mx-auto max-w-3xl text-center">
          <p className="eyebrow">{home.missionEyebrow}</p>
          <h2 className="mt-4">{home.missionTitle}</h2>
          <p className="lead mt-6">{home.missionBody}</p>
        </div>
      </section>

      {/* STATS */}
      <section className="section">
        <div className="wrap grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {home.stats.map((s) => (
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
            <p className="eyebrow">{home.programsEyebrow}</p>
            <h2 className="mt-4">{home.programsTitle}</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {home.pillars.map((p) => (
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
              <p className="eyebrow">{home.galleryEyebrow}</p>
              <h2 className="mt-4">{home.galleryTitle}</h2>
              <p className="lead mt-5">{home.galleryBody}</p>
              <Link href="/gallery" className="btn btn-outline mt-7">View the gallery &rarr;</Link>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset(home.galleryImage)}
              alt={home.galleryImageAlt}
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
            &ldquo;{home.quote}&rdquo;
          </p>
        </div>
      </section>

      {/* GET INVOLVED */}
      <section className="section">
        <div className="wrap">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="eyebrow">{home.getInvolvedEyebrow}</p>
            <h2 className="mt-4">{home.getInvolvedTitle}</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {home.getInvolvedCards.map((x, i) => (
              <div key={x.title} className="card">
                <div className="card-ic"><Dot /></div>
                <h3>{x.title}</h3>
                <p className="soft mt-2">{x.body}</p>
                <Link href="/get-involved" className={`btn btn-sm mt-5 ${i === 0 ? "btn-primary" : "btn-outline"}`}>{x.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="bg-[var(--color-tint)] py-20">
        <div className="wrap">
          <p className="eyebrow mb-9 text-center">{home.partnersEyebrow}</p>
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
