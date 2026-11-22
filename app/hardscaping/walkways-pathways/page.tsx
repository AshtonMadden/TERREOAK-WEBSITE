import Image from "next/image";
import Link from "next/link";
import JsonLd from "../../components/JsonLd";
import StickyCta from "../../components/StickyCta";
import { Band, Button, PageHero } from "../../components/ds";
import { CardsBand, FaqBand, FormBand, ProjectCards, ReviewsBand, SplitBand, StepsBand, serviceLd } from "../../components/sections";
import { pageMeta } from "../../lib/seo";
import { jobberForm, projects, reviews, steps } from "../content";

const path = "/hardscaping/walkways-pathways";
const description =
  "Walkway and pathway installation in Calgary: paver walks, slab steppers and side-yard paths built on a drained base so they don’t settle or shift.";

export const metadata = pageMeta({
  title: "Walkway Installation Calgary | Paver Paths | TERREOAK",
  description,
  path,
  image: "/Landscape web page pics/Techo-Bloc-paver-pathway.JPG",
});

const options = [
  { title: "Paver walkways", desc: "Interlocking concrete pavers laid edge to edge for a solid, continuous path. Ideal for front entries and anywhere that gets daily use." },
  { title: "Large-format slab steppers", desc: "Big, clean slabs such as Techo-Bloc Blu 60 set with a gap between each one and decorative rock in between. A modern look for side yards." },
  { title: "Flagstone and natural stone", desc: "Irregular stone for a softer, garden-path feel that suits planted areas." },
  { title: "Side-yard paths", desc: "The narrow strip beside the house is usually mud, weeds or failing steppers. A proper path makes it usable and keeps water away from the foundation." },
  { title: "Front entry walks", desc: "The path from the driveway or sidewalk to your front door, where curb appeal and safe footing both matter." },
  { title: "Bin pads and utility pads", desc: "A level paver pad for garbage and recycling carts, or beside a gate or shed, so they aren’t sitting on dirt." },
];

const gallery = [
  { src: "/Landscape web page pics/Techo-Bloc-paver-pathway.JPG", alt: "Large-format Techo-Bloc paver pathway along the side of a Calgary home", label: "Side-yard slab path" },
  { src: "/Landscape web page pics/Finished-hardscape-project.JPG", alt: "Finished stone stepper pathway with decorative rock in McKenzie Lake", label: "Stepper path in rock" },
  { src: "/Landscape web page pics/Techo-Bloc-pavers-river-rock.JPG", alt: "Close-up of Techo-Bloc slabs set with a washed river rock border", label: "Slabs with river rock" },
  { src: "/Landscape web page pics/Calgary-hardscaping.JPG", alt: "Slab steppers being set out on landscape fabric beside a Calgary home", label: "Setting the steppers" },
  { src: "/Landscape web page pics/Techo-bloc-bin-pad.JPG", alt: "TERREOAK crew levelling large-format pavers on a prepared base", label: "Levelling each stone" },
  { src: "/hardscaping/calgary-paver-patio.jpg", alt: "Paver walkway and stepping stones joining two patios in a Calgary backyard", label: "Walkway joining two patios" },
];

const faqs = [
  {
    q: "How much does a walkway cost in Calgary?",
    a: "It depends on the length, the material and how much base work the site needs. As real examples, a stone stepper pathway we built in McKenzie Lake was a $5,000 project and a large-format Techo-Bloc side-yard path was $10,000. Every project starts with a free site visit and a fixed-price quote.",
  },
  {
    q: "What is the best material for a walkway in Calgary?",
    a: "Interlocking concrete pavers and large-format slabs handle Calgary’s freeze-thaw cycles well because they can move slightly without cracking and can be releveled if needed. Natural stone works well for garden paths.",
  },
  {
    q: "Why is my existing path sinking or uneven?",
    a: "In most cases it comes down to inadequate base depth or poor drainage when it was installed. Water gets underneath, freezes and pushes things out of place. Depending on how far it has moved, we can relay the affected sections or rebuild it on a proper base.",
  },
  {
    q: "How long does a walkway take to install?",
    a: "Many walkways are done in a few days. One of our McKenzie Lake pathway projects went from stripping the old materials to a finished path in two days. We give you a realistic timeline with the quote.",
  },
  {
    q: "Do I need a permit for a walkway?",
    a: "A walkway on your own property generally doesn’t need one. We flag any permit requirements during the quote process so you know before the work starts.",
  },
  {
    q: "Can a walkway be done at the same time as a patio?",
    a: "Yes, and it usually makes sense to. The path and the patio share the same excavation, base and materials, so they match and the yard is finished in one go.",
  },
];

const jsonLd = serviceLd({
  path,
  name: "Walkways and Pathways",
  serviceType: "Walkway and pathway installation",
  description,
  areas: ["Calgary", "Okotoks", "Airdrie", "Cochrane", "Chestermere"],
  crumbs: [
    { name: "Home", path: "/" },
    { name: "Hardscaping", path: "/hardscaping" },
    { name: "Walkways and Pathways", path },
  ],
  faqs,
});

export default function Page() {
  return (
    <main className="to-pavement to-flow overflow-x-clip">
      <JsonLd data={jsonLd} />

      <PageHero
        title="Walkway and pathway installation in Calgary."
        lead="Paver walks, slab steppers and side-yard paths that stay level, drain properly and look like they belong with the house."
        image="/Landscape web page pics/Techo-Bloc-paver-pathway.JPG"
        imageAlt="Large-format paver pathway built by TERREOAK along the side of a Calgary home"
      >
        <Button href="#walkway-form">Get a free quote</Button>
        <Button href="/hardscaping" variant="quiet" className="bg-white/5 backdrop-blur-sm">
          All hardscaping
        </Button>
      </PageHero>

      <SplitBand
        title="A path that doesn’t become a trip hazard"
        image="/Landscape web page pics/Finished-hardscape-project.JPG"
        imageAlt="Finished stone stepper pathway with decorative rock beside a Calgary home"
      >
        <p className="to-body">
          A solid walkway connects your yard and adds curb appeal at the same time. We install paved walkways using concrete pavers, flagstone and stepping stones.
        </p>
        <p className="to-body">
          Like all our installs, base prep and drainage are handled properly so the path does not settle, shift or become a trip hazard after a few winters. That’s the difference between steppers dropped on dirt and a path
          that’s still flat in ten years.
        </p>
      </SplitBand>

      <CardsBand id="options" title="Walkway and pathway options" cards={options} />

      <SplitBand
        id="base"
        title="What’s underneath is what keeps it level"
        sub="Built for freeze-thaw"
        image="/Landscape web page pics/base-prep-paverpath.JPG"
        imageAlt="Excavated and prepared base for a paver pathway along the side of a house"
        imageSide="left"
      >
        <p className="to-body">
          Most failing paths in Calgary were laid straight onto soil or a thin layer of sand. Water sits underneath, freezes, and lifts the stones a little more every winter until they rock underfoot.
        </p>
        <p className="to-body">We strip out the old materials, excavate, lay landscape fabric and build a compacted base before a single stone goes down. Each stone is then levelled by hand.</p>
        <p className="to-body">
          The same approach goes into our <Link href="/hardscaping/paver-patios-artificial-turf" className="to-link">paver patios</Link>, and our article on{" "}
          <Link href="/blog/why-open-grade-base-for-paver-patios" className="to-link">open grade base</Link> explains why it matters.
        </p>
      </SplitBand>

      <Band>
        <h2 className="to-display to-h2">Recent walkway and path work</h2>
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
        <h2 className="to-display to-h2">Featured pathway projects</h2>
        <p className="to-body mt-5">Two side-yard pathways we rebuilt in McKenzie Lake, with what each one involved and what it cost.</p>
        <div className="mt-8 md:mt-12">
          <ProjectCards projects={projects} />
        </div>
      </Band>

      <StepsBand title="How it works" steps={steps} />

      <ReviewsBand title="What Calgary homeowners are saying" reviews={reviews} />

      <FormBand id="walkway-form" title="Get a walkway quote" lead="Tell us where the path goes and what’s there now. We’ll book a free site visit and send a detailed written quote." form={jobberForm}>
        <p className="mt-6 text-[1.08rem] text-[#50565b]">
          Path on a slope?{" "}
          <Link href="/hardscaping/retaining-walls" className="font-semibold text-[#005148] underline underline-offset-4">
            See our retaining walls
          </Link>
          .
        </p>
      </FormBand>

      <FaqBand title="Walkway FAQs" faqs={faqs} />

      <StickyCta targetId="walkway-form" label="Get a free quote" />
    </main>
  );
}
