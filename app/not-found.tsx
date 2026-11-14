import Link from "next/link";
import type { Metadata } from "next";
import { Button, Container } from "./components/ds";

export const metadata: Metadata = {
  title: "Page Not Found | TERREOAK",
  robots: { index: false, follow: true },
};

const services = [
  { name: "Landscape installs", href: "/landscape-installs" },
  { name: "Hardscaping", href: "/hardscaping" },
  { name: "Softscapes", href: "/softscapes" },
  { name: "Residential snow removal", href: "/residential-snow-removal" },
  { name: "Spring cleanup", href: "/spring-cleanup-calgary" },
  { name: "Fall cleanup", href: "/fall-cleanup" },
  { name: "Irrigation blowouts", href: "/irrigation-blowouts" },
  { name: "Commercial maintenance", href: "/commercial-grounds-maintenance" },
];

export default function NotFound() {
  return (
    <main className="to-pavement to-flow overflow-x-clip pb-20 pt-36 md:pb-28 md:pt-44">
      <Container>
        <p className="to-sub">Error 404</p>
        <h1 className="to-display to-h1 mt-4 max-w-[16ch]">Looks like you’re off the path.</h1>
        <p className="to-body mt-8">The page you’re looking for doesn’t exist or has been moved. Use the links below to get back to our core services.</p>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <li key={service.href}>
              <Link href={service.href} className="to-card to-card-lift to-focus block p-6 text-[1.15rem] font-bold text-fg">
                {service.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <Button href="/">Return home</Button>
        </div>
      </Container>
    </main>
  );
}
