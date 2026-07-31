import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL, OG_IMAGE, orgJsonLd, jsonLdProps } from "@/lib/seo";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-fraunces",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const DESCRIPTION =
  "Claudia House is a Portland, Oregon 501(c)(3) nonprofit providing stable housing, life skills, and holistic support for youth through its Residential Independent Living Program.";

export const metadata: Metadata = {
  metadataBase: new URL(`${SITE_URL}/`),
  title: {
    default: "Claudia House | Where youth dream big",
    template: "%s | Claudia House",
  },
  description: DESCRIPTION,
  applicationName: "Claudia House",
  alternates: { canonical: "/" },
  openGraph: {
    siteName: "Claudia House",
    type: "website",
    locale: "en_US",
    url: `${SITE_URL}/`,
    title: "Claudia House | Where youth dream big",
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Claudia House | Where youth dream big",
    description: DESCRIPTION,
    images: [OG_IMAGE.url],
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#164e63",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="min-h-full flex flex-col">
        {/* First focusable element: lets keyboard users bypass the 8-item header */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[200] focus:rounded-lg focus:bg-white focus:px-5 focus:py-3 focus:font-semibold focus:text-[var(--color-primary-deep)] focus:shadow-lg"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <script {...jsonLdProps(orgJsonLd())} />
      </body>
    </html>
  );
}
