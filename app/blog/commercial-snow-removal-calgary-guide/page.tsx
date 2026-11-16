import Image from "next/image";
import Link from "next/link";
import ArticlePage, { articleMeta, type ArticleSection } from "../../components/ArticlePage";
import { site } from "../../lib/site";
import { commercialSnowPost as article } from "../posts";

export const metadata = articleMeta(article);

const answer =
  "Before the first big storm, Calgary property managers should have five things in writing with their snow contractor: the contract type, the trigger depth and completion time, an ice control plan that covers re-freeze, visit logs and proof of insurance, and a plan for where the snow goes.";

const takeaways = [
  "Sign before the snow flies. Property managers who wait until after the first big snowfall get whoever has routes left.",
  "For most commercial sites in Calgary, a seasonal contract with ice control included is the least headache: you know the number in October.",
  "The trigger depth and a written completion time decide whether your lot is clean at 7 a.m. or a mess until noon.",
  "Ice, not snow, is where slip-and-fall claims come from. Ask whether your contractor comes back for re-freeze after a Chinook.",
  "Visit logs with dates, times and photos can be the difference between a quick dismissal and an expensive claim.",
  "Plan pile locations and haul-away before the season, and keep drains, fire lanes and hydrants clear.",
];

const contracts = [
  {
    name: "Seasonal (flat rate)",
    how: "One price for the whole winter, usually paid monthly.",
    best: "Properties that need a fixed budget: condo boards, retail plazas, offices.",
    watch: "Make sure the contract spells out what’s included. Salting, haul-away and sidewalks are often extras.",
  },
  {
    name: "Per-push",
    how: "You pay each time the crew plows or clears after a trigger.",
    best: "Smaller lots, or owners willing to gamble on a light winter.",
    watch: "A heavy year like we get every few winters can blow way past a seasonal price.",
  },
  {
    name: "Per-event",
    how: "One charge per snowfall event, no matter how many pushes it takes.",
    best: "Mid-sized lots that want some protection from multi-day storms.",
    watch: "Get a clear definition of when an “event” starts and ends.",
  },
  {
    name: "Hourly / time and materials",
    how: "Billed by equipment hours plus materials used.",
    best: "Large or irregular sites, overflow work.",
    watch: "Hardest to budget. Ask for equipment rates in writing.",
  },
];

const questions = [
  "What’s the trigger depth, and what’s your guaranteed completion time?",
  "How many sites are on my route, and where am I in the order?",
  "Do you run your own crew and equipment, or subcontract the work out?",
  "Is ice control included? What products do you use, and do you come back for re-freeze?",
  "Are sidewalks, entrances and stairs covered, or only the drive lanes?",
  "Do you log every visit with times and photos, and can I see those logs?",
  "Can you send a certificate of insurance and WCB clearance today?",
  "Where will snow be piled, and is haul-away included?",
  "What happens if a truck breaks down mid-storm? Is there backup equipment?",
  "Who do I call at 5 a.m. if something’s wrong, and will a real person pick up?",
];

const sections: ArticleSection[] = [
  {
    id: "dont-wait",
    title: "Why is waiting for the first storm the most expensive mistake?",
    content: (
      <>
        <p>
          If you manage a commercial property in Calgary, you already know our winters don’t play fair. A Chinook rolls in, everything melts by noon, and by 6 p.m. your parking lot is a sheet of ice. Then it dumps 15 cm overnight.
        </p>
        <p>
          Here’s what I see every year. Property managers who wait until after the first big snowfall to sign a contractor get whoever’s left. That usually means the operator with no open routes, no ice control plan, and no idea when they’ll actually show up.
        </p>
        <p>
          This guide walks through what you should have locked in before the snow flies: the contract type, the triggers, ice control, liability, and where all that snow ends up. There’s a checklist at the end you can use to grill any contractor, including us.
        </p>
      </>
    ),
  },
  {
    id: "contract-types",
    title: "Seasonal, per-push or per-event: which contract fits your property?",
    content: (
      <>
        <p>
          There’s no single right answer here. It depends on your budget, how much risk you’re willing to carry, and how bad you want a predictable number on your books.
        </p>
        <figure className="grid gap-4 md:grid-cols-2">
          {contracts.map((contract) => (
            <article key={contract.name} className="to-card p-6">
              <h3 className="!mt-0">{contract.name}</h3>
              <p className="mt-3 text-[1.05rem] leading-relaxed">
                <strong>How it works:</strong> {contract.how}
              </p>
              <p className="mt-3 text-[1.05rem] leading-relaxed">
                <strong>Best for:</strong> {contract.best}
              </p>
              <p className="mt-3 text-[1.05rem] leading-relaxed">
                <strong>Watch out for:</strong> {contract.watch}
              </p>
            </article>
          ))}
        </figure>
        <p>
          My honest take: for most commercial sites in Calgary, a seasonal contract with ice control included is the least headache. You know the number in October, and nobody’s arguing over invoices in February.
        </p>
      </>
    ),
  },
  {
    id: "triggers-and-response",
    title: "What trigger depth and response time should the contract promise?",
    content: (
      <>
        <p>
          The trigger is the snow depth that sends a crew to your site. It’s one line in the contract, and it decides whether your lot is clean at 7 a.m. or a mess until noon.
        </p>
        <ul>
          <li>
            <strong>Zero-tolerance or 1–2 cm triggers.</strong> Right for hospitals, retail, restaurants and anything with early-morning foot traffic. It costs more, but there’s barely any snow on the ground when people show up.
          </li>
          <li>
            <strong>5 cm triggers.</strong> Common for offices and industrial sites where some accumulation is okay for a few hours.
          </li>
          <li>
            <strong>Completion times.</strong> Look for a written promise like “lots cleared by 7 a.m.” or “within X hours of snowfall ending”. “As soon as possible” isn’t a promise.
          </li>
          <li>
            <strong>Sidewalks.</strong> Calgary expects businesses to clear public sidewalks next to their property within 24 hours after a snowfall ends. Make sure your contract covers this, so it doesn’t fall through the cracks.
          </li>
        </ul>
        <p>
          One more thing: ask how many sites are on your contractor’s route and where you sit in the order. A crew with 60 lots and two trucks can’t hit every one before opening.
        </p>
        <Image
          src="/blog-pics/commercial-property-sidewalk-calgary.jpg"
          alt="Public sidewalk and front entrance of a commercial property in Calgary that needs clearing after every snowfall"
          width={1400}
          height={1050}
          sizes="(max-width: 1024px) 100vw, 760px"
          className="h-auto w-full"
        />
      </>
    ),
  },
  {
    id: "ice-control-and-liability",
    title: "How do ice control and liability burn property managers?",
    content: (
      <>
        <p>
          The snow itself is rarely the problem in Calgary. The real risk is the ice that forms after the snow’s gone. Freeze-thaw cycles turn meltwater into black ice by evening, and that’s when slip-and-fall claims happen.
        </p>
        <p>A solid ice control plan should cover:</p>
        <ul>
          <li>
            <strong>Pre-treating</strong> before a storm so ice can’t bond to the pavement.
          </li>
          <li>
            <strong>Post-storm salting or sanding</strong>, with the product matched to the temperature. Regular rock salt stops working well once it gets much below about −10°C.
          </li>
          <li>
            <strong>Return visits for re-freeze.</strong> This is the big one after a Chinook. Ask whether your contractor monitors and comes back, or only shows up when it snows.
          </li>
          <li>
            <strong>Entrances, ramps and stairs</strong>, not just the drive lanes.
          </li>
        </ul>
        <p>
          Then there’s documentation. If someone slips on your property, the first thing an insurer or lawyer asks is: when was the site last cleared and treated? Your contractor should log every visit with the date, time, what was done and ideally photos. Those logs can be the difference between a quick dismissal and an expensive claim.
        </p>
        <p>
          Always ask for a certificate of insurance before you sign, and check that the contractor carries commercial general liability that matches your property’s risk.
        </p>
      </>
    ),
  },
  {
    id: "snow-storage",
    title: "Where does all that snow go?",
    content: (
      <>
        <p>Nobody thinks about this until February, when the piles are taller than the light poles and eating a third of your parking stalls.</p>
        <ul>
          <li>
            <strong>Plan pile locations before the season starts.</strong> Put them on a site map and keep them away from entrances, sightlines and accessible stalls.
          </li>
          <li>
            <strong>Keep drains, fire lanes and hydrants clear.</strong> A pile on a catch basin floods the lot during the next Chinook and then freezes solid. Blocked fire lanes can bring trouble from the fire department.
          </li>
          <li>
            <strong>Think about melt runoff.</strong> Piles at the top of a slope drain across the lot and refreeze overnight, right where people walk.
          </li>
          <li>
            <strong>Budget for haul-away.</strong> Tight sites in the core or busy retail lots usually need snow trucked out at least once or twice a season. Find out whether it’s in your contract or billed separately.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "questions-to-ask",
    title: "What 10 questions should you ask a snow contractor before you sign?",
    content: (
      <>
        <ol className="grid list-decimal gap-3 pl-6 marker:font-bold marker:text-accent">
          {questions.map((question) => (
            <li key={question}>{question}</li>
          ))}
        </ol>
        <p>If a contractor gets vague on more than one or two of these, keep shopping.</p>
      </>
    ),
  },
  {
    id: "get-sorted",
    title: "How do you get your property sorted before the next storm?",
    content: (
      <>
        <p>
          TERREOAK Landscaping &amp; Snow is owner-operated. That means no subcontractors. The person quoting your site is the same person out on it at 4 a.m. We clear commercial properties across Calgary, Airdrie, Okotoks, Cochrane and Chestermere, with ice control, visit logs and clear completion times written right into the contract.
        </p>
        <Image
          src="/blog-pics/terreoak-truck-and-trailer.jpg"
          alt="TERREOAK truck and trailer on the way to a job site in Calgary"
          width={1400}
          height={1050}
          sizes="(max-width: 1024px) 100vw, 760px"
          className="h-auto w-full"
        />
        <p>
          If you’d rather not be the property manager calling around after the first dump,{" "}
          <Link href="/commercial-grounds-maintenance#commercial-form">request a free commercial snow quote</Link> or call us at <a href={site.phoneHref}>{site.phoneDisplay}</a>. You can also see everything we handle for commercial sites on our{" "}
          <Link href="/commercial-grounds-maintenance">commercial snow and grounds page</Link>.
        </p>
      </>
    ),
  },
];

const faqs = [
  {
    q: "What type of snow removal contract is best for a commercial property in Calgary?",
    a: "For most commercial sites in Calgary, a seasonal flat-rate contract with ice control included is the easiest to budget: one price for the whole winter, usually paid monthly. Per-push and per-event contracts can cost less in a light winter but can run well past a seasonal price in a heavy one.",
  },
  {
    q: "What trigger depth should a commercial snow contract have?",
    a: "It depends on the property. Hospitals, retail, restaurants and anywhere with early-morning foot traffic usually need zero-tolerance or 1–2 cm triggers. Offices and industrial sites often use a 5 cm trigger, where some accumulation is acceptable for a few hours.",
  },
  {
    q: "How soon do Calgary businesses have to clear their sidewalks?",
    a: "Calgary expects businesses to clear the public sidewalks next to their property within 24 hours after a snowfall ends, so the contract should name sidewalks specifically.",
  },
  {
    q: "Does rock salt work in Calgary’s cold?",
    a: "Regular rock salt stops working well once it gets much below about −10°C. A good ice control plan matches the product to the temperature and includes return visits when meltwater re-freezes after a Chinook.",
  },
  {
    q: "Why do snow removal visit logs matter?",
    a: "If someone slips on your property, the first question from an insurer or lawyer is when the site was last cleared and treated. Logs with the date, time, work done and photos give you that record.",
  },
  {
    q: "When should a property manager sign a snow removal contract?",
    a: "Before the first big storm. Managers who wait until after it get whichever contractors still have room, often without open routes or an ice control plan.",
  },
];

const related = [
  { label: "Commercial grounds maintenance", href: "/commercial-grounds-maintenance", desc: "Snow and ice management, plus year-round grounds care, under one contract." },
  { label: "Residential snow removal", href: "/residential-snow-removal", desc: "Flat-rate season passes for driveways and front sidewalks." },
  { label: "Why hire a snow removal company?", href: "/blog/why-hire-snow-removal-company", desc: "The homeowner’s version: bylaws, liability and injury risk." },
];

export default function Page() {
  return <ArticlePage article={article} answer={answer} takeaways={takeaways} sections={sections} faqs={faqs} related={related} />;
}
