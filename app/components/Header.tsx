"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "../lib/site";

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/" onClick={onClick} aria-label="TERREOAK home" className="to-focus flex shrink-0 items-center rounded-lg">
      <Image src="/brand/terreoak-logo-on-dark.png" alt="TERREOAK Landscaping & Snow" width={1200} height={367} priority sizes="200px" className="h-[52px] w-auto" />
    </Link>
  );
}

const Caret = () => (
  <svg className="h-3 w-3 opacity-60 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M2.5 4.5 6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => {
    setOpen(false);
    setExpanded(null);
  };

  // The header button goes to the form that matches the page you are on.
  const cta = pathname.startsWith("/residential-snow-removal")
    ? { label: "Reserve a season pass", href: "#seasonal-form" }
    : pathname.startsWith("/commercial-grounds-maintenance")
      ? { label: "Request a proposal", href: "#commercial-form" }
      : pathname.startsWith("/spring-cleanup-calgary")
        ? { label: "Get a free quote", href: "#spring-cleanup-form" }
        : pathname.startsWith("/hardscaping")
          ? { label: "Request a proposal", href: "#hardscape-form" }
          : { label: "Request an estimate", href: "/#home-form" };

  const isActive = (href?: string, items?: { href: string }[]) =>
    href ? pathname === href : !!items?.some((i) => pathname === i.href);

  return (
    <header className="to-pavement fixed inset-x-0 top-0 z-[100] !bg-transparent">
      <div
        className={`border-b transition-colors duration-300 ${
          scrolled || open ? "border-transparent bg-pavement/85 backdrop-blur-lg" : "border-transparent bg-pavement/0"
        }`}
      >
        <div className="mx-auto flex h-[72px] w-full max-w-[1280px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
          <Logo onClick={close} />

          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {nav.map((group) => {
              const active = isActive(group.href, group.items);
              const linkCls = `to-focus flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-[1.05rem] font-medium transition-colors hover:text-white ${
                active ? "text-white underline decoration-brand decoration-2 underline-offset-8" : "text-white/75"
              }`;
              if (group.href) {
                return (
                  <Link key={group.label} href={group.href} className={linkCls} aria-current={active ? "page" : undefined}>
                    {group.label}
                  </Link>
                );
              }
              return (
                <div key={group.label} className="group relative">
                  <button type="button" className={linkCls} aria-haspopup="true">
                    {group.label}
                    <Caret />
                  </button>
                  <div className="invisible absolute left-1/2 top-full w-[340px] -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="rounded-3xl bg-[#1d1f21] p-2.5 shadow-[0_18px_40px_-12px_rgba(0,0,0,0.6)]">
                      {group.items!.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="to-focus block rounded-2xl px-4 py-3 transition-colors hover:bg-white/[0.07]"
                          aria-current={pathname === item.href ? "page" : undefined}
                        >
                          <span className={`block text-[0.98rem] font-semibold ${pathname === item.href ? "text-brand" : "text-white"}`}>{item.label}</span>
                          {item.desc && <span className="mt-0.5 block text-[0.95rem] text-muted">{item.desc}</span>}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a href={site.phoneHref} className="to-focus hidden rounded-lg px-3 py-2 text-[1.05rem] font-medium text-white/75 transition-colors hover:text-white xl:block">
              {site.phoneDisplay}
            </a>
            <span className="hidden md:block">
              <a href={cta.href} onClick={close} className="to-btn to-btn-primary to-btn-sm">
                {cta.label}
              </a>
            </span>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="to-focus flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white lg:hidden"
            >
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                {open ? (
                  <path d="M5 5l10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                ) : (
                  <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-x-0 bottom-0 top-[73px] overflow-y-auto bg-pavement lg:hidden">
          <nav aria-label="Mobile" className="mx-auto flex max-w-[1280px] flex-col px-5 pb-10 pt-4 sm:px-8">
            {nav.map((group) =>
              group.href ? (
                <Link key={group.label} href={group.href} onClick={close} className="border-b border-rule py-5 to-display text-3xl text-white">
                  {group.label}
                </Link>
              ) : (
                <div key={group.label} className="border-b border-rule">
                  <button
                    type="button"
                    onClick={() => setExpanded(expanded === group.label ? null : group.label)}
                    aria-expanded={expanded === group.label}
                    className="flex w-full items-center justify-between py-5 text-left to-display text-3xl text-white"
                  >
                    {group.label}
                    <span className={`text-brand transition-transform ${expanded === group.label ? "rotate-45" : ""}`} aria-hidden="true">
                      +
                    </span>
                  </button>
                  {expanded === group.label && (
                    <div className="flex flex-col gap-1 pb-5">
                      {group.items!.map((item) => (
                        <Link key={item.href} href={item.href} onClick={close} className="rounded-lg px-3 py-3 text-xl text-muted hover:text-white">
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            )}
            <div className="mt-8 grid gap-3">
              <a href={cta.href} onClick={close} className="to-btn to-btn-primary w-full">
                {cta.label}
              </a>
              <a href={site.phoneHref} className="to-btn to-btn-quiet w-full">
                Call {site.phoneDisplay}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
