import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { absoluteUrl, breadcrumbLd, pageMeta } from "../lib/seo";
import { site } from "../lib/site";
import JsonLd from "./JsonLd";
import { Band, Button, Container } from "./ds";

export type Article = {
  path: string;
  metaTitle: string;
  metaDescription: string;
  title: string;
  category: string;
  hero: string;
  heroAlt: string;
  excerpt: string;
  /** Where the closing button sends readers. */
  cta: { title: string; text: string; label: string; href: string };
};

export const articleMeta = (article: Article) =>
  pageMeta({ title: article.metaTitle, description: article.metaDescription, path: article.path, image: article.hero, type: "article" });

/** Blog post layout: photo hero, readable text column, closing call to action. */
export default function ArticlePage({ article, children }: { article: Article; children: ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${site.url}${article.path}#article`,
        headline: article.title,
        description: article.metaDescription,
        image: absoluteUrl(article.hero),
        articleSection: article.category,
        author: { "@id": `${site.url}/#organization` },
        publisher: { "@id": `${site.url}/#organization` },
        mainEntityOfPage: `${site.url}${article.path}`,
      },
      {
        "@id": `${site.url}${article.path}#breadcrumb`,
        ...breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: article.title, path: article.path },
        ]),
      },
    ],
  };

  return (
    <main className="to-pavement to-flow overflow-x-clip">
      <JsonLd data={jsonLd} />

      <section className="relative isolate flex min-h-[64svh] flex-col justify-end">
        <div className="absolute inset-0 -z-10">
          <Image src={article.hero} alt={article.heroAlt} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-[#1d1f21]/70" />
        </div>
        <Container className="pb-12 pt-36 md:pb-16">
          <Link href="/blog" className="to-link text-[1.05rem]">
            Back to the blog
          </Link>
          <p className="to-sub mt-6">{article.category}</p>
          <h1 className="to-display mt-4 max-w-[24ch] text-[clamp(2.2rem,4.6vw,4rem)] leading-[1.06]">{article.title}</h1>
        </Container>
      </section>

      <article className="py-16 md:py-24">
        <div className="to-prose mx-auto w-full max-w-[760px] px-5 sm:px-8">{children}</div>
      </article>

      <Band>
        <div className="to-card flex flex-col gap-8 p-8 md:flex-row md:items-center md:justify-between md:p-12">
          <div>
            <h2 className="to-display to-h2">{article.cta.title}</h2>
            <p className="to-body mt-4">{article.cta.text}</p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Button href="/blog" variant="quiet">
              More articles
            </Button>
            <Button href={article.cta.href}>{article.cta.label}</Button>
          </div>
        </div>
      </Band>
    </main>
  );
}
