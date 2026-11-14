import Image from "next/image";
import JobberLeadForm from "../components/JobberLeadForm";
import JsonLd from "../components/JsonLd";
import StickyCta from "../components/StickyCta";
import { Band, BlogCta, Button, FaqList, FounderQuote, PageHero, Tick } from "../components/ds";
import { breadcrumbLd, faqLd, pageMeta } from "../lib/seo";
import { site } from "../lib/site";
import { audiences, faqs, jobberForm, processSteps, reasons, services } from "./content";

const path = "/commercial-grounds-maintenance";
const description =
  "Commercial grounds maintenance and snow removal in Calgary for condos, HOAs, business parks and builders. Time-stamped photo logs after every visit.";

export const metadata = pageMeta({
  title: "Commercial Grounds Maintenance Calgary | TERREOAK",
  description,
  path,
  image: "/commercial-lawn-mowing.JPG",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${site.url}${path}#service`,
      name: "Commercial Grounds Maintenance",
      serviceType: "Commercial grounds maintenance and snow removal",
      description,
      url: `${site.url}${path}`,
      provider: { "@id": `${site.url}/#localbusiness` },
      areaServed: { "@type": "City", name: "Calgary" },
      audience: audiences.map((a) => ({ "@type": "Audience", audienceType: a.title })),
    },
    { "@id": `${site.url}${path}#breadcrumb`, ...breadcrumbLd([{ name: "Home", path: "/" }, { name: "Commercial Grounds Maintenance", path }]) },
    { "@id": `${site.url}${path}#faq`, ...faqLd(faqs) },
  ],
};

const audienceIcons: React.ReactNode[] = [
  <path key="condo" d="M4 21V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16M14 9h5a1 1 0 0 1 1 1v11M3 21h18M8 8h2M8 12h2M8 16h2" />,
  <path key="industrial" d="M3 21V10l6 4V10l6 4V5h4a1 1 0 0 1 1 1v15H3Zm4-3h2m4 0h2" />,
  <path key="build" d="M3 21h18M5 21V9l7-5 7 5v12M10 21v-6h4v6" />,
];

export default function CommercialGroundsMaintenancePage() {
  return (
    <main className="to-pavement to-flow overflow-x-clip">
      <JsonLd data={jsonLd} />

      <PageHero
        title="Calgary commercial grounds maintenance."
        lead="Grounds maintenance and snow removal for condo corporations, HOA communities, industrial business parks, and new construction sites, with every visit documented."
        image="/commercial-lawn-mowing.JPG"
        imageAlt="TERREOAK crew mowing a commercial property in Calgary"
      >
        <Button href="#commercial-form">Request a proposal</Button>
        <Button href={site.clientPortalUrl} variant="quiet" className="bg-white/5 backdrop-blur-sm">
          Client portal login
        </Button>
      </PageHero>

      {/* INTRO */}
      <Band>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-20">
          <div>
            <h2 className="to-display to-h2">Commercial property maintenance Calgary</h2>
            <div className="mt-7 grid gap-5">
              <p className="to-body">
                TERREOAK is Calgary’s commercial grounds maintenance and snow removal contractor for condo corporations, HOA communities, industrial business parks, and new construction sites. We manage exterior property standards year-round, from spring cleanups and weekly grounds care to 24/7 snow and ice management, so property managers and site supervisors can focus on what matters.
              </p>
              <p className="to-body">
                Every service visit is logged with time-stamped photos and digital reports, giving you bulletproof documentation for board meetings, liability claims, and contractor audits.
              </p>
            </div>
            <div className="mt-8">
              <Button href="#commercial-form">Request a site walk-through</Button>
            </div>
          </div>
          <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-[36px] shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)]">
            <Image
              src="/images/commercial-standards-team.jpg"
              alt="TERREOAK commercial maintenance crew on site"
              fill
              sizes="(min-width: 1280px) 440px, 90vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="mt-14">
          <FounderQuote />
        </div>
      </Band>

      {/* WHY TERREOAK */}
      <Band>
        <h2 className="to-display to-h2 max-w-[20ch]">Why property managers choose TERREOAK</h2>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {reasons.map((reason) => (
            <article key={reason.title} className="to-card to-card-lift p-8">
              <h3 className="to-display to-h3">{reason.title}</h3>
              <p className="mt-4 text-[1.08rem] leading-relaxed text-muted">{reason.desc}</p>
            </article>
          ))}
        </div>
      </Band>

      {/* WHO WE SERVE */}
      <Band>
        <h2 className="to-display to-h2">Who we serve</h2>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {audiences.map((audience, i) => (
            <article key={audience.title} className="to-card to-card-lift p-8">
              <span className="to-icon">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {audienceIcons[i]}
                </svg>
              </span>
              <h3 className="to-display to-h3 mt-6">{audience.title}</h3>
              <p className="mt-3 text-[1.08rem] leading-relaxed text-muted">{audience.desc}</p>
            </article>
          ))}
        </div>
      </Band>

      {/* PROCESS */}
      <Band>
        <h2 className="to-display to-h2 max-w-[22ch]">Our dedicated commercial maintenance process</h2>
        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, i) => (
            <li key={step.title} className="to-card to-card-lift p-7">
              <span className="to-icon to-display text-2xl">{i + 1}</span>
              <h3 className="mt-6 text-[1.25rem] font-bold leading-tight text-fg">{step.title}</h3>
              <p className="mt-3 text-[1.02rem] leading-relaxed text-muted">{step.desc}</p>
            </li>
          ))}
        </ol>
      </Band>

      {/* SERVICES */}
      <Band>
        <h2 className="to-display to-h2">Comprehensive commercial services</h2>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="to-card flex flex-col p-8">
              <h3 className="to-display to-h3">{service.title}</h3>
              <ul className="mt-6 grid gap-3 text-[1.08rem] text-fg">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <Tick />
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <Button href="#commercial-form" variant="quiet">
                  Request a quote
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Band>

      {/* CLIENT PORTAL */}
      <Band>
        <div className="to-card flex flex-col gap-8 p-8 md:flex-row md:items-center md:justify-between md:p-12">
          <div>
            <h2 className="to-display to-h2">Access your client portal</h2>
            <p className="to-body mt-4">View your quotes, pay invoices, and manage your property services 24/7 through our secure Jobber portal.</p>
          </div>
          <div className="shrink-0">
            <Button href={site.clientPortalUrl}>Log in to the portal</Button>
          </div>
        </div>
      </Band>

      {/* PROPOSAL FORM */}
      <Band id="commercial-form" surface="snow">
        <div className="grid gap-x-20 gap-y-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <div>
            <h2 className="to-display to-h2">Secure your service proposal</h2>
            <p className="to-body mt-6">Fill out the form to request a site walkthrough and professional bid for your property.</p>
            <ul className="mt-8 grid gap-3 text-[1.1rem] font-medium text-fg">
              {["$5M liability coverage", "WCB Alberta in good standing", "Time-stamped photo log after every visit"].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <Tick />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[28px] bg-white p-4 shadow-[0_30px_60px_-40px_rgba(0,0,0,0.35)] md:p-7">
            <JobberLeadForm clienthubId={jobberForm.clienthubId} formUrl={jobberForm.formUrl} />
          </div>
        </div>
      </Band>

      {/* FAQ */}
      <Band>
        <div className="grid gap-x-20 gap-y-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]">
          <h2 className="to-display to-h2">Frequently asked questions</h2>
          <FaqList faqs={faqs} />
        </div>
      </Band>

      <BlogCta />

      <StickyCta targetId="commercial-form" label="Request a proposal" />
    </main>
  );
}
