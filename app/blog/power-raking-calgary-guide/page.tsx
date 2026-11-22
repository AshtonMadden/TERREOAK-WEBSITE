import Image from "next/image";
import Link from "next/link";
import ArticlePage, { articleMeta, type ArticleSection } from "../../components/ArticlePage";
import { powerRakingPost as article } from "../posts";

export const metadata = articleMeta(article);

const answer =
  "Power raking is a spring service that uses a machine with spinning tines to pull the layer of dead grass, called thatch, out of your lawn. In Calgary it’s best done in early spring, once the snow is gone and the lawn has dried out but before the grass is growing strongly. Not every lawn needs it every year.";

const takeaways = [
  "Power raking removes thatch: the mat of dead grass, roots and debris sitting between the green blades and the soil.",
  "A thin layer of thatch is healthy. It becomes a problem when it’s thicker than about half an inch (roughly 1.25 cm).",
  "The window in Calgary is early spring: after the snow is gone and the lawn is dry, but before strong green-up.",
  "Never power rake a wet lawn, a lawn that’s already lush and green, or new sod that hasn’t rooted.",
  "Power raking clears the surface and aeration opens the soil. They do different jobs and work well together.",
  "Follow it with fertilizer and overseeding to thicken up the lawn while the soil is exposed.",
];

const sections: ArticleSection[] = [
  {
    id: "what-is-power-raking",
    title: "What is power raking?",
    content: (
      <>
        <p>
          Power raking uses a machine with rows of spinning metal tines that comb through the lawn and lift out thatch. Thatch is the layer of dead grass, old roots and debris that builds up between the green blades and the
          soil surface.
        </p>
        <p>
          After a Calgary winter, that layer is usually at its worst. Months of snow press it flat into a mat, sometimes with grey or pink snow mold growing through it. A good power rake pulls up a surprising amount: it’s
          normal to fill several bags from an average yard.
        </p>
        <Image
          src="/spring-cleanup-pics/Power-raking-services.JPG"
          alt="Thatch pulled to the surface of a Calgary lawn during power raking"
          width={1400}
          height={1050}
          sizes="(max-width: 1024px) 100vw, 760px"
          className="h-auto w-full"
        />
      </>
    ),
  },
  {
    id: "does-my-lawn-need-it",
    title: "Does your lawn actually need power raking?",
    content: (
      <>
        <p>
          Not always. A thin layer of thatch is good for a lawn: it cushions the soil and holds moisture. It becomes a problem when it gets thicker than about half an inch, because water, air and fertilizer can’t get through
          it to the roots.
        </p>
        <p>Signs it’s time:</p>
        <ul>
          <li>The lawn feels spongy or bouncy when you walk on it.</li>
          <li>You can see a brown, matted layer when you part the grass and look at the base.</li>
          <li>Water beads up or runs off instead of soaking in.</li>
          <li>There are grey or pinkish matted patches after the snow melts, which is snow mold.</li>
          <li>The lawn is slow to green up in spring compared with your neighbours’.</li>
        </ul>
        <p>
          A simple check: cut a small wedge out of the lawn with a trowel and look at the brown layer between the green grass and the dark soil. If it’s thicker than your thumbnail is wide, power raking will help.
        </p>
      </>
    ),
  },
  {
    id: "when-to-power-rake",
    title: "When should you power rake in Calgary?",
    content: (
      <>
        <p>
          Early spring, in a fairly short window. The snow needs to be gone and the lawn needs to be dry enough to walk on without leaving footprints, but the grass should still be mostly dormant. In a typical year that falls
          somewhere between late March and the end of April.
        </p>
        <p>Timing matters in both directions:</p>
        <ul>
          <li>
            <strong>Too early,</strong> while the ground is wet, and the tines tear up the turf and pull grass out by the roots.
          </li>
          <li>
            <strong>Too late,</strong> once the lawn is green and growing, and you rip out healthy new shoots along with the dead material.
          </li>
        </ul>
        <p>
          That’s why spring cleanup slots fill quickly. If you want your lawn done in the right window, it’s worth <Link href="/spring-cleanup-calgary#spring-cleanup-form">booking before the snow is gone</Link>.
        </p>
      </>
    ),
  },
  {
    id: "power-raking-vs-dethatching-vs-aeration",
    title: "What’s the difference between power raking, dethatching and aeration?",
    content: (
      <>
        <p>These three get mixed up all the time. Here’s how they differ.</p>
        <figure className="grid gap-4 md:grid-cols-3">
          <article className="to-card p-6">
            <h3 className="!mt-0">Power raking</h3>
            <p className="mt-3 text-[1.05rem] leading-relaxed">Spinning tines comb dead grass and debris off the surface. Aggressive, fast, and ideal for clearing winter build-up in spring.</p>
          </article>
          <article className="to-card p-6">
            <h3 className="!mt-0">Dethatching</h3>
            <p className="mt-3 text-[1.05rem] leading-relaxed">
              The general name for removing thatch. In Calgary the two words are used for the same service; elsewhere “dethatching” can mean a gentler pass with spring tines.
            </p>
          </article>
          <article className="to-card p-6">
            <h3 className="!mt-0">Core aeration</h3>
            <p className="mt-3 text-[1.05rem] leading-relaxed">Hollow tines pull plugs out of the soil to relieve compaction. It works below the surface, where power raking works on top of it.</p>
          </article>
        </figure>
        <p>
          On Calgary’s clay soil, the best spring results usually come from doing both: power rake first to clear the surface, then aerate to open up the soil. Our{" "}
          <Link href="/blog/when-to-aerate-lawn-calgary">guide to aerating in Calgary</Link> covers the aeration side.
        </p>
      </>
    ),
  },
  {
    id: "when-not-to",
    title: "When should you not power rake?",
    content: (
      <>
        <ul>
          <li>
            <strong>New sod.</strong> Sod laid in the last year hasn’t rooted deeply enough and can be torn up.
          </li>
          <li>
            <strong>A wet lawn.</strong> Wait until it has dried out after the melt or after rain.
          </li>
          <li>
            <strong>A lawn that’s already green and growing.</strong> You’ll do more harm than good. Aerate instead and power rake next spring.
          </li>
          <li>
            <strong>A thin, struggling lawn with very little thatch.</strong> The problem is more likely compaction or poor soil, which aeration and topdressing fix better.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "after-power-raking",
    title: "What should you do after power raking?",
    content: (
      <>
        <p>Your lawn will look rough for a week or two. That’s normal: you’ve just removed the dead layer that was hiding the thin spots. To help it bounce back:</p>
        <Image
          src="/photos/power-raking-bagging-thatch.jpg"
          alt="TERREOAK crew bagging the thatch pulled out of a Calgary lawn by power raking"
          width={1500}
          height={2000}
          sizes="(max-width: 1024px) 100vw, 760px"
          className="h-auto w-full"
        />
        <ul>
          <li>
            <strong>Aerate</strong> if the soil is compacted, while the surface is clear.
          </li>
          <li>
            <strong>Fertilize</strong> to feed the new growth.
          </li>
          <li>
            <strong>Overseed</strong> any bare or thin patches while the soil is exposed.
          </li>
          <li>
            <strong>Water</strong> lightly and regularly until the lawn fills in.
          </li>
        </ul>
        <p>
          A professional <Link href="/spring-cleanup-calgary">spring cleanup</Link> bundles the raking, bagging and clean-up into one visit, so you aren’t left with a yard full of thatch to deal with.
        </p>
      </>
    ),
  },
];

const faqs = [
  {
    q: "When should I power rake my lawn in Calgary?",
    a: "In early spring, once the snow is gone and the lawn is dry enough to walk on, but before the grass is growing strongly. In a typical year that’s between late March and the end of April.",
  },
  {
    q: "Is power raking the same as dethatching?",
    a: "In Calgary the two terms are used for the same service: mechanically removing the layer of dead grass from a lawn. Elsewhere, dethatching can refer to a gentler pass with spring tines.",
  },
  {
    q: "Do I need to power rake every year?",
    a: "Not necessarily. It depends on how much thatch has built up. If the layer is thinner than about half an inch, you can skip a year and aerate instead.",
  },
  {
    q: "Can power raking damage my lawn?",
    a: "It can if it’s done at the wrong time. Power raking a wet lawn, a lawn that’s already green and growing, or sod that hasn’t rooted can tear out healthy grass. Done in the right window it helps the lawn.",
  },
  {
    q: "Should I power rake or aerate?",
    a: "They do different jobs. Power raking removes dead grass from the surface; aeration relieves compaction in the soil. Many Calgary lawns benefit from both in spring, with power raking done first.",
  },
  {
    q: "Why does my lawn look worse after power raking?",
    a: "Because the dead layer that was hiding the thin spots is gone. It usually recovers within a couple of weeks, faster if you fertilize, overseed and water afterwards.",
  },
];

const related = [
  { label: "Spring cleanup", href: "/spring-cleanup-calgary", desc: "Power raking, core aeration and debris removal for Calgary lawns." },
  { label: "When to aerate in Calgary", href: "/blog/when-to-aerate-lawn-calgary", desc: "The right windows for core aeration, and how to prepare." },
  { label: "Why spring cleanup matters", href: "/blog/why-calgary-spring-cleanup-matters", desc: "What a Calgary winter does to a lawn." },
];

export default function Page() {
  return <ArticlePage article={article} answer={answer} takeaways={takeaways} sections={sections} faqs={faqs} related={related} />;
}
