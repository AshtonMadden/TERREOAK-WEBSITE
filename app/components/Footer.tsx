import Image from "next/image";
import Link from "next/link";
import { site } from "../lib/site";

const columns = [
  {
    title: "Services",
    links: [
      { label: "Landscape installs", href: "/landscape-installs" },
      { label: "Hardscaping", href: "/hardscaping" },
      { label: "Softscapes", href: "/softscapes" },
      { label: "Residential snow removal", href: "/residential-snow-removal" },
      { label: "Commercial maintenance", href: "/commercial-grounds-maintenance" },
    ],
  },
  {
    title: "Seasonal",
    links: [
      { label: "Spring cleanup", href: "/spring-cleanup-calgary" },
      { label: "Fall cleanup", href: "/fall-cleanup" },
      { label: "Irrigation blowouts", href: "/irrigation-blowouts" },
      { label: "Snowball referral program", href: "/snow-referral" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Projects", href: "/projects" },
      { label: "Our process", href: "/our-process" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="to-pavement border-t border-rule !bg-[#1d1f21]">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-8 md:py-20 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Link href="/" className="to-focus inline-flex items-center gap-1 rounded-lg" aria-label="TERREOAK home">
              <Image src="/logo.png" alt="" width={104} height={104} className="object-contain" style={{ height: 52, width: 52 }} />
              <span className="to-display text-3xl">TERREOAK</span>
            </Link>
            <p className="mt-5 max-w-sm text-[1.05rem] leading-relaxed text-muted">
              Landscape construction, property maintenance and residential snow removal for Calgary homes and businesses.
            </p>
            <div className="mt-7 grid gap-2 text-[1.05rem]">
              <a href={site.phoneHref} className="to-focus w-fit font-semibold text-white transition-colors hover:text-accent">
                {site.phoneDisplay}
              </a>
              <a href={`mailto:${site.email}`} className="to-focus w-fit font-semibold text-white transition-colors hover:text-accent">
                {site.email}
              </a>
              <p className="text-muted">{site.locality}</p>
              <p className="text-muted">{site.hours}</p>
            </div>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <h2 className="text-[1.05rem] font-semibold text-white">{col.title}</h2>
                <ul className="mt-5 grid gap-3">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="to-focus text-[1.05rem] text-muted transition-colors hover:text-white">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-rule pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/terms" className="to-focus transition-colors hover:text-white">
              Terms of Service
            </Link>
            <Link href="/privacy" className="to-focus transition-colors hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
