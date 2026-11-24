import Image from "next/image";
import WarrantyBand, { warranty } from "../../components/Warranty";
import Link from "next/link";
import JsonLd from "../../components/JsonLd";
import StickyCta from "../../components/StickyCta";
import { Band, Button, PageHero, Tick } from "../../components/ds";
import { CardsBand, FaqBand, FormBand, ProjectCards, ReviewsBand, SplitBand, StepsBand, serviceLd } from "../../components/sections";
import { pageMeta } from "../../lib/seo";
import { jobberForm, projects, reviews, steps } from "../content";

const path = "/hardscaping/paver-patios-artificial-turf";
const description =
  "Paver patios and artificial turf in Calgary, built on a compacted, drained base so they stay level through freeze-thaw. Free site visit and written quote.";

export const metadata = pageMeta({
  title: "Paver Patios & Artificial Turf Calgary | TERREOAK",
  description,
  path,
  image: "/hardscaping/calgary-fire-pit-patio.jpg",
});

const patioOptions = [
  { title: "Interlocking concrete pavers", desc: "The most popular choice in Calgary. Pavers flex with freeze-thaw movement instead of cracking, and a single stone can be lifted and relaid if it ever settles." },
  { title: "Large-format slabs", desc: "Clean, modern lines with fewer joints. We install lines such as Techo-Bloc Blu 60 for patios, side yards and pathways." },
  { title: "Natural stone and flagstone", desc: "Every piece is different, which gives a patio a softer, more organic look that suits garden settings." },
  { title: "Fire pit patios", desc: "A circular or curved patio built around a fire pit, with a seat wall or boulder border to frame it." },
  { title: "Walkways and stepping stones", desc: "Paver paths and steppers that connect the patio to a gate, a deck or the side of the house, built on the same base." },
  { title: "Borders and edging", desc: "Soldier courses, contrasting borders and river rock edges that finish the patio and hold everything in place." },
];

const turfUses = [
  "Shaded areas where grass struggles to grow",
  "Dog runs and high-traffic pet areas",
  "Narrow side yards that are awkward to mow",
  "The strip between a patio and a fence",
  "Play areas that need to stay green and mud-free",
  "Front yards where you want a tidy look with no mowing",
];

const gallery = [
  { src: "/hardscaping/calgary-fire-pit-patio.jpg", alt: "Aerial view of a curved paver patio with a round fire pit and boulder border in Calgary", label: "Fire pit patio" },
  { src: "/hardscaping/calgary-paver-patio.jpg", alt: "Two paver patios joined by a paver walkway and stepping stones in a Calgary backyard", label: "Paver patio and walkway" },
  { src: "/photos/fire-pit-patio-ground.jpg", alt: "Curved paver patio with a soldier-course border, a stone fire pit and a boulder seat wall", label: "Fire pit patio with boulder seating" },
  { src: "/photos/paver-patio-border.jpg", alt: "Grey slab patio with a charcoal border and a second pad joined by stepping stones", label: "Slab patio with charcoal border" },
  { src: "/photos/paver-patio-sod-aerial.jpg", alt: "Aerial view of a finished backyard with paver patios and new sod", label: "Patios and new sod, from above" },
  { src: "/Landscape web page pics/Techo-Bloc-pavers-river-rock.JPG", alt: "Close-up of Techo-Bloc slabs set with a washed river rock border", label: "Slabs with river rock" },
  { src: "/Landscape web page pics/Techo-Bloc-paver-pathway.JPG", alt: "Large-format Techo-Bloc paver pathway along the side of a Calgary home", label: "Side-yard paver path" },
  { src: "/Landscape web page pics/Finished-hardscape-project.JPG", alt: "Finished stone stepper pathway with decorative rock in McKenzie Lake", label: "Stepper pathway" },
  { src: "/Landscape web page pics/Techo-bloc-bin-pad.JPG", alt: "TERREOAK crew levelling large-format pavers on a prepared base", label: "Levelling each stone" },
];

const faqs = [
  warranty.faq,
  {
    q: "How much does a paver patio cost in Calgary?",
    a: "Exposed aggregate or paver patio projects typically range from $8,000 to $25,000 or more, depending on size and the grade of material. Every TERREOAK project starts with a free site visit and a detailed, fixed-price quote.",
  },
  {
    q: "What is the best patio material for Calgary’s climate?",
    a: "Interlocking concrete pavers and natural stone are the best options for Calgary. They handle freeze-thaw movement better than solid poured surfaces and can be releveled if needed. The key is always the base preparation underneath, not just the material on top.",
  },
  {
    q: "Do I need a permit for a paver patio?",
    a: "Most paving stone patios do not require a permit. We flag any permit requirements during the quote process so you know what is needed before the work starts.",
  },
  {
    q: "How long does a patio take to build?",
    a: "A straightforward patio install typically takes a few days to a week depending on size. Projects that combine a patio with a walkway or retaining wall may take one to two weeks.",
  },
  {
    q: "Does artificial turf work in Calgary winters?",
    a: "Yes, as long as it’s installed on a compacted, free-draining base. Snow can sit on it or be cleared with a plastic shovel, and snowmelt drains through the backing into the base below. A poor base is what causes turf to heave or hold water.",
  },
  {
    q: "Is artificial turf good for dogs?",
    a: "It’s a popular choice for dog runs because it doesn’t turn to mud or wear into bare patches. It does need rinsing from time to time, and good drainage underneath matters even more when pets are using it.",
  },
  {
    q: "Can you install a patio and artificial turf together?",
    a: "Yes, and it usually makes sense to. Both need the ground excavated and a compacted base, so doing them in one project means one mobilization, clean edges where the two meet, and a yard that’s finished all at once.",
  },
  {
    q: "Should I choose artificial turf or real sod?",
    a: "Real sod costs less to install and stays cooler in summer, and it’s the better choice for large, sunny lawns. Artificial turf suits shaded, small or heavily used areas where grass won’t thrive. We install both and will tell you honestly which fits your yard.",
  },
];

const jsonLd = serviceLd({
  path,
  name: "Paver Patios and Artificial Turf",
  serviceType: "Paver patio and artificial turf installation",
  description,
  areas: ["Calgary", "Okotoks", "Airdrie", "Cochrane", "Chestermere"],
  crumbs: [
    { name: "Home", path: "/" },
    { name: "Hardscaping", path: "/hardscaping" },
    { name: "Paver Patios and Artificial Turf", path },
  ],
  faqs,
});

export default function Page() {
  return (
    <main className="to-pavement to-flow overflow-x-clip">
      <JsonLd data={jsonLd} />

      <PageHero
        title="Paver patios and artificial turf in Calgary."
        lead="Outdoor space you’ll actually use, with far less upkeep. Built on a compacted, properly drained base so it stays level through every freeze and thaw."
        image="/hardscaping/calgary-fire-pit-patio.jpg"
        imageAlt="Aerial view of a curved paver patio with a round fire pit built by TERREOAK in Calgary"
      >
        <Button href="#patio-form">Get a free quote</Button>
        <Button href="/hardscaping" variant="quiet" className="bg-white/5 backdrop-blur-sm">
          All hardscaping
        </Button>
      </PageHero>

      <SplitBand
        title="A patio that still sits flat in ten years"
        image="/hardscaping/calgary-paver-patio.jpg"
        imageAlt="Two paver patios joined by a paver walkway and stepping stones in a Calgary backyard"
      >
        <p className="to-body">
          A well-built patio turns a backyard into a space you actually use. We install paving stone patios using interlocking concrete pavers, natural stone and flagstone, in backyards, front entries, side yards and around
          decks.
        </p>
        <p className="to-body">
          Every installation starts with proper excavation, a compacted gravel base and correct grading, so water runs away from your home and the surface stays level season after season. That part is invisible once the job
          is done, and it’s the part that decides whether a patio lasts.
        </p>
        <p className="to-body">
          Artificial turf is built the same way from the ground up, which is why the two work so well together: a patio for the furniture and the fire pit, and a green surface beside it that never needs mowing.
        </p>
      </SplitBand>

      <FormBand id="patio-form" title="Get a patio or turf quote" lead="Tell us about your yard and what you have in mind. We’ll book a free site visit and send a detailed written quote." form={jobberForm}>
        <p className="mt-6 text-[1.08rem] text-[#50565b]">
          Building on a slope?{" "}
          <Link href="/hardscaping/retaining-walls" className="font-semibold text-[#005148] underline underline-offset-4">
            See our retaining walls
          </Link>
          .
        </p>
      </FormBand>

      <CardsBand id="patio-options" title="Paver patio options" lead="Materials and layouts we install most often. We’ll bring samples to the site visit so you can see them against your house." cards={patioOptions} />

      <SplitBand
        id="base"
        title="Why the base matters more than the stone"
        sub="Built for freeze-thaw"
        image="/Landscape web page pics/how-drainage-works.jpg"
        imageAlt="Diagram showing rainwater draining through paver joints, bedding layer and open graded base into the soil"
        imageSide="left"
        contain
      >
        <p className="to-body">
          In Calgary the ground freezes and thaws dozens of times a winter. If water is trapped under a patio, it freezes, expands and pushes the surface up. That’s what causes the heaving, sinking and wobbly stones you see
          on patios that were built on a thin or poorly drained base.
        </p>
        <p className="to-body">
          We excavate to a proper depth, lay geotextile fabric, and build up a compacted base that lets water drain through instead of sitting under the stone. The surface is graded so runoff moves away from the house.
        </p>
        <p className="to-body">
          Want the detail? Read <Link href="/blog/why-open-grade-base-for-paver-patios" className="to-link">why open grade base is the gold standard for Calgary patios</Link>.
        </p>
      </SplitBand>

      {/* ARTIFICIAL TURF */}
      <Band id="artificial-turf">
        <div className="grid gap-x-20 gap-y-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <div>
            <p className="to-sub">Artificial turf</p>
            <h2 className="to-display to-h2 mt-3">Green all year, with nothing to mow</h2>
          </div>
          <div className="grid gap-5">
            <p className="to-body">
              Artificial turf gives you a clean, green surface in the places real grass has always struggled. There’s no mowing, watering or fertilizing, and it doesn’t turn to mud in spring.
            </p>
            <p className="to-body">
              It isn’t a roll of carpet on dirt. Done properly, the ground is excavated, a compacted gravel base is graded for drainage, the turf is laid and seamed, the edges are secured, and infill is brushed in so the
              blades stand up. The base is what keeps it flat and draining through a Calgary winter.
            </p>
          </div>
        </div>
        <div className="mt-8 grid gap-3 md:mt-12 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
          <figure className="relative aspect-[4/3] overflow-hidden rounded-[28px] md:col-span-2 md:aspect-[16/7] lg:col-span-1 lg:aspect-auto lg:min-h-[420px]">
            <Image src="/photos/artificial-turf-backyard.jpg" alt="Artificial turf installed in a shaded Calgary backyard around mature trees and a rock bed" fill sizes="(min-width: 1024px) 400px, 100vw" className="object-cover" />
          </figure>
          <article className="to-card p-5 md:p-8">
            <h3 className="to-display to-h3">Where artificial turf works best</h3>
            <ul className="mt-5 grid gap-3 text-[1.08rem] text-fg">
              {turfUses.map((use) => (
                <li key={use} className="flex gap-3">
                  <Tick />
                  {use}
                </li>
              ))}
            </ul>
          </article>
          <article className="to-card p-5 md:p-8">
            <h3 className="to-display to-h3">What to know before you choose it</h3>
            <ul className="mt-5 grid gap-3 text-[1.08rem] leading-relaxed text-muted">
              <li>
                <strong className="font-bold text-fg">It gets warm in direct summer sun.</strong> In a south-facing yard with no shade, that’s worth thinking about for kids and pets.
              </li>
              <li>
                <strong className="font-bold text-fg">It still needs a little care.</strong> An occasional rinse and a brush to lift the blades, more often where pets use it.
              </li>
              <li>
                <strong className="font-bold text-fg">Sometimes real grass is the better call.</strong> For a large, sunny lawn,{" "}
                <Link href="/softscapes" className="to-link">
                  new sod
                </Link>{" "}
                costs less and stays cooler. We install both and will tell you which suits your yard.
              </li>
            </ul>
          </article>
        </div>
      </Band>

      {/* COST */}
      <Band id="cost">
        <div className="to-card grid items-center gap-8 p-6 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-12 md:p-12">
          <div>
            <p className="to-sub">Typical investment</p>
            <p className="to-display mt-3 text-[2.2rem] leading-tight text-accent md:text-[2.8rem]">$8,000–$25,000+</p>
            <p className="mt-2 text-[1.05rem] text-muted">for exposed aggregate or paver patio projects</p>
          </div>
          <div className="grid gap-4">
            <p className="to-body">
              Where a project lands in that range depends on its size, the grade of material, how much excavation and grading the site needs, and extras like a fire pit, steps or a seat wall. Artificial turf is quoted by
              area once we’ve seen the site and the drainage.
            </p>
            <p className="to-body">Every project starts with a free site visit and a detailed, fixed-price quote, so you know what you’re getting and what it costs before any work begins.</p>
          </div>
        </div>
      </Band>

      {/* GALLERY */}
      <Band>
        <h2 className="to-display to-h2">Recent patio and paver work</h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-12 md:gap-5 lg:grid-cols-3">
          {gallery.map((photo) => (
            <li key={photo.src}>
              <figure className="to-card overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                </div>
                <figcaption className="px-5 py-4 text-[1.05rem] font-semibold text-fg">{photo.label}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Band>

      <Band>
        <h2 className="to-display to-h2">Featured projects</h2>
        <div className="mt-8 md:mt-12">
          <ProjectCards projects={projects} />
        </div>
      </Band>

      <WarrantyBand />

      <StepsBand title="How it works" steps={steps} />

      <ReviewsBand title="What Calgary homeowners are saying" reviews={reviews} />

      <FaqBand title="Patio and turf FAQs" faqs={faqs} />

      <StickyCta targetId="patio-form" label="Get a free quote" />
    </main>
  );
}
