export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://gormanhardin.com";

export const SITE_NAME = "Gorman Hardin CPA & Consulting";

export const SITE_DESCRIPTION =
  "Accounting, tax strategy, and advisory for growing, owner-led businesses in Louisville, Kentucky and beyond.";

export const CONTACT_EMAIL = "info@gormanhardin.com";

// Must match the Google Business Profile exactly -- this is the whole point
// of the rebuild's LocalBusiness schema (see app/layout.tsx). Verify against
// the live GBP listing before changing any of these.
export const NAP = {
  name: SITE_NAME,
  streetAddress: "78 E Main St",
  addressLocality: "Louisville",
  addressRegion: "KY",
  postalCode: "40201",
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
