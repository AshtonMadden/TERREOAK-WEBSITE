import Image from "next/image";
import Link from "next/link";
import ArticlePage, { articleMeta, type ArticleSection } from "../../components/ArticlePage";
import { aerationPost as article } from "../posts";

export const metadata = articleMeta(article);

const answer =
  "The best time to aerate a lawn in Calgary is in spring, once the frost is out of the ground and the soil is moist but not soggy, which is usually mid-April into May. Early fall, from late August through September, is the second good window. Avoid aerating frozen, waterlogged or bone-dry soil.";

const takeaways = [
  "Spring (roughly mid-April into May) and early fall (late August through September) are the two good windows in Calgary.",
  "The soil should be thawed and moist. If a screwdriver won’t push in easily, it’s too dry or still frozen.",
  "Calgary’s heavy clay soil compacts easily, so most lawns here benefit from core aeration every year.",
  "Use core aeration, which pulls plugs out of the soil. Spike aeration only pokes holes and can make compaction worse.",
  "Leave the plugs on the lawn. They break down in a week or two and feed the soil.",
  "Right after aerating is the best moment to fertilize and overseed, because seed and nutrients fall straight into the holes.",
];

const sections: ArticleSection[] = [
  {
    id: "best-time",
    title: "When is the best time to aerate a lawn in Calgary?",
    content: (
      <>
        <p>
          Aerate when the grass is actively growing or about to be, and when the soil is soft enough for the machine to pull a proper plug. In Calgary that gives you two windows.
        </p>
        <ul>
          <li>
            <strong>Spring: roughly mid-April into May.</strong> The frost needs to be out of the ground and the lawn should have dried out enough that you aren’t leaving ruts. This is the most popular time because it pairs
            naturally with a <Link href="/spring-cleanup-calgary">spring cleanup</Link> and gives roots the whole growing season to take advantage of it.
          </li>
          <li>
            <strong>Early fall: late August through September.</strong> The soil is still warm, the summer heat has eased, and the grass puts its energy into roots before winter. It’s a great time to aerate and overseed
            together.
          </li>
        </ul>
        <p>
          Calgary’s spring doesn’t follow the calendar, so go by the ground, not the date. A late snowfall or a cold, wet April can push the window back by a couple of weeks.
        </p>
      </>
    ),
  },
  {
    id: "why-calgary-lawns-need-it",
    title: "Why do Calgary lawns need aerating?",
    content: (
      <>
        <p>
          Most Calgary yards sit on heavy clay. Clay holds nutrients well, but it packs down tight under foot traffic, mowers, kids, dogs and months of snow load. Once it’s compacted, water runs off instead of soaking in, and
          roots stay shallow because they can’t push through.
        </p>
        <p>
          Core aeration pulls thousands of small plugs out of the lawn. Those holes let air, water and fertilizer reach the root zone, and they give roots room to grow deeper. Deeper roots are what get a lawn through a dry
          Calgary July without turning brown.
        </p>
        <Image
          src="/spring-cleanup-pics/Calgary-Core-Aeration.JPG"
          alt="Soil plugs left on a Calgary lawn after core aeration"
          width={1400}
          height={1050}
          sizes="(max-width: 1024px) 100vw, 760px"
          className="h-auto w-full"
        />
      </>
    ),
  },
  {
    id: "signs",
    title: "How do you know your lawn needs aerating?",
    content: (
      <>
        <ul>
          <li>Water pools or runs off when you water, instead of soaking in.</li>
          <li>The ground feels hard, and a screwdriver is difficult to push in even when the soil is damp.</li>
          <li>The grass is thin or patchy in the areas that get walked on the most.</li>
          <li>The lawn dries out and browns quickly in summer, even with regular watering.</li>
          <li>Your home is a newer build. Construction equipment compacts the subsoil, and new-build lawns are often laid over very little topsoil.</li>
        </ul>
        <p>If one or two of these sound familiar, aeration is likely to make a visible difference within a season.</p>
      </>
    ),
  },
  {
    id: "how-to-prepare",
    title: "How should you prepare, and what happens afterwards?",
    content: (
      <>
        <h3>Before</h3>
        <ul>
          <li>Water the lawn the day before if it hasn’t rained, so the tines can pull full-depth plugs.</li>
          <li>Mark sprinkler heads, shallow irrigation lines and invisible dog fences. An aerator will damage anything just under the surface.</li>
          <li>Mow first, and pick up toys, hoses and debris.</li>
        </ul>
        <h3>After</h3>
        <ul>
          <li>
            <strong>Leave the plugs where they fall.</strong> They look messy for a week or two, then break down and return nutrients to the lawn.
          </li>
          <li>
            <strong>Fertilize and overseed right away.</strong> The holes are the best seedbed your lawn will have all year.
          </li>
          <li>
            <strong>Water regularly</strong> for the next couple of weeks, especially if you’ve overseeded.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "aeration-vs-power-raking",
    title: "Is aeration the same as power raking?",
    content: (
      <>
        <p>
          No. They solve different problems. Aeration deals with what’s happening <em>in</em> the soil: compaction. Power raking deals with what’s sitting <em>on top</em> of it: a layer of dead grass called thatch.
        </p>
        <p>
          Many Calgary lawns benefit from both in spring, with power raking done first to clear the surface and aeration second to open up the soil. Our{" "}
          <Link href="/blog/power-raking-calgary-guide">guide to power raking in Calgary</Link> covers when it helps and when to skip it.
        </p>
      </>
    ),
  },
  {
    id: "how-often",
    title: "How often should you aerate?",
    content: (
      <>
        <p>
          For most Calgary lawns on clay, once a year is the right rhythm. Lawns with heavy traffic, or newer lawns on compacted construction soil, can benefit from aerating in both spring and fall for the first couple of
          years.
        </p>
        <p>
          The one time to hold off is on brand-new sod or freshly seeded grass. Give new sod a full season to root before running an aerator over it.
        </p>
      </>
    ),
  },
];

const faqs = [
  {
    q: "What month should I aerate my lawn in Calgary?",
    a: "Usually between mid-April and the end of May in spring, or from late August through September in fall. Go by the ground conditions: the frost should be out and the soil moist but not soggy.",
  },
  {
    q: "Can you aerate too early in spring?",
    a: "Yes. If the ground is still frozen the machine can’t pull plugs, and if it’s waterlogged from snowmelt you’ll leave ruts and smear the clay. Wait until the lawn has firmed up.",
  },
  {
    q: "Should I pick up the plugs after aerating?",
    a: "No. Leave them on the lawn. They break down within a week or two and return nutrients and soil microbes to the surface.",
  },
  {
    q: "Should I aerate or power rake first?",
    a: "Power rake first to clear the dead grass off the surface, then aerate. That way the aerator pulls clean plugs and seed and fertilizer can reach the soil.",
  },
  {
    q: "Is core aeration better than spike aeration?",
    a: "Yes, especially on Calgary’s clay. Core aeration removes plugs of soil and relieves compaction. Spike aeration only pushes holes into the ground, which can compact the soil around each hole even more.",
  },
  {
    q: "Should I fertilize after aerating?",
    a: "Yes. Right after aeration is the most effective time to fertilize and overseed, because nutrients and seed fall directly into the holes and reach the root zone.",
  },
];

const related = [
  { label: "Spring cleanup", href: "/spring-cleanup-calgary", desc: "Core aeration, power raking and debris removal for Calgary lawns." },
  { label: "Power raking in Calgary", href: "/blog/power-raking-calgary-guide", desc: "When power raking helps, and when to skip it." },
  { label: "Why spring cleanup matters", href: "/blog/why-calgary-spring-cleanup-matters", desc: "What a Calgary winter does to a lawn." },
];

export default function Page() {
  return <ArticlePage article={article} answer={answer} takeaways={takeaways} sections={sections} faqs={faqs} related={related} />;
}
