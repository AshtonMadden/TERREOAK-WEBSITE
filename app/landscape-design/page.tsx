"use client";

import Link from "next/link";
import { Section, ScrollReveal } from "../components/UI";
import JobberLeadForm from "../components/JobberLeadForm";

export default function LandscapeDesignPage() {
    const handleScrollToForm = () => {
        const element = document.getElementById("landscape-design-form");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <main>
            {/* HERO */}
            <section style={styles.hero}>
                <div style={styles.inner}>
                    <p style={styles.kicker}>Calgary • Landscape Design</p>
                    <h1 style={styles.h1} className="uppercase">
                        Landscape Design & Build
                        <span style={{ opacity: 0.75 }}> — Built for Calgary.</span>
                    </h1>
                    <p style={styles.subhead}>
                        Transform your outdoor space with our professional design and installation services.
                        We focus on base preparation and quality materials that survive Calgary's freeze/thaw cycles.
                    </p>
                    <div style={styles.ctaRow}>
                        <button
                            onClick={handleScrollToForm}
                            style={styles.primaryBtn}
                            className="cursor-pointer"
                        >
                            Request a Consultation
                        </button>
                        <Link href="/portfolio" style={styles.secondaryBtn}>
                            See Recent Projects
                        </Link>
                    </div>

                    {/* Trust Grid */}
                    <div style={styles.trustGrid}>
                        <div style={styles.trustCard}>
                            <div style={styles.trustTitle}>Design • Build • Maintain</div>
                            <div style={styles.trustText}>Total property transformation from concept to completion.</div>
                        </div>
                        <div style={styles.trustCard}>
                            <div style={styles.trustTitle}>Fully Insured & WCB</div>
                            <div style={styles.trustText}>Local, accountable, and professionally protected crews.</div>
                        </div>
                        <div style={styles.trustCard}>
                            <div style={styles.trustTitle}>Built Right Guarantee</div>
                            <div style={styles.trustText}>Quality materials and methods that stand the test of time.</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONSULTATION FORM SECTION */}
            <Section id="landscape-design-form" title="BOOK YOUR DESIGN CONSULTATION" titleClassName="text-[#017a6d]">
                <div className="max-w-4xl mx-auto">
                    <p className="text-center text-lg text-black/60 mb-8 font-medium italic">
                        Take the first step toward your dream yard. Submit your project details below.
                    </p>
                    <JobberLeadForm
                        clienthubId="41b3399e-3795-43d8-afe2-e6c38c1b3e6e-2235504"
                        formUrl="https://clienthub.getjobber.com/client_hubs/41b3399e-3795-43d8-afe2-e6c38c1b3e6e/public/work_request/embedded_work_request_form?form_id=2235504"
                    />
                </div>
            </Section>
        </main>
    );
}

const styles: Record<string, React.CSSProperties> = {
    hero: {
        background: "#fff",
        padding: "220px 0 80px",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
    },
    inner: { maxWidth: 1200, margin: "0 auto", padding: "0 20px" },
    kicker: { margin: 0, fontWeight: 700, color: "rgba(0,0,0,0.6)", textTransform: "uppercase", letterSpacing: 1, fontSize: 13 },
    h1: { margin: "14px 0 0", fontSize: 52, lineHeight: 1.05, fontWeight: 900, color: "#000" },
    subhead: { marginTop: 20, maxWidth: 820, fontSize: 20, lineHeight: 1.5, color: "rgba(0,0,0,0.7)" },
    ctaRow: { marginTop: 30, display: "flex", gap: 12, flexWrap: "wrap" },
    primaryBtn: {
        background: "#017a6d",
        color: "#fff",
        padding: "14px 32px",
        borderRadius: 999,
        fontWeight: 800,
        textDecoration: "none",
        display: "inline-flex",
    },
    secondaryBtn: {
        border: "2px solid #017a6d",
        color: "#017a6d",
        padding: "14px 32px",
        borderRadius: 999,
        fontWeight: 800,
        textDecoration: "none",
        display: "inline-flex",
        background: "transparent",
    },
    trustGrid: { marginTop: 40, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12 },
    trustCard: { border: "1px solid rgba(0,0,0,0.10)", borderRadius: 8, padding: 20, background: "#f9fafb" },
    trustTitle: { fontWeight: 900, color: "#000", fontSize: 16 },
    trustText: { marginTop: 8, color: "rgba(0,0,0,0.7)", fontSize: 14, lineHeight: 1.5 },
};
