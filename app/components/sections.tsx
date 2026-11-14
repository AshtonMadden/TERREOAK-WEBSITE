import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "../lib/site";
import InstagramEmbed from "./InstagramEmbed";
import JobberLeadForm from "./JobberLeadForm";
import { Band, GoogleMark, Stars } from "./ds";

/* Whole page sections shared by the service pages. */

const Arrow = () => (
  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export type Project = { id: number | string; title: string; location: string; budget?: string; desc: string; img: string; link: string };

/** Project cards: photo, location and investment, title, summary, link to the write-up. */
export function ProjectCards({ projects }: { projects: Project[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
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
  );
}

/** Google reviews section with the rating link. */
export function ReviewsBand({ title, reviews }: { title: string; reviews: { name: string; role?: string; text: string }[] }) {
  return (
    <Band>
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <h2 className="to-display to-h2">{title}</h2>
        <a
          href={site.googleProfile}
          target="_blank"
          rel="noopener noreferrer"
          className="to-focus flex w-fit items-center gap-3 rounded-full bg-white/[0.07] px-5 py-3 text-[1.05rem] font-medium text-fg transition-colors hover:bg-white/[0.12]"
        >
          <GoogleMark />
          {site.reviews.rating} from {site.reviews.count} Google reviews
        </a>
      </div>
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {reviews.map((review) => (
          <figure key={review.name} className="to-card flex flex-col p-8">
            <Stars />
            <blockquote className="mt-5 text-[1.1rem] leading-relaxed text-fg">“{review.text}”</blockquote>
            <figcaption className="mt-auto pt-6">
              <p className="text-[1.05rem] font-semibold text-fg">{review.name}</p>
              {review.role && <p className="mt-1 text-[0.98rem] text-muted">{review.role}</p>}
            </figcaption>
          </figure>
        ))}
      </div>
    </Band>
  );
}

/** Row of Instagram posts: sideways scroller on phones, three columns on desktop. */
export function InstagramBand({ title, lead, posts }: { title: string; lead: string; posts: string[] }) {
  return (
    <Band>
      <h2 className="to-display to-h2">{title}</h2>
      <p className="to-body mt-5">{lead}</p>
      <div className="-mx-5 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 [scrollbar-width:none] sm:-mx-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0 lg:pb-0">
        {posts.map((url) => (
          <div key={url} className="w-[85%] flex-none snap-center sm:w-[380px] lg:w-auto">
            <InstagramEmbed url={url} />
          </div>
        ))}
      </div>
    </Band>
  );
}

/** The white panel holding a Jobber lead form, with a heading and optional extras beside it. */
export function FormBand({
  id,
  title,
  lead,
  form,
  children,
}: {
  id: string;
  title: string;
  lead: string;
  form: { clienthubId: string; formUrl: string };
  children?: ReactNode;
}) {
  return (
    <Band id={id} surface="snow">
      <div className="grid gap-x-20 gap-y-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div>
          <h2 className="to-display to-h2">{title}</h2>
          <p className="to-body mt-6">{lead}</p>
          {children}
        </div>
        <div className="rounded-[28px] bg-white p-4 shadow-[0_30px_60px_-40px_rgba(0,0,0,0.35)] md:p-7">
          <JobberLeadForm clienthubId={form.clienthubId} formUrl={form.formUrl} />
        </div>
      </div>
    </Band>
  );
}
