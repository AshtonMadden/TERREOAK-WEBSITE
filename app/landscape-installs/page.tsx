"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Section, ScrollReveal, Carousel } from "../components/UI";
import OurBlogSection from "../components/OurBlogSection";
import JobberLeadForm from "../components/JobberLeadForm";
import GoogleReviewBadge from "../components/GoogleReviewBadge";
import TestimonialSection from "../components/TestimonialSection";

export default function LandscapeInstallsPage() {
  const [isCtaVisible, setIsCtaVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsCtaVisible(true);
      } else {
        setIsCtaVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToForm = () => {
    const formElement = document.getElementById('seasonal-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="bg-white text-black">
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center border-b border-black/10 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/landscaping-hero-new.jpg"
            alt="TERREOAK Landscaping and Design Build Excellence"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-48 pb-16 md:pt-56 md:pb-24 lg:pt-60 lg:pb-32 text-left">
          <p className="text-[14px] font-bold tracking-widest text-[#01fa6d] uppercase drop-shadow-md">
            Calgary • Commercial & Residential
          </p>
          <h1 className="mt-4 text-[42px] md:text-[56px] lg:text-[64px] font-black leading-[1.1] tracking-tight text-white drop-shadow-2xl max-w-4xl uppercase">
            Landscaping &<br />
            <span className="text-[#01fa6d]">Design-Build Solutions.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-[1.1rem] font-bold text-white/90 md:text-[1.3rem]">
            Engineered hardscapes, precision grading, and full-yard transformations built for Calgary&apos;s extreme climate.
          </p>
          <div className="mt-10 flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleScrollToForm}
                className="inline-flex items-center justify-center rounded-full bg-[#01fa6d] px-12 py-[16px] text-[16px] font-extrabold text-black border-2 border-white/10 hover:opacity-90 transition-all cursor-pointer shadow-xl shadow-[#01fa6d]/20 hover:-translate-y-1"
              >
                REQUEST A BUILD QUOTE
              </button>
              <a
                href="tel:+15877077648"
                className="inline-flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm px-12 py-[14px] text-[16px] font-extrabold text-white border-2 border-white/40 hover:bg-white/20 transition-colors"
              >
                CALL NOW
              </a>
            </div>

            <GoogleReviewBadge />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <Section
        kicker="Built for Calgary"
        kickerClassName="text-white/60"
        title="Why Calgarians choose TERREOAK for Landscape Design and Build"
        titleClassName="text-white"
        wrapperClassName="bg-[#2c2d32]"
        py="py-8"
      >
        <div className="relative">
          <p className="max-w-3xl text-lg text-white/80 leading-relaxed font-normal relative z-10">
            Engineered for longevity and aesthetics, our design-build approach ensures your outdoor space withstands Calgary&apos;s unique climate while enhancing your lifestyle.
          </p>
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-screen h-[100px] opacity-10 grayscale pointer-events-none z-0 overflow-hidden">
            <Image
              src="/images/calgary-skyline.png"
              alt="Calgary Skyline silhouette"
              width={1920}
              height={150}
              className="w-full h-full object-cover object-bottom"
            />
          </div>
        </div>
      </Section>

      {/* PROPERTY TYPES SECTION */}
      <Section title="Landscaping Services for All Calgary Properties" titleClassName="text-[#017a6d]">
        <p className="max-w-3xl text-lg text-black/80 leading-relaxed font-normal mb-12">
          From new builds to established homes, we create custom outdoor spaces designed to fit your property and lifestyle. TERREOAK specializes in Calgary residential lots, infill homes, and upscale new neighborhoods, delivering complete design-build services that stand up to Alberta&apos;s extreme seasons.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "New Builds",
            "Established Homes",
            "Infill Townhomes",
            "Luxury Properties"
          ].map((type, i) => (
            <div key={i} className="flex flex-col items-center justify-center p-6 rounded-xl border border-black/10 transition-all hover:border-[#017a6d] hover:bg-gray-50 group">
              <div className="w-12 h-12 rounded-full bg-[#017a6d]/5 flex items-center justify-center mb-4 group-hover:bg-[#017a6d] transition-colors">
                <svg className="w-6 h-6 text-[#017a6d] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="font-black text-center text-sm md:text-base">{type}</h3>
            </div>
          ))}
        </div>

        {/* FOUNDER SPOTLIGHT */}
        <div className="flex flex-col md:flex-row items-center gap-12 mt-20">
          <div className="md:w-1/4 flex justify-center">
            <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-8 border-white shadow-2xl">
              <Image
                src="/images/ASHTON-MADDEN-HEADSHOT.jpg"
                alt="Ashton Madden - Founder & Director"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:w-3/4 bg-white p-8 md:py-8 md:px-12 rounded-3xl shadow-xl border border-black/5 relative overflow-hidden group text-left">
            <h3 className="text-3xl font-black text-[#017a6d] uppercase tracking-tight mb-4 text-left">Ashton Madden</h3>
            <div className="space-y-4">
              <p className="text-lg text-black/70 leading-relaxed font-medium">
                My goal with TERREOAK is simple: build a company rooted in strong values, a great team culture, and a customer experience people can trust.
              </p>
            </div>

            <div className="mt-6 flex justify-center md:justify-end items-end">
              <div className="text-center md:text-right w-full flex flex-col items-center md:items-end">
                <div className="relative h-20 w-full max-w-[240px] md:h-[100px] md:w-[320px] mb-1">
                  <Image
                    src="/Ashton_Signature_.jpg"
                    alt="Ashton Madden Signature"
                    fill
                    className="object-contain object-center md:object-right"
                  />
                </div>
                <span className="text-[10px] font-bold text-black/30 uppercase tracking-[0.2em]">Founder & Director</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* PROCESS */}
      <Section
        kicker="Our Process"
        kickerClassName="text-white/60"
        title="Our proven Design & Build Process"
        titleClassName="text-white"
        wrapperClassName="bg-[#2c2d32]"
      >
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {[
            { step: "01", title: "Discovery & Consultation", desc: "We meet on-site to understand your vision, budget, and property requirements." },
            { step: "02", title: "Conceptual Design & 3D Rendering", desc: "Our designers create detailed plans and visualizations to bring your project to life." },
            { step: "03", title: "Budgeting & Material Selection", desc: "We select climate-ready materials and finalize a transparent, fixed-price scope." },
            { step: "04", title: "Construction Management", desc: "Our skilled crews execute the build with structured systems and daily management." },
            { step: "05", title: "Final Walkthrough", desc: "We ensure every detail meets our 'Built Right' standard before handing over your space." }
          ].map((p, i) => (
            <ScrollReveal key={i} className="group relative">
              <div className="h-full bg-[#017a6d] p-8 rounded-2xl flex flex-col justify-center min-h-[160px] border border-white/5 shadow-xl hover:bg-[#01645a] transition-all transform hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center font-black text-sm shrink-0">
                    {p.step}
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight">{p.title}</h3>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* SERVICES (Same as home page grid style) */}
      <Section kicker="What We Do" title="Comprehensive Landscape Services" titleClassName="text-[#017a6d]">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {[
            { title: "Hardscapes & Retaining Walls", desc: "Engineered stone work and structural walls designed for stability and style.", image: "/Landscape web page pics/Techo-Bloc-pavers-river-rock.JPG" },
            { title: "Concrete", desc: "Professional concrete pouring, patios, walkways, and decorative concrete solutions.", image: "/Landscape web page pics/Exposed-aggregate-concrete.JPG" },
            { title: "Planting & Trees", desc: "Selection of hardy, Alberta-native species for a thriving mountain climate.", image: "/images/gallery/project-3.png" },
            { title: "Sod & Turf", desc: "Precision sod installation and premium synthetic turf solutions.", image: "/Landscape web page pics/Sod-installation-calgary.jpg" },
            { title: "Irrigation Systems", desc: "Efficient water management and professional system installations.", image: "/Landscape web page pics/Calgary-lawn-irrigation.jpg" },
            { title: "Pergolas & Fencing", desc: "Custom wooden pergolas and horizontal privacy fencing designed for luxury outdoor living.", image: "/images/pergolas-fencing-new.jpg" },
            { title: "Drainage Systems", desc: "Custom engineered grading, foundation protection, and water management solutions.", image: "/Calgary-drainage-solutions.JPG" },
            { title: "Landscape Design", desc: "Professional 3D landscape design and conceptual planning for your outdoor space.", image: "/images/design.png" }
          ].map((s, i) => (
            <div key={i} className="group rounded-xl border border-black/10 overflow-hidden bg-white hover:border-[#017a6d] transition-colors">
              <div className="relative aspect-video overflow-hidden">
                <Image src={s.image} alt={s.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-black text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-black/60 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* JOBBER LEAD FORM */}
      <Section id="seasonal-form" title="REQUEST AN ESTIMATE" titleClassName="text-[#01fa6d]">
        <div className="max-w-6xl mx-auto w-full">
          <JobberLeadForm
            clienthubId="41b3399e-3795-43d8-afe2-e6c38c1b3e6e-2235504"
            formUrl="https://clienthub.getjobber.com/client_hubs/41b3399e-3795-43d8-afe2-e6c38c1b3e6e/public/work_request/embedded_work_request_form?form_id=2235504"
          />
        </div>
      </Section>

      {/* RECENT PROJECTS (Gallery) */}
      <Section kicker="Portfolio" title="Our Recent Projects" titleClassName="text-[#017a6d]" wrapperClassName="bg-white">
        <Carousel className="mt-12">
          {[
            { src: "/Landscape web page pics/Calgary-Concrete-pour.JPG", alt: "Calgary Concrete Pour" },
            { src: "/Landscape web page pics/Calgary-hardscaping.JPG", alt: "Calgary Hardscaping" },
            { src: "/Landscape web page pics/Exposed-aggregate-concrete.JPG", alt: "Exposed Aggregate Concrete" },
            { src: "/Landscape web page pics/Finished-hardscape-project.JPG", alt: "Finished Hardscape Project" },
            { src: "/Landscape web page pics/Hardscape-path-install.JPG", alt: "Hardscape Path Install" },
            { src: "/Landscape web page pics/Techo-Bloc-paver-pathway.JPG", alt: "Techo-Bloc Paver Pathway" },
            { src: "/Landscape web page pics/Techo-Bloc-pavers-river-rock.JPG", alt: "Techo-Bloc Pavers and River Rock" },
            { src: "/Landscape web page pics/Techo-bloc-bin-pad.JPG", alt: "Techo-Bloc Bin Pad" },
            { src: "/Landscape web page pics/base-prep-paverpath.JPG", alt: "Base Preparation for Paver Path" },
            { src: "/Landscape web page pics/lawn-relevel-calgary.JPG", alt: "Lawn Relevel Calgary" },
            { src: "/Landscape web page pics/rock-bed-refresh.JPG", alt: "Rock Bed Refresh" }
          ].map((photo, i) => (
            <div key={i} className="min-w-[85vw] md:min-w-[450px] px-4 snap-start">
              <ScrollReveal className="relative aspect-[16/10] rounded-2xl overflow-hidden group border border-black/5 shadow-lg">
                <Image src={photo.src} alt={photo.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              </ScrollReveal>
            </div>
          ))}
        </Carousel>
      </Section>

      <div className="mt-12 text-center pb-24">
        <Link
          href="/portfolio"
          className="inline-flex items-center justify-center rounded-lg border-2 border-[#017a6d] px-8 py-3 text-sm font-bold text-[#017a6d] hover:bg-[#017a6d] hover:text-white transition-all shadow-md hover:-translate-y-1"
        >
          VIEW FULL PORTFOLIO
        </Link>
      </div>

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

      {/* FAQ */}
      <Section kicker="Support" title="Frequently Asked Questions" titleClassName="text-[#017a6d]" wrapperClassName="bg-white">
        <div className="mt-12 max-w-4xl mx-auto space-y-4">
          {[
            { q: "How long does a typical landscape build take?", a: "Residential projects typically range from 1 to 4 weeks depending on complexity, materials, and property size." },
            { q: "Do you provide 3D designs for all projects?", a: "We offer professional 3D renderings for all major landscape overhauls and design-build contracts to ensure total alignment." },
            { q: "Is your work under warranty?", a: "Yes, all our hardscape installations are backed by our Built Right Guarantee, which covers craftsmanship and material integrity." },
            { q: "How do you handle slope and drainage issues?", a: "Drainage is our priority. We use engineered solutions and precise grading to ensure water is directed away from your foundation." }
          ].map((faq, i) => (
            <details key={i} className="group bg-white rounded-xl border border-black/5 overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-black text-lg hover:bg-gray-50 transition-colors">
                {faq.q}
                <span className="w-8 h-8 rounded-full bg-[#017a6d]/5 flex items-center justify-center group-open:rotate-45 transition-transform text-[#017a6d]">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </summary>
              <div className="p-6 pt-0 text-black/60 leading-relaxed border-t border-black/5 bg-gray-50/30">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </Section>

      {/* FINAL CTA */}
      <section className="py-24 bg-[#017a6d] text-center text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-8">Ready to transform your landscape?</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12 font-bold italic">
            Secure your spot in our build queue today. Our crews fill up fast for the Calgary spring and summer season.
          </p>
          <button
            onClick={handleScrollToForm}
            className="inline-flex items-center justify-center rounded-full bg-white px-12 py-[16px] text-[18px] font-black text-[#017a6d] hover:bg-gray-100 transition-all shadow-2xl hover:-translate-y-1 cursor-pointer"
          >
            GET YOUR BUILD ESTIMATE
          </button>
        </div>
      </section>

      {/* BLOG */}
      <OurBlogSection />
      {
        isCtaVisible && (
          <div style={styles.stickyCtaContainer} className="stickyCtaWrapper animate-float-up">
            <button
              onClick={handleScrollToForm}
              style={styles.stickyCtaLink}
              className="cursor-pointer"
            >
              START MY PROJECT
            </button>
            <button
              onClick={() => setIsCtaVisible(false)}
              style={styles.closeSticky}
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        )
      }
    </main >
  );
}

const styles: Record<string, React.CSSProperties> = {
  stickyCtaContainer: {
    position: "fixed",
    bottom: "24px",
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    background: "#01fa6d",
    borderRadius: "999px",
    padding: "4px",
    boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
    width: "fit-content",
    left: 0,
    right: 0,
    margin: "0 auto",
  },
  stickyCtaLink: {
    color: "#000",
    padding: "12px 32px",
    fontWeight: 800,
    fontSize: "18px",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    whiteSpace: "nowrap",
  },
  closeSticky: {
    background: "rgba(0,0,0,0.1)",
    color: "#000",
    border: "none",
    borderRadius: "50%",
    width: "32px",
    height: "32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: 900,
    marginRight: "4px",
  },
};
