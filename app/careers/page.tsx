import JsonLd from "../components/JsonLd";
import { Band, Button, PageHero } from "../components/ds";
import { CardsBand } from "../components/sections";
import { breadcrumbLd, pageMeta } from "../lib/seo";
import { site } from "../lib/site";

const path = "/careers";
const description = "Join the TERREOAK crew in Calgary. Open roles for landscape crew leaders, snow removal operators and maintenance crew, with year-round work.";
const applyEmail = "careers@terreoak.com";

export const metadata = pageMeta({
  title: "Landscaping & Snow Removal Jobs in Calgary | TERREOAK",
  description,
  path,
  image: "/photos/crew-mini-excavator.jpg",
});

const perks = [
  { title: "Competitive pay", desc: "We pay above industry standards for reliable, hardworking professionals. Hard work is always recognized and rewarded." },
  { title: "Modern equipment", desc: "No fighting with broken gear. We run modern, well-maintained fleets and equipment so you can focus on getting the job done right." },
  { title: "Year-round work", desc: "Forget seasonal layoffs. With comprehensive summer landscaping and winter snow removal, we offer stable year-round employment." },
];

const positions = [
  {
    title: "Landscape Crew Leader",
    type: "Full-time, Calgary, AB",
    desc: "Lead a dedicated team executing premium hardscape and softscape installations. Requires 3+ years of landscaping experience, a valid driver's license, and strong leadership skills.",
    questions: [
      "Walk us through your step-by-step process for properly prepping and laying a paver patio.",
      "Describe a time you had to manage a difficult or underperforming team member. How did you handle it?",
    ],
  },
  {
    title: "Snow Removal Operator",
    type: "Seasonal / full-time, Calgary, AB",
    desc: "Operate commercial snow removal equipment (skid steers, tractors, plows). Requires open availability during winter months and previous heavy equipment experience.",
    questions: [
      "What specific experience do you have operating heavy machinery in winter conditions?",
      "Snow removal requires extremely long and unpredictable hours. How do you handle fatigue and stay safe during a 14+ hour shift?",
    ],
  },
  {
    title: "Maintenance Crew Member",
    type: "Full-time, Calgary, AB",
    desc: "Join our fast-paced commercial and residential maintenance crews. Mowing, trimming, fall cleanups, and property care. Willing to train the right hardworking individual.",
    questions: [
      "Why do you want to work outdoors in a physically demanding job?",
      "In your own words, what is the difference between a “good enough” job and a “high-quality” job when maintaining a property?",
    ],
  },
];

const applyHref = (title: string) =>
  `mailto:${applyEmail}?subject=${encodeURIComponent(`Application: ${title}`)}&body=${encodeURIComponent(
    "Please attach your resume and your video answering the application questions here."
  )}`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{ "@id": `${site.url}${path}#breadcrumb`, ...breadcrumbLd([{ name: "Home", path: "/" }, { name: "Careers", path }]) }],
};

export default function CareersPage() {
  return (
    <main className="to-pavement to-flow overflow-x-clip">
      <JsonLd data={jsonLd} />

      <PageHero
        title={
          <>
            Build your career <span className="block">with TERREOAK.</span>
          </>
        }
        lead="Landscaping and snow removal jobs in Calgary, with year-round work and equipment that’s looked after."
        image="/photos/crew-mini-excavator.jpg"
        imageAlt="TERREOAK crew member at the controls of a Bobcat mini excavator"
      >
        <Button href="#open-positions">View open positions</Button>
      </PageHero>

      <CardsBand
        title="Why work with us?"
        lead="At TERREOAK, we believe that taking care of our properties starts with taking care of our people. We offer industry-leading pay, year-round stable employment, and top-tier equipment so you can do your best work safely and efficiently."
        cards={perks}
      />

      <Band id="open-positions">
        <h2 className="to-display to-h2">Open positions</h2>
        <p className="to-body mt-5">
          <strong className="font-bold text-fg">How to apply:</strong> we want to know the real you. To apply for any position, use the apply button to email us. You <strong className="font-bold text-fg">must</strong> attach your resume and a short video (shot on your phone is fine) answering the role-specific questions listed below.
        </p>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {positions.map((position) => (
            <article key={position.title} className="to-card flex flex-col p-8">
              <h3 className="to-display to-h3">{position.title}</h3>
              <p className="to-sub mt-2">{position.type}</p>
              <p className="mt-5 text-[1.05rem] leading-relaxed text-muted">{position.desc}</p>
              <p className="mt-6 text-[1.05rem] font-bold text-fg">Video application questions</p>
              <ol className="mt-3 grid list-decimal gap-3 pl-5 text-[1.02rem] leading-relaxed text-muted">
                {position.questions.map((question) => (
                  <li key={question}>{question}</li>
                ))}
              </ol>
              <div className="mt-auto pt-8">
                <Button href={applyHref(position.title)}>Apply now</Button>
              </div>
            </article>
          ))}
        </div>
      </Band>
    </main>
  );
}
