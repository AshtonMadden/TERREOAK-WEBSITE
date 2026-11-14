// Content for the softscapes page.

const rawProjects = [
  {
    id: 1,
    title: "Complete Front Yard Overhaul",
    scope: "Planting & Flower Bed",
    location: "Parkland",
    budget: "$4,000",
    desc1:
      "We completely transformed this space from a fading wood garden with no decorative stone or plants into a stunning, complete rock garden that will look incredible for years to come.",
    desc2:
      "First, we demoed the old wood border and established a rock-solid foundation by installing geogrid, base rock, and a permanent concrete-set border.",
    desc3:
      "After planting a diverse mix of greenery, we finished the space with 40mm river rock and a beautiful 70 lb Rundle boulder as a centerpiece.",
    img: "/images/softscaping-river-rock-hostas.jpg",
    link: "/parklandlandscaping",
  },
  {
    id: 2,
    title: "Front Yard Landscape Makeover",
    scope: "Sod & Rock Bed",
    location: "Cranston",
    budget: "$3,150",
    desc1:
      "Originally, this client reached out to us after accidentally spraying his entire front yard with Killex, which unfortunately killed off the entire lawn. We stepped in to completely revitalize the space, removing the dead turf and starting fresh to give the home its curb appeal back.",
    desc2:
      "We brought in new, nutrient-rich soil to establish a healthy foundation and installed premium Kentucky Bluegrass sod across the entire front yard.",
    desc3:
      "To complete the makeover, we refreshed the landscape beds by filling them with 20 mil Rundle rock and placed a beautiful 300 lb decorative Rundle boulder as a focal point.",
    img: "/projects/cranston-makeover/hero-aerial.jpg",
    link: "/projects/cranston-landscape-makeover",
  },
];

export const projects = rawProjects.map((p) => ({
  id: p.id,
  title: p.title,
  location: p.location,
  budget: p.budget,
  desc: [p.desc1, p.desc2, p.desc3].filter(Boolean).join(" "),
  img: p.img,
  link: p.link,
}));

export const services = [
  {
    title: "Sod Installation",
    desc: "A fresh lawn starts with proper soil prep. We grade the area, bring in quality topsoil where needed, and lay 100% Kentucky Bluegrass sod that is sourced locally and suited to Calgary’s cold winters and dry summers. Whether you are moving into a new build or replacing a tired lawn, we handle the full install and walk you through watering after the job is done.",
  },
  {
    title: "Garden Bed Installation",
    desc: "A well-built garden bed does more than look good. It controls weeds, holds moisture, and gives your plants the best chance to come back year after year. We install beds with the right soil mix, clean edging, and plant selections that work in Calgary’s growing zone.",
  },
  {
    title: "Tree and Shrub Planting",
    desc: "Trees and shrubs add structure, privacy, and shade that grows in value every year. We select species that are proven to handle Alberta winters and plant them at the right depth with proper soil so they establish quickly and do not heave or die off in year one.",
  },
  {
    title: "Perennial and Annual Planting",
    desc: "Perennials come back every spring. Annuals fill in the gaps with colour all season. We design planting combinations that look intentional and work for your specific sun exposure and soil conditions in Calgary.",
  },
  {
    title: "Mulch and Decorative Rock",
    desc: "Fresh mulch holds moisture, keeps weeds down, and makes any yard look clean and finished. Decorative rock and river wash are low maintenance options that work well in high-traffic areas or yards that need to look sharp without much upkeep. We supply and install both.",
  },
  {
    title: "Topsoil and Soil Prep",
    desc: "Everything else depends on this. Calgary soil is often compacted clay that drains poorly and stunts root growth. We bring in quality topsoil and amend the existing ground so your sod, plants, and beds have a real foundation to grow from.",
  },
];

export const steps = [
  {
    step: 1,
    title: "Free Site Visit",
    desc: "We come out, look at your yard, and talk through what you want. No charge, no pressure.",
  },
  {
    step: 2,
    title: "Written Quote",
    desc: "You get a clear quote through Jobber with everything itemized. Approve it digitally and we get you on the schedule.",
  },
  {
    step: 3,
    title: "Installation",
    desc: "Our crew shows up on time and works clean. We photo document the job from start to finish so you have a record of exactly what was done.",
  },
  {
    step: 4,
    title: "Walkthrough",
    desc: "Before we leave, we walk the property with you and cover any aftercare you need to know, like watering schedules for new sod or mulch depth maintenance.",
  },
];

export const reviews = [
  {
    name: "Brian Williamson",
    role: "Walking Path Repair & Landscaping",
    text: "I was looking for a landscape company to repair a walking path. Ashton from TERREOAK answered immediately and we booked a site visit. He provided several options, samples, and photos. We were pleased with the finished product and the way he handled the process and kept us informed throughout.",
  },
  {
    name: "Linda Hayes Conradson",
    role: "Yard Cleanup & Softscaping",
    text: "I recently used TERREOAK for yard cleanup and was extremely happy with the quality of work and how courteous and considerate the onsite team was. Email communications were friendly, helpful and received quickly. Thank you to Ashton and his team. Would highly recommend!",
  },
  {
    name: "Chris Leech",
    role: "Lawn Care & Aeration",
    text: "Got these guys in to aerate my lawn for the first time. Could not be happier. Ashton and his crew did a tremendous job. They reply quickly and get the job booked and done fast. Always great to deal with a local business that actually replies.",
  },
];

export const faqs = [
  {
    q: "What time of year is best for softscaping in Calgary?",
    a: "Spring and early fall are ideal for most planting and sod installation. Cooler temperatures help roots establish before the stress of summer heat or winter freeze. We work through the growing season and can advise on timing based on what you are looking to install.",
  },
  {
    q: "What kind of sod do you use?",
    a: "We use Kentucky Bluegrass, which is the most common and reliable cool-season turf grass for Calgary. It handles cold winters, recovers well from foot traffic, and gives you a dense, green lawn when properly cared for.",
  },
  {
    q: "Do you do the soil prep or is that extra?",
    a: "Soil prep is part of every install. We do not skip it. Skipping prep is how sod fails. We grade the area, remove debris, bring in topsoil where needed, and make sure drainage is correct before anything goes down.",
  },
  {
    q: "Do you service Okotoks, Airdrie, Cochrane, and Chestermere?",
    a: "Yes. We serve all of Calgary and the surrounding communities including Okotoks, Airdrie, Cochrane, and Chestermere.",
  },
  {
    q: "Can I combine softscaping with fencing or other work?",
    a: "Absolutely. A lot of our clients combine sod installation or garden beds with a new fence install. We coordinate the work so trades are not tripping over each other and the yard gets done in one clean project.",
  },
];

export const mulches = [
  {
    title: "Foothills Premium Bark",
    desc: "A natural dark brown look that blends perfectly into almost any yard design.",
  },
  {
    title: "Montane Black Mulch",
    desc: "A deep, dyed black mulch that creates high contrast against bright green shrubs and perennials.",
  },
  {
    title: "Western Red Cedar",
    desc: "A natural reddish tint that acts as a deterrent for many common yard insects.",
  },
];

export const instagramPosts = [
  "https://www.instagram.com/p/DZYJ9hey3Wz/",
  "https://www.instagram.com/p/DZbTO0OTIKM/",
  "https://www.instagram.com/p/DaOSi4dSUg5/",
];

export const jobberForm = {
  clienthubId: "41b3399e-3795-43d8-afe2-e6c38c1b3e6e-2235504",
  formUrl:
    "https://clienthub.getjobber.com/client_hubs/41b3399e-3795-43d8-afe2-e6c38c1b3e6e/public/work_request/embedded_work_request_form?form_id=2235504",
};
