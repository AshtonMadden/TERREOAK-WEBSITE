import type { NextConfig } from "next";

const agentLinks = [
  '</llms.txt>; rel="describedby"; type="text/plain"',
  '</sitemap.xml>; rel="sitemap"; type="application/xml"',
  '</.well-known/mcp/server-card.json>; rel="service-desc"; type="application/json"',
].join(", ");

const wantsMarkdown = [{ type: "header" as const, key: "accept", value: "(.*)text/markdown(.*)" }];

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
          // Point AI agents at the machine-readable resources (RFC 8288).
          { key: "Link", value: agentLinks },
          // Pages can also be served as Markdown, so caches must keep the two versions apart.
          { key: "Vary", value: "Accept, RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch" },
        ],
      },
      {
        source: "/",
        headers: [{ key: "Link", value: `</md>; rel="alternate"; type="text/markdown", ${agentLinks}` }],
      },
      {
        // Photos, video, fonts and brand files rarely change; let browsers keep them for a year.
        source: "/:path(.+\\.(?:jpg|jpeg|JPG|png|webp|avif|svg|ico|mp4|woff2))",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000" }],
      },
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [
        // An agent that asks for Markdown gets the Markdown version of the same page.
        { source: "/", has: wantsMarkdown, destination: "/md" },
        { source: "/:path((?!api/|_next/|md/|md$|agent/|\\.well-known/).*)", has: wantsMarkdown, destination: "/md/:path" },
        // MCP Server Card at its standard address.
        { source: "/.well-known/mcp/server-card.json", destination: "/agent/server-card" },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
  async redirects() {
    return [
      // The community pages live under /snow-removal/<community>; the section itself is the main snow page.
      { source: "/snow-removal", destination: "/residential-snow-removal", permanent: true },
      // Pricing now lives on the snow removal page.
      { source: "/snow-removal-cost-calgary", destination: "/residential-snow-removal#pricing", permanent: true },
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
    // Resized photos are kept for a month instead of the four-hour default.
    minimumCacheTTL: 2678400,
  },
};

export default nextConfig;
