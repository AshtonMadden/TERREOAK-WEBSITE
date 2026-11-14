import JsonLd from "../components/JsonLd";
import { Band, BlogCta, Button, PageHero } from "../components/ds";
import { FaqBand, StepsBand, TrustPoints } from "../components/sections";
import { steps } from "../landscape-installs/content";
import { breadcrumbLd, faqLd, pageMeta } from "../lib/seo";
import { site } from "../lib/site";

const path = "/our-process";
const description =
  "Learn about TERREOAK's landscaping process. From initial consultation to final installation, see how we deliver exceptional results in Calgary.";

export const metadata = pageMeta({
  title: "Our Landscaping Process | Calgary Design & Build | TERREOAK",
  description,
  path,
  image: "/Landscape web page pics/lawn-relevel-calgary.JPG",
});

const faqs = [
  {
    q: "How long does the initial consultation take?",
    a: "Our site walks typically take 30 to 45 minutes. We’ll measure the space, discuss your goals, and answer any questions you have about materials, budget, and timeline.",
  },
  {
    q: "Do you offer design-only services?",
    a: "Yes! While most of our clients hire us for the full design-and-build, we do offer 3D landscape design and blueprinting as a standalone service if you prefer to DIY or use another contractor.",
  },
  {
    q: "How does the payment schedule work?",
    a: "We require a deposit to secure your spot on our schedule and purchase initial materials. The remaining balance is broken down into milestone payments, with the final payment only due upon completion of the final walkthrough.",
  },
  {
    q: "What does your workmanship warranty cover?",
    a: "TERREOAK provides a comprehensive one-year workmanship warranty. If any hardscape settles or any element fails due to improper installation, we will come back and fix it at no cost to you.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      "@id": `${site.url}${path}#process`,
      name: "How a TERREOAK landscaping project works",
      description,
      step: steps.map((step, i) => ({ "@type": "HowToStep", position: i + 1, name: step.title, text: step.desc })),
    },
    {
      "@id": `${site.url}${path}#breadcrumb`,
      ...breadcrumbLd([
        { name: "Home", path: "/" },
        { name: "Landscaping", path: "/landscape-installs" },
        { name: "Our Process", path },
      ]),
    },
    { "@id": `${site.url}${path}#faq`, ...faqLd(faqs) },
  ],
};

export default function OurProcessPage() {
  return (
    <main className="to-pavement to-flow overflow-x-clip">
      <JsonLd data={jsonLd} />

      <PageHero
        title={
          <>
            Our Calgary landscaping process. <span className="block">How we build it.</span>
          </>
        }
        lead="Getting your yard done right starts long before we pick up a shovel. We believe in clear communication, meticulous planning, and zero surprises. From the initial consultation to the final walkthrough, discover how TERREOAK guarantees a seamless landscape construction experience in Calgary."
        image="/Landscape web page pics/lawn-relevel-calgary.JPG"
        imageAlt="Lawn relevelling project by TERREOAK in Calgary"
        footer={<TrustPoints />}
      >
        <Button href="/landscape-installs#landscape-form">Request a proposal</Button>
        <Button href="/projects" variant="quiet" className="bg-white/5 backdrop-blur-sm">
          See recent projects
        </Button>
      </PageHero>

      <StepsBand title="How we work" steps={steps} />

      <FaqBand title="Process FAQ" faqs={faqs} />

      <Band>
        <div className="to-card flex flex-col gap-8 p-8 md:flex-row md:items-center md:justify-between md:p-12">
          <div>
            <h2 className="to-display to-h2">Ready to bring your yard to life?</h2>
            <p className="to-body mt-4">Book a consultation today. Our landscape crews fill up fast for the Calgary spring and summer season.</p>
          </div>
          <div className="shrink-0">
            <Button href="/landscape-installs#landscape-form">Request an estimate</Button>
          </div>
        </div>
      </Band>

      <BlogCta />
    </main>
  );
}
