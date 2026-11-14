import Image from "next/image";
import JsonLd from "../components/JsonLd";
import { Band, BlogCta, Button, PageHero } from "../components/ds";
import { SplitBand } from "../components/sections";
import { breadcrumbLd, pageMeta } from "../lib/seo";
import { site } from "../lib/site";

const path = "/about";
const description =
  "Learn about TERREOAK, an owner-operated landscaping company in Calgary. Discover our story, our hands-on approach, and our commitment to quality.";

export const metadata = pageMeta({
  title: "About TERREOAK | Calgary's Trusted Landscapers",
  description,
  path,
  image: "/images/about-mission-team.jpg",
});

const values = [
  { title: "Local Calgary expertise", desc: "Born and bred in Calgary. We know what works in our city’s environment." },
  { title: "Integrity in build", desc: "We don’t cut corners. We prep right so your project lasts for years." },
  { title: "Long-term care", desc: "We build relationships, not just projects. We’re here for the long haul." },
];

const leaders = [
  {
    name: "Ashton Madden",
    role: "Founder & Director",
    photo: "/images/ashton-madden-headshot-2026.jpg",
    signature: "/Ashton_Signature_.jpg",
    bio: "My goal with TERREOAK is simple: build a company rooted in strong values, a great team culture, and a customer experience people can trust.",
    focus: ["Company leadership", "Team culture", "Customer experience"],
  },
  {
    name: "Keagan Madden",
    role: "Co-Owner & Operations Director",
    photo: "/images/KEAGAN-MADDEN-HEADSHOT.JPG",
    signature: "/Keagan_Signature_.jpg",
    bio: "As co-owner of TERREOAK, Keagan supports the day-to-day operations of the company. His focus is on helping train our field maintenance teams, assisting with hiring and onboarding, and supporting residential snow service sales during the winter season.",
    focus: [],
  },
  {
    name: "Cayden Madden",
    role: "Media & Content Lead",
    photo: "/images/CAYDEN-MADDEN-HEADSHOT.jpg",
    signature: "/Cayden_Signature_ copy.jpg",
    bio: "Cayden leads media and content at TERREOAK, managing the company’s photos, videos, and online content. He also supports the development of Ashton’s personal brand by helping capture and share the story behind the work we do.",
    focus: [],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${site.url}${path}#about`,
      url: `${site.url}${path}`,
      name: "About TERREOAK Landscaping & Snow",
      description,
      about: { "@id": `${site.url}/#localbusiness` },
    },
    ...leaders.map((leader) => ({
      "@type": "Person",
      name: leader.name,
      jobTitle: leader.role,
      image: `${site.url}${encodeURI(leader.photo)}`,
      worksFor: { "@id": `${site.url}/#organization` },
    })),
    { "@id": `${site.url}${path}#breadcrumb`, ...breadcrumbLd([{ name: "Home", path: "/" }, { name: "About", path }]) },
  ],
};

export default function AboutPage() {
  return (
    <main className="to-pavement to-flow overflow-x-clip">
      <JsonLd data={jsonLd} />

      <PageHero
        title={
          <>
            From a snow shovel <span className="block">to a Calgary landscape company.</span>
          </>
        }
        image="/spring-cleanup-pics/City-of-Calgary-skyline.JPG"
        imageAlt="Calgary skyline seen from a TERREOAK job site"
        footer={
          <dl className="grid gap-x-10 gap-y-6 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title}>
                <dt className="text-[1.15rem] font-bold text-fg">{value.title}</dt>
                <dd className="mt-2 text-[1.05rem] leading-relaxed text-white/80">{value.desc}</dd>
              </div>
            ))}
          </dl>
        }
      >
        <Button href="/#home-form">Request an estimate</Button>
        <Button href="/projects" variant="quiet" className="bg-white/5 backdrop-blur-sm">
          See recent projects
        </Button>
      </PageHero>

      <SplitBand title="Built from the ground up" sub="Our mission" image="/images/about-mission-team.jpg" imageAlt="TERREOAK team at work on a Calgary property">
        <p className="to-body">
          At TERREOAK, our mission is simple: deliver dependable landscaping and snow services while raising the standard for professionalism in the industry.
        </p>
        <p className="to-body">
          We believe great work starts with a strong work ethic, attention to detail, and a commitment to doing things the right way, every time. From building landscapes to maintaining properties through the winter, our goal is to create results our customers can rely on season after season.
        </p>
        <p className="to-body">
          We’re not just here to complete jobs. We’re here to build lasting relationships, improve the properties we work on, and continue growing a company our community can trust.
        </p>
      </SplitBand>

      {/* LEADERSHIP */}
      <Band>
        <h2 className="to-display to-h2">Meet our leadership</h2>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {leaders.map((leader) => (
            <article key={leader.name} className="to-card flex flex-col overflow-hidden">
              <div className="relative aspect-[4/5]">
                <Image src={leader.photo} alt={`${leader.name}, ${leader.role}`} fill sizes="(min-width: 1280px) 400px, 100vw" className="object-cover object-top" />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <h3 className="to-display to-h3">{leader.name}</h3>
                <p className="to-sub mt-2">{leader.role}</p>
                <p className="mt-5 text-[1.05rem] leading-relaxed text-muted">{leader.bio}</p>
                {leader.focus.length > 0 && <p className="mt-4 text-[1rem] text-fg">Focus areas: {leader.focus.join(", ").toLowerCase()}.</p>}
                <div className="mt-auto pt-6">
                  <Image src={leader.signature} alt={`${leader.name}’s signature`} width={150} height={100} className="h-16 w-auto opacity-90 mix-blend-screen invert" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </Band>

      {/* ORIGINS */}
      <Band>
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-20">
          <div>
            <h2 className="to-display to-h2">How we started</h2>
            <div className="mt-7 grid gap-5">
              <p className="to-body">
                At the age of 10, I began my entrepreneurial journey by knocking on doors with my brother offering snow removal services to our community. What started as a simple idea and a couple snow shovels in 2014 quickly grew into The Super Shovelers, which soon evolved into something much bigger. Within just 4 years our brand had changed to Madden Property Services Inc. and grew exponentially, as we upgraded our tools to include a wagon, snow blower and a lawn mower.
              </p>
              <p className="to-body">
                This journey symbolizes our commitment to hard work, dedication, and continuous growth. From humble beginnings to expanding our services, we have always strived to provide top notch services to Calgary and Okotoks. Our passion for serving others and our drive for excellence have been the driving forces behind our success.
              </p>
              <p className="to-body">
                Today, we are known as TERREOAK and stand as a company that believes in the power of perseverance and the impact of a strong vision. We are proud to have grown from a small operation to a reputable brand, and we look forward to continuing our journey of providing exceptional services to our valued customers.
              </p>
              <p className="text-[1.15rem] font-semibold text-fg">Ashton</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[28px]">
              <Image src="/Landscape web page pics/base-prep-paverpath.JPG" alt="Base preparation for a paver path" fill sizes="(min-width: 1280px) 260px, 50vw" className="object-cover" />
            </div>
            <div className="relative mt-10 aspect-[3/4] overflow-hidden rounded-[28px]">
              <Image src="/Landscape web page pics/Calgary-Concrete-pour.JPG" alt="Exposed aggregate concrete pour in Calgary" fill sizes="(min-width: 1280px) 260px, 50vw" className="object-cover" />
            </div>
          </div>
        </div>
      </Band>

      <BlogCta>
        <Button href="/careers" variant="quiet">
          Join the crew
        </Button>
      </BlogCta>
    </main>
  );
}
