"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Section, ScrollReveal } from "../components/UI";
import StatsCounter from "../residential-snow-removal/StatsCounter";
import JobberLeadForm from "../components/JobberLeadForm";

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

    const handleScrollToForm = () => {
        const element = document.getElementById("seasonal-form");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <main>
            {/* HERO */}
            <section style={styles.hero}>
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/Calgary-landscape-design-build-patio.JPG"
                        alt="Calgary fall cleanup and landscape maintenance"
                        fill
                        priority
                        className="object-cover"
                    />
                    <div style={styles.overlay}></div>
                </div>

                <div style={styles.heroInner} className="pt-56 pb-24 md:pt-64 md:pb-40">
                    <p style={styles.kicker}>Calgary • Seasonal Services</p>
                    <h1 style={styles.h1} className="md:!text-[72px] uppercase">
                        FALL CLEANUP CALGARY
                        <span style={{ opacity: 0.75 }}> — Essential Yard Winterization.</span>
                    </h1>
                    <p style={styles.subhead}>
                        Professional leaf removal, perennial trimming, and final seasonal grooming.
                        We prepare your property to thrive through the Calgary winter.
                    </p>

                    <div style={styles.ctaRow}>
                        <button
                            onClick={handleScrollToForm}
                            className="inline-flex items-center justify-center rounded-full bg-[#017a6d] px-12 py-[10px] text-sm font-extrabold text-white border-2 border-white/10 hover:opacity-90 transition-opacity cursor-pointer"
                        >
                            Book Fall Cleanup
                        </button>
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
                            <div style={styles.trustTitle}>Property Cleanliness</div>
                            <div style={styles.trustText}>No debris left behind—just a clean property.</div>
                        </div>
                        <div style={styles.trustCard}>
                            <div style={styles.trustTitle}>Reliable Scheduling</div>
                            <div style={styles.trustText}>We stick to our dates so you can plan with confidence.</div>
                        </div>
                        <div style={styles.trustCard}>
                            <div style={styles.trustTitle}>Built Right Service</div>
                            <div style={styles.trustText}>Professional methods to protect your yard.</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* STATS COUNTER */}
            <StatsCounter />

            <section style={styles.offerSection}>
                <div style={styles.inner} className="text-center md:text-left">
                    <h2 style={{ ...styles.h2, color: "#fff" }} className="w-full uppercase">WHAT WE OFFER</h2>
                    <p style={{ ...styles.p, color: "rgba(255,255,255,0.8)", marginLeft: "auto", marginRight: "auto" }} className="md:ml-0 md:mr-0">
                        Comprehensive fall maintenance to protect your landscaping investment.
                    </p>

                    <div style={styles.cards3}>
                        {[
                            "Leaf Removal & Disposal",
                            "Perennial Trimming & Cutbacks",
                            "Final Lawn Mow & Trim",
                            "Blowout Debris from Flower Beds",
                            "Bags & Disposal Included",
                            "Standard & Priority Scheduling"
                        ].map((offer, i) => (
                            <div key={i} style={styles.offerCard}>
                                <h3 style={styles.offerTitle}>{offer}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

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
                            <button
                                onClick={handleScrollToForm}
                                className="inline-flex items-center justify-center rounded-lg bg-[#017a6d] px-10 py-4 text-sm font-black text-white hover:bg-[#01645a] transition-all transform hover:-translate-y-1 shadow-lg cursor-pointer"
                            >
                                REQUEST AN ESTIMATE
                            </button>
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

            {/* GUARANTEES */}
            <Section title="GUARANTEES" titleClassName="text-[#017a6d] !text-[30.6px] uppercase">
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 mt-12">
                    <div className="flex flex-col p-8 rounded-xl border border-black/10 transition-all hover:border-[#017a6d] hover:bg-gray-50 group">
                        <div className="w-12 h-12 rounded-full bg-[#017a6d]/5 flex items-center justify-center mb-6 group-hover:bg-[#017a6d] transition-colors">
                            <svg className="w-6 h-6 text-[#017a6d] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="font-black text-xl mb-3">Satisfaction Guarantee</h3>
                        <p className="text-black/60 leading-relaxed">
                            If you&apos;re not happy with the quality of the cleanup, we&apos;ll return to make it right.
                        </p>
                    </div>

                    <div className="flex flex-col p-8 rounded-xl border border-black/10 transition-all hover:border-[#017a6d] hover:bg-gray-50 group">
                        <div className="w-12 h-12 rounded-full bg-[#017a6d]/5 flex items-center justify-center mb-6 group-hover:bg-[#017a6d] transition-colors">
                            <svg className="w-6 h-6 text-[#017a6d] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="font-black text-xl mb-3">Reliable Service Guarantee</h3>
                        <p className="text-black/60 leading-relaxed">
                            We stick to our scheduled windows, rain or shine, to ensure your property is ready for winter.
                        </p>
                    </div>
                </div>
            </Section>



            {/* LEAD FORM SECTION */}
            <Section id="seasonal-form" title="REQUEST YOUR SEASONAL SERVICE ESTIMATE" titleClassName="text-[#017a6d]">
                <div className="max-w-4xl mx-auto">
                    <p className="text-center text-lg text-black/60 mb-8 font-medium italic">
                        Submit your details below for a professional Fall Cleanup estimate.
                    </p>
                    <JobberLeadForm
                        clienthubId="41b3399e-3795-43d8-afe2-e6c38c1b3e6e-2240716"
                        formUrl="https://clienthub.getjobber.com/client_hubs/41b3399e-3795-43d8-afe2-e6c38c1b3e6e/public/work_request/embedded_work_request_form?form_id=2240716"
                    />
                </div>
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
                        Book Now!
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
    offerCard: { background: "#019587", borderRadius: 12, padding: "24px 20px", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "80px", border: "none" },
    offerTitle: { margin: 0, fontSize: 21.6, fontWeight: 900, color: "#fff", textAlign: "center" as const },

    faq: { marginTop: 18, display: "grid", gap: 10 },
    details: { border: "1px solid rgba(0,0,0,0.10)", borderRadius: 8, padding: "10px 14px", background: "#fff" },
    summary: { cursor: "pointer", fontWeight: 900, color: "#000" },
};
