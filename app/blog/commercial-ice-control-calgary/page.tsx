import Link from "next/link";
import ArticlePage, { articleMeta, type ArticleSection } from "../../components/ArticlePage";
import { iceControlPost as article } from "../posts";

export const metadata = articleMeta(article);

const answer =
  "On a Calgary commercial property, ice control means choosing the right product for the temperature and applying it at the right moment. Rock salt works down to about −10°C, treated salts and chloride blends work in deeper cold, and sand adds traction when nothing will melt. The plan also has to cover re-freeze after a Chinook, which is when most slips happen.";

const takeaways = [
  "Rock salt loses most of its melting power below about −10°C. Below that you need a treated salt or a calcium or magnesium chloride product.",
  "Sand and grit don’t melt anything. They add traction, which makes them the fallback in extreme cold.",
  "Pre-treating before a storm stops ice from bonding to the pavement and makes clearing faster.",
  "The riskiest hours in Calgary come after a Chinook, when meltwater refreezes at sundown.",
  "Entrances, ramps, stairs, accessible stalls and shaded north-facing areas need attention before open pavement does.",
  "More product is not better. Over-salting damages concrete, kills turf and plantings, and gets tracked indoors.",
];

const products = [
  { name: "Rock salt (sodium chloride)", works: "Down to about −10°C", notes: "The cheapest option and the standard for mild winter days. It slows to a crawl in deeper cold." },
  { name: "Treated or blended salt", works: "Colder than plain salt", notes: "Rock salt coated with a liquid chloride so it starts working faster and keeps working in lower temperatures." },
  { name: "Calcium or magnesium chloride", works: "Well below −10°C", notes: "Works in deep cold and acts quickly. Costs more, so it’s usually reserved for cold snaps and high-risk areas." },
  { name: "Sand or grit", works: "Any temperature", notes: "Gives traction but melts nothing. Needs sweeping up in spring and can clog catch basins." },
];

const sections: ArticleSection[] = [
  {
    id: "why-ice-is-the-real-risk",
    title: "Why is ice a bigger risk than snow in Calgary?",
    content: (
      <>
        <p>
          Snow is visible. People slow down for it, and a plow deals with it. Ice is the problem that’s left behind, and Calgary makes more of it than most cities because of how often the temperature swings across zero.
        </p>
        <p>
          A Chinook can take a site from −15°C to +8°C in an afternoon. Snow piles melt, water runs across the lot, and when the sun goes down it freezes into a clear sheet right where people walk from their cars. That cycle can
          repeat for days after a single snowfall, long after the plowing is finished.
        </p>
        <p>That’s why a snow contract that only responds to snowfall leaves a gap. The ice shows up on days when it hasn’t snowed at all.</p>
      </>
    ),
  },
  {
    id: "products",
    title: "Salt, sand or ice melt: which product works when?",
    content: (
      <>
        <p>No single product covers a Calgary winter. Each one has a temperature range where it earns its keep.</p>
        <figure className="grid gap-4 md:grid-cols-2">
          {products.map((product) => (
            <article key={product.name} className="to-card p-6">
              <h3 className="!mt-0">{product.name}</h3>
              <p className="mt-3 text-[1.05rem] leading-relaxed">
                <strong>Works:</strong> {product.works}
              </p>
              <p className="mt-3 text-[1.05rem] leading-relaxed">{product.notes}</p>
            </article>
          ))}
        </figure>
        <p>
          A good contractor switches between these as the forecast changes rather than spreading one product all winter. It’s worth asking exactly what they use and at what temperature they change over.
        </p>
      </>
    ),
  },
  {
    id: "timing",
    title: "When should ice control be applied?",
    content: (
      <>
        <ul>
          <li>
            <strong>Before the storm.</strong> Pre-treating pavement stops snow and ice from bonding to it. The lot clears more cleanly afterwards and needs less product overall.
          </li>
          <li>
            <strong>After clearing.</strong> A light application once the snow has been pushed deals with the thin layer a plow or shovel leaves behind.
          </li>
          <li>
            <strong>When it refreezes.</strong> This is the visit that gets missed. After a melt, somebody has to come back in the late afternoon or evening and treat the areas where water has run.
          </li>
          <li>
            <strong>During freezing rain.</strong> Rare in Calgary, but the most dangerous condition there is. It needs treatment while it’s happening, not afterwards.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "priority-areas",
    title: "Which areas of a property should be treated first?",
    content: (
      <>
        <p>Open pavement in the sun usually looks after itself. The trouble spots are predictable, and they should be written into the site plan:</p>
        <ul>
          <li>Building entrances and the first few metres outside every door.</li>
          <li>Stairs, ramps and curb cuts.</li>
          <li>Accessible parking stalls and the path from them to the door.</li>
          <li>North-facing walkways and anywhere a building casts shade all day.</li>
          <li>Low spots and the area downhill from snow piles, where meltwater collects.</li>
          <li>Under downspouts and roof edges that drip onto walkways.</li>
          <li>Loading docks and garbage enclosures, where staff walk on packed snow.</li>
        </ul>
      </>
    ),
  },
  {
    id: "over-salting",
    title: "Can you use too much salt?",
    content: (
      <>
        <p>Yes, and it’s a common mistake. Past the point where the ice has been dealt with, extra product does nothing except cause damage:</p>
        <ul>
          <li>Chlorides speed up scaling and spalling on concrete, especially concrete that’s only a year or two old.</li>
          <li>Salt that washes into beds and lawn edges burns turf and shrubs, and you see the result in spring.</li>
          <li>Granules get tracked into lobbies and onto floors, which is a cleaning cost and a slip risk of its own.</li>
          <li>Runoff carries it into storm drains.</li>
        </ul>
        <p>The right amount is the least that does the job, applied evenly. If you’re seeing white crusts and piles of granules by the doors, too much is going down.</p>
      </>
    ),
  },
  {
    id: "what-to-ask",
    title: "What should you ask your contractor about ice control?",
    content: (
      <>
        <ul>
          <li>Is ice control included in the contract price, or billed per application?</li>
          <li>Which products do you use, and at what temperature do you switch?</li>
          <li>Do you pre-treat before a forecast storm?</li>
          <li>Do you come back for re-freeze after a Chinook, without being called?</li>
          <li>Are entrances, stairs and ramps treated by hand, or only the areas a truck can reach?</li>
          <li>Is every application logged with a time and photos?</li>
        </ul>
        <p>
          Our <Link href="/blog/commercial-snow-removal-calgary-guide">property manager’s guide to snow contracts</Link> covers the rest of what to lock in, and our{" "}
          <Link href="/commercial-snow-removal">commercial snow removal</Link> page explains how we handle ice control on the sites we look after.
        </p>
      </>
    ),
  },
];

const faqs = [
  {
    q: "At what temperature does rock salt stop working?",
    a: "Regular rock salt loses most of its effectiveness below about −10°C. In colder weather a treated salt or a calcium or magnesium chloride product is needed, with sand for traction when nothing will melt.",
  },
  {
    q: "Is sand or salt better for a parking lot?",
    a: "They do different jobs. Salt melts ice within its temperature range; sand only adds traction. In deep cold sand is often the practical choice, but it has to be swept up in spring and can block drains.",
  },
  {
    q: "What is pre-treating?",
    a: "Applying a de-icing product to pavement before a storm arrives. It stops snow and ice from bonding to the surface, so the lot clears more cleanly and needs less product afterwards.",
  },
  {
    q: "Why is my lot icy when it hasn’t snowed?",
    a: "Usually re-freeze. During a Chinook or a sunny afternoon, snow piles melt and water runs across the pavement, then freezes when the temperature drops in the evening.",
  },
  {
    q: "Does de-icing salt damage concrete?",
    a: "It can. Chlorides speed up surface scaling, particularly on newer concrete, and over-application makes it worse. Using the least product that does the job reduces the damage.",
  },
];

const related = [
  { label: "Commercial snow removal", href: "/commercial-snow-removal", desc: "Parking lot plowing, sidewalk clearing, ice control and visit logs." },
  { label: "Snow contracts: a property manager’s guide", href: "/blog/commercial-snow-removal-calgary-guide", desc: "Contract types, triggers and 10 questions to ask." },
  { label: "Winter liability and records", href: "/blog/winter-slip-and-fall-liability-property-managers", desc: "What to document to protect your property." },
];

export default function Page() {
  return <ArticlePage article={article} answer={answer} takeaways={takeaways} sections={sections} faqs={faqs} related={related} />;
}
