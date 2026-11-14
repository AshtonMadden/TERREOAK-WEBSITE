import JsonLd from "../components/JsonLd";
import { Band, BlogCta, Button, PageHero } from "../components/ds";
import { GalleryBand, ProjectCards, ReviewsBand, TrustPoints } from "../components/sections";
import { gallery, projects, reviews } from "../home-content";
import { absoluteUrl, breadcrumbLd, pageMeta } from "../lib/seo";
import { site } from "../lib/site";

const path = "/projects";
const description =
  "Browse the TERREOAK landscaping portfolio. View our recent projects in Calgary featuring custom patios, garden designs, and complete yard renovations.";

export const metadata = pageMeta({
  title: "Our Landscaping Projects Portfolio Calgary | TERREOAK",
  description,
  path,
  image: "/Landscape web page pics/Techo-Bloc-pavers-river-rock.JPG",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${site.url}${path}#collection`,
      url: `${site.url}${path}`,
      name: "TERREOAK landscaping projects",
      description,
      mainEntity: {
        "@type": "ItemList",
        itemListElement: projects.map((project, i) => ({ "@type": "ListItem", position: i + 1, name: project.title, url: absoluteUrl(project.link) })),
      },
    },
    { "@id": `${site.url}${path}#breadcrumb`, ...breadcrumbLd([{ name: "Home", path: "/" }, { name: "Projects", path }]) },
  ],
};

export default function ProjectsPage() {
  return (
    <main className="to-pavement to-flow overflow-x-clip">
      <JsonLd data={jsonLd} />

      <PageHero
        title={
          <>
            Our projects. <span className="block">Proven in Calgary.</span>
          </>
        }
        lead="Recent landscape construction, cleanup and snow removal work from around the city."
        image="/Landscape web page pics/Techo-Bloc-pavers-river-rock.JPG"
        imageAlt="Techo-Bloc pavers bordered with river rock, installed by TERREOAK"
        footer={<TrustPoints />}
      >
        <Button href="#featured-projects">View projects</Button>
        <Button href="/#home-form" variant="quiet" className="bg-white/5 backdrop-blur-sm">
          Request an estimate
        </Button>
      </PageHero>

      <Band id="featured-projects">
        <h2 className="to-display to-h2">Featured projects</h2>
        <div className="mt-12">
          <ProjectCards projects={projects} />
        </div>
      </Band>

      <GalleryBand title="More of our work" images={gallery} />

      <ReviewsBand title="What our clients say" reviews={reviews.slice(0, 3)} />

      <Band>
        <div className="to-card flex flex-col gap-8 p-8 md:flex-row md:items-center md:justify-between md:p-12">
          <div>
            <h2 className="to-display to-h2">Ready to start your project?</h2>
            <p className="to-body mt-4">
              Join our list of satisfied Calgary clients. Whether it’s a summer transformation or winter protection, we’ve got you covered.
            </p>
          </div>
          <div className="shrink-0">
            <Button href="/#home-form">Request an estimate</Button>
          </div>
        </div>
      </Band>

      <BlogCta />
    </main>
  );
}
