// Content for the snow removal page, kept apart from layout so numbers and copy are easy to update.

export const offers = [
  {
    title: "Full season coverage",
    desc: "One flat monthly rate for driveway and front sidewalk clearing, from first snowfall to final melt. No per-visit fees.",
  },
  {
    title: "1cm trigger",
    desc: "We dispatch as soon as 1cm accumulates, not only for major storms.",
  },
  {
    title: "Photo service log",
    desc: "Time-stamped photos emailed after every visit, so you know what was cleared and when.",
  },
  {
    title: "Dispatch alerts",
    desc: "An email before our crew arrives, so you know service is on the way.",
  },
  {
    title: "Driveway marker",
    desc: "One highly visible snow picket so crews find your property fast in the dark.",
  },
  {
    title: "Flexible payment",
    desc: "Pay in full upfront and save 10%, or split into 5 monthly auto-payments.",
  },
];

export const steps = [
  { title: "Sign up for your snow pass", desc: "Lock in your spot for the season." },
  { title: "We install your picket", desc: "We place one highly visible marker to help crews identify your property fast." },
  { title: "Our team gets to work", desc: "Reliable service whenever it snows." },
];

// The passes and add-ons described across the page and FAQ, side by side.
export const passes = [
  {
    name: "Season pass",
    term: "First snowfall through the final melt",
    summary: "The full winter, handled. One flat monthly rate with no per-visit fees.",
    includes: [
      "Driveway and front sidewalk clearing",
      "Service at 1cm of accumulation",
      "One visit every 24 hours during a snowfall",
      "Dispatch alert before each visit",
      "Photo service log after each visit",
      "Driveway marker picket",
    ],
    payment: "Pay in full upfront and save 10%, or split into 5 monthly auto-payments.",
  },
  {
    name: "Snowbird and vacation pass",
    term: "1 to 8 weeks",
    summary: "Coverage for the part of the winter you’re away, with the same dedicated service and photo logs as a full season pass.",
    includes: ["Driveway and front sidewalk clearing", "Service at 1cm of accumulation", "Photo service log after each visit"],
    payment: "",
  },
];

// Starting price for a residential season pass. Used on the snow page, the pricing page and
// in the price data search engines read.
export const snowPricing = { from: "$199.99", amount: "199.99" };

export const addOns = [
  {
    name: "Ice melt",
    desc: "A monthly add-on subscription. Automatic ice melt application after each visit, up to 4 visits per month.",
  },
  {
    name: "Windrow clearing",
    desc: "Windrows left by city plows aren’t part of the standard pass. Ask us about a custom pass when you sign up.",
  },
];

export const zones = [
  { name: "Southeast Calgary", areas: ["Auburn Bay", "Mahogany", "Cranston", "Copperfield", "McKenzie Towne", "Legacy", "Walden"] },
  { name: "Southwest Calgary", areas: ["Evergreen", "Shawnessy", "Silverado", "Chaparral", "Bridlewood", "Somerset"] },
];

// Snow tracker. Update these numbers as the season goes on; the measuring stick, percentage
// and tiles on the page all follow from them.
export const season = {
  label: "2026–2027",
  totalCm: 30,
  averageCm: 129,
  lastSnowfallCm: 30,
  visits: 1,
};


export const jobberForm = {
  clienthubId: "41b3399e-3795-43d8-afe2-e6c38c1b3e6e-2232203",
  formUrl:
    "https://clienthub.getjobber.com/client_hubs/41b3399e-3795-43d8-afe2-e6c38c1b3e6e/public/work_request/embedded_work_request_form?form_id=2232203",
};

// Real Google reviews from snow removal clients.
export const reviews = [
  {
    name: "George Witherley",
    text: "The guys from TERREOAK are amazing. They are clear on when they are coming with emails and show up every single time no matter how bad the snow fall is. They always go above and beyond clearing not only the walk way but my stairs as well. They are very polite and do an excellent job.",
  },
  {
    name: "J Walker",
    text: "I currently use TERREOAK for snow removal services and have been extremely happy with their work. They always send notification of when they will be coming and are extremely prompt and courteous. Will definitely be using them again next season and would highly recommend.",
  },
  {
    name: "Susan Lewis",
    text: "TERREOAK are doing snow removal for me this year. They send an email to advise when they are dispatching the crew each time it snows. They always get it done within the time they say. I'm very happy with their service and would highly recommend them.",
  },
];

export const stats = [
  { end: 100, suffix: "+", label: "Total properties managed" },
  { end: 92, suffix: "+", label: "Happy clients" },
  { end: 2, suffix: "", label: "TERREOAK crews" },
  { end: 12, suffix: " hr", label: "Average route clear time" },
];

// Snowball referral program terms.
export const referral = {
  steps: [
    "Share your personal link with someone new",
    "When they sign up, you get $25 off your next invoice",
    "They get $50 off their first month",
    "You can refer up to two people this season",
  ],
  highlights: [
    { value: "$25", label: "off your next invoice" },
    { value: "$50", label: "off their first month" },
    { value: "2", label: "referrals this season" },
  ],
  conditions: [
    "They must be a new client (not someone who already works with us)",
    "They need to sign up for a minimum of three months",
    "Credits are applied once they’ve started service",
  ],
};
