import type { Metadata } from "next";
import { site } from "./site";

type PageMeta = {
  title: string;
  description: string;
  /** Route path starting with "/", e.g. "/about". Use "/" for the homepage. */
  path: string;
  /** Path or absolute URL of the share image. Defaults to the site-wide image. */
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
};

export const absoluteUrl = (path: string) =>
  path.startsWith("http") ? path : `${site.url}${path === "/" ? "" : encodeURI(path)}`;

/** Builds consistent title/description/canonical/Open Graph/Twitter tags for a page. */
export function pageMeta({ title, description, path, image, type = "website", noindex }: PageMeta): Metadata {
  const url = absoluteUrl(path);
  const img = absoluteUrl(image ?? site.defaultOgImage);
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      images: [{ url: img }],
      locale: "en_CA",
      type,
    },
    twitter: { card: "summary_large_image", title, description, images: [img] },
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
