"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Section, ScrollReveal } from "../components/UI";
import JobberLeadForm from "../components/JobberLeadForm";

export default function CommercialGroundsMaintenancePage() {
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
        const element = document.getElementById("commercial-form");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <main className="bg-white text-black">
            {/* HERO */}
            <section className="relative min-h-[70vh] flex flex-col justify-center border-b border-black/10 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/commercial.png"
                        alt="Commercial grounds maintenance and snow removal in Calgary"
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                <div className="relative z-10 mx-auto max-w-6xl px-6 pt-44 pb-24 md:pt-60 md:pb-32">
                    <p className="text-[14px] font-bold tracking-widest text-[#01fa6d] uppercase drop-shadow-md">
                        Calgary • Commercial Services
                    </p>
                    <h1 className="mt-4 text-[42px] md:text-[64px] font-black leading-[1.1] tracking-tight text-white drop-shadow-2xl max-w-4xl uppercase">
                        COMMERCIAL GROUNDS MAINTENANCE &<br />
                        <span className="text-[#01fa6d]">PROPERTY MANAGEMENT.</span>
                    </h1>
                    <p className="mt-6 max-w-2xl text-[1.1rem] font-bold text-white/90 md:text-[1.3rem]">
                        Complete exterior management for commercial properties, condos, and industrial sites. Reliable. Accountable. Professional.
                    </p>
                    <div className="mt-10 flex flex-wrap gap-4">
                        <button
                            onClick={handleScrollToForm}
                            className="inline-flex items-center justify-center rounded-full bg-[#017a6d] px-12 py-[14px] text-[16px] font-extrabold text-white border-2 border-white/10 hover:opacity-90 transition-opacity cursor-pointer"
                        >
                            Request a Commercial Bid
                        </button>
                        <a
                            href="tel:4038913252"
                            className="inline-flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm px-12 py-[14px] text-[16px] font-extrabold text-white border-2 border-white/40 hover:bg-white/20 transition-colors"
                        >
                            CALL NOW
                        </a>
                    </div>

                    {/* TRUST GRID */}
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-lg border border-black/10 bg-white p-[14px]">
                            <h3 className="font-black text-[16px] text-black">Professional & Accountable</h3>
                            <p className="mt-1.5 text-[14px] text-black/70 leading-relaxed">
                                Fully insured and WCB-compliant. Detailed, time-stamped service logs for every visit.
                            </p>
                        </div>

                        <div className="rounded-lg border border-black/10 bg-white p-[14px]">
                            <h3 className="font-black text-[16px] text-black">24/7 Priority Monitoring</h3>
                            <p className="mt-1.5 text-[14px] text-black/70 leading-relaxed">
                                Dedicated weather monitoring and priority dispatch for commercial snow removal clients.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ABOUT US SECTION (Copied from homepage) */}
            <Section
                kicker="About Us"
                title="TERREOAK LANDSCAPING AND SNOW"
                titleClassName="text-[#017a6d]"
                py="pt-12 md:pt-16 pb-24"
            >
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <div className="lg:w-1/2 space-y-6 text-[18px] text-black/80 leading-relaxed font-medium">
                        <p>
                            TERREOAK is a full-service landscape construction and property maintenance company serving Calgary. Our work is built around four core divisions: landscape design, landscape construction, commercial grounds maintenance, and residential seasonal services.
                        </p>
                        <p>
                            From new-build sod and tree installations to hardscape construction and reliable snow removal, we deliver structured scheduling, professional systems, and results built for Alberta’s extreme seasons.
                        </p>
                        <p>
                            We work with homeowners, builders, and commercial property managers who expect clean execution, clear communication, and long-term value.
                        </p>
                        <div className="pt-4">
                            <Link
                                href="/about"
                                className="inline-flex items-center justify-center rounded-lg bg-[#017a6d] px-8 py-4 text-[16px] font-black text-white hover:bg-[#01645a] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#017a6d]/20"
                            >
                                Read Our Story
                            </Link>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl border border-black/5 ring-1 ring-black/5">
                            <Image
                                src="/Calgary-landscape-design-build-patio.JPG"
                                alt="TERREOAK high-end landscape project in Calgary"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </Section>

            {/* WHY CHOOSE (Commercial Standards - 2 Column) */}
            <Section
                kicker="Commercial Standards"
                kickerClassName="text-white/60"
                title={<span>WHY PROPERTY MANAGERS TRUST TERREOAK<br className="hidden md:block" /> FOR COMMERCIAL GROUNDS KEEPING</span>}
                titleClassName="text-white"
                wrapperClassName="bg-[#2c2d32]"
                py="pt-16 md:pt-24 pb-12"
            >
                <div className="relative z-10 max-w-3xl">
                    <p className="text-lg text-white/80 leading-relaxed font-normal">
                        We understand the liability and safety requirements of commercial sites. From new-build sod and tree installations to reliable snow removal, we deliver structured scheduling, professional systems, and results built for Alberta’s extreme seasons.
                    </p>
                    <p className="mt-6 text-lg text-white/80 leading-relaxed font-normal">
                        Our teams are equipped with high-volume machinery and digital tracking software to provide property managers with peace of mind and bulletproof liability protection.
                    </p>

                    {/* Skyline Silhouette Background */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-[150px] opacity-10 grayscale pointer-events-none z-0 overflow-hidden">
                        <Image
                            src="/images/calgary-skyline.png"
                            alt="Calgary Skyline silhouette"
                            width={1920}
                            height={150}
                            className="w-full h-full object-cover object-bottom"
                        />
                    </div>
                </div>
            </Section>

            {/* CLIENT PORTAL BANNER */}
            <section className="bg-[#2c2d32] pb-12 md:pb-16">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-[#017a6d] rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden group">
                        {/* Background Accent */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 transition-transform duration-700 group-hover:scale-110" />

                        <div className="relative z-10 text-center md:text-left">
                            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight leading-tight">
                                ACCESS YOUR <span className="text-[#01fa6d]">CLIENT PORTAL</span>
                            </h2>
                            <p className="text-white/80 text-lg font-medium max-w-xl">
                                View your quotes, pay invoices, and manage your property services 24/7 through our secure Jobber portal.
                            </p>
                        </div>

                        <div className="relative z-10 flex-shrink-0">
                            <a
                                href="https://clienthub.getjobber.com/client_hubs/41b3399e-3795-43d8-afe2-e6c38c1b3e6e/login"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-full bg-white px-10 py-5 text-[18px] font-black text-[#017a6d] hover:bg-gray-100 transition-all shadow-xl hover:-translate-y-1"
                            >
                                LOGIN TO PORTAL
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROPERTY TYPES SECTION */}
            <Section title="COMMERCIAL PROPERTIES WE SERVICE" titleClassName="text-[#017a6d]">
                <p className="max-w-3xl text-lg text-black/80 leading-relaxed font-normal mb-12">
                    We provide tailored maintenance and construction services for a wide range of commercial and community properties across Calgary.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        "Condo & Townhome Complexes",
                        "Retail & Shopping Centers",
                        "Industrial & Business Parks",
                        "HOA & Community Sites"
                    ].map((type, i) => (
                        <div key={i} className="flex flex-col items-center justify-center p-6 rounded-xl border border-black/10 transition-all hover:border-[#017a6d] hover:bg-gray-50 group text-center">
                            <div className="w-12 h-12 rounded-full bg-[#017a6d]/5 flex items-center justify-center mb-4 group-hover:bg-[#017a6d] transition-colors">
                                <svg className="w-6 h-6 text-[#017a6d] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <h3 className="font-black text-sm md:text-base">{type}</h3>
                        </div>
                    ))}
                </div>
            </Section>

            {/* PROCESS */}
            <Section
                kicker="Commercial Process"
                kickerClassName="text-white/60"
                title="OUR DEDICATED COMMERCIAL MAINTENANCE PROCESS"
                titleClassName="text-white"
                wrapperClassName="bg-[#2c2d32]"
            >
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12">
                    {[
                        { step: "01", title: "Site Assessment", desc: "Detailed walkthrough to identify safety concerns, priority zones, and maintenance needs." },
                        { step: "02", title: "Resource Planning", desc: "Customized equipment and scouting plans tailored to your specific site requirements." },
                        { step: "03", title: "24/7 Monitoring", desc: "Constant weather tracking and site monitoring to ensure proactive service dispatch." },
                        { step: "04", title: "Execution & Reporting", desc: "Skilled execution followed by immediate, time-stamped digital service logs." },
                        { step: "05", title: "Quality Audit", desc: "Regular site inspections to ensure our standards and your expectations are consistently met." }
                    ].map((p, i) => (
                        <ScrollReveal key={i} className="group relative">
                            <div className="h-full bg-[#017a6d] p-8 rounded-2xl flex flex-col justify-center min-h-[160px] border border-white/5 shadow-xl hover:bg-[#01645a] transition-all transform hover:-translate-y-1">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center font-black text-sm shrink-0">
                                        {p.step}
                                    </div>
                                    <h3 className="text-xl font-black text-white leading-tight">{p.title}</h3>
                                </div>
                                <p className="text-white/80 text-sm leading-relaxed">{p.desc}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </Section>

            {/* SERVICES */}
            <Section kicker="What We Do" title="COMPREHENSIVE COMMERCIAL SERVICES" titleClassName="text-[#017a6d]">
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12">
                    {[
                        {
                            title: "Snow & Ice Management",
                            icon: (
                                <svg className="w-8 h-8 text-[#017a6d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h8m-4-4v8" />
                                </svg>
                            ),
                            bullets: [
                                "24/7 Property Monitoring",
                                "Parking Lot Plowing & Hauling",
                                "Sidewalk Clearing & Ice Melt",
                                "Sand & Salt Application",
                                "Digital Service Logs & Photo Proof"
                            ]
                        },
                        {
                            title: "Lawn & Grounds Care",
                            icon: (
                                <svg className="w-8 h-8 text-[#017a6d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 21l1.5-4.5h11L19 21M12 3v13.5M7 16.5c0-2.5 2-4.5 5-4.5s5 2 5 4.5M9 12V9m6 3V9" />
                                </svg>
                            ),
                            bullets: [
                                "Scheduled Weekly Mowing",
                                "String Trimming & Edging",
                                "Spring & Fall Cleanups",
                                "Fertilization & Weed Control",
                                "Litter & Debris Removal"
                            ]
                        },
                        {
                            title: "Landscaping",
                            icon: (
                                <svg className="w-8 h-8 text-[#017a6d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            ),
                            bullets: [
                                "Commercial Sod & Tree Planting",
                                "Retaining Walls & Hardscapes",
                                "Irrigation System Installation",
                                "Site Enhancements & Excavation",
                                "Grading & Drainage Solutions"
                            ]
                        }
                    ].map((s, i) => (
                        <ScrollReveal key={i} className="group flex flex-col h-full bg-white rounded-2xl border border-black/10 p-8 hover:border-[#017a6d] transition-all hover:shadow-xl">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-14 h-14 rounded-xl bg-[#017a6d]/5 flex items-center justify-center shrink-0 group-hover:bg-[#017a6d] group-hover:text-white transition-all duration-300">
                                    <div className="group-hover:text-white transition-colors">
                                        {s.icon}
                                    </div>
                                </div>
                                <h3 className="font-black text-xl leading-tight uppercase tracking-tight">{s.title}</h3>
                            </div>

                            <ul className="space-y-4">
                                {s.bullets.map((bullet, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-black/70">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#017a6d] shrink-0" />
                                        <span className="text-[15px] font-medium leading-relaxed">{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </ScrollReveal>
                    ))}
                </div>
            </Section>


            {/* COMMERCIAL LEAD FORM */}
            <Section id="commercial-form" title="SECURE YOUR SERVICE PROPOSAL" titleClassName="text-[#017a6d]">
                <div className="max-w-4xl mx-auto">
                    <p className="text-center text-lg text-black/60 mb-8 font-medium italic">
                        Submit your property details below. Our commercial estimator will perform a site walkthrough within 24–48 hours to provide a fixed-price bid.
                    </p>
                    <JobberLeadForm
                        clienthubId="41b3399e-3795-43d8-afe2-e6c38c1b3e6e-2234493"
                        formUrl="https://clienthub.getjobber.com/client_hubs/41b3399e-3795-43d8-afe2-e6c38c1b3e6e/public/work_request/embedded_work_request_form?form_id=2234493"
                    />
                </div>
            </Section>

            {/* FAQ */}
            <Section kicker="Commercial Support" title="FREQUENTLY ASKED QUESTIONS" titleClassName="text-[#017a6d]" wrapperClassName="bg-white">
                <div className="mt-12 max-w-4xl mx-auto space-y-4">
                    {[
                        { q: "How is commercial snow removal priority determined?", a: "Priority is given to high-traffic commercial sites, medical facilities, and active loading zones through our 24/7 monitoring system." },
                        { q: "Do you provide seasonal grounds contracts?", a: "Yes, we offer comprehensive seasonal contracts for both summer grounds maintenance and winter snow removal." },
                        { q: "Is reporting digital and accessible?", a: "Every visit is logged with time-stamped photos and detailed reports, immediately available to property managers for liability protection." },
                        { q: "Are you fully insured for commercial projects?", a: "TERREOAK is fully insured with $5M liability coverage and is in good standing with WCB Alberta." }
                    ].map((faq, i) => (
                        <details key={i} className="group bg-white rounded-xl border border-black/5 overflow-hidden">
                            <summary className="flex items-center justify-between p-6 cursor-pointer font-black text-lg hover:bg-gray-50 transition-colors">
                                {faq.q}
                                <span className="w-8 h-8 rounded-full bg-[#017a6d]/5 flex items-center justify-center group-open:rotate-45 transition-transform text-[#017a6d]">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                                    </svg>
                                </span>
                            </summary>
                            <div className="p-6 pt-0 text-black/60 leading-relaxed border-t border-black/5 bg-gray-50/30">
                                {faq.a}
                            </div>
                        </details>
                    ))}
                </div>
            </Section>

            {isCtaVisible && (
                <div className="fixed bottom-6 left-0 right-0 z-[1000] flex items-center bg-[#01fa6d] rounded-full p-1 shadow-2xl w-fit mx-auto md:hidden animate-float-up">
                    <button
                        onClick={handleScrollToForm}
                        className="text-black px-8 py-3 font-extrabold text-lg flex items-center justify-center whitespace-nowrap cursor-pointer"
                    >
                        REQUEST A COMMERCIAL BID
                    </button>

                    <button
                        onClick={() => setIsCtaVisible(false)}
                        className="bg-black/10 text-black rounded-full w-8 h-8 flex items-center justify-center cursor-pointer text-sm font-black mr-1"
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
};
