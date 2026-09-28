export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://gormanhardin.com";

export const SITE_NAME = "Gorman Hardin CPA & Consulting";

export const SITE_DESCRIPTION =
  "Accounting, tax strategy, and advisory for growing, owner-led businesses in Louisville, Kentucky and beyond.";

export const CONTACT_EMAIL = "info@gormanhardin.com";

// Must match the Google Business Profile exactly -- this is the whole point
// of the rebuild's LocalBusiness schema (see app/layout.tsx). No street
// address or ZIP on purpose: the firm doesn't publish one (service-area
// business), so only city/region are listed.
export const NAP = {
  name: SITE_NAME,
  addressLocality: "Louisville",
  addressRegion: "KY",
  telephone: "+15028057768",
  telephoneDisplay: "(502) 805-7768",
};

export const NAV_LINKS = [
  { href: "/about-us", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export const SERVICE_LINKS = [
  { href: "/full-service-accounting", label: "Full-Service Accounting" },
  { href: "/payroll-services", label: "Payroll Services" },
  { href: "/tax-preparation", label: "Tax Preparation" },
];
