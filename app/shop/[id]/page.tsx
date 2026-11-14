import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "../../components/JsonLd";
import { Button, Container, Tick } from "../../components/ds";
import { absoluteUrl, breadcrumbLd, pageMeta } from "../../lib/seo";
import { site } from "../../lib/site";
import { products } from "../data";

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

// Only the products listed in data.ts exist; anything else is a real 404.
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) return {};
  return pageMeta({
    title: `${product.title} | TERREOAK Shop`,
    description: product.description.slice(0, 155),
    path: `/shop/${product.id}`,
    image: product.image,
  });
}

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) notFound();

  const path = `/shop/${product.id}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": `${site.url}${path}#product`,
        name: product.title,
        description: product.description,
        image: absoluteUrl(product.image),
        offers: {
          "@type": "Offer",
          price: product.price.toFixed(2),
          priceCurrency: "CAD",
          itemCondition: "https://schema.org/UsedCondition",
          availability: "https://schema.org/InStock",
          url: `${site.url}${path}`,
          seller: { "@id": `${site.url}/#organization` },
        },
      },
      {
        "@id": `${site.url}${path}#breadcrumb`,
        ...breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Shop", path: "/shop" },
          { name: product.title, path },
        ]),
      },
    ],
  };
  const buyHref = `mailto:${site.email}?subject=${encodeURIComponent(`Shop enquiry: ${product.title}`)}`;

  return (
    <main className="to-pavement to-flow overflow-x-clip pb-20 pt-36 md:pb-28 md:pt-44">
      <JsonLd data={jsonLd} />
      <Container>
        <Link href="/shop" className="to-link text-[1.05rem]">
          Back to the shop
        </Link>
        <div className="mt-8 grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-square overflow-hidden rounded-[36px] bg-white">
            <Image src={product.image} alt={product.title} fill priority sizes="(min-width: 1280px) 600px, 100vw" className="object-cover" />
          </div>
          <div>
            <h1 className="to-display to-h2">{product.title}</h1>
            <p className="to-display mt-4 text-[2rem] text-accent">${product.price.toFixed(2)} CAD</p>
            <p className="to-body mt-6">{product.description}</p>
            <h2 className="mt-8 text-[1.2rem] font-bold text-fg">Features</h2>
            <ul className="mt-4 grid gap-3 text-[1.08rem] text-fg">
              {product.features.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <Tick />
                  {feature}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-[1.05rem] text-muted">Shipping notice: we currently only offer shipping within Canada.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={buyHref}>Email us to buy</Button>
              <Button href={site.phoneHref} variant="quiet">
                Call {site.phoneDisplay}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
