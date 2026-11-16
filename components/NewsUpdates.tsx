import { newsUpdates } from "@/lib/content";
import Img from "@/components/Img";
import Icon from "@/components/Icon";

export default function NewsUpdates() {
  return (
    <section id="news-updates" aria-labelledby="news-heading" className="section bg-[var(--color-tint)]">
      <div className="wrap">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow">From Our Home</p>
          <h2 id="news-heading" className="mt-4">News &amp; Updates</h2>
        </div>
        <div className="grid gap-7 lg:grid-cols-2">
          {newsUpdates.map((update) => (
            <article
              key={update.id}
              aria-labelledby={`${update.id}-heading`}
              className={`overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white ${update.photos.length === 0 ? "lg:col-span-2" : ""}`}
            >
              {update.id === "youth-transportation" ? (
                <div className="relative bg-[var(--color-muted)]">
                  {update.photos.map((photo, index) => (
                    <a
                      key={photo.src}
                      href={photo.src}
                      aria-label={`View full photo: ${photo.alt}`}
                      className={index === 0 ? "block" : "absolute right-4 bottom-4 block w-[26%] overflow-hidden rounded-xl border-4 border-white shadow-lg"}
                    >
                      <Img
                        src={photo.src}
                        alt={photo.alt}
                        sizes={index === 0 ? "(min-width: 1024px) 46vw, 92vw" : "(min-width: 1024px) 12vw, 24vw"}
                        className={index === 0 ? "aspect-[8/5] w-full object-cover" : "aspect-[3/4] w-full object-cover"}
                      />
                    </a>
                  ))}
                </div>
              ) : update.photos.length > 0 && (
                <div className="grid grid-cols-2 gap-1 bg-[var(--color-muted)]">
                  {update.photos.map((photo) => (
                    <a key={photo.src} href={photo.src} className="block" aria-label={`View full photo: ${photo.alt}`}>
                      <Img
                        src={photo.src}
                        alt={photo.alt}
                        sizes="(min-width: 1200px) 280px, (min-width: 1024px) 24vw, 46vw"
                        className="aspect-[4/5] w-full object-cover"
                      />
                    </a>
                  ))}
                </div>
              )}
              <div className={`p-7 sm:p-9 ${update.photos.length === 0 ? "flex flex-col items-start gap-5 sm:flex-row sm:gap-7" : ""}`}>
                {update.photos.length === 0 && <div className="card-ic mb-0 shrink-0"><Icon name="graduation" /></div>}
                <div>
                  <h3 id={`${update.id}-heading`}>{update.title}</h3>
                  <p className="soft mt-4">{update.body}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
