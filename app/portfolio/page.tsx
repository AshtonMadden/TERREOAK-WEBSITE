"use client";

import Link from "next/link";
import Image from "next/image";
import { Section, ScrollReveal } from "../components/UI";
import OurBlogSection from "../components/OurBlogSection";

export default function PortfolioPage() {
    const allImages = [
        // Landscaping
        { src: "/Landscape web page pics/Calgary-Concrete-pour.JPG", alt: "Calgary Concrete Pour" },
        { src: "/Landscape web page pics/Calgary-hardscaping.JPG", alt: "Calgary Hardscaping" },
        { src: "/Landscape web page pics/Exposed-aggregate-concrete.JPG", alt: "Exposed Aggregate Concrete" },
        { src: "/Landscape web page pics/Finished-hardscape-project.JPG", alt: "Finished Hardscape Project" },
        { src: "/Landscape web page pics/Hardscape-path-install.JPG", alt: "Hardscape Path Install" },
        { src: "/Landscape web page pics/Land-clearing-new-build.JPG", alt: "Land Clearing New Build" },
        { src: "/Landscape web page pics/Techo-Bloc-paver-pathway.JPG", alt: "Techo-Bloc Paver Pathway" },
        { src: "/Landscape web page pics/Techo-Bloc-pavers-river-rock.JPG", alt: "Techo-Bloc Pavers and River Rock" },
        { src: "/Landscape web page pics/Techo-bloc-bin-pad.JPG", alt: "Techo-Bloc Bin Pad" },
        { src: "/Landscape web page pics/base-prep-paverpath.JPG", alt: "Base Preparation for Paver Path" },
        { src: "/Landscape web page pics/lawn-relevel-calgary.JPG", alt: "Lawn Relevel Calgary" },
        { src: "/Landscape web page pics/rock-bed-refresh.JPG", alt: "Rock Bed Refresh" },
        // Spring
        { src: "/spring-cleanup-pics/Calgary-Core-Aeration.JPG", alt: "Calgary Core Aeration" },
        { src: "/spring-cleanup-pics/Calgary-Leaf-Cleanup.JPG", alt: "Calgary Leaf Cleanup" },
        { src: "/spring-cleanup-pics/Copperfield-leaf-cleanup.JPG", alt: "Copperfield Leaf Cleanup" },
        { src: "/spring-cleanup-pics/Leaf-Cleanup-near-me.jpg", alt: "Leaf Cleanup Near Me" },
        { src: "/spring-cleanup-pics/Leaf-removal-Calgary.JPG", alt: "Leaf Removal Calgary" },
        { src: "/spring-cleanup-pics/Power-raking-services.JPG", alt: "Power Raking Services" },
        // Snow
        { src: "/Snow Page web pics/Ice-removal-after.JPG", alt: "Ice Removal After" },
        { src: "/Snow Page web pics/Ice-removal-before.JPG", alt: "Ice Removal Before" },
        { src: "/Snow Page web pics/Residential-snow-removal.JPG", alt: "Residential Snow Removal" },
        { src: "/Snow Page web pics/South-Calgary-Snow-Removal.JPG", alt: "South Calgary Snow Removal" },
        { src: "/Snow Page web pics/TERREOAK-Snow-Picket.JPG", alt: "TERREOAK Snow Picket" },
        { src: "/residential-snow-removalJPG.JPG", alt: "Residential Snow Removal Calgary" },
    ];

    const row1 = allImages.slice(0, Math.ceil(allImages.length / 2));
    const row2 = allImages.slice(Math.ceil(allImages.length / 2));

    return (
        <main className="bg-white overflow-hidden">
            {/* HERO */}
            <section className="relative min-h-screen flex flex-col justify-center border-b border-black/10 overflow-hidden bg-black">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/Landscape web page pics/Techo-Bloc-pavers-river-rock.JPG"
                        alt="Techo-Bloc Pavers and River Rock project in Calgary"
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                <div className="relative z-10 mx-auto max-w-6xl px-6 pt-48 pb-16 md:pt-56 md:pb-24 lg:pt-60 lg:pb-32 text-left">
                    <p className="text-[14px] font-bold tracking-widest text-[#01fa6d] uppercase drop-shadow-md">
                        TERREOAK • Work & Results
                    </p>
                    <h1 className="mt-4 text-[42px] md:text-[56px] lg:text-[64px] font-black leading-[1.1] tracking-tight text-white max-w-4xl uppercase drop-shadow-2xl">
                        Our Portfolio<br />
                        <span className="text-[#01fa6d]">Proven in Calgary.</span>
                    </h1>
                    <p className="mt-6 max-w-2xl text-[1.1rem] font-bold text-white/90 md:text-[1.3rem] drop-shadow-lg">
                        Explore our recent projects across Calgary. From hardscape transformations to reliable seasonal care, our work is built right and maintained better.
                    </p>


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

            {/* MARQUEE SECTION */}
            <section className="py-24 space-y-8">
                {/* ROW 1 */}
                <div className="relative flex overflow-x-hidden">
                    <div className="flex animate-marquee whitespace-nowrap">
                        {[...row1, ...row1].map((img, i) => (
                            <div key={i} className="mx-4 w-[350px] md:w-[450px] flex-shrink-0">
                                <ScrollReveal className="relative aspect-[4/3] rounded-2xl overflow-hidden group shadow-xl border border-black/5">
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                                </ScrollReveal>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ROW 2 */}
                <div className="relative flex overflow-x-hidden">
                    <div className="flex animate-marquee2 whitespace-nowrap">
                        {[...row2, ...row2].map((img, i) => (
                            <div key={i} className="mx-4 w-[350px] md:w-[450px] flex-shrink-0">
                                <ScrollReveal className="relative aspect-[4/3] rounded-2xl overflow-hidden group shadow-xl border border-black/5">
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                                </ScrollReveal>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="py-24 bg-[#017a6d] text-center text-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase">READY TO START YOUR PROJECT?</h2>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12 font-bold italic">
                        Join our list of satisfied Calgary clients. Whether it&apos;s a summer transformation or winter protection, we&apos;ve got you covered.
                    </p>
                    <Link
                        href="/support"
                        className="inline-flex items-center justify-center rounded-full bg-[#01fa6d] px-12 py-[16px] text-[18px] font-black text-black hover:bg-white hover:text-[#017a6d] transition-all shadow-2xl hover:-translate-y-1"
                    >
                        GET SUPPORT
                    </Link>
                </div>
            </section>

            {/* BLOG */}
            <OurBlogSection />

            {/* MARQUEE ANIMATIONS */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes marquee2 {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
                .animate-marquee {
                    animation: marquee 60s linear infinite;
                }
                .animate-marquee2 {
                    animation: marquee2 55s linear infinite;
                }
                .animate-marquee:hover, .animate-marquee2:hover {
                    animation-play-state: paused;
                }
            ` }} />
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
        background: "#01fa6d",
        color: "#000",
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
