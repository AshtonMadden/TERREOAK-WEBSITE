import Image from "next/image";
import JsonLd from "../components/JsonLd";
import { Band, BlogCta, Button, PageHero, Tick } from "../components/ds";
import { FaqBand, GalleryBand, HeroStats, StepsBand, serviceLd } from "../components/sections";
import { pageMeta } from "../lib/seo";

const path = "/fall-cleanup";
const description =
  "Fall yard cleanup in Calgary: leaf removal, a final mow, core aeration and fall fertilizer packages. Book your window before the first snow.";
const bookingUrl = "https://clienthub.getjobber.com/booking/6ba7fcc7-4c40-4f17-9235-428046e21db6";

export const metadata = pageMeta({
  title: "Fall Cleanup Calgary | Leaf Removal & Lawn Prep | TERREOAK",
  description,
  path,
  image: "/fall-cleanup-hero.jpg",
});

const stats = [
  { end: 225, suffix: "+", label: "Total properties serviced" },
  { end: 185, suffix: "+", label: "Happy clients" },
  { end: 2, label: "TERREOAK crews" },
];

const steps = [
  { title: "Book your cleanup", desc: "Select your preferred window and services." },
  { title: "Confirmation & schedule", desc: "We confirm details and provide a service date." },
  { title: "Professional execution", desc: "Our team arrives and completes the full cleanup." },
];

const packages = [
  { name: "Basic leaf cleanup", desc: "Quick fall yard refresh", features: ["Leaf blowing and cleanup", "Final lawn cut & trim", "Leaves piled for pickup"], popular: false },
  { name: "Leaf removal service", desc: "", features: ["Leaf blowing and cleanup", "Final lawn cut & trim", "Bagging & removal of leaves"], popular: false },
  { name: "Winter prep cleanup", desc: "", features: ["Leaf blowing and cleanup", "Final lawn cut & trim", "Bagging & removal of leaves", "Core aeration"], popular: true },
  {
    name: "Winter lawn protection",
    desc: "",
    features: ["Leaf blowing and cleanup", "Final lawn cut & trim", "Bagging & removal of leaves", "Core aeration", "Fall fertilizer application"],
    popular: false,
  },
];

const gallery = [
  { src: "/spring-cleanup-pics/Copperfield-leaf-cleanup.JPG", alt: "Leaf cleanup in Copperfield" },
  { src: "/spring-cleanup-pics/Leaf-removal-Calgary.JPG", alt: "Leaf removal in Calgary" },
  { src: "/spring-cleanup-pics/Calgary-Core-Aeration.JPG", alt: "Core aeration on a Calgary lawn" },
  { src: "/spring-cleanup-pics/Calgary-Leaf-Cleanup.JPG", alt: "Leaf cleanup in Calgary" },
  { src: "/spring-cleanup-pics/Calgary-leaf-removal-service.jpg", alt: "Leaf removal service in Calgary" },
  { src: "/spring-cleanup-pics/Cranston-leaf-cleanup.jpg", alt: "Leaf cleanup in Cranston" },
];

const faqs = [
  {
    q: "When is the best time for a fall cleanup?",
    a: "Typically late September through October, once the majority of leaves have fallen but before the first permanent snow.",
  },
  { q: "Do you haul away the leaves?", a: "Yes, all debris, leaves, and garden waste are bagged and hauled away for composting." },
  {
    q: "Does this include irrigation blowout?",
    a: "Irrigation blowouts are a separate service, but can be scheduled on the same visit if requested.",
  },
];

const jsonLd = serviceLd({
  path,
  name: "Fall Cleanup",
  serviceType: "Fall yard cleanup, leaf removal and winter lawn preparation",
  description,
  crumbs: [{ name: "Fall Cleanup", path }],
  faqs,
});

export default function FallCleanupPage() {
  return (
    <main className="to-pavement to-flow overflow-x-clip">
      <JsonLd data={jsonLd} />

      <PageHero
        title={
          <>
            Calgary fall cleanup. <span className="block">Essential yard winterization.</span>
          </>
        }
        lead="Leaf removal, a final low-cut mow and garden bed winterization, done before the first snow falls."
        image="/spring-cleanup-pics/Calgary-Leaf-Cleanup.JPG"
        imageAlt="Fall leaf cleanup on a Calgary property"
        footer={<HeroStats stats={stats} />}
      >
        <Button href={bookingUrl}>Book fall cleanup</Button>
        <Button href="#packages" variant="quiet" className="bg-white/5 backdrop-blur-sm">
          See the packages
        </Button>
      </PageHero>

      {/* INTRO */}
      <Band>
        <h2 className="to-display to-h2 max-w-[24ch]">Calgary fall cleanup that’s built for winter prep</h2>
        <div className="mt-8 grid gap-x-16 gap-y-5 lg:grid-cols-2">
          <p className="to-body">
            At TERREOAK Landscaping, we understand that a proper fall cleanup is the foundation for a healthy spring lawn. Our crews are equipped to handle everything from heavy leaf volume to technical perennial pruning, ensuring your property is tidy and protected before the first snow falls.
          </p>
          <p className="to-body">
            Our systematized approach means no corner is ignored. We blow out debris from under decks and behind shrubs, perform a final low-cut mow to prevent snow mold, and haul away all garden waste so you don’t have to.
          </p>
        </div>
        <div className="mt-8">
          <Button href={bookingUrl}>Request an estimate</Button>
        </div>
      </Band>

      <StepsBand title="How it works" steps={steps} />

      {/* PACKAGES */}
      <Band id="packages">
        <h2 className="to-display to-h2">Choose your cleanup package</h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg) => (
            <article key={pkg.name} className={`to-card flex flex-col p-8 ${pkg.popular ? "ring-1 ring-brand/45" : ""}`}>
              {pkg.popular && <p className="to-sub mb-3">Most popular</p>}
              <h3 className="to-display to-h3">{pkg.name}</h3>
              {pkg.desc && <p className="mt-2 text-[1.02rem] text-muted">{pkg.desc}</p>}
              <ul className="mt-6 grid gap-3 text-[1.05rem] text-fg">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <Tick />
                    {feature}
                  </li>
                ))}
              </ul>
              {!pkg.features.includes("Core aeration") && (
                <p className="mt-6 text-[0.98rem] italic leading-relaxed text-muted">“Most Calgary lawns benefit from aeration before winter.”</p>
              )}
              <div className="mt-auto pt-8">
                <Button href={bookingUrl} variant={pkg.popular ? "primary" : "quiet"}>
                  Select package
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Band>

      {/* BOOK EARLY */}
      <Band>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="to-display to-h2">Book early to secure your spot</h2>
            <p className="to-body mt-6">
              The best time for fall cleanup in Calgary is from late September to early November. Our schedule fills up fast, reserve your preferred window today.
            </p>
            <ul className="mt-7 grid gap-3 text-[1.1rem] text-fg">
              {["Leaf removal to prevent snow mold", "Perennial trimming and garden bed winterization", "Final seasonal mow and lawn prep for winter"].map((item) => (
                <li key={item} className="flex gap-3">
                  <Tick />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href={bookingUrl}>Book your window</Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[36px] shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)]">
            <Image
              src="/fall-cleanup-pics/fall-cleanup-section.jpg"
              alt="Professional fall yard cleanup in Calgary"
              fill
              sizes="(min-width: 1280px) 600px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Band>

      <GalleryBand title="Our recent cleanups" images={gallery} />

      <FaqBand faqs={faqs} />

      <BlogCta>
        <Button href="/irrigation-blowouts" variant="quiet">
          Irrigation blowouts
        </Button>
      </BlogCta>
    </main>
  );
}
