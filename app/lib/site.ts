// Single source of truth for business details used across the site and its SEO data.
export const site = {
  name: "TERREOAK Landscaping & Snow",
  shortName: "TERREOAK",
  url: "https://www.terreoak.ca",
  phoneDisplay: "(587) 707-7648",
  phoneHref: "tel:+15877077648",
  phoneSchema: "+1-587-707-7648",
  email: "services@terreoak.ca",
  hours: "Open 7 days a week, 6am–9pm",
  locality: "Calgary, Alberta",
  reviews: { rating: "5.0", count: 40 },
  googleProfile:
    "https://www.google.com/maps/place/TERREOAK+Landscaping+%26+Snow/@50.954088,-114.417468,10z/data=!3m1!4b1!4m6!3m5!1s0x247081e09718a15f:0xc8ac035eb06955b0!8m2!3d50.9541194!4d-114.087835!16s%2Fg%2F11tj3r68zj",
  defaultOgImage: "/images/commercial.png",
  // Opens Google's source preferences with TERREOAK pre-searched, so a visitor can add it as a preferred source.
  preferredSourceUrl: "https://www.google.com/preferences/source?q=terreoak.ca",
} as const;

export type NavLink = { label: string; href: string; desc?: string };
export type NavGroup = { label: string; href?: string; items?: NavLink[] };

export const nav: NavGroup[] = [
  {
    label: "Landscaping",
    items: [
      { label: "Landscape installs", href: "/landscape-installs", desc: "Full design and build, start to finish" },
      { label: "Hardscaping", href: "/hardscaping", desc: "Patios, walkways and retaining walls" },
      { label: "Softscapes", href: "/softscapes", desc: "Sod, planting, mulch and garden beds" },
      { label: "Our process", href: "/our-process", desc: "How a project runs, step by step" },
    ],
  },
  { label: "Snow removal", href: "/residential-snow-removal" },
  {
    label: "Seasonal",
    items: [
      { label: "Spring cleanup", href: "/spring-cleanup-calgary", desc: "Power raking, aeration and first mow" },
      { label: "Fall cleanup", href: "/fall-cleanup", desc: "Leaf removal and winter prep" },
      { label: "Irrigation blowouts", href: "/irrigation-blowouts", desc: "Sprinkler winterization" },
    ],
  },
  { label: "Commercial", href: "/commercial-grounds-maintenance" },
  {
    label: "Company",
    items: [
      { label: "Projects", href: "/projects", desc: "Recent work around Calgary" },
      { label: "About", href: "/about", desc: "Who we are and how we work" },
      { label: "Blog", href: "/blog", desc: "Seasonal tips and guides" },
      { label: "Careers", href: "/careers", desc: "Join the crew" },
    ],
  },
];
