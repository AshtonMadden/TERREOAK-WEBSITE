// Single source of truth for business details used across the site and its SEO data.
export const site = {
  name: "TERREOAK Landscaping & Snow",
  shortName: "TERREOAK",
  url: "https://terreoak.ca",
  phoneDisplay: "(587) 707-7648",
  phoneHref: "tel:+15877077648",
  phoneSchema: "+1-587-707-7648",
  email: "services@terreoak.ca",
  hours: "Open 7 days a week, 6am–9pm",
  locality: "Calgary, Alberta",
  reviews: { rating: "5.0", count: 25 },
  googleProfile:
    "https://www.google.com/maps/place/TERREOAK+Landscaping+%26+Snow/@50.954088,-114.417468,10z/data=!3m1!4b1!4m6!3m5!1s0x247081e09718a15f:0xc8ac035eb06955b0!8m2!3d50.9541194!4d-114.087835!16s%2Fg%2F11tj3r68zj",
  // Other places the business is listed. Used as "sameAs" so search engines and AI agents can
  // confirm they are all the same company. Add social and directory profiles here.
  sameAs: [
    "https://www.google.com/maps/place/TERREOAK+Landscaping+%26+Snow/@50.954088,-114.417468,10z/data=!3m1!4b1!4m6!3m5!1s0x247081e09718a15f:0xc8ac035eb06955b0!8m2!3d50.9541194!4d-114.087835!16s%2Fg%2F11tj3r68zj",
  ],
  defaultOgImage: "/images/commercial.png",
  // Jobber client portal, where existing clients find their referral link.
  clientPortalUrl: "https://clienthub.getjobber.com/client_hubs/41b3399e-3795-43d8-afe2-e6c38c1b3e6e/",
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
      { label: "Paver patios & artificial turf", href: "/hardscaping/paver-patios-artificial-turf", desc: "Patios, fire pits and no-mow turf" },
      { label: "Retaining walls", href: "/hardscaping/retaining-walls", desc: "Block and stone walls built to last" },
      { label: "Walkways & pathways", href: "/hardscaping/walkways-pathways", desc: "Paver walks, steppers and side-yard paths" },
      { label: "Softscapes", href: "/softscapes", desc: "Sod, planting, mulch and garden beds" },
      { label: "Sod installation", href: "/softscapes/sod-installation", desc: "New lawns on properly prepared soil" },
      { label: "Our process", href: "/our-process", desc: "How a project runs, step by step" },
    ],
  },
  {
    label: "Snow removal",
    items: [
      { label: "Residential snow removal", href: "/residential-snow-removal", desc: "Season passes for driveways and sidewalks" },
      { label: "Pricing", href: "/residential-snow-removal#pricing", desc: "What a season pass costs" },
      { label: "Snowbird & vacation pass", href: "/snow-removal/snowbird-vacation-pass", desc: "Coverage for 1 to 8 weeks while you’re away" },
    ],
  },
  {
    label: "Seasonal",
    items: [
      { label: "Spring cleanup", href: "/spring-cleanup-calgary", desc: "Power raking, aeration and first mow" },
      { label: "Fall cleanup", href: "/fall-cleanup", desc: "Leaf removal and winter prep" },
      { label: "Irrigation blowouts", href: "/irrigation-blowouts", desc: "Sprinkler winterization" },
    ],
  },
  {
    label: "Commercial",
    items: [
      { label: "Grounds maintenance", href: "/commercial-grounds-maintenance", desc: "Year-round care for condos, HOAs and business parks" },
      { label: "Commercial snow removal", href: "/commercial-snow-removal", desc: "Parking lots, sidewalks and ice control" },
    ],
  },
  {
    label: "Company",
    items: [
      { label: "Projects", href: "/projects", desc: "Recent work around Calgary" },
      { label: "About", href: "/about", desc: "Who we are and how we work" },
      { label: "Contact", href: "/contact", desc: "Call, email or send a request" },
      { label: "Blog", href: "/blog", desc: "Seasonal tips and guides" },
      { label: "Careers", href: "/careers", desc: "Join the crew" },
    ],
  },
];
