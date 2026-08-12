/** @type {import('next').NextConfig} */
const nextConfig = {
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
