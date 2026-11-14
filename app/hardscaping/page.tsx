import Image from "next/image";
import JsonLd from "../components/JsonLd";
import StickyCta from "../components/StickyCta";
import { Band, BlogCta, Button, FaqList, PageHero, Tick } from "../components/ds";
import { FormBand, InstagramBand, ProjectCards, ReviewsBand } from "../components/sections";
import { breadcrumbLd, faqLd, pageMeta } from "../lib/seo";
import { site } from "../lib/site";
import { faqs, instagramPosts, jobberForm, projects, reviews, services, steps } from "./content";

const path = "/hardscaping";
const description =
  "Premium hardscaping services in Calgary. We design and build stunning patios, retaining walls, and walkways using top-quality materials.";

export const metadata = pageMeta({
  title: "Custom Hardscaping & Patio Builders Calgary | TERREOAK",
  description,
  path,
  image: "/hardscaping/calgary-fire-pit-patio.jpg",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${site.url}${path}#service`,
      name: "Hardscaping",
      serviceType: "Patios, retaining walls, walkways and steps",
      description,
      url: `${site.url}${path}`,
      provider: { "@id": `${site.url}/#localbusiness` },
      areaServed: ["Calgary", "Okotoks", "Airdrie", "Cochrane", "Chestermere"].map((name) => ({ "@type": "City", name })),
    },
    {
      "@id": `${site.url}${path}#breadcrumb`,
      ...breadcrumbLd([
        { name: "Home", path: "/" },
        { name: "Landscaping", path: "/landscape-installs" },
        { name: "Hardscaping", path },
      ]),
    },
    { "@id": `${site.url}${path}#faq`, ...faqLd(faqs) },
  ],
};

const recentBuilds = [
  {
    src: "/hardscaping/calgary-fire-pit-patio.jpg",
    alt: "Aerial view of a curved paver patio with a round fire pit and boulder border in Calgary",
    label: "Fire pit patio",
  },
  {
    src: "/hardscaping/calgary-paver-patio.jpg",
    alt: "Two paver patios joined by a paver walkway and stepping stones, with new sod, in a Calgary backyard",
    label: "Paver patio and walkway",
  },
  {
    src: "/hardscaping/calgary-retaining-wall.jpg",
    alt: "Interlocking concrete block retaining wall with a cap, built by TERREOAK in Calgary",
    label: "Retaining wall",
  },
];

const trustPoints = ["8 years of experience", "Licensed & insured", "Professionally trained team"];

export default function HardscapingPage() {
  return (
    <main className="to-pavement to-flow overflow-x-clip">
      <JsonLd data={jsonLd} />

      <PageHero
        title={
          <>
            Calgary hardscapes <span className="block">built to last the north.</span>
          </>
        }
        lead="Patios, retaining walls, walkways, and steps installed with the base work that actually keeps things level after the ground freezes and thaws. Serving Calgary, Okotoks, Airdrie, Cochrane, and Chestermere."
        image="/hardscaping/calgary-fire-pit-patio.jpg"
        imageAlt="Aerial view of a curved paver patio with a round fire pit and boulder border, built by TERREOAK in Calgary"
        footer={
          <ul className="flex flex-col gap-x-10 gap-y-3 text-[1.1rem] font-medium text-fg sm:flex-row">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <Tick />
                {point}
              </li>
            ))}
          </ul>
        }
      >
        <Button href="#hardscape-form">Request a proposal</Button>
        <Button href="#what-we-build" variant="quiet" className="bg-white/5 backdrop-blur-sm">
          See what we build
        </Button>
      </PageHero>

      {/* WHAT IS HARDSCAPING */}
      <Band>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-20">
          <div>
            <h2 className="to-display to-h2">What is hardscaping?</h2>
            <div className="mt-7 grid gap-5">
              <p className="to-body">
                Hardscaping covers the permanent, non-living structures in your yard. Patios, retaining walls, walkways, steps, and borders. These are the pieces that give your outdoor space structure, function, and a finished look.
              </p>
              <p className="to-body">
                Done right, hardscaping adds real usable space to your property and holds its value for decades. Done wrong, it shifts, cracks, heaves, or falls apart within a few years because the base work was cut short.
              </p>
              <p className="to-body">
                In Calgary that happens a lot. Our freeze-thaw cycles are tough on anything installed without proper drainage and compaction underneath. We build to a standard that accounts for that from the start.
              </p>
            </div>
          </div>
          <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-[36px] shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)]">
            <Image
              src="/hardscaping/calgary-paver-patio.jpg"
              alt="Paver patios and walkway installed by TERREOAK in a Calgary backyard"
              fill
              sizes="(min-width: 1280px) 440px, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </Band>

      {/* WHAT WE BUILD */}
      <Band id="what-we-build">
        <h2 className="to-display to-h2">What we build</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="to-card to-card-lift p-8">
              <h3 className="to-display to-h3">{service.title}</h3>
              <p className="mt-4 text-[1.05rem] leading-relaxed text-muted">{service.desc}</p>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <Button href="#hardscape-form">Get a quote</Button>
        </div>
      </Band>

      {/* RECENT BUILDS */}
      <Band>
        <h2 className="to-display to-h2">Recent hardscape builds</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {recentBuilds.map((build) => (
            <figure key={build.src} className="to-card overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image src={build.src} alt={build.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
              </div>
              <figcaption className="p-6 text-[1.2rem] font-bold text-fg">{build.label}</figcaption>
            </figure>
          ))}
        </div>
      </Band>

      {/* FEATURED PROJECTS */}
      <Band>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="to-display to-h2">Featured projects</h2>
          <Button href="/projects" variant="quiet">
            View all projects
          </Button>
        </div>
        <div className="mt-12">
          <ProjectCards projects={projects} />
        </div>
      </Band>

      {/* BASE WORK */}
      <Band>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <figure>
            <div className="relative aspect-[3/2] overflow-hidden rounded-[36px] bg-white shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)]">
              <Image
                src="/Landscape web page pics/how-drainage-works.jpg"
                alt="Diagram of how proper drainage and a compacted base work under a hardscape"
                fill
                sizes="(min-width: 1280px) 600px, 100vw"
                className="object-cover"
              />
            </div>
          </figure>
          <div>
            <h2 className="to-display to-h2">Why the base work matters here</h2>
            <div className="mt-7 grid gap-5">
              <p className="to-body">
                Calgary’s winters are hard on hardscaping. The ground freezes and thaws multiple times through the season. When moisture gets trapped under a patio or behind a retaining wall and then freezes, it expands. That expansion heaves pavers, cracks surfaces, and shifts walls.
              </p>
              <p className="to-body">
                The fix is not better materials at the top. It is proper drainage and a solid compacted base underneath. We excavate to the right depth, use the right gravel, and make sure water has somewhere to go before anything goes down on top.
              </p>
              <p className="to-body">
                That is the difference between a patio that looks the same in year five as it did when we finished it, and one that you are calling someone to fix after two winters.
              </p>
              <p className="to-body">We serve Calgary and surrounding communities including Okotoks, Airdrie, Cochrane, and Chestermere.</p>
            </div>
          </div>
        </div>
      </Band>

      {/* HOW IT WORKS */}
      <Band>
        <h2 className="to-display to-h2">How it works</h2>
        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li key={step.title} className="to-card to-card-lift p-8">
              <span className="to-icon to-display text-2xl">{step.step}</span>
              <h3 className="to-display to-h3 mt-6">{step.title}</h3>
              <p className="mt-3 text-[1.05rem] leading-relaxed text-muted">{step.desc}</p>
            </li>
          ))}
        </ol>
      </Band>

      {/* TEAM */}
      <Band>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[36px] shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)]">
            <Image src="/images/about-mission-team.jpg" alt="The TERREOAK landscaping team" fill sizes="(min-width: 1280px) 600px, 100vw" className="object-cover" />
          </div>
          <div>
            <h2 className="to-display to-h2">Meet the team</h2>
            <p className="to-sub mt-4">Locally owned & operated</p>
            <div className="mt-6 grid gap-5">
              <p className="to-body">
                At TERREOAK, we believe great work starts with a strong work ethic, attention to detail, and a commitment to doing things the right way, every time.
              </p>
              <p className="to-body">
                From building premium landscapes to maintaining properties year-round, our goal is to create results our customers can rely on season after season. We aren’t just here to complete jobs; we’re here to build lasting relationships, improve the properties we work on, and continue growing a local Calgary company you can trust.
              </p>
              <p className="text-[1.1rem] font-semibold text-fg">Ashton Madden, Founder & Director</p>
            </div>
          </div>
        </div>
      </Band>

      <ReviewsBand title="What Calgary homeowners are saying" reviews={reviews} />

      <FormBand id="hardscape-form" title="Get a hardscape proposal" lead="Fill out the form and our team will get back to you with a detailed proposal." form={jobberForm}>
        <ul className="mt-8 grid gap-3 text-[1.1rem] font-medium text-fg">
          {["5.0 on Google", "Owner-operated", "Every job documented with photos"].map((point) => (
            <li key={point} className="flex items-start gap-3">
              <Tick />
              {point}
            </li>
          ))}
        </ul>
      </FormBand>

      {/* FAQ */}
      <Band>
        <div className="grid gap-x-20 gap-y-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]">
          <h2 className="to-display to-h2">Common questions</h2>
          <FaqList faqs={faqs} />
        </div>
      </Band>

      <InstagramBand
        title="Latest project videos"
        lead="Check out our latest landscape transformations and snow removal updates over on Instagram. We post regular jobsite walk-throughs and before/afters."
        posts={instagramPosts}
      />

      <BlogCta>
        <Button href="/blog/why-open-grade-base-for-paver-patios" variant="quiet">
          Why an open grade base?
        </Button>
      </BlogCta>

      <StickyCta targetId="hardscape-form" label="Start my project" />
    </main>
  );
}
