export const PHONE_DISPLAY = "587-707-7648";
export const PHONE_HREF = "tel:+15877077648";
export const EMAIL = "services@terreoak.ca";
export const PROPOSAL_HREF = "/#proposal";

export const GOOGLE_PROFILE_URL =
  "https://www.google.com/maps/place/TERREOAK+Landscaping+%26+Snow/@50.954088,-114.417468,10z/data=!3m1!4b1!4m6!3m5!1s0x247081e09718a15f:0xc8ac035eb06955b0!8m2!3d50.9541194!4d-114.087835!16s%2Fg%2F11tj3r68zj";

export type ServiceLink = {
  name: string;
  href: string;
  hint: string;
};

export const BUILD_SERVICES: ServiceLink[] = [
  { name: "Hardscaping", href: "/hardscaping", hint: "Patios, paving stones, retaining walls" },
  { name: "Softscapes", href: "/softscapes", hint: "Sod, planting, garden beds" },
  { name: "Landscape installs", href: "/landscape-installs", hint: "Full yard construction" },
  { name: "Landscape design", href: "/landscape-design-calgary", hint: "3D design-build plans" },
  { name: "Landscape lighting", href: "/landscape-lighting-calgary", hint: "Low-voltage outdoor LED" },
];

export const SEASONAL_SERVICES: ServiceLink[] = [
  { name: "Residential snow removal", href: "/residential-snow-removal", hint: "Driveways and walks, cleared at 1 cm" },
  { name: "Spring cleanup", href: "/spring-cleanup-calgary", hint: "Power raking, aeration, first mow" },
  { name: "Fall cleanup", href: "/fall-cleanup", hint: "Leaves, final mow, winter prep" },
  { name: "Irrigation blowouts", href: "/irrigation-blowouts", hint: "Sprinkler winterization" },
  { name: "Commercial grounds", href: "/commercial-grounds-maintenance", hint: "Year-round property maintenance" },
];

export const COMPANY_LINKS = [
  { name: "Projects", href: "/projects" },
  { name: "Our process", href: "/our-process" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
];

export const SERVICE_AREAS = ["Calgary", "Airdrie", "Cochrane", "Chestermere", "Okotoks"];
