import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { absoluteUrl, breadcrumbLd, faqLd, pageMeta } from "../lib/seo";
import { site } from "../lib/site";
import JsonLd from "./JsonLd";
import { Band, Button, Container, FaqList, Tick } from "./ds";

export type Article = {
  path: string;
  metaTitle: string;
  metaDescription: string;
  title: string;
  category: string;
  hero: string;
  heroAlt: string;
  excerpt: string;
  /** ISO date of the last substantial edit. */
  updated: string;
  /** ISO date first published, when known. */
  published?: string;
  /** Where the closing button sends readers. */
  cta: { title: string; text: string; label: string; href: string };
};

export type ArticleSection = { id: string; title: string; content: ReactNode };

export const articleMeta = (article: Article) =>
  pageMeta({ title: article.metaTitle, description: article.metaDescription, path: article.path, image: article.hero, type: "article" });

const formatDate = (iso: string) => new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });

/**
 * Blog post layout, structured so both readers and search/AI systems can pull answers out of it:
 * a short direct answer first, key takeaways, a table of contents, question-style sections,
 * an FAQ with matching structured data, and links to the related services.
 */
export default function ArticlePage({
  article,
  answer,
  takeaways,
  sections,
  faqs,
  related,
}: {
  article: Article;
  /** One or two sentences that answer the title directly. */
  answer: string;
  takeaways: string[];
  sections: ArticleSection[];
  faqs: { q: string; a: string }[];
  related: { label: string; href: string; desc: string }[];
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${site.url}${article.path}#article`,
        headline: article.title,
        description: article.metaDescription,
        abstract: answer,
        image: absoluteUrl(article.hero),
        articleSection: article.category,
        inLanguage: "en-CA",
        dateModified: article.updated,
        ...(article.published ? { datePublished: article.published } : {}),
        author: { "@id": `${site.url}/#organization` },
        publisher: { "@id": `${site.url}/#organization` },
        mainEntityOfPage: `${site.url}${article.path}`,
        about: { "@type": "Place", name: "Calgary, Alberta" },
      },
      {
        "@id": `${site.url}${article.path}#breadcrumb`,
        ...breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: article.title, path: article.path },
        ]),
      },
      { "@id": `${site.url}${article.path}#faq`, ...faqLd(faqs) },
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
          <p className="mt-6 text-[1.02rem] text-white/80">
            By the TERREOAK team in Calgary. Last updated <time dateTime={article.updated}>{formatDate(article.updated)}</time>.
          </p>
        </Container>
      </section>

      <article className="py-16 md:py-20">
        <div className="mx-auto grid w-full max-w-[1180px] gap-x-16 gap-y-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div className="min-w-0">
            <p className="text-[1.35rem] font-semibold leading-snug text-fg">{answer}</p>

            <div className="to-card mt-10 p-7 md:p-8">
              <h2 className="to-display to-h3">Key takeaways</h2>
              <ul className="mt-5 grid gap-3 text-[1.08rem] leading-relaxed text-fg">
                {takeaways.map((item) => (
                  <li key={item} className="flex gap-3">
                    <Tick />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="to-prose mt-12">
              {sections.map((section) => (
                <section key={section.id} id={section.id}>
                  <h2>{section.title}</h2>
                  {section.content}
                </section>
              ))}
            </div>

            <section id="faq" className="mt-16">
              <h2 className="to-display to-h2">Frequently asked questions</h2>
              <div className="mt-8">
                <FaqList faqs={faqs} />
              </div>
            </section>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <nav aria-label="In this article" className="to-card p-6">
              <h2 className="text-[1.05rem] font-bold text-fg">In this article</h2>
              <ol className="mt-4 grid gap-2.5 text-[1rem]">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`} className="to-focus text-muted transition-colors hover:text-white">
                      {section.title}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#faq" className="to-focus text-muted transition-colors hover:text-white">
                    Frequently asked questions
                  </a>
                </li>
              </ol>
            </nav>
            <div className="to-card mt-5 p-6">
              <h2 className="text-[1.05rem] font-bold text-fg">Related services</h2>
              <ul className="mt-4 grid gap-4">
                {related.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="to-link text-[1.02rem]">
                      {item.label}
                    </Link>
                    <p className="mt-1 text-[0.95rem] leading-relaxed text-muted">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
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
