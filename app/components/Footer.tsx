import Image from "next/image";
import Link from "next/link";
import { site } from "../lib/site";
import { GoogleMark } from "./ds";

const columns = [
  {
    title: "Services",
    links: [
      { label: "Landscape installs", href: "/landscape-installs" },
      { label: "Hardscaping", href: "/hardscaping" },
      { label: "Softscapes", href: "/softscapes" },
      { label: "Residential snow removal", href: "/residential-snow-removal" },
      { label: "Commercial maintenance", href: "/commercial-grounds-maintenance" },
      { label: "Commercial snow removal", href: "/commercial-snow-removal" },
    ],
  },
  {
    title: "Seasonal",
    links: [
      { label: "Spring cleanup", href: "/spring-cleanup-calgary" },
      { label: "Fall cleanup", href: "/fall-cleanup" },
      { label: "Irrigation blowouts", href: "/irrigation-blowouts" },
      { label: "Snowball referral program", href: "/residential-snow-removal#referral" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
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
      <div className="mx-auto w-full max-w-[1280px] px-5 py-10 sm:px-8 md:py-20 lg:px-12">
        <div className="grid gap-9 md:gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Link href="/" className="to-focus inline-flex rounded-lg">
              <Image src="/brand/terreoak-logo-on-dark.png" alt="TERREOAK Landscaping & Snow" width={1200} height={367} sizes="300px" className="h-[84px] w-auto" />
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
            <a
              href={site.preferredSourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="to-focus mt-7 inline-flex items-center gap-3 rounded-full bg-white/[0.07] px-5 py-3 text-[1.02rem] font-medium text-white transition-colors hover:bg-white/[0.12]"
            >
              <GoogleMark />
              Add TERREOAK as a preferred source on Google
            </a>
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

        <div className="mt-9 flex flex-col gap-6 border-t border-rule pt-7 md:mt-16 md:flex-row md:items-center md:justify-between md:gap-8 md:pt-8">
          <Image src="/brand/terreoak-tagline-on-dark.png" alt="Where the sun meets soil." width={1200} height={259} sizes="260px" className="h-[56px] w-auto self-start" />
          <div className="flex flex-col gap-3 text-sm text-muted md:items-end">
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
      </div>
    </footer>
  );
}
