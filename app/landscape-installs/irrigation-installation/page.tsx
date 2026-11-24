import Link from "next/link";
import JsonLd from "../../components/JsonLd";
import StickyCta from "../../components/StickyCta";
import WarrantyBand, { warranty } from "../../components/Warranty";
import { Band, Button, PageHero, Tick } from "../../components/ds";
import { CardsBand, FaqBand, FormBand, ReviewsBand, SplitBand, StepsBand, serviceLd } from "../../components/sections";
import { jobberForm, reviews } from "../../home-content";
import { pageMeta } from "../../lib/seo";
import { steps } from "../content";

const path = "/landscape-installs/irrigation-installation";
const description =
  "Irrigation system installation in Calgary: lawn sprinklers, drip lines for beds and smart controllers, designed around your yard.";

export const metadata = pageMeta({
  title: "Irrigation Installation Calgary | Sprinkler Systems | TERREOAK",
  description,
  path,
  image: "/photos/paver-patio-sod-aerial.jpg",
});

const parts = [
  { title: "Lawn sprinkler zones", desc: "Pop-up spray heads and rotors laid out so every part of the lawn gets even coverage, with no dry corners." },
  { title: "Drip irrigation for beds", desc: "Drip lines that water shrubs, trees and garden beds at the roots, where it isn’t lost to wind and evaporation." },
  { title: "Smart controllers", desc: "A controller that runs each zone on its own schedule, with the option of adjusting for rain and weather." },
  { title: "Backflow prevention", desc: "A backflow preventer on every system to keep irrigation water out of your home’s drinking water." },
  { title: "Zones matched to the yard", desc: "Sunny lawn, shaded lawn and planted beds need different amounts of water, so they go on separate zones." },
  { title: "Clean installation", desc: "Lines are trenched in and the ground is put back, or the system goes in before new sod so nothing shows at all." },
];

const reasons = [
  "New sod needs daily watering for its first weeks, and a system does it without you standing there with a hose",
  "Calgary summers are dry and windy, and lawns on clay soil brown out quickly without regular water",
  "Watering early in the morning on a timer uses less water than a sprinkler left running in the afternoon",
  "The lawn is looked after while you’re away",
  "Beds, trees and lawn each get the amount they need",
];

const faqs = [
  {
    q: "Do you install irrigation systems in Calgary?",
    a: "Yes. We design and install lawn sprinkler zones, drip irrigation for garden beds, smart controllers and backflow prevention for residential and commercial properties in Calgary and the surrounding communities.",
  },
  {
    q: "When is the best time to install an irrigation system?",
    a: "Before new sod goes down, so the lines are buried under the lawn from day one. Systems can also be added to an existing yard during the growing season, with the trenches restored afterwards.",
  },
  {
    q: "Does an irrigation system need to be winterized?",
    a: "Yes. In Calgary every system needs to be blown out with compressed air before the ground freezes, or water left in the lines can crack pipes, valves and heads. We offer irrigation blowouts every fall.",
  },
  {
    q: "Is drip irrigation or sprinklers better?",
    a: "They suit different areas. Sprinklers cover lawn evenly. Drip lines are better for beds, shrubs and trees because they put water at the roots with very little lost to wind or evaporation. Most systems use both.",
  },
  {
    q: "How much does an irrigation system cost?",
    a: "It depends on the size of the yard, the number of zones and whether it’s going in before new sod or into an existing lawn. We give you a fixed-price written quote after a free site visit.",
  },
  warranty.faq,
];

const jsonLd = serviceLd({
  path,
  name: "Irrigation System Installation",
  serviceType: "Irrigation and sprinkler system installation",
  description,
  areas: ["Calgary", "Okotoks", "Airdrie", "Cochrane", "Chestermere"],
  crumbs: [
    { name: "Home", path: "/" },
    { name: "Landscape Installs", path: "/landscape-installs" },
    { name: "Irrigation Installation", path },
  ],
  faqs,
});

export default function Page() {
  return (
    <main className="to-pavement to-flow overflow-x-clip">
      <JsonLd data={jsonLd} />

      <PageHero
        title="Irrigation system installation in Calgary."
        lead="Sprinklers for the lawn, drip lines for the beds and a controller that runs it all, so your yard gets the water it needs without the hose."
        image="/photos/paver-patio-sod-aerial.jpg"
        imageAlt="Aerial view of a Calgary backyard with newly laid sod being watered"
      >
        <Button href="#irrigation-form">Get a free quote</Button>
        <Button href="/irrigation-blowouts" variant="quiet" className="bg-white/5 backdrop-blur-sm">
          Irrigation blowouts
        </Button>
      </PageHero>

      <SplitBand title="Water where it’s needed, when it’s needed" image="/photos/sod-laying-crew.jpg" imageAlt="TERREOAK crew laying new sod in a Calgary backyard">
        <p className="to-body">
          A good irrigation system is designed around the yard, not dropped in as a kit. We look at where the sun hits, what’s lawn and what’s planted, and your water pressure, then lay out zones so each area gets the right amount.
        </p>
        <p className="to-body">
          The best time to put one in is before new sod, when the lines can be buried under the lawn from day one. If you’re planning{" "}
          <Link href="/softscapes/sod-installation" className="to-link">
            new sod
          </Link>
          , ask us to quote both together.
        </p>
      </SplitBand>

      <FormBand id="irrigation-form" title="Get an irrigation quote" lead="Tell us about your yard and what you’d like watered. We’ll book a free site visit and send a detailed written quote." form={jobberForm} />

      <CardsBand id="system" title="What goes into a system" cards={parts} />

      <Band id="why">
        <div className="grid gap-3 md:grid-cols-2 md:gap-5">
          <article className="to-card p-6 md:p-10">
            <h2 className="to-display to-h3">Why homeowners install one</h2>
            <ul className="mt-5 grid gap-3 text-[1.08rem] text-fg">
              {reasons.map((reason) => (
                <li key={reason} className="flex gap-3">
                  <Tick />
                  {reason}
                </li>
              ))}
            </ul>
          </article>
          <article className="to-card p-6 md:p-10">
            <h2 className="to-display to-h3">Looking after it</h2>
            <p className="mt-4 text-[1.08rem] leading-relaxed text-muted">
              An irrigation system in Calgary has to be winterized every fall. Water left in the lines freezes, expands and cracks pipes, valves and heads.
            </p>
            <p className="mt-4 text-[1.08rem] leading-relaxed text-muted">
              We do{" "}
              <Link href="/irrigation-blowouts" className="to-link">
                irrigation blowouts
              </Link>{" "}
              each fall, clearing every zone with compressed air before the hard freeze, so the system we install is one we can keep looking after.
            </p>
          </article>
        </div>
      </Band>

      <WarrantyBand />

      <StepsBand title="How it works" steps={steps} />

      <ReviewsBand title="What Calgary homeowners are saying" reviews={reviews} />

      <FaqBand title="Irrigation installation FAQs" faqs={faqs} />

      <StickyCta targetId="irrigation-form" label="Get a free quote" />
    </main>
  );
}
