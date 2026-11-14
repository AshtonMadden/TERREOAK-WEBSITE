import Image from "next/image";
import Link from "next/link";
import type { ProjectDetail } from "../projects/data";
import { absoluteUrl, breadcrumbLd, pageMeta } from "../lib/seo";
import { site } from "../lib/site";
import JsonLd from "./JsonLd";
import { Band, Button, Container, Tick } from "./ds";

export const projectMeta = (project: ProjectDetail) =>
  pageMeta({ title: project.metaTitle, description: project.metaDescription, path: project.path, image: project.hero, type: "article" });

/** A project write-up: hero, facts, breakdown, scope of work, photo gallery and a closing call to action. */
export default function ProjectPage({ project }: { project: ProjectDetail }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${site.url}${project.path}#article`,
        headline: project.title,
        description: project.metaDescription,
        image: [project.hero, ...project.gallery.map((g) => g.src)].map(absoluteUrl),
        author: { "@id": `${site.url}/#organization` },
        publisher: { "@id": `${site.url}/#organization` },
        mainEntityOfPage: `${site.url}${project.path}`,
        contentLocation: { "@type": "Place", name: project.location },
      },
      {
        "@id": `${site.url}${project.path}#breadcrumb`,
        ...breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
          { name: project.title, path: project.path },
        ]),
      },
    ],
  };

  return (
    <main className="to-pavement to-flow overflow-x-clip">
      <JsonLd data={jsonLd} />

      <section className="relative isolate flex min-h-[72svh] flex-col justify-end">
        <div className="absolute inset-0 -z-10">
          <Image src={project.hero} alt={project.heroAlt} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-[#1d1f21]/65" />
        </div>
        <Container className="pb-12 pt-36 md:pb-16">
          <Link href="/projects" className="to-link text-[1.05rem]">
            Back to all projects
          </Link>
          <h1 className="to-display to-h1 mt-6 max-w-[20ch]">{project.title}</h1>
          <dl className="mt-10 flex flex-wrap gap-x-14 gap-y-5">
            <div>
              <dt className="to-sub">Location</dt>
              <dd className="mt-1 text-[1.3rem] font-bold text-fg">{project.location}</dd>
            </div>
            <div>
              <dt className="to-sub">Project cost</dt>
              <dd className="mt-1 text-[1.3rem] font-bold text-fg">{project.cost}</dd>
            </div>
          </dl>
        </Container>
      </section>

      <Band>
        <div className="grid gap-x-20 gap-y-12 lg:grid-cols-2">
          <div>
            <h2 className="to-display to-h2">Project breakdown</h2>
            <div className="mt-7 grid gap-5">
              {project.breakdown.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="to-body">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div>
            <h2 className="to-display to-h3">Scope of work</h2>
            <ul className="mt-7 grid gap-4">
              {project.scope.map((item) => (
                <li key={item.label} className="to-card flex gap-4 p-6">
                  <Tick />
                  <p className="text-[1.05rem] leading-relaxed text-muted">
                    <strong className="font-bold text-fg">{item.label}:</strong> {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Band>

      <Band>
        <h2 className="to-display to-h2">{project.galleryTitle}</h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {project.gallery.map((photo) => (
            <div key={photo.src} className="relative aspect-[4/5] overflow-hidden rounded-[28px]">
              <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1280px) 400px, (min-width: 640px) 50vw, 100vw" className="object-cover" />
            </div>
          ))}
        </div>
      </Band>

      <Band>
        <div className="to-card flex flex-col gap-8 p-8 md:flex-row md:items-center md:justify-between md:p-12">
          <div>
            <h2 className="to-display to-h2">{project.ctaTitle}</h2>
            <p className="to-body mt-4">{project.ctaText}</p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Button href="/projects" variant="quiet">
              More projects
            </Button>
            <Button href="/landscape-installs#landscape-form">Request a proposal</Button>
          </div>
        </div>
      </Band>
    </main>
  );
}
