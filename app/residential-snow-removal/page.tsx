"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Section, ScrollReveal } from "../components/UI";
import StatsCounter from "./StatsCounter";
import JobberLeadForm from "../components/JobberLeadForm";

export default function ResidentialSnowBlowingPage() {
  const [isCtaVisible, setIsCtaVisible] = useState(false);
  const [isAfterOnTop, setIsAfterOnTop] = useState(false);

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
    const element = document.getElementById("lead-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main>
      {/* HERO (BCM-style: big claim + 2 CTAs) */}
      <section style={styles.hero}>
        <video
          autoPlay
          muted
          loop
          playsInline
          style={styles.videoBackground}
        >
          <source src="/Calgary-snowremoval-drone.mov" type="video/mp4" />
        </video>
        <div style={styles.overlay}></div>

        <div style={styles.heroInner} className="pt-56 pb-24 md:pt-64 md:pb-40">
          <p style={styles.kicker}>Calgary • Residential Snow Removal</p>
          <h1 style={styles.h1} className="md:!text-[72px] uppercase">
            RESIDENTIAL SNOW REMOVAL CALGARY
            <span style={{ opacity: 0.75 }}> — Worry-free all winter.</span>
          </h1>
          <p style={styles.subhead}>
            Unlimited driveway + front sidewalk clearing all season long, with photo logs,
            dispatch alerts, and 12–24 hour service after snowfall ends.{" "}
            <span style={{ opacity: 0.85 }}>
              Built for reliability, not excuses.
            </span>
          </p>

          <div style={styles.ctaRow}>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#017a6d] px-12 py-[10px] text-sm font-extrabold text-white border-2 border-white/10 hover:opacity-90 transition-opacity"
            >
              Sign Up
            </Link>
            <a
              href="tel:+15877077648"
              className="inline-flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm px-12 py-[10px] text-sm font-extrabold text-white border-2 border-white/40 hover:bg-white/20 transition-colors"
            >
              Call Now
            </a>
          </div>

          {/* Trust strip */}
          <div style={styles.trustGrid}>
            <div style={styles.trustCard}>
              <div style={styles.trustTitle}>12–24 hour service</div>
              <div style={styles.trustText}>We clear after snowfall ends.</div>
            </div>
            <div style={styles.trustCard}>
              <div style={styles.trustTitle}>Photo service log</div>
              <div style={styles.trustText}>Time-stamped proof after each visit.</div>
            </div>
            <div style={styles.trustCard}>
              <div style={styles.trustTitle}>Local Calgary team</div>
              <div style={styles.trustText}>Friendly, accountable, insured crews.</div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS COUNTER */}
      <StatsCounter />

      <section style={styles.offerSection}>
        <div style={styles.inner} className="text-center md:text-left">
          <h2 style={{ ...styles.h2, color: "#fff" }} className="w-full">WHAT WE OFFER</h2>
          <p style={{ ...styles.p, color: "rgba(255,255,255,0.8)", marginLeft: "auto", marginRight: "auto" }} className="md:ml-0 md:mr-0">
            Reliable, professional snow management tailored for Calgary homeowners.
          </p>

          <div style={styles.cards3}>
            <div style={styles.offerCard}>
              <h3 style={styles.offerTitle}>Full season coverage</h3>
            </div>
            <div style={styles.offerCard}>
              <h3 style={styles.offerTitle}>Servicing at 1cm</h3>
            </div>
            <div style={styles.offerCard}>
              <h3 style={styles.offerTitle}>Driveway markers</h3>
            </div>
            <div style={styles.offerCard}>
              <h3 style={styles.offerTitle}>Flexible payment options</h3>
            </div>
            <div style={styles.offerCard}>
              <h3 style={styles.offerTitle}>Text or email alerts</h3>
            </div>
            <div style={styles.offerCard}>
              <h3 style={styles.offerTitle}>Photo service log</h3>
            </div>
          </div>
        </div>
      </section>

      {/* BUILT FOR WINTER SECTION */}
      <section style={styles.sectionAlt} className="section-divider">
        <div style={styles.inner}>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div style={{ flex: 1, maxWidth: 800 }}>
              <div className="flex justify-between items-start gap-4">
                <h2 style={{ ...styles.h2, fontSize: 36, lineHeight: 1.2, color: "#017a6d" }} className="flex-1">
                  RESIDENTIAL SNOW REMOVAL IN CALGARY THAT&apos;S BUILT FOR WINTER.
                </h2>
                <div className="md:hidden flex-shrink-0 w-24 animate-pulse-slow pt-2">
                  <Image
                    src="/Snow pass sticker .png"
                    alt="Snow Pass Sticker"
                    width={100}
                    height={100}
                    className="w-full h-auto drop-shadow-lg"
                  />
                </div>
              </div>
              <p style={{ ...styles.p, fontSize: 18, marginTop: 24, color: "#333" }}>
                At TERREOAK Landscaping & Snow, we provide professional snow removal for Calgary homeowners who want a reliable, Hands-off solution for the entire winter season. When snow starts to accumulate, our crews are dispatched through your neighbourhood to keep your driveway, sidewalks and front access clear, safe, and ready to use.
              </p>
              <p style={{ ...styles.p, fontSize: 18, marginTop: 16, color: "#333" }}>
                Our route-based approach to snow removal allows us to deliver consistent service during and after every snowfall, even during the heaviest storms. A seasonal snow removal plan gives you predictable monthly pricing, priority service, and the confidence that your home will be taken care of all winter long.
              </p>
              <div style={{ marginTop: 32 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-[#017a6d] px-10 py-4 text-sm font-black text-white hover:bg-[#01645a] transition-all transform hover:-translate-y-1 shadow-lg"
                >
                  RESERVE SEASON PASS
                </Link>
              </div>
            </div>
            <div className="hidden md:block flex-shrink-0 w-64 md:w-96 animate-pulse-slow">
              <Image
                src="/Snow pass sticker .png"
                alt="Snow Pass Sticker"
                width={400}
                height={400}
                className="w-full h-auto drop-shadow-2xl grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <Section
        kicker="Our Process"
        kickerClassName="text-white/60"
        title="HOW IT WORKS"
        titleClassName="text-white !text-[30.6px] uppercase"
        wrapperClassName="bg-[#2c2d32]"
        hasBorder={false}
      >
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3 mt-12">
          {[
            { step: "01", title: "Sign up for snow pass", desc: "Lock in your spot for the season." },
            { step: "02", title: "We install your picket", desc: "Professional driveway markers for precision clearing." },
            { step: "03", title: "Our team gets to work", desc: "Reliable service whenever it snows." }
          ].map((p, i) => (
            <ScrollReveal key={i} className="group relative">
              <div className="h-full bg-[#017a6d] p-8 rounded-2xl flex flex-col justify-center min-h-[160px] border border-white/5 shadow-xl hover:bg-[#01645a] transition-all transform hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center font-black text-sm shrink-0">
                    {p.step}
                  </div>
                  <h3 className="text-[21.6px] font-black text-white leading-tight">{p.title}</h3>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* GUARANTEES */}
      <Section title="OUR GUARANTEES" titleClassName="text-[#017a6d] !text-[30.6px] uppercase">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 border-t border-black/5 pt-12">
          {/* Money-Back Guarantee */}
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-16 h-16 text-[#017a6d]">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 4L6 12V24C6 34.5 13.5 44 24 47C34.5 44 42 34.5 42 24V12L24 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <text x="24" y="31" fontSize="18" fontWeight="900" textAnchor="middle" fill="currentColor" fontFamily="Arial">$</text>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-black mb-2 uppercase tracking-tight">First-Service Money-Back Guarantee</h3>
              <p className="text-[15px] text-black/60 leading-relaxed font-medium">
                If you don’t like the service after the first visit, we refund in full. Built on trust, not fine print.
              </p>
            </div>
          </div>

          {/* 24-Hour Service Guarantee */}
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-16 h-16 text-[#017a6d]">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.5" />
                <text x="24" y="29" fontSize="10" fontWeight="900" textAnchor="middle" fill="currentColor" fontFamily="Arial">24H</text>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-black mb-2 uppercase tracking-tight">24-Hour Service Guarantee</h3>
              <p className="text-[15px] text-black/60 leading-relaxed font-medium">
                If we miss the 24-hour window after snowfall ends, we send a crew back immediately at no extra cost.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <section style={styles.beforeAfterSection} className="section-divider">
        <div style={styles.inner}>
          <div className="text-center mb-12">
            <h2 style={styles.h2}>THE TERREOAK RESULTS</h2>
          </div>

          <div
            className="mt-12"
          >
            {/* Desktop View: Side-by-Side */}
            <div className="hidden md:grid md:grid-cols-2 gap-8 items-start">
              <div className="relative">
                <img
                  src="/snow-removal-okotoks-before.JPG"
                  alt="Snow removal Okotoks before clearing"
                  className="rounded-2xl shadow-2xl w-full h-auto border-4 border-white"
                />
                <div style={{ ...styles.label, bottom: "auto", top: "20px", left: "20px", right: "auto" }} className="!bg-red-600">BEFORE</div>
              </div>
              <div className="relative">
                <img
                  src="/snow-removal-okotoks-after.JPG"
                  alt="Snow removal Okotoks after clearing"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
                <div style={styles.label}>AFTER</div>
              </div>
            </div>

            {/* Mobile View: Original Stacked/Interactive */}
            <div
              style={styles.photoContainer}
              className="relative max-w-4xl mx-auto h-[400px] cursor-pointer md:hidden"
              onClick={() => setIsAfterOnTop(!isAfterOnTop)}
            >
              {/* After Photo */}
              <div style={{
                ...styles.photoBase,
                ...styles.photoAfter,
                zIndex: isAfterOnTop ? 15 : 5,
                transform: isAfterOnTop ? "rotate(0deg) scale(1.02)" : "rotate(2deg) scale(1)",
                boxShadow: isAfterOnTop ? "0 30px 60px -12px rgba(0,0,0,0.3)" : "0 20px 40px -12px rgba(0,0,0,0.2)"
              }} className="w-[85%] absolute right-0 bottom-4">
                <img
                  src="/snow-removal-okotoks-after.JPG"
                  alt="Snow removal Okotoks after clearing"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
                <div style={styles.label}>AFTER</div>
              </div>

              {/* Before Photo */}
              <div style={{
                ...styles.photoBase,
                ...styles.photoBefore,
                zIndex: isAfterOnTop ? 5 : 15,
                transform: isAfterOnTop ? "rotate(-8deg) scale(0.95)" : "rotate(-4deg) scale(1.02)",
                boxShadow: isAfterOnTop ? "0 10px 20px -12px rgba(0,0,0,0.2)" : "0 30px 60px -12px rgba(0,0,0,0.3)"
              }} className="w-[85%] absolute left-0 top-4">
                <img
                  src="/snow-removal-okotoks-before.JPG"
                  alt="Snow removal Okotoks before clearing"
                  className="rounded-2xl shadow-2xl w-full h-auto border-4 border-white"
                />
                <div style={{ ...styles.label, bottom: "auto", top: "20px", left: "20px", right: "auto" }} className="!bg-red-600">BEFORE</div>
              </div>
            </div>
          </div>
          <p className="text-center mt-8 text-black/40 font-bold text-sm md:hidden">TAP PHOTOS TO SWITCH</p>

        </div>
      </section>





      {/* LEAD FORM */}
      <section style={styles.section} id="lead-form" className="section-divider">
        <div style={styles.inner}>
          <h2 style={{ ...styles.h2, marginTop: '2rem', marginBottom: '3rem' }}>SIGN UP FOR YOUR SEASON PASS</h2>
          <JobberLeadForm />
        </div>
      </section>

      {/* FAQ */}
      <section style={styles.sectionAlt} className="section-divider">
        <div style={styles.inner}>
          <h2 style={styles.h2}>FAQS</h2>

          <div style={styles.faq}>
            <details style={styles.details}>
              <summary style={styles.summary}>What counts as a service?</summary>
              <p style={styles.pSmall}>
                Any qualifying snowfall event in your area. We monitor storms and dispatch proactively.
              </p>
            </details>

            <details style={styles.details}>
              <summary style={styles.summary}>Do you include windrows from the city plow?</summary>
              <p style={styles.pSmall}>
                No — windrows aren’t included. Everything else up to the end of your driveway is covered.
              </p>
            </details>

            <details style={styles.details}>
              <summary style={styles.summary}>How does the Photo Service Log work?</summary>
              <p style={styles.pSmall}>
                After each visit, we email time-stamped photos so you have proof of service.
              </p>
            </details>

            <details style={styles.details}>
              <summary style={styles.summary}>Ice melt every time?</summary>
              <p style={styles.pSmall}>
                2 vouchers included. If you want ice melt after every visit, add a monthly subscription (we can wire this later).
              </p>
            </details>
          </div>

          <div style={{ marginTop: 22 }}>
            <Link href="/support" style={styles.secondaryBtn}>Customer Support</Link>
          </div>
        </div>
      </section>

      {isCtaVisible && (
        <div style={styles.stickyCtaContainer} className="stickyCtaWrapper animate-float-up">
          <button
            onClick={handleScrollToForm}
            style={styles.stickyCtaLink}
            className="cursor-pointer"
          >
            Sign Up!
          </button>

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
  hero: {
    position: "relative",
    overflow: "hidden",
    background: "#000",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    minHeight: "100vh",
  },
  videoBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 0,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.4)",
    zIndex: 1,
  },
  heroInner: { position: "relative", zIndex: 2, maxWidth: 1152, margin: "0 auto", paddingLeft: "24px", paddingRight: "24px", color: "#fff" },
  kicker: { margin: 0, fontWeight: 700, fontSize: "14px", color: "rgba(255,255,255,0.7)", letterSpacing: "0.1em", textTransform: "uppercase" },
  h1: { margin: "16px 0 0", fontSize: "48px", lineHeight: 1.05, fontWeight: 900, color: "#fff", letterSpacing: "-0.02em" },
  subhead: { marginTop: 24, maxWidth: 820, fontSize: "1.2rem", lineHeight: 1.5, color: "rgba(255,255,255,0.85)", fontWeight: 700 },
  ctaRow: { marginTop: 22, display: "flex", gap: 12, flexWrap: "wrap" },
  primaryBtn: {
    background: "#22c55e", // green-500
    color: "#fff",
    padding: "12px 18px",
    borderRadius: 8, // matched to homepage 'rounded'
    fontWeight: 700,
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  },
  secondaryBtn: {
    border: "2px solid rgba(0,0,0,0.2)",
    color: "#000",
    padding: "12px 18px",
    borderRadius: 8,
    fontWeight: 700,
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    background: "transparent",
  },
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
    color: "#000000",
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
    background: "#01fa6d", // Light green from site primary green
    color: "#000000",
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
  trustGrid: { marginTop: 26, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12 },
  trustCard: { border: "1px solid rgba(0,0,0,0.10)", borderRadius: 8, padding: 14, background: "#f9fafb" }, // gray-50
  trustTitle: { fontWeight: 900, color: "#000", fontSize: 21.6 },
  trustText: { marginTop: 6, color: "rgba(0,0,0,0.7)", fontSize: 14, lineHeight: 1.4 },

  section: { padding: "56px 0", background: "#fff", color: "#000" },
  sectionAlt: { padding: "56px 0", background: "#f9fafb", color: "#000" }, // gray-50
  final: { padding: "66px 0", background: "#f9fafb", color: "#000", borderTop: "1px solid rgba(0,0,0,0.08)" },

  inner: { maxWidth: 1200, margin: "0 auto", padding: "0 20px" },
  h2: { margin: 0, fontSize: 30.6, fontWeight: 900, color: "#000" },
  h3: { margin: 0, fontSize: 21.6, fontWeight: 900, color: "#000" },
  p: { marginTop: 10, maxWidth: 880, color: "rgba(0,0,0,0.7)", lineHeight: 1.6 },
  pSmall: { marginTop: 10, color: "rgba(0,0,0,0.7)", lineHeight: 1.55, fontSize: 12.6 },

  grid2: { marginTop: 18, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16 },
  bullets: { margin: 0, paddingLeft: 18, color: "rgba(0,0,0,0.7)", lineHeight: 1.8 },

  cards3: { marginTop: 18, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14 },
  cards2: { marginTop: 18, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 14 },
  card: { border: "1px solid rgba(0,0,0,0.10)", borderRadius: 8, padding: 16, background: "#fff" },

  offerSection: { padding: "70px 0", background: "#2c2d32" },
  offerCard: { background: "#019587", borderRadius: 12, padding: "24px 20px", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "80px", border: "none" },
  offerTitle: { margin: 0, fontSize: 21.6, fontWeight: 900, color: "#fff", textAlign: "center" as const },

  ctaBox: {
    border: "1px solid rgba(0,0,0,0.10)",
    borderRadius: 8,
    padding: 18,
    background: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 14,
    flexWrap: "wrap",
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  },
  formShell: {
    marginTop: 14,
    border: "1px dashed rgba(0,0,0,0.18)",
    borderRadius: 8,
    padding: 16,
    background: "#fff",
  },

  faq: { marginTop: 18, display: "grid", gap: 10 },
  details: { border: "1px solid rgba(0,0,0,0.10)", borderRadius: 8, padding: "10px 14px", background: "#fff" },
  summary: { cursor: "pointer", fontWeight: 900, color: "#000" },

  beforeAfterSection: {
    padding: "100px 0",
    background: "#fdfdfd",
    overflow: "hidden",
  },
  photoContainer: {
    position: "relative",
    marginTop: "40px",
  },
  photoBase: {
    transition: "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  },
  photoBefore: {
    zIndex: 10,
    transform: "rotate(-4deg) scale(1.02)",
    boxShadow: "0 30px 60px -12px rgba(0,0,0,0.3)",
  },
  photoAfter: {
    zIndex: 5,
    transform: "rotate(2deg)",
    boxShadow: "0 20px 40px -12px rgba(0,0,0,0.2)",
  },
  label: {
    position: "absolute",
    bottom: "20px",
    right: "20px",
    background: "rgba(1, 122, 109, 0.95)",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "8px",
    fontWeight: 900,
    fontSize: "14px",
    letterSpacing: "0.05em",
    backdropFilter: "blur(4px)",
    zIndex: 20,
  }
};
