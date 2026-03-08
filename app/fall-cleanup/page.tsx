"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Section, ScrollReveal, Carousel } from "../components/UI";
import OurBlogSection from "../components/OurBlogSection";
import StatsCounter from "../residential-snow-removal/StatsCounter";
import JobberLeadForm from "../components/JobberLeadForm";
import GoogleReviewBadge from "../components/GoogleReviewBadge";

export default function FallCleanupPage() {
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
        <main>
            {/* HERO */}
            <section className="relative min-h-screen flex flex-col justify-center border-b border-black/10 overflow-hidden bg-black">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/fall-cleanup-hero.jpg"
                        alt="Calgary fall cleanup and landscape maintenance"
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 z-0"></div>
                </div>

                <div className="relative z-10 mx-auto max-w-6xl px-6 pt-48 pb-16 md:pt-56 md:pb-24 lg:pt-60 lg:pb-32 text-left">
                    <p className="text-[14px] font-bold tracking-widest text-[#01fa6d] uppercase drop-shadow-md">
                        Calgary • Seasonal Services
                    </p>
                    <h1 className="mt-4 text-[42px] md:text-[56px] lg:text-[64px] font-black leading-[1.1] tracking-tight text-white drop-shadow-2xl max-w-4xl uppercase">
                        CALGARY<br />
                        FALL CLEANUP<br />
                        <span className="text-[#01fa6d]">Essential Yard Winterization.</span>
                    </h1>
                    <p className="mt-6 max-w-2xl text-[1.1rem] font-bold text-white/90 md:text-[1.3rem]">
                        Professional leaf removal, perennial trimming, and final seasonal grooming.
                        We prepare your property to thrive through the Calgary winter.
                    </p>

                    <div className="mt-10 flex flex-col md:flex-row items-start md:items-center gap-8">
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="https://clienthub.getjobber.com/booking/6ba7fcc7-4c40-4f17-9235-428046e21db6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-full bg-[#01fa6d] px-12 py-[16px] text-[16px] font-extrabold text-black border-2 border-white/10 hover:opacity-90 transition-all cursor-pointer shadow-xl shadow-[#01fa6d]/20 hover:-translate-y-1"
                            >
                                BOOK FALL CLEANUP
                            </a>
                            <a
                                href="tel:+15877077648"
                                className="inline-flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm px-12 py-[14px] text-[16px] font-extrabold text-white border-2 border-white/40 hover:bg-white/20 transition-colors"
                            >
                                CALL NOW
                            </a>
                        </div>

                        <GoogleReviewBadge />
                    </div>
                </div>
            </section>

            {/* STATS COUNTER */}
            <StatsCounter />

            {/* BUILT FOR WINTER SECTION (Adapted for Fall) */}
            <section style={styles.sectionAlt} className="section-divider">
                <div style={styles.inner}>
                    <div style={{ maxWidth: 800 }}>
                        <h2 style={{ ...styles.h2, fontSize: 36, lineHeight: 1.2, color: "#017a6d" }}>
                            CALGARY FALL CLEANUP THAT&apos;S BUILT FOR WINTER PREP.
                        </h2>
                        <p style={{ ...styles.p, fontSize: 18, marginTop: 24, color: "#333" }}>
                            At TERREOAK Landscaping, we understand that a proper fall cleanup is the foundation for a healthy spring lawn. Our crews are equipped to handle everything from heavy leaf volume to technical perennial pruning, ensuring your property is tidy and protected before the first snow falls.
                        </p>
                        <p style={{ ...styles.p, fontSize: 18, marginTop: 16, color: "#333" }}>
                            Our systematized approach means no corner is ignored. We blow out debris from under decks and behind shrubs, perform a final low-cut mow to prevent snow mold, and haul away all garden waste so you don&apos;t have to.
                        </p>
                        <div style={{ marginTop: 32 }}>
                            <a
                                href="https://clienthub.getjobber.com/booking/6ba7fcc7-4c40-4f17-9235-428046e21db6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-lg bg-[#01fa6d] px-10 py-4 text-sm font-black text-black hover:opacity-90 transition-all transform hover:-translate-y-1 shadow-lg cursor-pointer"
                            >
                                REQUEST AN ESTIMATE
                            </a>
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
            >
                <div className="grid gap-6 grid-cols-1 md:grid-cols-3 mt-12">
                    {[
                        { step: "01", title: "Book your cleanup", desc: "Select your preferred window and services." },
                        { step: "02", title: "Confirmation & Schedule", desc: "We confirm details and provide a service date." },
                        { step: "03", title: "Professional Execution", desc: "Our team arrives and completes the full cleanup." }
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

            {/* PACKAGES SECTION */}
            <Section
                kicker="Service Options"
                title="CHOOSE YOUR CLEANUP PACKAGE"
                titleClassName="text-[#017a6d] uppercase"
                wrapperClassName="bg-gray-100"
            >
                <Carousel className="mt-12 !-mx-4 lg:!mx-0 lg:grid lg:grid-cols-2 xl:grid-cols-4 lg:gap-6 lg:!flex-row lg:!overflow-visible">
                    {[
                        {
                            name: "Basic Leaf Cleanup",
                            desc: "Quick fall yard refresh",
                            features: ["Leaf blowing and cleanup", "Final lawn cut & trim", "Leaves piled for pickup"],
                            popular: false
                        },
                        {
                            name: "Leaf Removal Service",
                            features: ["Leaf blowing and cleanup", "Final lawn cut & trim", "Bagging & removal of leaves"],
                            popular: false
                        },
                        {
                            name: "Winter Prep Cleanup ⭐",
                            features: ["Leaf blowing and cleanup", "Final lawn cut & trim", "Bagging & removal of leaves", "Core aeration"],
                            popular: true
                        },
                        {
                            name: "Winter Lawn Protection",
                            features: ["Leaf blowing and cleanup", "Final lawn cut & trim", "Bagging & removal of leaves", "Core aeration", "Fall fertilizer application"],
                            popular: false
                        }
                    ].map((pkg, i) => (
                        <div key={i} className="min-w-full lg:min-w-0 px-4 lg:px-0 snap-center flex flex-col">
                            <ScrollReveal className="flex-grow flex flex-col">
                                <div className={`h-full p-8 rounded-2xl border transition-all duration-300 flex flex-col ${pkg.popular ? "bg-[#2c2d32] border-[#01fa6d] shadow-2xl md:scale-[1.05] z-10" : "bg-white border-black/5 shadow-sm md:hover:shadow-xl md:hover:-translate-y-1"}`}>
                                    {pkg.popular && (
                                        <span className="bg-[#01fa6d] text-black text-[10px] font-black uppercase px-3 py-1 rounded-full mb-4 w-fit">
                                            Most Popular
                                        </span>
                                    )}
                                    <h3 className={`text-2xl font-black uppercase mb-1 ${pkg.popular ? "text-white" : "text-black"}`}>{pkg.name}</h3>
                                    {pkg.desc && <p className={`text-xs font-bold uppercase mb-4 ${pkg.popular ? "text-[#01fa6d]" : "text-[#017a6d]"}`}>{pkg.desc}</p>}
                                    {!pkg.desc && <div className="mb-8" />}

                                    <ul className="space-y-4 mb-8 flex-grow">
                                        {pkg.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <svg className={`w-5 h-5 shrink-0 ${pkg.popular ? "text-[#01fa6d]" : "text-[#017a6d]"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className={`text-[15px] font-medium leading-tight ${pkg.popular ? "text-white/80" : "text-black/70"}`}>
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    {!pkg.features.some(f => f.toLowerCase().includes('aeration')) && (
                                        <p className="text-[13px] font-medium text-black/50 italic mb-6 leading-relaxed px-2">
                                            “Most Calgary lawns benefit from aeration before winter.”
                                        </p>
                                    )}

                                    <div className="mt-auto">
                                        <a
                                            href="https://clienthub.getjobber.com/booking/6ba7fcc7-4c40-4f17-9235-428046e21db6"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            referrerPolicy="no-referrer"
                                            className={`w-full py-5 rounded-2xl text-[16px] font-black uppercase transition-all text-center block ${pkg.popular ? "bg-[#01fa6d] text-black hover:opacity-90 shadow-lg shadow-[#01fa6d]/20" : "bg-[#2c2d32] text-white hover:bg-black shadow-lg shadow-black/5"}`}
                                        >
                                            Select Package
                                        </a>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    ))}
                </Carousel>
            </Section>

            {/* BOOK EARLY SECTION */}
            <section className="py-20 border-y border-white/5" style={{ background: "#2c2d32" }}>
                <div className="mx-auto max-w-6xl px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <ScrollReveal>
                            <div className="text-left">
                                <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6 uppercase tracking-tight">
                                    BOOK EARLY TO <span className="text-[#01fa6d]">SECURE YOUR SPOT.</span>
                                </h2>
                                <p className="text-xl text-white/70 font-medium mb-8">
                                    The best time for fall cleanup in Calgary is from late September to early November. Our schedule fills up fast—reserve your preferred window today.
                                </p>
                                <ul className="mb-10 space-y-4 text-white/80 text-lg">
                                    <li className="flex items-start gap-3 leading-tight">
                                        <span className="text-[#01fa6d] font-bold">•</span> Leaf removal to prevent snow mold
                                    </li>
                                    <li className="flex items-start gap-3 leading-tight">
                                        <span className="text-[#01fa6d] font-bold">•</span> Perennial trimming and garden bed winterization
                                    </li>
                                    <li className="flex items-start gap-3 leading-tight">
                                        <span className="text-[#01fa6d] font-bold">•</span> Final seasonal mow and lawn prep for winter
                                    </li>
                                </ul>
                                <a
                                    href="https://clienthub.getjobber.com/booking/6ba7fcc7-4c40-4f17-9235-428046e21db6"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-full bg-[#01fa6d] px-12 py-5 text-lg font-black text-black hover:opacity-90 transition-all transform hover:-translate-y-1 shadow-2xl shadow-[#01fa6d]/20"
                                >
                                    BOOK YOUR WINDOW
                                </a>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal className="relative hidden lg:block">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-4 border-[#01fa6d] shadow-2xl">
                                <Image
                                    src="/fall-cleanup-pics/fall-cleanup-section.jpg"
                                    alt="Professional fall yard cleanup in Calgary"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>
                        </ScrollReveal>

                        {/* Mobile Image */}
                        <ScrollReveal className="lg:hidden">
                            <div className="relative aspect-video rounded-xl overflow-hidden border-2 border-[#01fa6d] shadow-xl mb-8">
                                <Image
                                    src="/fall-cleanup-pics/fall-cleanup-section.jpg"
                                    alt="Professional fall yard cleanup in Calgary"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>


            {/* PHOTO GALLERY */}
            <Section kicker="Portfolio" title="OUR RECENT CLEANUPS" titleClassName="text-[#01fa6d]">
                <Carousel className="mt-12">
                    {[
                        { src: "/spring-cleanup-pics/Copperfield-leaf-cleanup.JPG", alt: "Copperfield leaf cleanup" },
                        { src: "/spring-cleanup-pics/Leaf-removal-Calgary.JPG", alt: "Leaf removal Calgary" },
                        { src: "/spring-cleanup-pics/Calgary-Core-Aeration.JPG", alt: "Calgary Core Aeration" },
                        { src: "/spring-cleanup-pics/Calgary-Leaf-Cleanup.JPG", alt: "Leaf Cleanup Calgary" },
                        { src: "/spring-cleanup-pics/Leaf-removal-Calgary.JPG", alt: "Leaf removal Calgary" }
                    ].map((item, i) => (
                        <div key={i} className="min-w-[85vw] md:min-w-[400px] px-3 snap-start">
                            <ScrollReveal className="relative aspect-[4/3] rounded-lg overflow-hidden group border border-black/5 shadow-md">
                                <Image
                                    src={item.src}
                                    alt={item.alt || ""}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                            </ScrollReveal>
                        </div>
                    ))}
                </Carousel>
            </Section>

            {/* FAQ */}
            <section style={styles.sectionAlt} className="section-divider">
                <div style={styles.inner}>
                    <h2 style={styles.h2} className="uppercase">FAQS</h2>

                    <div style={styles.faq}>
                        <details style={styles.details}>
                            <summary style={styles.summary}>When is the best time for a fall cleanup?</summary>
                            <p style={styles.pSmall}>
                                Typically late September through October, once the majority of leaves have fallen but before the first permanent snow.
                            </p>
                        </details>

                        <details style={styles.details}>
                            <summary style={styles.summary}>Do you haul away the leaves?</summary>
                            <p style={styles.pSmall}>
                                Yes, all debris, leaves, and garden waste are bagged and hauled away for composting.
                            </p>
                        </details>

                        <details style={styles.details}>
                            <summary style={styles.summary}>Does this include irrigation blowout?</summary>
                            <p style={styles.pSmall}>
                                Irrigation blowouts are a separate service, but can be scheduled on the same visit if requested.
                            </p>
                        </details>
                    </div>

                    <div style={{ marginTop: 22 }}>
                        <Link href="/customer-support" style={styles.secondaryBtn}>CUSTOMER SUPPORT</Link>
                    </div>
                </div>
            </section>

            {/* BLOG */}
            <OurBlogSection />

            {isCtaVisible && (
                <div style={styles.stickyCtaContainer} className="stickyCtaWrapper animate-float-up">
                    <a
                        href="https://clienthub.getjobber.com/booking/6ba7fcc7-4c40-4f17-9235-428046e21db6"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.stickyCtaLink}
                        className="cursor-pointer"
                    >
                        BOOK NOW!
                    </a>
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
        background: "#22c55e",
        color: "#fff",
        padding: "12px 18px",
        borderRadius: 8,
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
    trustGrid: { marginTop: 26, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12 },
    trustCard: { border: "1px solid rgba(255,255,255,0.10)", borderRadius: 8, padding: 14, background: "rgba(255,255,255,0.1)", backdropFilter: "blur(4px)" },
    trustTitle: { fontWeight: 900, color: "#fff", fontSize: 18 },
    trustText: { marginTop: 6, color: "rgba(255,255,255,0.8)", fontSize: 14, lineHeight: 1.4 },

    section: { padding: "56px 0", background: "#fff", color: "#000" },
    sectionAlt: { padding: "56px 0", background: "#f9fafb", color: "#000" },
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
    offerCard: { background: "#019587", borderRadius: 12, padding: "24px 20px", display: "flex", alignItems: "center", justifyContent: "flex-start", minHeight: "80px", border: "none" },
    offerTitle: { margin: 0, fontSize: 21.6, fontWeight: 900, color: "#fff", textAlign: "left" as const },

    faq: { marginTop: 18, display: "grid", gap: 10 },
    details: { border: "1px solid rgba(0,0,0,0.10)", borderRadius: 8, padding: "10px 14px", background: "#fff" },
    summary: { cursor: "pointer", fontWeight: 900, color: "#000" },
};
