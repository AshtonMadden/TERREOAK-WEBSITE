"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Section, ScrollReveal } from "../components/UI";
import OurBlogSection from "../components/OurBlogSection";
import GoogleReviewBadge from "../components/GoogleReviewBadge";
import PremiumHero from "../components/PremiumHero";
import TrustBar from "../components/TrustBar";
import TestimonialSection from "../components/TestimonialSection";

export default function OurProcessPage() {
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
        title={<>CALGARY LANDSCAPING<br />OUR PROCESS<br /><span className="text-[#01fa6d]">How we build it.</span></>}
        description="Getting your yard done right starts long before we pick up a shovel. We believe in clear communication, meticulous planning, and zero surprises. From the initial consultation to the final walkthrough, discover how TERREOAK guarantees a seamless landscape construction experience in Calgary."
        backgroundImage="/Landscape web page pics/lawn-relevel-calgary.JPG"
        badgeLabel="Landscaping • Calgary"
        ctaText="REQUEST QUOTE"
        ctaHref="/landscape-installs"
      />

      <TrustBar />

      {/* CONTENT */}
      <Section title="How We Work" titleClassName="text-[#017a6d]" wrapperClassName="bg-gray-50 border-y border-black/5">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-xl md:text-2xl text-black/80 font-medium mb-16 text-center max-w-3xl mx-auto leading-relaxed">
              Getting your yard done right starts long before we pick up a shovel. Here’s what working with TERREOAK looks like from first contact to final walkthrough.
            </p>
          </ScrollReveal>
            
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { step: 1, title: "Initial Consultation", desc: "It starts with a conversation. When you reach out, we’ll ask about your project goals, timeline, and budget to make sure we’re a good fit before anyone commits to anything. From there, we’ll schedule a site walk to see the space in person." },
              { step: 2, title: "Quote & Agreement", desc: "After the site walk, we put together a detailed quote in our client portal with everything laid out clearly — scope, materials, and pricing. Your service agreement is attached and accepted alongside the quote, so there’s no paperwork chasing. Most projects run on a payment schedule with a deposit required to secure your spot on the schedule." },
              { step: 3, title: "Design & Revisions", desc: "If your project includes a 3D landscape design, that’s available as an add-on. Once we’re aligned on plants and materials, we finalize everything — attaching material photos and the design to your quote so you know exactly what you’re getting. We offer up to two revisions to make sure it’s right before we move forward." },
              { step: 4, title: "Scheduling & Installation", desc: "Once the quote is accepted and deposit received, your project gets booked. On site, we treat every yard like it’s our own — working methodically and holding ourselves to the same standard regardless of project size." },
              { step: 5, title: "Final Walkthrough & Completion", desc: "When the work is done, we walk the property with you to make sure you’re happy with everything. Then we clean up the site, document the finished project with photos, and collect the final payment." },
              { step: 6, title: "Warranty", desc: "We stand behind our work. TERREOAK provides a one-year workmanship warranty — if anything we installed fails due to our work, we’ll come back and make it right at no charge. Plant warranty follows what the nursery provides, which we’ll communicate clearly upfront." },
            ].map((item, i) => (
              <ScrollReveal 
                key={i} 
                className="bg-white p-8 rounded-3xl shadow-lg border border-black/5 flex flex-col hover:-translate-y-1 transition-transform h-full"
              >
                <div className="text-6xl font-black text-[#01fa6d]/30 tracking-tighter mb-4">0{item.step}</div>
                <h3 className="text-xl font-black mb-3 text-black uppercase">{item.title}</h3>
                <p className="text-black/70 text-base leading-relaxed font-medium">{item.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section kicker="Support" title="Process FAQ" titleClassName="text-[#017a6d]" wrapperClassName="bg-gray-50 border-y border-black/5">
        <div className="mt-12 max-w-4xl mx-auto space-y-4">
          {[
            {
              q: "How long does the initial consultation take?",
              a: "Our site walks typically take 30 to 45 minutes. We’ll measure the space, discuss your goals, and answer any questions you have about materials, budget, and timeline."
            },
            {
              q: "Do you offer design-only services?",
              a: "Yes! While most of our clients hire us for the full design-and-build, we do offer 3D landscape design and blueprinting as a standalone service if you prefer to DIY or use another contractor."
            },
            {
              q: "How does the payment schedule work?",
              a: "We require a deposit to secure your spot on our schedule and purchase initial materials. The remaining balance is broken down into milestone payments, with the final payment only due upon completion of the final walkthrough."
            },
            {
              q: "What does your workmanship warranty cover?",
              a: "TERREOAK provides a comprehensive one-year workmanship warranty. If any hardscape settles or any element fails due to improper installation, we will come back and fix it at no cost to you."
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

      {/* TESTIMONIALS */}
      <TestimonialSection
        kicker="Client Feedback"
        title="What Our Clients Say About The Process"
        testimonials={[
          {
            name: "Mark D.",
            role: "Full Backyard Build",
            text: "The process was completely stress-free. TERREOAK gave us a detailed quote, stuck to the schedule, and handled the entire build flawlessly. Walking the finished yard with them was amazing—no surprises, just beautiful work."
          },
          {
            name: "Jessica P.",
            role: "Landscape Design",
            text: "What impressed me most was their communication. Every step of the way, from the initial consultation to the 3D revisions, they were transparent and responsive. We knew exactly what we were getting and exactly what it would cost."
          },
          {
            name: "Robert W.",
            role: "Front Yard Renovation",
            text: "I've worked with a lot of contractors, but TERREOAK's professionalism stands out. They showed up when they said they would, kept a meticulously clean job site, and stood strictly by their one-year warranty."
          }
        ]}
      />

      {/* FINAL CTA */}
      <section className="py-24 bg-[#017a6d] text-center text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-8">Ready to bring your yard to life?</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12 font-bold italic">
            Book a consultation today. Our landscape crews fill up fast for the Calgary spring and summer season.
          </p>
          <Link
            href="/landscape-installs"
            className="inline-flex items-center justify-center rounded-full bg-white px-12 py-[16px] text-[18px] font-black text-[#017a6d] hover:bg-gray-100 transition-all shadow-2xl hover:-translate-y-1 cursor-pointer"
          >
            REQUEST AN ESTIMATE
          </Link>
        </div>
      </section>

      {/* BLOG */}
      <OurBlogSection />
      
      {isCtaVisible && (
        <div style={styles.stickyCtaContainer} className="stickyCtaWrapper animate-float-up">
          <Link
            href="/landscape-installs"
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
