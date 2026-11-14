// Content for the snow removal page, kept apart from layout so numbers and copy are easy to update.

export const stats = [
  { end: 100, suffix: "+", label: "Properties managed" },
  { end: 92, suffix: "+", label: "Happy clients" },
  { end: 2, suffix: "", label: "TERREOAK crews" },
  { end: 1, suffix: "cm", label: "Dispatch trigger" },
];

export const offers = [
  {
    icon: "calendar",
    title: "Full season coverage",
    desc: "One flat monthly rate covers driveway and front sidewalk clearing from the first snowfall through the final melt. We service your property once every 24 hours, with no per-visit fees and no surprises.",
  },
  {
    icon: "ruler",
    title: "1cm trigger",
    desc: "We dispatch as soon as accumulation hits 1cm. You won’t wake up to a buried driveway waiting for a contractor who services “major storms only.”",
  },
  {
    icon: "camera",
    title: "Photo service log",
    desc: "After every visit, you receive time-stamped photos by email confirming exactly what was cleared and when. Perfect for renters, property owners, or anyone who needs documentation.",
  },
  {
    icon: "bell",
    title: "Dispatch alerts",
    desc: "Email notifications sent before our crew arrives so you always know service is on the way, no guessing, no wondering.",
  },
  {
    icon: "pin",
    title: "Driveway marker",
    desc: "Each client receives one highly visible snow picket. This helps our crews quickly identify your property during dark, early-morning hours, keeping them off their phones and focused on safety.",
  },
  {
    icon: "card",
    title: "Flexible payment",
    desc: "Pay in full upfront and save 10%, or split into 5 monthly auto-payments.",
  },
] as const;

export const steps = [
  { title: "Sign up for your snow pass", desc: "Lock in your spot for the season." },
  { title: "We install your picket", desc: "We place one highly visible marker to help crews identify your property fast." },
  { title: "Our team gets to work", desc: "Reliable service whenever it snows." },
];

export const zones = [
  { name: "Southeast Calgary", areas: ["Auburn Bay", "Mahogany", "Cranston", "Copperfield", "McKenzie Towne", "Legacy", "Walden"] },
  { name: "Southwest Calgary", areas: ["Evergreen", "Shawnessy", "Silverado", "Chaparral", "Bridlewood", "Somerset"] },
];

// Snow tracker. Update these numbers as the season goes on.
export const season = {
  label: "2025–2026",
  totalCm: 142,
  averageCm: 129,
  lastSnowfallCm: 12,
  visits: 38,
};

export const instagramPosts = [
  "https://www.instagram.com/p/DV8vk9yk61k/",
  "https://www.instagram.com/p/DUGmQOWD8NR/",
  "https://www.instagram.com/p/DU1JTo7kkSj/",
];

export const jobberForm = {
  clienthubId: "41b3399e-3795-43d8-afe2-e6c38c1b3e6e-2232203",
  formUrl:
    "https://clienthub.getjobber.com/client_hubs/41b3399e-3795-43d8-afe2-e6c38c1b3e6e/public/work_request/embedded_work_request_form?form_id=2232203",
};
