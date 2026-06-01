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
        title={<>CALGARY PREMIUM HARDSCAPING<br /><span className="text-[#01fa6d]">Built to Last.</span></>}
        description="Expertly installed stone patios, retaining walls, walkways, and driveways built to withstand Calgary's harsh freeze-thaw cycles."
        backgroundImage="/Landscape web page pics/Calgary-hardscaping.JPG"
        badgeLabel="Landscaping • Calgary"
        ctaText="REQUEST QUOTE"
        ctaHref="/landscape-installs"
      />
      
      <TrustBar />

      {/* CONTENT */}
      <Section title="Built to Last" titleClassName="text-[#017a6d]">
        <div className="max-w-4xl text-lg text-black/80 leading-relaxed font-normal mb-12">
          <ScrollReveal>
            <p className="mb-6">
              Hardscaping forms the foundation of your outdoor living area. From engineered retaining walls and custom Techo-Bloc paving stone patios to exposed aggregate concrete pathways, our hardscaping services are designed to withstand Alberta’s freeze-thaw cycles. We utilize premium open-grade base preparations to ensure maximum drainage and zero frost-heaving. Pair your new structural elements with our expert <Link href="/softscapes" className="text-[#01fa6d] font-bold hover:underline transition-colors bg-[#017a6d] px-1 rounded">softscape installation Calgary</Link> services to complete your total yard transformation.
            </p>
          </ScrollReveal>
        </div>
      </Section>

      <Section title="Our Hardscaping Process" titleClassName="text-[#017a6d]" wrapperClassName="bg-gray-50 border-y border-black/5">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-xl md:text-2xl text-black/80 font-medium mb-16 text-center max-w-3xl mx-auto leading-relaxed">
              A lasting hardscape is all about what’s underneath. We follow a strict, proven methodology to ensure your patio, walkway, or retaining wall won't sink or heave.
            </p>
          </ScrollReveal>
            
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: 1, title: "Dig Out Area", desc: "We carefully excavate the designated area to the precise depth required, removing topsoil and unstable organic materials to reach a solid subgrade foundation." },
              { step: 2, title: "Base Prep", desc: "We prepare the subgrade, heavily compacting the soil and installing a durable, high-quality geotextile fabric to prevent the subsoil from mixing with the aggregate." },
              { step: 3, title: "Open Graded Base", desc: "We use an open graded base for improved drainage and less chance of sinkage. This eliminates trapped water that causes frost heaving during Alberta winters." },
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

      {/* TESTIMONIALS */}
      <TestimonialSection
        testimonials={[
          {
            name: "John S.",
            role: "Patio & Fire Pit Build",
            text: "The interlocking stone patio TERREOAK built for us is incredible. They laid a rock-solid base and the cuts on the paving stones were absolutely flawless. It's the perfect space for hosting in the summer."
          },
          {
            name: "Michael B.",
            role: "Retaining Wall",
            text: "We needed a serious structural retaining wall for our sloped backyard. The team brought in the heavy equipment, engineered it perfectly with Allan Block, and left the rest of the yard completely undisturbed."
          },
          {
            name: "Amanda L.",
            role: "Walkways & Steps",
            text: "They installed beautiful natural stone pathways connecting our front and backyard. The crew was respectful, worked incredibly hard through the heat, and delivered a premium finish that adds massive curb appeal."
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
