"use client";

import { Section, ScrollReveal } from "../components/UI";
import Link from "next/link";
import GoogleReviewBadge from "../components/GoogleReviewBadge";
import StatsCounter from "../residential-snow-removal/StatsCounter";
import Image from "next/image";

export default function VideoTestimonialsPage() {
    const videos: never[] = [];
    const testimonialStats = [
        { end: 39, label: "5-Star Google Reviews", suffix: "" },
        { end: 100, label: "Satisfaction Guarantee", suffix: "%" },
        { end: 98, label: "Client Retention Rate", suffix: "%" },
    ];

    return (
        <main className="min-h-screen bg-white">
            {/* HERO SECTION */}
            <section className="relative min-h-screen flex flex-col justify-center border-b border-black/10 overflow-hidden bg-black">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/Calgary-landscape-design-build-patio.JPG"
                        alt="Calgary landscaping design and build patio"
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60 z-0"></div>
                </div>

                <div className="relative z-10 mx-auto max-w-6xl w-full px-6 pt-48 pb-16 md:pt-56 md:pb-24 lg:pt-60 lg:pb-32 text-left">
                    <ScrollReveal>
                        <p className="text-[14px] font-bold tracking-widest text-[#01fa6d] uppercase drop-shadow-md">
                            Calgary • What Our Clients Say
                        </p>
                        <h1 className="mt-4 text-[42px] md:text-[56px] lg:text-[64px] font-black leading-[1.1] tracking-tight text-white drop-shadow-2xl max-w-4xl uppercase">
                            VIDEO<br />
                            <span className="text-[#01fa6d]">TESTIMONIALS</span>
                        </h1>
                        <p className="mt-6 max-w-2xl text-[1.1rem] font-bold text-white/90 md:text-[1.3rem] drop-shadow-md">
                            Don't just take our word for it. Hear directly from our satisfied customers across Calgary about their experience with TERREOAK.
                        </p>

                        <div className="mt-10 flex flex-col md:flex-row items-start md:items-center gap-8">
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/portfolio"
                                    className="inline-flex items-center justify-center rounded-full bg-[#01fa6d] px-12 py-[16px] text-[16px] font-extrabold text-black border-2 border-white/10 hover:opacity-90 transition-all cursor-pointer shadow-xl shadow-[#01fa6d]/20 hover:-translate-y-1"
                                >
                                    VIEW PORTFOLIO
                                </Link>
                                <a
                                    href="tel:+15877077648"
                                    className="inline-flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm px-12 py-[14px] text-[16px] font-extrabold text-white border-2 border-white/40 hover:bg-white/20 transition-colors"
                                >
                                    CALL NOW
                                </a>
                            </div>

                            <GoogleReviewBadge />
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* STATS COUNTER */}
            <StatsCounter
                stats={testimonialStats}
                backgroundColor="#f3f4f6" // Light gray background
                numberColor="#017a6d"
                labelColor="#000"
                borderBottom="1px solid rgba(0,0,0,0.05)"
            />

            {/* VIDEO GRID / CAROUSEL (Disabled) */}
            <Section
                kicker="Watch Our Reviews"
                kickerClassName="text-[#017a6d]"
                title="CLIENT SUCCESS STORIES"
                titleClassName="text-black uppercase"
                wrapperClassName="bg-white py-24"
            >
                <div className="mt-12 md:mt-16 text-center text-black/60 font-medium text-lg min-h-[40vh] flex flex-col items-center justify-center">
                    <p className="text-4xl md:text-5xl font-black text-black tracking-tight uppercase">COMING SOON!</p>
                    <p className="mt-6 text-xl max-w-xl mx-auto text-black/70">We are currently curating our latest video testimonials. Check back here soon to see what our clients have to say about the TERREOAK experience.</p>
                </div>
            </Section>


        </main>
    );
}
