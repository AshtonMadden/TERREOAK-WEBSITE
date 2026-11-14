import ArticlePage, { articleMeta, type ArticleSection } from "../../components/ArticlePage";
import { basePost as article } from "../posts";

export const metadata = articleMeta(article);

const answer =
  "An open grade base is the better choice for Calgary paver patios because it uses clean crushed rock with no fines, so water drains through instead of being trapped. A dry base doesn’t heave when it freezes, which is what makes patios built on road crush go wavy after a winter.";

const takeaways = [
  "Calgary sits on heavy, expansive clay that absorbs water and expands in winter (frost heave).",
  "Road crush contains fines that wick moisture up into the base. That moisture expands by roughly 9% when it freezes and pushes pavers up.",
  "Open grade base is clean crushed rock with zero fines and roughly 40% air voids, so water drains straight through.",
  "TERREOAK excavates 10 to 12 inches, lays woven geotextile, then 4 to 6 inches of 20mm clear stone and a 1 inch bedding layer of 7mm washed stone.",
  "Clear stone costs about 20 to 30% more per yard than road crush, but repairing a wavy patio can cost 50 to 70% of the original install.",
];

const sections: ArticleSection[] = [
  {
    id: "why-patios-go-wavy",
    title: "Why do Calgary patios go wavy after one winter?",
    content: (
      <>
        <p>
          If you’ve ever seen a beautiful Calgary patio that’s suddenly “wavy” or uneven after just one winter, you’ve witnessed the failure of traditional road crush in local hardscaping.
        </p>
        <p>
          Building a luxury patio in Calgary isn’t just about picking the right Techo-Bloc or Belgard pavers; it’s about what happens six inches below the surface. In the landscaping industry, there’s a constant debate between “traditional base” and “open grade base.” For TERREOAK, the choice is clear. In the high-altitude, extreme-climate environment of Calgary, open grade base is the only way to ensure a lifetime of stability.
        </p>
      </>
    ),
  },
  {
    id: "open-grade-vs-road-crush",
    title: "What is the difference between open grade base and road crush?",
    content: (
      <>
        <p>
          Calgary is built on heavy, expansive clay. If you dig more than a foot into your backyard, you will likely hit a thick, greyish layer of soil that holds moisture like a sponge. In the summer, this clay dries out and cracks; in the winter, it absorbs water and expands (frost heave).
        </p>
        <p>
          Traditional “road crush” (also known as 20mm minus) contains tiny dust particles called fines. These fines are designed to pack tightly together to create a solid surface for roads. However, in a patio application, these fines act as a wick. They pull moisture from the clay upward into the base. When that moisture freezes during a Calgary winter, it expands by roughly 9%, pushing your pavers upward and creating that “wavy” look come spring.
        </p>
        <div className="to-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">&nbsp;</th>
                <th scope="col">Traditional base (road crush)</th>
                <th scope="col">Open grade base</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Material</th>
                <td>20mm minus, containing tiny dust particles (fines)</td>
                <td>Clean crushed rock with zero fines</td>
              </tr>
              <tr>
                <th scope="row">What happens to water</th>
                <td>Fines act as a wick, pulling water into the base and trapping it</td>
                <td>Water drains through the stone into the subgrade</td>
              </tr>
              <tr>
                <th scope="row">Result in winter</th>
                <td>Ice expansion and inevitable movement</td>
                <td>The base stays dry and stable during frost cycles</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    id: "chinooks",
    title: "How do Chinooks affect a patio base?",
    content: (
      <>
        <p>
          Calgary is unique because of our Chinooks. We can experience a 20-degree temperature swing in 24 hours. This causes rapid melting of surface snow. On a traditional patio base, that melt water hits the frozen, dust-filled road crush and has nowhere to go. It pools under the pavers, then re-freezes at night, causing aggressive “jacking” of the stones.
        </p>
        <p>With an open grade system, that Chinook melt water flows instantly through the stones and away from the installation.</p>
      </>
    ),
  },
  {
    id: "how-we-build-it",
    title: "How does TERREOAK build an open grade base?",
    content: (
      <>
        <h3>Phase 1: excavation and geotextile</h3>
        <p>
          We excavate to a minimum depth of 10-12 inches. Before a single stone is dropped, we install a high-performance woven geotextile fabric. This is a critical barrier that prevents the heavy structural clear stone from mixing with and sinking into the soft Calgary clay subgrade. Without this fabric, the base will eventually fail regardless of the material used.
        </p>
        <h3>Phase 2: 20mm clear stone</h3>
        <p>
          We install a 4-6 inch deep layer of <strong>20mm clear crushed rock</strong>. This rock has zero fines, meaning it contains roughly 40% air voids. These voids are what allow water to move freely and provide space for any internal moisture to expand without pushing the rock upward.
        </p>
        <h3>Phase 3: the “choke” layer (7mm stone)</h3>
        <p>
          To create a smooth setting bed, we “choke” the 20mm layer with a 1 inch bedding layer of <strong>7mm washed stone</strong> (often called bird’s eye). Unlike bedding sand, 7mm stone won’t wash away into the base below or hold water. It provides a perfectly level surface that locks the top pavers into place without settling.
        </p>
        <h3>Phase 4: G2 polymeric sand</h3>
        <p>
          Finally, we sweep in advanced G2 polymeric sand. This industrial-strength sand hardens when misted with water, creating a flexible, weed-resistant barrier. Because the base is free-draining, the polymeric sand stays dry and lasts significantly longer than it would on a traditional damp road crush base.
        </p>
      </>
    ),
  },
  {
    id: "is-it-worth-it",
    title: "Is an open grade base worth the extra cost?",
    content: (
      <>
        <h3>98% immediate compaction</h3>
        <p>
          Traditional base requires multiple passes with a compactor and just the right amount of water. Open grade stone “settles” into a structural state almost instantly. This means we aren’t guessing if it’s compacted; we know it is rock solid from day one.
        </p>
        <h3>Superior drainage</h3>
        <p>
          Open grade base can drain up to 4,000 inches of rain per hour. Even in a flash Calgary thunderstorm, your patio will remain clear of standing water, protecting your foundation and surrounding landscape from erosion.
        </p>
        <h3>Lower lifecycle cost</h3>
        <p>
          Repairing a “wavy” patio can cost 50-70% of the original installation price. By investing an extra 10-15% in materials upfront for an open grade system, you eliminate the need for future re-leveling, effectively making it the cheaper option over a 10-year period.
        </p>
      </>
    ),
  },
];

const faqs = [
  {
    q: "Is open grade base more expensive?",
    a: "Yes, clear stone generally costs 20-30% more than road crush per yard, and the specialized geotextile adds a small cost. However, the labor time is often reduced because compaction is faster.",
  },
  {
    q: "Can I use open grade base for my driveway?",
    a: "Absolutely. In fact, it is highly recommended for permeable driveway installations to handle heavy vehicle loads and drainage simultaneously.",
  },
  {
    q: "Does an open grade base attract weeds?",
    a: "Actually, it achieves the opposite. Because the base stays dry, weed seeds that land in the joints have a harder time germinating compared to the damp, soil-rich environment of a traditional base.",
  },
];

const related = [
  { label: "Hardscaping", href: "/hardscaping", desc: "Patios, retaining walls, walkways and steps built for freeze-thaw." },
  { label: "Landscape installs", href: "/landscape-installs", desc: "Full design and build, with typical Calgary price ranges." },
  { label: "McKenzie Lake Techo-Bloc project", href: "/projects/mckenzie-lake-landscaping", desc: "See a compacted base and large-format pavers in a real install." },
];

export default function Page() {
  return <ArticlePage article={article} answer={answer} takeaways={takeaways} sections={sections} faqs={faqs} related={related} />;
}
