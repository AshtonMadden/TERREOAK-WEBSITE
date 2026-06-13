
"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Script from "next/script";

import { Section, ScrollReveal, Carousel } from "./components/UI";
import OurBlogSection from "./components/OurBlogSection";
import PremiumHero from "./components/PremiumHero";
import TrustBar from "./components/TrustBar";
import PremiumStatsSection from "./components/PremiumStatsSection";
import InstagramEmbed from "./components/InstagramEmbed";
import dynamic from "next/dynamic";

const TestimonialSection = dynamic(() => import("./components/TestimonialSection"), {
  loading: () => <div className="py-24 animate-pulse bg-gray-50 rounded-3xl" />,
  ssr: true
});

const JobberLeadForm = dynamic(() => import("./components/JobberLeadForm"), {
  ssr: false
});

const serviceCategories = [
  {
    title: "Landscape Construction & Irrigation",
    desc: "Hardscape construction, paving, stone work, and planting designed for stability and style.",
    image: "/Landscape web page pics/Techo-Bloc-pavers-river-rock.JPG",
  },
  {
    title: "Seasonal Services",
    desc: "Precision property care, from spring and fall cleanups to irrigation blowouts and mulching.",
    image: "/spring-cleanup-pics/Leaf-Cleanup-near-me.jpg",
  },
  {
    title: "Pergolas & Fencing",
    desc: "Premium custom wooden pergolas and horizontal privacy fencing designed for luxury outdoor living.",
    image: "/images/pergolas-fencing-new.jpg",
  },
  {
    title: "Commercial Grounds Maintenance",
    desc: "Professional groundskeeping and 24/7 priority snow removal for commercial property managers.",
    image: "/images/commercial.png",
  },
  {
    title: "Residential Snow Removal",
    desc: "Reliable driveway and sidewalk snow removal with 1cm servicing and photo service logs.",
    image: "/Snow Page web pics/TERREOAK-Snow-Picket.JPG",
  },
  {
    title: "Landscape Design",
    desc: "Professional 3D landscape design and conceptual planning for your outdoor space.",
    image: "/images/design.png",
  },
];
const allImages = [
  // Landscaping
  { src: "/Landscape web page pics/Calgary-Concrete-pour.JPG", alt: "Custom exposed aggregate concrete pour in Calgary" },
  { src: "/Landscape web page pics/Calgary-hardscaping.JPG", alt: "Premium Calgary hardscaping and backyard transformation" },
  { src: "/Landscape web page pics/Exposed-aggregate-concrete.JPG", alt: "Exposed aggregate concrete pathway installation" },
  { src: "/Landscape web page pics/Finished-hardscape-project.JPG", alt: "Finished high-end hardscape project in South Calgary" },
  { src: "/Landscape web page pics/Hardscape-path-install.JPG", alt: "Custom paving stone hardscape path installation" },
  { src: "/Landscape web page pics/Land-clearing-new-build.JPG", alt: "Land clearing and grading for Calgary new build landscaping" },
  { src: "/Landscape web page pics/Techo-Bloc-paver-pathway.JPG", alt: "Techo-Bloc paver pathway construction" },
  { src: "/Landscape web page pics/Techo-Bloc-pavers-river-rock.JPG", alt: "Techo-Bloc pavers with decorative river rock garden bed" },
  { src: "/Landscape web page pics/Techo-bloc-bin-pad.JPG", alt: "Techo-Bloc garbage bin pad installation" },
  { src: "/Landscape web page pics/base-prep-paverpath.JPG", alt: "Engineered base preparation for custom paver path" },
  { src: "/Landscape web page pics/lawn-relevel-calgary.JPG", alt: "Professional lawn releveling and sod installation Calgary" },
  { src: "/Landscape web page pics/rock-bed-refresh.JPG", alt: "Landscape rock bed refresh and softscaping" },
  // Spring
  { src: "/spring-cleanup-pics/Calgary-Core-Aeration.JPG", alt: "Professional lawn core aeration service in Calgary" },
  { src: "/spring-cleanup-pics/Calgary-Leaf-Cleanup.JPG", alt: "Comprehensive residential leaf cleanup Calgary" },
  { src: "/spring-cleanup-pics/Copperfield-leaf-cleanup.JPG", alt: "Spring property cleanup in Copperfield Calgary" },
  { src: "/spring-cleanup-pics/Leaf-Cleanup-near-me.jpg", alt: "Local leaf cleanup and yard maintenance service" },
  { src: "/spring-cleanup-pics/Leaf-removal-Calgary.JPG", alt: "Fall leaf removal and property maintenance Calgary" },
  { src: "/spring-cleanup-pics/Power-raking-services.JPG", alt: "Lawn power raking and dethatching services" },
  // Snow
  { src: "/Snow Page web pics/Ice-removal-after.JPG", alt: "Clear driveway after professional ice removal" },
  { src: "/Snow Page web pics/Ice-removal-before.JPG", alt: "Driveway before ice removal and snow clearing" },
  { src: "/Snow Page web pics/Residential-snow-removal.JPG", alt: "Reliable residential snow removal service Calgary" },
  { src: "/Snow Page web pics/South-Calgary-Snow-Removal.JPG", alt: "South Calgary snow removal route service" },
  { src: "/Snow Page web pics/TERREOAK-Snow-Picket.JPG", alt: "TerreOak snow removal service marker picket" },
  { src: "/residential-snow-removalJPG.JPG", alt: "Professional residential driveway snow removal Calgary" },
];



export default function HomePage() {
  return (
    <main className="bg-white text-black">
      <PremiumHero
        title={<>CALGARY LANDSCAPE CONSTRUCTION <br /><span className="text-[#01fa6d]">WHERE THE SUN MEETS SOIL</span></>}
        description="Premium landscape construction and year-round property maintenance for Calgary's residential and commercial properties."
        backgroundVideo="/landscaping-mahogany.MOV"
        badgeLabel="Calgary & Area"
        ctaText="SEE RECENT PROJECTS"
        ctaHref="/projects"
      />

      <TrustBar />

      {/* FEATURED PROJECTS */}
      <Section
        kicker="Portfolio"
        title="FEATURED PROJECTS"
        titleClassName="text-[#017a6d]"
        wrapperClassName="bg-gray-50 border-y border-black/5"
      >
        <div className="max-w-6xl mx-auto flex flex-col gap-24">
            {[
              {
                id: 1,
                title: "Custom Landscape Design & Build",
                location: "Calgary, AB",
                budget: "$5,000",
                desc: "Explore one of our recent high-end residential landscape construction projects. From initial 3D conceptual design to final construction, see how we transformed this outdoor space.",
                img: "/Landscape web page pics/Finished-hardscape-project.JPG",
                link: "/mckenzielakelandscaping"
              },
              {
                id: 2,
                title: "Premium Hardscape Installation",
                location: "Calgary, AB",
                budget: "$10,000",
                desc: "A stunning transformation featuring Techo-Bloc paving stones, custom retaining walls, and a fully redesigned outdoor living area built to withstand Calgary's climate.",
                img: "/Landscape web page pics/Techo-Bloc-pavers-river-rock.JPG",
                link: "/projects/featured-project-2"
              }
            ].map((project, index) => (
                <div key={project.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image Side */}
                    <div className={`relative overflow-hidden rounded-3xl aspect-[4/3] shadow-xl border border-black/5 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                        <Image
                            src={project.img}
                            alt={project.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        
                        {/* Info Bar */}
                        <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-5 grid grid-cols-2 sm:grid-cols-3 gap-4">
                            <div className="col-span-2 sm:col-span-1">
                                <div className="text-white/80 text-[10px] uppercase tracking-[0.2em] font-bold mb-1">Project Scope</div>
                                <div className="text-white font-black text-base md:text-lg leading-tight">{project.title}</div>
                            </div>
                            <div className="col-span-1">
                                <div className="text-white/80 text-[10px] uppercase tracking-[0.2em] font-bold mb-1">Location</div>
                                <div className="text-white font-black text-base md:text-lg leading-tight">{project.location.split(',')[0]}</div>
                            </div>
                            <div className="col-span-1 text-right sm:text-left">
                                <div className="text-white/80 text-[10px] uppercase tracking-[0.2em] font-bold mb-1">Investment</div>
                                <div className="text-white font-black text-base md:text-lg leading-tight text-[#01fa6d]">{project.budget}</div>
                            </div>
                        </div>
                    </div>

                    {/* Text Summary Side */}
                    <div className={`text-lg text-black/80 leading-relaxed font-medium ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                        <h3 className="text-3xl font-black text-black mb-6 uppercase">{project.title}</h3>
                        <p className="mb-6">{project.desc}</p>
                        
                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <Link
                                href={project.link}
                                className="inline-flex items-center justify-center rounded-lg bg-black px-8 py-3 text-sm font-black text-white hover:bg-black/80 transition-all transform hover:-translate-y-1 shadow-md cursor-pointer uppercase tracking-wider"
                            >
                                Read Full Project
                            </Link>
                            <button 
                                onClick={() => document.getElementById('seasonal-form')?.scrollIntoView({ behavior: 'smooth' })}
                                className="inline-flex items-center justify-center rounded-lg bg-[#01fa6d] px-8 py-3 text-sm font-black text-black hover:opacity-90 transition-all transform hover:-translate-y-1 shadow-md cursor-pointer uppercase tracking-wider"
                            >
                                Get a Similar Quote
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </Section>

      <PremiumStatsSection />

      {/* LATEST FROM INSTAGRAM */}
      <Section
        kicker="Follow Us"
        title="LATEST PROJECT VIDEOS"
        titleClassName="text-[#017a6d]"
        wrapperClassName="bg-white border-y border-black/5"
      >
        <div className="flex flex-col items-center">
            <p className="text-lg font-medium text-black/70 mb-12 text-center max-w-2xl">
                Check out our latest landscape transformations and snow removal updates over on Instagram. We post regular jobsite walk-throughs and before/afters!
            </p>
            <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar md:grid md:grid-cols-3 gap-6 lg:gap-8 w-full max-w-6xl pb-4 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0">
                {/* Placeholders for 3 recent Instagram videos/reels. The user can swap these URLs out with their own. */}
                <div className="flex-none w-[85%] snap-center md:w-auto">
                    <InstagramEmbed url="https://www.instagram.com/p/DZYJ9hey3Wz/" />
                </div>
                <div className="flex-none w-[85%] snap-center md:w-auto">
                    <InstagramEmbed url="https://www.instagram.com/p/DZbTO0OTIKM/" />
                </div>
                <div className="flex-none w-[85%] snap-center md:w-auto">
                    <InstagramEmbed url="https://www.instagram.com/p/DZIwwSby7ED/" />
                </div>
            </div>
            <div className="mt-16">
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-black hover:bg-black/80 transition-colors uppercase tracking-widest text-sm shadow-xl hover:-translate-y-1">
                    Follow us on Instagram <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
            </div>
        </div>
      </Section>

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
              TERREOAK is a full-service landscape construction and property maintenance company serving Calgary. Our work is built around three core divisions: landscape construction, commercial grounds maintenance, and residential seasonal services.
            </p>
            <p>
              From new-build sod and <Link href="/softscapes" className="text-[#017a6d] font-bold hover:underline transition-colors">softscape installation Calgary</Link> projects to hardscape construction and reliable snow removal, we deliver structured scheduling, professional systems, and results built for Alberta’s extreme seasons.
            </p>
            <p>
              We work with homeowners, builders, and commercial property managers who expect clean execution, clear communication, and long-term value.
            </p>
            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-lg bg-[#01fa6d] px-8 py-4 text-[16px] font-black text-black hover:opacity-90 transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#01fa6d]/20"
              >
                READ OUR STORY
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl border border-black/5 ring-1 ring-black/5">
              <Image
                src="/Calgary-landscape-design-build-patio.JPG"
                alt="TERREOAK high-end landscape construction project in Calgary"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* FOUNDER SPOTLIGHT */}
        <div className="flex flex-col md:flex-row items-stretch bg-white rounded-3xl shadow-xl border border-black/5 overflow-hidden group mb-20">
          <div className="md:w-2/5 relative min-h-[350px] md:min-h-full">
            <Image
              src="/images/Ashton-Madden-Cowboy.jpg"
              alt="Ashton Madden - Founder & Director"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <div className="md:w-3/5 p-8 md:p-12 relative flex flex-col justify-center">
            <h3 className="text-3xl font-black text-[#017a6d] uppercase tracking-tight mb-4 text-left">Ashton Madden</h3>
            <div className="space-y-4">
              <p className="text-lg text-black/70 leading-relaxed font-medium">
                My goal with TERREOAK is simple: build a company rooted in strong values, a great team culture, and a customer experience people can trust.
              </p>
            </div>

            {/* SIGNATURE AREA */}
            <div className="mt-8 flex justify-end items-end">
              <div className="text-right w-full flex flex-col items-end">
                <div className="relative h-20 w-[200px] md:h-[136px] md:w-[435px] mb-2">
                  <Image
                    src="/Ashton_Signature_.jpg"
                    alt="Ashton Madden Signature"
                    fill
                    sizes="(max-width: 768px) 200px, 435px"
                    className="object-contain object-right"
                  />
                </div>
                <span className="text-[10px] font-bold text-black/30 uppercase tracking-[0.2em]">Founder & Director</span>
              </div>
            </div>
          </div>
        </div>

        {/* DESIGN • BUILD • MAINTAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 border-t border-black/5 pt-12">
          {/* DESIGN */}
          <div>
            <h3 className="text-2xl md:text-4xl lg:text-[42px] font-black mb-4 text-[#017a6d] uppercase tracking-tight">Design</h3>
            <p className="text-[15px] text-black/60 leading-relaxed font-medium">
              Professional on-site consultations and detailed 3D conceptual designs to visualize your space before we break ground.
            </p>
          </div>

          {/* BUILD */}
          <div>
            <h3 className="text-2xl md:text-4xl lg:text-[42px] font-black mb-4 text-[#017a6d] uppercase tracking-tight">Build</h3>
            <p className="text-[15px] text-black/60 leading-relaxed font-medium">
              Expert construction of hardscapes, retaining walls, and softscapes using climate-ready materials designed for Alberta&apos;s seasons.
            </p>
          </div>

          {/* MAINTAIN */}
          <div>
            <h3 className="text-2xl md:text-4xl lg:text-[42px] font-black mb-4 text-[#017a6d] uppercase tracking-tight">Maintain</h3>
            <p className="text-[15px] text-black/60 leading-relaxed font-medium">
              Disciplined year-round property care, from precision grounds maintenance to reliable 24/7 priority snow removal.
            </p>
          </div>
        </div>


      </Section>



      {/* JOBBER LEAD FORM */}
      <Section id="home-form" title="REQUEST AN ESTIMATE" titleClassName="text-[#017a6d]">
        <div className="max-w-6xl mx-auto w-full">
          <JobberLeadForm
            clienthubId="41b3399e-3795-43d8-afe2-e6c38c1b3e6e-2235504"
            formUrl="https://clienthub.getjobber.com/client_hubs/41b3399e-3795-43d8-afe2-e6c38c1b3e6e/public/work_request/embedded_work_request_form?form_id=2235504"
          />
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <TestimonialSection
        testimonials={[
          {
            name: "Brian Williamson",
            role: "Walking Path Repair",
            text: "I was looking for a landscape company to repair a walking path. Ashton from TERREOAK answered immediately and we booked a site visit. He provided several options, samples, and photos. We were pleased with the finished product and the way he handled the process and kept us informed throughout.",
          },
          {
            name: "Chris Leech",
            role: "Lawn Aeration",
            text: "Got these guys in to aerate my lawn for the first time. Could not be happier. Ashton and his crew did a tremendous job. They reply quickly and get the job booked and done fast. Always great to deal with a local business that actual replies.",
          },
          {
            name: "Linda Hayes Conradson",
            role: "Yard Cleanup Customer",
            text: "I recently used TERREOAK for yard cleanup and was extremely happy with the quality of work and how courteous and considerate the onsite team was. Email communications were friendly, helpful and received quickly. Thank you to Ashton and his team. Would highly recommend!",
          },
          {
            name: "George Witherley",
            role: "Snow Removal",
            text: "The guys from TERREOAK are amazing. They are clear on when they are coming with emails and show up every single time no matter how bad the snow fall is. They always go above and beyond clearing not only the walk way but my stairs as well. They are very polite and do an excellent job.",
          },
          {
            name: "J Walker",
            role: "Snow Removal Client",
            text: "I currently use TERREOAK for snow removal services and have been extremely happy with their work. They always send notification of when they will be coming and are extremely prompt and courteous. Will definitely be using them again next season and would highly recommend.",
          },
          {
            name: "Susan Lewis",
            role: "Snow Removal",
            text: "TERREOAK are doing snow removal for me this year. They send an email to advise when they are dispatching the crew each time it snows. They always get it done within the time they say. I'm very happy with their service and would highly recommend them.",
          },
          {
            name: "John Vaisman",
            role: "Spring Aeration & Clean Up",
            text: "I used TERREOAK for spring aeration and clean up. They did a fantastic job and the lawn looked great all summer. Very professional and reasonably priced. Would recommend.",
          },
          {
            name: "Justin & Ashley Lamrock",
            role: "Power Rake and Aeration",
            text: "If great service and professional results is what you're after, TERREOAK Landscaping is the place to go! Great pricing on power rake and aeration. Will book again next spring.",
          },
          {
            name: "Chad Coopman",
            role: "Lawn Care",
            text: "Hands down one of the best Lawn Care Companies I've dealt with. Fast, Quality workmanship, above and beyond my expectations. I highly recommend Ashton and TERREOAK, thank you again.",
          },
          {
            name: "Ewa Tybura",
            role: "Landscaping",
            text: "It was a great experience that I had within this company rep Ashton. They were very fast, professional and they were paying attention to all details. I will definitely using their service again.",
          },
          {
            name: "Cheryl O'Brien",
            role: "Window Washing",
            text: "Great service from the team @ TERREOAK!! Recently had them out to wash my windows, quick, professional service. My only complaint is that now that the outside of the windows are so clean I have to clean the inside 🤣. Thanks guys great job!!",
          },
          {
            name: "Shawn Gareau",
            role: "Landscaping",
            text: "I have relied on TERREOAK for all of my landscaping needs and they always deliver a great job in a timely manner. I highly recommend them.",
          },
        ]}
      />

      {/* GALLERY */}
      <Section
        kicker="Projects"
        title="OUR WORK"
        titleClassName="text-[#017a6d]"
        wrapperClassName="bg-white"
        hasBorder={true}
      >
        <Carousel className="mt-12">
          {allImages.map((img, i) => (
            <div key={i} className="min-w-[85vw] md:min-w-[400px] px-3 snap-center">
              <ScrollReveal className="relative aspect-[4/3] rounded-lg overflow-hidden group border border-black/5 shadow-md">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 350px, 450px"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              </ScrollReveal>
            </div>
          ))}
        </Carousel>
        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-lg border-2 border-[#017a6d] px-8 py-3 text-sm font-bold text-[#017a6d] hover:bg-[#017a6d] hover:text-white transition-all shadow-md hover:-translate-y-1"
          >
            VIEW ALL PROJECTS
          </Link>
        </div>
      </Section>

      {/* BLOG */}
      <OurBlogSection />
    </main>
  );
}
