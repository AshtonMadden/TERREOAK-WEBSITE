import Link from "next/link";
import ArticlePage, { articleMeta, type ArticleSection } from "../../components/ArticlePage";
import { snowPrices } from "../../residential-snow-removal/content";
import { shovellingPost as article } from "../posts";

export const metadata = articleMeta(article);

const answer =
  "Hiring a residential snow removal crew takes two real risks off your plate. Shovelling is hard on the heart: a US study linked it to about 100 deaths and 11,500 emergency room visits a year, and a Quebec study found men were more likely to have a heart attack the day after a heavy snowfall. And in Calgary, a sidewalk that isn’t cleared within 24 hours can bring a $250 fine.";

const takeaways = [
  "A study of US emergency rooms from 1990 to 2006 counted 1,647 deaths tied to snow shovelling, about 97 a year. Every one of them was cardiac.",
  "The same study estimated about 11,500 emergency room visits a year from shovelling, and adults 55 and older were more than four times as likely as younger people to have heart symptoms while doing it.",
  "A Quebec study of more than 128,000 heart attack admissions found that, for men, a 20 cm snowfall was followed by 16% higher odds of a heart attack and 34% higher odds of dying from one.",
  "Cold air narrows blood vessels and raises blood pressure, which is a risk factor for stroke as well as heart attack.",
  "Calgary’s Street Bylaw requires sidewalks to be cleared to bare pavement within 24 hours of a snowfall ending.",
  "The fine is $250 for a first offence, $500 for a second and $750 for a third. The City can also clear the walk and bill you a minimum of $150 plus GST and fees.",
];

const sources = [
  { label: "Watson et al., “Snow shovel-related injuries and medical emergencies treated in US EDs, 1990 to 2006”, American Journal of Emergency Medicine", href: "https://pubmed.ncbi.nlm.nih.gov/20825768/" },
  { label: "Auger et al., “Association between quantity and duration of snowfall and risk of myocardial infarction”, CMAJ, 2017", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5305403" },
  { label: "Nationwide Children’s Hospital: 11,500 emergency department visits and nearly 100 deaths related to snow shovelling each year", href: "https://www.nationwidechildrens.org/newsroom/news-releases/2011/01/new-national-study-finds-11500-emergency-department-visits-nearly-100-deaths-related-to-snow" },
  { label: "American Heart Association: snow shovelling and cold temperatures as heart health hazards", href: "https://newsroom.heart.org/news/snow-shoveling-cold-temperatures-combine-for-perfect-storm-of-heart-health-hazards" },
  { label: "Heart & Stroke Foundation of Canada: stay heart healthy in the winter", href: "https://www.heartandstroke.ca/articles/stay-heart-healthy-in-the-winter" },
  { label: "City of Calgary: bylaws related to snow and ice", href: "https://www.calgary.ca/bylaws/snow-ice.html" },
];

const sections: ArticleSection[] = [
  {
    id: "how-many-people-die",
    title: "How many people die from shovelling snow each year?",
    content: (
      <>
        <p>
          The most-cited figure comes from a study by researchers at Nationwide Children’s Hospital, who went through 17 years of US emergency room records, from 1990 to 2006. They counted <strong>1,647 deaths</strong>{" "}
          connected to snow shovelling over that period, which works out to roughly <strong>97 a year</strong>.
        </p>
        <p>Three things stand out in that study:</p>
        <ul>
          <li>
            <strong>Every death was cardiac.</strong> Heart-related cases were only about 7% of the emergency visits, but they accounted for all of the deaths.
          </li>
          <li>
            <strong>About 11,500 people a year</strong> ended up in an emergency room because of shovelling, mostly with strains, falls and back injuries.
          </li>
          <li>
            <strong>Age matters.</strong> Adults 55 and older were more than four times as likely as younger people to have heart-related symptoms while shovelling.
          </li>
        </ul>
        <p>
          Those are US numbers, and they only count people who reached an emergency room, so the real total is likely higher. There’s no equivalent yearly count for Canada, but the best Canadian evidence points the same way.
        </p>
      </>
    ),
  },
  {
    id: "canadian-evidence",
    title: "What does the Canadian research say?",
    content: (
      <>
        <p>
          In 2017 the Canadian Medical Association Journal published a study that looked at every winter in Quebec from 1981 to 2014: more than <strong>128,000 hospital admissions</strong> and{" "}
          <strong>68,000 deaths</strong> from heart attacks, matched against daily snowfall.
        </p>
        <p>For men, the pattern was clear. Compared with a day with no snow, the day after a 20 cm snowfall brought:</p>
        <ul>
          <li>
            <strong>16% higher odds</strong> of being admitted to hospital with a heart attack.
          </li>
          <li>
            <strong>34% higher odds</strong> of dying from one.
          </li>
        </ul>
        <p>
          About a third of all the heart attacks in the study happened the day after a snowfall, and the risk climbed further when it snowed for two or three days in a row. The researchers couldn’t prove shovelling was the
          cause, but it was their leading explanation. The same link didn’t show up for women, which they suggested may be because men do more of the shovelling.
        </p>
      </>
    ),
  },
  {
    id: "why-so-hard-on-the-heart",
    title: "Why is shovelling so hard on the heart?",
    content: (
      <>
        <p>The American Heart Association has called snow shovelling a “perfect storm” for the heart, because several things happen at once:</p>
        <ul>
          <li>
            <strong>It’s mostly arm work.</strong> Arm exercise puts more strain on the heart than leg exercise does.
          </li>
          <li>
            <strong>You hold your breath when you lift.</strong> Straining against a heavy load pushes heart rate and blood pressure up sharply.
          </li>
          <li>
            <strong>You’re standing still.</strong> Blood pools in the legs instead of returning to the heart.
          </li>
          <li>
            <strong>The cold narrows your blood vessels.</strong> That raises blood pressure and reduces blood flow to the heart at the moment it needs more.
          </li>
          <li>
            <strong>It’s sudden.</strong> Most people go from the couch to maximum effort with no warm-up, often first thing in the morning.
          </li>
        </ul>
        <p>The researchers behind the Quebec study noted that shovelling demands more than 75% of a person’s maximum heart rate, particularly with heavy, wet snow.</p>
      </>
    ),
  },
  {
    id: "older-adults-and-stroke",
    title: "Are older adults at higher risk of a heart attack or stroke?",
    content: (
      <>
        <p>
          Yes. The risk of heart disease and stroke both rise with age, and the people most at risk while shovelling are those who are older, not regularly active, or living with a heart condition, high blood pressure, high
          cholesterol or diabetes, or who smoke.
        </p>
        <p>
          The strongest evidence is for heart attacks and sudden cardiac arrest. For stroke, the link is less direct but real: cold weather raises blood pressure, and high blood pressure is the leading risk factor for
          stroke. Heavy lifting in the cold pushes it higher still.
        </p>
        <p>
          The American Heart Association’s advice is blunt. People who have had a heart attack, bypass surgery or angioplasty, or who have known heart disease, shouldn’t be shovelling at all. Dr. Barry Franklin, who led its
          statement on exercise-related heart events, has said that anyone over 45 with heart disease or risk factors should think about leaving the shovel alone.
        </p>
        <p>
          <strong>Know the warning signs.</strong> Chest pain or pressure, pain spreading to the arm, jaw or back, shortness of breath, lightheadedness, nausea or a cold sweat are signs of a heart attack. A drooping face,
          arm weakness or slurred speech are signs of a stroke. Stop and call 911 right away. Don’t try to finish the driveway first.
        </p>
        <p>This is general information, not medical advice. If you’re unsure whether shovelling is safe for you or a family member, ask a doctor.</p>
      </>
    ),
  },
  {
    id: "calgary-bylaw",
    title: "What does Calgary’s snow bylaw require?",
    content: (
      <>
        <p>
          Under Calgary’s Street Bylaw, you’re responsible for the public sidewalk that borders your property. It has to be cleared of snow and ice, down to the bare surface, <strong>within 24 hours of a snowfall ending</strong>.
        </p>
        <p>That applies whether you’re home, at work, away for the weekend or in Arizona for the winter. It also applies when it snows three days in a row, and when the snow has been packed down to ice by people walking on it.</p>
      </>
    ),
  },
  {
    id: "the-fine",
    title: "How much is the fine for not shovelling in Calgary?",
    content: (
      <>
        <p>There isn’t a published “average” fine, because the amount is set by the bylaw and climbs with each offence:</p>
        <figure className="grid gap-4 md:grid-cols-3">
          <article className="to-card p-6">
            <h3 className="!mt-0">First offence</h3>
            <p className="mt-3 text-[1.9rem] font-bold leading-tight text-accent">$250</p>
          </article>
          <article className="to-card p-6">
            <h3 className="!mt-0">Second offence</h3>
            <p className="mt-3 text-[1.9rem] font-bold leading-tight text-accent">$500</p>
          </article>
          <article className="to-card p-6">
            <h3 className="!mt-0">Third offence</h3>
            <p className="mt-3 text-[1.9rem] font-bold leading-tight text-accent">$750</p>
          </article>
        </figure>
        <p>
          The second and third amounts apply to repeat offences within 12 months. On top of a fine, the City can send its own contractor to clear the sidewalk and invoice you a{" "}
          <strong>minimum of $150 plus GST and administration fees</strong>.
        </p>
        <p>
          So a single missed snowfall can cost $250 or more, and a winter of them adds up fast. A fine is also the smaller worry: if someone slips on your uncleared sidewalk, you can be held liable for their injury.
        </p>
        <p>Fine amounts can change, so check the City of Calgary’s snow and ice bylaw page for the current figures.</p>
      </>
    ),
  },
  {
    id: "what-a-crew-does",
    title: "What does a snow removal crew do differently?",
    content: (
      <>
        <ul>
          <li>
            <strong>The physical risk moves to people equipped for it.</strong> Our crews use commercial-grade equipment and do this every day.
          </li>
          <li>
            <strong>The 24-hour window is met without you.</strong> We clear at just 1 cm and come back every 24 hours during a snowfall, so the bylaw clock never runs out.
          </li>
          <li>
            <strong>You have proof.</strong> A time-stamped photo is emailed after every visit, which is a record you can point to if a fine or a slip claim ever comes up.
          </li>
          <li>
            <strong>It works when you’re away.</strong> Travelling, working a long shift or recovering from surgery doesn’t leave the sidewalk uncleared.
          </li>
          <li>
            <strong>Ice is dealt with early.</strong> Clearing at 1 cm stops snow from being packed into ice, which is what people slip on.
          </li>
        </ul>
        <p>
          For many families, the real reason is a parent or grandparent who insists on doing it themselves. A season pass is often easier to arrange than talking them out of it.
        </p>
      </>
    ),
  },
  {
    id: "cost-comparison",
    title: "How does the cost compare?",
    content: (
      <>
        <p>
          A TERREOAK season pass starts at {snowPrices[2].monthly} a month for front sidewalks only, {snowPrices[1].monthly} for a single car driveway with front sidewalks, and {snowPrices[0].monthly} for a double. All
          pricing is a starting point and subject to change.
        </p>
        <p>
          Put another way, one first-offence fine is more than a month of service, and three fines in a winter is $1,500. That’s before the cost of a trip to the emergency room, time off work with a strained back, or a claim
          from someone who fell.
        </p>
        <p>
          See the full details on our <Link href="/residential-snow-removal">residential snow removal</Link> page, or the{" "}
          <Link href="/snow-removal/snowbird-vacation-pass">snowbird and vacation pass</Link> if you only need cover while you’re away.
        </p>
      </>
    ),
  },
  {
    id: "if-you-shovel",
    title: "If you do shovel, how can you do it more safely?",
    content: (
      <>
        <p>Plenty of healthy people shovel without a problem. If that’s you, the Heart & Stroke Foundation and the American Heart Association suggest:</p>
        <ul>
          <li>Warm up for a few minutes first, and don’t shovel right after a big meal.</li>
          <li>Clear snow while it’s fresh and light, before it’s packed down or frozen.</li>
          <li>Push the snow instead of lifting it wherever you can.</li>
          <li>Take small loads, keep the shovel close to your body, and turn your feet instead of twisting your back.</li>
          <li>Take breaks, drink water and dress in layers, with your mouth and nose covered in very cold air.</li>
          <li>Stop immediately if you feel chest pain, dizziness or shortness of breath.</li>
        </ul>
      </>
    ),
  },
  {
    id: "sources",
    title: "Sources",
    content: (
      <>
        <ul>
          {sources.map((source) => (
            <li key={source.href}>
              <a href={source.href} target="_blank" rel="noopener noreferrer">
                {source.label}
              </a>
            </li>
          ))}
        </ul>
      </>
    ),
  },
];

const faqs = [
  {
    q: "How many people die from shovelling snow each year?",
    a: "A study of US emergency room records from 1990 to 2006 counted 1,647 deaths linked to snow shovelling, about 97 a year, all of them cardiac. The same study estimated about 11,500 emergency room visits a year. There is no equivalent annual count for Canada.",
  },
  {
    q: "Can shovelling snow cause a heart attack?",
    a: "It can trigger one in people at risk. A Quebec study published in CMAJ in 2017 found that for men, the day after a 20 cm snowfall carried 16% higher odds of a heart attack admission and 34% higher odds of dying from one. Shovelling combines heavy arm work, breath-holding and cold air, all of which strain the heart.",
  },
  {
    q: "At what age should you stop shovelling snow?",
    a: "There’s no fixed age, because health matters more than the number. The American Heart Association says people with heart disease, or who have had a heart attack, bypass surgery or angioplasty, shouldn’t shovel. One of its experts suggests anyone over 45 with heart disease or risk factors should think twice. Ask a doctor if you’re unsure.",
  },
  {
    q: "How long do you have to shovel your sidewalk in Calgary?",
    a: "Calgary’s Street Bylaw requires the sidewalk bordering your property to be cleared of snow and ice, down to the bare surface, within 24 hours of a snowfall ending.",
  },
  {
    q: "How much is the fine for not shovelling your sidewalk in Calgary?",
    a: "$250 for a first offence, $500 for a second and $750 for a third within 12 months. The City can also clear the sidewalk itself and invoice the owner a minimum of $150 plus GST and administration fees. Check the City of Calgary’s bylaw page for current amounts.",
  },
  {
    q: "Is hiring a snow removal service worth it?",
    a: "For many households, yes. It removes the physical risk, keeps you inside the 24-hour bylaw window even when you’re away, and gives you a time-stamped record of every clearing. One first-offence fine costs more than a month of service.",
  },
];

const related = [
  { label: "Residential snow removal", href: "/residential-snow-removal", desc: "Flat-rate season passes for driveways and front sidewalks." },
  { label: "Season pass pricing", href: "/residential-snow-removal#pricing", desc: "Monthly and season rates by property type." },
  { label: "Snowbird and vacation pass", href: "/snow-removal/snowbird-vacation-pass", desc: "Coverage for 1 to 8 weeks while you’re away." },
  { label: "Why hire a snow removal company?", href: "/blog/why-hire-snow-removal-company", desc: "Liability, property damage and how our routes work." },
];

export default function Page() {
  return <ArticlePage article={article} answer={answer} takeaways={takeaways} sections={sections} faqs={faqs} related={related} />;
}
