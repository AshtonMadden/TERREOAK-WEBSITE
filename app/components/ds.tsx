import Link from "next/link";
import type { ReactNode } from "react";
import Reveal from "./Reveal";
import { site } from "../lib/site";

/* TERREOAK design system primitives. Server components: safe to use anywhere. */

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1240px] px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`to-eyebrow ${className}`}>{children}</p>;
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
  variant?: "primary" | "ghost";
  size?: "md" | "sm";
  className?: string;
}) {
  const cls = `to-btn ${variant === "primary" ? "to-btn-primary" : "to-btn-ghost"} ${size === "sm" ? "to-btn-sm" : ""} ${className}`;
  const isPlainAnchor = /^(#|tel:|mailto:|https?:)/.test(href);
  if (isPlainAnchor) {
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

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg className={`h-4 w-4 ${className}`} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Standard page section: eyebrow, heading, optional lead, then content. */
export function Section({
  id,
  eyebrow,
  title,
  lead,
  children,
  align = "left",
  tone = "coal",
  className = "",
  headerAside,
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  lead?: ReactNode;
  children: ReactNode;
  align?: "left" | "center";
  tone?: "coal" | "panel" | "white";
  className?: string;
  headerAside?: ReactNode;
}) {
  const tones = {
    coal: "bg-coal text-white",
    panel: "bg-[#202125] text-white border-y border-line",
    white: "bg-white text-[#111214]",
  } as const;
  const centered = align === "center";
  return (
    <section id={id} className={`relative overflow-x-clip py-20 md:py-28 ${tones[tone]} ${className}`}>
      <Container>
        {(title || eyebrow) && (
          <Reveal className={`mb-12 md:mb-16 flex flex-col gap-6 ${centered ? "items-center text-center" : "md:flex-row md:items-end md:justify-between"}`}>
            <div className="max-w-3xl">
              {eyebrow && <Eyebrow className={tone === "white" ? "!text-brand-deep" : ""}>{eyebrow}</Eyebrow>}
              {title && <h2 className="to-h2 mt-4">{title}</h2>}
              {lead && <p className={`to-lead mt-5 ${tone === "white" ? "!text-black/60" : ""}`}>{lead}</p>}
            </div>
            {headerAside}
          </Reveal>
        )}
        {children}
      </Container>
    </section>
  );
}

/** Google rating pill. Numbers come from site.ts so they stay consistent everywhere. */
export function ReviewBadge({ className = "" }: { className?: string }) {
  return (
    <a
      href={site.googleProfile}
      target="_blank"
      rel="noopener noreferrer"
      className={`to-focus group inline-flex items-center gap-3 rounded-full border border-line bg-white/[0.04] py-2 pl-3 pr-4 backdrop-blur transition-colors hover:border-white/30 ${className}`}
      aria-label={`Rated ${site.reviews.rating} out of 5 from ${site.reviews.count} Google reviews`}
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden="true">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.28 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
      </svg>
      <span className="flex items-center gap-0.5 text-brand" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <svg key={i} className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </span>
      <span className="text-sm font-semibold text-white">
        {site.reviews.rating}
        <span className="font-medium text-mist"> · {site.reviews.count} Google reviews</span>
      </span>
    </a>
  );
}

/** Accessible FAQ accordion. Pair with faqLd() from lib/seo for structured data. */
export function FaqList({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <div className="grid gap-3">
      {faqs.map((faq) => (
        <details key={faq.q} className="to-faq to-card group px-6 py-1 md:px-8">
          <summary className="to-focus flex items-center justify-between gap-6 py-5 text-lg font-semibold tracking-tight text-white md:text-xl">
            {faq.q}
            <span className="to-faq-icon flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-mist" aria-hidden="true">
              <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </span>
          </summary>
          <p className="max-w-3xl pb-6 text-[1.05rem] leading-relaxed text-mist">{faq.a}</p>
        </details>
      ))}
    </div>
  );
}
