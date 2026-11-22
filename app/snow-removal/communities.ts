// One entry per community on the residential snow removal routes. Each gets its own page at
// /snow-removal/<slug>. The `about` and `snow` text is written per community so the pages are
// genuinely different from one another; add real local detail here as it comes up (photos,
// number of homes served, a client quote) to make a page stronger.
import { zones } from "../residential-snow-removal/content";

export type Community = {
  slug: string;
  name: string;
  /** Where the community sits, in a few words. */
  where: string;
  about: string;
  snow: string;
};

export const communities: Community[] = [
  {
    slug: "auburn-bay",
    name: "Auburn Bay",
    where: "a lake community in southeast Calgary, beside Seton and the South Health Campus",
    about:
      "Auburn Bay is one of the busiest stops on our southeast route. It’s a lake community with a real mix of homes: front-drive garages on the wider streets, and laned homes with shorter front walks closer to the lake.",
    snow: "A lot of Auburn Bay households are out the door early for shift work at the hospital or the commute up Deerfoot, so a driveway that’s cleared before you need it matters here. We clear the driveway and the front sidewalk, including the stretch of city sidewalk along your lot.",
  },
  {
    slug: "mahogany",
    name: "Mahogany",
    where: "a lake community in southeast Calgary, next to Auburn Bay",
    about:
      "Mahogany sits right beside Auburn Bay on our southeast route, built around the largest lake in the city. Lots here range from laned homes with a short front walk to wide front-drive properties and estate homes near the water.",
    snow: "Bigger driveways and corner lots mean more ground to cover and more public sidewalk to keep clear. A season pass covers the whole driveway and front sidewalk at one flat rate, however many times it snows.",
  },
  {
    slug: "cranston",
    name: "Cranston",
    where: "a southeast Calgary community on the ridge above the Bow River valley",
    about:
      "Cranston runs along the ridge above the Bow River, with Riverstone down in the valley below. It’s a long community with a lot of front-drive homes, and we service it as part of our southeast route.",
    snow: "Homes near the ridge are more exposed to wind, so snow tends to drift back across a driveway after it has been cleared. That’s exactly why we come back every 24 hours during a snowfall instead of waiting for it to end.",
  },
  {
    slug: "copperfield",
    name: "Copperfield",
    where: "a southeast Calgary community east of 52 Street",
    about:
      "Copperfield is a family community on the east side of our southeast route, with a mix of laned homes, front-drive homes and townhomes around its ponds and pathways.",
    snow: "Many Copperfield homes have a front walk and a stretch of public sidewalk even when the garage is off the back lane. We clear the front sidewalk and walkway along with the driveway, so the part the city can fine you for is always looked after.",
  },
  {
    slug: "mckenzie-towne",
    name: "McKenzie Towne",
    where: "a southeast Calgary community built around High Street",
    about:
      "McKenzie Towne was designed like a traditional town, with front porches, tree-lined streets and rear lanes behind many of the homes. It’s one of the more established communities on our southeast route.",
    snow: "With so many homes facing the street and garages off the lane, front walks and public sidewalks do a lot of work here. We clear them at 1 cm, the same as a driveway, so the walk to your front door stays safe for you, your neighbours and your deliveries.",
  },
  {
    slug: "legacy",
    name: "Legacy",
    where: "one of the newest communities on the south edge of southeast Calgary",
    about:
      "Legacy is at the far south end of our southeast route, beside Walden. It’s a newer community, with homes still being built on some streets and plenty of young families.",
    snow: "New concrete and fresh landscaping are easy to damage with the wrong tools. Our crews use equipment suited to residential driveways and mark your driveway edge with a picket, so nothing gets scraped or driven over under the snow.",
  },
  {
    slug: "walden",
    name: "Walden",
    where: "a southeast Calgary community just east of Macleod Trail",
    about:
      "Walden sits beside Legacy at the south end of our southeast route, close to Macleod Trail and the shops along 194 Avenue. It has a mix of laned homes, front-drive homes and townhomes.",
    snow: "Being this far south usually means a longer commute, which means leaving early. We dispatch at 1 cm and email you before the crew arrives, so you know your driveway is handled before you’re up.",
  },
  {
    slug: "evergreen",
    name: "Evergreen",
    where: "a southwest Calgary community beside Fish Creek Provincial Park",
    about:
      "Evergreen backs onto Fish Creek Provincial Park and is one of the larger communities on our southwest route. Streets here range from compact front-drive homes to large estate lots with long driveways.",
    snow: "Longer driveways and sloped lots are where shovelling gets hard and ice builds up fastest. Regular clearing down to the pavement keeps packed snow from turning into an ice sheet on a slope.",
  },
  {
    slug: "shawnessy",
    name: "Shawnessy",
    where: "an established southwest Calgary community near the Shawnessy shopping district",
    about:
      "Shawnessy is one of the more established communities on our southwest route, with mature trees and a lot of long-time homeowners, close to the shops and the LRT.",
    snow: "Plenty of Shawnessy homeowners have been shovelling the same driveway for decades and would be happy to hand it off. A season pass means no more heavy lifting, and a vacation pass covers the weeks you’re away somewhere warm.",
  },
  {
    slug: "silverado",
    name: "Silverado",
    where: "a southwest Calgary community on the city’s south edge, near Spruce Meadows",
    about:
      "Silverado is at the southern tip of our southwest route, close to Spruce Meadows. It’s a newer community with mostly front-drive homes and wide double driveways.",
    snow: "Open land around the south edge of the city lets the wind move snow around, so a driveway can fill in again overnight. Coming back every 24 hours during a snowfall keeps it clear without you having to call.",
  },
  {
    slug: "chaparral",
    name: "Chaparral",
    where: "a lake community in south Calgary",
    about:
      "Chaparral is a lake community in the deep south of the city, with Chaparral Valley below it toward the river. Most homes have front-drive garages on quiet crescents and cul-de-sacs.",
    snow: "Cul-de-sacs often end up with a heavy ridge of snow at the end of the driveway once the plow has been through. Ask us about windrow clearing when you sign up so that ridge gets dealt with too.",
  },
  {
    slug: "bridlewood",
    name: "Bridlewood",
    where: "a southwest Calgary community between Evergreen and Somerset",
    about:
      "Bridlewood sits between Evergreen and Somerset in the middle of our southwest route. It’s a family community with a mix of front-drive homes, laned homes and townhomes.",
    snow: "With school runs and early commutes, mornings are busy here. We aim to have your driveway and front sidewalk done after every qualifying snowfall, with a time-stamped photo emailed to you when it’s finished.",
  },
  {
    slug: "somerset",
    name: "Somerset",
    where: "a southwest Calgary community beside the Somerset-Bridlewood LRT station",
    about:
      "Somerset is a compact, established community on our southwest route, right beside the Somerset-Bridlewood LRT station and close to the Shawnessy shops.",
    snow: "A lot of Somerset residents walk to the train, so clear sidewalks matter to the whole street, not just to you. We clear your front sidewalk within the city’s 24-hour window after every snowfall.",
  },
];

export const communityBySlug = (slug: string) => communities.find((community) => community.slug === slug);

/** The route zone a community belongs to, e.g. "Southeast Calgary". */
export const zoneFor = (name: string) => zones.find((zone) => zone.areas.includes(name))?.name ?? "South Calgary";

/** Other communities on the same route, for "also serving" links. */
export const neighboursOf = (name: string) => {
  const zone = zones.find((z) => z.areas.includes(name));
  return communities.filter((community) => community.name !== name && zone?.areas.includes(community.name));
};

export const communityPath = (name: string) => {
  const match = communities.find((community) => community.name === name);
  return match ? `/snow-removal/${match.slug}` : undefined;
};
