import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "../../components/JsonLd";
import StickyCta from "../../components/StickyCta";
import { Band, Button, PageHero } from "../../components/ds";
import { CardsBand, FaqBand, FormBand, ReviewsBand, StepsBand, serviceLd } from "../../components/sections";
import { pageMeta } from "../../lib/seo";
import { site } from "../../lib/site";
import { jobberForm, offers, reviews, steps } from "../../residential-snow-removal/content";
import { snowFaqs } from "../../residential-snow-removal/faqs";
import { communities, communityBySlug, neighboursOf, zoneFor } from "../communities";

// One page per community on the snow routes, generated at build time. Anything else is a 404.
export const dynamicParams = false;
export const generateStaticParams = () => communities.map((community) => ({ community: community.slug }));

type Props = { params: Promise<{ community: string }> };

const describe = (name: string) =>
  `Snow removal in ${name}, Calgary. Flat-rate season passes for your driveway and front sidewalk, cleared at 1 cm with photo logs after every visit.`;

export async function generateMetadata({ params }: Props) {
  const community = communityBySlug((await params).community);
  if (!community) return {};
  return pageMeta({
    title: `Snow Removal in ${community.name}, Calgary | TERREOAK`,
    description: describe(community.name),
    path: `/snow-removal/${community.slug}`,
    image: "/og/residential-snow-removal.jpg",
  });
}

export default async function Page({ params }: Props) {
  const community = communityBySlug((await params).community);
  if (!community) notFound();

  const { name } = community;
  const path = `/snow-removal/${community.slug}`;
  const zone = zoneFor(name);
  const neighbours = neighboursOf(name);

  const faqs = [
    {
      q: `Do you offer snow removal in ${name}?`,
      a: `Yes. ${name}, ${community.where}, is on our ${zone} route. We clear driveways and front sidewalks for season pass holders whenever 1 cm of snow falls, and we come back every 24 hours during a continuous snowfall.`,
    },
    {
      q: `How do I sign up for snow removal in ${name}?`,
      a: `Fill out the season pass form on this page or call ${site.phoneDisplay}. Capacity on each route is capped every season so we can keep our 24-hour guarantee, so it’s best to reserve before the first big snowfall.`,
    },
    ...snowFaqs.slice(0, 4),
  ];

  const jsonLd = serviceLd({
    path,
    name: `Residential Snow Removal in ${name}`,
    serviceType: "Residential snow removal",
    description: describe(name),
    areas: [`${name}, Calgary`],
    crumbs: [
      { name: "Home", path: "/" },
      { name: "Residential Snow Removal", path: "/residential-snow-removal" },
      { name, path },
    ],
    faqs,
  });

  return (
    <main className="to-pavement to-flow to-snowcapped overflow-x-clip">
      <JsonLd data={jsonLd} />

      <PageHero
        title={`Snow removal in ${name}.`}
        lead={`Flat-rate season passes for ${name} homeowners. We clear your driveway and front sidewalk whenever 1 cm falls, email you before the crew arrives, and send photos when it’s done.`}
        video="/videos/calgary-snow-removal-drone.mp4"
        poster="/images/snow-removal/hero-poster.jpg"
      >
        <Button href="#seasonal-form">Reserve a season pass</Button>
        <Button href="/residential-snow-removal" variant="quiet" className="bg-white/5 backdrop-blur-sm">
          See passes and details
        </Button>
      </PageHero>

      <Band>
        <div className="grid gap-x-20 gap-y-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <div>
            <p className="to-sub">{zone} route</p>
            <h2 className="to-display to-h2 mt-3">Your {name} driveway, cleared all winter</h2>
          </div>
          <div className="grid gap-5">
            <p className="to-body">{community.about}</p>
            <p className="to-body">{community.snow}</p>
            <p className="to-body">
              Everything that comes with a TERREOAK season pass applies here: one flat price for the winter, service at just 1 cm, and a visit every 24 hours while it’s snowing. The{" "}
              <Link href="/residential-snow-removal" className="to-link">
                residential snow removal page
              </Link>{" "}
              has the full details on passes, add-ons and our guarantees.
            </p>
          </div>
        </div>
      </Band>

      <CardsBand title={`What ${name} homeowners get`} cards={offers} />

      <StepsBand id="how-it-works" title="How it works" steps={steps} />

      <ReviewsBand title="What our snow clients say" reviews={reviews} />

      <FormBand
        id="seasonal-form"
        title={`Reserve your ${name} season pass`}
        lead={`Tell us your address and we’ll confirm your spot on the ${zone} route. We respond the same day.`}
        form={jobberForm}
      >
        <p className="mt-6 text-[1.08rem] text-[#50565b]">
          Prefer to talk? Call{" "}
          <a href={site.phoneHref} className="font-semibold text-[#005148] underline underline-offset-4">
            {site.phoneDisplay}
          </a>
          .
        </p>
      </FormBand>

      <FaqBand title={`Snow removal in ${name}: FAQs`} faqs={faqs} />

      <Band>
        <h2 className="to-display to-h2">Also on the {zone} route</h2>
        <p className="to-body mt-5">We keep our routes tight so every home is reached within 24 hours. Nearby communities we service:</p>
        <ul className="mt-8 flex flex-wrap gap-3">
          {neighbours.map((neighbour) => (
            <li key={neighbour.slug}>
              <Link href={`/snow-removal/${neighbour.slug}`} className="to-btn to-btn-quiet">
                {neighbour.name}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/residential-snow-removal#zones" className="to-btn to-btn-quiet">
              All service areas
            </Link>
          </li>
        </ul>
      </Band>

      <StickyCta targetId="seasonal-form" label="Reserve a season pass" />
    </main>
  );
}
