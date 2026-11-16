import Image from "next/image";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import JobberLeadForm from "../components/JobberLeadForm";
import JsonLd from "../components/JsonLd";
import { Band, BlogCta, Button, Container, FaqList, GoogleMark, Stars, Tick } from "../components/ds";
import { CountUp, HeroVideo } from "../components/HeroMedia";
import HolidayGameSlot from "./HolidayGameSlot";
import { breadcrumbLd, faqLd, pageMeta } from "../lib/seo";
import { site } from "../lib/site";
import { addOns, jobberForm, offers, passes, referral, reviews, season, stats, steps, zones } from "./content";
import { snowFaqs } from "./faqs";
import ClampText from "../components/ClampText";
import ReadMore from "../components/ReadMore";
import StickyCta from "../components/StickyCta";
import OfferPopup from "../components/OfferPopup";
import { RouteCheck } from "./SnowClient";

const path = "/residential-snow-removal";
const description =
  "Residential snow removal in Calgary on a flat-rate season pass. Driveway and sidewalk clearing at 1cm, dispatch alerts, and a photo log after every visit.";

export const metadata = pageMeta({
  title: "Snow Removal Calgary | Residential Season Pass | TERREOAK",
  description,
  path,
  image: "/images/snow-removal/hero-poster.jpg",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${site.url}${path}#service`,
      name: "Residential Snow Removal",
      serviceType: "Residential snow removal",
      description,
      url: `${site.url}${path}`,
      provider: { "@id": `${site.url}/#localbusiness` },
      areaServed: zones.flatMap((zone) => zone.areas.map((name) => ({ "@type": "Place", name: `${name}, Calgary, AB` }))),
    },
    { "@id": `${site.url}${path}#breadcrumb`, ...breadcrumbLd([{ name: "Home", path: "/" }, { name: "Residential Snow Removal", path }]) },
    { "@id": `${site.url}${path}#faq`, ...faqLd(snowFaqs) },
  ],
};

const offerIcons: React.ReactNode[] = [
  <path key="calendar" d="M7 3v3M17 3v3M4 9h16M6 5h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm3 9 2 2 4-4" />,
  <path key="ruler" d="M3 17 17 3l4 4L7 21l-4-4Zm5-5 2 2m1-5 2 2m1-5 2 2" />,
  <path key="camera" d="M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Zm8 9a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />,
  <path key="bell" d="M6 16v-5a6 6 0 1 1 12 0v5l2 2H4l2-2Zm4 5h4" />,
  <path key="pin" d="M12 21s7-6.2 7-11.5a7 7 0 0 0-14 0C5 14.8 12 21 12 21Zm0-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />,
  <path key="card" d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Zm0 3h18M7 15h4" />,
];

/**
 * A snow bank that runs the full width of the page: two flat-coloured drifts, the back one
 * slightly grey for depth. Used to split the page into parts. Decorative only.
 */
function SnowBank({ flip = false, className = "" }: { flip?: boolean; className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`block h-[64px] w-full md:h-[110px] ${flip ? "-scale-x-100" : ""} ${className}`}
    >
      <path d="M0 120V46C160 6 300 72 460 36C620 4 760 62 900 30C1060 0 1220 56 1440 22V120Z" fill="#cfd8dc" />
      <path d="M0 120V72C120 34 220 96 360 62C480 32 560 84 700 56C840 30 930 92 1080 64C1200 42 1320 88 1440 52V120Z" fill="#ffffff" />
    </svg>
  );
}

/** A small snowman standing in the drift on top of the snow tracker card. Decorative only. */
function Snowman() {
  return (
    <svg
      viewBox="0 0 64 80"
      aria-hidden="true"
      className="pointer-events-none absolute bottom-full right-[9%] z-[1] h-[76px] w-auto translate-y-[5px] md:right-[12%] md:h-[112px] md:translate-y-[7px]"
    >
      <path d="M15 52 3 40M6 47l-4 1M49 52l12-10M57 48l5 1" stroke="#7a5a3c" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <circle cx="32" cy="58" r="20" fill="#ffffff" />
      <path d="M13.5 65.5A20 20 0 0 0 50.5 65.5 24 24 0 0 1 13.5 65.5Z" fill="#cfd8dc" />
      <circle cx="32" cy="28" r="13.5" fill="#ffffff" />
      <path d="M20 37.5c7 3 17 3 24 0l1.5 5c-8 3.4-19 3.4-27 0Z" fill="#019587" />
      <path d="M39 40.5 46 54l-6 1.5-4-13Z" fill="#019587" />
      <path d="M23 5h18v11H23Z" fill="#005148" />
      <rect x="18" y="14.5" width="28" height="3.6" rx="1.8" fill="#005148" />
      <rect x="23" y="11" width="18" height="3" fill="#ccea8d" />
      <circle cx="27.5" cy="25" r="1.8" fill="#26282b" />
      <circle cx="36.5" cy="25" r="1.8" fill="#26282b" />
      <path d="M32 28.5 44.5 31 32 33Z" fill="#f08a24" />
      <circle cx="32" cy="52" r="1.7" fill="#26282b" />
      <circle cx="32" cy="60" r="1.7" fill="#26282b" />
      <circle cx="32" cy="68" r="1.7" fill="#26282b" />
    </svg>
  );
}

function ReviewCard({ review }: { review: { name: string; text: string } }) {
  return (
    <figure className="to-card flex flex-col p-6 md:p-8">
      <Stars />
      <blockquote className="mt-5 text-[1.08rem] leading-relaxed text-fg md:text-[1.12rem]">“{review.text}”</blockquote>
      <figcaption className="mt-auto pt-6 text-[1.05rem] font-semibold text-muted">{review.name}</figcaption>
    </figure>
  );
}

/**
 * Snow measuring stick: a vertical ruler in centimetres that fills to this season's total,
 * with a marker at the season average. The scale grows by itself in a heavy winter.
 */
function MeasuringStick({ totalCm, averageCm }: { totalCm: number; averageCm: number }) {
  const scaleMax = Math.max(150, Math.ceil((Math.max(totalCm, averageCm) * 1.1) / 50) * 50);
  const pct = (cm: number) => `${(cm / scaleMax) * 100}%`;
  const ticks = Array.from({ length: scaleMax / 10 + 1 }, (_, i) => i * 10);

  return (
    <div className="flex items-stretch justify-center gap-3" role="img" aria-label={`Snow measuring stick showing ${totalCm} centimetres so far this season against a ${averageCm} centimetre average`}>
      {/* Average label, left of the stick */}
      <div className="relative w-24 max-md:hidden">
        <div className="absolute right-0 flex flex-col items-end" style={{ bottom: pct(averageCm), transform: "translateY(50%)" }}>
          <span className="text-[0.82rem] font-semibold uppercase tracking-[0.1em] text-accent">Average</span>
          <span className="text-[1.05rem] font-bold tabular-nums text-fg">{averageCm} cm</span>
        </div>
      </div>

      {/* The stick */}
      <div className="relative h-52 w-12 md:h-80">
        <div className="absolute inset-0 overflow-hidden rounded-t-[10px] bg-white/[0.09]">
          <div className="to-stick-fill absolute inset-x-0 bottom-0 bg-brand" style={{ height: pct(totalCm) }} />
        </div>
        <div className="absolute -inset-x-2 border-t-2 border-dashed border-white/70" style={{ bottom: pct(averageCm) }} />
        {/* Snow mound at the base */}
        <div className="absolute -bottom-3 left-1/2 h-6 w-28 -translate-x-1/2 rounded-[50%] bg-white" />
      </div>

      {/* Scale, right of the stick */}
      <div className="relative w-10 md:w-16">
        {ticks.map((cm) => {
          const major = cm % 50 === 0;
          return (
            <div key={cm} className="absolute left-0 flex translate-y-1/2 items-center gap-2" style={{ bottom: pct(cm) }}>
              <span className={`block h-px ${major ? "w-4 bg-white/80" : "w-2 bg-white/35"}`} />
              {major && <span className="text-[0.9rem] tabular-nums text-muted">{cm}</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function ResidentialSnowRemovalPage() {
  const trackerPercent = Math.round((season.totalCm / season.averageCm) * 100);

  return (
    <main className="to-pavement to-flow to-snowcapped overflow-x-clip">
      <JsonLd data={jsonLd} />

      {/* HERO: video behind, offer and route check on top, fading into the page */}
      <section className="relative isolate flex min-h-[100svh] flex-col justify-end">
        <div className="absolute inset-0 -z-10">
          <HeroVideo src="/videos/calgary-snow-removal-drone.mp4" poster="/images/snow-removal/hero-poster.jpg" />
          <div className="absolute inset-0 bg-[#1d1f21]/65" />
        </div>

        <Container className="pb-10 pt-32 md:pb-12 md:pt-48">
          <h1 className="to-display to-h1 max-w-[22ch]">Calgary snow removal you can set and forget.</h1>
          <div className="mt-6 grid items-end gap-7 md:mt-7 md:gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(360px,440px)] lg:gap-x-20 lg:gap-y-8">
            <div className="lg:col-span-2 lg:max-w-3xl">
              <p className="to-body !text-fg">
                One season, one price, zero surprises. We clear your driveway and front sidewalk whenever 1cm falls, email you before the crew arrives, and send photos when the job is done.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button href="#seasonal-form">Reserve a season pass</Button>
                <Button href="#how-it-works" variant="quiet" className="bg-white/5 backdrop-blur-sm">
                  See how it works
                </Button>
              </div>
              <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-[1.05rem] text-white/80">
                <GoogleMark />
                <a href={site.googleProfile} target="_blank" rel="noopener noreferrer" className="to-link">
                  {site.reviews.rating} stars from {site.reviews.count} Google reviews
                </a>
                <span>We respond the same day.</span>
              </p>
            </div>
            {/* On desktop the route check sits beside the stats; on phones it stays above them. */}
            <div className="lg:col-start-2 lg:row-start-2">
              <RouteCheck />
            </div>

          <dl className="mt-2 grid grid-cols-4 gap-x-3 md:mt-6 md:gap-x-6 lg:col-start-1 lg:row-start-2 lg:mt-0">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dd className="to-display whitespace-nowrap text-[1.7rem] md:text-5xl xl:text-6xl">
                  <CountUp end={stat.end} suffix={stat.suffix} />
                </dd>
                <dt className="mt-1.5 text-[0.82rem] leading-snug text-muted md:mt-2 md:text-[1.02rem]">{stat.label}</dt>
              </div>
            ))}
          </dl>
          </div>
        </Container>
        <SnowBank />
      </section>

      {/* WHAT WE OFFER */}
      <Band>
        <h2 className="to-display to-h2">What we offer</h2>
        <p className="to-body mt-5">Reliable, professional snow management tailored for Calgary homeowners.</p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-12 md:gap-5 lg:grid-cols-3">
          {offers.map((offer, i) => (
            <article key={offer.title} className="to-card to-card-lift flex gap-4 p-5 md:block md:p-8">
              <span className="to-icon shrink-0 max-md:h-11 max-md:w-11">
                <svg className="h-6 w-6 max-md:h-5 max-md:w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {offerIcons[i]}
                </svg>
              </span>
              <div>
                <h3 className="to-display to-h3 md:mt-6">{offer.title}</h3>
                <p className="mt-1.5 text-[1rem] leading-relaxed text-muted md:mt-3 md:text-[1.1rem]">{offer.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </Band>

      {/* BUILT FOR WINTER */}
      <Band>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-20">
          <div>
            <h2 className="to-display to-h2">Residential snow removal in Calgary that’s built for winter</h2>
            <div className="mt-7 grid gap-5">
              <p className="to-body">
                TERREOAK provides residential snow removal for Calgary homeowners who want a reliable, hands-off solution for the entire winter season. No wondering if your driveway got done, just consistent service, dispatch alerts before we arrive, and a photo log in your inbox after every visit.
              </p>
              <ReadMore>
                <p className="to-body">
                  We service driveways and front sidewalks at just 1cm of accumulation, so your property stays clear and safe through every storm Calgary throws at it. Our route-based crews cover communities across SW and SE Calgary, with capacity capped each season so service quality never slips.
                </p>
                <p className="max-w-[62ch] text-[1.2rem] font-semibold leading-snug text-fg">
                  Spots fill up before the first snowfall. Reserve your season pass early to lock in your route and your rate.
                </p>
              </ReadMore>
            </div>
            <div className="mt-8">
              <Button href="#seasonal-form">Reserve a season pass</Button>
            </div>
          </div>
          <figure className="mx-auto w-full max-w-md">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[36px] shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)] md:aspect-[3/4]">
              <Image
                src="/Snow Page web pics/TERREOAK-Snow-Picket.JPG"
                alt="A green TERREOAK snow picket standing beside a cleared Calgary driveway"
                fill
                sizes="(min-width: 1280px) 440px, 90vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-4 text-center text-[1.02rem] text-muted">The picket we install at your driveway so crews find you fast, even before sunrise.</figcaption>
          </figure>
        </div>
      </Band>

      {/* HOW IT WORKS */}
      <Band id="how-it-works">
        <h2 className="to-display to-h2">How it works</h2>
        <ol className="mt-8 grid gap-3 md:mt-12 md:grid-cols-3 md:gap-5">
          {steps.map((step, i) => (
            <li key={step.title} className="to-card to-card-lift flex gap-4 p-5 md:block md:p-8">
              <span className="to-icon to-display shrink-0 text-2xl max-md:h-11 max-md:w-11 max-md:text-xl">{i + 1}</span>
              <div>
                <h3 className="to-display to-h3 md:mt-6">{step.title}</h3>
                <p className="mt-1.5 text-[1rem] leading-relaxed text-muted md:mt-3 md:text-[1.1rem]">{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </Band>

      {/* PASSES */}
      <Band>
        <div className="flex items-center justify-between gap-6">
          <h2 className="to-display to-h2 max-w-[18ch]">Pick the pass that fits your winter</h2>
          <a href="#seasonal-form" className="to-focus shrink-0 rounded-2xl transition-transform hover:scale-[1.04]" aria-label="Sign up for a Snow Pass">
            <Image src="/brand/snow-pass-badge.png" alt="TERREOAK Snow Pass" width={514} height={585} className="h-24 w-auto md:h-36" />
          </a>
        </div>
        <div className="mt-8 grid gap-5 md:mt-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
          {passes.map((pass, i) => (
            <article key={pass.name} className={`to-card relative flex flex-col overflow-hidden p-6 md:p-10 ${i === 0 ? "ring-1 ring-brand/45 md:pr-52" : ""}`}>
              {i === 0 && (
                <Image
                  src="/brand/snow-picket.png"
                  alt="TERREOAK snow picket with the phone number 587-707-7648"
                  width={169}
                  height={490}
                  className="pointer-events-none absolute -bottom-2 right-8 hidden h-[330px] w-auto md:block"
                />
              )}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="to-display to-h3">{pass.name}</h3>
                  <p className="to-sub mt-2">{pass.term}</p>
                </div>
                {i === 0 && <Image src="/brand/snow-picket.png" alt="" width={169} height={490} className="-mt-2 h-32 w-auto shrink-0 md:hidden" />}
              </div>
              <p className="mt-5 text-[1.12rem] leading-relaxed text-muted">{pass.summary}</p>
              <ul className={`mt-6 grid gap-3 text-[1.1rem] text-fg ${i === 0 ? "sm:grid-cols-2" : ""}`}>
                {pass.includes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <Tick />
                    {item}
                  </li>
                ))}
              </ul>
              {pass.payment && <p className="mt-7 text-[1.08rem] text-muted">{pass.payment}</p>}
              <div className="mt-auto pt-8">
                <Button href="#seasonal-form" variant={i === 0 ? "primary" : "quiet"}>
                  {i === 0 ? "Reserve a season pass" : "Ask about a short-term pass"}
                </Button>
              </div>
            </article>
          ))}
        </div>
        <dl className="mt-8 grid gap-x-12 gap-y-6 px-2 md:mt-10 md:grid-cols-3 md:gap-y-8">
          {addOns.map((addOn) => (
            <div key={addOn.name}>
              <dt className="text-[1.2rem] font-semibold text-fg">Add-on: {addOn.name}</dt>
              <dd className="mt-2 text-[1.08rem] leading-relaxed text-muted">{addOn.desc}</dd>
            </div>
          ))}
          <div>
            <dt className="text-[1.2rem] font-semibold text-fg">Not offered: one-time clears</dt>
            <dd className="mt-2 text-[1.08rem] leading-relaxed text-muted">Our crews follow set neighbourhood routes each storm, which is what lets us guarantee a visit every 24 hours.</dd>
          </div>
        </dl>
      </Band>

      {/* GUARANTEES */}
      <Band>
        <h2 className="to-display to-h2">Our guarantees</h2>
        <div className="mt-8 grid gap-5 md:mt-12 md:grid-cols-2">
          <article className="to-card p-6 md:p-10">
            <h3 className="to-display to-h3">First-service money-back guarantee</h3>
            <ClampText className="mt-3 text-[1.05rem] leading-relaxed text-muted md:mt-4 md:text-[1.12rem]">
              {"Not happy after your first visit? We refund you in full, no questions, no fine print. We’re confident enough in our service to put that in writing because we’ve never had to use it."}
            </ClampText>
          </article>
          <article className="to-card p-6 md:p-10">
            <h3 className="to-display to-h3">Once every 24 hours guarantee</h3>
            <ClampText className="mt-3 text-[1.05rem] leading-relaxed text-muted md:mt-4 md:text-[1.12rem]">
              {"We guarantee to service your property once every 24 hours during continuous snowfall, and within 24 hours of the snowfall ending. If we miss that window for any reason, we send a crew back at no charge. On average, our team clears a full route in 12 hours. Calgary’s snow removal bylaw gives property owners 24 hours to clear sidewalks, we make sure you’re covered."}
            </ClampText>
          </article>
        </div>
      </Band>

      {/* REVIEWS */}
      <Band>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="to-display to-h2">What our snow clients say</h2>
          <a href={site.googleProfile} target="_blank" rel="noopener noreferrer" className="to-focus flex w-fit items-center gap-3 rounded-full bg-white/[0.07] px-5 py-3 text-[1.05rem] font-medium text-fg transition-colors hover:bg-white/[0.12]">
            <GoogleMark />
            {site.reviews.rating} from {site.reviews.count} Google reviews
          </a>
        </div>
        <div className="mt-8 grid gap-5 md:mt-12 lg:grid-cols-3">
          <ReviewCard review={reviews[0]} />
          <ReadMore inGrid label="Show more reviews">
            {reviews.slice(1).map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </ReadMore>
        </div>
      </Band>

      {/* SIGN UP */}
      <Band id="seasonal-form" surface="snow">
        <div className="grid gap-x-20 gap-y-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <div>
            <h2 className="to-display to-h2">Sign up for your season pass</h2>
            <p className="to-body mt-6">Tell us about your property and we’ll get back to you the same day.</p>
            <div className="mt-8 rounded-[24px] bg-[#019587]/12 p-6">
              <h3 className="text-[1.2rem] font-semibold text-fg">Important service expectation</h3>
              <p className="mt-2 text-[1.08rem] leading-relaxed text-muted">
                Our crews strictly operate on a route-based system. We only come <strong className="font-semibold text-fg">once every 24 hours</strong> to service your property during a snowfall event. This guarantees consistent, reliable service for every client on our route.
              </p>
            </div>
          </div>
          <div className="rounded-[28px] bg-white p-4 shadow-[0_30px_60px_-40px_rgba(0,0,0,0.35)] md:p-7">
            <JobberLeadForm clienthubId={jobberForm.clienthubId} formUrl={jobberForm.formUrl} />
          </div>
        </div>
      </Band>

      {/* REFERRAL PROGRAM */}
      <Band id="referral">
        <div className="to-card relative p-6 md:p-12">
          <div className="mb-8 flex justify-end md:absolute md:right-12 md:top-12 md:mb-0">
            <a href="#seasonal-form" className="to-focus rounded-lg transition-transform hover:scale-[1.04]" aria-label="Sign up for a Snow Pass to earn rewards">
              <Image src="/brand/snow-pass-rewards.png" alt="Snow Pass Rewards" width={488} height={96} className="h-11 w-auto md:h-14" />
            </a>
          </div>
          <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] lg:items-end">
            <div>
              <h2 className="to-display to-h2">Snowball referral program</h2>
              <ul className="mt-7 grid gap-3 text-[1.15rem] text-fg">
                {referral.steps.map((step) => (
                  <li key={step} className="flex gap-3">
                    <Tick />
                    {step}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[1.08rem] leading-relaxed text-muted">Already a client? Your personal link is in your Jobber client portal.</p>
            </div>
            <dl className="grid grid-cols-3 gap-4 text-center">
              {referral.highlights.map((item) => (
                <div key={item.label} className="rounded-[24px] bg-white/[0.05] px-3 py-7">
                  <dd className="to-display text-4xl text-accent md:text-5xl">{item.value}</dd>
                  <dt className="mt-2 text-[1rem] leading-snug text-muted">{item.label}</dt>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10 grid gap-x-16 gap-y-8 border-t border-rule pt-8 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] lg:items-end">
            <div>
              <h3 className="text-[1.2rem] font-semibold text-fg">A few simple conditions</h3>
              <ul className="mt-4 grid gap-2 text-[1.08rem] leading-relaxed text-muted">
                {referral.conditions.map((condition) => (
                  <li key={condition} className="flex gap-3">
                    <span className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-muted" aria-hidden="true" />
                    {condition}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Button href="#seasonal-form">Sign up for a season pass</Button>
              <Button href={site.clientPortalUrl} variant="quiet">
                Open your client portal
              </Button>
            </div>
          </div>
        </div>
      </Band>

      {/* HOLIDAY GAME: only appears during the holiday season */}
      <HolidayGameSlot />

      {/* SNOW TRACKER: the snowman stands above this section, so it must not be clipped. */}
      <Band className="![content-visibility:visible]">
        <div className="to-card to-snow-v1 p-6 md:p-12">
          <Snowman />
          <h2 className="to-display to-h2">{season.label} snow tracker</h2>
          <p className="mt-3 text-[1.05rem] leading-relaxed text-muted md:hidden">We track every centimeter so you don’t have to.</p>
          <div className="mt-6 grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-5 md:mt-10 md:gap-x-16">
            <figure className="mx-auto">
              <MeasuringStick totalCm={season.totalCm} averageCm={season.averageCm} />
              <figcaption className="mt-6 text-center max-md:hidden md:mt-8">
                <span className="to-display block text-4xl tabular-nums text-fg">{season.totalCm} cm</span>
                <span className="mt-1 block text-[1rem] text-muted">so far this season, {trackerPercent}% of the average</span>
              </figcaption>
            </figure>
            <div>
              <p className="to-body max-md:hidden">
                We track every centimeter so you don’t have to. Our crews trigger at just 1cm of accumulation, ensuring your driveway is clear before the ice builds up.
              </p>
              <dl className="grid gap-2.5 sm:grid-cols-2 md:mt-8 md:gap-4 lg:grid-cols-4">
                {[
                  { label: "Season average", value: `${season.averageCm} cm`, primary: false },
                  { label: "Current total", value: `${season.totalCm} cm`, primary: true },
                  { label: "Last snowfall", value: season.lastSnowfallCm > 0 ? `${season.lastSnowfallCm} cm` : "None yet", primary: false },
                  { label: "Visits to date", value: String(season.visits), primary: false },
                ].map((item) => (
                  <div key={item.label} className={`rounded-[16px] px-4 py-2.5 md:rounded-[20px] md:px-5 md:py-5 ${item.primary ? "bg-brand text-brand-deep" : "bg-white/[0.05]"}`}>
                    <dt className={`text-[0.85rem] md:text-[0.95rem] ${item.primary ? "font-semibold text-brand-deep" : "text-muted"}`}>{item.label}</dt>
                    <dd className={`to-display text-[1.25rem] tabular-nums md:mt-1 md:text-[1.7rem] ${item.primary ? "text-brand-deep" : "text-fg"}`}>{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </Band>

      {/* SERVICE ZONES */}
      <Band>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="to-display to-h2">Our Calgary service zones</h2>
            <p className="to-sub mt-6">High-density routes for maximum reliability.</p>
            <p className="to-body mt-3">
              We strictly limit our service area to guarantee we can clear your property once every 24 hours. We focus exclusively on the deep south communities to ensure our crews are always nearby when a storm hits.
            </p>
            <dl className="mt-6 grid gap-3 md:mt-8 md:gap-4">
              {zones.map((zone) => (
                <div key={zone.name} className="to-card p-5 md:p-6">
                  <dt className="text-[1.2rem] font-semibold text-fg">{zone.name}</dt>
                  <dd className="mt-2 text-[1.1rem] leading-relaxed text-muted">{zone.areas.join(", ")}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-7 text-[1.12rem] text-muted">
              Outside these areas?{" "}
              <a href={site.phoneHref} className="to-link">
                Call for availability
              </a>
            </p>
          </div>

          <div className="relative aspect-square overflow-hidden rounded-[36px] shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)]">
            <Image
              src="/calgary-base-map.png"
              alt="Map of TERREOAK snow removal routes covering southwest and southeast Calgary"
              fill
              sizes="(min-width: 1280px) 580px, 100vw"
              className="object-cover brightness-[0.5] contrast-125 grayscale invert-[0.92]"
            />
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
              <path d="M 50,55 L 12,55 Q 5,75 15,85 Q 25,92 50,92 Z" fill="#019587" fillOpacity="0.45" stroke="#ccea8d" strokeWidth="0.6" />
              <path d="M 50,55 L 88,55 Q 95,75 85,85 Q 75,92 50,92 Z" fill="#019587" fillOpacity="0.45" stroke="#ccea8d" strokeWidth="0.6" />
              <g fontSize="3.6" fontWeight="600" textAnchor="middle" fill="#ffffff">
                <text x="31" y="74">SW Calgary</text>
                <text x="69" y="74">SE Calgary</text>
              </g>
            </svg>
          </div>
        </div>
      </Band>

      {/* RESULTS */}
      <Band>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <BeforeAfterSlider
            beforeImage="/snow-removal-okotoks-before.JPG"
            afterImage="/snow-removal-okotoks-after.JPG"
            beforeAlt="Driveway covered in snow before TERREOAK clearing"
            afterAlt="The same driveway cleared down to bare pavement"
          />
          <div>
            <h2 className="to-display to-h2">The TERREOAK results: clear down to the pavement</h2>
            <div className="mt-6 grid gap-5">
              <p className="to-body">Notice the difference. While others just push the top layer around, our crews clear your property right down to the bare pavement.</p>
              <p className="to-body">
                This meticulous approach eliminates hidden ice layers, preventing slips and keeping your walkways safe and accessible all winter long. Slide the image to see the TERREOAK standard.
              </p>
            </div>
          </div>
        </div>
      </Band>

      {/* FAQ */}
      <Band>
        <div className="grid gap-x-20 gap-y-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]">
          <h2 className="to-display to-h2">FAQs</h2>
          <FaqList faqs={snowFaqs} />
        </div>
      </Band>

      <BlogCta>
        <Button href="/blog/why-hire-snow-removal-company" variant="quiet">
          Why hire a snow removal company?
        </Button>
      </BlogCta>

      <StickyCta targetId="seasonal-form" label="Reserve a season pass" />
      <OfferPopup
        offer={{
          id: "snow-upfront",
          label: "Season pass offer",
          highlight: "10% off",
          title: "Pay for your season upfront and save 10%.",
          text: "Pay in full when you sign up and we take 10% off your snow removal season pass. One payment, and your winter is handled.",
          cta: "Claim 10% off",
          formId: "seasonal-form",
          photo: "/Snow Page web pics/Residential-snow-removal.JPG",
          photoAlt: "Edge of a freshly cleared Calgary driveway",
          graphic: { src: "/brand/snow-picket.png", alt: "TERREOAK snow picket", width: 169, height: 490 },
        }}
      />
    </main>
  );
}
