"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Section, ScrollReveal, Carousel } from "../components/UI";
import OurBlogSection from "../components/OurBlogSection";
import StatsCounter from "../residential-snow-removal/StatsCounter";
import GoogleReviewBadge from "../components/GoogleReviewBadge";
import dynamic from "next/dynamic";
import PremiumHero from "../components/PremiumHero";
import TrustBar from "../components/TrustBar";

const JobberLeadForm = dynamic(() => import("../components/JobberLeadForm"), {
    loading: () => <div className="w-full h-[600px] animate-pulse bg-gray-50 rounded-3xl" />,
    ssr: false
});

export default function SpringCleanupPage() {
    const [isCtaVisible, setIsCtaVisible] = useState(false);
    const [showAfter, setShowAfter] = useState(false);

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
        const formElement = document.getElementById("spring-cleanup-form");
        if (formElement) {
            formElement.scrollIntoView({ behavior: "smooth" });
        }
    };




    return (
        <main>
      <PremiumHero
        title={<>CALGARY<br />SPRING CLEANUP<br /><span className="text-[#01fa6d]">Fresh Start for your Yard.</span></>}
        backgroundVideo="/videos/1B200505-8980-40F6-8F8F-D3B3CBEEAFBA.mp4"
        badgeLabel="Property Maintenance"
        ctaText="FREE QUOTE"
        onCtaClick={handleScrollToForm}
      />

            {/* STATS COUNTER */}
            <StatsCounter stats={[
                { end: 225, label: "Total Properties Serviced", suffix: "+" },
                { end: 185, label: "Happy Clients", suffix: "+" },

                { end: 2, label: "TERREOAK Crews" },
            ]} />



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
                            <button
                                onClick={handleScrollToForm}
                                className="inline-flex items-center justify-center rounded-lg bg-[#01fa6d] px-10 py-4 text-sm font-black text-black hover:opacity-90 transition-all transform hover:-translate-y-1 shadow-lg cursor-pointer"
                            >
                                BOOK YOUR CLEANUP
                            </button>
                        </div>
                    </div>
                    <div
                        className="w-full md:w-1/2 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white transition-transform duration-500 hover:scale-[1.02] cursor-pointer group"
                        onClick={() => setShowAfter(!showAfter)}
                    >
                        <Image
                            src={showAfter ? "/spring-cleanup-pics/calgary-spring-cleanup-after.jpg" : "/spring-cleanup-pics/Power-raking-services.JPG"}
                            alt={showAfter ? "Clean green lawn after professional spring cleanup" : "Professional power raking services in Calgary"}
                            fill
                            className="object-cover transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors pointer-events-none" />
                        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center z-20">
                            <span className="bg-[#01fa6d] text-black px-4 py-1 rounded-full text-[12px] font-black uppercase tracking-wider shadow-lg">
                                {showAfter ? "AFTER" : "BEFORE"}
                            </span>
                            <span className="bg-white/90 backdrop-blur-sm text-black px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                Click to {showAfter ? "see before" : "see after"}
                            </span>
                        </div>
                    </div>
                </div>
                <div style={styles.inner} className="mt-4 text-center md:text-right md:w-full">
                    <p className="text-[12px] font-bold text-black/40 uppercase tracking-widest animate-pulse">
                        Click the photo above to see the results →
                    </p>
                </div>
            </section>

            {/* SERVICES DETAIL SECTION */}
            <Section 
                kicker="Service Details" 
                title="MAINTENANCE THAT MATTERS" 
                titleClassName="text-[#017a6d] uppercase"
                wrapperClassName="bg-white"
            >
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <p className="text-xl text-black/70 font-medium">
                        Proper spring maintenance is the foundation of a healthy lawn. Our core aeration and power raking services are designed to give your grass the best possible start after a long Calgary winter.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Core Aeration Info */}
                    <ScrollReveal className="bg-gray-50 rounded-3xl p-8 border border-black/5 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-2xl font-black uppercase text-[#017a6d] mb-4">Core Aeration</h3>
                        <p className="text-black/70 mb-6 leading-relaxed">
                            A process of removing small plugs of soil and thatch from the lawn to improve soil aeration and water intake.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal className="bg-[#017a6d] rounded-3xl p-8 shadow-xl border border-white/5">
                        <h3 className="text-xl font-black uppercase text-[#01fa6d] mb-6 tracking-wide">Good For:</h3>
                        <ul className="space-y-4">
                            {[
                                "Relieving soil compaction in high-traffic areas",
                                "Enhancing water and oxygen absorption to roots",
                                "Improving nutrient uptake from fertilizers",
                                "Promoting deeper, healthier root systems"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="text-[#01fa6d] font-bold text-xl leading-none">•</span>
                                    <span className="text-white/90 font-medium leading-tight">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </ScrollReveal>

                    {/* Power Raking Info */}
                    <ScrollReveal className="bg-gray-50 rounded-3xl p-8 border border-black/5 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-2xl font-black uppercase text-[#017a6d] mb-4">Power Raking</h3>
                        <p className="text-black/70 mb-6 leading-relaxed">
                            A mechanical process that removes the excess layer of thatch (dead grass) from your lawn that builds up over winter.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal className="bg-[#017a6d] rounded-3xl p-8 shadow-xl border border-white/5">
                        <h3 className="text-xl font-black uppercase text-[#01fa6d] mb-6 tracking-wide">Good For:</h3>
                        <ul className="space-y-4">
                            {[
                                "Removing heavy thatch buildup after winter",
                                "Increasing airflow and light to new growth",
                                "Encouraging thicker, more lush grass growth",
                                "Preparing your lawn for overseeding"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="text-[#01fa6d] font-bold text-xl leading-none">•</span>
                                    <span className="text-white/90 font-medium leading-tight">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </ScrollReveal>
                </div>
            </Section>

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

            {/* WHY IT MATTERS SECTION */}
            <Section 
                kicker="The Benefits" 
                title="WHY SPRING CLEANUP MATTERS" 
                titleClassName="text-[#017a6d] uppercase"
                wrapperClassName="bg-gray-50"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <ScrollReveal>
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                            <Image
                                src="/spring-cleanup-pics/Calgary-Spring-Cleanup.jpg"
                                alt="Professional spring cleanup results in Calgary"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </ScrollReveal>
                    <ScrollReveal>
                        <div className="space-y-8">
                            <p className="text-xl text-black/70 font-medium leading-relaxed uppercase tracking-tight">
                                A healthy summer lawn starts with a professional spring cleanup.
                            </p>
                            
                            <div className="space-y-6">
                                {[
                                    {
                                        title: "Lawn Health & Disease Prevention",
                                        desc: "Removing wet, matted leaves and debris prevents mold and snow blight from suffocating your grass."
                                    },
                                    {
                                        title: "Jumpstarts New Growth",
                                        desc: "Clearing away winter thatch and salt allows sunlight and oxygen to reach the soil, triggering early spring green-up."
                                    },
                                    {
                                        title: "Optimizes Nutrient Flow",
                                        desc: "When combined with aeration, a professional cleanup ensures that fertilizers and water reach the root zone efficiently."
                                    }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="mt-1.5 shrink-0 w-2 h-2 rounded-full bg-[#01fa6d]" />
                                        <div>
                                            <h4 className="text-lg font-black text-[#017a6d] uppercase tracking-tight">{item.title}</h4>
                                            <p className="text-black/60 leading-relaxed mt-1">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-4">
                                <button
                                    onClick={handleScrollToForm}
                                    className="inline-flex items-center justify-center rounded-full bg-[#01fa6d] px-10 py-5 text-[16px] font-black text-black hover:opacity-90 transition-all transform hover:-translate-y-1 shadow-xl"
                                >
                                    BOOK YOUR CLEANUP
                                </button>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </Section>




            {/* LEAD FORM SECTION */}
            <Section id="spring-cleanup-form" kicker="Get Started" title="REQUEST A CLEANUP ESTIMATE" titleClassName="text-[#017a6d]">
                <div className="max-w-5xl mx-auto w-full">
                    <p className="text-center text-lg text-black/60 mb-12">
                        Fill out the form below to request an estimate for your spring cleanup.
                    </p>
                    <JobberLeadForm
                        clienthubId="41b3399e-3795-43d8-afe2-e6c38c1b3e6e-2249559"
                        formUrl="https://clienthub.getjobber.com/client_hubs/41b3399e-3795-43d8-afe2-e6c38c1b3e6e/public/work_request/embedded_work_request_form?form_id=2249559"
                    />
                </div>
            </Section>

            {/* PHOTO GALLERY */}
            <Section kicker="Projects" title="OUR RECENT CLEANUPS" titleClassName="text-[#01fa6d]">
                <Carousel className="mt-12">
                    {[
                        { src: "/spring-cleanup-pics/Calgary-Core-Aeration.JPG", alt: "Calgary Core Aeration" },
                        { src: "/spring-cleanup-pics/Calgary-Leaf-Cleanup.JPG", alt: "Leaf Cleanup Calgary" },
                        { src: "/spring-cleanup-pics/City-of-Calgary-skyline.JPG", alt: "City of Calgary Skyline" },
                        { src: "/spring-cleanup-pics/Calgary-Spring-Cleanup.jpg", alt: "Calgary Spring Cleanup" },
                        { src: "/spring-cleanup-pics/Calgary-leaf-removal-service.jpg", alt: "Calgary Leaf Removal Service" },
                        { src: "/spring-cleanup-pics/Cranston-leaf-cleanup.jpg", alt: "Cranston Leaf Cleanup" },
                        { src: "/spring-cleanup-pics/Spring-Cleanup-Calgary.jpg", alt: "Spring Cleanup Calgary" },
                        { src: "/spring-cleanup-pics/Copperfield-leaf-cleanup.JPG", alt: "Copperfield leaf cleanup" },
                        { src: "/spring-cleanup-pics/Leaf-removal-Calgary.JPG", alt: "Leaf removal Calgary" },
                        { src: "/spring-cleanup-pics/Power-raking-services.JPG", alt: "Power raking services" }
                    ].map((item, i) => (
                        <div key={i} className="min-w-[85vw] md:min-w-[400px] px-3 snap-center">
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


                </div>
            </section>

            {isCtaVisible && (
                <div style={styles.stickyCtaContainer} className="stickyCtaWrapper animate-float-up">
                    <button
                        onClick={handleScrollToForm}
                        style={styles.stickyCtaLink}
                        className="cursor-pointer border-none bg-transparent"
                    >
                        FREE QUOTE!
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
        background: "#01fa6d",
        color: "#000",
        padding: "12px 24px",
        borderRadius: "999px",
        fontWeight: 900,
        textDecoration: "none",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        border: "none",
        fontSize: "14px",
        boxShadow: "0 4px 12px rgba(1, 250, 109, 0.2)",
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
