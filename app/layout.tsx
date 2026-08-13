import type { Metadata } from "next";
import "./globals.css";
import Analytics from "@/components/Analytics";
import CookieConsent from "@/components/CookieConsent";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import { CONTACT_EMAIL, NAP, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Accounting & Tax Strategy in Louisville, KY`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.png" },
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // NAP (name/address/phone) here must stay in sync with the Google
  // Business Profile -- mismatched local-business data is a real ranking
  // signal, not just a cosmetic detail.
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    email: CONTACT_EMAIL,
    telephone: NAP.telephone,
    address: {
      "@type": "PostalAddress",
      streetAddress: NAP.streetAddress,
      addressLocality: NAP.addressLocality,
      addressRegion: NAP.addressRegion,
      postalCode: NAP.postalCode,
      addressCountry: "US",
    },
    areaServed: ["Louisville, KY", "Kentucky"],
    priceRange: "$$",
  };

  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col font-sans">
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <div className="pb-14 sm:pb-0">
          <Footer />
        </div>
        <MobileCallBar />
        <CookieConsent />
      </body>
    </html>
  );
}
