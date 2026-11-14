import Link from "next/link";
import ArticlePage, { articleMeta, type ArticleSection } from "../../components/ArticlePage";
import { snowFaqs } from "../../residential-snow-removal/faqs";
import { snowPost as article } from "../posts";

export const metadata = articleMeta(article);

const answer =
  "Hiring a professional snow removal company in Calgary protects you from bylaw fines and slip-and-fall liability, spares you the injury risk of shovelling heavy snow, and keeps your home looking lived in while you’re away.";

const takeaways = [
  "Calgary bylaws require property owners to clear snow and ice from adjacent public sidewalks within 24 hours of the snowfall ending.",
  "If someone slips on your icy sidewalk, you can be held legally liable. Time-stamped photo logs give you a record of every clearing.",
  "Shovelling wet, heavy snow is a leading cause of winter back injuries, muscle strains and cardiovascular emergencies.",
  "Untouched snow signals an empty house. A maintained driveway keeps your home looking lived in while you travel.",
  "TERREOAK runs route-based season passes in South Calgary, clears a full route in 12 hours on average, and does not take one-off calls during storms.",
];

const sections: ArticleSection[] = [
  {
    id: "why-hire",
    title: "Why hire a snow removal company in Calgary?",
    content: (
      <>
        <p>
          Calgary winters are unpredictable. A professional snow removal service isn’t just a luxury, it’s about protecting your health, your liability, and your peace of mind.
        </p>
        <p>
          When the temperature drops and the heavy snow falls, shoveling the driveway is the last thing anyone wants to do. But avoiding the cold isn’t the only, or even the most important, reason to hire a professional snow removal company. From avoiding costly bylaw fines to preventing serious physical injuries, having a dedicated snow removal crew on a route-based season pass is one of the smartest investments a homeowner can make.
        </p>
      </>
    ),
  },
  {
    id: "bylaw-and-liability",
    title: "What does Calgary’s snow bylaw require, and who is liable?",
    content: (
      <>
        <p>
          Under Calgary city bylaws, property owners are required to clear snow and ice from public sidewalks adjacent to their property within 24 hours of the snowfall ending. If you fail to do so, the city can issue hefty fines and hire a contractor to do it at your expense.
        </p>
        <p>
          Worse than a fine is the risk of a slip-and-fall lawsuit. If a pedestrian, delivery driver, or letter carrier slips on your icy sidewalk, you can be held legally liable. A professional snow removal service acts as an insurance policy. At TERREOAK, we service your property once every 24 hours during a snowfall and maintain detailed photo logs of every property we service, giving you a time-stamped record if a claim is ever made.
        </p>
      </>
    ),
  },
  {
    id: "hidden-costs",
    title: "What are the hidden costs of shovelling it yourself?",
    content: (
      <>
        <h3>Physical strain and injury risk</h3>
        <p>
          Shoveling wet, heavy snow is one of the leading causes of winter back injuries, muscle strains, and even cardiovascular emergencies. Professional crews use commercial-grade equipment like snowblowers, power sweepers, and truck plows to move heavy snow effortlessly, keeping you out of the cold and out of the hospital.
        </p>
        <h3>Travel limitations for snowbirds</h3>
        <p>
          Whether you are traveling for a week or spending the entire winter somewhere warm, leaving your driveway unplowed is a massive security risk. Untouched snow is a clear signal to burglars that a home is vacant. Having a professional service maintain your driveway ensures your home looks actively lived in, while ensuring you return to a clean property. TERREOAK offers{" "}
          <Link href="/residential-snow-removal">snowbird and vacation passes</Link> from 1 to 8 weeks for exactly this.
        </p>
        <h3>Property damage</h3>
        <p>
          Inexperienced shovelers or neighborhood kids using metal shovels and ice chippers often cause thousands of dollars in damage to concrete driveways, interlock pavers, and lawn edges. Professionals use specialized driveway markers and non-destructive scraping tools to ensure your property remains pristine until spring.
        </p>
      </>
    ),
  },
  {
    id: "terreoak-difference",
    title: "How is TERREOAK’s snow removal different?",
    content: (
      <>
        <h3>Route-based reliability</h3>
        <p>
          We do not accept “one-off” calls during storms. Our crews run tight, exclusive routes in South Calgary for our season-pass holders only. This guarantees that your property is always serviced quickly and consistently, no matter how bad the storm gets.
        </p>
        <h3>Once every 24 hours guarantee</h3>
        <p>
          We guarantee to service your property once every 24 hours during continuous snowfall, and within 24 hours of the snowfall ending. If we miss that window for any reason, we send a crew back at no charge. On average, our team clears a full route in 12 hours. We take our service times very seriously.
        </p>
        <h3>Email updates and photo logs</h3>
        <p>
          You never have to wonder if the plow is coming. We send email notifications before our crews are dispatched to your route, and we capture time-stamped photo logs of your completed driveway for total peace of mind.
        </p>
      </>
    ),
  },
];

const related = [
  { label: "Residential snow removal", href: "/residential-snow-removal", desc: "Flat-rate season passes for driveways and front sidewalks in South Calgary." },
  { label: "Commercial grounds maintenance", href: "/commercial-grounds-maintenance", desc: "Snow and ice management for condos, HOAs and business parks." },
  { label: "Irrigation blowouts", href: "/irrigation-blowouts", desc: "Winterize your sprinkler system before the hard freeze." },
];

export default function Page() {
  return <ArticlePage article={article} answer={answer} takeaways={takeaways} sections={sections} faqs={snowFaqs.slice(0, 5)} related={related} />;
}
