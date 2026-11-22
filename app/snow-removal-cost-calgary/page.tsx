import Link from "next/link";
import JsonLd from "../components/JsonLd";
import StickyCta from "../components/StickyCta";
import { Band, Button, PageHero, Tick } from "../components/ds";
import { FaqBand, FormBand, ReviewsBand } from "../components/sections";
import { breadcrumbLd, faqLd, pageMeta } from "../lib/seo";
import { site } from "../lib/site";
import { addOns, jobberForm, passes, reviews, snowPricing } from "../residential-snow-removal/content";

const path = "/snow-removal-cost-calgary";
const description = `Residential snow removal in Calgary costs from ${snowPricing.from} per month with TERREOAK. See what’s included, what changes the price, and how to save 10%.`;

export const metadata = pageMeta({
  title: `Snow Removal Cost Calgary: From ${snowPricing.from}/Month | TERREOAK`,
  description,
  path,
  image: "/og/residential-snow-removal.jpg",
});

const seasonPass = passes[0];

const priceFactors = [
  { title: "The size of your driveway", desc: "A single driveway takes less time than a triple or an extra-long one, so the rate reflects the area we’re clearing." },
  { title: "How much sidewalk you have", desc: "Corner lots carry more public sidewalk than a mid-block home, and the city expects all of it cleared." },
  { title: "Add-ons you choose", desc: "Ice melt and windrow clearing aren’t part of the standard pass. Add them if you want them, skip them if you don’t." },
  { title: "How you pay", desc: seasonPass.payment },
];

const compare = [
  {
    title: "Flat monthly season pass",
    points: ["The same price every month, however much it snows", "No invoice after every storm", "A guaranteed visit every 24 hours during a snowfall", "Easy to budget for the whole winter"],
    note: "This is how TERREOAK prices snow removal.",
    highlight: true,
  },
  {
    title: "Pay-per-visit pricing",
    points: ["Cheaper in a winter with very little snow", "The bill climbs with every snowfall", "A heavy winter can cost far more than a flat rate", "You’re often competing for a spot during big storms"],
    note: "Common with one-off and on-call operators.",
    highlight: false,
  },
];

const faqs = [
  {
    q: "How much does snow removal cost in Calgary?",
    a: `With TERREOAK, residential snow removal starts at ${snowPricing.from} per month for a season pass. That covers your driveway and front sidewalk, cleared whenever 1 cm of snow falls, with no per-visit fees. The exact rate depends on the size of your property.`,
  },
  {
    q: "What is included in the monthly price?",
    a: `Driveway and front sidewalk clearing, service at 1 cm of accumulation, one visit every 24 hours during a snowfall, a dispatch alert before each visit, a time-stamped photo log after each visit, and a driveway marker picket.`,
  },
  {
    q: "Is it cheaper to pay per visit or per month?",
    a: "It depends on the winter. Per-visit pricing can cost less when there’s very little snow, but the bill rises with every snowfall. A flat monthly rate costs the same in a heavy winter as a light one, which makes it predictable.",
  },
  {
    q: "Are there any extra fees?",
    a: "There are no per-visit fees on a season pass. Ice melt is an optional monthly add-on, and windrow clearing can be added through a custom pass. Neither is charged unless you ask for it.",
  },
  {
    q: "Can I save money by paying upfront?",
    a: "Yes. Pay for the season in full when you sign up and you save 10%. Otherwise the season is split into 5 monthly auto-payments.",
  },
  {
    q: "How much is a snowbird or vacation pass?",
    a: "Short-term passes run from 1 to 8 weeks and are priced by the length of the pass and your property. Request a quote and we’ll confirm the price for your dates.",
  },
  {
    q: "Do you offer one-time snow removal?",
    a: "No. We run route-based season passes, which is what lets us guarantee a visit every 24 hours. One-off calls during a storm would break that for everyone on the route.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${site.url}${path}#service`,
      name: "Residential Snow Removal Season Pass",
      serviceType: "Residential snow removal",
      description,
      url: `${site.url}${path}`,
      provider: { "@id": `${site.url}/#localbusiness` },
      areaServed: { "@type": "City", name: "Calgary" },
      offers: {
        "@type": "Offer",
        priceCurrency: "CAD",
        price: snowPricing.amount,
        priceSpecification: { "@type": "UnitPriceSpecification", price: snowPricing.amount, priceCurrency: "CAD", unitText: "month", description: "Starting monthly rate for a residential season pass" },
        url: `${site.url}/residential-snow-removal#seasonal-form`,
      },
    },
    {
      "@id": `${site.url}${path}#breadcrumb`,
      ...breadcrumbLd([
        { name: "Home", path: "/" },
        { name: "Residential Snow Removal", path: "/residential-snow-removal" },
        { name: "Snow Removal Cost", path },
      ]),
    },
    { "@id": `${site.url}${path}#faq`, ...faqLd(faqs) },
  ],
};

export default function Page() {
  return (
    <main className="to-pavement to-flow to-snowcapped overflow-x-clip">
      <JsonLd data={jsonLd} />

      <PageHero
        title="What snow removal costs in Calgary."
        lead={`Season passes from ${snowPricing.from} per month. One flat rate for your driveway and front sidewalk, with no per-visit fees and no surprises after a big storm.`}
        video="/videos/calgary-snow-removal-drone.mp4"
        poster="/images/snow-removal/hero-poster.jpg"
      >
        <Button href="#seasonal-form">Get my exact price</Button>
        <Button href="/residential-snow-removal" variant="quiet" className="bg-white/5 backdrop-blur-sm">
          See the full service
        </Button>
      </PageHero>

      {/* THE PRICE */}
      <Band id="price">
        <div className="to-card to-snow-v1 grid items-center gap-8 p-6 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-12 md:p-12">
          <div>
            <p className="to-sub">{seasonPass.name}</p>
            <p className="to-display mt-3 text-[2.6rem] leading-none text-accent md:text-[3.4rem]">{snowPricing.from}+</p>
            <p className="mt-3 text-[1.1rem] text-muted">per month, for the season</p>
            <div className="mt-7">
              <Button href="#seasonal-form">Get my exact price</Button>
            </div>
          </div>
          <div>
            <h2 className="to-display to-h3">What’s included</h2>
            <ul className="mt-5 grid gap-3 text-[1.08rem] text-fg sm:grid-cols-2">
              {seasonPass.includes.map((item) => (
                <li key={item} className="flex gap-3">
                  <Tick />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[1.05rem] leading-relaxed text-muted">{seasonPass.payment}</p>
          </div>
        </div>
      </Band>

      {/* WHAT CHANGES THE PRICE */}
      <Band>
        <div className="grid items-end gap-x-20 gap-y-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <h2 className="to-display to-h2">What changes your price</h2>
          <p className="to-body">
            {snowPricing.from} is where season passes start. Your own rate is set once we know the property, and it stays the same every month for the whole winter, whether it snows twice or twenty times.
          </p>
        </div>
        <div className="mt-8 grid gap-3 md:mt-12 md:grid-cols-2 md:gap-5">
          {priceFactors.map((factor) => (
            <article key={factor.title} className="to-card p-5 md:p-8">
              <h3 className="to-display to-h3">{factor.title}</h3>
              <p className="mt-3 text-[1.05rem] leading-relaxed text-muted">{factor.desc}</p>
            </article>
          ))}
        </div>
      </Band>

      {/* FLAT RATE VS PER VISIT */}
      <Band>
        <h2 className="to-display to-h2">Flat monthly rate or pay per visit?</h2>
        <p className="to-body mt-5">Most Calgary snow removal is priced one of two ways. Here’s how they compare.</p>
        <div className="mt-8 grid gap-3 md:mt-12 md:grid-cols-2 md:gap-5">
          {compare.map((option) => (
            <article key={option.title} className={`to-card p-6 md:p-10 ${option.highlight ? "ring-1 ring-brand/45" : ""}`}>
              <h3 className="to-display to-h3">{option.title}</h3>
              <ul className="mt-5 grid gap-3 text-[1.08rem] text-fg">
                {option.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <Tick />
                    {point}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[1.02rem] text-muted">{option.note}</p>
            </article>
          ))}
        </div>
      </Band>

      {/* ADD-ONS + OTHER PASSES */}
      <Band>
        <h2 className="to-display to-h2">Add-ons and short-term passes</h2>
        <div className="mt-8 grid gap-3 md:mt-12 md:gap-5 lg:grid-cols-3">
          {addOns.map((addOn) => (
            <article key={addOn.name} className="to-card p-5 md:p-8">
              <p className="to-sub">Add-on</p>
              <h3 className="to-display to-h3 mt-3">{addOn.name}</h3>
              <p className="mt-3 text-[1.05rem] leading-relaxed text-muted">{addOn.desc}</p>
            </article>
          ))}
          <article className="to-card p-5 md:p-8">
            <p className="to-sub">{passes[1].term}</p>
            <h3 className="to-display to-h3 mt-3">{passes[1].name}</h3>
            <p className="mt-3 text-[1.05rem] leading-relaxed text-muted">{passes[1].summary}</p>
            <Link href="/snow-removal/snowbird-vacation-pass" className="to-link mt-5 inline-block text-[1.05rem]">
              About the snowbird pass
            </Link>
          </article>
        </div>
      </Band>

      {/* GUARANTEES */}
      <Band>
        <div className="grid gap-3 md:grid-cols-2 md:gap-5">
          <article className="to-card p-6 md:p-10">
            <h2 className="to-display to-h3">Once every 24 hours guarantee</h2>
            <p className="mt-4 text-[1.08rem] leading-relaxed text-muted">
              We guarantee to service your property once every 24 hours during continuous snowfall, and within 24 hours of the snowfall ending. If we miss that window for any reason, we send a crew back at no charge.
            </p>
          </article>
          <article className="to-card p-6 md:p-10">
            <h2 className="to-display to-h3">No bill that grows with the snow</h2>
            <p className="mt-4 text-[1.08rem] leading-relaxed text-muted">
              Your rate is agreed before the season starts. A winter with twice the snow costs you exactly the same, and you never get an invoice after a storm.
            </p>
          </article>
        </div>
      </Band>

      <ReviewsBand title="What our snow clients say" reviews={reviews} />

      <FormBand
        id="seasonal-form"
        title="Get your exact price"
        lead="Tell us your address and we’ll confirm your monthly rate and your spot on the route. We respond the same day."
        form={jobberForm}
      >
        <p className="mt-6 text-[1.08rem] text-[#50565b]">
          Prefer to talk? Call{" "}
          <a href={site.phoneHref} className="font-semibold text-[#005148] underline underline-offset-4">
            {site.phoneDisplay}
          </a>
          .
        </p>
      </FormBand>

      <FaqBand title="Snow removal pricing FAQs" faqs={faqs} />

      <StickyCta targetId="seasonal-form" label="Get my exact price" />
    </main>
  );
}
