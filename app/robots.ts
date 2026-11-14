import type { MetadataRoute } from "next";
import { site } from "./lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    // /thanks is kept out of search with a noindex tag, which crawlers can only see if they are allowed to fetch it.
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
