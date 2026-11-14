"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "../lib/site";

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/" onClick={onClick} aria-label="TERREOAK home" className="to-focus flex items-center gap-1 rounded-lg">
      <Image src="/logo.png" alt="" width={88} height={88} priority className="h-11 w-11 object-contain" />
      <span className="text-[1.35rem] font-extrabold tracking-[-0.02em] text-white">
        TERRE<span className="text-brand">OAK</span>
      </span>
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

  const isSnow = pathname.startsWith("/residential-snow-removal");
  const cta = isSnow
    ? { label: "Reserve season pass", href: "#seasonal-form" }
    : { label: "Get a quote", href: "/#home-form" };

  const isActive = (href?: string, items?: { href: string }[]) =>
    href ? pathname === href : !!items?.some((i) => pathname === i.href);

  return (
    <header className="fixed inset-x-0 top-0 z-[100]">
      <div
        className={`border-b transition-colors duration-300 ${
          scrolled || open ? "border-line bg-coal/85 backdrop-blur-xl" : "border-transparent bg-gradient-to-b from-black/60 to-transparent"
        }`}
      >
        <div className="mx-auto flex h-[72px] w-full max-w-[1240px] items-center justify-between gap-6 px-5 sm:px-8">
          <Logo onClick={close} />

          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {nav.map((group) => {
              const active = isActive(group.href, group.items);
              const linkCls = `to-focus flex items-center gap-1.5 rounded-full px-4 py-2 text-[0.98rem] font-medium transition-colors hover:bg-white/[0.06] hover:text-white ${
                active ? "text-white" : "text-white/70"
              }`;
              if (group.href) {
                return (
                  <Link key={group.label} href={group.href} className={linkCls} aria-current={active ? "page" : undefined}>
                    {group.label}
                    {active && <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />}
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
                    <div className="rounded-2xl border border-line bg-panel/95 p-2 shadow-2xl shadow-black/50 backdrop-blur-xl">
                      {group.items!.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="to-focus block rounded-xl px-4 py-3 transition-colors hover:bg-white/[0.06]"
                          aria-current={pathname === item.href ? "page" : undefined}
                        >
                          <span className={`block text-[0.98rem] font-semibold ${pathname === item.href ? "text-brand" : "text-white"}`}>{item.label}</span>
                          {item.desc && <span className="mt-0.5 block text-sm text-mist">{item.desc}</span>}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a href={site.phoneHref} className="to-focus hidden rounded-full px-3 py-2 text-[0.95rem] font-medium text-white/70 transition-colors hover:text-white xl:block">
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
              className="to-focus flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white/[0.04] text-white lg:hidden"
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
        <div className="fixed inset-x-0 bottom-0 top-[73px] overflow-y-auto bg-coal lg:hidden">
          <nav aria-label="Mobile" className="mx-auto flex max-w-[1240px] flex-col px-5 pb-10 pt-4 sm:px-8">
            {nav.map((group) =>
              group.href ? (
                <Link key={group.label} href={group.href} onClick={close} className="border-b border-line py-5 text-2xl font-semibold tracking-tight text-white">
                  {group.label}
                </Link>
              ) : (
                <div key={group.label} className="border-b border-line">
                  <button
                    type="button"
                    onClick={() => setExpanded(expanded === group.label ? null : group.label)}
                    aria-expanded={expanded === group.label}
                    className="flex w-full items-center justify-between py-5 text-left text-2xl font-semibold tracking-tight text-white"
                  >
                    {group.label}
                    <span className={`text-brand transition-transform ${expanded === group.label ? "rotate-45" : ""}`} aria-hidden="true">
                      +
                    </span>
                  </button>
                  {expanded === group.label && (
                    <div className="flex flex-col gap-1 pb-5">
                      {group.items!.map((item) => (
                        <Link key={item.href} href={item.href} onClick={close} className="rounded-xl px-3 py-3 text-lg text-mist hover:bg-white/[0.05] hover:text-white">
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
              <a href={site.phoneHref} className="to-btn to-btn-ghost w-full">
                Call {site.phoneDisplay}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
