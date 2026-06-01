"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Section, ScrollReveal } from "../components/UI";
import GoogleReviewBadge from "../components/GoogleReviewBadge";
import OurBlogSection from "../components/OurBlogSection";
import JobberLeadForm from "../components/JobberLeadForm";
import TrustBar from "../components/TrustBar";
import TestimonialSection from "../components/TestimonialSection";
import PremiumHero from "../components/PremiumHero";
import TeamSection from "../components/TeamSection";
// SodUnrollTransition removed

export default function SoftscapesPage() {
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
        title={<>CALGARY SOFTSCAPING<br /><span className="text-[#01fa6d]">That Actually Lasts.</span></>}
        description="Sod installation, garden beds, planting, and mulch work done right the first time. Serving Calgary, Okotoks, Airdrie, Cochrane, and Chestermere."
        backgroundImage="/images/backyard-bed.jpg"
        badgeLabel="Landscaping • Calgary"
        ctaText="GET A FREE QUOTE"
        onCtaClick={() => document.getElementById('seasonal-form')?.scrollIntoView({ behavior: 'smooth' })}
      />
      
      <TrustBar />


      {/* BUILT FOR CALGARY'S CLIMATE */}
      <Section title="Built for Calgary’s Climate" titleClassName="text-[#017a6d]">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center mb-12">
          
          {/* TEXT */}
          <div className="w-full lg:w-1/2 text-lg text-black/80 leading-relaxed font-medium">
            <ScrollReveal>
              <p className="mb-6">
                Calgary is not an easy place to grow things. Chinooks, dry summers, late frosts, and clay-heavy soil create conditions that catch a lot of homeowners off guard when their new sod turns brown or their shrubs do not come back in spring.
              </p>
              <p className="mb-6">
                We only use plant material and grass varieties that are rated for Zone 3 and proven to survive Alberta winters. Every project starts with looking at your soil, your drainage, and your sun exposure so that what we plant has the best shot at thriving long term.
              </p>
              <p className="font-bold text-[#017a6d]">
                We serve Calgary and the surrounding areas including Okotoks, Airdrie, Cochrane, and Chestermere.
              </p>
            </ScrollReveal>
          </div>

          {/* IMAGE GRID */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 md:gap-6 px-4">
            <ScrollReveal className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-black/10 translate-y-8 hover:scale-[1.02] transition-transform">
              <Image 
                src="/images/lilac.jpg" 
                alt="Flourishing lilac shrub in Calgary landscape" 
                fill 
                className="object-cover"
              />
            </ScrollReveal>
            <ScrollReveal className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-black/10 -translate-y-8 hover:scale-[1.02] transition-transform">
              <Image 
                src="/images/raspberry.jpg" 
                alt="Healthy raspberries growing in an Alberta garden" 
                fill 
                className="object-cover"
              />
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* WHAT IS SOFTSCAPING */}
      <Section 
        wrapperClassName="bg-[#2c2d32]" 
        title="What is Softscaping?" 
        titleClassName="text-[#01fa6d]"
        image={
          <Image 
            src="/images/what-is-softscaping.jpg" 
            alt="Softscaping in Calgary - Sod and plant installation" 
            fill 
            className="object-cover"
          />
        }
        imageRight={true}
      >
        <div className="max-w-xl">
           <ScrollReveal>
             <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-medium mb-6">
               Softscaping covers all the living elements of your yard. Grass, trees, shrubs, perennials, garden beds, mulch, and topsoil. It is the part of your landscape that grows with your property over time and adds real colour, texture, and life to the space.
             </p>
             <p className="text-lg text-white/80 leading-relaxed font-medium mb-6">
               Done well, softscaping works alongside your fencing, pathways, and other structures to pull the whole yard together. Done poorly, it dies off, looks patchy, and costs you money to redo.
             </p>
             <p className="text-lg text-[#01fa6d] leading-relaxed font-bold">
               At TERREOAK we focus on selecting the right plants and materials for Calgary’s climate so what we install actually thrives through the seasons.
             </p>
           </ScrollReveal>
        </div>
      </Section>

      {/* WHAT WE INSTALL */}
      <Section title="What We Install" titleClassName="text-[#017a6d]" wrapperClassName="bg-gray-50 border-y border-black/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { 
              title: "Sod Installation", 
              desc: "A fresh lawn starts with proper soil prep. We grade the area, bring in quality topsoil where needed, and lay 100% Kentucky Bluegrass sod that is sourced locally and suited to Calgary’s cold winters and dry summers. Whether you are moving into a new build or replacing a tired lawn, we handle the full install and walk you through watering after the job is done."
            },
            { 
              title: "Garden Bed Installation", 
              desc: "A well-built garden bed does more than look good. It controls weeds, holds moisture, and gives your plants the best chance to come back year after year. We install beds with the right soil mix, clean edging, and plant selections that work in Calgary’s growing zone."
            },
            { 
              title: "Tree and Shrub Planting", 
              desc: "Trees and shrubs add structure, privacy, and shade that grows in value every year. We select species that are proven to handle Alberta winters and plant them at the right depth with proper soil so they establish quickly and do not heave or die off in year one."
            },
            { 
              title: "Perennial and Annual Planting", 
              desc: "Perennials come back every spring. Annuals fill in the gaps with colour all season. We design planting combinations that look intentional and work for your specific sun exposure and soil conditions in Calgary."
            },
            { 
              title: "Mulch and Decorative Rock", 
              desc: "Fresh mulch holds moisture, keeps weeds down, and makes any yard look clean and finished. Decorative rock and river wash are low maintenance options that work well in high-traffic areas or yards that need to look sharp without much upkeep. We supply and install both."
            },
            { 
              title: "Topsoil and Soil Prep", 
              desc: "Everything else depends on this. Calgary soil is often compacted clay that drains poorly and stunts root growth. We bring in quality topsoil and amend the existing ground so your sod, plants, and beds have a real foundation to grow from."
            }
          ].map((service, i) => (
            <ScrollReveal key={i} className="bg-white rounded-3xl p-8 shadow-md border border-black/5 hover:-translate-y-2 transition-all group">
              <h3 className="text-xl font-black text-black mb-3 leading-tight">{service.title}</h3>
              <p className="text-black/70 font-medium leading-relaxed">{service.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* TEAM SECTION */}
      <TeamSection />

      {/* WHAT MULCH WE INSTALL */}
      <Section title="Premium Mulch Options" titleClassName="text-[#017a6d]" wrapperClassName="bg-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center mb-12">
          
          <div className="w-full lg:w-1/2 text-lg text-black/80 leading-relaxed font-medium">
            <ScrollReveal>
              <p className="mb-6">
                Not all mulch is created equal. Cheap mulch breaks down too fast, loses its colour quickly, and can easily blow away in Calgary’s high winds. We supply and install premium, double-shredded bark mulch that naturally mats together so it stays in your beds and holds its rich colour through the season.
              </p>
              <p className="mb-4">
                Our most popular options include:
              </p>
              <ul className="list-none mb-6 space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2.5 rounded-full bg-[#01fa6d] shrink-0"></div>
                  <div>
                    <span className="font-black text-black block">Foothills Premium Bark</span>
                    <span className="text-base text-black/70">A natural dark brown look that blends perfectly into almost any yard design.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2.5 rounded-full bg-[#01fa6d] shrink-0"></div>
                  <div>
                    <span className="font-black text-black block">Montane Black Mulch</span>
                    <span className="text-base text-black/70">A deep, dyed black mulch that creates high contrast against bright green shrubs and perennials.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2.5 rounded-full bg-[#01fa6d] shrink-0"></div>
                  <div>
                    <span className="font-black text-black block">Western Red Cedar</span>
                    <span className="text-base text-black/70">A natural reddish tint that acts as a deterrent for many common yard insects.</span>
                  </div>
                </li>
              </ul>
              <p className="font-bold text-[#017a6d]">
                We always install mulch at a depth of 3 to 4 inches to guarantee it actually stops weeds and retains soil moisture during dry spells.
              </p>
            </ScrollReveal>
          </div>

          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 md:gap-6 px-4">
            <ScrollReveal className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-black/10 translate-y-8 hover:scale-[1.02] transition-transform">
              <Image 
                src="/images/blue-flowers.jpg" 
                alt="Bright blue lobelia flowers planted in fresh premium mulch" 
                fill 
                className="object-cover"
              />
            </ScrollReveal>
            <ScrollReveal className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-black/10 -translate-y-8 hover:scale-[1.02] transition-transform">
              <Image 
                src="/images/backyard-bed.jpg" 
                alt="Fresh mulch applied around newly planted trees and shrubs" 
                fill 
                className="object-cover"
              />
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section title="How It Works" titleClassName="text-[#017a6d]" wrapperClassName="bg-white">
         <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: 1, title: "Free Site Visit", desc: "We come out, look at your yard, and talk through what you want. No charge, no pressure." },
                { step: 2, title: "Written Quote", desc: "You get a clear quote through Jobber with everything itemized. Approve it digitally and we get you on the schedule." },
                { step: 3, title: "Installation", desc: "Our crew shows up on time and works clean. We photo document the job from start to finish so you have a record of exactly what was done." },
                { step: 4, title: "Walkthrough", desc: "Before we leave, we walk the property with you and cover any aftercare you need to know, like watering schedules for new sod or mulch depth maintenance." },
              ].map((item, i) => (
                <ScrollReveal 
                  key={i} 
                  className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-black/5 flex flex-col hover:-translate-y-1 transition-transform"
                >
                  <div className="text-6xl font-black text-[#01fa6d]/30 tracking-tighter mb-4">0{item.step}</div>
                  <h3 className="text-xl font-black mb-3 text-black uppercase">{item.title}</h3>
                  <p className="text-black/70 text-base leading-relaxed font-medium">{item.desc}</p>
                </ScrollReveal>
              ))}
            </div>
         </div>
      </Section>

      {/* LEAD FORM SECTION */}
      <Section id="seasonal-form" title="Get a Softscape Estimate" titleClassName="text-[#017a6d]" wrapperClassName="bg-white">
        <div className="max-w-4xl mx-auto text-center mb-12">
           <p className="text-xl font-bold text-black/80">
              Fill out the form below and our team will get back to you with a detailed estimate.
           </p>
        </div>
        <div className="max-w-4xl mx-auto bg-gray-50 p-4 md:p-8 rounded-3xl shadow-xl border border-black/5">
           <JobberLeadForm />
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




      {/* BLOG */}
      <OurBlogSection />

      {/* FAQ */}
      <Section title="Common Questions" titleClassName="text-[#017a6d]" wrapperClassName="bg-gray-50 border-y border-black/5">
        <div className="max-w-4xl mx-auto space-y-4">
          {[
            {
              q: "What time of year is best for softscaping in Calgary?",
              a: "Spring and early fall are ideal for most planting and sod installation. Cooler temperatures help roots establish before the stress of summer heat or winter freeze. We work through the growing season and can advise on timing based on what you are looking to install."
            },
            {
              q: "What kind of sod do you use?",
              a: "We use Kentucky Bluegrass, which is the most common and reliable cool-season turf grass for Calgary. It handles cold winters, recovers well from foot traffic, and gives you a dense, green lawn when properly cared for."
            },
            {
              q: "Do you do the soil prep or is that extra?",
              a: "Soil prep is part of every install. We do not skip it. Skipping prep is how sod fails. We grade the area, remove debris, bring in topsoil where needed, and make sure drainage is correct before anything goes down."
            },
            {
              q: "Do you service Okotoks, Airdrie, Cochrane, and Chestermere?",
              a: "Yes. We serve all of Calgary and the surrounding communities including Okotoks, Airdrie, Cochrane, and Chestermere."
            },
            {
              q: "Can I combine softscaping with fencing or other work?",
              a: "Absolutely. A lot of our clients combine sod installation or garden beds with a new fence install. We coordinate the work so trades are not tripping over each other and the yard gets done in one clean project."
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
                  "name": "What time of year is best for softscaping in Calgary?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Spring and early fall are ideal for most planting and sod installation. Cooler temperatures help roots establish before the stress of summer heat or winter freeze."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What kind of sod do you use?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We use Kentucky Bluegrass, which is the most common and reliable cool-season turf grass for Calgary."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you do the soil prep or is that extra?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Soil prep is part of every install. We grade the area, remove debris, bring in topsoil where needed, and make sure drainage is correct before anything goes down."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you service Okotoks, Airdrie, Cochrane, and Chestermere?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We serve all of Calgary and the surrounding communities including Okotoks, Airdrie, Cochrane, and Chestermere."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I combine softscaping with fencing or other work?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. A lot of our clients combine sod installation or garden beds with a new fence install."
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
