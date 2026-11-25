"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Section, ScrollReveal } from "../components/UI";
import PremiumHero from "../components/PremiumHero";
import TrustBar from "../components/TrustBar";
import TestimonialSection from "../components/TestimonialSection";
import JobberLeadForm from "../components/JobberLeadForm";
import OurBlogSection from "../components/OurBlogSection";

export default function LandscapeLightingCalgaryPage() {
  const [isCtaVisible, setIsCtaVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsCtaVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () =>
    document.getElementById("seasonal-form")?.scrollIntoView({ behavior: "smooth" });

  const faqs = [
    {
      q: "What does outdoor lighting cost in Calgary?",
      a: "Most residential landscape-lighting projects in Calgary start around $1,500 to $2,500 for a modest low-voltage system and scale up with the number of fixtures, transformer size, the amount of trenching, and smart controls. We give you an itemized quote after a site visit.",
    },
    {
      q: "What is low-voltage landscape lighting?",
      a: "A safe 12-volt system run off a transformer, rather than full 120-volt line power. It uses long-life LED fixtures, is safer to work around in a garden, and is easy to adjust or expand later.",
    },
    {
      q: "Can lighting be added to an existing yard, or only during a build?",
      a: "Both. We can design and install low-voltage lighting in a finished yard, and we can also run conduit and wiring during a patio or retaining-wall build so the fixtures are integrated cleanly with no retrofitting.",
    },
    {
      q: "Does outdoor lighting hold up through Calgary winters?",
      a: "Yes. We install fixtures and connections rated for outdoor and freeze-thaw conditions, and low-voltage LED systems run efficiently year-round, including through the dark Calgary winter months when you get the most use out of them.",
    },
    {
      q: "Can you put the lights on a timer or app control?",
      a: "Yes. We set systems up with photocells, timers, or smart controls so your lighting comes on at dusk or on a schedule without you thinking about it.",
    },
    {
      q: "Do you serve Okotoks, Airdrie, Cochrane, and Chestermere?",
      a: "Yes. We install landscape and outdoor lighting across all of Calgary and the surrounding communities including Okotoks, Airdrie, Cochrane, and Chestermere.",
    },
  ];

  return (
    <main className="bg-white text-black">
      <PremiumHero
        title={
          <>
            LANDSCAPE LIGHTING CALGARY
            <br />
            <span className="text-[#01fa6d] font-lora italic font-black tracking-normal uppercase">
              OUTDOOR LED, DESIGNED &amp; INSTALLED.
            </span>
          </>
        }
        description="Low-voltage landscape and outdoor lighting in Calgary: pathways, patios, trees, and walls, lit to use your yard year-round."
        backgroundImage="/Calgary-landscape-design-build-patio.JPG"
        badgeLabel="Outdoor Lighting • Calgary"
        ctaText="REQUEST A PROPOSAL"
        onCtaClick={scrollToForm}
      />

      <TrustBar />

      {/* INTRO */}
      <Section title="Landscape &amp; Outdoor Lighting in Calgary" titleClassName="text-[#017a6d]" wrapperClassName="bg-white">
        <div className="max-w-3xl text-lg text-black/80 leading-relaxed font-medium">
          <ScrollReveal>
            <p className="mb-6">
              Landscape lighting in Calgary turns a yard you only use in daylight into one you enjoy in the
              evening, and makes paths, steps, and entries safer after dark. We design and install low-voltage
              LED lighting for homeowners across Calgary, Okotoks, Airdrie, Cochrane, and Chestermere.
            </p>
            <p className="font-bold text-[#017a6d]">
              In a city where winter nights are long, good outdoor lighting is some of the best use you&rsquo;ll
              get out of your yard.
            </p>
          </ScrollReveal>
        </div>
      </Section>

      {/* WHAT WE LIGHT */}
      <Section title="What We Light" titleClassName="text-[#017a6d]" wrapperClassName="bg-gray-50 border-y border-black/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Pathways & Steps", desc: "Soft, even light along walkways and stairs so they are safe and inviting after dark." },
            { title: "Patios & Entertaining Areas", desc: "Warm ambient lighting that makes a patio usable into the evening." },
            { title: "Retaining Walls & Hardscape", desc: "Fixtures set into walls, caps, and steps for a clean, built-in look." },
            { title: "Trees & Planting", desc: "Uplighting and accent lighting that highlights mature trees and feature plantings." },
            { title: "Entries & Driveways", desc: "Welcoming, secure lighting at the front of the home and along the drive." },
            { title: "Feature & Accent Lighting", desc: "Water features, columns, and focal points picked out after dark." },
          ].map((s, i) => (
            <ScrollReveal key={i} className="bg-white rounded-3xl p-8 shadow-md border border-black/5 hover:-translate-y-2 transition-all">
              <h3 className="text-xl font-black text-black mb-3 leading-tight">{s.title}</h3>
              <p className="text-black/70 font-medium leading-relaxed">{s.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* LOW VOLTAGE LED */}
      <Section title="Low-Voltage LED Systems" titleClassName="text-[#017a6d]" wrapperClassName="bg-white">
        <div className="max-w-3xl text-lg text-black/80 leading-relaxed font-medium">
          <ScrollReveal>
            <p className="mb-6">
              We install low-voltage (12-volt) LED systems: safe to work around in a garden, efficient to run,
              and long-lasting. A properly sized transformer powers the run, and fixtures and connections are
              rated for Calgary&rsquo;s outdoor and freeze-thaw conditions.
            </p>
            <p className="font-medium">
              We set the system up with photocells, timers, or smart controls so it comes on at dusk or on a
              schedule, and it is easy to adjust or expand down the road.
            </p>
          </ScrollReveal>
        </div>
      </Section>

      {/* WIRED DURING THE BUILD */}
      <Section title="Lighting Built Into Your Hardscape" titleClassName="text-[#017a6d]" wrapperClassName="bg-gray-50 border-y border-black/5">
        <div className="max-w-3xl text-lg text-black/80 leading-relaxed font-medium">
          <ScrollReveal>
            <p className="mb-6">
              Because we also build the patios, walkways, and retaining walls, we can run conduit and wiring
              <strong> while the hardscape goes in</strong>, not after. That means lights set cleanly into steps,
              walls, and caps, with no cords, no surface-run wire, and no tearing anything up later.
            </p>
            <p className="font-medium">
              Planning a patio or wall? It is the ideal time to design the lighting in from the start.{" "}
              <Link href="/hardscaping" className="text-[#017a6d] font-black underline">See our hardscaping</Link>.
            </p>
          </ScrollReveal>
        </div>
      </Section>

      {/* COST */}
      <Section title="What Outdoor Lighting Costs in Calgary" titleClassName="text-[#017a6d]" wrapperClassName="bg-white">
        <div className="max-w-3xl text-lg text-black/80 leading-relaxed font-medium">
          <ScrollReveal>
            <p className="mb-6">
              A modest low-voltage system typically starts around <strong>$1,500 to $2,500</strong>, and scales
              with the number of fixtures, transformer size, how much trenching the layout needs, and any smart
              controls. Running the wiring during a hardscape build keeps that cost down.
            </p>
            <button onClick={scrollToForm} className="inline-flex items-center justify-center rounded-lg bg-[#01fa6d] px-10 py-4 text-sm font-black text-black hover:opacity-90 transition-all transform hover:-translate-y-1 shadow-lg cursor-pointer">
              GET A LIGHTING QUOTE
            </button>
          </ScrollReveal>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <TestimonialSection
        kicker="5.0 on Google. Owner-operated. Every job documented with photos."
        title="What Calgary Homeowners Are Saying"
        testimonials={[
          { name: "Brian Williamson", role: "Walking Path Repair & Landscaping", text: "I was looking for a landscape company to repair a walking path. Ashton from TERREOAK answered immediately and we booked a site visit. He provided several options, samples, and photos. We were pleased with the finished product and the way he handled the process and kept us informed throughout." },
          { name: "Linda Hayes Conradson", role: "Yard Cleanup & Softscaping", text: "I recently used TERREOAK for yard cleanup and was extremely happy with the quality of work and how courteous and considerate the onsite team was. Email communications were friendly, helpful and received quickly. Thank you to Ashton and his team. Would highly recommend!" },
          { name: "Chris Leech", role: "Lawn Care & Aeration", text: "Got these guys in to aerate my lawn for the first time. Could not be happier. Ashton and his crew did a tremendous job. They reply quickly and get the job booked and done fast. Always great to deal with a local business that actually replies." },
        ]}
      />

      {/* LEAD FORM */}
      <Section id="seasonal-form" title="Get a Lighting Proposal" titleClassName="text-[#017a6d]" wrapperClassName="bg-white">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-xl font-bold text-black/80">Fill out the form below and our team will get back to you with a detailed proposal.</p>
        </div>
        <div className="max-w-4xl mx-auto w-full">
          <JobberLeadForm
            clienthubId="41b3399e-3795-43d8-afe2-e6c38c1b3e6e-2235504"
            formUrl="https://clienthub.getjobber.com/client_hubs/41b3399e-3795-43d8-afe2-e6c38c1b3e6e/public/work_request/embedded_work_request_form?form_id=2235504"
          />
        </div>
      </Section>

      <OurBlogSection />

      {/* FAQ */}
      <Section title="Common Questions" titleClassName="text-[#017a6d]" wrapperClassName="bg-gray-50 border-y border-black/5">
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group bg-white rounded-xl border border-black/5 overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-black text-lg hover:bg-gray-50 transition-colors">
                {faq.q}
                <span className="w-8 h-8 rounded-full bg-[#017a6d]/5 flex items-center justify-center group-open:rotate-45 transition-transform text-[#017a6d]">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </summary>
              <div className="p-6 pt-0 text-black/60 leading-relaxed border-t border-black/5 bg-gray-50/30">{faq.a}</div>
            </details>
          ))}
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
      </Section>

      {isCtaVisible && (
        <div style={styles.stickyCtaContainer} className="animate-float-up">
          <Link href="#seasonal-form" style={styles.stickyCtaLink} className="cursor-pointer">
            START MY PROJECT
          </Link>
          <button onClick={() => setIsCtaVisible(false)} style={styles.closeSticky} aria-label="Close">✕</button>
        </div>
      )}
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  stickyCtaContainer: { position: "fixed", bottom: "24px", zIndex: 1000, display: "flex", alignItems: "center", background: "#01fa6d", borderRadius: "999px", padding: "4px", boxShadow: "0 4px 24px rgba(0,0,0,0.3)", width: "fit-content", left: 0, right: 0, margin: "0 auto" },
  stickyCtaLink: { color: "#000", padding: "12px 32px", fontWeight: 800, fontSize: "18px", textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center", whiteSpace: "nowrap" },
  closeSticky: { background: "rgba(0,0,0,0.1)", color: "#000", border: "none", borderRadius: "50%", width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: "14px", fontWeight: 900, marginRight: "4px" },
};
