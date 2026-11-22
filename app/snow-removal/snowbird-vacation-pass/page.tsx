import Link from "next/link";
import JsonLd from "../../components/JsonLd";
import StickyCta from "../../components/StickyCta";
import { Band, Button, PageHero, Tick } from "../../components/ds";
import { CardsBand, FaqBand, FormBand, ReviewsBand, StepsBand, serviceLd } from "../../components/sections";
import { pageMeta } from "../../lib/seo";
import { site } from "../../lib/site";
import { jobberForm, passes, reviews, zones } from "../../residential-snow-removal/content";
import { communityPath } from "../communities";

const path = "/snow-removal/snowbird-vacation-pass";
const description =
  "Going away this winter? Our snowbird and vacation snow removal pass covers your Calgary driveway and sidewalk for 1 to 8 weeks, with photos after every visit.";

export const metadata = pageMeta({
  title: "Snowbird & Vacation Snow Removal Calgary | TERREOAK",
  description,
  path,
  image: "/og/residential-snow-removal.jpg",
});

const pass = passes[1];

const reasons = [
  { title: "Your home looks lived in", desc: "An untouched driveway after three snowfalls tells everyone the house is empty. A cleared one doesn’t." },
  { title: "Your sidewalk stays within the bylaw", desc: "Calgary expects sidewalks cleared within 24 hours of a snowfall ending, whether you’re home or not." },
  { title: "You see it from wherever you are", desc: "A time-stamped photo is emailed to you after every visit, so you know it was done without asking a neighbour." },
  { title: "Nobody slips on your walk", desc: "Mail carriers, delivery drivers and neighbours still use your sidewalk while you’re away." },
  { title: "You come home to a clear driveway", desc: "No landing at midnight to find a month of packed snow between you and the garage." },
  { title: "You don’t owe anyone a favour", desc: "No asking the neighbour’s kid, and no wondering whether they remembered." },
];

const steps = [
  { title: "Tell us your dates", desc: "Any stretch from 1 to 8 weeks. Fill out the form with your address and when you’re away." },
  { title: "We confirm your spot", desc: "We check your address is on one of our routes and confirm the pass and the price." },
  { title: "We look after it", desc: "Your driveway and front sidewalk are cleared at 1 cm, with a photo emailed after each visit." },
];

const faqs = [
  {
    q: "What is a snowbird or vacation snow removal pass?",
    a: "A short-term pass for homeowners who only need coverage for part of the winter. It runs from 1 to 8 weeks and includes the same dedicated service and photo logs as a full season pass.",
  },
  {
    q: "What does the pass include?",
    a: "Driveway and front sidewalk clearing, service whenever 1 cm of snow accumulates, and a time-stamped photo service log emailed to you after each visit.",
  },
  {
    q: "How long can a vacation pass run?",
    a: "From 1 week up to 8 weeks. If you’re away for longer than that, a full season pass is usually the better fit.",
  },
  {
    q: "How much does a vacation pass cost?",
    a: "It’s priced by the length of the pass and your property. Send us your dates and address and we’ll confirm the price.",
  },
  {
    q: "How will I know my driveway was cleared?",
    a: "After every visit our crew submits time-stamped photos through our service software, and they’re emailed directly to you. It’s a complete record of every service while you’re away.",
  },
  {
    q: "Which areas do you cover?",
    a: `Our routes cover ${zones.map((zone) => zone.name.toLowerCase().replace("calgary", "Calgary")).join(" and ")}. Check the list of communities on this page, or call ${site.phoneDisplay} to ask about your street.`,
  },
  {
    q: "How far ahead should I book?",
    a: "As early as you can. Capacity on each route is capped every season so we can keep our 24-hour guarantee, and spots around the holidays go first.",
  },
];

const jsonLd = serviceLd({
  path,
  name: "Snowbird and Vacation Snow Removal Pass",
  serviceType: "Short-term residential snow removal",
  description,
  areas: ["Calgary"],
  crumbs: [
    { name: "Home", path: "/" },
    { name: "Residential Snow Removal", path: "/residential-snow-removal" },
    { name: "Snowbird and Vacation Pass", path },
  ],
  faqs,
});

export default function Page() {
  return (
    <main className="to-pavement to-flow to-snowcapped overflow-x-clip">
      <JsonLd data={jsonLd} />

      <PageHero
        title="Snow removal while you’re away."
        lead="A snowbird and vacation pass for Calgary homeowners. We clear your driveway and front sidewalk for 1 to 8 weeks and email you a photo after every visit."
        video="/videos/calgary-snow-removal-drone.mp4"
        poster="/images/snow-removal/hero-poster.jpg"
      >
        <Button href="#seasonal-form">Request a vacation pass</Button>
        <Button href="/residential-snow-removal" variant="quiet" className="bg-white/5 backdrop-blur-sm">
          Full season passes
        </Button>
      </PageHero>

      {/* THE PASS */}
      <Band>
        <div className="to-card to-snow-v1 grid items-center gap-8 p-6 md:grid-cols-2 md:gap-12 md:p-12">
          <div>
            <p className="to-sub">{pass.term}</p>
            <h2 className="to-display to-h2 mt-3">{pass.name}</h2>
            <p className="to-body mt-5">{pass.summary}</p>
            <p className="to-body mt-4">
              Whether it’s two weeks in Mexico over Christmas or two months in Arizona, your home is looked after the same way our season pass clients’ homes are, for exactly as long as you need.
            </p>
          </div>
          <div>
            <h3 className="to-display to-h3">What’s included</h3>
            <ul className="mt-5 grid gap-3 text-[1.1rem] text-fg">
              {pass.includes.map((item) => (
                <li key={item} className="flex gap-3">
                  <Tick />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href="#seasonal-form">Request a vacation pass</Button>
            </div>
          </div>
        </div>
      </Band>

      <CardsBand title="Why it’s worth having while you’re gone" cards={reasons} />

      <StepsBand id="how-it-works" title="How it works" steps={steps} />

      {/* AREAS */}
      <Band id="areas">
        <h2 className="to-display to-h2">Where we offer vacation passes</h2>
        <p className="to-body mt-5">Vacation passes run on the same routes as our season passes, so your home has to be in one of these communities.</p>
        <dl className="mt-8 grid gap-3 md:mt-12 md:grid-cols-2 md:gap-5">
          {zones.map((zone) => (
            <div key={zone.name} className="to-card p-5 md:p-8">
              <dt className="text-[1.2rem] font-semibold text-fg">{zone.name}</dt>
              <dd className="mt-3 text-[1.08rem] leading-relaxed text-muted">
                {zone.areas.map((area, i) => {
                  const href = communityPath(area);
                  return (
                    <span key={area}>
                      {i > 0 && ", "}
                      {href ? (
                        <Link href={href} className="to-focus underline decoration-white/25 underline-offset-4 transition-colors hover:text-white">
                          {area}
                        </Link>
                      ) : (
                        area
                      )}
                    </span>
                  );
                })}
              </dd>
            </div>
          ))}
        </dl>
      </Band>

      <ReviewsBand title="What our snow clients say" reviews={reviews} />

      <FormBand id="seasonal-form" title="Request a vacation pass" lead="Send us your address and the dates you’re away. We’ll confirm your spot and the price, usually the same day." form={jobberForm}>
        <p className="mt-6 text-[1.08rem] text-[#50565b]">
          Home all winter?{" "}
          <Link href="/residential-snow-removal#pricing" className="font-semibold text-[#005148] underline underline-offset-4">
            See season pass pricing
          </Link>
          .
        </p>
      </FormBand>

      <FaqBand title="Vacation pass FAQs" faqs={faqs} />

      <StickyCta targetId="seasonal-form" label="Request a vacation pass" />
    </main>
  );
}
