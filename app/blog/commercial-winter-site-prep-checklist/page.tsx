import Link from "next/link";
import ArticlePage, { articleMeta, type ArticleSection } from "../../components/ArticlePage";
import { sitePrepPost as article } from "../posts";

export const metadata = articleMeta(article);

const answer =
  "Get a commercial property ready for a Calgary winter before the first snowfall: sign the snow contract, walk the site with your contractor, mark the hazards that will be hidden under snow, decide where snow will be piled, and tell tenants how it will all work. Most mid-winter problems trace back to something that wasn’t settled in the fall.";

const takeaways = [
  "Do the site walk in September or October, while you can still see curbs, drains and landscaping.",
  "Mark anything a plow can hit or bury: curbs, islands, hydrants, catch basins, speed bumps and sprinkler heads.",
  "Choose snow pile locations on purpose, away from entrances, sightlines, accessible stalls, drains and fire lanes.",
  "Agree on priority areas and the order they’re cleared in, and write it on a site map.",
  "Fix drainage, lighting and downspout problems in the fall. They become ice problems in January.",
  "Tell tenants where to park during clearing and how to report ice.",
];

const checklist = [
  {
    title: "Paperwork",
    items: [
      "Snow and ice contract signed, with trigger depth, completion times and ice control in writing",
      "Current certificate of insurance and WCB clearance on file",
      "After-hours contact numbers exchanged, including a backup",
      "How visit logs and photos will be delivered, and to whom",
    ],
  },
  {
    title: "Site walk",
    items: [
      "Priority areas agreed: entrances, accessible stalls, ramps, stairs, loading docks",
      "Clearing order and opening times noted for each building",
      "Snow pile locations chosen and marked on a site map",
      "Areas that must stay clear identified: fire lanes, hydrants, gas meters, garbage enclosures",
    ],
  },
  {
    title: "Marking and protection",
    items: [
      "Stakes along curbs, islands and the edges of walkways",
      "Catch basins, speed bumps and raised manholes flagged",
      "Sprinkler heads and low landscape lighting marked or removed",
      "Young trees and shrubs near pile areas protected",
    ],
  },
  {
    title: "Repairs before freeze-up",
    items: [
      "Catch basins and drains cleared of leaves",
      "Downspouts redirected away from walkways",
      "Potholes and heaved pavement patched, since plows catch on them",
      "Exterior and parking lot lights checked and replaced",
      "Irrigation system blown out",
    ],
  },
  {
    title: "People",
    items: [
      "Tenants told where to park during and after a snowfall",
      "One clear way to report ice or a missed area",
      "Entrance mats and wet-floor signs ready inside",
      "Staff know where sand or ice melt is kept for emergencies",
    ],
  },
];

const sections: ArticleSection[] = [
  {
    id: "why-fall",
    title: "Why does winter prep have to happen in the fall?",
    content: (
      <>
        <p>
          Once the snow is down, you can’t see the things that matter. A curb, a catch basin and a sprinkler head all look the same under 20 cm of snow, and the first time anyone finds out where they are is when a plow blade
          does.
        </p>
        <p>
          The fall is also when contractors still have room. By the first storm, the good ones have full routes, and the decisions you’d normally make calmly get made in a hurry. A couple of hours in September or October saves
          most of the phone calls you’d otherwise make in January.
        </p>
      </>
    ),
  },
  {
    id: "checklist",
    title: "What should a pre-season checklist cover?",
    content: (
      <>
        <p>Work through these five areas with your contractor before the first snowfall.</p>
        <figure className="grid gap-4 md:grid-cols-2">
          {checklist.map((group) => (
            <article key={group.title} className="to-card p-6">
              <h3 className="!mt-0">{group.title}</h3>
              <ul className="mt-4">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </figure>
      </>
    ),
  },
  {
    id: "snow-storage",
    title: "Where should snow be piled?",
    content: (
      <>
        <p>This is the decision that causes the most trouble when it’s left to the operator at 4 a.m. Good pile locations have a few things in common:</p>
        <ul>
          <li>
            <strong>Downhill from where people walk,</strong> so meltwater drains away from the lot rather than across it.
          </li>
          <li>
            <strong>Clear of drains.</strong> A pile on a catch basin floods the lot in the next Chinook and then freezes solid.
          </li>
          <li>
            <strong>Out of sightlines</strong> at entrances and exits, where drivers need to see traffic and pedestrians.
          </li>
          <li>
            <strong>Away from accessible stalls, fire lanes and hydrants.</strong>
          </li>
          <li>
            <strong>Somewhere the sun reaches,</strong> if you have the choice. A pile in permanent shade lasts into May.
          </li>
        </ul>
        <p>
          Then work out what happens when the piles get too big. On tight sites snow has to be hauled away once or twice a season. Find out now whether that’s in your contract or billed separately.
        </p>
      </>
    ),
  },
  {
    id: "communication",
    title: "What should tenants and staff be told?",
    content: (
      <>
        <p>A short notice before winter prevents a lot of friction. It should cover:</p>
        <ul>
          <li>When clearing normally happens and what the trigger is, so nobody expects a plow for a dusting.</li>
          <li>Where to park, or not park, so crews can clear whole rows instead of working around cars.</li>
          <li>Who to contact about ice or a missed area, and that reports are logged.</li>
          <li>What tenants are responsible for themselves, if anything, such as their own doorways.</li>
        </ul>
        <p>Cars left in the lot overnight are the most common reason a property isn’t fully cleared by morning. Telling people in advance is the only fix.</p>
      </>
    ),
  },
  {
    id: "mid-season",
    title: "What should you check once winter is underway?",
    content: (
      <>
        <ul>
          <li>After the first real snowfall, walk the site and compare it with what was agreed. Raise anything missed straight away.</li>
          <li>Check that visit logs and photos are arriving after every service.</li>
          <li>Watch the pile locations. If one is draining across a walkway, move it before it becomes a habit.</li>
          <li>Replace stakes that have been knocked down.</li>
          <li>Look at shaded walkways and entrances on the afternoon after a melt, when re-freeze is setting in.</li>
        </ul>
        <p>
          For the contract side of all this, see our <Link href="/blog/commercial-snow-removal-calgary-guide">property manager’s guide to snow contracts</Link>. If you’d like a contractor who does the fall site walk with you,
          that’s the first step of our <Link href="/commercial-snow-removal">commercial snow removal</Link> service.
        </p>
      </>
    ),
  },
];

const faqs = [
  {
    q: "When should a commercial property be prepared for winter in Calgary?",
    a: "In September or October, before the first snowfall. The site walk needs to happen while curbs, drains and landscaping are still visible, and contractors still have room on their routes.",
  },
  {
    q: "Why are stakes put along curbs before winter?",
    a: "So plow operators can see where curbs, islands and walkway edges are once they’re buried. It prevents damage to the property and the equipment, and keeps snow from being pushed onto landscaping.",
  },
  {
    q: "Where should snow be piled in a parking lot?",
    a: "Away from entrances, sightlines, accessible stalls, fire lanes, hydrants and catch basins, and ideally downhill from where people walk so meltwater drains away instead of refreezing on the lot.",
  },
  {
    q: "What should be fixed before the ground freezes?",
    a: "Blocked catch basins, downspouts that drain across walkways, potholes and heaved pavement, and burnt-out exterior lights. The irrigation system should also be blown out.",
  },
  {
    q: "Why isn’t my lot fully cleared in the morning?",
    a: "Most often because cars were left parked overnight and crews had to work around them. A notice telling tenants where to park during a snowfall solves most of it.",
  },
];

const related = [
  { label: "Commercial snow removal", href: "/commercial-snow-removal", desc: "Starts with a site assessment and a plan for your property." },
  { label: "Snow contracts: a property manager’s guide", href: "/blog/commercial-snow-removal-calgary-guide", desc: "Contract types, triggers and 10 questions to ask." },
  { label: "Irrigation blowouts", href: "/irrigation-blowouts", desc: "Winterize the sprinkler system before the hard freeze." },
];

export default function Page() {
  return <ArticlePage article={article} answer={answer} takeaways={takeaways} sections={sections} faqs={faqs} related={related} />;
}
