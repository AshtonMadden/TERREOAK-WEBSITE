import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "../lib/site";
import { HeroVideo } from "./HeroMedia";

/* TERREOAK design system primitives. Server components: safe to use anywhere. */

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 ${className}`}>{children}</div>;
}

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "quiet";
  size?: "md" | "sm";
  className?: string;
}) {
  const cls = `to-btn ${variant === "primary" ? "to-btn-primary" : "to-btn-quiet"} ${size === "sm" ? "to-btn-sm" : ""} ${className}`;
  if (/^(#|tel:|mailto:|https?:)/.test(href)) {
    const external = href.startsWith("http");
    return (
      <a href={href} className={cls} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/**
 * A page section. By default it is transparent and sits on the page's flowing dark surface.
 * surface="snow" renders it as a rounded white panel floating on that surface instead of a hard band.
 */
export function Band({
  id,
  surface = "pavement",
  children,
  className = "",
}: {
  id?: string;
  surface?: "pavement" | "snow";
  children: ReactNode;
  className?: string;
}) {
  if (surface === "snow") {
    return (
      <section id={id} className={`px-3 py-6 sm:px-5 md:py-10 ${className}`}>
        <div data-reveal className="to-snow mx-auto max-w-[1400px] rounded-[36px] py-14 md:rounded-[48px] md:py-20">
          <Container>{children}</Container>
        </div>
      </section>
    );
  }
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div data-reveal>
        <Container>{children}</Container>
      </div>
    </section>
  );
}

/** FAQ as hairline rows. Pair with faqLd() from lib/seo for structured data. */
export function FaqList({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <div className="grid gap-3">
      {faqs.map((faq) => (
        <details key={faq.q} className="to-faq to-card px-6 md:px-8">
          <summary className="to-focus flex items-center justify-between gap-6 py-6 text-xl font-semibold text-fg md:text-2xl">
            {faq.q}
            <svg className="to-faq-icon h-5 w-5 shrink-0 text-accent" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M10 3v14M3 10h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </summary>
          <p className="to-body pb-7 !max-w-none">{faq.a}</p>
        </details>
      ))}
    </div>
  );
}

export const Tick = () => (
  <svg className="mt-[0.35em] h-4 w-4 shrink-0 text-accent" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="m2.5 8.5 3.5 3.5 7.5-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const GoogleMark = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden="true">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.28 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

export const Stars = () => (
  <span className="flex gap-0.5 text-olive" aria-label="5 out of 5 stars" role="img">
    {[0, 1, 2, 3, 4].map((i) => (
      <svg key={i} className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </span>
);


/** Full-height page hero: photo or video behind a flat dark overlay, headline and actions on top. */
export function PageHero({
  title,
  lead,
  image,
  imageAlt = "",
  video,
  poster,
  children,
  footer,
}: {
  title: ReactNode;
  lead?: ReactNode;
  image?: string;
  imageAlt?: string;
  video?: string;
  poster?: string;
  /** Buttons */
  children?: ReactNode;
  /** Optional row under the rating line, e.g. trust points */
  footer?: ReactNode;
}) {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col justify-end">
      <div className="absolute inset-0 -z-10">
        {video ? (
          <HeroVideo src={video} poster={poster ?? ""} />
        ) : image ? (
          <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover" />
        ) : null}
        <div className="absolute inset-0 bg-[#1d1f21]/65" />
      </div>
      <Container className="pb-14 pt-36 md:pb-20">
        <h1 className="to-display to-h1 max-w-[20ch]">{title}</h1>
        {lead && <p className="to-body mt-8 !text-fg">{lead}</p>}
        {children && <div className="mt-8 flex flex-col gap-3 sm:flex-row">{children}</div>}
        <p className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-[1.05rem] text-white/80">
          <GoogleMark />
          <a href={site.googleProfile} target="_blank" rel="noopener noreferrer" className="to-link">
            {site.reviews.rating} stars from {site.reviews.count} Google reviews
          </a>
        </p>
        {footer && <div className="mt-14 md:mt-20">{footer}</div>}
      </Container>
    </section>
  );
}

/** Founder quote card with photo and signature. */
export function FounderQuote() {
  return (
    <figure className="to-card grid items-center gap-8 p-8 md:grid-cols-[auto_minmax(0,1fr)] md:gap-12 md:p-12">
      <div className="relative h-40 w-40 overflow-hidden rounded-full md:h-48 md:w-48">
        <Image src="/images/ashton-madden-headshot-2026.jpg" alt="Ashton Madden, Founder & Director of TERREOAK Landscaping & Snow" fill sizes="200px" className="object-cover object-[50%_28%]" />
      </div>
      <div>
        <blockquote className="to-display text-[1.5rem] leading-snug md:text-[1.9rem]">
          “My goal with TERREOAK is simple: build a company rooted in strong values, a great team culture, and a customer experience people can trust.”
        </blockquote>
        <figcaption className="mt-6 flex items-center gap-6">
          <Image src="/Ashton_Signature_.jpg" alt="Ashton Madden’s signature" width={150} height={100} className="h-20 w-auto opacity-90 mix-blend-screen invert" />
          <div>
            <p className="text-[1.15rem] font-semibold text-fg">Ashton Madden</p>
            <p className="to-sub mt-1">Founder & Director</p>
          </div>
        </figcaption>
      </div>
    </figure>
  );
}

/** Closing blog card. Pass extra buttons as children to show them before the main one. */
export function BlogCta({ children }: { children?: ReactNode }) {
  return (
    <Band>
      <div className="to-card flex flex-col gap-8 p-8 md:flex-row md:items-center md:justify-between md:p-12">
        <div>
          <h2 className="to-display to-h2">Our blog</h2>
          <p className="to-body mt-4">Stay updated with the latest landscaping tips, seasonal advice, and project highlights from the TERREOAK team.</p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          {children}
          <Button href="/blog">Read our blog</Button>
        </div>
      </div>
    </Band>
  );
}
