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
            src="/images/landscape-hero-pavers.jpg"
            alt="TERREOAK Landscaping and Design Build Excellence"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 w-full mx-auto max-w-6xl px-6 flex flex-col justify-center min-h-[100dvh] md:min-h-0 md:block pt-32 pb-12 md:pt-56 md:pb-24 lg:pt-60 lg:pb-32 text-left animate-slide-in-left">
          <div className="mt-auto md:mt-0">
            <p className="text-[14px] font-bold tracking-widest text-[#01fa6d] uppercase drop-shadow-md">
              Calgary • Commercial & Residential
            </p>
            <h1 className="mt-2 text-[32px] md:text-[56px] lg:text-[64px] font-black leading-[1.1] tracking-tight text-white drop-shadow-2xl max-w-4xl uppercase">
              Calgary Landscaping Company —<br />
              <span className="text-[#01fa6d]">Design, Build & Install</span>
            </h1>
          </div>

          <div className="mt-auto md:mt-12 mb-8 md:mb-0 flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleScrollToForm}
                className="inline-flex items-center justify-center rounded-full bg-[#01fa6d]/80 backdrop-blur-md px-12 md:px-24 py-[16px] text-[16px] font-extrabold text-black border-2 border-white/10 hover:bg-[#01fa6d] transition-all cursor-pointer shadow-xl shadow-[#01fa6d]/20 hover:-translate-y-1 w-full md:w-auto text-center"
              >
                PRICE PROJECT
              </button>

            </div>

            <GoogleReviewBadge />
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <Section
        title="FEATURED PROJECTS"
        titleClassName="text-[#017a6d]"
        wrapperClassName="bg-gray-50 border-y border-black/5"
      >
        <div className="max-w-6xl mx-auto flex flex-col gap-24">
            {[
              {
                id: 1,
                title: "Custom Landscape Design & Build",
                desc: "Explore one of our recent high-end residential landscape construction projects. From initial 3D conceptual design to final construction, see how we transformed this outdoor space.",
                img: "/Landscape web page pics/Finished-hardscape-project.JPG",
                link: "/projects/featured-project-1"
              },
              {
                id: 2,
                title: "Premium Hardscape Installation",
                desc: "A stunning transformation featuring Techo-Bloc paving stones, custom retaining walls, and a fully redesigned outdoor living area built to withstand Calgary's climate.",
                img: "/Landscape web page pics/Techo-Bloc-pavers-river-rock.JPG",
                link: "/projects/featured-project-2"
              }
            ].map((project, idx) => (
                <div key={project.id} className={`flex flex-col md:flex-row gap-12 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="w-full md:w-1/2">
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-black/10 group">
                            <Image
                                src={project.img}
                                alt={project.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 space-y-6">
                        <h3 className="text-3xl md:text-4xl font-black text-[#017a6d] uppercase tracking-tight">{project.title}</h3>
                        <p className="text-lg text-black/70 font-medium leading-relaxed">
                            {project.desc}
                        </p>
                        <div className="pt-4">
                            <Link
                                href={project.link}
                                className="inline-flex items-center justify-center rounded-xl bg-[#017a6d] px-8 py-4 text-[16px] font-black text-white hover:bg-[#015e54] transition-all transform hover:-translate-y-1 shadow-lg shadow-[#017a6d]/20 uppercase tracking-wide"
                            >
                                LEARN MORE
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </Section>

      {/* PROPERTY TYPES SECTION */}
      <Section title="Landscaping Services for All Calgary Properties" titleClassName="text-[#017a6d]">
        <div className="max-w-4xl text-lg text-black/80 leading-relaxed font-normal mb-12">
          <p className="mb-6">
            TERREOAK is a Calgary landscaping and design-build company specializing in complete outdoor transformations for residential and commercial properties. From engineered retaining walls and exposed aggregate concrete to sod installations, pergolas, and drainage solutions, we build outdoor spaces designed to last through Alberta’s freeze-thaw cycles, heavy snowloads, and short construction seasons.
          </p>
          <p className="mb-6">
            We work with new build homeowners in Calgary’s growing south and northwest communities, established homeowners upgrading aging yards, infill townhome builders, and luxury property owners looking for a contractor who can execute a high-spec finish. Every project starts with an on-site consultation and 3D design so you can see your space before a single shovel hits the ground.
          </p>
          <p className="font-black text-[#017a6d]">
            Calgary’s landscape build season fills up fast. If you’re planning a project for spring or summer, now is the time to get into the queue.
          </p>
        </div>

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
        <div className="flex flex-col md:flex-row items-stretch bg-white rounded-3xl shadow-xl border border-black/5 overflow-hidden group mt-20">
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
      </Section>

      {/* WHY CALGARY LANDSCAPING IS DIFFERENT */}
      <Section
        kicker="WHY CALGARY LANDSCAPING IS DIFFERENT"
        title="Built for Alberta. Not Just Built."
        titleClassName="text-[#017a6d]"
        wrapperClassName="bg-gray-50"
      >
        <div className="max-w-4xl space-y-6">
          <p className="text-xl text-black/80 leading-relaxed font-bold">
            Landscaping in Calgary isn’t the same as landscaping in Vancouver or Toronto. Our freeze-thaw cycle, clay soils, short growing season, and chinook wind patterns all affect how outdoor spaces are designed and built. A patio base that works in Ontario will heave and crack here within two winters.
          </p>
          <p className="text-lg text-black/70 leading-relaxed font-medium">
            Every TERREOAK build accounts for Calgary’s specific conditions — proper compacted gravel base depths, frost-rated materials, drainage slopes that handle spring runoff, and plant species selected for Zone 3b hardiness. It’s the difference between a yard that looks great on completion day and one that still looks great five years later.
          </p>
        </div>
      </Section>

      {/* PROCESS */}
      <Section
        wrapperClassName="bg-[#2c2d32] overflow-hidden"
        kicker="How We Do It"
        kickerClassName="text-white/60"
        title="The Process Matters"
        titleClassName="text-white"
      >
        <div className="flex flex-col xl:flex-row items-stretch gap-8 mt-12">
          {/* LEFT: Process Step Cards Grid (Strict 3 columns on desktop) */}
          <div className="flex-1">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                "Inquiry", "Consultation", "Proposal Delivered", "Proposal Review",
                "Deposit", "Pre-Construction Meeting", "Work on Project Begins",
                "Walkthrough", "Warranty Period"
              ].map((step, i) => (
                <ScrollReveal key={i}>
                  <div className="h-full bg-white/5 py-4 px-3 rounded-xl border border-white/10 hover:border-[#01fa6d]/50 transition-all group flex flex-col items-center text-center">
                    <div className="w-8 h-8 rounded-full bg-[#01fa6d] text-[#2c2d32] flex items-center justify-center font-black text-xs mb-3 shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                      {i + 1}
                    </div>
                    <h3 className="font-black uppercase text-[9px] sm:text-[10px] text-white tracking-widest leading-tight">
                      {step}
                    </h3>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* RIGHT: Text Content Box */}
          <div className="w-full xl:w-[380px] bg-white/5 rounded-3xl p-8 border border-white/10 shadow-2xl flex flex-col justify-center">
            <h3 className="text-2xl font-black text-[#01fa6d] mb-4 uppercase leading-tight">Quality is in the details</h3>
            <p className="text-base text-white/90 leading-relaxed mb-4 font-bold">
              At TERREOAK Landscaping, the entire process matters, from the first call to the moment you relax in your new yard.
            </p>
            <p className="text-sm text-white/60 leading-relaxed mb-8 font-medium">
              We believe that you should not only expect to be thrilled with your final project but should also expect to enjoy the experience of working with us. Quality and trust are the foundations of our business.
            </p>

            <button
              onClick={handleScrollToForm}
              className="w-full inline-flex items-center justify-center rounded-xl bg-[#01fa6d] py-4 text-xs font-black text-[#2c2d32] hover:bg-white transition-all shadow-xl uppercase tracking-[0.2em]"
            >
              Start Project
            </button>
          </div>
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
      <Section kicker="Projects" title="Our Recent Projects" titleClassName="text-[#017a6d]" wrapperClassName="bg-white">
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
            <div key={i} className="min-w-[85vw] md:min-w-[450px] px-4 snap-center">
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
          href="/projects"
          className="inline-flex items-center justify-center rounded-lg border-2 border-[#017a6d] px-8 py-3 text-sm font-bold text-[#017a6d] hover:bg-[#017a6d] hover:text-white transition-all shadow-md hover:-translate-y-1"
        >
          VIEW ALL PROJECTS
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

      {/* COST & PRICING */}
      <Section title="How Much Does Landscaping Cost in Calgary?" titleClassName="text-[#017a6d]" wrapperClassName="bg-gray-50">
        <div className="max-w-4xl">
          <p className="text-xl text-black/80 leading-relaxed font-bold mb-8">
            Landscaping project costs in Calgary vary widely based on scope, materials, and site conditions. As a general guide:
          </p>
          <div className="grid gap-6 md:grid-cols-2 mb-12">
            <div className="p-6 bg-white rounded-xl border border-black/5 shadow-sm">
              <h3 className="font-black text-lg mb-2">Sod & Grading</h3>
              <p className="text-black/70 leading-relaxed">A basic sod installation on a standard Calgary lot typically runs <strong>$2,000–$6,000</strong> depending on lawn size, grading required, and soil prep.</p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-black/5 shadow-sm">
              <h3 className="font-black text-lg mb-2">Patios & Hardscapes</h3>
              <p className="text-black/70 leading-relaxed">Exposed aggregate or paver patio projects range from <strong>$8,000–$25,000+</strong> depending on size and material grade.</p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-black/5 shadow-sm">
              <h3 className="font-black text-lg mb-2">Retaining Walls</h3>
              <p className="text-black/70 leading-relaxed">Retaining wall installations start around <strong>$5,000</strong> and scale with height, length, and engineering requirements.</p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-black/5 shadow-sm">
              <h3 className="font-black text-lg mb-2">Full Yard Transformations</h3>
              <p className="text-black/70 leading-relaxed">Full yard design-build transformations for new homes commonly range from <strong>$20,000–$60,000+</strong>.</p>
            </div>
          </div>
          <p className="text-lg text-black/70 leading-relaxed italic border-l-4 border-[#017a6d] pl-6 py-2">
            Every TERREOAK project starts with a free on-site consultation and a detailed, fixed-price quote. We don’t do vague estimates — you’ll know exactly what you’re getting and what it costs before any work begins.
          </p>
        </div>
      </Section>

      {/* FAQ */}
      <Section kicker="Support" title="Frequently Asked Questions" titleClassName="text-[#017a6d]" wrapperClassName="bg-white">
        <div className="mt-12 max-w-4xl mx-auto space-y-4">
          {[
            {
              q: "How long does a typical landscaping project take in Calgary?",
              a: "Most residential projects run between 1 and 4 weeks from start to final walkthrough, depending on scope. A sod and cleanup install might take 2–3 days. A full hardscape build with retaining walls, concrete, and planting can run 2–4 weeks. We provide a project timeline before work begins so you’re never left guessing."
            },
            {
              q: "Do you work on new build lots in Calgary?",
              a: "Yes — new build landscaping is a significant part of our work. We’re familiar with the requirements of Calgary’s new communities including grading certificates, utility locates, and builder coordination. If you’ve just taken possession and need your yard completed, we can take it from bare dirt to finished landscape."
            },
            {
              q: "What’s the best time of year to book landscaping in Calgary?",
              a: "The Calgary build season runs roughly May through October. Our schedule fills up quickly in early spring, so we recommend booking your consultation in March or April for a spring or early summer start. Fall is also a good window for hardscape and grading work before the ground freezes."
            },
            {
              q: "Do you offer phased projects?",
              a: "Yes. If budget or timing is a consideration, we can design your full yard plan and build it in phases across one or more seasons. This way the design is cohesive even if the construction happens over time."
            },
            {
              q: "Is your work under warranty?",
              a: "All hardscape installations are backed by our Built Right Guarantee covering craftsmanship and material integrity. We stand behind our work and return to address any issues that arise from our installation."
            },
            {
              q: "Do you handle drainage and grading issues?",
              a: "Drainage is one of the most common issues we solve on Calgary properties, particularly in communities with heavy clay soil. We use engineered grading, French drains, catch basins, and swales to direct water away from your foundation and prevent pooling. If you’re noticing water in your basement, garage, or yard after rain or snowmelt, a drainage assessment should be your first call."
            }
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
