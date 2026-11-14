import type { MetadataRoute } from "next";
import { site } from "./lib/site";
import { products } from "./shop/data";

// Generated at build time, so new pages only need to be added to this list.
const routes: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/residential-snow-removal", priority: 0.9, changeFrequency: "weekly" },
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
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
  { path: "/blog/why-hire-snow-removal-company", priority: 0.6, changeFrequency: "yearly" },
  { path: "/blog/why-calgary-spring-cleanup-matters", priority: 0.6, changeFrequency: "yearly" },
  { path: "/blog/why-open-grade-base-for-paver-patios", priority: 0.6, changeFrequency: "yearly" },
  { path: "/careers", priority: 0.5, changeFrequency: "monthly" },
  { path: "/shop", priority: 0.4, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.2, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    ...routes.map((route) => ({
      url: `${site.url}${route.path === "/" ? "" : route.path}`,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...products.map((product) => ({
      url: `${site.url}/shop/${product.id}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.3,
    })),
  ];
}
