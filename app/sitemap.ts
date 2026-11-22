import type { MetadataRoute } from "next";
import { site } from "./lib/site";
import { communities } from "./snow-removal/communities";

// Generated at build time, so new pages only need to be added to this list.
const routes: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/residential-snow-removal", priority: 0.9, changeFrequency: "weekly" },
  ...communities.map((community) => ({ path: `/snow-removal/${community.slug}`, priority: 0.7, changeFrequency: "monthly" as const })),
  { path: "/landscape-installs", priority: 0.9, changeFrequency: "monthly" },
  { path: "/hardscaping", priority: 0.9, changeFrequency: "monthly" },
  { path: "/softscapes", priority: 0.9, changeFrequency: "monthly" },
  { path: "/commercial-grounds-maintenance", priority: 0.9, changeFrequency: "monthly" },
  { path: "/spring-cleanup-calgary", priority: 0.8, changeFrequency: "monthly" },
  { path: "/fall-cleanup", priority: 0.8, changeFrequency: "monthly" },
  { path: "/irrigation-blowouts", priority: 0.8, changeFrequency: "monthly" },
  { path: "/our-process", priority: 0.7, changeFrequency: "monthly" },
  { path: "/projects", priority: 0.8, changeFrequency: "monthly" },
  { path: "/projects/cranston-landscape-makeover", priority: 0.7, changeFrequency: "yearly" },
  { path: "/projects/mckenzie-lake-landscaping", priority: 0.7, changeFrequency: "yearly" },
  { path: "/mckenzielakelandscaping", priority: 0.7, changeFrequency: "yearly" },
  { path: "/parklandlandscaping", priority: 0.7, changeFrequency: "yearly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
  { path: "/blog/commercial-snow-removal-calgary-guide", priority: 0.6, changeFrequency: "yearly" },
  { path: "/blog/why-hire-snow-removal-company", priority: 0.6, changeFrequency: "yearly" },
  { path: "/blog/why-calgary-spring-cleanup-matters", priority: 0.6, changeFrequency: "yearly" },
  { path: "/blog/why-open-grade-base-for-paver-patios", priority: 0.6, changeFrequency: "yearly" },
  { path: "/careers", priority: 0.5, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.2, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${site.url}${route.path === "/" ? "" : route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
