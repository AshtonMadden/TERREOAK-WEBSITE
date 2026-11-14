import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      // The referral program now lives on the snow removal page.
      { source: "/snow-referral", destination: "/residential-snow-removal#referral", permanent: true },
    ];
  },
  images: {
    // Serve AVIF where the browser supports it, WebP otherwise.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
