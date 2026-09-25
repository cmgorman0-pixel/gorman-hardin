// Gorman Hardin CPA & Consulting is now Framework Advisory. Every old URL
// permanently redirects to its closest page on the new site so the rankings,
// links and Business Profile traffic this domain earned carry over, instead
// of two sites competing for the same Louisville searches.
const FA = "https://www.frameworkadvisorytax.com";

const PAGE_MAP = {
  "/": "/locations/louisville",
  "/about-us": "/about",
  "/blog": "/resources",
  "/reviews": "/results",
  "/contact": "/contact",
  "/privacy": "/privacy",
  "/full-service-accounting": "/services/bookkeeping-advisory",
  "/payroll-services": "/services/bookkeeping-advisory",
  "/tax-preparation": "/services",
  "/tax-planning-and-bookkeeping-services": "/guides/small-business-tax-planning",
  "/choosing-accounting-software-quickbooks-sage": "/services/bookkeeping-advisory",
  "/diy-bookkeeping-mistakes": "/resources/monthly-bookkeeping-vs-annual-cleanup",
  "/starting-a-business-in-kentucky-a-step-by-step-guide": "/locations/kentucky",
  "/tax-saving-tips-from-a-cpa": "/resources/year-end-tax-moves-before-december-31",
  "/year-end-tax-preparation-checklist": "/resources/year-end-tax-moves-before-december-31",
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      ...Object.entries(PAGE_MAP).map(([source, dest]) => ({
        source,
        destination: `${FA}${dest}`,
        permanent: true,
      })),
      // Anything else (old query-string URLs, images, pages not listed).
      { source: "/:path*", destination: `${FA}/`, permanent: true },
    ];
  },
  images: {
    // Deliberately narrow -- no wildcard hostnames. Next's image optimizer
    // has had real SSRF/DoS advisories tied to over-broad remotePatterns;
    // this allowlist is the mitigation, not just a style choice.
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
