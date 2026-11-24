import Link from "next/link";
import WarrantyBand, { warranty } from "../../components/Warranty";
import JsonLd from "../../components/JsonLd";
import StickyCta from "../../components/StickyCta";
import { Band, Button, PageHero, Tick } from "../../components/ds";
import { CardsBand, FaqBand, FormBand, ReviewsBand, SplitBand, StepsBand, serviceLd } from "../../components/sections";
import { pageMeta } from "../../lib/seo";
import { jobberForm, reviews, steps } from "../content";

const path = "/hardscaping/retaining-walls";
const description =
  "Retaining walls in Calgary built with proper base and drainage so they don’t lean, bulge or fail. Interlocking block and natural stone. Free site visit.";

export const metadata = pageMeta({
  title: "Retaining Walls Calgary | Block & Stone Walls | TERREOAK",
  description,
  path,
  image: "/hardscaping/calgary-retaining-wall.jpg",
});

const reasons = [
  { title: "Make a sloped yard usable", desc: "A wall turns a steep grade into level ground you can put a lawn, a patio or a play area on." },
  { title: "Stop soil from washing away", desc: "Holding back a slope keeps soil, mulch and rock where they belong through spring melt and summer storms." },
  { title: "Protect your foundation", desc: "Re-shaping the grade so water drains away from the house, instead of toward it." },
  { title: "Create raised beds and terraces", desc: "Low walls add planting space and break a tall slope into steps that look intentional." },
  { title: "Frame a patio or fire pit", desc: "A seat wall gives a patio an edge, extra seating and a finished look." },
  { title: "Replace a wall that’s failing", desc: "Old timber and poorly drained block walls lean and rot. We remove them and rebuild properly." },
];

const buildSteps = [
  { title: "A compacted base below grade", desc: "The first course sits on a levelled, compacted gravel footing, partly buried so the wall can’t slide forward." },
  { title: "Drainage behind the wall", desc: "Clear gravel backfill and a drain pipe carry water away. Water pressure and frost behind a wall are what push it over." },
  { title: "Reinforcement for taller walls", desc: "Geogrid layers tie the wall back into the soil behind it once it reaches a height that needs it." },
  { title: "A slight lean into the slope", desc: "Each course steps back a little, so the wall leans into the load it’s holding." },
];

const warningSigns = [
  "The wall is leaning or bulging outward",
  "Blocks or stones have shifted, separated or cracked",
  "Soil is washing out through or around the wall",
  "Water pools at the base or weeps through the face",
  "Timbers are soft, rotting or pulling apart",
];

const faqs = [
  warranty.faq,
  {
    q: "How much does a retaining wall cost in Calgary?",
    a: "Retaining wall installations start around $5,000 and scale with height, length and engineering requirements. Every TERREOAK project starts with a free site visit and a detailed, fixed-price quote.",
  },
  {
    q: "Do I need a permit for a retaining wall in Calgary?",
    a: "Retaining walls over 1.2 metres generally need a permit, and walls over 1.5 metres also require engineered drawings. We flag any permit requirements during the quote process so you know what is needed before the work starts.",
  },
  {
    q: "What is the best material for a retaining wall?",
    a: "Interlocking concrete block is the most common choice in Calgary because it’s strong, drains well and comes in many finishes. Natural stone suits garden walls and a more organic look. We recommend a material once we’ve seen the slope and what the wall has to hold.",
  },
  {
    q: "Why do retaining walls fail?",
    a: "Almost always because of water. Without gravel backfill and a drain behind it, water builds up, freezes and pushes the wall outward. A thin or uncompacted base is the other common cause.",
  },
  {
    q: "How long does a retaining wall take to build?",
    a: "It depends on the length, height and access to the site. Projects that combine a patio, retaining wall and walkway may take one to two weeks. We give you a realistic timeline at the quote stage.",
  },
  {
    q: "Can you repair a leaning retaining wall?",
    a: "Sometimes a section can be taken down and rebuilt. If the wall has no drainage or the base has failed, a full rebuild with proper base and drainage is usually the better long-term fix. We’ll tell you which after looking at it.",
  },
  {
    q: "Can a retaining wall be built with a patio at the same time?",
    a: "Yes, and it usually makes sense to. Combining the wall, patio and any sod or planting in one project means the yard gets finished at the same time and nothing has to be torn up later.",
  },
];

const jsonLd = serviceLd({
  path,
  name: "Retaining Walls",
  serviceType: "Retaining wall design and construction",
  description,
  areas: ["Calgary", "Okotoks", "Airdrie", "Cochrane", "Chestermere"],
  crumbs: [
    { name: "Home", path: "/" },
    { name: "Hardscaping", path: "/hardscaping" },
    { name: "Retaining Walls", path },
  ],
  faqs,
});

export default function Page() {
  return (
    <main className="to-pavement to-flow overflow-x-clip">
      <JsonLd data={jsonLd} />

      <PageHero
        title="Retaining walls in Calgary."
        lead="Walls that hold a slope for decades, because the base and the drainage behind them were built properly."
        image="/hardscaping/calgary-retaining-wall.jpg"
        imageAlt="Interlocking concrete block retaining wall with a cap, built by TERREOAK in Calgary"
      >
        <Button href="#wall-form">Get a free quote</Button>
        <Button href="/hardscaping" variant="quiet" className="bg-white/5 backdrop-blur-sm">
          All hardscaping
        </Button>
      </PageHero>

      <SplitBand
        title="The difference between a usable yard and a steep one"
        image="/hardscaping/calgary-retaining-wall.jpg"
        imageAlt="Finished block retaining wall holding back a raised grade in a Calgary yard"
      >
        <p className="to-body">
          If your yard has a slope, a retaining wall is often the difference between a usable yard and a steep, unusable grade. We build retaining walls using interlocking concrete block, natural stone and other materials
          suited to your specific situation.
        </p>
        <p className="to-body">
          Proper drainage behind every wall is not optional. It is what prevents the wall from failing. For walls over 1.2 metres, we flag any permit requirements upfront so there are no surprises partway through the job.
        </p>
      </SplitBand>

      <CardsBand id="why" title="Why homeowners build a retaining wall" cards={reasons} />

      {/* HOW IT'S BUILT */}
      <Band id="how-its-built">
        <div className="grid items-end gap-x-20 gap-y-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <div>
            <p className="to-sub">Built for freeze-thaw</p>
            <h2 className="to-display to-h2 mt-3">What makes a retaining wall last</h2>
          </div>
          <p className="to-body">
            A retaining wall is holding back tonnes of soil, and in Calgary that soil is wet in spring and frozen in winter. The blocks you see are the easy part. What’s underneath and behind them decides whether the wall is
            still straight in twenty years.
          </p>
        </div>
        <ol className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-12 md:gap-5 lg:grid-cols-4">
          {buildSteps.map((step, i) => (
            <li key={step.title} className="to-card p-5 md:p-7">
              <span className="to-icon to-display text-2xl">{i + 1}</span>
              <h3 className="mt-5 text-[1.2rem] font-bold leading-tight text-fg">{step.title}</h3>
              <p className="mt-3 text-[1.02rem] leading-relaxed text-muted">{step.desc}</p>
            </li>
          ))}
        </ol>
      </Band>

      {/* PERMITS + WARNING SIGNS */}
      <Band>
        <div className="grid gap-3 md:grid-cols-2 md:gap-5">
          <article id="permits" className="to-card p-6 md:p-10">
            <h2 className="to-display to-h3">Permits and engineering</h2>
            <p className="mt-4 text-[1.08rem] leading-relaxed text-muted">
              Height changes the rules. In Calgary, retaining walls over 1.2 metres generally need a permit, and walls over 1.5 metres also require engineered drawings.
            </p>
            <p className="mt-4 text-[1.08rem] leading-relaxed text-muted">
              We measure the grade at the site visit and tell you at the quote stage whether your wall needs either, so it’s built into the plan and the price from the start.
            </p>
          </article>
          <article id="failing-wall" className="to-card p-6 md:p-10">
            <h2 className="to-display to-h3">Signs an existing wall is failing</h2>
            <ul className="mt-5 grid gap-3 text-[1.08rem] text-fg">
              {warningSigns.map((sign) => (
                <li key={sign} className="flex gap-3">
                  <Tick />
                  {sign}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-muted">A wall that’s moving rarely stops on its own. It’s cheaper to deal with while it’s leaning than after it has come down.</p>
          </article>
        </div>
      </Band>

      {/* COST */}
      <Band id="cost">
        <div className="to-card grid items-center gap-8 p-6 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-12 md:p-12">
          <div>
            <p className="to-sub">Typical investment</p>
            <p className="to-display mt-3 text-[2.2rem] leading-tight text-accent md:text-[2.8rem]">From $5,000</p>
            <p className="mt-2 text-[1.05rem] text-muted">for retaining wall installations</p>
          </div>
          <div className="grid gap-4">
            <p className="to-body">Retaining walls scale with height, length and engineering requirements. Access to the site, how much soil has to be moved, and the block or stone you choose all affect the final number.</p>
            <p className="to-body">Every project starts with a free site visit and a detailed, fixed-price quote, so you know what you’re getting and what it costs before any work begins.</p>
          </div>
        </div>
      </Band>

      <WarrantyBand />

      <StepsBand title="How it works" steps={steps} />

      <ReviewsBand title="What Calgary homeowners are saying" reviews={reviews} />

      <FormBand id="wall-form" title="Get a retaining wall quote" lead="Tell us about the slope or the wall you have now. We’ll book a free site visit and send a detailed written quote." form={jobberForm}>
        <p className="mt-6 text-[1.08rem] text-[#50565b]">
          Adding a patio on the level ground it creates?{" "}
          <Link href="/hardscaping/paver-patios-artificial-turf" className="font-semibold text-[#005148] underline underline-offset-4">
            See paver patios and artificial turf
          </Link>
          .
        </p>
      </FormBand>

      <FaqBand title="Retaining wall FAQs" faqs={faqs} />

      <StickyCta targetId="wall-form" label="Get a free quote" />
    </main>
  );
}
