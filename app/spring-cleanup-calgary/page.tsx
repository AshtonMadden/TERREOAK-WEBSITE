import Link from "next/link";
import Image from "next/image";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import JobberLeadForm from "../components/JobberLeadForm";
import JsonLd from "../components/JsonLd";
import OfferPopup from "../components/OfferPopup";
import StickyCta from "../components/StickyCta";
import { Band, BlogCta, Button, FaqList, PageHero, Tick } from "../components/ds";
import { GalleryBand } from "../components/sections";
import { CountUp } from "../components/HeroMedia";
import { breadcrumbLd, faqLd, pageMeta } from "../lib/seo";
import { site } from "../lib/site";
import { benefits, faqs, gallery, included, jobberForm, stats, steps, treatments } from "./content";

const path = "/spring-cleanup-calgary";
const description =
  "Spring yard cleanup in Calgary: power raking, core aeration, debris removal and a first mow for your lawn. Free fertilizer application when you book.";

export const metadata = pageMeta({
  title: "Spring Yard Cleanup Calgary | Power Raking & Aeration",
  description,
  path,
  image: "/spring-cleanup-pics/Calgary-Core-Aeration.JPG",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${site.url}${path}#service`,
      name: "Spring Cleanup",
      serviceType: "Spring yard and lawn cleanup, power raking and core aeration",
      description,
      url: `${site.url}${path}`,
      provider: { "@id": `${site.url}/#localbusiness` },
      areaServed: { "@type": "City", name: "Calgary" },
    },
    { "@id": `${site.url}${path}#breadcrumb`, ...breadcrumbLd([{ name: "Home", path: "/" }, { name: "Spring Cleanup", path }]) },
    { "@id": `${site.url}${path}#faq`, ...faqLd(faqs) },
  ],
};

export default function SpringCleanupPage() {
  return (
    <main className="to-pavement to-flow overflow-x-clip">
      <JsonLd data={jsonLd} />

      <PageHero
        title={
          <>
            Spring yard cleanup in Calgary. <span className="block">A fresh start for your lawn.</span>
          </>
        }
        lead="Power raking, core aeration, debris removal and a first mow that clear out winter and set your lawn up for a healthy season."
        video="/videos/spring-cleanup-hero.mp4"
        poster="/images/spring-cleanup-hero-poster.jpg"
        footer={
          <dl className="grid grid-cols-3 gap-6 md:max-w-3xl">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dd className="to-display text-5xl md:text-6xl">
                  <CountUp end={stat.end} suffix={stat.suffix} />
                </dd>
                <dt className="mt-2 text-[1.02rem] text-muted">{stat.label}</dt>
              </div>
            ))}
          </dl>
        }
      >
        <Button href="#spring-cleanup-form">Get a free quote</Button>
        <Button href="#how-it-works" variant="quiet" className="bg-white/5 backdrop-blur-sm">
          See how it works
        </Button>
      </PageHero>

      {/* INTRO + BEFORE/AFTER */}
      <Band>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="to-display to-h2">Calgary spring cleanup that’s built for a healthy season</h2>
            <div className="mt-7 grid gap-5">
              <p className="to-body">
                At TERREOAK Landscaping, we know that a great summer lawn starts in the spring. Our comprehensive cleanup service removes the debris, salt, and winter kill that can stifle new growth, giving your grass the room it needs to breathe and thrive.
              </p>
              <p className="to-body">
                From professional-grade core aeration that relieves soil compaction to thorough power raking that extracts performance-robbing thatch, we use the right equipment and techniques for Calgary’s unique climate and soil conditions.
              </p>
            </div>
            <div className="mt-8">
              <Button href="#spring-cleanup-form">Book your cleanup</Button>
            </div>
          </div>
          <figure>
            <BeforeAfterSlider
              beforeImage="/spring-cleanup-pics/Power-raking-services.JPG"
              afterImage="/spring-cleanup-pics/calgary-spring-cleanup-after.jpg"
              beforeAlt="Lawn during power raking, covered in pulled thatch"
              afterAlt="Clean green lawn after a professional spring cleanup"
            />
            <figcaption className="mt-4 text-center text-[1.02rem] text-muted">Slide to compare before and after.</figcaption>
          </figure>
        </div>
      </Band>

      {/* ESTIMATE FORM */}
      <Band id="spring-cleanup-form" surface="snow">
        <div className="grid gap-x-20 gap-y-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <div>
            <h2 className="to-display to-h2">Request a cleanup estimate</h2>
            <p className="to-body mt-6">Fill out the form to request an estimate for your spring cleanup.</p>
          </div>
          <div className="rounded-[28px] bg-white p-4 shadow-[0_30px_60px_-40px_rgba(0,0,0,0.35)] md:p-7">
            <JobberLeadForm clienthubId={jobberForm.clienthubId} formUrl={jobberForm.formUrl} />
          </div>
        </div>
      </Band>

      {/* WHAT'S INCLUDED */}
      <Band id="whats-included">
        <h2 className="to-display to-h2">What’s included in a spring yard cleanup</h2>
        <p className="to-body mt-5">One visit that takes your lawn from winter-beaten to ready for the season.</p>
        <ol className="mt-8 grid gap-3 md:mt-12 md:grid-cols-2 md:gap-5 lg:grid-cols-5">
          {included.map((item, i) => (
            <li key={item.title} className="to-card flex gap-4 p-5 md:block md:p-6">
              <span className="to-icon shrink-0 text-lg font-bold">{i + 1}</span>
              <div>
                <h3 className="text-[1.15rem] font-bold leading-snug text-fg md:mt-5">{item.title}</h3>
                <p className="mt-2 text-[1.02rem] leading-relaxed text-muted">{item.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </Band>

      {/* TREATMENTS */}
      <Band>
        <h2 className="to-display to-h2">Maintenance that matters</h2>
        <p className="to-body mt-5">
          Proper spring maintenance is the foundation of a healthy lawn. Our core aeration and power raking services are designed to give your grass the best possible start after a long Calgary winter.
        </p>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {treatments.map((treatment) => (
            <article key={treatment.title} className="to-card p-8 md:p-10">
              <h3 className="to-display to-h3">{treatment.title}</h3>
              <p className="mt-4 text-[1.1rem] leading-relaxed text-muted">{treatment.desc}</p>
              <p className="to-sub mt-7">Good for</p>
              <ul className="mt-4 grid gap-3 text-[1.08rem] text-fg">
                {treatment.goodFor.map((item) => (
                  <li key={item} className="flex gap-3">
                    <Tick />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Band>

      {/* WHEN TO BOOK + GUIDES */}
      <Band>
        <div className="grid gap-x-20 gap-y-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <h2 className="to-display to-h2">When to book your Calgary lawn’s spring cleanup</h2>
          <div className="grid gap-5">
            <p className="to-body">
              The window is short. Power raking has to happen after the snow is gone and the lawn has dried out, but before the grass is growing strongly, which in a typical Calgary spring is somewhere between late March and the
              end of April. Leave it too late and the machine pulls out healthy new growth along with the dead.
            </p>
            <p className="to-body">
              That’s why our spring schedule fills before the snow has finished melting. Booking in winter gets you a spot in the right window instead of whatever is left.
            </p>
            <p className="to-body">
              Not sure what your lawn needs? Our guides explain{" "}
              <Link href="/blog/power-raking-calgary-guide" className="to-link">
                when power raking helps and when to skip it
              </Link>{" "}
              and{" "}
              <Link href="/blog/when-to-aerate-lawn-calgary" className="to-link">
                when to aerate a lawn in Calgary
              </Link>
              .
            </p>
          </div>
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

      {/* WHY IT MATTERS */}
      <Band>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[36px] shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)]">
            <Image
              src="/spring-cleanup-pics/Calgary-Spring-Cleanup.jpg"
              alt="Professional spring cleanup results in Calgary"
              fill
              sizes="(min-width: 1280px) 440px, 90vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="to-display to-h2">Why spring cleanup matters</h2>
            <p className="to-body mt-5">A healthy summer lawn starts with a professional spring cleanup.</p>
            <dl className="mt-8 grid gap-4">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="to-card p-6">
                  <dt className="text-[1.2rem] font-bold text-fg">{benefit.title}</dt>
                  <dd className="mt-2 text-[1.08rem] leading-relaxed text-muted">{benefit.desc}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8">
              <Button href="#spring-cleanup-form">Book your cleanup</Button>
            </div>
          </div>
        </div>
      </Band>

      <GalleryBand title="Our recent cleanups" images={gallery} />

      {/* FAQ */}
      <Band>
        <div className="grid gap-x-20 gap-y-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]">
          <h2 className="to-display to-h2">FAQs</h2>
          <FaqList faqs={faqs} />
        </div>
      </Band>

      <BlogCta>
        <Button href="/blog/why-calgary-spring-cleanup-matters" variant="quiet">
          Why spring cleanup matters
        </Button>
        <Button href="/blog/power-raking-calgary-guide" variant="quiet">
          Power raking guide
        </Button>
        <Button href="/blog/when-to-aerate-lawn-calgary" variant="quiet">
          When to aerate
        </Button>
      </BlogCta>

      <StickyCta targetId="spring-cleanup-form" label="Get a free quote" />
      <OfferPopup
        offer={{
          id: "spring-fertilizer",
          label: "Spring cleanup offer",
          highlight: "$150 value",
          title: "Free fertilizer application when you book with us.",
          text: "Book your spring cleanup and we’ll include a fertilizer application at no charge, worth $150.",
          cta: "Claim my free fertilizer",
          formId: "spring-cleanup-form",
          photo: "/spring-cleanup-pics/calgary-spring-cleanup-after.jpg",
          photoAlt: "Thick green lawn after a TERREOAK spring cleanup",
        }}
      />
    </main>
  );
}
