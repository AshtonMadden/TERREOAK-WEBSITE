import Image from "next/image";
import Link from "next/link";
import JobberLeadForm from "./components/JobberLeadForm";
import { Band, BlogCta, Button, Container, FounderQuote, GoogleMark, Stars, Tick } from "./components/ds";
import { HeroVideo } from "./components/HeroMedia";
import { GalleryBand, InstagramBand } from "./components/sections";
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

        <Container className="pb-14 pt-36 md:pb-20">
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

          <ul className="mt-14 flex flex-col gap-x-10 gap-y-3 text-[1.1rem] font-medium text-fg sm:flex-row md:mt-20">
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
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link key={service.href} href={service.href} className="to-card to-card-lift to-focus group flex flex-col p-7">
              <h3 className="to-display to-h3">{service.title}</h3>
              <p className="mt-3 text-[1.05rem] leading-relaxed text-muted">{service.description}</p>
              <span className="mt-auto flex items-center gap-2 pt-6 text-[1.02rem] font-semibold text-accent">
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
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <Link key={project.id} href={project.link} className="to-card to-card-lift to-focus group flex flex-col overflow-hidden">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.img}
                  alt={`${project.title} in ${project.location}`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col p-7 md:p-8">
                <p className="to-sub">
                  {project.location.split(",")[0]}
                  {project.budget ? ` / ${project.budget} investment` : ""}
                </p>
                <h3 className="to-display to-h3 mt-3">{project.title}</h3>
                <p className="mt-3 line-clamp-3 text-[1.05rem] leading-relaxed text-muted">{project.desc}</p>
                <span className="mt-auto flex items-center gap-2 pt-6 text-[1.02rem] font-semibold text-accent">
                  Read project <Arrow />
                </span>
              </div>
            </Link>
          ))}
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

      {/* PROCESS */}
      <Band>
        <h2 className="to-display to-h2">Meet, design, build</h2>
        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {processSteps.map((step, i) => (
            <li key={step.title} className="to-card to-card-lift p-8">
              <span className="to-icon to-display text-2xl">{i + 1}</span>
              <h3 className="to-display to-h3 mt-6">{step.title}</h3>
              <p className="mt-3 text-[1.08rem] leading-relaxed text-muted">{step.desc}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8">
          <Button href="/our-process" variant="quiet">
            See our full process
          </Button>
        </div>
      </Band>

      {/* GUARANTEES */}
      <Band>
        <h2 className="to-display to-h2">Fully insured and guaranteed</h2>
        <p className="to-sub mt-4">Peace of mind</p>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {guarantees.map((item) => (
            <article key={item.id} className="to-card p-8">
              <span className="to-icon">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 3 5 6v5c0 4.5 2.9 8.3 7 10 4.1-1.7 7-5.5 7-10V6l-7-3Zm-3 9 2 2 4-4" />
                </svg>
              </span>
              <h3 className="to-display to-h3 mt-6">{item.title}</h3>
              <p className="mt-3 text-[1.08rem] leading-relaxed text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </Band>

      {/* REVIEWS */}
      <Band id="reviews">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="to-display to-h2">What our clients say</h2>
          <a href={site.googleProfile} target="_blank" rel="noopener noreferrer" className="to-focus flex w-fit items-center gap-3 rounded-full bg-white/[0.07] px-5 py-3 text-[1.05rem] font-medium text-fg transition-colors hover:bg-white/[0.12]">
            <GoogleMark />
            {site.reviews.rating} from {site.reviews.count} Google reviews
          </a>
        </div>
        <div className="mt-12 gap-5 md:columns-2 lg:columns-3">
          {reviews.map((review) => (
            <figure key={review.name} className="to-card mb-5 break-inside-avoid p-8">
              <Stars />
              <blockquote className="mt-5 text-[1.08rem] leading-relaxed text-fg">“{review.text}”</blockquote>
              <figcaption className="mt-6">
                <p className="text-[1.05rem] font-semibold text-fg">{review.name}</p>
                <p className="mt-1 text-[0.98rem] text-muted">{review.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Band>

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
