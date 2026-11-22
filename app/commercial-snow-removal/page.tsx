import Image from "next/image";
import Link from "next/link";
import JobberLeadForm from "../components/JobberLeadForm";
import JsonLd from "../components/JsonLd";
import { SnowBank, Snowman } from "../components/SnowDecor";
import StickyCta from "../components/StickyCta";
import { Band, Button, FaqList, PageHero, Tick } from "../components/ds";
import { audiences, jobberForm, processSteps } from "../commercial-grounds-maintenance/content";
import { breadcrumbLd, faqLd, pageMeta } from "../lib/seo";
import { site } from "../lib/site";
import { propertyManagerGuides } from "../blog/posts";
import { faqs, secondPass, snowPoints } from "./content";

// The builder audience on the commercial page is about grading and sod, so it is left out here.
const snowAudiences = audiences.slice(0, 2);

const path = "/commercial-snow-removal";
const description =
  "Commercial snow removal in Calgary for condos, HOAs and business parks: parking lot plowing, sidewalk clearing, ice control and time-stamped visit logs.";

export const metadata = pageMeta({
  title: "Commercial Snow Removal Calgary | TERREOAK",
  description,
  path,
  image: "/blog-pics/commercial-snow-removal-calgary-picket.jpg",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${site.url}${path}#service`,
      name: "Commercial Snow Removal",
      serviceType: "Commercial snow removal and ice control",
      description,
      url: `${site.url}${path}`,
      provider: { "@id": `${site.url}/#localbusiness` },
      areaServed: { "@type": "City", name: "Calgary" },
      audience: snowAudiences.map((a) => ({ "@type": "Audience", audienceType: a.title })),
    },
    {
      "@id": `${site.url}${path}#breadcrumb`,
      ...breadcrumbLd([
        { name: "Home", path: "/" },
        { name: "Commercial Grounds Maintenance", path: "/commercial-grounds-maintenance" },
        { name: "Commercial Snow Removal", path },
      ]),
    },
    { "@id": `${site.url}${path}#faq`, ...faqLd(faqs) },
  ],
};

export default function CommercialSnowRemovalPage() {
  return (
    <main className="to-pavement to-flow to-snowcapped overflow-x-clip">
      <JsonLd data={jsonLd} />

      <PageHero
        title="Commercial snow removal in Calgary."
        lead="Parking lot plowing, sidewalk clearing and ice control for condo corporations, HOA communities and business parks, with every visit documented."
        image="/blog-pics/commercial-snow-removal-calgary-picket.jpg"
        imageAlt="TERREOAK snow picket marking the entrance to a commercial parking lot in Calgary"
        // Leaves room at the bottom of the hero for the snow bank that overlaps it.
        footer={<div aria-hidden="true" className="h-2 md:h-4" />}
      >
        <Button href="#commercial-snow-form">Request a proposal</Button>
        <Button href="/commercial-grounds-maintenance" variant="quiet" className="bg-white/5 backdrop-blur-sm">
          All commercial services
        </Button>
      </PageHero>
      {/* Snow bank across the bottom of the hero, as on the residential snow page. */}
      <div className="relative z-[1] -mt-[64px] md:-mt-[110px]">
        <SnowBank />
      </div>

      {/* INTRO */}
      <Band>
        <div className="grid gap-x-20 gap-y-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <div>
            <h2 className="to-display to-h2">Keep your site open, and keep the paper trail</h2>
            <figure className="relative mt-8 aspect-[4/3] overflow-hidden rounded-[36px] lg:aspect-[4/5]">
              <Image src="/photos/snow-storm-truck.jpg" alt="TERREOAK truck loaded with snow blowers in a commercial lot during a heavy Calgary snowfall" fill sizes="(min-width: 1024px) 480px, 100vw" className="object-cover" />
            </figure>
          </div>
          <div className="grid content-start gap-5">
            <p className="to-body">
              Winter is where a commercial property carries the most risk. A lot that isn’t cleared by opening, or a sidewalk that refreezes after a Chinook, is a liability problem as much as an access problem.
            </p>
            <p className="to-body">
              Our commercial snow contracts are built for both: crews dispatched proactively so your site stays open, and a time-stamped record of every visit so you have the documentation if anyone ever asks.
            </p>
            <p className="to-body">
              Snow removal is one part of our{" "}
              <Link href="/commercial-grounds-maintenance" className="to-link">
                commercial grounds maintenance
              </Link>{" "}
              service. Many clients have us look after the property year-round under a single contract.
            </p>
          </div>
        </div>
      </Band>

      {/* WHAT'S COVERED */}
      <Band>
        <h2 className="to-display to-h2">What our commercial snow contracts cover</h2>
        <div className="mt-8 grid gap-3 md:mt-12 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {snowPoints.map((point) => (
            <article key={point.title} className="to-card to-card-lift p-5 md:p-8">
              <h3 className="to-display to-h3">{point.title}</h3>
              <p className="mt-3 text-[1.05rem] leading-relaxed text-muted">{point.desc}</p>
            </article>
          ))}
        </div>
        <div id="second-pass" className="to-card to-snow-v2 mt-3 grid items-center gap-6 p-5 md:mt-5 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] md:gap-12 md:p-10">
          <div>
            <p className="to-sub">Optional add-on</p>
            <h3 className="to-display to-h3 mt-3">{secondPass.title}</h3>
            <p className="mt-4 text-[1.08rem] leading-relaxed text-muted">{secondPass.text}</p>
          </div>
          <ul className="grid gap-3 text-[1.08rem] font-medium text-fg">
            {secondPass.points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <Tick />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </Band>

      {/* WHO WE SERVE */}
      <Band>
        <h2 className="to-display to-h2">Who we clear snow for</h2>
        {/* Extra room above the cards on smaller screens so the snowman doesn't touch the heading. */}
        <div className="mt-24 grid gap-3 md:gap-5 lg:mt-12 lg:grid-cols-2">
          {snowAudiences.map((audience, i) => (
            <article key={audience.title} className="to-card to-snow-v1 p-5 md:p-8">
              {/* One snowman: on the first card when the cards are stacked, on the right-hand card on wide screens. */}
              <Snowman className={i === 0 ? "right-[9%] md:right-[12%] lg:hidden" : "right-[12%] max-lg:hidden"} />
              <h3 className="to-display to-h3">{audience.title}</h3>
              <p className="mt-3 text-[1.05rem] leading-relaxed text-muted">{audience.desc}</p>
            </article>
          ))}
        </div>
      </Band>

      {/* PROCESS */}
      <Band>
        <h2 className="to-display to-h2 max-w-[22ch]">How a commercial snow contract runs</h2>
        <ol className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-12 md:gap-5 lg:grid-cols-5">
          {processSteps.map((step, i) => (
            <li key={step.title} className="to-card p-5 md:p-7">
              <span className="to-icon to-display text-2xl">{i + 1}</span>
              <h3 className="mt-5 text-[1.2rem] font-bold leading-tight text-fg">{step.title}</h3>
              <p className="mt-3 text-[1.02rem] leading-relaxed text-muted">{step.desc}</p>
            </li>
          ))}
        </ol>
      </Band>

      {/* PROPOSAL FORM */}
      <Band id="commercial-snow-form" surface="snow">
        <div className="grid gap-x-20 gap-y-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <div>
            <h2 className="to-display to-h2">Request a snow removal proposal</h2>
            <p className="to-body mt-6">Fill out the form to request a site walkthrough and a professional bid for your property.</p>
            <ul className="mt-8 grid gap-3 text-[1.1rem] font-medium text-fg">
              {["$5M liability coverage", "WCB Alberta in good standing", "Time-stamped photo log after every visit"].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <Tick />
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-[1.08rem] text-[#50565b]">
              Need summer grounds care as well?{" "}
              <Link href="/commercial-grounds-maintenance" className="font-semibold text-[#005148] underline underline-offset-4">
                See our commercial grounds maintenance
              </Link>
              .
            </p>
          </div>
          <div className="rounded-[28px] bg-white p-4 shadow-[0_30px_60px_-40px_rgba(0,0,0,0.35)] md:p-7">
            <JobberLeadForm clienthubId={jobberForm.clienthubId} formUrl={jobberForm.formUrl} />
          </div>
        </div>
      </Band>

      {/* FAQ */}
      <Band>
        <div className="grid gap-x-20 gap-y-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]">
          <h2 className="to-display to-h2">Commercial snow removal FAQs</h2>
          <FaqList faqs={faqs} />
        </div>
      </Band>

      {/* GUIDES FOR PROPERTY MANAGERS */}
      <Band id="guides">
        <p className="to-sub">Resources</p>
        <h2 className="to-display to-h2 mt-3">Guides for property managers</h2>
        <p className="to-body mt-5">Practical reading for anyone responsible for a commercial property through a Calgary winter. Free to read, no sign-up.</p>
        <div className="mt-8 grid gap-3 md:mt-12 md:grid-cols-2 md:gap-5 lg:grid-cols-4">
          {propertyManagerGuides.map((guide) => (
            <Link key={guide.path} href={guide.path} className="to-card to-card-lift to-focus group flex flex-col overflow-hidden">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={guide.hero} alt={guide.heroAlt} fill sizes="(min-width: 1024px) 300px, (min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              </div>
              <div className="flex flex-1 flex-col p-5 md:p-6">
                <h3 className="text-[1.15rem] font-bold leading-snug text-fg">{guide.title}</h3>
                <p className="mt-3 text-[1rem] leading-relaxed text-muted">{guide.excerpt}</p>
                <span className="mt-auto pt-5 text-[1rem] font-semibold text-accent">Read the guide</span>
              </div>
            </Link>
          ))}
        </div>
      </Band>

      <StickyCta targetId="commercial-snow-form" label="Request a proposal" />
    </main>
  );
}
