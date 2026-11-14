import type { Metadata } from "next";
import { snowFaqs } from "./faqs";

const url = "https://www.terreoak.ca/residential-snow-removal";
const title = "Residential Snow Removal Services Calgary | TERREOAK";
const description =
  "Reliable residential snow removal in Calgary. Keep your driveway and walkways clear and safe all winter long with TERREOAK's professional crews.";
const image = "https://www.terreoak.ca/images/snow-removal/hero-poster.jpg";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    url,
    siteName: "TERREOAK Landscaping & Snow",
    images: [{ url: image, width: 1280, height: 720 }],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${url}#service`,
      name: "Residential Snow Removal",
      serviceType: "Residential snow removal",
      description,
      url,
      provider: { "@id": "https://www.terreoak.ca/#localbusiness" },
      areaServed: { "@type": "City", name: "Calgary" },
    },
    {
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: snowFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ],
};

export default function SnowRemovalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      {children}
    </>
  );
}
