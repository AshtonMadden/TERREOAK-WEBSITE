import Link from "next/link";
import JsonLd from "../../components/JsonLd";
import StickyCta from "../../components/StickyCta";
import WarrantyBand, { warranty } from "../../components/Warranty";
import { Band, Button, PageHero, Tick } from "../../components/ds";
import { CardsBand, FaqBand, FormBand, ReviewsBand, StepsBand, serviceLd } from "../../components/sections";
import { jobberForm, reviews } from "../../home-content";
import { pageMeta } from "../../lib/seo";
import { steps } from "../content";

const path = "/landscape-installs/landscape-lighting";
const description =
  "Landscape lighting in Calgary: low-voltage LED path, step, patio and tree lighting designed and installed for safer, better-looking yards after dark.";

export const metadata = pageMeta({
  title: "Landscape Lighting Calgary | Outdoor Lighting | TERREOAK",
  description,
  path,
  image: "/photos/artificial-turf-backyard.jpg",
});

const types = [
  { title: "Path and walkway lights", desc: "Low, shielded fixtures that light the ground where you walk without shining in your eyes." },
  { title: "Step and wall lights", desc: "Built into retaining walls, seat walls and stair risers so every change in level is visible." },
  { title: "Patio and fire pit lighting", desc: "Soft light around seating areas so the patio is usable long after the sun goes down." },
  { title: "Tree and feature uplighting", desc: "Fixtures aimed up into trees, boulders and the front of the house to give the yard depth at night." },
  { title: "Garden bed lighting", desc: "Small accent lights that pick out planting and rock work along a bed." },
  { title: "Timers and controls", desc: "A transformer with a timer or dusk sensor, so the lights come on and off by themselves." },
];

const reasons = [
  "Calgary is dark by late afternoon for much of the winter, right when people are coming home",
  "Lit steps and paths are safer when there’s snow and ice on them",
  "A lit yard and entry is less inviting to anyone who shouldn’t be there",
  "You get to use the patio you paid for in the evening, not only on summer afternoons",
  "The house looks finished from the street at night",
];

const faqs = [
  {
    q: "What kind of landscape lighting do you install?",
    a: "Low-voltage LED lighting: path and walkway lights, step and wall lights built into hardscaping, patio and fire pit lighting, tree and feature uplighting, and garden bed accents, run from a transformer with a timer or dusk sensor.",
  },
  {
    q: "Is low-voltage lighting safe outdoors?",
    a: "Yes. Low-voltage systems run at a much lower voltage than household wiring, which makes them well suited to yards, beds and areas where people and pets walk. The transformer plugs into an outdoor outlet. If a new outlet is needed, that part is done by a licensed electrician.",
  },
  {
    q: "When is the best time to install landscape lighting?",
    a: "During a patio, wall or walkway build. Wiring can be run under the pavers and through the walls before they’re finished, which is cleaner and avoids lifting finished work later. Lighting can also be added to an existing yard.",
  },
  {
    q: "Does landscape lighting work in a Calgary winter?",
    a: "Yes. Outdoor LED fixtures are built for cold weather, and winter is when lighting earns its keep, because it’s dark for so much of the day. Fixtures should be placed where snow clearing won’t bury or hit them.",
  },
  {
    q: "How much does landscape lighting cost?",
    a: "It depends on the number and type of fixtures and how much wiring the yard needs. We give you a fixed-price written quote after a free site visit.",
  },
  warranty.faq,
];

const jsonLd = serviceLd({
  path,
  name: "Landscape Lighting",
  serviceType: "Landscape and outdoor lighting installation",
  description,
  areas: ["Calgary", "Okotoks", "Airdrie", "Cochrane", "Chestermere"],
  crumbs: [
    { name: "Home", path: "/" },
    { name: "Landscape Installs", path: "/landscape-installs" },
    { name: "Landscape Lighting", path },
  ],
  faqs,
});

export default function Page() {
  return (
    <main className="to-pavement to-flow overflow-x-clip">
      <JsonLd data={jsonLd} />

      <PageHero
        title="Landscape lighting in Calgary."
        lead="Low-voltage LED lighting for paths, steps, patios and trees, so your yard is safer to walk through and better to look at after dark."
        image="/photos/artificial-turf-backyard.jpg"
        imageAlt="Calgary backyard with path lights in a garden bed and string lights over a covered outdoor bar"
      >
        <Button href="#lighting-form">Get a free quote</Button>
        <Button href="/landscape-installs" variant="quiet" className="bg-white/5 backdrop-blur-sm">
          All landscape installs
        </Button>
      </PageHero>

      <Band>
        <div className="grid gap-x-20 gap-y-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <h2 className="to-display to-h2">A yard you can use after 5 p.m.</h2>
          <div className="grid content-start gap-5">
            <p className="to-body">
              A lot of money goes into patios, walls and planting that disappear the moment the sun sets. Landscape lighting gives you those spaces back in the evening, and makes steps and paths safer when there’s snow on the ground.
            </p>
            <p className="to-body">
              We design the lighting around how you move through the yard and what’s worth showing off, then install low-voltage LED fixtures with the wiring hidden under beds, pavers and walls.
            </p>
          </div>
        </div>
      </Band>

      <FormBand id="lighting-form" title="Get a lighting quote" lead="Tell us about your yard and what you’d like lit. We’ll book a free site visit and send a detailed written quote." form={jobberForm} />

      <CardsBand id="types" title="What we install" cards={types} />

      <Band id="why">
        <div className="grid gap-3 md:grid-cols-2 md:gap-5">
          <article className="to-card p-6 md:p-10">
            <h2 className="to-display to-h3">Why it’s worth it in Calgary</h2>
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
            <h2 className="to-display to-h3">Best done during the build</h2>
            <p className="mt-4 text-[1.08rem] leading-relaxed text-muted">
              The cleanest lighting jobs happen while a patio, wall or walkway is going in. Wiring runs under the base and through the wall before the last stones are set, so nothing has to be lifted afterwards.
            </p>
            <p className="mt-4 text-[1.08rem] leading-relaxed text-muted">
              Planning a{" "}
              <Link href="/hardscaping/paver-patios-artificial-turf" className="to-link">
                patio
              </Link>
              ,{" "}
              <Link href="/hardscaping/retaining-walls" className="to-link">
                retaining wall
              </Link>{" "}
              or{" "}
              <Link href="/hardscaping/walkways-pathways" className="to-link">
                walkway
              </Link>
              ? Tell us you want lighting and we’ll build it into the plan. We can also add lighting to a finished yard.
            </p>
          </article>
        </div>
      </Band>

      <WarrantyBand />

      <StepsBand title="How it works" steps={steps} />

      <ReviewsBand title="What Calgary homeowners are saying" reviews={reviews} />

      <FaqBand title="Landscape lighting FAQs" faqs={faqs} />

      <StickyCta targetId="lighting-form" label="Get a free quote" />
    </main>
  );
}
