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

export default function ExcavationPage() {
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
        title="Excavation & Base Prep"
        description="A lasting landscape starts with heavy lifting. We handle full-scale land clearing, grading, trenching, and soil removal."
        backgroundImage="/Landscape web page pics/Land-clearing-new-build.JPG"
        badgeLabel="Landscaping • Calgary"
        ctaText="REQUEST QUOTE"
        ctaHref="/landscape-installs"
      />

      <TrustBar />

      {/* CONTENT */}
      <Section title="The Foundation of Your Yard" titleClassName="text-[#017a6d]">
        <div className="max-w-4xl text-lg text-black/80 leading-relaxed font-normal mb-12">
          <ScrollReveal>
            <p className="mb-6">
              A lasting landscape starts with heavy lifting. We handle full-scale land clearing, grading, trenching, and soil removal. Whether we are preparing an infill lot for a new retaining wall or excavating your backyard for a massive paver patio, our crew operates modern equipment to safely and efficiently prepare the earth. Proper base prep guarantees proper drainage and prevents future shifting.
            </p>
          </ScrollReveal>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <TestimonialSection
        testimonials={[
          {
            name: "David K.",
            role: "Full Yard Regrading",
            text: "We struggled with a muddy, unlevel backyard for years. The team at TERREOAK brought in their skid steers, regraded the entire property for proper drainage, and laid new sod. Amazing operators."
          },
          {
            name: "Alex B.",
            role: "Trenching & Utility",
            text: "Needed a deep trench dug for some new electrical lines to our garage. They were in and out in a day, navigated around existing tree roots perfectly, and backfilled it flawlessly."
          },
          {
            name: "Steve M.",
            role: "Concrete Breakout",
            text: "They removed an old, cracked concrete driveway and prepped the base for our new pavers. Heavy equipment work can be nerve-wracking, but their crew was incredibly precise and safe."
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
