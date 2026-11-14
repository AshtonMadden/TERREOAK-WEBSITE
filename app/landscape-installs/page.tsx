import JsonLd from "../components/JsonLd";
import ReadMore from "../components/ReadMore";
import StickyCta from "../components/StickyCta";
import { Band, BlogCta, Button, FounderQuote, PageHero, Tick } from "../components/ds";
import { FaqBand, FormBand, GalleryBand, InstagramBand, ProjectCards, ReviewsBand, StepsBand, TrustPoints, serviceLd } from "../components/sections";
import { projects, reviews } from "../home-content";
import { pageMeta } from "../lib/seo";
import { costs, faqs, gallery, instagramPosts, jobberForm, steps } from "./content";

const path = "/landscape-installs";
const description =
  "Complete landscape installations in Calgary. Let TERREOAK bring your dream yard to life with our expert design and construction team.";

export const metadata = pageMeta({
  title: "Professional Landscape Installs Calgary | TERREOAK",
  description,
  path,
  image: "/Calgary-landscape-design-build-patio.JPG",
});

const jsonLd = serviceLd({
  path,
  name: "Landscape Installs",
  serviceType: "Landscape design and construction",
  description,
  crumbs: [{ name: "Landscaping", path }],
  faqs,
});

export default function LandscapeInstallsPage() {
  return (
    <main className="to-pavement to-flow overflow-x-clip">
      <JsonLd data={jsonLd} />

      <PageHero
        title={
          <>
            Calgary landscaping and design, <span className="block">where the sun meets soil.</span>
          </>
        }
        lead="Every TERREOAK build accounts for Calgary's specific conditions. From engineered retaining walls and exposed aggregate concrete to sod installations and drainage solutions, we build outdoor spaces designed to last through Alberta's freeze-thaw cycles."
        image="/Calgary-landscape-design-build-patio.JPG"
        imageAlt="Landscape design-build patio by TERREOAK in Calgary"
        footer={<TrustPoints />}
      >
        <Button href="#landscape-form">Request a proposal</Button>
        <Button href="/projects" variant="quiet" className="bg-white/5 backdrop-blur-sm">
          See recent projects
        </Button>
      </PageHero>

      {/* INTRO */}
      <Band>
        <h2 className="to-display to-h2">Custom landscaping for homeowners</h2>
        <div className="mt-8 grid gap-x-16 gap-y-5 lg:grid-cols-2">
          <p className="to-body">
            TERREOAK is a premier Calgary landscaping and design-build firm specializing in high-end, custom outdoor transformations. We partner with homeowners who value top-quality work, from engineered retaining walls and exposed aggregate concrete to custom pergolas and complex drainage solutions. We build luxury outdoor spaces designed to endure Alberta’s freeze-thaw cycles without cutting corners.
          </p>
          <ReadMore>
            <p className="to-body">
              Our focus is on established homeowners upgrading aging yards and luxury property owners looking for a contractor capable of executing a great finish. We specialize in complete yard makeovers and beautiful custom landscapes. To ensure careful planning, every project begins with a dedicated on-site consultation followed by a paid, professional 3D design service, so you can visualize and perfect your exact space before a single shovel hits the ground.
            </p>
          </ReadMore>
        </div>
        <div className="to-card mt-8 flex gap-4 p-5 md:mt-10 md:p-8">
          <Tick />
          <p className="text-[1.12rem] leading-relaxed text-fg">
            <strong className="font-bold">The TERREOAK standard:</strong> every custom landscape installation is backed by a comprehensive 1-year workmanship warranty. We use premium materials and refuse to compromise on quality.
          </p>
        </div>
        <p className="to-body mt-8">
          Because we limit the number of projects we take on to maintain our exacting standards, our build season fills up fast. If you’re planning a premium landscape upgrade, contact us today to secure your spot.
        </p>
        <div className="mt-12">
          <FounderQuote />
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
        <div className="mt-12">
          <ProjectCards projects={projects} />
        </div>
      </Band>

      {/* STORY */}
      <Band>
        <div className="to-card grid gap-x-16 gap-y-10 p-8 md:p-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-center">
          <div>
            <h2 className="to-display to-h2">Crafting beautiful yards since ’18</h2>
            <p className="to-body mt-5">
              TERREOAK has been building and maintaining Calgary yards since 2018. We’re a small crew, owner-operated, hands-on, and we treat every property like it’s our own. You can expect consistent, high-quality work every time.
            </p>
          </div>
          <dl className="grid grid-cols-2 gap-4 text-center">
            <div className="rounded-[24px] bg-white/[0.05] px-3 py-7">
              <dd className="to-display text-4xl text-accent md:text-5xl">250+</dd>
              <dt className="mt-2 text-[1rem] text-muted">Happy customers</dt>
            </div>
            <div className="rounded-[24px] bg-white/[0.05] px-3 py-7">
              <dd className="to-display text-4xl text-accent md:text-5xl">8+</dd>
              <dt className="mt-2 text-[1rem] text-muted">Years serving Calgary</dt>
            </div>
          </dl>
        </div>
      </Band>

      <StepsBand
        title="How we work"
        steps={steps}
      >
        <Button href="/our-process" variant="quiet">
          See our full process
        </Button>
      </StepsBand>

      {/* COSTS */}
      <Band>
        <h2 className="to-display to-h2 max-w-[22ch]">How much does landscaping cost in Calgary?</h2>
        <p className="to-body mt-5">Landscaping project costs in Calgary vary widely based on scope, materials, and site conditions. As a general guide:</p>
        <dl className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-12 md:gap-5 lg:grid-cols-4">
          {costs.map((cost) => (
            <div key={cost.title} className="to-card p-5 md:p-8">
              <dt className="text-[1.15rem] font-bold text-fg">{cost.title}</dt>
              <dd className="to-display mt-2 text-[1.7rem] leading-tight text-accent md:mt-4 md:text-[1.9rem]">{cost.range}</dd>
              <dd className="mt-3 text-[1.02rem] leading-relaxed text-muted">{cost.desc}</dd>
            </div>
          ))}
        </dl>
        <p className="to-body mt-8">
          Every TERREOAK project starts with a free on-site consultation and a detailed, fixed-price quote. We don’t do vague estimates, you’ll know exactly what you’re getting and what it costs before any work begins.
        </p>
      </Band>

      <GalleryBand title="Our recent projects" images={gallery}>
        <Button href="/projects" variant="quiet">
          View all projects
        </Button>
      </GalleryBand>

      <ReviewsBand title="What our clients say" reviews={reviews} />

      <FormBand
        id="landscape-form"
        title="Request a proposal"
        lead="Secure your spot in our build queue today. Our crews fill up fast for the Calgary spring and summer season."
        form={jobberForm}
      />

      <FaqBand title="Frequently asked questions" faqs={faqs} />

      <InstagramBand
        title="Latest project videos"
        lead="Check out our latest landscape transformations and snow removal updates over on Instagram. We post regular jobsite walk-throughs and before/afters."
        posts={instagramPosts}
      />

      <BlogCta />

      <StickyCta targetId="landscape-form" label="Start my project" />
    </main>
  );
}
