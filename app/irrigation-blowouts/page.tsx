import JsonLd from "../components/JsonLd";
import StickyCta from "../components/StickyCta";
import { Band, BlogCta, Button, PageHero, Tick } from "../components/ds";
import { FaqBand, FormBand, HeroStats, StepsBand, serviceLd } from "../components/sections";
import { pageMeta } from "../lib/seo";

const path = "/irrigation-blowouts";
const description =
  "Protect your sprinkler system from freezing. Book professional irrigation blowouts and winterization services in Calgary with TERREOAK.";

export const metadata = pageMeta({
  title: "Sprinkler & Irrigation Blowouts Calgary | TERREOAK",
  description,
  path,
  image: "/images/irrigation-hero.jpg",
});

const stats = [
  { end: 65, suffix: "+", label: "Total properties" },
  { end: 58, suffix: "+", label: "Happy clients" },
  { end: 2, label: "TERREOAK crews" },
];

const offers = [
  "Main line shut-off & drain",
  "High-volume air purge",
  "Backflow preventer winterization",
  "Controller power down",
  "System status report",
  "Standard & priority scheduling",
];

const steps = [
  { title: "Book your blowout", desc: "Select your preferred date for winterization." },
  { title: "Site preparation", desc: "Ensure your water is shut off and controller is accessible." },
  { title: "System winterization", desc: "Our tech purges the system and secures all components." },
];

const guarantees = [
  {
    title: "Freeze-free guarantee",
    desc: "We guarantee our blowout results. If we performed the blowout and a line cracks from freezing, we fix it.",
  },
  {
    title: "Reliable scheduling guarantee",
    desc: "We stick to our scheduled dates so your system is winterized before the hard freeze hits.",
  },
];

const faqs = [
  {
    q: "When should I schedule my blowout?",
    a: "It's best to schedule between mid-September and mid-October. You want to ensure the blowout is completed before the first sustained ground frost.",
  },
  {
    q: "What if my water is still on?",
    a: "We require you to shut off your main irrigation valve and drain your backflow before we arrive. If you need help, we can provide instructions.",
  },
  {
    q: "Does this protect the whole system?",
    a: "Yes, our high-volume purge forces water out of all lateral lines, main lines, and individual heads.",
  },
];

const jobberForm = {
  clienthubId: "41b3399e-3795-43d8-afe2-e6c38c1b3e6e-2240716",
  formUrl:
    "https://clienthub.getjobber.com/client_hubs/41b3399e-3795-43d8-afe2-e6c38c1b3e6e/public/work_request/embedded_work_request_form?form_id=2240716",
};

const jsonLd = serviceLd({
  path,
  name: "Irrigation Blowouts",
  serviceType: "Sprinkler system blowout and winterization",
  description,
  crumbs: [{ name: "Irrigation Blowouts", path }],
  faqs,
});

export default function IrrigationBlowoutsPage() {
  return (
    <main className="to-pavement to-flow overflow-x-clip">
      <JsonLd data={jsonLd} />

      <PageHero
        title={
          <>
            Calgary irrigation blowouts. <span className="block">Protect your pipes.</span>
          </>
        }
        lead="Professional winterization services to safeguard your irrigation system."
        image="/images/irrigation-hero.jpg"
        imageAlt="Sprinkler system being winterized in Calgary"
        footer={<HeroStats stats={stats} />}
      >
        <Button href="#blowout-form">Book your blowout</Button>
        <Button href="#how-it-works" variant="quiet" className="bg-white/5 backdrop-blur-sm">
          See how it works
        </Button>
      </PageHero>

      {/* WHAT WE OFFER */}
      <Band>
        <h2 className="to-display to-h2">What we offer</h2>
        <p className="to-body mt-5">Professional winterization services to safeguard your irrigation system.</p>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer) => (
            <li key={offer} className="to-card flex items-start gap-4 p-7 text-[1.2rem] font-bold text-fg">
              <Tick />
              {offer}
            </li>
          ))}
        </ul>
      </Band>

      <FormBand
        id="blowout-form"
        title="Request an estimate"
        lead="Tell us about your property and we'll get back to you with a professional estimate for your irrigation blowout."
        form={jobberForm}
      />

      {/* INTRO */}
      <Band>
        <h2 className="to-display to-h2 max-w-[24ch]">Calgary irrigation winterization that’s built for winter</h2>
        <div className="mt-8 grid gap-x-16 gap-y-5 lg:grid-cols-2">
          <p className="to-body">
            In Calgary, the frost line goes deep, and even a small amount of water left in your irrigation lines can lead to cracked pipes, burst heads, and damaged backflow preventers. Our irrigation blowout service uses commercial-grade high-volume compressors to systematically purge every zone of your system, ensuring they are completely dry and safe for the sub-zero temperatures ahead.
          </p>
          <p className="to-body">
            Don’t risk expensive repairs in the spring. Our experienced technicians understand the complexities of various system types and follow a rigorous checklist to ensure your main line is drained, your backflow is winterized, and your system is fully protected against freeze damage.
          </p>
        </div>
        <div className="mt-8">
          <Button href="#blowout-form">Book your blowout</Button>
        </div>
      </Band>

      <StepsBand id="how-it-works" title="How it works" steps={steps} />

      {/* GUARANTEES */}
      <Band>
        <h2 className="to-display to-h2">Guarantees</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {guarantees.map((guarantee) => (
            <article key={guarantee.title} className="to-card p-8 md:p-10">
              <h3 className="to-display to-h3">{guarantee.title}</h3>
              <p className="mt-4 text-[1.12rem] leading-relaxed text-muted">{guarantee.desc}</p>
            </article>
          ))}
        </div>
      </Band>

      <FaqBand faqs={faqs} />

      <BlogCta>
        <Button href="/fall-cleanup" variant="quiet">
          Fall cleanup
        </Button>
      </BlogCta>

      <StickyCta targetId="blowout-form" label="Book your blowout" />
    </main>
  );
}
