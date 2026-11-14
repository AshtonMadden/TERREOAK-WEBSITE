import Image from "next/image";
import Link from "next/link";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import InstagramEmbed from "../components/InstagramEmbed";
import JobberLeadForm from "../components/JobberLeadForm";
import JsonLd from "../components/JsonLd";
import { Band, Button, Container, FaqList } from "../components/ds";
import { breadcrumbLd, faqLd, pageMeta } from "../lib/seo";
import { site } from "../lib/site";
import { addOns, instagramPosts, jobberForm, offers, passes, season, steps, zones } from "./content";
import { snowFaqs } from "./faqs";
import { RouteCheck, StickyCta } from "./SnowClient";

const path = "/residential-snow-removal";
const description =
  "Residential snow removal in Calgary on a flat-rate season pass. Driveway and sidewalk clearing at 1cm, dispatch alerts, and a photo log after every visit.";

export const metadata = pageMeta({
  title: "Residential Snow Removal Calgary | Season Pass | TERREOAK",
  description,
  path,
  image: "/Snow Page web pics/Residential-snow-removal.JPG",
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

const Tick = () => (
  <svg className="mt-[0.35em] h-4 w-4 shrink-0 text-accent" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="m2.5 8.5 3.5 3.5 7.5-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GoogleMark = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden="true">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.28 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

export default function ResidentialSnowRemovalPage() {
  const trackerMax = Math.max(season.totalCm, season.averageCm);

  return (
    <main>
      <JsonLd data={jsonLd} />

      {/* HERO: the offer, the working route check, and the cleared edge itself */}
      <section className="to-pavement overflow-x-clip pt-[72px]">
        <Container className="pb-12 pt-14 md:pb-16 md:pt-24">
          <h1 className="to-display to-h1 max-w-[22ch]">Calgary snow removal on one flat seasonal price.</h1>
          <div className="mt-10 grid items-start gap-10 lg:mt-14 lg:grid-cols-[minmax(0,1fr)_minmax(360px,440px)] lg:gap-20">
            <div>
              <p className="to-body !text-fg">
                One season, one price, zero surprises. We clear your driveway and front sidewalk whenever 1cm falls, email you before the crew arrives, and send photos when the job is done.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="#seasonal-form">Reserve a season pass</Button>
                <Button href="#how-it-works" variant="quiet">
                  See how it works
                </Button>
              </div>
              <p className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-[1.05rem] text-muted">
                <GoogleMark />
                <a href={site.googleProfile} target="_blank" rel="noopener noreferrer" className="to-link">
                  {site.reviews.rating} stars from {site.reviews.count} Google reviews
                </a>
                <span>We respond the same day.</span>
              </p>
            </div>
            <RouteCheck />
          </div>
        </Container>

        <figure className="to-plow relative h-[44vh] min-h-[280px] w-full md:h-[56vh]">
          <Image
            src="/Snow Page web pics/Residential-snow-removal.JPG"
            alt="The edge of a freshly cleared driveway: packed snow on one side, bare pavement on the other"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <figcaption className="absolute inset-x-0 bottom-5">
            <Container>
              <span className="inline-block rounded-lg bg-[#1d1f21] px-4 py-2.5 text-[1.05rem] font-medium text-white">
                Cleared down to the pavement, not just pushed around.
              </span>
            </Container>
          </figcaption>
        </figure>
      </section>

      {/* WHAT THE PASS COVERS: a spec sheet, not a card grid */}
      <Band surface="snow">
        <div className="grid gap-x-20 gap-y-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="to-display to-h2">What a season pass covers</h2>
            <p className="to-body mt-6">Reliable, professional snow management tailored for Calgary homeowners.</p>
          </div>
          <dl className="border-t border-rule">
            {offers.map((offer) => (
              <div key={offer.title} className="grid gap-x-10 gap-y-2 border-b border-rule py-7 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
                <dt className="to-display to-h3">{offer.title}</dt>
                <dd className="text-[1.12rem] leading-relaxed text-muted">{offer.desc}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Band>

      {/* BUILT FOR WINTER + SIGN-UP SEQUENCE */}
      <Band id="how-it-works">
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
          </div>
          <figure className="mx-auto w-full max-w-md">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[14px]">
              <Image
                src="/Snow Page web pics/TERREOAK-Snow-Picket.JPG"
                alt="A green TERREOAK snow picket standing beside a cleared Calgary driveway"
                fill
                sizes="(min-width: 1280px) 440px, 90vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-[1.02rem] text-muted">The picket we install at your driveway so crews find you fast, even before sunrise.</figcaption>
          </figure>
        </div>

        <h3 className="to-display to-h3 mt-20 border-t border-rule pt-10">From sign-up to first snowfall</h3>
        <ol className="mt-8 grid gap-10 md:grid-cols-3 md:gap-12">
          {steps.map((step, i) => (
            <li key={step.title}>
              <span className="to-display block text-6xl leading-none text-accent">{i + 1}</span>
              <p className="mt-5 text-[1.3rem] font-semibold text-fg">{step.title}</p>
              <p className="mt-2 text-[1.12rem] leading-relaxed text-muted">{step.desc}</p>
            </li>
          ))}
        </ol>
      </Band>

      {/* PASSES */}
      <Band surface="snow">
        <h2 className="to-display to-h2 max-w-[18ch]">Pick the pass that fits your winter</h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
          {passes.map((pass, i) => (
            <article key={pass.name} className={`flex flex-col rounded-[14px] p-7 md:p-9 ${i === 0 ? "to-pavement" : "border border-rule bg-raised"}`}>
              <h3 className="to-display to-h3">{pass.name}</h3>
              <p className="mt-1 text-[1.1rem] font-medium text-accent">{pass.term}</p>
              <p className="mt-5 text-[1.12rem] leading-relaxed text-muted">{pass.summary}</p>
              <ul className={`mt-6 grid gap-3 text-[1.1rem] text-fg ${i === 0 ? "sm:grid-cols-2" : ""}`}>
                {pass.includes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <Tick />
                    {item}
                  </li>
                ))}
              </ul>
              {pass.payment && <p className="mt-7 border-t border-rule pt-5 text-[1.08rem] text-muted">{pass.payment}</p>}
              <div className="mt-auto pt-8">
                <Button href="#seasonal-form" variant={i === 0 ? "primary" : "quiet"}>
                  {i === 0 ? "Reserve a season pass" : "Ask about a short-term pass"}
                </Button>
              </div>
            </article>
          ))}
        </div>
        <dl className="mt-12 grid gap-x-12 gap-y-8 border-t border-rule pt-10 md:grid-cols-3">
          {addOns.map((addOn) => (
            <div key={addOn.name}>
              <dt className="text-[1.25rem] font-semibold text-fg">Add-on: {addOn.name}</dt>
              <dd className="mt-2 text-[1.08rem] leading-relaxed text-muted">{addOn.desc}</dd>
            </div>
          ))}
          <div>
            <dt className="text-[1.25rem] font-semibold text-fg">Not offered: one-time clears</dt>
            <dd className="mt-2 text-[1.08rem] leading-relaxed text-muted">Our crews follow set neighbourhood routes each storm, which is what lets us guarantee a visit every 24 hours.</dd>
          </div>
        </dl>
      </Band>

      {/* ROUTES */}
      <Band>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="to-display to-h2">Where we run routes</h2>
            <p className="to-body mt-6">
              We strictly limit our service area to guarantee we can clear your property once every 24 hours. We focus exclusively on the deep south communities to ensure our crews are always nearby when a storm hits.
            </p>
            <dl className="mt-9 border-t border-rule">
              {zones.map((zone) => (
                <div key={zone.name} className="border-b border-rule py-6">
                  <dt className="text-[1.25rem] font-semibold text-fg">{zone.name}</dt>
                  <dd className="mt-2 text-[1.12rem] leading-relaxed text-muted">{zone.areas.join(", ")}</dd>
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

          <div className="relative aspect-square overflow-hidden rounded-[14px]">
            <Image
              src="/calgary-base-map.png"
              alt="Map of TERREOAK snow removal routes covering southwest and southeast Calgary"
              fill
              sizes="(min-width: 1280px) 580px, 100vw"
              className="object-cover brightness-[0.5] contrast-125 grayscale invert-[0.92]"
            />
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
              <path d="M 50,55 L 12,55 Q 5,75 15,85 Q 25,92 50,92 Z" fill="#01fa6d" fillOpacity="0.3" stroke="#01fa6d" strokeWidth="0.6" />
              <path d="M 50,55 L 88,55 Q 95,75 85,85 Q 75,92 50,92 Z" fill="#01fa6d" fillOpacity="0.3" stroke="#01fa6d" strokeWidth="0.6" />
              <g fontSize="3.6" fontWeight="600" textAnchor="middle" fill="#ffffff">
                <text x="31" y="74">Southwest route</text>
                <text x="69" y="74">Southeast route</text>
              </g>
            </svg>
          </div>
        </div>
      </Band>

      {/* GUARANTEES */}
      <Band surface="snow">
        <h2 className="to-display to-h2">Two guarantees, in writing</h2>
        <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-0">
          <div className="md:pr-14">
            <h3 className="to-display to-h3">First-service money-back guarantee</h3>
            <p className="to-body mt-4">
              Not happy after your first visit? We refund you in full, no questions, no fine print. We’re confident enough in our service to put that in writing because we’ve never had to use it.
            </p>
          </div>
          <div className="border-rule md:border-l md:pl-14">
            <h3 className="to-display to-h3">Once every 24 hours guarantee</h3>
            <p className="to-body mt-4">
              We guarantee to service your property once every 24 hours during continuous snowfall, and within 24 hours of the snowfall ending. If we miss that window for any reason, we send a crew back at no charge. Calgary’s snow removal bylaw gives property owners 24 hours to clear sidewalks, we make sure you’re covered.
            </p>
          </div>
        </div>
      </Band>

      {/* RESULTS + TRACKER */}
      <Band>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <BeforeAfterSlider
            beforeImage="/snow-removal-okotoks-before.JPG"
            afterImage="/snow-removal-okotoks-after.JPG"
            beforeAlt="Driveway covered in snow before TERREOAK clearing"
            afterAlt="The same driveway cleared down to bare pavement"
          />
          <div>
            <h2 className="to-display to-h2">Clear down to the pavement</h2>
            <div className="mt-6 grid gap-5">
              <p className="to-body">Notice the difference. While others just push the top layer around, our crews clear your property right down to the bare pavement.</p>
              <p className="to-body">
                This meticulous approach eliminates hidden ice layers, preventing slips and keeping your walkways safe and accessible all winter long. Slide the image to see the TERREOAK standard.
              </p>
            </div>
            <p className="mt-7">
              <Link href="/blog/why-hire-snow-removal-company" className="to-link text-[1.12rem]">
                Why hire a snow removal company?
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-20 border-t border-rule pt-10">
          <h3 className="to-display to-h3">{season.label} snow tracker</h3>
          <p className="to-body mt-3">We track every centimeter so you don’t have to.</p>
          <div className="mt-8 grid gap-x-16 gap-y-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
            <div className="grid gap-5">
              {[
                { label: "Current total", value: season.totalCm, primary: true },
                { label: "Season average", value: season.averageCm, primary: false },
              ].map((row) => (
                <div key={row.label} className="grid grid-cols-[9.5rem_minmax(0,1fr)_5rem] items-center gap-4 text-[1.12rem]">
                  <span className="text-muted">{row.label}</span>
                  <span className="h-3 rounded-sm bg-white/10">
                    <span className={`block h-full rounded-sm ${row.primary ? "bg-brand" : "bg-white/55"}`} style={{ width: `${(row.value / trackerMax) * 100}%` }} />
                  </span>
                  <span className="text-right font-semibold tabular-nums text-fg">{row.value} cm</span>
                </div>
              ))}
            </div>
            <dl className="grid grid-cols-2 gap-8">
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

      {/* SIGN UP */}
      <Band id="seasonal-form" surface="snow">
        <div className="grid gap-x-20 gap-y-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <div>
            <h2 className="to-display to-h2">Reserve your season pass</h2>
            <p className="to-body mt-6">Tell us about your property and we’ll get back to you the same day.</p>
            <div className="mt-8 border-t border-rule pt-6">
              <h3 className="text-[1.25rem] font-semibold text-fg">Before you sign up</h3>
              <p className="mt-2 text-[1.1rem] leading-relaxed text-muted">
                Our crews strictly operate on a route-based system. We only come <strong className="font-semibold text-fg">once every 24 hours</strong> to service your property during a snowfall event. This guarantees consistent, reliable service for every client on our route.
              </p>
            </div>
          </div>
          <div className="rounded-[14px] border border-rule bg-white p-4 md:p-7">
            <JobberLeadForm clienthubId={jobberForm.clienthubId} formUrl={jobberForm.formUrl} />
          </div>
        </div>
      </Band>

      {/* FAQ */}
      <Band>
        <div className="grid gap-x-20 gap-y-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]">
          <h2 className="to-display to-h2">Questions homeowners ask</h2>
          <FaqList faqs={snowFaqs} />
        </div>
      </Band>

      {/* INSTAGRAM */}
      <Band surface="snow">
        <h2 className="to-display to-h2">The crew at work</h2>
        <p className="to-body mt-6">
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

      <StickyCta targetId="seasonal-form" label="Reserve a season pass" />
    </main>
  );
}
