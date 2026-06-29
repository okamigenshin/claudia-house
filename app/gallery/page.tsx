import PageBanner from "@/components/PageBanner";
import CtaBand from "@/components/CtaBand";
import Gallery from "@/components/Gallery";

export const metadata = { title: "Gallery | Claudia House" };

export default function GalleryPage() {
  return (
    <>
      <PageBanner crumb="Gallery" title="Step inside our home" lead="Warm bedrooms, shared living spaces, a garden, and walls full of encouragement — a real home where youth feel they belong." />
      <section className="section pt-16">
        <div className="wrap">
          <Gallery />
        </div>
      </section>
      <CtaBand title="Help us make this home even better" lead="Your gift funds remodeling, furnishings, and the everyday comforts that make a house a home." cta="Donate" href="/get-involved" />
    </>
  );
}
