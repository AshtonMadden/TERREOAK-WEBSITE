import Link from "next/link";

export default function PortfolioPage() {
    return (
        <main>
            {/* HERO */}
            <section style={styles.hero}>
                <div style={styles.inner}>
                    <p style={styles.kicker}>TerreOak • Work & Results</p>
                    <h1 style={styles.h1} className="uppercase">
                        Our Portfolio
                        <span style={{ opacity: 0.75 }}> — Proven in Calgary.</span>
                    </h1>
                    <p style={styles.subhead}>
                        Explore our recent landscaping and snow removal projects.
                        Each project demonstrates our commitment to quality and "Built Right" results.
                    </p>
                    <div style={styles.ctaRow}>
                        <Link href="/contact" style={styles.primaryBtn}>
                            Start Your Project
                        </Link>
                    </div>

                    {/* Trust Grid */}
                    <div style={styles.trustGrid}>
                        <div style={styles.trustCard}>
                            <div style={styles.trustTitle}>Diverse Projects</div>
                            <div style={styles.trustText}>From high-end residential designs to complex commercial maintenance.</div>
                        </div>
                        <div style={styles.trustCard}>
                            <div style={styles.trustTitle}>Detailed Workmanship</div>
                            <div style={styles.trustText}>Every cut, stone, and plant placed with long-term quality in mind.</div>
                        </div>
                        <div style={styles.trustCard}>
                            <div style={styles.trustTitle}>Proven Results</div>
                            <div style={styles.trustText}>Building and maintaining properties that survive and thrive in Calgary.</div>
                        </div>
                    </div>
                </div>
            </section>

            <section style={styles.section}>
                <div style={styles.inner}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="rounded-lg bg-gray-100 p-12 text-center text-black/40 border border-black/5">Project Gallery Coming Soon</div>
                        <div className="rounded-lg bg-gray-100 p-12 text-center text-black/40 border border-black/5">Project Gallery Coming Soon</div>
                    </div>
                </div>
            </section>
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
    ctaRow: { marginTop: 30 },
    primaryBtn: {
        background: "#017a6d",
        color: "#fff",
        padding: "14px 32px",
        borderRadius: 999,
        fontWeight: 800,
        textDecoration: "none",
        display: "inline-flex",
    },
    trustGrid: { marginTop: 40, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12 },
    trustCard: { border: "1px solid rgba(0,0,0,0.10)", borderRadius: 8, padding: 20, background: "#f9fafb" },
    trustTitle: { fontWeight: 900, color: "#000", fontSize: 16 },
    trustText: { marginTop: 8, color: "rgba(0,0,0,0.7)", fontSize: 14, lineHeight: 1.5 },
    section: { padding: "80px 0", background: "#fff" },
};
