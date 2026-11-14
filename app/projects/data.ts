// Project write-ups. Each one is rendered by components/ProjectPage.

export type ProjectDetail = {
  path: string;
  metaTitle: string;
  metaDescription: string;
  title: string;
  location: string;
  cost: string;
  hero: string;
  heroAlt: string;
  breakdown: string[];
  scope: { label: string; text: string }[];
  galleryTitle: string;
  gallery: { src: string; alt: string }[];
  ctaTitle: string;
  ctaText: string;
};

export const projectDetails: Record<string, ProjectDetail> = {
  mckenzieStonePathway: {
    path: "/mckenzielakelandscaping",
    metaTitle: "Stone Pathway in McKenzie Lake, Calgary | TERREOAK Projects",
    metaDescription:
      "A two-day stone pathway upgrade in McKenzie Lake, SE Calgary: old rock beds removed, commercial filter fabric, new paving stones and 40mm Rundle rock.",
    title: "McKenzie Lake custom landscape design & build",
    location: "McKenzie Lake, SE Calgary",
    cost: "$5,000",
    hero: "/Landscape web page pics/Finished-hardscape-project.JPG",
    heroAlt: "Finished stone pathway by TERREOAK in McKenzie Lake",
    breakdown: [
      "This project focused on upgrading an outdated, low-end rock and stepping-stone pathway into a premium, durable hardscape. The client wanted a much cleaner, modern look that would be easy to maintain and drastically improve their backyard's curb appeal.",
      "Within just two days, our crew stripped the existing materials and installed a far superior, professional-grade foundation and aesthetic finish.",
    ],
    scope: [
      { label: "Demolition & removal", text: "Completely stripped and hauled away the old, failing rock beds and cheap stepping stones to provide a clean slate." },
      { label: "Premium base layer", text: "Rolled out heavy-duty 5oz commercial filter fabric to establish a permanent weed barrier and stabilize the soil beneath the new rock." },
      { label: "Upgraded hardscaping", text: "Precision-installed high-end paving stones to create a modern, highly durable walkway." },
      { label: "Decorative finish", text: "Filled the surrounding beds with beautiful 40mm Rundle Rock, providing excellent drainage and a striking contrast against the new pavers." },
    ],
    galleryTitle: "Project progress gallery",
    gallery: [
      { src: "/projects/project-1/prep-1.jpg", alt: "Worker preparing the site" },
      { src: "/projects/project-1/prep-2.jpg", alt: "Filter fabric laid out along the side of the house" },
      { src: "/projects/project-1/prep-3.jpg", alt: "Stepping stones being laid out over the filter fabric" },
    ],
    ctaTitle: "Ready to transform your space?",
    ctaText: "Whether you want a complete backyard overhaul or a custom patio, our team is ready to bring your vision to life.",
  },
  mckenzieTechoBloc: {
    path: "/projects/mckenzie-lake-landscaping",
    metaTitle: "Techo-Bloc Paver Path in McKenzie Lake | TERREOAK Projects",
    metaDescription:
      "A $10,000 side-yard hardscape in McKenzie Lake, Calgary: Techo-Bloc Blu 60 Grande pavers on a compacted base with a washed river rock border.",
    title: "McKenzie Lake premium hardscape installation",
    location: "McKenzie Lake, SE Calgary",
    cost: "$10,000",
    hero: "/Landscape web page pics/Techo-Bloc-pavers-river-rock.JPG",
    heroAlt: "Techo-Bloc pavers bordered with river rock in McKenzie Lake",
    breakdown: [
      "This project focused entirely on high-quality hardscaping to completely refresh an outdated side-yard and pathway. The old mixed rock and aggregate steppers were heavily weathered and failing, so we completely removed and disposed of them to make way for a modern upgrade.",
      "We replaced the old pathway with large-format Techo-Bloc Blu 60 Grande pavers in a stunning Shale Grey finish, cleanly bordered with premium washed river rock for a striking, low-maintenance aesthetic. To complete the clean look, we also removed and replaced the deteriorating wood border running down the property line.",
    ],
    scope: [
      { label: "Demolition & removal", text: "Completely dug out and hauled away the old aggregate steppers, mixed rock, and deteriorated landscaping fabric." },
      { label: "Premium base preparation", text: "Installed a proper compacted base layer to ensure the new heavy pavers would not shift or heave during the winter." },
      { label: "Techo-Bloc installation", text: "Precision-laid Techo-Bloc Blu 60 Grande pavers in Shale Grey to create a bold, modern, and highly durable walking path." },
      { label: "River rock border", text: "Surrounded the new Grande pavers with washed river rock for excellent drainage and a crisp, professional finish." },
      { label: "Property line border", text: "Removed and replaced the old wood retaining border along the property line to re-establish a sharp, structural edge." },
    ],
    galleryTitle: "Project progress gallery",
    gallery: [
      { src: "/projects/project-2/img-7.jpg", alt: "Full view of the new Techo-Bloc paver pathway and new wood property line border" },
      { src: "/projects/project-2/img-6.jpg", alt: "Close up of the new Techo-Bloc pavers" },
      { src: "/projects/project-2/img-2.jpg", alt: "Worker adjusting base prep next to house" },
      { src: "/projects/project-2/img-3.jpg", alt: "Close up of Techo-Bloc Blu 60 Grande pavers wet with river rock" },
      { src: "/projects/project-2/img-4.jpg", alt: "Chainlink gate showing old rock and square steppers" },
      { src: "/projects/project-2/img-5.jpg", alt: "Downspout draining onto old mixed rock and steppers" },
    ],
    ctaTitle: "Want a hardscape built to last?",
    ctaText: "Don't settle for sinking patios. Our open-grade base systems and premium materials are built specifically for Alberta.",
  },
  cranston: {
    path: "/projects/cranston-landscape-makeover",
    metaTitle: "Cranston Front Yard Makeover, Calgary | TERREOAK Projects",
    metaDescription:
      "A Cranston front yard brought back after Killex killed the lawn: new topsoil, Kentucky Bluegrass sod, Rundle rock beds and a 300 lb feature boulder.",
    title: "Cranston front yard landscape makeover",
    location: "Cranston, Calgary AB",
    cost: "$3,150",
    hero: "/projects/cranston-makeover/hero-aerial.jpg",
    heroAlt: "Aerial view of the Cranston front yard makeover by TERREOAK",
    breakdown: [
      "Originally, this client reached out to us after accidentally spraying his entire front yard with Killex, which unfortunately killed off the entire lawn. We stepped in to completely revitalize the space, removing the dead turf and starting fresh to give the home its curb appeal back.",
      "We brought in new, nutrient-rich soil to establish a healthy foundation and installed premium Kentucky Bluegrass sod across the entire front yard. To complete the makeover, we refreshed the landscape beds by filling them with 20 mil Rundle rock and placed a beautiful 300 lb decorative Rundle boulder as a focal point.",
    ],
    scope: [
      { label: "Lawn replacement", text: "Removed the existing dead grass after accidental Killex application." },
      { label: "Soil preparation", text: "Brought in fresh topsoil to ensure a healthy base for the new lawn." },
      { label: "Sod installation", text: "Professionally laid high-quality Kentucky Bluegrass sod for an instant, lush green lawn." },
      { label: "Rock beds", text: "Filled the front landscape beds with beautiful 20 mil Rundle rock." },
      { label: "Decorative boulder", text: "Installed a striking 300 lb Rundle boulder as a centerpiece in the bed." },
    ],
    galleryTitle: "Project progress gallery",
    gallery: [
      { src: "/projects/cranston-makeover/front-view.jpg", alt: "Front view of the newly landscaped yard" },
      { src: "/projects/cranston-makeover/laying-sod.jpg", alt: "Workers laying new Kentucky Bluegrass sod" },
      { src: "/projects/cranston-makeover/rundle-bed.jpg", alt: "Close up of the new 20 mil Rundle rock bed and 300 lb boulder" },
    ],
    ctaTitle: "Ready to revitalize your yard?",
    ctaText: "Whether you need a complete lawn replacement or a fresh new look for your landscape beds, our team is ready to help.",
  },
  parkland: {
    path: "/parklandlandscaping",
    metaTitle: "Parkland Front Yard Overhaul | TERREOAK Landscaping",
    metaDescription: "See our complete front yard landscaping overhaul in Parkland, SE Calgary. River rock, custom borders, and hardy perennials.",
    title: "Parkland complete front yard overhaul",
    location: "Parkland, SE Calgary",
    cost: "$4,000",
    hero: "/images/softscaping-river-rock-hostas.jpg",
    heroAlt: "Parkland flower bed softscaping project with river rock and perennials",
    breakdown: [
      "We completely transformed this space from a fading wood garden with no decorative stone or plants into a stunning, complete rock garden that will look incredible for years to come.",
      "First, we started off by demoing all the old wood border and removing the dirt from the trench. From there, we established a rock-solid foundation by installing geogrid, base rock, and a concrete-set border. After digging holes for the plants, we installed a diverse mix of greenery including White Virginia Creeper, Coral Bells, Siberian Bugloss, Patriot Hosta, Ninebark Diablo, Lily of the Valley, and Elijah Bluegrass. To finish the space, we laid down 40mm river rock and placed a beautiful 70 lb Rundle boulder as a centerpiece.",
    ],
    scope: [
      { label: "Demolition & excavation", text: "Demoed all the old wood borders and removed dirt from the trench to prepare for the new installation." },
      { label: "Base & edging", text: "Installed geogrid, base rock, and a permanent concrete-set border for maximum durability." },
      { label: "Planting", text: "Dug holes and installed White Virginia Creeper, Coral Bells, Siberian Bugloss, Patriot Hosta, Ninebark Diablo, Lily of the Valley, and Elijah Bluegrass." },
      { label: "Decorative stone & boulders", text: "Finished the bed with 40mm river rock and a 70 lb Rundle boulder centerpiece." },
    ],
    galleryTitle: "Project gallery",
    gallery: [
      { src: "/images/parkland-jobsite-4.jpg", alt: "Empty dirt bed with old wooden border" },
      { src: "/images/parkland-jobsite-2.jpg", alt: "Worker planting and installing weed barrier and edging" },
      { src: "/images/parkland-jobsite-3.jpg", alt: "Plants laid out on the weed barrier before planting" },
      { src: "/images/parkland-jobsite-1.jpg", alt: "Finished rock bed with plants and river rock" },
    ],
    ctaTitle: "Ready to transform your space?",
    ctaText: "Whether you want a complete backyard overhaul or a custom patio, our team is ready to bring your vision to life.",
  },
};
