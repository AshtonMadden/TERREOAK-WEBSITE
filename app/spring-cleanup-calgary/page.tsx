"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Section, ScrollReveal, Carousel } from "../components/UI";
import OurBlogSection from "../components/OurBlogSection";
import StatsCounter from "../residential-snow-removal/StatsCounter";
import GoogleReviewBadge from "../components/GoogleReviewBadge";

export default function SpringCleanupPage() {
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
                        src="/spring-cleanup-pics/Leaf-Cleanup-near-me.jpg"
                        alt="Professional spring leaf cleanup service in Calgary"
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
                        SPRING CLEANUP<br />
                        <span className="text-[#01fa6d]">Fresh Start for your Yard.</span>
                    </h1>
                    <p className="mt-6 max-w-2xl text-[1.1rem] font-bold text-white/90 md:text-[1.3rem]">
                        Get your yard ready for the season with professional spring cleanup services.
                        Power raking, aeration, and debris removal for a healthy, green lawn.
                    </p>

                    <div className="mt-10 flex flex-col md:flex-row items-start md:items-center gap-8">
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="https://clienthub.getjobber.com/booking/6ba7fcc7-4c40-4f17-9235-428046e21db6"
                                target="_blank"
                                rel="noopener noreferrer"
                                referrerPolicy="no-referrer"
                                className="inline-flex items-center justify-center rounded-full bg-[#01fa6d] px-12 py-[16px] text-[16px] font-extrabold text-black border-2 border-white/10 hover:opacity-90 transition-all cursor-pointer shadow-xl shadow-[#01fa6d]/20 hover:-translate-y-1"
                            >
                                BOOK NOW
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


            <section style={styles.sectionAlt} className="section-divider py-16 md:py-24">
                <div style={styles.inner} className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2">
                        <h2 style={{ ...styles.h2, fontSize: 36, lineHeight: 1.2, color: "#017a6d" }} className="uppercase">
                            CALGARY SPRING CLEANUP THAT&apos;S BUILT FOR A HEALTHY SEASON.
                        </h2>
                        <p style={{ ...styles.p, fontSize: 18, marginTop: 24, color: "#333" }}>
                            At TERREOAK Landscaping, we know that a great summer lawn starts in the spring. Our comprehensive cleanup service removes the debris, salt, and winter kill that can stifle new growth, giving your grass the room it needs to breathe and thrive.
                        </p>
                        <p style={{ ...styles.p, fontSize: 18, marginTop: 16, color: "#333" }}>
                            From professional-grade core aeration that relieves soil compaction to thorough power raking that extracts performance-robbing thatch, we use the right equipment and techniques for Calgary&apos;s unique climate and soil conditions.
                        </p>
                        <div style={{ marginTop: 32 }}>
                            <a
                                href="https://clienthub.getjobber.com/booking/6ba7fcc7-4c40-4f17-9235-428046e21db6"
                                target="_blank"
                                rel="noopener noreferrer"
                                referrerPolicy="no-referrer"
                                className="inline-flex items-center justify-center rounded-lg bg-[#01fa6d] px-10 py-4 text-sm font-black text-black hover:opacity-90 transition-all transform hover:-translate-y-1 shadow-lg cursor-pointer"
                            >
                                BOOK YOUR CLEANUP
                            </a>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white transition-transform duration-500 hover:scale-[1.02]">
                        <Image
                            src="/spring-cleanup-pics/Power-raking-services.JPG"
                            alt="Professional power raking services in Calgary"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* PROCESS SECTION */}
            <Section
                kicker="Our Process"
                kickerClassName="text-white/60"
                title="HOW IT WORKS"
                titleClassName="text-white !text-[30.6px] uppercase"
                wrapperClassName="bg-[#2c2d32]"
            >
                <div className="grid gap-6 grid-cols-1 lg:grid-cols-3 mt-12">
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
                            name: "Quick Start Cleanup",
                            desc: "Simple seasonal yard refresh",
                            features: ["Leaf & debris cleanup", "First lawn cut & trim"],
                            popular: false
                        },
                        {
                            name: "Lawn Boost Package",
                            features: ["Leaf & debris cleanup", "First lawn cut & trim", "Core aeration", "Bagging & removal of lawn debris"],
                            popular: false
                        },
                        {
                            name: "Lawn Thickening Package ⭐",
                            features: ["Leaf & debris cleanup", "First lawn cut & trim", "Core aeration", "Power raking", "Fertilizer application", "Bagging & removal of lawn debris"],
                            popular: true
                        },
                        {
                            name: "Lawn Revival Package",
                            features: ["Leaf & debris cleanup", "First lawn cut & trim", "Core aeration", "Power raking", "Overseed application", "Double-pass overseeding", "Bagging & removal of lawn debris"],
                            popular: false
                        }
                    ].map((pkg, i) => (
                        <div key={i} className="min-w-full lg:min-w-0 px-4 lg:px-0 snap-center flex flex-col">
                            <ScrollReveal className="flex-grow flex flex-col">
                                <div className={`h-full p-8 rounded-2xl border transition-all duration-300 flex flex-col ${pkg.popular ? "bg-[#2c2d32] border-[#01fa6d] shadow-2xl md:scale-[1.05] z-10" : "bg-white border-black/5 shadow-sm hover:shadow-xl hover:-translate-y-1"}`}>
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
                                            “Most Calgary lawns benefit from aeration and power raking after winter.”
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
                                    The best time for spring cleanup in Calgary is from late March to early May. Our schedule fills up fast—reserve your preferred window today.
                                </p>
                                <ul className="mb-10 space-y-4 text-white/80 text-lg">
                                    <li className="flex items-start gap-3 leading-tight">
                                        <span className="text-[#01fa6d] font-bold">•</span> Power raking to remove winter thatch
                                    </li>
                                    <li className="flex items-start gap-3 leading-tight">
                                        <span className="text-[#01fa6d] font-bold">•</span> Full debris cleanup and haul away
                                    </li>
                                    <li className="flex items-start gap-3 leading-tight">
                                        <span className="text-[#01fa6d] font-bold">•</span> Garden bed refresh and lawn prep for spring
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
                                    src="/spring-cleanup-pics/spring-cleanup-team.jpg"
                                    alt="TERREOAK team performing spring yard cleanup and power raking"
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
                                    src="/spring-cleanup-pics/spring-cleanup-team.jpg"
                                    alt="TERREOAK team performing spring yard cleanup"
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
                        { src: "/spring-cleanup-pics/Calgary-Core-Aeration.JPG", alt: "Calgary Core Aeration" },
                        { src: "/spring-cleanup-pics/Calgary-Leaf-Cleanup.JPG", alt: "Leaf Cleanup Calgary" },
                        { src: "/spring-cleanup-pics/City-of-Calgary-skyline.JPG", alt: "City of Calgary Skyline" },
                        { src: "/spring-cleanup-pics/spring-cleanup-backyard.webp", alt: "Spring Cleanup Backyard Raking" },
                        { src: "/spring-cleanup-pics/spring-cleanup-house-shadow.webp", alt: "Spring Cleanup Residential Property" },
                        { src: "/spring-cleanup-pics/spring-cleanup-front-yard.webp", alt: "Spring Cleanup Front Yard Maintenance" },
                        { src: "/spring-cleanup-pics/Copperfield-leaf-cleanup.JPG", alt: "Copperfield leaf cleanup" },
                        { src: "/spring-cleanup-pics/Leaf-removal-Calgary.JPG", alt: "Leaf removal Calgary" },
                        { src: "/spring-cleanup-pics/Power-raking-services.JPG", alt: "Power raking services" }
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

            {/* CONTACT SECTION REMOVED - REPLACED BY LEAD FORM */}

            {/* BLOG */}
            <OurBlogSection />

            {/* FAQ */}
            <section style={styles.sectionAlt} className="section-divider">
                <div style={styles.inner}>
                    <h2 style={styles.h2} className="uppercase">FAQS</h2>

                    <div style={styles.faq}>
                        <details style={styles.details}>
                            <summary style={styles.summary}>When is the best time for a spring cleanup?</summary>
                            <p style={styles.pSmall}>
                                Typically late March through April, once the snow has melted and the ground has started to dry out.
                            </p>
                        </details>

                        <details style={styles.details}>
                            <summary style={styles.summary}>What is power raking?</summary>
                            <p style={styles.pSmall}>
                                Power raking uses specialized equipment to remove the layer of dead grass and debris (thatch) that builds up at the base of your lawn.
                            </p>
                        </details>

                        <details style={styles.details}>
                            <summary style={styles.summary}>Do I need to be home?</summary>
                            <p style={styles.pSmall}>
                                No, as long as we have access to your yard, you don&apos;t need to be home for the cleanup.
                            </p>
                        </details>
                    </div>

                    <div style={{ marginTop: 22 }}>
                        <Link href="/customer-support" style={styles.secondaryBtn}>CUSTOMER SUPPORT</Link>
                    </div>
                </div>
            </section>

            {isCtaVisible && (
                <div style={styles.stickyCtaContainer} className="stickyCtaWrapper animate-float-up">
                    <a
                        href="https://clienthub.getjobber.com/booking/6ba7fcc7-4c40-4f17-9235-428046e21db6"
                        target="_blank"
                        rel="noopener noreferrer"
                        referrerPolicy="no-referrer"
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


    faq: { marginTop: 18, display: "grid", gap: 10 },
    details: { border: "1px solid rgba(0,0,0,0.10)", borderRadius: 8, padding: "10px 14px", background: "#fff" },
    summary: { cursor: "pointer", fontWeight: 900, color: "#000" },
};
