import Link from "next/link";
import ArticlePage, { articleMeta, type ArticleSection } from "../../components/ArticlePage";
import { costGuidePost as article } from "../posts";

export const metadata = articleMeta(article);

const answer =
  "Landscaping in Calgary typically costs $2,000 to $6,000 for a basic sod installation, $8,000 to $25,000 or more for a patio, from $5,000 for a retaining wall, and $20,000 to $60,000 or more for a full yard transformation. Where a project lands depends on its size, materials, and how much excavation, grading and drainage work the site needs.";

const takeaways = [
  "Basic sod installation on a standard lot: $2,000 to $6,000.",
  "Exposed aggregate or paver patios: $8,000 to $25,000 or more.",
  "Retaining walls: from $5,000, rising with height, length and engineering.",
  "Full yard design-build for a new home: $20,000 to $60,000 or more.",
  "The work you can’t see, like excavation, base and drainage, is a large share of the price and the part that makes it last.",
  "A fixed-price written quote after a site visit is the only number worth planning around.",
];

const ranges = [
  { title: "Sod and grading", range: "$2,000–$6,000", desc: "A basic sod installation on a standard Calgary lot, depending on lawn size, grading required and soil prep.", href: "/softscapes/sod-installation", label: "Sod installation" },
  { title: "Patios and hardscapes", range: "$8,000–$25,000+", desc: "Exposed aggregate or paver patio projects, depending on size and material grade.", href: "/hardscaping/paver-patios-artificial-turf", label: "Paver patios" },
  { title: "Retaining walls", range: "From $5,000", desc: "Retaining wall installations scale with height, length and engineering requirements.", href: "/hardscaping/retaining-walls", label: "Retaining walls" },
  { title: "Full yard transformations", range: "$20,000–$60,000+", desc: "Full yard design-build transformations for new homes.", href: "/landscape-installs", label: "Landscape installs" },
];

const examples = [
  { title: "Front yard sod and rock beds, Cranston", cost: "$3,150", desc: "Dead lawn removed, new soil brought in, Kentucky Bluegrass sod laid, and the beds refreshed with Rundle rock and a feature boulder.", href: "/projects/cranston-landscape-makeover" },
  { title: "Front yard overhaul, Parkland", cost: "$4,000", desc: "An old wood-bordered garden rebuilt as a rock garden with a concrete-set border, new planting, river rock and a Rundle boulder.", href: "/parklandlandscaping" },
  { title: "Stone stepper pathway, McKenzie Lake", cost: "$5,000", desc: "An outdated rock and stepping-stone path stripped out and rebuilt on a proper base in two days.", href: "/mckenzielakelandscaping" },
  { title: "Techo-Bloc side-yard path, McKenzie Lake", cost: "$10,000", desc: "Failing aggregate steppers replaced with large-format Techo-Bloc Blu 60 pavers and a washed river rock border.", href: "/projects/mckenzie-lake-landscaping" },
];

const sections: ArticleSection[] = [
  {
    id: "price-ranges",
    title: "How much does landscaping cost in Calgary?",
    content: (
      <>
        <p>
          Landscaping project costs in Calgary vary widely based on scope, materials and site conditions. These are the ranges we see on our own projects, and they’re a reasonable starting point for a budget.
        </p>
        <figure className="grid gap-4 md:grid-cols-2">
          {ranges.map((item) => (
            <article key={item.title} className="to-card p-6">
              <h3 className="!mt-0">{item.title}</h3>
              <p className="mt-3 text-[1.6rem] font-bold leading-tight text-accent">{item.range}</p>
              <p className="mt-3 text-[1.05rem] leading-relaxed">{item.desc}</p>
              <p className="mt-3 text-[1.05rem]">
                <Link href={item.href}>{item.label}</Link>
              </p>
            </article>
          ))}
        </figure>
        <p>These are ranges, not quotes. Two patios of the same size can be thousands of dollars apart once you account for access, slope and the stone you choose.</p>
      </>
    ),
  },
  {
    id: "real-projects",
    title: "What did real Calgary projects cost?",
    content: (
      <>
        <p>Ranges only tell you so much. Here are four projects we’ve completed, with what was done and what each one cost.</p>
        <figure className="grid gap-4 md:grid-cols-2">
          {examples.map((item) => (
            <article key={item.title} className="to-card p-6">
              <h3 className="!mt-0">{item.title}</h3>
              <p className="mt-3 text-[1.6rem] font-bold leading-tight text-accent">{item.cost}</p>
              <p className="mt-3 text-[1.05rem] leading-relaxed">{item.desc}</p>
              <p className="mt-3 text-[1.05rem]">
                <Link href={item.href}>See the project</Link>
              </p>
            </article>
          ))}
        </figure>
      </>
    ),
  },
  {
    id: "what-drives-cost",
    title: "What drives the cost of a landscaping project?",
    content: (
      <>
        <ul>
          <li>
            <strong>Size.</strong> Square footage of patio, length of wall, area of lawn. It’s the biggest single factor.
          </li>
          <li>
            <strong>Materials.</strong> A standard paver and a premium large-format slab can differ a lot in price per square foot, as can block and natural stone.
          </li>
          <li>
            <strong>Excavation and base.</strong> Digging out, hauling away, and building a compacted, drained base. You never see it once the job is finished, and it’s what stops the work from heaving.
          </li>
          <li>
            <strong>Grading and drainage.</strong> If water runs toward the house or pools in the yard, fixing that comes first.
          </li>
          <li>
            <strong>Access.</strong> A wide-open new-build lot is quicker to work on than a fenced backyard reached through a narrow side gate.
          </li>
          <li>
            <strong>Demolition.</strong> Removing an old patio, a rotting timber wall or a dead lawn adds labour and disposal.
          </li>
          <li>
            <strong>Permits and engineering.</strong> Retaining walls over 1.2 metres generally need a permit, and walls over 1.5 metres also need engineered drawings.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "why-quotes-differ",
    title: "Why do landscaping quotes vary so much?",
    content: (
      <>
        <p>When two quotes for the same job are far apart, the difference is almost always in the part you can’t see.</p>
        <p>
          A lower price often means a thinner base, less excavation, no fabric, or no allowance for drainage. The patio looks identical on the day it’s finished. The difference shows up after two or three Calgary winters, when
          one is still flat and the other has started to heave.
        </p>
        <p>To compare quotes fairly, ask each contractor:</p>
        <ul>
          <li>How deep are you excavating, and what goes back in as base?</li>
          <li>How is drainage being handled?</li>
          <li>Is removal and disposal of the old materials included?</li>
          <li>Is the price fixed, or an estimate that can change?</li>
          <li>Are you insured, and is the work photographed as it’s built?</li>
        </ul>
        <p>
          Our article on <Link href="/blog/why-open-grade-base-for-paver-patios">open grade base</Link> explains what a proper base involves.
        </p>
      </>
    ),
  },
  {
    id: "budgeting",
    title: "How can you make a landscaping budget go further?",
    content: (
      <>
        <ul>
          <li>
            <strong>Build in phases.</strong> We can design the full yard and build it across one or more seasons, so the design stays cohesive without paying for it all at once.
          </li>
          <li>
            <strong>Do the groundwork first.</strong> Grading, drainage and retaining walls come before patios and planting. Getting them right avoids tearing up finished work later.
          </li>
          <li>
            <strong>Combine trades.</strong> Doing the patio, wall and sod in one project means one mobilization and nothing redone.
          </li>
          <li>
            <strong>Spend on the base, save on the finish.</strong> A mid-range paver on an excellent base will outlast a premium one on a poor base.
          </li>
          <li>
            <strong>Book early.</strong> Spring schedules fill quickly, and planning in winter gives you the pick of the calendar.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "getting-a-quote",
    title: "How do you get an accurate price?",
    content: (
      <>
        <p>
          A real number needs a site visit. Slope, soil, access and drainage can’t be judged from a photo, and they’re where budgets go wrong.
        </p>
        <p>
          Every TERREOAK project starts with a free on-site consultation and a detailed, fixed-price quote. We don’t do vague estimates: you’ll know exactly what you’re getting and what it costs before any work begins.{" "}
          <Link href="/landscape-installs#landscape-form">Request a site visit</Link> to get started.
        </p>
      </>
    ),
  },
];

const faqs = [
  {
    q: "How much does landscaping cost in Calgary?",
    a: "As a general guide: $2,000 to $6,000 for a basic sod installation, $8,000 to $25,000 or more for a paver or exposed aggregate patio, from $5,000 for a retaining wall, and $20,000 to $60,000 or more for a full yard design-build on a new home.",
  },
  {
    q: "How much does a backyard patio cost in Calgary?",
    a: "Exposed aggregate or paver patio projects typically range from $8,000 to $25,000 or more, depending on size and the grade of material.",
  },
  {
    q: "How much does it cost to landscape a new build?",
    a: "Full yard design-build transformations for new homes commonly range from $20,000 to $60,000 or more. Sod and grading alone on a standard lot is typically $2,000 to $6,000.",
  },
  {
    q: "Can I landscape my yard in phases?",
    a: "Yes. If budget or timing is a consideration, we can design your full yard plan and build it in phases across one or more seasons, so the design stays cohesive.",
  },
  {
    q: "Why is one landscaping quote much cheaper than another?",
    a: "Usually because of the work you can’t see: the depth of excavation, the base and the drainage. Those are the first things cut to lower a price, and they’re what decide whether the work lasts.",
  },
  {
    q: "Are these prices a quote?",
    a: "No. They’re typical ranges to help with budgeting. Every project is priced after a free site visit, with a detailed, fixed-price written quote.",
  },
];

const related = [
  { label: "Landscape installs", href: "/landscape-installs", desc: "Full design and build, start to finish." },
  { label: "Paver patios and artificial turf", href: "/hardscaping/paver-patios-artificial-turf", desc: "Patio options, base preparation and costs." },
  { label: "Retaining walls", href: "/hardscaping/retaining-walls", desc: "What makes them last, permits and costs." },
  { label: "Sod installation", href: "/softscapes/sod-installation", desc: "New lawns on properly prepared soil." },
];

export default function Page() {
  return <ArticlePage article={article} answer={answer} takeaways={takeaways} sections={sections} faqs={faqs} related={related} />;
}
