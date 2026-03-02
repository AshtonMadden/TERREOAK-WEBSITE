"use client";

import Link from "next/link";
import Image from "next/image";
import StatsCounter from "./residential-snow-removal/StatsCounter";
import { Section, ScrollReveal, Carousel } from "./components/UI";

const serviceCategories = [
  {
    title: "Landscape Construction & Irrigation",
    desc: "Hardscape construction, paving, stone work, and planting designed for stability and style.",
    image: "/images/construction.png",
    button: {
      label: "Get My Quote",
      href: "/contact",
    }
  },
  {
    title: "Seasonal Services",
    desc: "Precision property care, from spring and fall cleanups to irrigation blowouts and mulching.",
    image: "/images/seasonal.png",
  },
  {
    title: "Pergolas & Fencing",
    desc: "Premium custom wooden pergolas and horizontal privacy fencing designed for luxury outdoor living.",
    image: "/images/pergolas-fencing.png",
    button: {
      label: "Get My Quote",
      href: "/contact",
    }
  },
  {
    title: "Commercial Grounds Maintenance",
    desc: "Professional groundskeeping and 24/7 priority snow removal for commercial property managers.",
    image: "/images/commercial.png",
    button: {
      label: "Services",
      href: "/commercial-grounds-maintenance",
    }
  },
  {
    title: "Landscape Design",
    desc: "Custom residential build plans and 3D visualizations tailored to your property's potential.",
    image: "/images/design.png",
  },
  {
    title: "Residential Snow Removal",
    desc: "Reliable driveway and sidewalk snow removal with 1cm servicing and photo service logs.",
    image: "/images/snow.png",
    button: {
      label: "Sign Up",
      href: "/contact",
    }
  },
];


export default function HomePage() {
  return (
    <main className="bg-white text-black">
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-start border-b border-black/10 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Calgary-landscape-design-build-patio.JPG"
            alt="Calgary landscape design build and patio installation by TerreOak"
            fill
            priority
            className="object-cover"
          />
          {/* 40% Dark Overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-56 pb-24 md:pt-64 md:pb-40">
          <p className="text-[14px] font-bold tracking-widest text-[#01fa6d] uppercase drop-shadow-md">
            Calgary & Area
          </p>
          <h1 className="mt-4 text-[48px] md:text-[72px] font-black leading-[1.05] tracking-tight text-white drop-shadow-2xl uppercase">
            Calgary Landscape <br />
            <span className="text-[#01fa6d]">Design & Snow removal.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-[1rem] font-bold text-white/90 md:text-[1.2rem]">
            Commercial & Residential | Design • Build • Maintain
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#017a6d] px-12 py-[14px] text-[16px] font-extrabold text-white border-2 border-white/10 hover:opacity-90 transition-opacity"
            >
              Get My Quote
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm px-12 py-[14px] text-[16px] font-extrabold text-white border-2 border-white/40 hover:bg-white/20 transition-colors"
            >
              See Recent Projects
            </Link>
          </div>

          {/* TRUST GRID */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-lg border border-black/10 bg-[#f9fafb] p-[14px]">
              <h3 className="font-black text-[16px] text-black">Fully Insured</h3>
              <p className="mt-1.5 text-[14px] text-black/70 leading-relaxed">Comprehensive liability and WCB coverage for every project.</p>
            </div>

            <div className="rounded-lg border border-black/10 bg-[#f9fafb] p-[14px]">
              <div className="flex items-center gap-2">
                <span className="text-[16px] font-black text-black">5.0</span>
                <span className="font-black text-[16px] text-black">GMB Rating</span>
              </div>
              <p className="mt-1.5 text-[14px] text-black/70 leading-relaxed">Top-rated service backed by verified Calgary homeowner reviews.</p>
            </div>

            <div className="rounded-lg border border-black/10 bg-[#f9fafb] p-[14px]">
              <h3 className="font-black text-[16px] text-black">Built Right</h3>
              <p className="mt-1.5 text-[14px] text-black/70 leading-relaxed">Quality materials and methods designed to last in Calgary.</p>
            </div>
          </div>
        </div>
      </section>


      <StatsCounter
        backgroundColor="#017a6d"
        numberColor="#ffffff"
        labelColor="#ffffff"
        borderBottom="none"
        padding="48px 0"
        stats={[
          { end: 150, label: "Happy Clients", suffix: "+" },
          { end: 5, label: "Years Experience", suffix: "+" },
          { end: 2, label: "TerreOak Crews" }
        ]}
      />


      {/* SERVICES */}
      <Section
        kicker="About Us"
        title="TERREOAK Landscaping and Snow"
        titleClassName="text-[#017a6d]"
        py="pt-12 md:pt-16 pb-24"
      >
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-12">
          <div className="lg:w-1/2 space-y-6 text-[18px] text-black/80 leading-relaxed font-medium">
            <p>
              TERREOAK is a full-service landscape construction and property maintenance company serving Calgary. Our work is built around four core divisions: landscape design, landscape construction, commercial grounds maintenance, and residential seasonal services.
            </p>
            <p>
              From new-build sod and tree installations to hardscape construction and reliable snow removal, we deliver structured scheduling, professional systems, and results built for Alberta’s extreme seasons.
            </p>
            <p>
              We work with homeowners, builders, and commercial property managers who expect clean execution, clear communication, and long-term value.
            </p>
            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-lg bg-[#017a6d] px-8 py-4 text-[16px] font-black text-white hover:bg-[#01645a] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#017a6d]/20"
              >
                Read Our Story
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl border border-black/5 ring-1 ring-black/5">
              <Image
                src="/Calgary-landscape-design-build-patio.JPG"
                alt="TerreOak high-end landscape project in Calgary"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* DESIGN • BUILD • MAINTAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 border-t border-black/5 pt-12">
          {/* DESIGN */}
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-16 h-16 text-[#017a6d]">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="6" width="32" height="36" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M14 14H34M14 22H24M14 30H34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M30 22L40 12L42 14L32 24L30 22Z" fill="currentColor" />
                <path d="M39 11L43 15" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-black mb-2 uppercase tracking-tight">Design</h3>
              <p className="text-[15px] text-black/60 leading-relaxed font-medium">
                Custom residential build plans and 3D visualizations tailored to your property&apos;s potential and Calgary&apos;s unique landscape.
              </p>
            </div>
          </div>

          {/* BUILD */}
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-16 h-16 text-[#017a6d]">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Chassis */}
                <path d="M12 32H32V24H12V32Z" stroke="currentColor" strokeWidth="1.5" />
                {/* Tracks */}
                <path d="M10 32H34V38H10V32Z" rx="2" stroke="currentColor" strokeWidth="1.5" />
                {/* Cab */}
                <path d="M14 24L18 14H30L32 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                {/* Arm and bucket */}
                <path d="M32 22L42 22V32L38 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M42 32L44 34L40 38H36L38 32" fill="currentColor" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-black mb-2 uppercase tracking-tight">Build</h3>
              <p className="text-[15px] text-black/60 leading-relaxed font-medium">
                Expert construction of hardscapes, retaining walls, and softscapes using climate-ready materials designed for Alberta&apos;s seasons.
              </p>
            </div>
          </div>

          {/* MAINTAIN */}
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-16 h-16 text-[#017a6d]">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Snowflake half (Top/Left) */}
                <path d="M24 8V24M24 24L16 16M24 24L32 16M24 14L20 10M24 14L28 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M12 24H24M24 24L16 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />

                {/* Grass half (Bottom/Right) */}
                <path d="M24 24L34 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M24 24L30 36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M24 24L38 34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M8 42H40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-black mb-2 uppercase tracking-tight">Maintain</h3>
              <p className="text-[15px] text-black/60 leading-relaxed font-medium">
                Disciplined year-round property care, from precision grounds maintenance to reliable 24/7 priority snow removal.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((cat) => (
            <ScrollReveal
              key={cat.title}
              className="group rounded-xl border border-black/10 overflow-hidden bg-white hover:border-[#017a6d] transition-all transform hover:-translate-y-1 hover:shadow-xl flex flex-col"
            >
              {cat.image && (
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-black text-lg mb-2">{cat.title}</h3>
                <p className="text-sm text-black/60 leading-relaxed flex-1">{cat.desc}</p>
                {cat.button && (
                  <div className="mt-6">
                    <Link
                      href={cat.button.href}
                      className="inline-flex w-full items-center justify-center rounded-lg bg-[#017a6d] px-6 py-3 text-sm font-bold text-white hover:bg-[#01645a] transition-colors"
                    >
                      {cat.button.label}
                    </Link>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>


      {/* TESTIMONIALS */}
      <Section kicker="Success Stories" title="What Our Clients Say" titleClassName="text-[#017a6d]">
        <Carousel className="mt-12">
          {[
            {
              name: "Brian Williamson",
              role: "Walking Path Repair",
              text: "I was looking for a landscape company to repair a walking path. Ashton from Terreoak answered immediately and we booked a site visit. He provided several options, samples, and photos. We were pleased with the finished product and the way he handled the process and kept us informed throughout.",
            },
            {
              name: "Chris Leech",
              role: "Lawn Aeration",
              text: "Got these guys in to aerate my lawn for the first time. Could not be happier. Ashton and his crew did a tremendous job. They reply quickly and get the job booked and done fast. Always great to deal with a local business that actual replies.",
            },
            {
              name: "Linda Hayes Conradson",
              role: "Yard Cleanup Customer",
              text: "I recently used TerreOak for yard cleanup and was extremely happy with the quality of work and how courteous and considerate the onsite team was. Email communications were friendly, helpful and received quickly. Thank you to Ashton and his team. Would highly recommend!",
            },
            {
              name: "George Witherley",
              role: "Snow Removal",
              text: "The guys from Terreoak are amazing. They are clear on when they are coming with emails and show up every single time no matter how bad the snow fall is. They always go above and beyond clearing not only the walk way but my stairs as well. They are very polite and do an excellent job.",
            },
            {
              name: "J Walker",
              role: "Snow Removal Client",
              text: "I currently use TerreOak for snow removal services and have been extremely happy with their work. They always send notification of when they will be coming and are extremely prompt and courteous. Will definitely be using them again next season and would highly recommend.",
            },
            {
              name: "Susan Lewis",
              role: "Snow Removal",
              text: "TerreOak are doing snow removal for me this year. They send an email to advise when they are dispatching the crew each time it snows. They always get it done within the time they say. I'm very happy with their service and would highly recommend them.",
            },
            {
              name: "John Vaisman",
              role: "Spring Aeration & Clean Up",
              text: "I used Terreoak for spring aeration and clean up. They did a fantastic job and the lawn looked great all summer. Very professional and reasonably priced. Would recommend.",
            },
            {
              name: "Justin & Ashley Lamrock",
              role: "Power Rake and Aeration",
              text: "If great service and professional results is what you're after, Terreoak Landscaping is the place to go! Great pricing on power rake and aeration. Will book again next spring.",
            },
            {
              name: "Chad Coopman",
              role: "Lawn Care",
              text: "Hands down one of the best Lawn Care Companies I've dealt with. Fast, Quality workmanship, above and beyond my expectations. I highly recommend Ashton and TerreOak, thank you again.",
            },
            {
              name: "Ewa Tybura",
              role: "Landscaping",
              text: "It was a great experience that I had within this company rep Ashton. They were very fast, professional and they were paying attention to all details. I will definitely using their service again.",
            },
            {
              name: "Cheryl O'Brien",
              role: "Window Washing",
              text: "Great service from the team @ Terreoak!! Recently had them out to wash my windows, quick, professional service. My only complaint is that now that the outside of the windows are so clean I have to clean the inside 🤣. Thanks guys great job!!",
            },
            {
              name: "Shawn Gareau",
              role: "Landscaping",
              text: "I have relied on TerreOak for all of my landscaping needs and they always deliver a great job in a timely manner. I highly recommend them.",
            },
          ].map((review, i) => (
            <div key={i} className="min-w-full px-4 snap-center">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex justify-center gap-1 mb-8">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-6 h-6 text-[#017a6d]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[22px] md:text-[28px] font-medium italic leading-relaxed text-black/80">
                  &quot;{review.text}&quot;
                </p>
                <div className="mt-8">
                  <div className="font-black text-lg">{review.name}</div>
                  <div className="text-sm text-black/40 uppercase tracking-widest font-bold">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </Section>

      {/* GALLERY */}
      <Section kicker="Gallery" title="Our Work" titleClassName="text-[#017a6d]">
        <p className="max-w-3xl text-[18px] text-black/70 leading-relaxed mb-12">
          Explore our portfolio of high-end residential landscaping and commercial grounds maintenance projects across Calgary.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <ScrollReveal
              key={i}
              className="relative aspect-[4/3] rounded-lg overflow-hidden group border border-black/10"
            >
              <Image
                src={`/images/gallery/project-${i}.png`}
                alt={`Gallery project ${i}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </ScrollReveal>
          ))}
        </div>
        <div className="mt-12 text-center md:text-left">
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center rounded-lg border-2 border-[#017a6d] px-8 py-3 text-sm font-bold text-[#017a6d] hover:bg-[#017a6d] hover:text-white transition-all transform hover:-translate-y-1"
          >
            VIEW FULL PORTFOLIO
          </Link>
        </div>
      </Section>

      {/* BLOG */}
      <Section kicker="Stay Informed" title="Our Blog">
        <div className="max-w-3xl">
          <p className="text-lg text-black/80 leading-relaxed mb-8">
            Stay updated with the latest landscaping tips, seasonal advice, and project highlights from the TERREOAK team.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-[#017a6d] text-white font-bold rounded-lg hover:bg-[#01645a] transition-colors"
          >
            Read Our Blog
          </Link>
        </div>
      </Section>

      {/* FINAL CTA */}

    </main>
  );
}
