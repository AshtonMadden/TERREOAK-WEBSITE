import Link from "next/link";
import type { ReactNode } from "react";

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
 * A page band on one of the two surfaces. Children pick up the right text, rule and
 * accent colours through the text-fg / text-muted / border-rule / text-accent utilities.
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
  return (
    <section id={id} className={`${surface === "snow" ? "to-snow" : "to-pavement"} overflow-x-clip py-20 md:py-28 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

/** FAQ as hairline rows. Pair with faqLd() from lib/seo for structured data. */
export function FaqList({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <div className="border-t border-rule">
      {faqs.map((faq) => (
        <details key={faq.q} className="to-faq border-b border-rule">
          <summary className="to-focus flex items-center justify-between gap-6 py-6 text-xl font-semibold text-fg md:text-2xl">
            {faq.q}
            <svg className="to-faq-icon h-5 w-5 shrink-0 text-accent" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M10 3v14M3 10h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </summary>
          <p className="to-body pb-7">{faq.a}</p>
        </details>
      ))}
    </div>
  );
}
