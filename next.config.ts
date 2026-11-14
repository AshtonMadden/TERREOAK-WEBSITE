import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Security and caching headers live here so they apply on any host, not just one provider.
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      {
        // Photos, video and brand files rarely change; let browsers keep them for a month.
        source: "/:all*(jpg|jpeg|JPG|png|webp|avif|svg|mp4|woff2)",
        headers: [{ key: "Cache-Control", value: "public, max-age=2592000" }],
      },
    ];
  },
  async redirects() {
    return [
      // The referral program now lives on the snow removal page.
      { source: "/snow-referral", destination: "/residential-snow-removal#referral", permanent: true },
      // The shop was removed; send its old addresses to the homepage.
      { source: "/shop", destination: "/", permanent: true },
      { source: "/shop/:id", destination: "/", permanent: true },
      // Old addresses the previous site linked to that never had a page.
      { source: "/support", destination: "/#home-form", permanent: true },
      { source: "/reviews", destination: "/#reviews", permanent: true },
    ];
  },
  images: {
    // Serve AVIF where the browser supports it, WebP otherwise.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
