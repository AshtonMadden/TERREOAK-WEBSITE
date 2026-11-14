import Image from "next/image";
import Link from "next/link";
import JobberLeadForm from "./components/JobberLeadForm";
import { Band, BlogCta, Button, Container, FounderQuote, GoogleMark, Tick } from "./components/ds";
import { HeroVideo } from "./components/HeroMedia";
import ReadMore from "./components/ReadMore";
import { GalleryBand, InstagramBand, ProjectCards, ReviewsBand, StepsBand } from "./components/sections";
import { site } from "./lib/site";
import { gallery, guarantees, instagramPosts, jobberForm, processSteps, projects, reviews, services, trustPoints } from "./home-content";

const Arrow = () => (
  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function HomePage() {
  return (
    <main className="to-pavement to-flow overflow-x-clip">
      {/* HERO */}
      <section className="relative isolate flex min-h-[100svh] flex-col justify-end">
        <div className="absolute inset-0 -z-10">
          <HeroVideo src="/videos/calgary-landscaping-hero.mp4" poster="/images/home-hero-poster.jpg" />
          <div className="absolute inset-0 bg-[#1d1f21]/65" />
        </div>

        <Container className="pb-10 pt-28 md:pb-20 md:pt-36">
          <h1 className="to-display to-h1 max-w-[20ch]">Calgary landscape construction, where the sun meets soil.</h1>
          <p className="to-body mt-8 !text-fg">
            Premium landscape construction and year-round property maintenance for Calgary’s residential and commercial properties.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#home-form">Request an estimate</Button>
            <Button href="/projects" variant="quiet" className="bg-white/5 backdrop-blur-sm">
              See recent projects
            </Button>
          </div>
          <p className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-[1.05rem] text-white/80">
            <GoogleMark />
            <a href={site.googleProfile} target="_blank" rel="noopener noreferrer" className="to-link">
              {site.reviews.rating} stars from {site.reviews.count} Google reviews
            </a>
          </p>

          <ul className="mt-10 flex flex-col gap-x-10 gap-y-2 text-[1.05rem] font-medium text-fg sm:flex-row md:mt-20 md:text-[1.1rem]">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <Tick />
                {point}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* SERVICES */}
      <Band>
        <h2 className="to-display to-h2">Landscaping and snow services</h2>
        <p className="to-body mt-5">
          Our work is built around three core divisions: landscape construction, commercial grounds maintenance, and residential seasonal services.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-12 md:gap-5 lg:grid-cols-4">
          {services.map((service) => (
            <Link key={service.href} href={service.href} className="to-card to-card-lift to-focus group flex flex-col p-5 md:p-7">
              <h3 className="to-display to-h3">{service.title}</h3>
              <p className="mt-1.5 text-[1rem] leading-relaxed text-muted md:mt-3 md:text-[1.05rem]">{service.description}</p>
              <span className="mt-auto flex items-center gap-2 pt-3 text-[1.02rem] font-semibold text-accent md:pt-6">
                Learn more <Arrow />
              </span>
            </Link>
          ))}
        </div>
      </Band>

      {/* SNOW REMOVAL REMINDER */}
      <Band>
        <div className="relative isolate flex min-h-[460px] flex-col justify-end overflow-hidden rounded-[36px] shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)] md:min-h-[520px]">
          <div className="absolute inset-0 -z-10">
            <HeroVideo src="/videos/calgary-snow-removal-drone.mp4" poster="/images/snow-removal/hero-poster.jpg" />
            <div className="absolute inset-0 bg-[#1d1f21]/55" />
          </div>
          <div className="flex flex-col gap-8 p-8 md:flex-row md:items-end md:justify-between md:p-12">
            <div>
              <h2 className="to-display to-h2 max-w-[18ch]">Winter’s coming sooner than you think.</h2>
              <p className="to-display mt-3 text-[1.6rem] text-accent md:text-[2rem]">Are you prepared?</p>
            </div>
            <div className="shrink-0">
              <Button href="/residential-snow-removal#seasonal-form">Get a season pass</Button>
            </div>
          </div>
        </div>
      </Band>

      {/* FEATURED PROJECTS */}
      <Band>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="to-display to-h2">Featured projects</h2>
          <Button href="/projects" variant="quiet">
            View all projects
          </Button>
        </div>
        <div className="mt-8 md:mt-12">
          <ProjectCards projects={projects} />
        </div>
      </Band>

      {/* ABOUT */}
      <Band>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="to-display to-h2">TERREOAK Landscaping and Snow</h2>
            <div className="mt-7 grid gap-5">
              <p className="to-body">
                TERREOAK is a full-service landscape construction and property maintenance company serving Calgary. Our work is built around three core divisions: landscape construction, commercial grounds maintenance, and residential seasonal services.
              </p>
              <ReadMore>
                <p className="to-body">
                  From new-build sod and{" "}
                  <Link href="/softscapes" className="to-link">
                    softscape installation Calgary
                  </Link>{" "}
                  projects to hardscape construction and reliable snow removal, we deliver structured scheduling, professional systems, and results built for Alberta’s extreme seasons.
                </p>
                <p className="to-body">
                  We work with homeowners, builders, and commercial property managers who expect clean execution, clear communication, and long-term value.
                </p>
              </ReadMore>
            </div>
            <div className="mt-8">
              <Button href="/about">Read our story</Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[36px] shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)]">
            <Image
              src="/Calgary-landscape-design-build-patio.JPG"
              alt="TERREOAK high-end landscape construction project in Calgary"
              fill
              sizes="(min-width: 1280px) 600px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-14">
          <FounderQuote />
        </div>
      </Band>

      <StepsBand title="Meet, design, build" steps={processSteps}>
        <Button href="/our-process" variant="quiet">
          See our full process
        </Button>
      </StepsBand>

      {/* GUARANTEES */}
      <Band>
        <h2 className="to-display to-h2">Fully insured and guaranteed</h2>
        <p className="to-sub mt-4">Peace of mind</p>
        <div className="mt-8 grid gap-3 md:mt-12 md:grid-cols-3 md:gap-5">
          {guarantees.map((item) => (
            <article key={item.id} className="to-card flex gap-4 p-5 md:block md:p-8">
              <span className="to-icon shrink-0 max-md:h-11 max-md:w-11">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 3 5 6v5c0 4.5 2.9 8.3 7 10 4.1-1.7 7-5.5 7-10V6l-7-3Zm-3 9 2 2 4-4" />
                </svg>
              </span>
              <div>
                <h3 className="to-display to-h3 md:mt-6">{item.title}</h3>
                <p className="mt-1.5 text-[1rem] leading-relaxed text-muted md:mt-3 md:text-[1.08rem]">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Band>

      <ReviewsBand id="reviews" title="What our clients say" reviews={reviews} />

      <GalleryBand title="Our work" images={gallery}>
        <Button href="/projects" variant="quiet">
          View all projects
        </Button>
      </GalleryBand>

      {/* ESTIMATE FORM */}
      <Band id="home-form" surface="snow">
        <div className="grid gap-x-20 gap-y-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <div>
            <h2 className="to-display to-h2">Request an estimate</h2>
            <p className="to-body mt-6">Tell us about your property and what you have in mind. We’ll follow up to book a site visit.</p>
            <ul className="mt-8 grid gap-3 text-[1.1rem] font-medium text-fg">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <Tick />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[28px] bg-white p-4 shadow-[0_30px_60px_-40px_rgba(0,0,0,0.35)] md:p-7">
            <JobberLeadForm clienthubId={jobberForm.clienthubId} formUrl={jobberForm.formUrl} />
          </div>
        </div>
      </Band>

      <InstagramBand
        title="Latest project videos"
        lead="Check out our latest landscape transformations and snow removal updates over on Instagram. We post regular jobsite walk-throughs and before/afters."
        posts={instagramPosts}
      />

      <BlogCta />
    </main>
  );
}
