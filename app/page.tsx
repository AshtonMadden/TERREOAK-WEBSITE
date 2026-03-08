
"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Script from "next/script";
import StatsCounter from "./residential-snow-removal/StatsCounter";
import { Section, ScrollReveal, Carousel } from "./components/UI";
import OurBlogSection from "./components/OurBlogSection";
import GoogleReviewBadge from "./components/GoogleReviewBadge";
import dynamic from "next/dynamic";

const TestimonialSection = dynamic(() => import("./components/TestimonialSection"), {
  loading: () => <div className="py-24 animate-pulse bg-gray-50 rounded-3xl" />,
  ssr: true
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
  { src: "/Landscape web page pics/Calgary-Concrete-pour.JPG", alt: "Calgary Concrete Pour" },
  { src: "/Landscape web page pics/Calgary-hardscaping.JPG", alt: "Calgary Hardscaping" },
  { src: "/Landscape web page pics/Exposed-aggregate-concrete.JPG", alt: "Exposed Aggregate Concrete" },
  { src: "/Landscape web page pics/Finished-hardscape-project.JPG", alt: "Finished Hardscape Project" },
  { src: "/Landscape web page pics/Hardscape-path-install.JPG", alt: "Hardscape Path Install" },
  { src: "/Landscape web page pics/Land-clearing-new-build.JPG", alt: "Land Clearing New Build" },
  { src: "/Landscape web page pics/Techo-Bloc-paver-pathway.JPG", alt: "Techo-Bloc Paver Pathway" },
  { src: "/Landscape web page pics/Techo-Bloc-pavers-river-rock.JPG", alt: "Techo-Bloc Pavers and River Rock" },
  { src: "/Landscape web page pics/Techo-bloc-bin-pad.JPG", alt: "Techo-Bloc Bin Pad" },
  { src: "/Landscape web page pics/base-prep-paverpath.JPG", alt: "Base Preparation for Paver Path" },
  { src: "/Landscape web page pics/lawn-relevel-calgary.JPG", alt: "Lawn Relevel Calgary" },
  { src: "/Landscape web page pics/rock-bed-refresh.JPG", alt: "Rock Bed Refresh" },
  // Spring
  { src: "/spring-cleanup-pics/Calgary-Core-Aeration.JPG", alt: "Calgary Core Aeration" },
  { src: "/spring-cleanup-pics/Calgary-Leaf-Cleanup.JPG", alt: "Calgary Leaf Cleanup" },
  { src: "/spring-cleanup-pics/Copperfield-leaf-cleanup.JPG", alt: "Copperfield Leaf Cleanup" },
  { src: "/spring-cleanup-pics/Leaf-Cleanup-near-me.jpg", alt: "Leaf Cleanup Near Me" },
  { src: "/spring-cleanup-pics/Leaf-removal-Calgary.JPG", alt: "Leaf Removal Calgary" },
  { src: "/spring-cleanup-pics/Power-raking-services.JPG", alt: "Power Raking Services" },
  // Snow
  { src: "/Snow Page web pics/Ice-removal-after.JPG", alt: "Ice Removal After" },
  { src: "/Snow Page web pics/Ice-removal-before.JPG", alt: "Ice Removal Before" },
  { src: "/Snow Page web pics/Residential-snow-removal.JPG", alt: "Residential Snow Removal" },
  { src: "/Snow Page web pics/South-Calgary-Snow-Removal.JPG", alt: "South Calgary Snow Removal" },
  { src: "/Snow Page web pics/TERREOAK-Snow-Picket.JPG", alt: "TERREOAK Snow Picket" },
  { src: "/residential-snow-removalJPG.JPG", alt: "Residential Snow Removal Calgary" },
];



export default function HomePage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Autoplay failed:", error);
      });
    }
  }, []);

  return (
    <main className="bg-white text-black">
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-start border-b border-black/10 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/gallery/project-3.png"
            alt="Calgary Landscape Construction"
            fill
            priority
            className="object-cover"
          />
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/images/gallery/project-3.png"
            className="absolute min-w-full min-h-full object-cover transform-gpu will-change-transform z-10"
          >
            <source src="/landscaping-mahogany.MOV" type="video/quicktime" />
            <source src="/landscaping-mahogany.MOV" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* 40% Dark Overlay */}
          <div className="absolute inset-0 bg-black/40 z-20" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-48 pb-16 md:pt-56 md:pb-24 lg:pt-60 lg:pb-32 text-left">
          <p className="text-[14px] font-bold tracking-widest text-[#01fa6d] uppercase drop-shadow-md">
            Calgary & Area
          </p>


          <h1 className="mt-4 text-[42px] md:text-[56px] lg:text-[64px] font-black leading-[1.1] tracking-tight text-white drop-shadow-2xl max-w-4xl uppercase">
            Calgary Landscape <br />
            <span className="text-[#01fa6d]">Construction & Snow Removal.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-[1rem] font-bold text-white/90 md:text-[1.2rem]">
            Commercial & Residential | Design • Build • Maintain
          </p>

          <div className="mt-10 flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="flex flex-wrap gap-4">
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-full bg-[#01fa6d] px-12 py-[16px] text-[16px] font-extrabold text-black border-2 border-white/10 hover:bg-white transition-all transform hover:-translate-y-1 shadow-xl shadow-[#01fa6d]/20"
              >
                SEE RECENT PROJECTS
              </Link>
              <a
                href="tel:+15877077648"
                className="inline-flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm px-12 py-[16px] text-[16px] font-extrabold text-white border-2 border-white/40 hover:bg-white/20 transition-colors"
              >
                CALL US
              </a>

              {/* SOCIAL PROOF BADGE */}
              <GoogleReviewBadge />
            </div>
          </div>
        </div>
      </section>


      <StatsCounter
        backgroundColor="#01fa6d"
        numberColor="#000000"
        labelColor="#000000"
        borderBottom="none"
        padding="48px 0"
        stats={[
          { end: 150, label: "Happy Clients", suffix: "+" },
          { end: 5, label: "Years Experience", suffix: "+" },
          { end: 2, label: "TERREOAK Crews" }
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
              TERREOAK is a full-service landscape construction and property maintenance company serving Calgary. Our work is built around three core divisions: landscape construction, commercial grounds maintenance, and residential seasonal services.
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
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
              <Image
                src="/images/ASHTON-MADDEN-HEADSHOT.jpg"
                alt="Ashton Madden - Founder & Director"
                fill
                sizes="(max-width: 768px) 256px, 320px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:w-2/3 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-black/5 relative overflow-hidden group">
            <h3 className="text-3xl font-black text-[#017a6d] uppercase tracking-tight mb-4">Ashton Madden</h3>
            <div className="space-y-4">
              <p className="text-lg text-black/70 leading-relaxed font-medium">
                My goal with TERREOAK is simple: build a company rooted in strong values, a great team culture, and a customer experience people can trust.
              </p>
            </div>

            {/* SIGNATURE AREA */}
            <div className="mt-8 flex justify-center md:justify-end items-end">
              <div className="text-center md:text-right w-full flex flex-col items-center md:items-end">
                <div className="relative h-24 w-full max-w-[280px] md:h-[136px] md:w-[435px] mb-2">
                  <Image
                    src="/Ashton_Signature_.jpg"
                    alt="Ashton Madden Signature"
                    fill
                    sizes="(max-width: 768px) 280px, 435px"
                    className="object-contain object-center md:object-right"
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

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((cat) => (
            <div
              key={cat.title}
              className="group rounded-xl border border-black/10 overflow-hidden bg-white hover:border-[#017a6d] transition-all flex flex-col"
            >
              {cat.image && (
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-black text-lg mb-2 uppercase tracking-tight">{cat.title}</h3>
                <p className="text-sm text-black/60 leading-relaxed flex-1">{cat.desc}</p>
              </div>
            </div>
          ))}
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
        kicker="Portfolio"
        title="OUR WORK"
        titleClassName="text-[#017a6d]"
        wrapperClassName="bg-white"
        hasBorder={true}
      >
        <Carousel className="mt-12">
          {allImages.map((img, i) => (
            <div key={i} className="min-w-[85vw] md:min-w-[400px] px-3 snap-start">
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
            href="/portfolio"
            className="inline-flex items-center justify-center rounded-lg border-2 border-[#017a6d] px-8 py-3 text-sm font-bold text-[#017a6d] hover:bg-[#017a6d] hover:text-white transition-all shadow-md hover:-translate-y-1"
          >
            VIEW FULL PORTFOLIO
          </Link>
        </div>
      </Section>

      {/* BLOG */}
      <OurBlogSection />
    </main>
  );
}
