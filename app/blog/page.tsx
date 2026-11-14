import Image from "next/image";
import Link from "next/link";
import JsonLd from "../components/JsonLd";
import { Band, Button, PageHero } from "../components/ds";
import { absoluteUrl, breadcrumbLd, pageMeta } from "../lib/seo";
import { site } from "../lib/site";
import { posts } from "./posts";

const path = "/blog";
const description =
  "Read the TERREOAK blog for expert landscaping tips, snow removal advice, and seasonal property maintenance guides for Calgary homeowners.";

export const metadata = pageMeta({
  title: "Calgary Landscaping & Snow Removal Tips | TERREOAK Blog",
  description,
  path,
  image: "/images/blog-hero.jpg",
});

const pillars = [
  { title: "Seasonal tips", desc: "Stay ahead of Calgary’s weather with timely property care advice." },
  { title: "Professional advice", desc: "Industry insights on materials, base prep, and maintenance." },
  { title: "Local focus", desc: "Everything we share is tailored to the Calgary environment." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Blog",
      "@id": `${site.url}${path}#blog`,
      url: `${site.url}${path}`,
      name: "The TERREOAK Blog",
      description,
      publisher: { "@id": `${site.url}/#organization` },
      blogPost: posts.map((post) => ({ "@type": "BlogPosting", headline: post.title, url: absoluteUrl(post.path), image: absoluteUrl(post.hero) })),
    },
    { "@id": `${site.url}${path}#breadcrumb`, ...breadcrumbLd([{ name: "Home", path: "/" }, { name: "Blog", path }]) },
  ],
};

export default function BlogPage() {
  return (
    <main className="to-pavement to-flow overflow-x-clip">
      <JsonLd data={jsonLd} />

      <PageHero
        title={
          <>
            The TERREOAK blog. <span className="block">Expert advice for Calgary yards.</span>
          </>
        }
        image="/Landscape web page pics/Finished-hardscape-project.JPG"
        imageAlt="Finished TERREOAK hardscape project in Calgary"
        footer={
          <dl className="grid gap-x-10 gap-y-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <div key={pillar.title}>
                <dt className="text-[1.15rem] font-bold text-fg">{pillar.title}</dt>
                <dd className="mt-2 text-[1.05rem] leading-relaxed text-white/80">{pillar.desc}</dd>
              </div>
            ))}
          </dl>
        }
      >
        <Button href="#latest-articles">Read the latest</Button>
      </PageHero>

      <Band id="latest-articles">
        <h2 className="to-display to-h2">Latest articles</h2>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.path} href={post.path} className="to-card to-card-lift to-focus group flex flex-col overflow-hidden">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.hero}
                  alt={post.heroAlt}
                  fill
                  sizes="(min-width: 1280px) 400px, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col p-7 md:p-8">
                <p className="to-sub">{post.category}</p>
                <h3 className="to-display to-h3 mt-3">{post.title}</h3>
                <p className="mt-3 text-[1.05rem] leading-relaxed text-muted">{post.excerpt}</p>
                <span className="mt-auto pt-6 text-[1.02rem] font-semibold text-accent">Read the article</span>
              </div>
            </Link>
          ))}
        </div>
      </Band>
    </main>
  );
}
