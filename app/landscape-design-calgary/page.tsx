"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Section, ScrollReveal } from "../components/UI";
import PremiumHero from "../components/PremiumHero";
import TrustBar from "../components/TrustBar";
import TestimonialSection from "../components/TestimonialSection";
import TeamSection from "../components/TeamSection";
import JobberLeadForm from "../components/JobberLeadForm";
import OurBlogSection from "../components/OurBlogSection";

export default function LandscapeDesignCalgaryPage() {
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
      q: "Do you provide 3D landscape design renders?",
      a: "Yes. We build a 3D design of your yard so you can see the layout, materials, and finished look before any construction starts. It is far easier to make changes on screen than after the base is in the ground.",
    },
    {
      q: "Is landscape design free if you build the project?",
      a: "We charge a design fee for the planning and 3D work, and we credit it toward the project when you move ahead with us on the build. You get a buildable, costed plan either way.",
    },
    {
      q: "How long does the design process take?",
      a: "A typical residential design takes one to two weeks from the site visit to the first 3D concept, depending on the size of the yard and how many revisions we work through together.",
    },
    {
      q: "Can I take the design and build it with someone else?",
      a: "Yes. The plan is yours. That said, most clients choose to build with us because the same team that designed it knows exactly how it is meant to go together and has already costed it realistically.",
    },
    {
      q: "Do you design low-maintenance and xeriscape yards?",
      a: "Absolutely. Low-maintenance, drought-tolerant, and xeriscape designs are some of our most requested, and they suit Calgary's climate well. We design to how you actually want to use and maintain the space.",
    },
    {
      q: "Do you serve Okotoks, Airdrie, Cochrane, and Chestermere?",
      a: "Yes. We design and build landscapes across all of Calgary and the surrounding communities including Okotoks, Airdrie, Cochrane, and Chestermere.",
    },
  ];

  return (
    <main className="bg-white text-black">
      <PremiumHero
        title={
          <>
            LANDSCAPE DESIGN CALGARY
            <br />
            <span className="text-[#01fa6d] font-lora italic font-black tracking-normal uppercase">
              SEE IT IN 3D BEFORE WE BUILD.
            </span>
          </>
        }
        description="3D landscape design from an owner-run design-build team. We design your yard, you see it before it is built, then our crew installs it."
        backgroundImage="/Calgary-landscape-design-build-patio.JPG"
        badgeLabel="Design-Build • Calgary"
        ctaText="BOOK A DESIGN CONSULT"
        onCtaClick={scrollToForm}
      />

      <TrustBar />

      {/* INTRO / WHAT'S INCLUDED */}
      <Section title="Landscape Design in Calgary" titleClassName="text-[#017a6d]" wrapperClassName="bg-white">
        <div className="max-w-3xl text-lg text-black/80 leading-relaxed font-medium">
          <ScrollReveal>
            <p className="mb-6">
              Good landscape design in Calgary starts before a single stone is laid. We handle the site analysis,
              concept, 3D renders, material and plant selection, and a buildable plan with a real budget, so you
              know exactly what you are getting and what it costs.
            </p>
            <p className="font-bold text-[#017a6d]">
              Then, because we are a design-build team, the same crew that drew it builds it.
            </p>
          </ScrollReveal>
        </div>
      </Section>

      {/* 3D PROCESS */}
      <Section
        wrapperClassName="bg-[#2c2d32]"
        title="See Your Yard in 3D First"
        titleClassName="text-[#01fa6d]"
        image={<Image src="/images/design.png" alt="3D landscape design render of a Calgary backyard" fill className="object-cover" />}
        imageRight
      >
        <div className="max-w-xl">
          <ScrollReveal>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-medium mb-6">
              We build a 3D model of your design so you can walk through the layout, materials, and finished look
              before construction starts.
            </p>
            <p className="text-lg text-white/80 leading-relaxed font-medium mb-6">
              It is far cheaper and easier to move a patio, change a paver, or rework a planting bed on screen
              than after it is in the ground. We revise the design with you until it is right.
            </p>
            <p className="text-lg text-[#01fa6d] leading-relaxed font-bold">
              No guessing from a flat sketch. You approve a design you can actually picture.
            </p>
          </ScrollReveal>
        </div>
      </Section>

      {/* DESIGN-BUILD */}
      <Section title="One Team, Plan to Install" titleClassName="text-[#017a6d]" wrapperClassName="bg-white">
        <div className="max-w-3xl text-lg text-black/80 leading-relaxed font-medium mb-10">
          <ScrollReveal>
            <p className="mb-6">
              A design is only as good as the build behind it. Because we design and construct in-house, the plan
              is realistic, costed, and buildable, not a pretty drawing you then have to hand to a separate
              contractor who changes half of it.
            </p>
            <p className="font-medium">Your design can pull in any of our construction services:</p>
          </ScrollReveal>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Landscape Installs", href: "/landscape-installs", desc: "Full yard construction." },
            { title: "Hardscaping", href: "/hardscaping", desc: "Patios, paving stones, retaining walls." },
            { title: "Softscaping", href: "/softscapes", desc: "Sod, garden beds, and planting." },
          ].map((r, i) => (
            <Link key={i} href={r.href} className="block bg-gray-50 rounded-3xl p-8 border border-black/5 hover:-translate-y-2 transition-all">
              <h3 className="text-xl font-black text-black mb-2 leading-tight">{r.title}</h3>
              <p className="text-black/70 font-medium leading-relaxed">{r.desc}</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* STYLES */}
      <Section title="The Styles We Design" titleClassName="text-[#017a6d]" wrapperClassName="bg-gray-50 border-y border-black/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Modern & Clean-Line", desc: "Large-format pavers, crisp borders, and simple planting for a contemporary look." },
            { title: "Naturalistic", desc: "Flagstone, boulders, and layered planting that feels like it grew there." },
            { title: "Low-Maintenance / Xeriscape", desc: "Drought-tolerant, rock-forward designs that suit Calgary's climate and your time." },
            { title: "Family Yards", desc: "Durable, usable spaces with room for kids, pets, and entertaining." },
          ].map((s, i) => (
            <ScrollReveal key={i} className="bg-white rounded-3xl p-8 shadow-md border border-black/5 hover:-translate-y-2 transition-all">
              <h3 className="text-lg font-black text-black mb-3 leading-tight">{s.title}</h3>
              <p className="text-black/70 font-medium leading-relaxed text-sm">{s.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* TEAM */}
      <TeamSection />

      {/* COST */}
      <Section title="What Landscape Design Costs in Calgary" titleClassName="text-[#017a6d]" wrapperClassName="bg-white">
        <div className="max-w-3xl text-lg text-black/80 leading-relaxed font-medium">
          <ScrollReveal>
            <p className="mb-6">
              Design fees depend on the size of the yard and the depth of the plan, but a typical residential
              3D design and plan runs a few hundred dollars, and we credit it toward your project when you build
              with us. You walk away with a costed, buildable plan either way.
            </p>
            <button onClick={scrollToForm} className="inline-flex items-center justify-center rounded-lg bg-[#01fa6d] px-10 py-4 text-sm font-black text-black hover:opacity-90 transition-all transform hover:-translate-y-1 shadow-lg cursor-pointer">
              BOOK A DESIGN CONSULT
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
      <Section id="seasonal-form" title="Book a Design Consultation" titleClassName="text-[#017a6d]" wrapperClassName="bg-white">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-xl font-bold text-black/80">Tell us about your yard and our team will get back to you to book a design consultation.</p>
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
            START MY DESIGN
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
