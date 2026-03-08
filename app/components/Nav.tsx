import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/landscape-installs", label: "Landscaping" },
  { href: "/residential-snow-removal", label: "Residential Snow" },
  { href: "/commercial-grounds-maintenance", label: "Commercial Grounds" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/irrigation-blowouts", label: "Irrigation Blowouts" },
  { href: "/spring-cleanup-calgary", label: "Spring Clean Up" },
  { href: "/fall-cleanup", label: "Fall Clean Up" },
  { href: "/snow-referral", label: "Snow Referral" },
  { href: "/support", label: "Support" },

];

export default function Nav() {
  return (
    <nav className="flex flex-wrap gap-4 text-sm">
      {links.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          className="text-white/80 hover:text-white transition"
        >
          {l.label}
        </Link>
      ))}
    </nav>
  );
}




