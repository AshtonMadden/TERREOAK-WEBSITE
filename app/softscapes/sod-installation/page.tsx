import Image from "next/image";
import Link from "next/link";
import JsonLd from "../../components/JsonLd";
import StickyCta from "../../components/StickyCta";
import { Band, Button, PageHero } from "../../components/ds";
import { CardsBand, FaqBand, FormBand, ProjectCards, ReviewsBand, SplitBand, StepsBand, serviceLd } from "../../components/sections";
import { pageMeta } from "../../lib/seo";
import { jobberForm, projects, reviews, steps } from "../content";

const path = "/softscapes/sod-installation";
const description =
  "Sod installation in Calgary with 100% Kentucky Bluegrass, laid on properly graded, prepared soil. New builds and lawn replacements. Free site visit and quote.";

export const metadata = pageMeta({
  title: "Sod Installation Calgary | New Lawns | TERREOAK",
  description,
  path,
  image: "/projects/cranston-makeover/laying-sod.jpg",
});

const reasons = [
  { title: "New builds", desc: "Your builder left you with graded clay. We bring in topsoil, set the final grade and lay a lawn that’s ready for summer." },
  { title: "A lawn that’s past saving", desc: "Thin, weedy, patchy or killed off by grubs, dogs or the wrong spray. Sometimes starting fresh is faster and cheaper than nursing it back." },
  { title: "After construction", desc: "A new fence, deck, patio or utility dig leaves torn-up ground. We repair the grade and re-sod so it blends in." },
  { title: "Uneven, bumpy lawns", desc: "Low spots and ruts are fixed in the soil, not on top of it. We relevel the area before the new sod goes down." },
  { title: "Drainage problems", desc: "If water runs toward the house or pools in the yard, regrading before sodding is the moment to fix it." },
  { title: "Selling or moving in", desc: "A new lawn is one of the fastest ways to change how a property looks from the street." },
];

const prep = [
  { title: "Remove the old lawn", desc: "Dead turf, weeds and debris come out so the new sod sits on soil, not on a layer of thatch." },
  { title: "Grade for drainage", desc: "We shape the ground so water moves away from the house and doesn’t pond in the yard." },
  { title: "Add quality topsoil", desc: "Calgary soil is often compacted clay. Fresh topsoil gives roots something to grow into." },
  { title: "Lay and roll the sod", desc: "Tight seams, staggered joints and a roll to press the roots into the soil." },
];

const aftercare = [
  { when: "First two weeks", what: "Water daily, enough to keep the sod and the soil underneath moist. Stay off it as much as you can." },
  { when: "Weeks three and four", what: "Ease back to deeper, less frequent watering so the roots go down. Give it a first mow once it has rooted and can’t be lifted at the corners." },
  { when: "After the first month", what: "Treat it like an established lawn: water deeply, mow high, and fertilize in season." },
];

const faqs = [
  {
    q: "How much does sod installation cost in Calgary?",
    a: "A basic sod installation on a standard Calgary lot typically runs $2,000 to $6,000, depending on lawn size, the grading required and soil prep. As a real example, a front yard we re-sodded in Cranston, with new soil and refreshed rock beds, was a $3,150 project.",
  },
  {
    q: "What kind of sod do you use?",
    a: "We use Kentucky Bluegrass, which is the most common and reliable cool-season turf grass for Calgary. It handles cold winters, recovers well from foot traffic, and gives you a dense, green lawn when properly cared for.",
  },
  {
    q: "When is the best time to lay sod in Calgary?",
    a: "Spring and early fall are ideal. Cooler temperatures help roots establish before the stress of summer heat or winter freeze. Sod can be laid through the growing season, it just needs more water in the heat.",
  },
  {
    q: "Do you do the soil prep or is that extra?",
    a: "Soil prep is part of every install. We do not skip it. Skipping prep is how sod fails. We grade the area, remove debris, bring in topsoil where needed, and make sure drainage is correct before anything goes down.",
  },
  {
    q: "How long before I can walk on new sod?",
    a: "Keep traffic light for the first two weeks while the roots knit into the soil. After about a month, once it has rooted and been mowed, it can be used normally.",
  },
  {
    q: "Is sod better than seed?",
    a: "Sod gives you an instant, even lawn that’s usable in weeks and leaves weeds little room to get started. Seed costs less but takes a full season to fill in and needs careful watering. For most Calgary yards, sod is the more reliable choice.",
  },
  {
    q: "Should I choose sod or artificial turf?",
    a: "Real sod costs less to install and stays cooler in summer, and it’s the better choice for large, sunny lawns. Artificial turf suits shaded, small or heavily used areas where grass won’t thrive. We install both.",
  },
];

const jsonLd = serviceLd({
  path,
  name: "Sod Installation",
  serviceType: "Sod installation and lawn replacement",
  description,
  areas: ["Calgary", "Okotoks", "Airdrie", "Cochrane", "Chestermere"],
  crumbs: [
    { name: "Home", path: "/" },
    { name: "Softscapes", path: "/softscapes" },
    { name: "Sod Installation", path },
  ],
  faqs,
});

export default function Page() {
  return (
    <main className="to-pavement to-flow overflow-x-clip">
      <JsonLd data={jsonLd} />

      <PageHero
        title="Sod installation in Calgary."
        lead="A new lawn laid on properly graded, prepared soil, using 100% Kentucky Bluegrass that’s sourced locally and suited to Calgary’s cold winters and dry summers."
        image="/projects/cranston-makeover/laying-sod.jpg"
        imageAlt="New Kentucky Bluegrass sod in a Cranston front yard, installed by TERREOAK"
      >
        <Button href="#sod-form">Get a free quote</Button>
        <Button href="/softscapes" variant="quiet" className="bg-white/5 backdrop-blur-sm">
          All softscapes
        </Button>
      </PageHero>

      <SplitBand title="A fresh lawn starts with the soil" image="/projects/cranston-makeover/front-view.jpg" imageAlt="TERREOAK crew preparing the soil in a Cranston front yard before laying new sod" aspect="aspect-[4/5]">
        <p className="to-body">
          A fresh lawn starts with proper soil prep. We grade the area, bring in quality topsoil where needed, and lay 100% Kentucky Bluegrass sod that is sourced locally and suited to Calgary’s cold winters and dry summers.
        </p>
        <p className="to-body">
          Whether you are moving into a new build or replacing a tired lawn, we handle the full install and walk you through watering after the job is done. The sod itself is the easy part. What’s under it decides whether
          the lawn is still thick and green in three years.
        </p>
      </SplitBand>

      <CardsBand id="when" title="When new sod makes sense" cards={reasons} />

      {/* PREP */}
      <Band id="prep">
        <div className="grid items-end gap-x-20 gap-y-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <h2 className="to-display to-h2">How we prepare and lay your lawn</h2>
          <p className="to-body">Soil prep is part of every install. We do not skip it, because skipping prep is how sod fails.</p>
        </div>
        <ol className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-12 md:gap-5 lg:grid-cols-4">
          {prep.map((step, i) => (
            <li key={step.title} className="to-card p-5 md:p-7">
              <span className="to-icon to-display text-2xl">{i + 1}</span>
              <h3 className="mt-5 text-[1.2rem] font-bold leading-tight text-fg">{step.title}</h3>
              <p className="mt-3 text-[1.02rem] leading-relaxed text-muted">{step.desc}</p>
            </li>
          ))}
        </ol>
      </Band>

      {/* COST */}
      <Band id="cost">
        <div className="to-card grid items-center gap-8 p-6 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-12 md:p-12">
          <div>
            <p className="to-sub">Typical investment</p>
            <p className="to-display mt-3 text-[2.2rem] leading-tight text-accent md:text-[2.8rem]">$2,000–$6,000</p>
            <p className="mt-2 text-[1.05rem] text-muted">for a basic sod installation on a standard Calgary lot</p>
          </div>
          <div className="grid gap-4">
            <p className="to-body">Where your lawn lands in that range depends on its size, how much grading it needs and how much topsoil has to come in.</p>
            <p className="to-body">Every project starts with a free site visit and a detailed, fixed-price quote, so you know what you’re getting and what it costs before any work begins.</p>
          </div>
        </div>
      </Band>

      {/* AFTERCARE */}
      <SplitBand
        id="aftercare"
        title="Looking after new sod"
        sub="The first month matters most"
        image="/projects/cranston-makeover/rundle-bed.jpg"
        imageAlt="Finished front yard in Cranston with new Kentucky Bluegrass sod and a Rundle rock bed"
        imageSide="left"
      >
        <p className="to-body">We walk you through watering before we leave. As a general guide:</p>
        <dl className="grid gap-4">
          {aftercare.map((stage) => (
            <div key={stage.when}>
              <dt className="text-[1.1rem] font-bold text-fg">{stage.when}</dt>
              <dd className="mt-1 text-[1.05rem] leading-relaxed text-muted">{stage.what}</dd>
            </div>
          ))}
        </dl>
        <p className="to-body">
          Once it’s established, a yearly <Link href="/spring-cleanup-calgary" className="to-link">spring cleanup</Link> with aeration keeps it thick.
        </p>
      </SplitBand>

      <Band>
        <h2 className="to-display to-h2">Featured lawn and softscape projects</h2>
        <div className="mt-8 md:mt-12">
          <ProjectCards projects={[projects[1], projects[0]]} />
        </div>
        <figure className="relative mt-5 aspect-[16/7] overflow-hidden rounded-[36px]">
          <Image src="/projects/cranston-makeover/hero-aerial.jpg" alt="Aerial view of a Cranston front yard after new sod and rock beds were installed" fill sizes="(min-width: 1280px) 1180px, 100vw" className="object-cover" />
        </figure>
      </Band>

      <StepsBand title="How it works" steps={steps} />

      <ReviewsBand title="What Calgary homeowners are saying" reviews={reviews} />

      <FormBand id="sod-form" title="Get a sod quote" lead="Tell us about your lawn and roughly how big it is. We’ll book a free site visit and send a detailed written quote." form={jobberForm}>
        <p className="mt-6 text-[1.08rem] text-[#50565b]">
          Shady or high-traffic area?{" "}
          <Link href="/hardscaping/paver-patios-artificial-turf#artificial-turf" className="font-semibold text-[#005148] underline underline-offset-4">
            Artificial turf might suit it better
          </Link>
          .
        </p>
      </FormBand>

      <FaqBand title="Sod installation FAQs" faqs={faqs} />

      <StickyCta targetId="sod-form" label="Get a free quote" />
    </main>
  );
}
