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

export default function PavingStonesCalgaryPage() {
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
      q: "How much do paving stones cost in Calgary?",
      a: "Most paving-stone patios and walkways in Calgary land between roughly $25 and $45 per square foot installed, depending on the paver, the amount of excavation and base work, site access, and any grading or drainage. We give you an itemized quote after a free site visit so you see exactly what drives the number.",
    },
    {
      q: "What paving stones hold up best in Calgary's climate?",
      a: "Interlocking concrete pavers and natural stone handle Calgary's freeze-thaw cycles better than poured concrete because they flex with ground movement and individual stones can be re-leveled if needed. We install Techo-Bloc and similar premium pavers, plus flagstone where the look calls for it.",
    },
    {
      q: "Do paving stone patios need a permit in Calgary?",
      a: "Most at-grade paving-stone patios and walkways do not require a permit. If the project ties into a retaining wall over 1.2 metres or changes drainage significantly, we flag any permit requirements during the quote so there are no surprises.",
    },
    {
      q: "Why do paving stones shift, sink, or heave?",
      a: "Almost always inadequate base depth or poor drainage when they were first installed. Water gets under the surface, freezes, and pushes stones out of place. The fix is proper excavation, a compacted gravel base, and correct grading, which is where we start on every install.",
    },
    {
      q: "Can you repair or re-level existing pavers?",
      a: "Yes. We re-lay settled or heaved sections and, where the original base was built short, rebuild the base properly so the repair actually lasts. We will tell you honestly whether a spot repair or a full reinstall is the better long-term call.",
    },
    {
      q: "Do you serve Okotoks, Airdrie, Cochrane, and Chestermere?",
      a: "Yes. We install paving stones across all of Calgary and the surrounding communities including Okotoks, Airdrie, Cochrane, and Chestermere.",
    },
  ];

  return (
    <main className="bg-white text-black">
      <PremiumHero
        title={
          <>
            PAVING STONES CALGARY
            <br />
            <span className="text-[#01fa6d] font-lora italic font-black tracking-normal uppercase">
              PATIOS, WALKWAYS &amp; DRIVEWAYS.
            </span>
          </>
        }
        description="Paving-stone patios, walkways, and driveways installed on a compacted base that keeps them level through Calgary's freeze-thaw winters."
        backgroundImage="/Landscape web page pics/Techo-Bloc-paver-pathway.JPG"
        badgeLabel="Hardscaping • Calgary"
        ctaText="REQUEST A PROPOSAL"
        onCtaClick={scrollToForm}
      />

      <TrustBar />

      {/* INTRO */}
      <Section title="Paving Stone Installation in Calgary" titleClassName="text-[#017a6d]" wrapperClassName="bg-white">
        <div className="max-w-3xl text-lg text-black/80 leading-relaxed font-medium">
          <ScrollReveal>
            <p className="mb-6">
              Paving stones in Calgary turn a plain yard into a patio, walkway, or driveway you actually use.
              We install interlocking concrete pavers, large-format Techo-Bloc, and natural flagstone for
              homeowners across Calgary, Okotoks, Airdrie, Cochrane, and Chestermere.
            </p>
            <p className="font-bold text-[#017a6d]">
              The look on top matters. What keeps it level for a decade is the base work underneath, and that
              is where we never cut corners.
            </p>
          </ScrollReveal>
        </div>
      </Section>

      {/* WHAT WE INSTALL */}
      <Section title="What We Install" titleClassName="text-[#017a6d]" wrapperClassName="bg-gray-50 border-y border-black/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Paving Stone Patios", desc: "Interlocking concrete pavers, large-format Techo-Bloc, and natural stone patios built for backyards, front entries, and side yards." },
            { title: "Walkways & Pathways", desc: "Paver and flagstone walkways that connect your yard, add curb appeal, and stay flat after a few winters instead of becoming a trip hazard." },
            { title: "Paver Driveways", desc: "Heavy-duty paving-stone driveways and parking pads installed on a reinforced base built to carry vehicle loads." },
            { title: "Flagstone", desc: "Natural flagstone patios, steppers, and borders for a softer, organic look that still handles Calgary's seasonal movement." },
            { title: "Steps & Landings", desc: "Paver and stone steps that tie into your patio or walkway and hold up under seasonal ground movement." },
            { title: "Paver Repair & Re-Leveling", desc: "Settled or heaved pavers re-laid on a properly rebuilt base so the fix actually lasts rather than shifting again." },
          ].map((s, i) => (
            <ScrollReveal key={i} className="bg-white rounded-3xl p-8 shadow-md border border-black/5 hover:-translate-y-2 transition-all">
              <h3 className="text-xl font-black text-black mb-3 leading-tight">{s.title}</h3>
              <p className="text-black/70 font-medium leading-relaxed">{s.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* MATERIALS */}
      <Section
        wrapperClassName="bg-[#2c2d32]"
        title="The Paving Stones We Use"
        titleClassName="text-[#01fa6d]"
        image={<Image src="/Landscape web page pics/Techo-Bloc-pavers-river-rock.JPG" alt="Techo-Bloc paving stones bordered with washed river rock in Calgary" fill className="object-cover" />}
        imageRight
      >
        <div className="max-w-xl">
          <ScrollReveal>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-medium mb-6">
              We install premium interlocking pavers like Techo-Bloc Blu 60 Grande, natural stone, and
              flagstone, chosen to suit the look of your home and the way the space gets used.
            </p>
            <p className="text-lg text-white/80 leading-relaxed font-medium mb-6">
              Large-format pavers give a clean, modern surface with fewer joints. Flagstone reads more natural.
              Both are bordered and finished cleanly, often with washed river rock, for a low-maintenance result.
            </p>
            <p className="text-lg text-[#01fa6d] leading-relaxed font-bold">
              Whatever is on top, we spec the paver and the pattern with you before anything goes in the ground.
            </p>
          </ScrollReveal>
        </div>
      </Section>

      {/* HOW WE INSTALL */}
      <Section title="How We Install Paving Stones to Last" titleClassName="text-[#017a6d]" wrapperClassName="bg-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2 text-lg text-black/80 leading-relaxed font-medium">
            <ScrollReveal>
              <p className="mb-6">
                A paving-stone surface is only as good as what is under it. We excavate to the right depth,
                lay and compact a proper gravel base, screed a bedding layer, then set, cut, and compact the
                pavers before locking the joints with polymeric sand.
              </p>
              <p className="mb-6">
                Grading is set so water runs away from your home, and edge restraints keep the stones from
                spreading. In Calgary that base and drainage work is the difference between a patio that looks
                the same in year five and one you are calling someone to fix after two winters.
              </p>
              <p className="font-bold text-[#017a6d]">
                Serving Calgary and surrounding communities including Okotoks, Airdrie, Cochrane, and Chestermere.
              </p>
            </ScrollReveal>
          </div>
          <div className="w-full lg:w-1/2">
            <ScrollReveal>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-black/5 bg-gray-50">
                <Image src="/Landscape web page pics/base-prep-paverpath.JPG" alt="Compacted gravel base preparation for a paving stone pathway in Calgary" fill className="object-cover" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* COST */}
      <Section title="What a Paving Stone Patio Costs in Calgary" titleClassName="text-[#017a6d]" wrapperClassName="bg-gray-50 border-y border-black/5">
        <div className="max-w-3xl text-lg text-black/80 leading-relaxed font-medium">
          <ScrollReveal>
            <p className="mb-6">
              Most paving-stone patios and walkways in Calgary run roughly <strong>$25 to $45 per square foot
              installed</strong>. The spread comes down to the paver you choose, how much excavation and base
              work the site needs, access for equipment, and any grading, drainage, or steps tied into the job.
            </p>
            <p className="mb-6">
              A small, straightforward patio sits at the lower end. A large driveway or a patio that needs heavy
              excavation and a retaining wall sits higher. We would rather give you an honest, itemized number
              than a vague &ldquo;starting at&rdquo; price.
            </p>
            <button onClick={scrollToForm} className="inline-flex items-center justify-center rounded-lg bg-[#01fa6d] px-10 py-4 text-sm font-black text-black hover:opacity-90 transition-all transform hover:-translate-y-1 shadow-lg cursor-pointer">
              GET AN ITEMIZED QUOTE
            </button>
          </ScrollReveal>
        </div>
      </Section>

      {/* RELATED */}
      <Section title="Related Hardscaping" titleClassName="text-[#017a6d]" wrapperClassName="bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Hardscaping Overview", href: "/hardscaping", desc: "Patios, steps, grading, and more." },
            { title: "Retaining Walls Calgary", href: "/hardscaping/retaining-walls-calgary", desc: "Engineered, drained, built to last." },
            { title: "Softscaping & Planting", href: "/softscapes", desc: "Sod, garden beds, and planting." },
          ].map((r, i) => (
            <Link key={i} href={r.href} className="block bg-gray-50 rounded-3xl p-8 border border-black/5 hover:-translate-y-2 transition-all">
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
      <Section id="seasonal-form" title="Get a Paving Stone Proposal" titleClassName="text-[#017a6d]" wrapperClassName="bg-white">
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
