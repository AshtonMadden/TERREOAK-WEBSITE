"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Section, ScrollReveal, Carousel } from "../components/UI";
import OurBlogSection from "../components/OurBlogSection";
import StatsCounter from "../residential-snow-removal/StatsCounter";
import JobberLeadForm from "../components/JobberLeadForm";
import GoogleReviewBadge from "../components/GoogleReviewBadge";

export default function IrrigationPage() {
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
        const formElement = document.getElementById('seasonal-form');
        if (formElement) {
            formElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <main>
            {/* HERO */}
            <section className="relative min-h-screen flex flex-col justify-center border-b border-black/10 overflow-hidden bg-black">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/irrigation-hero.jpg"
                        alt="Professional irrigation blowout and sprinkler winterization in Calgary"
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
                        IRRIGATION BLOWOUTS<br />
                        <span className="text-[#01fa6d]">Protect Your Pipes.</span>
                    </h1>
                    <p className="mt-6 max-w-2xl text-[1.1rem] font-bold text-white/90 md:text-[1.3rem]">
                        Winterize your sprinkler system to prevent expensive freeze damage.
                        Professional blowouts with high-volume air to ensure every line is dry.
                    </p>

                    <div className="mt-10 flex flex-col md:flex-row items-start md:items-center gap-8">
                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={handleScrollToForm}
                                className="inline-flex items-center justify-center rounded-full bg-[#01fa6d] px-12 py-[16px] text-[16px] font-extrabold text-black border-2 border-white/10 hover:opacity-90 transition-all cursor-pointer shadow-xl shadow-[#01fa6d]/20 hover:-translate-y-1"
                            >
                                BOOK YOUR BLOWOUT
                            </button>
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

            <section style={styles.offerSection}>
                <div style={styles.inner} className="text-left">
                    <h2 style={{ ...styles.h2, color: "#fff" }} className="w-full uppercase">WHAT WE OFFER</h2>
                    <p style={{ ...styles.p, color: "rgba(255,255,255,0.8)" }}>
                        Professional winterization services to safeguard your irrigation system.
                    </p>

                    <div style={styles.cards3}>
                        {[
                            "Main Line Shut-off & Drain",
                            "High-Volume Air Purge",
                            "Backflow Preventer Winterization",
                            "Controller Power Down",
                            "System Status Report",
                            "Standard & Priority Scheduling"
                        ].map((offer, i) => (
                            <div key={i} style={styles.offerCard}>
                                <h3 style={styles.offerTitle}>{offer}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* BUILT FOR BLOWOUTS SECTION */}
            <section style={styles.sectionAlt} className="section-divider">
                <div style={styles.inner}>
                    <div style={{ maxWidth: 800 }}>
                        <h2 style={{ ...styles.h2, fontSize: 36, lineHeight: 1.2, color: "#017a6d" }}>
                            CALGARY IRRIGATION WINTERIZATION THAT&apos;S BUILT FOR WINTER.
                        </h2>
                        <p style={{ ...styles.p, fontSize: 18, marginTop: 24, color: "#333" }}>
                            In Calgary, the frost line goes deep, and even a small amount of water left in your irrigation lines can lead to cracked pipes, burst heads, and damaged backflow preventers. Our irrigation blowout service uses commercial-grade high-volume compressors to systematically purge every zone of your system, ensuring they are completely dry and safe for the sub-zero temperatures ahead.
                        </p>
                        <p style={{ ...styles.p, fontSize: 18, marginTop: 16, color: "#333" }}>
                            Don&apos;t risk expensive repairs in the spring. Our experienced technicians understand the complexities of various system types and follow a rigorous checklist to ensure your main line is drained, your backflow is winterized, and your system is fully protected against freeze damage.
                        </p>
                        <div style={{ marginTop: 32 }}>
                            <button
                                onClick={handleScrollToForm}
                                className="inline-flex items-center justify-center rounded-lg bg-[#01fa6d] px-10 py-4 text-sm font-black text-black hover:opacity-90 transition-all transform hover:-translate-y-1 shadow-lg cursor-pointer"
                            >
                                BOOK YOUR BLOWOUT
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
                        { step: "01", title: "Book your blowout", desc: "Select your preferred date for winterization." },
                        { step: "02", title: "Site Preparation", desc: "Ensure your water is shut off and controller is accessible." },
                        { step: "03", title: "System Winterization", desc: "Our tech purges the system and secures all components." }
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
                        <h3 className="font-black text-xl mb-3">Freeze-Free Guarantee</h3>
                        <p className="text-black/60 leading-relaxed">
                            We guarantee our blowout results. If we performed the blowout and a line cracks from freezing, we fix it.
                        </p>
                    </div>

                    <div className="flex flex-col p-8 rounded-xl border border-black/10 transition-all hover:border-[#017a6d] hover:bg-gray-50 group">
                        <div className="w-12 h-12 rounded-full bg-[#017a6d]/5 flex items-center justify-center mb-6 group-hover:bg-[#017a6d] transition-colors">
                            <svg className="w-6 h-6 text-[#017a6d] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="font-black text-xl mb-3">Reliable Scheduling Guarantee</h3>
                        <p className="text-black/60 leading-relaxed">
                            We stick to our scheduled dates so your system is winterized before the hard freeze hits.
                        </p>
                    </div>
                </div>
            </Section>



            <Section id="seasonal-form" title="REQUEST AN ESTIMATE" titleClassName="text-[#01fa6d]">
                <div className="max-w-4xl mx-auto w-full">
                    <p className="text-center text-xl text-black/60 mb-8 font-medium italic">
                        Tell us about your property and we&apos;ll get back to you with a professional estimate for your irrigation blowout.
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
                            <summary style={styles.summary}>When should I schedule my blowout?</summary>
                            <p style={styles.pSmall}>
                                It&apos;s best to schedule between mid-September and mid-October. You want to ensure the blowout is completed before the first sustained ground frost.
                            </p>
                        </details>

                        <details style={styles.details}>
                            <summary style={styles.summary}>What if my water is still on?</summary>
                            <p style={styles.pSmall}>
                                We require you to shut off your main irrigation valve and drain your backflow before we arrive. If you need help, we can provide instructions.
                            </p>
                        </details>

                        <details style={styles.details}>
                            <summary style={styles.summary}>Does this protect the whole system?</summary>
                            <p style={styles.pSmall}>
                                Yes, our high-volume purge forces water out of all lateral lines, main lines, and individual heads.
                            </p>
                        </details>
                    </div>

                    <div style={{ marginTop: 22 }}>
                        <Link href="/customer-support" style={styles.secondaryBtn}>Customer Support</Link>
                    </div>
                </div>
            </section>

            {/* BLOG */}
            <OurBlogSection />

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
    offerCard: { background: "#019587", borderRadius: 12, padding: "24px 20px", display: "flex", alignItems: "center", justifyContent: "flex-start", minHeight: "80px", border: "none" },
    offerTitle: { margin: 0, fontSize: 21.6, fontWeight: 900, color: "#fff", textAlign: "left" as const },

    faq: { marginTop: 18, display: "grid", gap: 10 },
    details: { border: "1px solid rgba(0,0,0,0.10)", borderRadius: 8, padding: "10px 14px", background: "#fff" },
    summary: { cursor: "pointer", fontWeight: 900, color: "#000" },
};
