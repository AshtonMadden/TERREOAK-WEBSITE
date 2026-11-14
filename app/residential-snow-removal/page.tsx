import Image from "next/image";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import InstagramEmbed from "../components/InstagramEmbed";
import JobberLeadForm from "../components/JobberLeadForm";
import JsonLd from "../components/JsonLd";
import { Band, Button, Container, FaqList, GoogleMark, Stars, Tick } from "../components/ds";
import { CountUp, HeroVideo } from "../components/HeroMedia";
import { breadcrumbLd, faqLd, pageMeta } from "../lib/seo";
import { site } from "../lib/site";
import { addOns, instagramPosts, jobberForm, offers, passes, reviews, season, stats, steps, zones } from "./content";
import { snowFaqs } from "./faqs";
import { RouteCheck, StickyCta } from "./SnowClient";

const path = "/residential-snow-removal";
const description =
  "Residential snow removal in Calgary on a flat-rate season pass. Driveway and sidewalk clearing at 1cm, dispatch alerts, and a photo log after every visit.";

export const metadata = pageMeta({
  title: "Residential Snow Removal Calgary | Season Pass | TERREOAK",
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

export default function ResidentialSnowRemovalPage() {
  const trackerMax = Math.max(season.totalCm, season.averageCm);

  return (
    <main className="to-pavement to-flow overflow-x-clip">
      <JsonLd data={jsonLd} />

      {/* HERO: video behind, offer and route check on top, fading into the page */}
      <section className="relative isolate flex min-h-[100svh] flex-col justify-end">
        <div className="absolute inset-0 -z-10">
          <HeroVideo src="/videos/calgary-snow-removal-drone.mp4" poster="/images/snow-removal/hero-poster.jpg" />
          <div className="absolute inset-0 bg-[#1d1f21]/65" />
        </div>

        <Container className="pb-14 pt-36 md:pb-20">
          <h1 className="to-display to-h1 max-w-[22ch]">Calgary snow removal you can set and forget.</h1>
          <div className="mt-10 grid items-end gap-10 lg:mt-12 lg:grid-cols-[minmax(0,1fr)_minmax(360px,440px)] lg:gap-20">
            <div>
              <p className="to-body !text-fg">
                One season, one price, zero surprises. We clear your driveway and front sidewalk whenever 1cm falls, email you before the crew arrives, and send photos when the job is done.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="#seasonal-form">Reserve a season pass</Button>
                <Button href="#how-it-works" variant="quiet" className="bg-white/5 backdrop-blur-sm">
                  See how it works
                </Button>
              </div>
              <p className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-[1.05rem] text-white/80">
                <GoogleMark />
                <a href={site.googleProfile} target="_blank" rel="noopener noreferrer" className="to-link">
                  {site.reviews.rating} stars from {site.reviews.count} Google reviews
                </a>
                <span>We respond the same day.</span>
              </p>
            </div>
            <RouteCheck />
          </div>

          <dl className="mt-14 grid grid-cols-3 gap-6 md:mt-20 md:max-w-3xl">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dd className="to-display text-5xl md:text-6xl">
                  <CountUp end={stat.end} suffix={stat.suffix} />
                </dd>
                <dt className="mt-2 text-[1.02rem] text-muted">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* WHAT WE OFFER */}
      <Band>
        <h2 className="to-display to-h2">What we offer</h2>
        <p className="to-body mt-5">Reliable, professional snow management tailored for Calgary homeowners.</p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer, i) => (
            <article key={offer.title} className="to-card to-card-lift p-8">
              <span className="to-icon">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {offerIcons[i]}
                </svg>
              </span>
              <h3 className="to-display to-h3 mt-6">{offer.title}</h3>
              <p className="mt-3 text-[1.1rem] leading-relaxed text-muted">{offer.desc}</p>
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
              <p className="to-body">
                We service driveways and front sidewalks at just 1cm of accumulation, so your property stays clear and safe through every storm Calgary throws at it. Our route-based crews cover communities across SW and SE Calgary, with capacity capped each season so service quality never slips.
              </p>
              <p className="max-w-[62ch] text-[1.2rem] font-semibold leading-snug text-fg">
                Spots fill up before the first snowfall. Reserve your season pass early to lock in your route and your rate.
              </p>
            </div>
            <div className="mt-8">
              <Button href="#seasonal-form">Reserve a season pass</Button>
            </div>
          </div>
          <figure className="mx-auto w-full max-w-md">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[36px] shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)]">
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
        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step.title} className="to-card to-card-lift p-8">
              <span className="to-icon to-display text-2xl">{i + 1}</span>
              <h3 className="to-display to-h3 mt-6">{step.title}</h3>
              <p className="mt-3 text-[1.1rem] leading-relaxed text-muted">{step.desc}</p>
            </li>
          ))}
        </ol>
      </Band>

      {/* PASSES */}
      <Band>
        <h2 className="to-display to-h2 max-w-[18ch]">Pick the pass that fits your winter</h2>
        <div className="mt-12 grid gap-5 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
          {passes.map((pass, i) => (
            <article key={pass.name} className={`to-card relative flex flex-col overflow-hidden p-8 md:p-10 ${i === 0 ? "ring-1 ring-brand/45 md:pr-52" : ""}`}>
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
        <dl className="mt-10 grid gap-x-12 gap-y-8 px-2 md:grid-cols-3">
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

      {/* REFERRAL PROGRAM */}
      <Band>
        <div className="to-card grid gap-x-16 gap-y-10 p-8 md:p-12 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] lg:items-center">
          <div>
            <h2 className="to-display to-h2">Snowball referral program</h2>
            <p className="to-body mt-5">Refer a new customer and you both get $25 off. Refer up to 6 people to cover your entire season.</p>
            <p className="to-body mt-4">Contact us for your referral code.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={site.phoneHref}>Call {site.phoneDisplay}</Button>
              <Button href={`mailto:${site.email}?subject=Snowball%20referral%20code`} variant="quiet">
                Email for your code
              </Button>
            </div>
          </div>
          <dl className="grid grid-cols-3 gap-4 text-center">
            {[
              { value: "$25", label: "off for you" },
              { value: "$25", label: "off for your neighbour" },
              { value: "6", label: "referrals, at most" },
            ].map((item) => (
              <div key={item.label} className="rounded-[24px] bg-white/[0.05] px-3 py-7">
                <dd className="to-display text-4xl text-accent md:text-5xl">{item.value}</dd>
                <dt className="mt-2 text-[1rem] leading-snug text-muted">{item.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </Band>

      {/* SNOW TRACKER */}
      <Band>
        <div className="to-card grid gap-x-16 gap-y-10 p-8 md:p-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-center">
          <div>
            <h2 className="to-display to-h2">{season.label} snow tracker</h2>
            <p className="to-body mt-5">
              We track every centimeter so you don’t have to. Our crews trigger at just 1cm of accumulation, ensuring your driveway is clear before the ice builds up.
            </p>
          </div>
          <div>
            <div className="grid gap-5">
              {[
                { label: "Current total", value: season.totalCm, primary: true },
                { label: "Season average", value: season.averageCm, primary: false },
              ].map((row) => (
                <div key={row.label} className="grid grid-cols-[8.5rem_minmax(0,1fr)_5rem] items-center gap-4 text-[1.1rem]">
                  <span className="text-muted">{row.label}</span>
                  <span className="h-3 rounded-full bg-white/10">
                    <span className={`block h-full rounded-full ${row.primary ? "bg-brand" : "bg-white/55"}`} style={{ width: `${(row.value / trackerMax) * 100}%` }} />
                  </span>
                  <span className="text-right font-semibold tabular-nums text-fg">{row.value} cm</span>
                </div>
              ))}
            </div>
            <dl className="mt-9 grid grid-cols-2 gap-8">
              <div>
                <dt className="text-[1.05rem] text-muted">Last snowfall</dt>
                <dd className="to-display mt-1 text-4xl tabular-nums">{season.lastSnowfallCm} cm</dd>
              </div>
              <div>
                <dt className="text-[1.05rem] text-muted">Visits to date</dt>
                <dd className="to-display mt-1 text-4xl tabular-nums">{season.visits}</dd>
              </div>
            </dl>
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
            <dl className="mt-8 grid gap-4">
              {zones.map((zone) => (
                <div key={zone.name} className="to-card p-6">
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

      {/* GUARANTEES */}
      <Band>
        <h2 className="to-display to-h2">Our guarantees</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <article className="to-card p-8 md:p-10">
            <h3 className="to-display to-h3">First-service money-back guarantee</h3>
            <p className="mt-4 text-[1.12rem] leading-relaxed text-muted">
              Not happy after your first visit? We refund you in full, no questions, no fine print. We’re confident enough in our service to put that in writing because we’ve never had to use it.
            </p>
          </article>
          <article className="to-card p-8 md:p-10">
            <h3 className="to-display to-h3">Once every 24 hours guarantee</h3>
            <p className="mt-4 text-[1.12rem] leading-relaxed text-muted">
              We guarantee to service your property once every 24 hours during continuous snowfall, and within 24 hours of the snowfall ending. If we miss that window for any reason, we send a crew back at no charge. Calgary’s snow removal bylaw gives property owners 24 hours to clear sidewalks, we make sure you’re covered.
            </p>
          </article>
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

      {/* REVIEWS */}
      <Band>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="to-display to-h2">What our snow clients say</h2>
          <a href={site.googleProfile} target="_blank" rel="noopener noreferrer" className="to-focus flex w-fit items-center gap-3 rounded-full bg-white/[0.07] px-5 py-3 text-[1.05rem] font-medium text-fg transition-colors hover:bg-white/[0.12]">
            <GoogleMark />
            {site.reviews.rating} from {site.reviews.count} Google reviews
          </a>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {reviews.map((review) => (
            <figure key={review.name} className="to-card flex flex-col p-8">
              <Stars />
              <blockquote className="mt-5 text-[1.12rem] leading-relaxed text-fg">“{review.text}”</blockquote>
              <figcaption className="mt-auto pt-6 text-[1.05rem] font-semibold text-muted">{review.name}</figcaption>
            </figure>
          ))}
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

      {/* FAQ */}
      <Band>
        <div className="grid gap-x-20 gap-y-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]">
          <h2 className="to-display to-h2">FAQs</h2>
          <FaqList faqs={snowFaqs} />
        </div>
      </Band>

      {/* INSTAGRAM */}
      <Band>
        <h2 className="to-display to-h2">See the team in action</h2>
        <p className="to-body mt-5">
          Check out our latest snow removal updates over on Instagram. We post regular jobsite walk-throughs, blizzard updates, and before/after clearing results.
        </p>
        <div className="-mx-5 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 [scrollbar-width:none] sm:-mx-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0 lg:pb-0">
          {instagramPosts.map((url) => (
            <div key={url} className="w-[85%] flex-none snap-center sm:w-[380px] lg:w-auto">
              <InstagramEmbed url={url} />
            </div>
          ))}
        </div>
      </Band>

      {/* BLOG */}
      <Band>
        <div className="to-card flex flex-col gap-8 p-8 md:flex-row md:items-center md:justify-between md:p-12">
          <div>
            <h2 className="to-display to-h2">Our blog</h2>
            <p className="to-body mt-4">Stay updated with the latest landscaping tips, seasonal advice, and project highlights from the TERREOAK team.</p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Button href="/blog/why-hire-snow-removal-company" variant="quiet">
              Why hire a snow removal company?
            </Button>
            <Button href="/blog">Read our blog</Button>
          </div>
        </div>
      </Band>

      <StickyCta targetId="seasonal-form" label="Reserve a season pass" />
    </main>
  );
}
