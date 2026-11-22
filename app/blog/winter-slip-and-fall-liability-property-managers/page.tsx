import Link from "next/link";
import ArticlePage, { articleMeta, type ArticleSection } from "../../components/ArticlePage";
import { liabilityPost as article } from "../posts";

export const metadata = articleMeta(article);

const answer =
  "In Alberta, whoever controls a property has a duty to take reasonable care that visitors are safe on it, and that includes winter conditions. You can’t prevent every patch of ice, so what protects a property manager is being able to show a reasonable system was in place and was followed: a written snow and ice plan, a contractor who logs every visit, and records you can produce years later.";

const takeaways = [
  "The legal standard is reasonable care, not perfection. The question after a fall is whether a sensible system existed and was followed.",
  "A time-stamped record of every visit, with what was done and photos, is the most useful evidence you can have.",
  "Hiring a contractor doesn’t automatically move the responsibility to them. The contract has to say who does what, and when.",
  "Keep records for years, not weeks. Claims are often filed long after the day of the fall.",
  "Check your contractor’s insurance and WCB coverage every season, and keep a copy of the certificate.",
  "This is general information, not legal advice. Review your own situation with your insurer or a lawyer.",
];

const sections: ArticleSection[] = [
  {
    id: "duty-of-care",
    title: "What is a property manager responsible for in winter?",
    content: (
      <>
        <p>
          Alberta’s Occupiers’ Liability Act puts a duty on the “occupier” of a property, meaning whoever has control of it, to take reasonable care that visitors are reasonably safe. On a commercial property that can include the
          owner, the property management company and sometimes a tenant, depending on who controls which areas.
        </p>
        <p>
          The important word is <strong>reasonable</strong>. Nobody expects a parking lot in a Calgary January to be bone dry at every moment. What gets examined after a fall is whether there was a sensible system for dealing
          with snow and ice, and whether that system was actually followed on the day.
        </p>
        <p>
          Separately, the City of Calgary expects the public sidewalks next to a property to be cleared within 24 hours of a snowfall ending. That’s a bylaw matter rather than a liability one, but it’s part of the same job.
        </p>
      </>
    ),
  },
  {
    id: "what-gets-asked",
    title: "What gets asked after someone slips?",
    content: (
      <>
        <p>When an insurer or a lawyer looks at a winter fall, the questions are very consistent:</p>
        <ul>
          <li>When did it last snow, and when did the temperature last cross freezing?</li>
          <li>When was that exact area last cleared, and last treated for ice?</li>
          <li>Who did the work, and what did they apply?</li>
          <li>Was there a written plan or contract that set out how often the site would be serviced?</li>
          <li>Was the plan followed that day?</li>
          <li>Had anyone reported the hazard beforehand, and what was done about it?</li>
        </ul>
        <p>If you can answer those with documents rather than from memory, you’re in a strong position. If the answer is “the contractor usually comes by”, you aren’t.</p>
      </>
    ),
  },
  {
    id: "records",
    title: "What records should you keep?",
    content: (
      <>
        <h3>From your contractor</h3>
        <ul>
          <li>
            <strong>A log of every visit:</strong> date, arrival and departure time, areas serviced, and what was applied.
          </li>
          <li>
            <strong>Time-stamped photos</strong> of the site after each visit, particularly entrances, stairs and walkways.
          </li>
          <li>
            <strong>Weather notes</strong> for the day, such as snowfall and temperature.
          </li>
          <li>
            <strong>The signed contract,</strong> including the trigger depth, completion times and the scope of ice control.
          </li>
          <li>
            <strong>A current certificate of insurance and WCB clearance.</strong>
          </li>
        </ul>
        <h3>From your own side</h3>
        <ul>
          <li>A site map showing priority areas, snow pile locations and drains.</li>
          <li>A record of every complaint or hazard report, and what was done in response.</li>
          <li>An incident report for any fall, written the same day, with photos of the area.</li>
          <li>Notes from any inspections your own staff carry out.</li>
        </ul>
      </>
    ),
  },
  {
    id: "how-long",
    title: "How long should you keep them?",
    content: (
      <>
        <p>
          Longer than most people think. In Alberta a claim can generally be started up to two years after the person knew, or ought to have known, about their injury, so a fall this winter may not turn into a claim until well
          after the snow has gone and the contract has ended.
        </p>
        <p>
          A sensible habit is to keep every season’s logs, photos, contract and insurance certificates for several years, stored somewhere that doesn’t depend on one person’s inbox or a contractor’s app you may no longer have
          access to. Ask your insurer what retention period they recommend.
        </p>
      </>
    ),
  },
  {
    id: "contractor-responsibility",
    title: "Does hiring a contractor transfer the liability?",
    content: (
      <>
        <p>Not automatically. Hiring a competent contractor is part of taking reasonable care, but the details in the contract decide how much of the responsibility actually sits with them. Check that it covers:</p>
        <ul>
          <li>
            <strong>Scope.</strong> Exactly which areas are included. Gaps between “the lot” and “the walkways” are where problems happen.
          </li>
          <li>
            <strong>Triggers and timing.</strong> What depth of snow sends a crew, and when the work will be finished.
          </li>
          <li>
            <strong>Ice control.</strong> Whether return visits for re-freeze are included or only happen when you call.
          </li>
          <li>
            <strong>Documentation.</strong> That visit logs and photos are provided to you, not just kept by the contractor.
          </li>
          <li>
            <strong>Insurance.</strong> The contractor’s commercial general liability limit, and whether your organization is named as an additional insured.
          </li>
        </ul>
        <p>
          Our <Link href="/blog/commercial-snow-removal-calgary-guide">guide to commercial snow contracts</Link> goes through each of these, with 10 questions to ask before you sign.
        </p>
      </>
    ),
  },
  {
    id: "practical-steps",
    title: "What practical steps reduce your risk?",
    content: (
      <>
        <ol className="grid list-decimal gap-3 pl-6 marker:font-bold marker:text-accent">
          <li>Sign your snow contract before the first snowfall, with scope, triggers and ice control in writing.</li>
          <li>Walk the site with your contractor in the fall and agree on priority areas and snow pile locations.</li>
          <li>Make sure visit logs and photos are sent to you after every service, and file them as they arrive.</li>
          <li>Give tenants and staff one clear way to report ice, and record what happens with each report.</li>
          <li>Fix the causes you can: downspouts that drain across walkways, burnt-out exterior lights, low spots that pond.</li>
          <li>After any fall, write an incident report that day and photograph the area before conditions change.</li>
        </ol>
        <p>
          If you’d like to see what visit records look like in practice, our <Link href="/commercial-snow-removal">commercial snow removal</Link> service logs every visit with the time, the work done and photos.
        </p>
      </>
    ),
  },
];

const faqs = [
  {
    q: "Who is liable if someone slips on ice at a commercial property in Alberta?",
    a: "Under Alberta’s Occupiers’ Liability Act, the occupier, meaning whoever controls the property, owes visitors a duty of reasonable care. That can include the owner, the property manager and sometimes a tenant. Liability depends on whether reasonable steps were taken, not simply on the fact that someone fell.",
  },
  {
    q: "Does hiring a snow removal contractor protect me from liability?",
    a: "It helps, because hiring a competent contractor is part of taking reasonable care, but it doesn’t automatically transfer responsibility. The contract needs to set out the scope, triggers, ice control and documentation clearly.",
  },
  {
    q: "What should a snow removal log include?",
    a: "The date, arrival and departure times, the areas serviced, what was applied for ice control, the weather conditions and time-stamped photos of the site after the visit.",
  },
  {
    q: "How long should I keep snow removal records?",
    a: "For several years. In Alberta a claim can generally be started up to two years after the injured person knew or ought to have known about the injury, so records need to outlast the season. Ask your insurer what they recommend.",
  },
  {
    q: "Is this legal advice?",
    a: "No. This is general information for property managers. For advice on a specific property or incident, speak to your insurer or a lawyer.",
  },
];

const related = [
  { label: "Commercial snow removal", href: "/commercial-snow-removal", desc: "Every visit logged with the time, the work done and photos." },
  { label: "Snow contracts: a property manager’s guide", href: "/blog/commercial-snow-removal-calgary-guide", desc: "Contract types, triggers and 10 questions to ask." },
  { label: "Ice control for commercial properties", href: "/blog/commercial-ice-control-calgary", desc: "Which product works at which temperature." },
];

export default function Page() {
  return <ArticlePage article={article} answer={answer} takeaways={takeaways} sections={sections} faqs={faqs} related={related} />;
}
