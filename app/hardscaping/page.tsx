"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Section, ScrollReveal } from "../components/UI";
import OurBlogSection from "../components/OurBlogSection";
import PremiumHero from "../components/PremiumHero";
import TrustBar from "../components/TrustBar";
import TestimonialSection from "../components/TestimonialSection";
import JobberLeadForm from "../components/JobberLeadForm";
import TeamSection from "../components/TeamSection";

export default function HardscapingPage() {
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

  return (
    <main className="bg-white text-black">
      <PremiumHero
        title={<>CALGARY HARDSCAPING<br /><span className="text-[#01fa6d]">Built to Handle the Winters.</span></>}
        description="Patios, retaining walls, walkways, and steps installed with the base work that actually keeps things level after the ground freezes and thaws. Serving Calgary, Okotoks, Airdrie, Cochrane, and Chestermere."
        backgroundImage="/Landscape web page pics/Calgary-hardscaping.JPG"
        badgeLabel="Landscaping • Calgary"
        ctaText="GET A FREE QUOTE"
        onCtaClick={() => document.getElementById('seasonal-form')?.scrollIntoView({ behavior: 'smooth' })}
      />
      
      <TrustBar />

      {/* FEATURED PROJECTS */}
      <Section
        title="FEATURED PROJECTS"
        titleClassName="text-[#017a6d]"
        wrapperClassName="bg-gray-50 border-y border-black/5"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                id: 1,
                title: "Custom Stone Pathway",
                location: "McKenzie Lake, Calgary AB",
                desc: "A custom stepping stone and premium rundle rock pathway designed to replace outdated materials and drastically improve side-yard accessibility and drainage.",
                img: "/Landscape web page pics/Finished-hardscape-project.JPG",
                link: "/mckenzielakelandscaping"
              },
              {
                id: 2,
                title: "Techo-Bloc Path",
                location: "McKenzie Lake, Calgary AB",
                desc: "A premium interlocking paver patio featuring Techo-Bloc materials, built on a highly compacted, open-graded base to prevent frost heaving.",
                img: "/Landscape web page pics/Techo-Bloc-paver-pathway.JPG",
                link: "/projects/featured-project-2"
              }
            ].map((project) => (
                <div key={project.id} className="relative group overflow-hidden rounded-3xl aspect-[4/3] md:aspect-video cursor-pointer shadow-xl">
                    <Image
                        src={project.img}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Default Glassmorphic Bottom Bar */}
                    <div className="absolute bottom-4 left-4 right-4 bg-black/40 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex items-center justify-between transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
                        <div>
                            <div className="text-white/80 text-[10px] uppercase tracking-[0.2em] font-bold mb-1">Name</div>
                            <div className="text-white font-black text-xl">{project.title}</div>
                        </div>
                        <div className="text-right flex items-center gap-6">
                            <div className="hidden sm:block text-left">
                                <div className="text-white/80 text-[10px] uppercase tracking-[0.2em] font-bold mb-1">Location</div>
                                <div className="text-white font-black text-xl">{project.location}</div>
                            </div>
                            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>
                    </div>

                    {/* Hover Overlay: Solid Green with Description */}
                    <div className="absolute inset-0 bg-[#017a6d]/95 backdrop-blur-sm flex flex-col justify-center items-center p-8 text-center transition-all duration-500 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0">
                        <h3 className="text-3xl font-black text-white mb-4">{project.title}</h3>
                        <p className="text-white/90 font-medium text-lg mb-8 max-w-md">{project.desc}</p>
                        <Link href={project.link} className="inline-flex items-center gap-3 bg-[#01fa6d] text-black px-8 py-3 rounded-full font-black hover:bg-white transition-colors uppercase tracking-widest text-sm">
                            View Project <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
      </Section>

      {/* WHAT IS HARDSCAPING */}
      <Section 
        wrapperClassName="bg-[#2c2d32]" 
        title="What Is Hardscaping?" 
        titleClassName="text-[#01fa6d]"
        image={
          <Image 
            src="/Landscape web page pics/Calgary-hardscaping.JPG" 
            alt="Hardscaping in Calgary" 
            fill 
            className="object-cover"
          />
        }
        imageRight={true}
      >
        <div className="max-w-xl">
           <ScrollReveal>
             <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-medium mb-6">
               Hardscaping covers the permanent, non-living structures in your yard. Patios, retaining walls, walkways, steps, and borders. These are the pieces that give your outdoor space structure, function, and a finished look.
             </p>
             <p className="text-lg text-white/80 leading-relaxed font-medium mb-6">
               Done right, hardscaping adds real usable space to your property and holds its value for decades. Done wrong, it shifts, cracks, heaves, or falls apart within a few years because the base work was cut short.
             </p>
             <p className="text-lg text-[#01fa6d] leading-relaxed font-bold">
               In Calgary that happens a lot. Our freeze-thaw cycles are tough on anything installed without proper drainage and compaction underneath. We build to a standard that accounts for that from the start.
             </p>
           </ScrollReveal>
        </div>
      </Section>

      {/* WHAT WE BUILD */}
      <Section title="What We Build" titleClassName="text-[#017a6d]" wrapperClassName="bg-gray-50 border-y border-black/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { 
              title: "Paving Stone Patios", 
              desc: "A well-built patio turns a backyard into a space you actually use. We install paving stone patios using interlocking concrete pavers, natural stone, and flagstone. Every installation starts with proper excavation, a compacted gravel base, and correct grading so water runs away from your home and the surface stays level season after season. We work in backyards, front entries, side yards, and around decks or fences."
            },
            { 
              title: "Retaining Walls", 
              desc: "If your yard has a slope, a retaining wall is often the difference between a usable yard and a steep unusable grade. We build retaining walls using interlocking concrete block, natural stone, and other materials suited to your specific situation. Proper drainage behind every wall is not optional. It is what prevents the wall from failing. For walls over 1.2 metres, we flag any permit requirements upfront so there are no surprises."
            },
            { 
              title: "Walkways and Pathways", 
              desc: "A solid walkway connects your yard and adds curb appeal at the same time. We install paved walkways using concrete pavers, flagstone, and stepping stones. Like all our installs, base prep and drainage are handled properly so the path does not settle, shift, or become a trip hazard after a few winters."
            },
            { 
              title: "Steps and Staircases", 
              desc: "Sloped yards often need steps to connect levels safely and cleanly. We build exterior steps using natural stone, concrete pavers, and interlocking block that match the rest of your hardscape and hold up under Calgary’s seasonal ground movement."
            },
            { 
              title: "Grading and Drainage", 
              desc: "A lot of hardscape problems start with poor drainage. Water sitting against a foundation, pooling on a patio, or building up behind a retaining wall will always win eventually. We grade properly before any install and can address existing drainage problems as part of a larger project or on their own."
            },
            { 
              title: "Garden Bed Borders and Edging", 
              desc: "Clean edging separates your hardscape from your planted areas and keeps everything looking intentional. We install stone borders, concrete edging, and decorative rock surrounds that tie your hardscape and softscape together into a finished yard."
            }
          ].map((service, i) => (
            <ScrollReveal key={i} className="bg-white rounded-3xl p-8 shadow-md border border-black/5 hover:-translate-y-2 transition-all group">
              <h3 className="text-xl font-black text-black mb-3 leading-tight">{service.title}</h3>
              <p className="text-black/70 font-medium leading-relaxed">{service.desc}</p>
            </ScrollReveal>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <button
                onClick={() => document.getElementById('seasonal-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center rounded-lg bg-[#01fa6d] px-10 py-4 text-sm font-black text-black hover:opacity-90 transition-all transform hover:-translate-y-1 shadow-lg cursor-pointer"
            >
                GET A QUOTE
            </button>
        </div>
      </Section>

      {/* TEAM SECTION */}
      <TeamSection />

      {/* WHY BASE WORK MATTERS */}
      <Section title="Why the Base Work Matters Here" titleClassName="text-[#017a6d]" wrapperClassName="bg-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center mb-12">
          
          {/* TEXT */}
          <div className="w-full lg:w-1/2 text-lg text-black/80 leading-relaxed font-medium">
            <ScrollReveal>
              <p className="mb-6">
                Calgary’s winters are hard on hardscaping. The ground freezes and thaws multiple times through the season. When moisture gets trapped under a patio or behind a retaining wall and then freezes, it expands. That expansion heaves pavers, cracks surfaces, and shifts walls.
              </p>
              <p className="mb-6">
                The fix is not better materials at the top. It is proper drainage and a solid compacted base underneath. We excavate to the right depth, use the right gravel, and make sure water has somewhere to go before anything goes down on top.
              </p>
              <p className="mb-6">
                That is the difference between a patio that looks the same in year five as it did when we finished it, and one that you are calling someone to fix after two winters.
              </p>
              <p className="font-bold text-[#017a6d]">
                We serve Calgary and surrounding communities including Okotoks, Airdrie, Cochrane, and Chestermere.
              </p>
            </ScrollReveal>
          </div>

          {/* IMAGE */}
          <div className="w-full lg:w-1/2">
            <ScrollReveal>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-black/5 bg-gray-50">
                    <Image
                        src="/Landscape web page pics/how-drainage-works.jpg"
                        alt="How proper drainage and base works for hardscaping"
                        fill
                        className="object-contain p-2"
                    />
                </div>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section title="How It Works" titleClassName="text-[#017a6d]" wrapperClassName="bg-gray-50 border-y border-black/5">
         <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: 1, title: "Free Site Visit", desc: "We walk the property, look at the slope, drainage, soil, and what you are working with. No charge." },
                { step: 2, title: "Written Quote", desc: "You get a clear itemized quote through Jobber. Approve digitally and we lock in your spot on the schedule." },
                { step: 3, title: "Build", desc: "We handle excavation, base prep, and installation. Every stage gets photographed so you have a full record of what was built and how." },
                { step: 4, title: "Final Walkthrough", desc: "We walk the finished job with you before we leave. Any questions about maintenance, sealing, or what to watch for over time get answered on the spot." },
              ].map((item, i) => (
                <ScrollReveal 
                  key={i} 
                  className="bg-white p-8 rounded-3xl shadow-sm border border-black/5 flex flex-col hover:-translate-y-1 transition-transform"
                >
                  <div className="text-6xl font-black text-[#01fa6d]/30 tracking-tighter mb-4">0{item.step}</div>
                  <h3 className="text-xl font-black mb-3 text-black uppercase">{item.title}</h3>
                  <p className="text-black/70 text-base leading-relaxed font-medium">{item.desc}</p>
                </ScrollReveal>
              ))}
            </div>
         </div>
      </Section>

      {/* TESTIMONIALS */}
      <TestimonialSection
        kicker="5.0 on Google. Owner-operated. Every job documented with photos."
        title="What Calgary Homeowners Are Saying"
        testimonials={[
          {
            name: "Brian Williamson",
            role: "Walking Path Repair & Landscaping",
            text: "I was looking for a landscape company to repair a walking path. Ashton from TERREOAK answered immediately and we booked a site visit. He provided several options, samples, and photos. We were pleased with the finished product and the way he handled the process and kept us informed throughout."
          },
          {
            name: "Linda Hayes Conradson",
            role: "Yard Cleanup & Softscaping",
            text: "I recently used TERREOAK for yard cleanup and was extremely happy with the quality of work and how courteous and considerate the onsite team was. Email communications were friendly, helpful and received quickly. Thank you to Ashton and his team. Would highly recommend!"
          },
          {
            name: "Chris Leech",
            role: "Lawn Care & Aeration",
            text: "Got these guys in to aerate my lawn for the first time. Could not be happier. Ashton and his crew did a tremendous job. They reply quickly and get the job booked and done fast. Always great to deal with a local business that actually replies."
          }
        ]}
      />

      {/* LEAD FORM SECTION */}
      <Section id="seasonal-form" title="Get a Hardscape Estimate" titleClassName="text-[#017a6d]" wrapperClassName="bg-white">
        <div className="max-w-4xl mx-auto text-center mb-12">
           <p className="text-xl font-bold text-black/80">
              Fill out the form below and our team will get back to you with a detailed estimate.
           </p>
        </div>
        <div className="max-w-4xl mx-auto w-full">
           <JobberLeadForm 
                clienthubId="41b3399e-3795-43d8-afe2-e6c38c1b3e6e-2235504"
                formUrl="https://clienthub.getjobber.com/client_hubs/41b3399e-3795-43d8-afe2-e6c38c1b3e6e/public/work_request/embedded_work_request_form?form_id=2235504"
           />
        </div>
      </Section>




      {/* BLOG */}
      <OurBlogSection />

      {/* FAQ */}
      <Section title="Common Questions" titleClassName="text-[#017a6d]" wrapperClassName="bg-gray-50 border-y border-black/5">
        <div className="max-w-4xl mx-auto space-y-4">
          {[
            {
              q: "What materials work best for patios in Calgary?",
              a: "Interlocking concrete pavers and natural stone are the best options for Calgary. They handle freeze-thaw movement better than solid poured surfaces and can be releveled if needed. The key is always the base preparation underneath, not just the material on top."
            },
            {
              q: "Do I need a permit for a patio or retaining wall in Calgary?",
              a: "Most paving stone patios do not require a permit. Retaining walls over 1.2 metres generally do, and walls over 1.5 metres also require engineered drawings. We flag any permit requirements during the quote process so you know what is needed before the work starts."
            },
            {
              q: "How long does a hardscaping project take?",
              a: "A straightforward patio install typically takes a few days to a week depending on size. Projects that combine a patio, retaining wall, and walkway may take one to two weeks. We give you a realistic timeline at the quote stage and stick to it."
            },
            {
              q: "Why is my existing patio shifting or heaving?",
              a: "In most cases it comes down to inadequate base depth or poor drainage when it was originally installed. Water gets under the surface, freezes, and pushes things out of place. Depending on the extent of the movement we can either relay the affected sections or in some cases a full reinstall with proper base prep is the better long-term option."
            },
            {
              q: "Can you combine hardscaping with softscaping on the same project?",
              a: "Yes and it usually makes sense to do it that way. Combining a patio or retaining wall with sod, garden beds, or planting in one project means the yard gets finished at the same time and trades are not overlapping. We do both and coordinate it as one job."
            },
            {
              q: "Do you serve Okotoks, Airdrie, Cochrane, and Chestermere?",
              a: "Yes. We serve all of Calgary and the surrounding communities including Okotoks, Airdrie, Cochrane, and Chestermere."
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What materials work best for patios in Calgary?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Interlocking concrete pavers and natural stone are the best options for Calgary. They handle freeze-thaw movement better than solid poured surfaces and can be releveled if needed."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do I need a permit for a patio or retaining wall in Calgary?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most paving stone patios do not require a permit. Retaining walls over 1.2 metres generally do, and walls over 1.5 metres also require engineered drawings."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does a hardscaping project take?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A straightforward patio install typically takes a few days to a week depending on size. Projects that combine a patio, retaining wall, and walkway may take one to two weeks."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Why is my existing patio shifting or heaving?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "In most cases it comes down to inadequate base depth or poor drainage when it was originally installed. Depending on the extent of the movement we can either relay the affected sections or in some cases a full reinstall with proper base prep is the better long-term option."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can you combine hardscaping with softscaping on the same project?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes and it usually makes sense to do it that way. Combining a patio or retaining wall with sod, garden beds, or planting in one project means the yard gets finished at the same time and trades are not overlapping."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you serve Okotoks, Airdrie, Cochrane, and Chestermere?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We serve all of Calgary and the surrounding communities including Okotoks, Airdrie, Cochrane, and Chestermere."
                  }
                }
              ]
            })
          }}
        />
      </Section>
      
      
      {isCtaVisible && (
        <div style={styles.stickyCtaContainer} className="stickyCtaWrapper animate-float-up">
          <Link
            href="#seasonal-form"
            style={styles.stickyCtaLink}
            className="cursor-pointer"
          >
            START MY PROJECT
          </Link>
          <button
            onClick={() => setIsCtaVisible(false)}
            style={styles.closeSticky}
            aria-label="Close"
          >
            ✕
          </button>
        </div>
      )}
    </main>
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
