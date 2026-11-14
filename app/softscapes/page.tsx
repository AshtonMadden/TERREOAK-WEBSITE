import Image from "next/image";
import JsonLd from "../components/JsonLd";
import StickyCta from "../components/StickyCta";
import { Band, BlogCta, Button, PageHero, Tick } from "../components/ds";
import { CardsBand, FaqBand, FormBand, InstagramBand, ProjectCards, ReviewsBand, SplitBand, StepsBand, TeamBand, TrustPoints, serviceLd } from "../components/sections";
import { pageMeta } from "../lib/seo";
import { faqs, instagramPosts, jobberForm, mulches, projects, reviews, services, steps } from "./content";

const path = "/softscapes";
const description =
  "Beautiful softscape installations in Calgary. TERREOAK specializes in planting, sodding, mulching, and custom garden designs for your home.";

export const metadata = pageMeta({
  title: "Softscape & Garden Design Calgary | TERREOAK",
  description,
  path,
  image: "/images/softscaping-river-rock-hostas.jpg",
});

const jsonLd = serviceLd({
  path,
  name: "Softscaping",
  serviceType: "Sod installation, garden beds, planting and mulch",
  description,
  areas: ["Calgary", "Okotoks", "Airdrie", "Cochrane", "Chestermere"],
  crumbs: [
    { name: "Landscaping", path: "/landscape-installs" },
    { name: "Softscapes", path },
  ],
  faqs,
});

export default function SoftscapesPage() {
  return (
    <main className="to-pavement to-flow overflow-x-clip">
      <JsonLd data={jsonLd} />

      <PageHero
        title={
          <>
            Calgary softscapes. <span className="block">It starts with the soil.</span>
          </>
        }
        lead="Sod installation, garden beds, planting, and mulch work done right the first time. Serving Calgary, Okotoks, Airdrie, Cochrane, and Chestermere."
        image="/images/softscaping-river-rock-hostas.jpg"
        imageAlt="Calgary softscaping project featuring river rock bed, hostas, and red heucheras alongside a house foundation"
        footer={<TrustPoints />}
      >
        <Button href="#softscape-form">Request a proposal</Button>
        <Button href="#what-we-install" variant="quiet" className="bg-white/5 backdrop-blur-sm">
          See what we install
        </Button>
      </PageHero>

      <SplitBand title="What is softscaping?" image="/images/what-is-softscaping.jpg" imageAlt="Softscaping in Calgary: sod and plant installation">
        <p className="to-body">
          Softscaping covers all the living elements of your yard. Grass, trees, shrubs, perennials, garden beds, mulch, and topsoil. It is the part of your landscape that grows with your property over time and adds real colour, texture, and life to the space.
        </p>
        <p className="to-body">
          Done well, softscaping works alongside your fencing, pathways, and other structures to pull the whole yard together. Done poorly, it dies off, looks patchy, and costs you money to redo.
        </p>
        <p className="to-body">At TERREOAK we focus on selecting the right plants and materials for Calgary’s climate so what we install actually thrives through the seasons.</p>
      </SplitBand>

      <CardsBand id="what-we-install" title="What we install" cards={services}>
        <Button href="#softscape-form">Get a quote</Button>
      </CardsBand>

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

      <SplitBand title="Built for Calgary’s climate" image="/images/lilac.jpg" imageAlt="Raspberries growing in a Calgary garden" imageSide="left">
        <p className="to-body">
          Calgary is not an easy place to grow things. Chinooks, dry summers, late frosts, and clay-heavy soil create conditions that catch a lot of homeowners off guard when their new sod turns brown or their shrubs do not come back in spring.
        </p>
        <p className="to-body">
          We only use plant material and grass varieties that are rated for Zone 3 and proven to survive Alberta winters. Every project starts with looking at your soil, your drainage, and your sun exposure so that what we plant has the best shot at thriving long term.
        </p>
        <p className="to-body">We serve Calgary and the surrounding areas including Okotoks, Airdrie, Cochrane, and Chestermere.</p>
      </SplitBand>

      {/* MULCH */}
      <Band>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="to-display to-h2">Premium mulch options</h2>
            <p className="to-body mt-7">
              Not all mulch is created equal. Cheap mulch breaks down too fast, loses its colour quickly, and can easily blow away in Calgary’s high winds. We supply and install premium, double-shredded bark mulch that naturally mats together so it stays in your beds and holds its rich colour through the season.
            </p>
            <p className="to-sub mt-8">Our most popular options</p>
            <dl className="mt-4 grid gap-4">
              {mulches.map((mulch) => (
                <div key={mulch.title} className="to-card p-6">
                  <dt className="text-[1.2rem] font-bold text-fg">{mulch.title}</dt>
                  <dd className="mt-2 text-[1.05rem] leading-relaxed text-muted">{mulch.desc}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 flex max-w-[62ch] gap-3 text-[1.1rem] leading-relaxed text-fg">
              <Tick />
              We always install mulch at a depth of 3 to 4 inches to guarantee it actually stops weeds and retains soil moisture during dry spells.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[28px]">
              <Image src="/images/blue-flowers.jpg" alt="Bright blue lobelia flowers planted in fresh premium mulch" fill sizes="(min-width: 1280px) 300px, 50vw" className="object-cover" />
            </div>
            <div className="relative mt-10 aspect-[3/4] overflow-hidden rounded-[28px]">
              <Image src="/images/backyard-bed.jpg" alt="Fresh mulch applied around newly planted trees and shrubs" fill sizes="(min-width: 1280px) 300px, 50vw" className="object-cover" />
            </div>
          </div>
        </div>
      </Band>

      <StepsBand title="How it works" steps={steps} />

      <TeamBand />

      <ReviewsBand title="What Calgary homeowners are saying" reviews={reviews} />

      <FormBand id="softscape-form" title="Get a softscape proposal" lead="Fill out the form and our team will get back to you with a detailed proposal." form={jobberForm}>
        <ul className="mt-8 grid gap-3 text-[1.1rem] font-medium text-fg">
          {["5.0 on Google", "Owner-operated", "Every job documented with photos"].map((point) => (
            <li key={point} className="flex items-start gap-3">
              <Tick />
              {point}
            </li>
          ))}
        </ul>
      </FormBand>

      <FaqBand title="Common questions" faqs={faqs} />

      <InstagramBand
        title="Latest project videos"
        lead="Check out our latest landscape transformations and snow removal updates over on Instagram. We post regular jobsite walk-throughs and before/afters."
        posts={instagramPosts}
      />

      <BlogCta />

      <StickyCta targetId="softscape-form" label="Start my project" />
    </main>
  );
}
