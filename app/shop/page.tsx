import Image from "next/image";
import Link from "next/link";
import JsonLd from "../components/JsonLd";
import { Container } from "../components/ds";
import { absoluteUrl, breadcrumbLd, pageMeta } from "../lib/seo";
import { site } from "../lib/site";
import { products } from "./data";

const path = "/shop";
const description =
  "Shop well-maintained used landscaping and snow removal equipment from the TERREOAK crew in Calgary. Local pickup or shipping within Canada.";

export const metadata = pageMeta({ title: "Used Equipment & Gear Shop | TERREOAK Calgary", description, path, image: "/images/shop-hero.png" });

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ItemList",
      "@id": `${site.url}${path}#list`,
      itemListElement: products.map((product, i) => ({ "@type": "ListItem", position: i + 1, name: product.title, url: absoluteUrl(`/shop/${product.id}`) })),
    },
    { "@id": `${site.url}${path}#breadcrumb`, ...breadcrumbLd([{ name: "Home", path: "/" }, { name: "Shop", path }]) },
  ],
};

export default function ShopPage() {
  return (
    <main className="to-pavement to-flow overflow-x-clip pb-20 pt-36 md:pb-28 md:pt-44">
      <JsonLd data={jsonLd} />
      <Container>
        <h1 className="to-display to-h1 max-w-[16ch]">TERREOAK shop.</h1>
        <p className="to-body mt-8">Surplus and used professional-grade landscaping and maintenance equipment from our fleet.</p>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link key={product.id} href={`/shop/${product.id}`} className="to-card to-card-lift to-focus group flex flex-col overflow-hidden">
              <div className="relative aspect-square overflow-hidden bg-white">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(min-width: 1280px) 400px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h2 className="to-display to-h3">{product.title}</h2>
                <p className="mt-3 text-[1.3rem] font-bold text-accent">${product.price.toFixed(2)} CAD</p>
                <span className="mt-auto pt-6 text-[1.02rem] font-semibold text-accent">View item</span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </main>
  );
}
