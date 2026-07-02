import PageBanner from "@/components/PageBanner";
import CtaBand from "@/components/CtaBand";
import Gallery from "@/components/Gallery";
import { galleryPage } from "@/lib/content";

export const metadata = { title: "Gallery | Claudia House" };

export default function GalleryPage() {
  return (
    <>
      <PageBanner crumb="Gallery" title={galleryPage.bannerTitle} lead={galleryPage.bannerLead} />
      <section className="section pt-16">
        <div className="wrap">
          <Gallery />
        </div>
      </section>
      <CtaBand title={galleryPage.ctaTitle} lead={galleryPage.ctaLead} cta={galleryPage.ctaButton} href="/get-involved" />
    </>
  );
}
