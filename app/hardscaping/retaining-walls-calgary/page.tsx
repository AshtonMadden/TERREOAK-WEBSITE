"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Section, ScrollReveal } from "../../components/UI";
import PremiumHero from "../../components/PremiumHero";
import TrustBar from "../../components/TrustBar";
import TestimonialSection from "../../components/TestimonialSection";
import JobberLeadForm from "../../components/JobberLeadForm";
import OurBlogSection from "../../components/OurBlogSection";

export default function RetainingWallsCalgaryPage() {
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
      q: "How much does a retaining wall cost in Calgary?",
      a: "Most residential retaining walls in Calgary run roughly $45 to $90 per face square foot installed. The spread comes down to wall height, length, the block or stone you choose, how much drainage and base work is needed, and whether the wall needs engineering. We give you an itemized quote after a free site visit.",
    },
    {
      q: "Do I need a permit for a retaining wall in Calgary?",
      a: "Retaining walls over 1.2 metres generally require a permit, and walls over 1.5 metres also require engineered drawings. Shorter walls usually do not. We flag any permit or engineering requirements during the quote so you know what is needed before the work starts.",
    },
    {
      q: "What materials do you build retaining walls from?",
      a: "We build with interlocking concrete block, natural stone, and armour or boulder stone, chosen to suit the height, the load, and the look you are after. Each option has a place depending on the slope and the job.",
    },
    {
      q: "Why do retaining walls fail?",
      a: "Almost always drainage. Water builds up behind a wall, freezes, and pushes it out. The fix is drainage gravel, a perforated drain pipe, and geogrid reinforcement where the height calls for it, all set on a properly compacted base. That is standard on every wall we build.",
    },
    {
      q: "Can a retaining wall create usable space in a sloped yard?",
      a: "Yes, that is often the whole point. A well-placed wall turns a steep, unusable grade into a flat, usable area for a patio, lawn, or garden, and controls erosion at the same time.",
    },
    {
      q: "Do you serve Okotoks, Airdrie, Cochrane, and Chestermere?",
      a: "Yes. We build retaining walls across all of Calgary and the surrounding communities including Okotoks, Airdrie, Cochrane, and Chestermere.",
    },
  ];

  return (
    <main className="bg-white text-black">
      <PremiumHero
        title={
          <>
            RETAINING WALLS CALGARY
            <br />
            <span className="text-[#01fa6d] font-lora italic font-black tracking-normal uppercase">
              BUILT &amp; DRAINED TO LAST.
            </span>
          </>
        }
        description="Interlocking block and natural stone retaining walls built with the drainage and base work that keeps Calgary slopes from heaving or failing."
        backgroundImage="/Landscape web page pics/Calgary-hardscaping.JPG"
        badgeLabel="Hardscaping • Calgary"
        ctaText="REQUEST A PROPOSAL"
        onCtaClick={scrollToForm}
      />

      <TrustBar />

      {/* INTRO */}
      <Section title="Retaining Walls in Calgary" titleClassName="text-[#017a6d]" wrapperClassName="bg-white">
        <div className="max-w-3xl text-lg text-black/80 leading-relaxed font-medium">
          <ScrollReveal>
            <p className="mb-6">
              A retaining wall in Calgary is often the difference between a steep, unusable slope and a flat
              yard you can actually use. We build retaining walls with interlocking concrete block, natural
              stone, and boulder stone for homeowners across Calgary, Okotoks, Airdrie, Cochrane, and Chestermere.
            </p>
            <p className="font-bold text-[#017a6d]">
              Proper drainage behind every wall is not optional. It is what keeps the wall standing through
              Calgary&rsquo;s freeze-thaw winters.
            </p>
          </ScrollReveal>
        </div>
      </Section>

      {/* WHEN YOU NEED ONE */}
      <Section title="When You Need a Retaining Wall" titleClassName="text-[#017a6d]" wrapperClassName="bg-gray-50 border-y border-black/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Reclaim a Sloped Yard", desc: "Turn a steep, hard-to-use grade into a flat, usable area for a patio, lawn, or garden." },
            { title: "Control Erosion", desc: "Hold back soil that would otherwise wash or slump downhill and undermine the yard over time." },
            { title: "Create Level Terraces", desc: "Step a slope into tiers that are easier to plant, maintain, and build on." },
            { title: "Define Grade Changes", desc: "Clean, intentional transitions between a driveway, patio, lawn, and garden beds." },
            { title: "Protect Structures", desc: "Keep soil and water pressure away from foundations, decks, and walkways." },
            { title: "Raised Beds & Features", desc: "Built-in planters and seat walls that double as retaining structures." },
          ].map((s, i) => (
            <ScrollReveal key={i} className="bg-white rounded-3xl p-8 shadow-md border border-black/5 hover:-translate-y-2 transition-all">
              <h3 className="text-xl font-black text-black mb-3 leading-tight">{s.title}</h3>
              <p className="text-black/70 font-medium leading-relaxed">{s.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* MATERIALS */}
      <Section title="Materials &amp; Wall Types" titleClassName="text-[#017a6d]" wrapperClassName="bg-white">
        <div className="max-w-3xl text-lg text-black/80 leading-relaxed font-medium">
          <ScrollReveal>
            <p className="mb-6">
              <strong>Interlocking concrete block</strong> is the workhorse for most residential walls, clean,
              consistent, and available in finishes that suit modern and traditional homes. <strong>Natural
              stone</strong> gives an organic, high-end look. <strong>Armour and boulder stone</strong> suit
              larger grade changes and a rugged, natural feel.
            </p>
            <p className="font-medium">
              We spec the material and the wall type to the height, the load behind it, and the look you want,
              then show you the options before we start.
            </p>
          </ScrollReveal>
        </div>
      </Section>

      {/* DRAINAGE & BASE */}
      <Section
        wrapperClassName="bg-[#2c2d32]"
        title="Why Drainage &amp; Base Decide If a Wall Lasts"
        titleClassName="text-[#01fa6d]"
        image={<Image src="/Landscape web page pics/how-drainage-works.jpg" alt="How drainage and base work keeps a Calgary retaining wall standing" fill className="object-contain p-2 bg-white" />}
        imageRight
      >
        <div className="max-w-xl">
          <ScrollReveal>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-medium mb-6">
              A retaining wall fails from behind, not from the front. Water builds up in the soil, freezes,
              expands, and pushes the wall out.
            </p>
            <p className="text-lg text-white/80 leading-relaxed font-medium mb-6">
              We build every wall on a compacted base and back it with drainage gravel and a perforated drain
              pipe so water has somewhere to go. For taller walls we add geogrid reinforcement that ties the
              wall back into the soil behind it.
            </p>
            <p className="text-lg text-[#01fa6d] leading-relaxed font-bold">
              That hidden work is exactly what separates a wall that stands for decades from one that leans
              after a couple of winters.
            </p>
          </ScrollReveal>
        </div>
      </Section>

      {/* PERMITS & ENGINEERING */}
      <Section title="Permits &amp; Engineering" titleClassName="text-[#017a6d]" wrapperClassName="bg-gray-50 border-y border-black/5">
        <div className="max-w-3xl text-lg text-black/80 leading-relaxed font-medium">
          <ScrollReveal>
            <p className="mb-6">
              In Calgary, retaining walls over <strong>1.2 metres</strong> generally require a permit, and walls
              over <strong>1.5 metres</strong> also require engineered drawings. Shorter walls usually do not.
            </p>
            <p className="font-bold text-[#017a6d]">
              We flag any permit and engineering requirements during the quote, so you know exactly what is
              needed before the work starts, with no surprises partway through.
            </p>
          </ScrollReveal>
        </div>
      </Section>

      {/* COST */}
      <Section title="What a Retaining Wall Costs in Calgary" titleClassName="text-[#017a6d]" wrapperClassName="bg-white">
        <div className="max-w-3xl text-lg text-black/80 leading-relaxed font-medium">
          <ScrollReveal>
            <p className="mb-6">
              Most residential retaining walls in Calgary run roughly <strong>$45 to $90 per face square foot
              installed</strong>. Height drives it most, taller walls need more base, drainage, reinforcement,
              and sometimes engineering, followed by the material and the length of the run.
            </p>
            <button onClick={scrollToForm} className="inline-flex items-center justify-center rounded-lg bg-[#01fa6d] px-10 py-4 text-sm font-black text-black hover:opacity-90 transition-all transform hover:-translate-y-1 shadow-lg cursor-pointer">
              GET AN ITEMIZED QUOTE
            </button>
          </ScrollReveal>
        </div>
      </Section>

      {/* RELATED */}
      <Section title="Related Hardscaping" titleClassName="text-[#017a6d]" wrapperClassName="bg-gray-50 border-y border-black/5">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Hardscaping Overview", href: "/hardscaping", desc: "Patios, steps, grading, and more." },
            { title: "Paving Stones Calgary", href: "/hardscaping/paving-stones-calgary", desc: "Patios, walkways, and driveways." },
            { title: "Softscaping & Planting", href: "/softscapes", desc: "Sod, garden beds, and planting." },
          ].map((r, i) => (
            <Link key={i} href={r.href} className="block bg-white rounded-3xl p-8 border border-black/5 hover:-translate-y-2 transition-all">
              <h3 className="text-xl font-black text-black mb-2 leading-tight">{r.title}</h3>
              <p className="text-black/70 font-medium leading-relaxed">{r.desc}</p>
            </Link>
          ))}
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
      <Section id="seasonal-form" title="Get a Retaining Wall Proposal" titleClassName="text-[#017a6d]" wrapperClassName="bg-white">
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
