import ArticlePage, { articleMeta, type ArticleSection } from "../../components/ArticlePage";
import { springPost as article } from "../posts";

export const metadata = articleMeta(article);

const answer =
  "A spring cleanup matters in Calgary because six months of snow, road salt and gravel leave a cap of dead grass and debris that seals off the soil. Power raking and core aeration break that cap so oxygen, sunlight and nutrients can reach the roots before weeds take over.";

const takeaways = [
  "Grass roots wake up once Calgary soil temperatures rise above 5°C, and they need oxygen, sunlight and nutrients.",
  "Snow that sits for 4+ months breeds grey and pink snow mold, which can kill the crown of the grass plant if it isn’t raked out.",
  "Road salt changes your soil’s chemical balance and gravel physically blocks new shoots.",
  "Power rake while the lawn is still mostly dormant. Waiting until it’s green risks tearing out healthy new shoots.",
  "Book as soon as the snow is 90% gone. The window typically runs from mid-March through late April.",
];

const sections: ArticleSection[] = [
  {
    id: "why-it-matters",
    title: "Why does a spring cleanup matter for Calgary lawns?",
    content: (
      <>
        <p>
          A great Calgary summer lawn starts in the first two weeks of April. Without it, your grass is literally gasping for air under a winter’s worth of debris.
        </p>
        <p>
          After six months of sub-zero temperatures, heavy snow packs, and road salt, your lawn isn’t just “dormant”, it’s struggling. For Calgary homeowners, the window between the final snow melt and the first heat wave is the most critical time for property maintenance. A professional spring cleanup isn’t just about aesthetics; it’s a biological requirement for a healthy, green lawn.
        </p>
      </>
    ),
  },
  {
    id: "what-happens-in-spring",
    title: "What happens to your lawn when the soil warms up?",
    content: (
      <p>
        As soil temperatures in Calgary rise above 5°C, grass roots begin to wake up from their winter slumber. They look for three things: oxygen, sunlight, and nutrients. However, a typical winter leaves behind a “cap” of dead grass, leaves, and dirt that seals off the soil. If this cap isn’t broken, the soil stays cold longer, and the roots remain dormant, allowing weeds (which are more resilient) to take over your yard before the grass even starts growing.
      </p>
    ),
  },
  {
    id: "winter-damage",
    title: "What damage does a Calgary winter do to a lawn?",
    content: (
      <>
        <h3>Snow mold and fungal disease</h3>
        <p>
          When snow sits on a Calgary lawn for 4+ months, moisture gets trapped between the grass blades and the frozen ground. This creates a perfect breeding ground for grey and pink snow mold. If not raked out quickly in spring, this fungus can kill the “crown” of the grass plant, leading to large dead patches that require expensive sod replacement later in the summer.
        </p>
        <h3>Salt, sand and gravel buildup</h3>
        <p>
          Calgary road crews use massive amounts of gravel and salt to keep our streets safe. When snow is plowed or shoved onto your lawn, this grit settles deep into the grass. Salt changes the chemical balance of your soil, making it toxic to grass roots, while the gravel physically blocks new shoots from reaching the sun.
        </p>
        <h3>Soil compaction and thatch</h3>
        <p>
          The weight of heavy Calgary snow packs compresses your soil, squeezing out the air pockets that roots need to survive. Combined with a thick layer of thatch (old dead grass), your lawn becomes “nutrient-locked,” meaning even if you water and fertilize, nothing reaches the roots.
        </p>
      </>
    ),
  },
  {
    id: "whats-included",
    title: "What does a professional spring cleanup include?",
    content: (
      <>
        <h3>Power raking (dethatching)</h3>
        <p>
          We use commercial-grade power rakes with steel tines that spin at high speeds to pull dead thatch and snow mold from the soil surface. This process “exfoliates” the lawn, allowing it to breathe and exposing the soil to the essential warmth of the spring sun. A hand rake simply cannot achieve the same level of soil-clearing.
        </p>
        <h3>Core aeration</h3>
        <p>
          Our heavy-duty core aerators remove thousands of small soil plugs from your yard. This instantly relieves soil compaction and creates direct highways for water, oxygen, and liquid fertilizer to penetrate deep into the root zone. This is the single most effective way to spark explosive spring growth.
        </p>
        <h3>Blower cleanup and detailing</h3>
        <p>
          We don’t just rake; we detail your entire property. Using high-output commercial blowers, we clear out gravel from boulevards, debris from garden beds, and salt buildup from driveways. We ensure your entire property, not just the grass, is ready for the season.
        </p>
      </>
    ),
  },
  {
    id: "common-mistakes",
    title: "What are the most common spring cleanup mistakes?",
    content: (
      <ul>
        <li>
          <strong>Waiting too long:</strong> if you wait until the grass is green to power rake, you risk tearing out the healthy new shoots. The best time is while the lawn is still mostly dormant.
        </li>
        <li>
          <strong>Ignoring the edges:</strong> salt and gravel concentrate at the edges of driveways and sidewalks. If this isn’t manually removed, the “burn” will creep into your lawn all summer.
        </li>
        <li>
          <strong>Fertilizing before cleanup:</strong> applying fertilizer on top of a thick layer of thatch is a waste of money. The nutrients will never reach the soil and will likely wash away in the next rain.
        </li>
      </ul>
    ),
  },
];

const faqs = [
  {
    q: "When should I book my Calgary spring cleanup?",
    a: "As soon as the snow is 90% gone. Typically, the window starts in mid-March and runs through late April. Booking early ensures you get your service completed before the first growth spurt.",
  },
  {
    q: "Will power raking damage my lawn?",
    a: "When done professionally at the right time (while dormant), it is highly beneficial. It removes the dead “mat” of grass so the healthy crowns can grow unobstructed.",
  },
  {
    q: "Do I need to be home for the service?",
    a: "No. As long as we have access to the yard and pets are indoors, we can complete the entire cleanup and leave your property looking pristine while you are at work.",
  },
];

const related = [
  { label: "Spring cleanup", href: "/spring-cleanup-calgary", desc: "Core aeration, power raking and debris removal for Calgary lawns." },
  { label: "Fall cleanup", href: "/fall-cleanup", desc: "Leaf removal and winter lawn prep before the first snow." },
  { label: "Softscapes", href: "/softscapes", desc: "Sod, garden beds, planting and mulch." },
];

export default function Page() {
  return <ArticlePage article={article} answer={answer} takeaways={takeaways} sections={sections} faqs={faqs} related={related} />;
}
