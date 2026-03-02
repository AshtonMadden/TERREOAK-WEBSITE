import Link from "next/link";

export default function BlogPage() {
    return (
        <main>
            {/* HERO */}
            <section style={styles.hero}>
                <div style={styles.inner}>
                    <p style={styles.kicker}>TerreOak • Insights</p>
                    <h1 style={styles.h1}>
                        The TerreOak Blog
                        <span style={{ opacity: 0.75 }}> — Expert Advice.</span>
                    </h1>
                    <p style={styles.subhead}>
                        Landscaping, snow removal, and property maintenance tips specifically for Calgary's unique climate.
                        Learn how to protect your investment and improve your outdoor space.
                    </p>
                    <div style={styles.ctaRow}>
                        <Link href="/contact" style={styles.primaryBtn}>
                            Get an Estimate
                        </Link>
                    </div>

                    {/* Trust Grid */}
                    <div style={styles.trustGrid}>
                        <div style={styles.trustCard}>
                            <div style={styles.trustTitle}>Seasonal Tips</div>
                            <div style={styles.trustText}>Stay ahead of Calgary's weather with timely property care advice.</div>
                        </div>
                        <div style={styles.trustCard}>
                            <div style={styles.trustTitle}>Professional Advice</div>
                            <div style={styles.trustText}>Industry insights on materials, base prep, and maintenance.</div>
                        </div>
                        <div style={styles.trustCard}>
                            <div style={styles.trustTitle}>Local Focus</div>
                            <div style={styles.trustText}>Everything we share is tailored to the Calgary environment.</div>
                        </div>
                    </div>
                </div>
            </section>

            <section style={styles.section}>
                <div style={styles.inner}>
                    <div className="space-y-8">
                        <div className="border-b border-black/10 pb-6">
                            <h2 className="text-2xl font-semibold">Latest Updates Coming Soon</h2>
                            <p className="text-black/60 mt-2">Stay tuned for our expert tips and company news.</p>
                        </div>
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
