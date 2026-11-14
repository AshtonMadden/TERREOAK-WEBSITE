import type { Metadata } from "next";
import { site } from "./site";

type PageMeta = {
  title: string;
  description: string;
  /** Route path starting with "/", e.g. "/about". Use "/" for the homepage. */
  path: string;
  /**
   * The page's main photo. Kept for reference: the share image itself is the 1200x630 file
   * generated from it by scripts/make-og-images.mjs, found by route at /og/<route>.jpg.
   */
  image?: string;
  /** Short description of the share image for screen readers. Defaults to the page title. */
  imageAlt?: string;
  type?: "website" | "article";
  noindex?: boolean;
};

export const absoluteUrl = (path: string) =>
  path.startsWith("http") ? path : `${site.url}${path === "/" ? "" : encodeURI(path)}`;

/** The generated 1200x630 share image for a route. */
export const shareImage = (path: string) => `${site.url}/og/${path === "/" ? "home" : path.slice(1)}.jpg`;

/** Builds consistent title/description/canonical/Open Graph/Twitter tags for a page. */
export function pageMeta({ title, description, path, imageAlt, type = "website", noindex }: PageMeta): Metadata {
  const url = absoluteUrl(path);
  const img = shareImage(path);
  const alt = imageAlt ?? title.split(" | ")[0];
  return {
    title,
    description,
    alternates: { canonical: url },
    // Let Google show large image previews and full text snippets for indexable pages.
    robots: noindex
      ? { index: false, follow: true }
      : { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      images: [{ url: img, width: 1200, height: 630, alt }],
      locale: "en_CA",
      type,
    },
    twitter: { card: "summary_large_image", title, description, images: [{ url: img, alt }] },
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqLd(faqs: { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}
