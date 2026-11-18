import Link from "next/link";
import JobberLeadForm from "../components/JobberLeadForm";
import JsonLd from "../components/JsonLd";
import { Band, Container } from "../components/ds";
import { jobberForm } from "../home-content";
import { breadcrumbLd, pageMeta } from "../lib/seo";
import { nav, site } from "../lib/site";

export const metadata = pageMeta({
  title: "Contact TERREOAK Landscaping & Snow | Calgary",
  description: "Call (587) 707-7648, email services@terreoak.ca or send a request online. TERREOAK is open 7 days a week in Calgary and responds the same day.",
  path: "/contact",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": `${site.url}/contact#webpage`,
      url: `${site.url}/contact`,
      name: "Contact TERREOAK Landscaping & Snow",
      about: { "@id": `${site.url}/#localbusiness` },
      isPartOf: { "@id": `${site.url}/#website` },
    },
    breadcrumbLd([
      { name: "Home", path: "/" },
      { name: "Contact", path: "/contact" },
    ]),
  ],
};

const serviceLinks = nav.flatMap((group) => (group.items ?? (group.href ? [{ label: group.label, href: group.href }] : []))).filter((link) => !["/projects", "/about", "/blog", "/careers", "/our-process"].includes(link.href));

export default function Page() {
  return (
    <main className="to-pavement to-flow overflow-x-clip pt-36 md:pt-44">
      <JsonLd data={jsonLd} />
      <Container>
        <h1 className="to-display to-h1 max-w-[18ch]">Get in touch with TERREOAK</h1>
        <p className="to-body mt-6 max-w-[60ch]">
          Call, email or send a request below. We’re a Calgary landscaping and snow removal company, open 7 days a week, and we respond the same day.
        </p>

        <div className="mt-10 grid gap-4 md:mt-14 md:grid-cols-3 md:gap-5">
          <div className="to-card p-6 md:p-8">
            <h2 className="to-sub">Phone</h2>
            <a href={site.phoneHref} className="to-focus mt-3 block text-2xl font-bold text-fg transition-colors hover:text-accent">
              {site.phoneDisplay}
            </a>
            <p className="mt-2 text-[1.05rem] text-muted">{site.hours}</p>
          </div>
          <div className="to-card p-6 md:p-8">
            <h2 className="to-sub">Email</h2>
            <a href={`mailto:${site.email}`} className="to-focus mt-3 block break-words text-2xl font-bold text-fg transition-colors hover:text-accent">
              {site.email}
            </a>
            <p className="mt-2 text-[1.05rem] text-muted">We reply the same day.</p>
          </div>
          <div className="to-card p-6 md:p-8">
            <h2 className="to-sub">Service area</h2>
            <p className="mt-3 text-2xl font-bold text-fg">{site.locality}</p>
            <p className="mt-2 text-[1.05rem] text-muted">
              Already a client?{" "}
              <a href={site.clientPortalUrl} target="_blank" rel="noopener noreferrer" className="to-link">
                Open your client portal
              </a>
            </p>
          </div>
        </div>
      </Container>

      <Band id="contact-form" surface="snow">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <div>
            <h2 className="to-display to-h2">Request an estimate</h2>
            <p className="to-body mt-5">Tell us about your property and what you need. For a specific service, the form on that service’s page goes straight to the right crew:</p>
            <ul className="mt-6 grid gap-2.5 text-[1.05rem]">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="to-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[28px] bg-white p-4 shadow-[0_30px_60px_-40px_rgba(0,0,0,0.35)] md:p-7">
            <JobberLeadForm clienthubId={jobberForm.clienthubId} formUrl={jobberForm.formUrl} />
          </div>
        </div>
      </Band>
    </main>
  );
}
