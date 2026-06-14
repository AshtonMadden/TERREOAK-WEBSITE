"use client";

import Link from "next/link";
import Image from "next/image";
import { Section, ScrollReveal } from "../components/UI";
import OurBlogSection from "../components/OurBlogSection";
import PremiumHero from "../components/PremiumHero";
import TrustBar from "../components/TrustBar";

export default function ProjectsPage() {
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
            <PremiumHero
                title={<>OUR PROJECTS<br /><span className="text-[#01fa6d]">Proven in Calgary.</span></>}
                backgroundImage="/Landscape web page pics/Techo-Bloc-pavers-river-rock.JPG"
                badgeLabel="TERREOAK • Work & Results"
                ctaText="VIEW PROJECTS"
                onCtaClick={() => document.getElementById('featured-projects')?.scrollIntoView({ behavior: 'smooth' })}
            />

            <TrustBar />

            {/* FEATURED PROJECTS */}
            <Section
                id="featured-projects"
                title="FEATURED PROJECTS"
                titleClassName="text-[#017a6d]"
                wrapperClassName="bg-gray-50 border-y border-black/5"
            >
                <div className="max-w-6xl mx-auto flex flex-col gap-24">
                    {[
                      {
                        id: 1,
                        title: "Custom Stone Pathway",
                        location: "McKenzie Lake, Calgary AB",
                        budget: "$5,000",
                        desc: "This project focused on upgrading an outdated, low-end rock and stepping-stone pathway into a premium, durable hardscape. The client wanted a much cleaner, modern look that would be easy to maintain and drastically improve their backyard's curb appeal. Within just two days, our crew stripped the existing materials and installed a far superior, professional-grade foundation and aesthetic finish.",
                        img: "/Landscape web page pics/Finished-hardscape-project.JPG",
                        link: "/mckenzielakelandscaping"
                      },
                      {
                        id: 2,
                        title: "Techo-Bloc Path",
                        location: "McKenzie Lake, Calgary AB",
                        budget: "$10,000",
                        desc: "This project focused entirely on high-quality hardscaping to completely refresh an outdated side-yard and pathway. The old mixed rock and aggregate steppers were heavily weathered and failing, so we completely removed and disposed of them to make way for a modern upgrade. We replaced the old pathway with large-format Techo-Bloc Blu 60 Grande pavers in a stunning Shale Grey finish, cleanly bordered with premium washed river rock for a striking, low-maintenance aesthetic.",
                        img: "/Landscape web page pics/Techo-Bloc-paver-pathway.JPG",
                        link: "/projects/featured-project-2"
                      }
                    ].map((project, index) => (
                        <div key={project.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Image Side */}
                            <div className={`relative overflow-hidden rounded-3xl aspect-[4/3] shadow-xl border border-black/5 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                <Image
                                    src={project.img}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                
                                {/* Info Bar */}
                                <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-5 grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    <div className="col-span-2 sm:col-span-1">
                                        <div className="text-white/80 text-[10px] uppercase tracking-[0.2em] font-bold mb-1">Project Scope</div>
                                        <div className="text-white font-black text-base md:text-lg leading-tight">{project.title}</div>
                                    </div>
                                    <div className="col-span-1">
                                        <div className="text-white/80 text-[10px] uppercase tracking-[0.2em] font-bold mb-1">Location</div>
                                        <div className="text-white font-black text-base md:text-lg leading-tight">{project.location.split(',')[0]}</div>
                                    </div>
                                    <div className="col-span-1 text-right sm:text-left">
                                        <div className="text-white/80 text-[10px] uppercase tracking-[0.2em] font-bold mb-1">Investment</div>
                                        <div className="text-white font-black text-base md:text-lg leading-tight text-[#01fa6d]">{project.budget}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Text Summary Side */}
                            <div className={`text-lg text-black/80 leading-relaxed font-medium ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                <h3 className="text-3xl font-black text-black mb-6 uppercase">{project.title}</h3>
                                <p className="mb-6">{project.desc}</p>
                                
                                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                    <Link
                                        href={project.link}
                                        className="inline-flex items-center justify-center rounded-lg bg-black px-8 py-3 text-sm font-black text-white hover:bg-black/80 transition-all transform hover:-translate-y-1 shadow-md cursor-pointer uppercase tracking-wider"
                                    >
                                        Read Full Project
                                    </Link>
                                    <button 
                                        onClick={() => document.getElementById('seasonal-form')?.scrollIntoView({ behavior: 'smooth' })}
                                        className="inline-flex items-center justify-center rounded-lg bg-[#01fa6d] px-8 py-3 text-sm font-black text-black hover:opacity-90 transition-all transform hover:-translate-y-1 shadow-md cursor-pointer uppercase tracking-wider"
                                    >
                                        Get a Similar Quote
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

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
