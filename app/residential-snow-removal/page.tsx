import Image from "next/image";
import Link from "next/link";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import InstagramEmbed from "../components/InstagramEmbed";
import JobberLeadForm from "../components/JobberLeadForm";
import JsonLd from "../components/JsonLd";
import Reveal from "../components/Reveal";
import { Arrow, Button, Container, Eyebrow, FaqList, ReviewBadge, Section } from "../components/ds";
import { breadcrumbLd, faqLd, pageMeta } from "../lib/seo";
import { site } from "../lib/site";
import { instagramPosts, jobberForm, offers, season, stats, steps, zones } from "./content";
import { snowFaqs } from "./faqs";
import { CountUp, HeroVideo, StickyCta } from "./SnowClient";

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

const icons: Record<string, React.ReactNode> = {
  calendar: <path d="M7 3v3M17 3v3M4 9h16M6 5h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm3 9 2 2 4-4" />,
  ruler: <path d="M3 17 17 3l4 4L7 21l-4-4Zm5-5 2 2m1-5 2 2m1-5 2 2" />,
  camera: <path d="M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Zm8 9a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />,
  bell: <path d="M6 16V11a6 6 0 1 1 12 0v5l2 2H4l2-2Zm4 5h4" />,
  pin: <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Zm0-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />,
  card: <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Zm0 3h18M7 15h4" />,
};

function Icon({ name }: { name: string }) {
  return (
    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand/25 bg-brand/10 text-brand">
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {icons[name]}
      </svg>
    </span>
  );
}

const Check = () => (
  <svg className="mt-1 h-5 w-5 shrink-0 text-brand" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="10" cy="10" r="9" stroke="currentColor" strokeOpacity="0.35" />
    <path d="m6 10.5 2.5 2.5L14 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function ResidentialSnowRemovalPage() {
  const trackerMax = Math.max(season.totalCm, season.averageCm);

  return (
    <main className="overflow-x-clip bg-coal text-white">
      <JsonLd data={jsonLd} />

      {/* HERO */}
      <section className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <HeroVideo src="/videos/calgary-snow-removal-drone.mp4" poster="/images/snow-removal/hero-poster.jpg" />
          <div className="absolute inset-0 bg-gradient-to-r from-coal via-coal/75 to-coal/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-coal via-coal/30 to-black/40" />
          <div className="to-grid absolute inset-0" />
        </div>

        <Container className="pb-10 pt-40 md:pb-14">
          <div className="max-w-4xl">
            <Eyebrow>Calgary · Residential snow removal</Eyebrow>
            <h1 className="to-h1 mt-6">
              Calgary snow removal.
              <span className="block text-brand">One season, one price, zero surprises.</span>
            </h1>
            <p className="to-lead mt-7 max-w-2xl !text-white/75">
              A flat-rate season pass for your driveway and front sidewalk. We dispatch at just 1cm of snow, email you before we arrive, and send a photo log after every visit.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="#seasonal-form">
                Reserve season pass <Arrow />
              </Button>
              <Button href="#how-it-works" variant="ghost">
                How it works
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
              <ReviewBadge />
              <span className="text-sm font-medium text-white/60">Responds same day</span>
            </div>
          </div>

          <dl className="mt-14 grid grid-cols-2 overflow-hidden rounded-3xl border border-line bg-coal/60 backdrop-blur-md md:mt-20 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div key={stat.label} className={`px-6 py-6 md:px-8 md:py-7 ${i % 2 ? "border-l border-line" : ""} ${i > 1 ? "border-t border-line md:border-t-0" : ""} ${i === 2 ? "md:border-l" : ""}`}>
                <dd className="text-4xl font-bold tracking-[-0.04em] text-white md:text-5xl">
                  <CountUp end={stat.end} suffix={stat.suffix} />
                </dd>
                <dt className="mt-2 text-sm font-medium text-mist">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* WHAT'S INCLUDED */}
      <Section
        eyebrow="What we offer"
        title="Everything included in your season pass."
        lead="Reliable, professional snow management tailored for Calgary homeowners."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer, i) => (
            <Reveal key={offer.title} delay={(i % 3) * 80}>
              <article className="to-card to-card-hover h-full p-7 md:p-8">
                <Icon name={offer.icon} />
                <h3 className="mt-6 text-2xl font-semibold tracking-tight">{offer.title}</h3>
                <p className="mt-3 text-[1.05rem] leading-relaxed text-mist">{offer.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* BUILT FOR WINTER */}
      <Section tone="panel">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <Reveal>
            <Eyebrow>Built for winter</Eyebrow>
            <h2 className="to-h2 mt-4">Residential snow removal in Calgary that’s built for winter.</h2>
            <div className="mt-7 grid gap-5 text-[1.12rem] leading-relaxed text-mist">
              <p>
                TERREOAK provides residential snow removal for Calgary homeowners who want a reliable, hands-off solution for the entire winter season. No wondering if your driveway got done, just consistent service, dispatch alerts before we arrive, and a photo log in your inbox after every visit.
              </p>
              <p>
                We service driveways and front sidewalks at just 1cm of accumulation, so your property stays clear and safe through every storm Calgary throws at it. Our route-based crews cover communities across SW and SE Calgary, with capacity capped each season so service quality never slips.
              </p>
            </div>
            <div className="mt-8 flex items-start gap-4 rounded-2xl border border-brand/25 bg-brand/[0.07] p-5">
              <Check />
              <p className="text-[1.08rem] font-semibold leading-snug text-white">
                Spots fill up before the first snowfall. Reserve your season pass early to lock in your route and your rate.
              </p>
            </div>
            <div className="mt-8">
              <Button href="#seasonal-form">
                Reserve season pass <Arrow />
              </Button>
            </div>
          </Reveal>
          <Reveal delay={120} className="relative mx-auto w-full max-w-md">
            <div className="to-glow absolute -inset-10 -z-10" />
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-line">
              <Image
                src="/Snow Page web pics/TERREOAK-Snow-Picket.JPG"
                alt="TERREOAK snow picket marking a cleared Calgary driveway"
                fill
                sizes="(min-width: 1280px) 440px, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-16">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">Your driveway marker</p>
                <p className="mt-1 text-lg font-semibold">One picket. Crews find you fast, even before sunrise.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section id="how-it-works" eyebrow="Our process" title="How it works." lead="Three steps and your winter is handled.">
        <ol className="grid gap-4 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 100}>
              <li className="to-card h-full p-7 md:p-8">
                <span className="text-6xl font-bold tracking-[-0.05em] text-brand/90">0{i + 1}</span>
                <h3 className="mt-8 text-2xl font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-3 text-[1.05rem] leading-relaxed text-mist">{step.desc}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* SNOW TRACKER */}
      <Section tone="panel">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <Eyebrow>Snow tracker</Eyebrow>
            <h2 className="to-h2 mt-4">
              {season.label} <span className="text-brand">snow tracker.</span>
            </h2>
            <p className="to-lead mt-5">
              We track every centimeter so you don’t have to. Our crews trigger at just 1cm of accumulation, ensuring your driveway is clear before the ice builds up.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="to-card p-7 md:p-9">
              <div className="grid gap-6">
                {[
                  { label: `${season.label} total`, value: season.totalCm, highlight: true },
                  { label: "Season average", value: season.averageCm, highlight: false },
                ].map((row) => (
                  <div key={row.label}>
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-sm font-medium text-mist">{row.label}</span>
                      <span className={`text-3xl font-bold tracking-[-0.03em] tabular-nums ${row.highlight ? "text-brand" : "text-white"}`}>
                        {row.value}
                        <span className="ml-1 text-base font-semibold text-mist">cm</span>
                      </span>
                    </div>
                    <div className="mt-3 h-3 overflow-hidden rounded-full bg-white/[0.07]">
                      <div
                        className={`h-full rounded-full ${row.highlight ? "bg-brand shadow-[0_0_20px_rgba(1,250,109,0.5)]" : "bg-white/40"}`}
                        style={{ width: `${(row.value / trackerMax) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-line pt-7">
                <div>
                  <dt className="text-sm font-medium text-mist">Last snowfall</dt>
                  <dd className="mt-1 text-3xl font-bold tracking-[-0.03em] tabular-nums">
                    {season.lastSnowfallCm}
                    <span className="ml-1 text-base font-semibold text-mist">cm</span>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-mist">Visits to date</dt>
                  <dd className="mt-1 text-3xl font-bold tracking-[-0.03em] tabular-nums">{season.visits}</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* SERVICE AREA */}
      <Section eyebrow="Service area" title="Our Calgary service zones." lead="High-density routes for maximum reliability.">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="text-[1.12rem] leading-relaxed text-mist">
              We strictly limit our service area to guarantee we can clear your property once every 24 hours. We focus exclusively on the deep south communities to ensure our crews are always nearby when a storm hits.
            </p>
            <div className="mt-8 grid gap-4">
              {zones.map((zone) => (
                <div key={zone.name} className="to-card p-6">
                  <h3 className="text-xl font-semibold tracking-tight">{zone.name}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {zone.areas.map((area) => (
                      <li key={area} className="rounded-full border border-line bg-white/[0.04] px-3.5 py-1.5 text-[0.95rem] text-white/85">
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-7 text-[1.05rem] text-mist">
              Outside these areas?{" "}
              <a href={site.phoneHref} className="to-focus font-semibold text-brand underline decoration-brand/40 underline-offset-4 hover:decoration-brand">
                Call for availability
              </a>
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-line">
              <Image
                src="/calgary-base-map.png"
                alt="Map of TERREOAK snow removal service zones in southwest and southeast Calgary"
                fill
                sizes="(min-width: 1280px) 580px, 100vw"
                className="object-cover brightness-[0.55] contrast-125 grayscale invert-[0.92] hue-rotate-180"
              />
              <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
                <path d="M 50,55 L 12,55 Q 5,75 15,85 Q 25,92 50,92 Z" fill="#01fa6d" fillOpacity="0.28" stroke="#01fa6d" strokeWidth="0.5" />
                <path d="M 50,55 L 88,55 Q 95,75 85,85 Q 75,92 50,92 Z" fill="#01fa6d" fillOpacity="0.28" stroke="#01fa6d" strokeWidth="0.5" />
                <line x1="50" y1="55" x2="50" y2="92" stroke="#01fa6d" strokeWidth="0.3" strokeDasharray="1.2,1.2" opacity="0.7" />
                <g fontSize="3.4" fontWeight="700" textAnchor="middle">
                  <rect x="19" y="69.5" width="22" height="6.5" rx="3.25" fill="#01fa6d" />
                  <text x="30" y="74" fill="#06120b">SW Calgary</text>
                  <rect x="59" y="69.5" width="22" height="6.5" rx="3.25" fill="#01fa6d" />
                  <text x="70" y="74" fill="#06120b">SE Calgary</text>
                </g>
              </svg>
              <div className="absolute left-5 top-5 flex items-center gap-2.5 rounded-full border border-line bg-coal/85 px-4 py-2 backdrop-blur">
                <span className="h-2 w-2 animate-pulse rounded-full bg-brand" />
                <span className="text-sm font-semibold">Active service area</span>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* GUARANTEES */}
      <Section tone="panel" eyebrow="Our guarantees" title="In writing, not in fine print.">
        <div className="grid gap-4 md:grid-cols-2">
          <Reveal>
            <article className="to-card h-full p-7 md:p-9">
              <span className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">Guarantee 01</span>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">First-service money-back guarantee</h3>
              <p className="mt-4 text-[1.08rem] leading-relaxed text-mist">
                Not happy after your first visit? We refund you in full, no questions, no fine print. We’re confident enough in our service to put that in writing because we’ve never had to use it.
              </p>
            </article>
          </Reveal>
          <Reveal delay={100}>
            <article className="to-card h-full p-7 md:p-9">
              <span className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">Guarantee 02</span>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">Once every 24 hours guarantee</h3>
              <p className="mt-4 text-[1.08rem] leading-relaxed text-mist">
                We guarantee to service your property once every 24 hours during continuous snowfall, and within 24 hours of the snowfall ending. If we miss that window for any reason, we send a crew back at no charge. Calgary’s snow removal bylaw gives property owners 24 hours to clear sidewalks, we make sure you’re covered.
              </p>
            </article>
          </Reveal>
        </div>
      </Section>

      {/* RESULTS */}
      <Section eyebrow="The TERREOAK results" title="Clear down to the pavement.">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <div className="grid gap-5 text-[1.12rem] leading-relaxed text-mist">
              <p>Notice the difference. While others just push the top layer around, our crews clear your property right down to the bare pavement.</p>
              <p>
                This meticulous approach eliminates hidden ice layers, preventing slips and keeping your walkways safe and accessible all winter long. Slide the image to see the TERREOAK standard.
              </p>
            </div>
            <div className="mt-8">
              <Link href="/blog/why-hire-snow-removal-company" className="to-focus inline-flex items-center gap-2 font-semibold text-brand hover:underline hover:underline-offset-4">
                Why hire a snow removal company? <Arrow />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={120} className="order-1 lg:order-2">
            <BeforeAfterSlider
              beforeImage="/snow-removal-okotoks-before.JPG"
              afterImage="/snow-removal-okotoks-after.JPG"
              beforeAlt="Driveway covered in snow before TERREOAK clearing"
              afterAlt="The same driveway cleared down to bare pavement"
            />
          </Reveal>
        </div>
      </Section>

      {/* INSTAGRAM */}
      <Section
        tone="panel"
        eyebrow="Follow along"
        title="See the team in action."
        lead="Check out our latest snow removal updates over on Instagram. We post regular jobsite walk-throughs, blizzard updates, and before/after clearing results."
      >
        <div className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 [scrollbar-width:none] sm:-mx-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0 lg:pb-0">
          {instagramPosts.map((url) => (
            <div key={url} className="w-[85%] flex-none snap-center sm:w-[380px] lg:w-auto">
              <InstagramEmbed url={url} />
            </div>
          ))}
        </div>
      </Section>

      {/* SIGN UP */}
      <Section id="seasonal-form" eyebrow="Season pass" title="Sign up for your season pass." lead="Tell us about your property and we’ll get back to you the same day.">
        <Reveal>
          <div className="mb-6 flex items-start gap-4 rounded-2xl border border-brand/25 bg-brand/[0.07] p-5 md:p-6">
            <svg className="mt-0.5 h-6 w-6 shrink-0 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 11v5M12 8h.01" />
            </svg>
            <div>
              <h3 className="text-lg font-semibold">Important service expectation</h3>
              <p className="mt-1.5 text-[1.05rem] leading-relaxed text-mist">
                Our crews strictly operate on a route-based system. We only come <strong className="font-semibold text-white">once every 24 hours</strong> to service your property during a snowfall event. This guarantees consistent, reliable service for every client on our route.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-line bg-white p-3 text-black shadow-2xl shadow-black/40 md:p-6">
            <JobberLeadForm clienthubId={jobberForm.clienthubId} formUrl={jobberForm.formUrl} />
          </div>
        </Reveal>
      </Section>

      {/* FAQ */}
      <Section tone="panel" eyebrow="FAQ" title="Questions, answered.">
        <FaqList faqs={snowFaqs} />
      </Section>

      {/* CLOSING CTA */}
      <section className="relative isolate overflow-hidden bg-coal py-24 md:py-32">
        <div className="to-grid absolute inset-0 -z-10" />
        <div className="to-glow absolute left-1/2 top-0 -z-10 h-[420px] w-[900px] max-w-full -translate-x-1/2" />
        <Container className="text-center">
          <Reveal>
            <h2 className="to-h2 mx-auto max-w-3xl">
              Winter’s coming either way. <span className="text-brand">Be ready for it.</span>
            </h2>
            <p className="to-lead mx-auto mt-5 max-w-xl">One flat rate for the whole season, serviced at 1cm, with a photo log after every visit.</p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="#seasonal-form">
                Reserve season pass <Arrow />
              </Button>
              <Button href={site.phoneHref} variant="ghost">
                Call {site.phoneDisplay}
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <StickyCta targetId="seasonal-form" label="Reserve season pass" />
    </main>
  );
}
