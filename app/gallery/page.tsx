import PageBanner from "@/components/PageBanner";
import CtaBand from "@/components/CtaBand";
import Gallery from "@/components/Gallery";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Gallery",
  description:
    "Step inside Claudia House: bedrooms, shared living spaces and the garden of the Portland home where young adults ages 18–25 build independent futures.",
  path: "/gallery/",
});

export default function GalleryPage() {
  return (
    <>
      <PageBanner path="/gallery/" crumb="Gallery" title="Step inside our home" lead="Warm bedrooms, shared living spaces, a garden, and walls full of encouragement. A real home where youth feel they belong." />
      <section className="section pt-16">
        <div className="wrap">
          <Gallery />
        </div>
      </section>
      <CtaBand title="Help us make this home even better" lead="Your gift funds remodeling, furnishings, and the everyday comforts that make a house a home." cta="Donate" href="/get-involved" />
    </>
  );
}
