import Image from "next/image";
import Link from "next/link";
import { Children, type ReactNode } from "react";
import { site } from "../lib/site";
import { CountUp } from "./HeroMedia";
import JobberLeadForm from "./JobberLeadForm";
import ClampText from "./ClampText";
import ReadMore from "./ReadMore";
import { breadcrumbLd, faqLd } from "../lib/seo";
import { Band, FaqList, GoogleMark, Stars, Tick } from "./ds";

/* Whole page sections shared by the service pages. */

const Arrow = () => (
  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export type Project = { id: number | string; title: string; location: string; budget?: string; desc: string; img: string; link: string };

/** Project cards: photo, location and investment, title, summary, link to the write-up. */
export function ProjectCards({ projects }: { projects: Project[] }) {
  const card = (project: Project) => (
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
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <p className="to-sub">
          {project.location.split(",")[0]}
          {project.budget ? ` / ${project.budget} investment` : ""}
        </p>
        <h3 className="to-display to-h3 mt-3">{project.title}</h3>
        <p className="mt-3 line-clamp-3 text-[1.05rem] leading-relaxed text-muted">{project.desc}</p>
        <span className="mt-auto flex items-center gap-2 pt-5 text-[1.02rem] font-semibold text-accent md:pt-6">
          Read project <Arrow />
        </span>
      </div>
    </Link>
  );
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {projects.slice(0, 2).map(card)}
      {projects.length > 2 && (
        <ReadMore inGrid label="Show more projects">
          {projects.slice(2).map(card)}
        </ReadMore>
      )}
    </div>
  );
}

const reviewCard = (review: { name: string; role?: string; text: string }) => (
  <figure key={review.name} className="to-card flex flex-col p-6 md:p-8">
    <Stars />
    <blockquote className="mt-5 text-[1.05rem] leading-relaxed text-fg md:text-[1.1rem]">“{review.text}”</blockquote>
    <figcaption className="mt-auto pt-6">
      <p className="text-[1.05rem] font-semibold text-fg">{review.name}</p>
      {review.role && <p className="mt-1 text-[0.98rem] text-muted">{review.role}</p>}
    </figcaption>
  </figure>
);

/** Google reviews section with the rating link. On phones the first review shows, the rest sit behind a button. */
export function ReviewsBand({ id, title, reviews }: { id?: string; title: string; reviews: { name: string; role?: string; text: string }[] }) {
  return (
    <Band id={id}>
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
      <div className="mt-8 grid gap-5 md:mt-12 lg:grid-cols-3">
        {reviews.slice(0, 1).map(reviewCard)}
        {reviews.length > 1 && (
          <ReadMore inGrid label="Show more reviews">
            {reviews.slice(1).map(reviewCard)}
          </ReadMore>
        )}
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

export const trustPoints = ["8 years of experience", "Licensed & insured", "Professionally trained team"];

/** The three trust points as a ticked row, used under hero buttons. */
export function TrustPoints() {
  return (
    <ul className="flex flex-col gap-x-10 gap-y-3 text-[1.1rem] font-medium text-fg sm:flex-row">
      {trustPoints.map((point) => (
        <li key={point} className="flex items-start gap-3">
          <Tick />
          {point}
        </li>
      ))}
    </ul>
  );
}

/** Numbered process cards. */
export function StepsBand({ id, title, steps, children }: { id?: string; title: string; steps: { title: string; desc: string }[]; children?: ReactNode }) {
  const cols = steps.length === 6 ? "md:grid-cols-2 lg:grid-cols-3" : steps.length >= 5 ? "sm:grid-cols-2 lg:grid-cols-5" : steps.length === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3";
  return (
    <Band id={id}>
      <h2 className="to-display to-h2">{title}</h2>
      <ol className={`mt-8 grid gap-3 md:mt-12 md:gap-5 ${cols}`}>
        {steps.map((step, i) => (
          <li key={step.title} className="to-card to-card-lift flex gap-4 p-5 md:block md:p-8">
            <span className="to-icon to-display shrink-0 text-2xl max-md:h-11 max-md:w-11 max-md:text-xl">{i + 1}</span>
            <div>
              <h3 className="to-display to-h3 md:mt-6">{step.title}</h3>
              <ClampText className="mt-1.5 text-[1rem] leading-relaxed text-muted md:mt-3 md:text-[1.05rem]">{step.desc}</ClampText>
            </div>
          </li>
        ))}
      </ol>
      {children && <div className="mt-8">{children}</div>}
    </Band>
  );
}

/** Grid of titled text cards. */
export function CardsBand({
  id,
  title,
  lead,
  cards,
  columns = 3,
  children,
}: {
  id?: string;
  title: string;
  lead?: ReactNode;
  cards: { title: string; desc: string }[];
  columns?: 2 | 3;
  children?: ReactNode;
}) {
  return (
    <Band id={id}>
      <h2 className="to-display to-h2">{title}</h2>
      {lead && <p className="to-body mt-5">{lead}</p>}
      <div className={`mt-8 grid gap-3 md:mt-12 md:grid-cols-2 md:gap-5 ${columns === 3 ? "lg:grid-cols-3" : ""}`}>
        {cards.map((card) => (
          <article key={card.title} className="to-card to-card-lift p-5 md:p-8">
            <h3 className="to-display to-h3">{card.title}</h3>
            <ClampText className="mt-2 text-[1rem] leading-relaxed text-muted md:mt-4 md:text-[1.05rem]">{card.desc}</ClampText>
          </article>
        ))}
      </div>
      {children && <div className="mt-8">{children}</div>}
    </Band>
  );
}

/** Text beside a rounded photo. */
export function SplitBand({
  id,
  title,
  sub,
  image,
  imageAlt,
  imageSide = "right",
  aspect = "aspect-[4/3]",
  contain = false,
  children,
}: {
  id?: string;
  title: string;
  sub?: string;
  image: string;
  imageAlt: string;
  imageSide?: "left" | "right";
  aspect?: string;
  contain?: boolean;
  children: ReactNode;
}) {
  const parts = Children.toArray(children);
  return (
    <Band id={id}>
      <div className="grid items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-20">
        <div className={imageSide === "left" ? "lg:order-2" : ""}>
          <h2 className="to-display to-h2">{title}</h2>
          {sub && <p className="to-sub mt-4">{sub}</p>}
          <div className="mt-6 grid gap-5 md:mt-7">
            {parts[0]}
            {parts.length > 1 && <ReadMore>{parts.slice(1)}</ReadMore>}
          </div>
        </div>
        <div className={`relative ${aspect} overflow-hidden rounded-[36px] shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)] ${contain ? "bg-white" : ""}`}>
          <Image src={image} alt={imageAlt} fill sizes="(min-width: 1280px) 600px, 100vw" className={contain ? "object-contain" : "object-cover"} />
        </div>
      </div>
    </Band>
  );
}

/** "Meet the team" section used on the landscaping pages. */
export function TeamBand() {
  return (
    <SplitBand title="Meet the team" sub="Locally owned & operated" image="/images/about-mission-team.jpg" imageAlt="The TERREOAK landscaping team" imageSide="left">
      <p className="to-body">
        At TERREOAK, we believe great work starts with a strong work ethic, attention to detail, and a commitment to doing things the right way, every time.
      </p>
      <p className="to-body">
        From building premium landscapes to maintaining properties year-round, our goal is to create results our customers can rely on season after season. We aren’t just here to complete jobs; we’re here to build lasting relationships, improve the properties we work on, and continue growing a local Calgary company you can trust.
      </p>
      <p className="text-[1.1rem] font-semibold text-fg">Ashton Madden, Founder & Director</p>
    </SplitBand>
  );
}

/** FAQ section with the heading beside the list. */
export function FaqBand({ title = "FAQs", faqs }: { title?: string; faqs: { q: string; a: string }[] }) {
  return (
    <Band>
      <div className="grid gap-x-20 gap-y-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]">
        <h2 className="to-display to-h2">{title}</h2>
        <FaqList faqs={faqs} />
      </div>
    </Band>
  );
}

/** Photo gallery as a grid: the first eight photos, with the rest behind a "Show more photos" button. */
export function GalleryBand({ title, images, children }: { title: string; images: { src: string; alt: string }[]; children?: ReactNode }) {
  const tile = (img: { src: string; alt: string }) => (
    <div key={img.src} className="relative aspect-[4/5] overflow-hidden rounded-[20px] md:rounded-[28px]">
      <Image src={img.src} alt={img.alt} fill sizes="(min-width: 1280px) 300px, (min-width: 768px) 33vw, 50vw" className="object-cover" />
    </div>
  );
  return (
    <Band>
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <h2 className="to-display to-h2">{title}</h2>
        {children}
      </div>
      <div className="mt-8 grid grid-cols-2 gap-3 md:mt-12 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
        {images.slice(0, 8).map(tile)}
        {images.length > 8 && (
          <ReadMore inGrid allSizes label="Show more photos">
            {images.slice(8).map(tile)}
          </ReadMore>
        )}
      </div>
    </Band>
  );
}

/** Standard structured data for a service page. */
export function serviceLd({
  path,
  name,
  serviceType,
  description,
  areas = ["Calgary"],
  crumbs,
  faqs,
}: {
  path: string;
  name: string;
  serviceType: string;
  description: string;
  areas?: string[];
  crumbs: { name: string; path: string }[];
  faqs?: { q: string; a: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${site.url}${path}#service`,
        name,
        serviceType,
        description,
        url: `${site.url}${path}`,
        provider: { "@id": `${site.url}/#localbusiness` },
        areaServed: areas.map((area) => ({ "@type": "City", name: area })),
      },
      { "@id": `${site.url}${path}#breadcrumb`, ...breadcrumbLd([{ name: "Home", path: "/" }, ...crumbs]) },
      ...(faqs?.length ? [{ "@id": `${site.url}${path}#faq`, ...faqLd(faqs) }] : []),
    ],
  };
}

/** Count-up stats row for the bottom of a hero. */
export function HeroStats({ stats }: { stats: { end: number; suffix?: string; label: string }[] }) {
  return (
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
  );
}
