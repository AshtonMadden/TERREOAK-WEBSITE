// Plain-data answers about the business, shared by the MCP server (/api/mcp) and the in-browser
// WebMCP tools, so an AI agent gets the same facts whichever way it asks.
import { zones } from "../residential-snow-removal/content";
import { communityPath } from "../snow-removal/communities";
import { site } from "./site";

export const services = [
  { name: "Residential snow removal", path: "/residential-snow-removal", form: "/residential-snow-removal#seasonal-form", summary: "Flat-rate season passes from $199.99 per month for driveways and front sidewalks in south Calgary, cleared whenever 1 cm falls." },
  { name: "Commercial grounds maintenance", path: "/commercial-grounds-maintenance", form: "/commercial-grounds-maintenance#commercial-form", summary: "Year-round grounds care and snow and ice management for condos, HOAs and business parks." },
  { name: "Commercial snow removal", path: "/commercial-snow-removal", form: "/commercial-snow-removal#commercial-snow-form", summary: "Parking lot plowing, sidewalk clearing, ice control and time-stamped visit logs for commercial properties in Calgary." },
  { name: "Landscape installs", path: "/landscape-installs", form: "/landscape-installs#landscape-form", summary: "Full landscape design and build." },
  { name: "Hardscaping", path: "/hardscaping", form: "/hardscaping#hardscape-form", summary: "Paving stone patios, retaining walls, walkways and steps." },
  { name: "Paver patios and artificial turf", path: "/hardscaping/paver-patios-artificial-turf", form: "/hardscaping/paver-patios-artificial-turf#patio-form", summary: "Paver, slab and natural stone patios, fire pit patios and artificial turf, built on a drained, compacted base." },
  { name: "Retaining walls", path: "/hardscaping/retaining-walls", form: "/hardscaping/retaining-walls#wall-form", summary: "Interlocking block and natural stone retaining walls with proper base and drainage." },
  { name: "Walkways and pathways", path: "/hardscaping/walkways-pathways", form: "/hardscaping/walkways-pathways#walkway-form", summary: "Paver walkways, slab steppers and side-yard paths on a drained, compacted base." },
  { name: "Sod installation", path: "/softscapes/sod-installation", form: "/softscapes/sod-installation#sod-form", summary: "Kentucky Bluegrass sod on graded, prepared soil. Typically $2,000 to $6,000 for a standard lot." },
  { name: "Snowbird and vacation snow removal pass", path: "/snow-removal/snowbird-vacation-pass", form: "/snow-removal/snowbird-vacation-pass#seasonal-form", summary: "Short-term residential snow removal for 1 to 8 weeks while you are away." },
  { name: "Softscapes", path: "/softscapes", form: "/softscapes#softscape-form", summary: "Sod, garden beds, tree and shrub planting, mulch and topsoil." },
  { name: "Spring cleanup", path: "/spring-cleanup-calgary", form: "/spring-cleanup-calgary#spring-cleanup-form", summary: "Core aeration, power raking and debris removal." },
  { name: "Fall cleanup", path: "/fall-cleanup", form: "/fall-cleanup", summary: "Leaf removal, final mow and winter lawn prep." },
  { name: "Irrigation blowouts", path: "/irrigation-blowouts", form: "/irrigation-blowouts#blowout-form", summary: "Sprinkler system winterization." },
] as const;

const abs = (path: string) => `${site.url}${path}`;

export function businessInfo() {
  return {
    name: site.name,
    website: site.url,
    phone: site.phoneSchema,
    email: site.email,
    hours: site.hours,
    location: site.locality,
    googleReviews: { rating: site.reviews.rating, count: site.reviews.count, profile: site.googleProfile },
    contactPage: abs("/contact"),
    clientPortal: site.clientPortalUrl,
  };
}

export function listServices() {
  return services.map((service) => ({ name: service.name, summary: service.summary, page: abs(service.path), requestForm: abs(service.form) }));
}

/** Is a Calgary community on one of the residential snow removal routes? */
export function checkSnowRoute(community: string) {
  const wanted = community.trim().toLowerCase();
  const zone = zones.find((z) => z.areas.some((area) => area.toLowerCase() === wanted));
  const allAreas = zones.flatMap((z) => z.areas);
  if (zone) {
    const area = zone.areas.find((name) => name.toLowerCase() === wanted) ?? community;
    const page = communityPath(area);
    return { community: area, onRoute: true, zone: zone.name, ...(page ? { page: abs(page) } : {}), next: `Reserve a season pass at ${abs("/residential-snow-removal#seasonal-form")}` };
  }
  return {
    community,
    onRoute: false,
    communitiesServed: allAreas,
    next: `This community is not on a listed route. Call ${site.phoneDisplay} to check availability for the street.`,
  };
}

/** Where to send someone who wants a quote for a given service. */
export function estimateLink(service?: string) {
  const wanted = (service ?? "").toLowerCase();
  const match = services.find((s) => wanted && (s.name.toLowerCase().includes(wanted) || wanted.includes(s.name.toLowerCase().split(" ")[0])));
  return {
    service: match?.name ?? "General estimate",
    requestForm: abs(match?.form ?? "/contact"),
    phone: site.phoneSchema,
    note: "Requests are submitted by the customer through the form on that page. We respond the same day.",
  };
}

/** Tool definitions in the shape both MCP and WebMCP expect. */
export const agentTools = [
  {
    name: "get_business_info",
    description: "Contact details, opening hours, location and Google review rating for TERREOAK Landscaping & Snow in Calgary.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
    run: () => businessInfo(),
  },
  {
    name: "list_services",
    description: "The landscaping and snow removal services TERREOAK offers, each with its page and quote request form.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
    run: () => listServices(),
  },
  {
    name: "check_snow_route",
    description: "Check whether a Calgary community is on one of TERREOAK's residential snow removal routes.",
    inputSchema: {
      type: "object",
      properties: { community: { type: "string", description: "Calgary community name, e.g. Cranston" } },
      required: ["community"],
      additionalProperties: false,
    },
    run: (args: Record<string, unknown>) => checkSnowRoute(String(args.community ?? "")),
  },
  {
    name: "get_estimate_link",
    description: "Get the right quote request form and phone number for a given service. Does not submit anything.",
    inputSchema: {
      type: "object",
      properties: { service: { type: "string", description: "Service wanted, e.g. snow removal, hardscaping, spring cleanup" } },
      additionalProperties: false,
    },
    run: (args: Record<string, unknown>) => estimateLink(typeof args.service === "string" ? args.service : undefined),
  },
] as const;
