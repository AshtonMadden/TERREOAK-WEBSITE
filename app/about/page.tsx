"use client";

import Link from "next/link";
import Image from "next/image";
import { Section, ScrollReveal } from "../components/UI";

export default function AboutPage() {
    return (
        <main className="bg-white text-black">
            {/* HERO */}
            <section className="relative min-h-[70vh] flex flex-col justify-center border-b border-black/10 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/gallery/project-1.png"
                        alt="TERREOAK Landscaping projects in Calgary"
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </div>

                <div className="relative z-10 mx-auto max-w-6xl px-6 pt-44 pb-24 md:pt-60 md:pb-32">
                    <p className="text-[14px] font-bold tracking-widest text-[#01fa6d] uppercase drop-shadow-md">
                        TERREOAK • OUR STORY
                    </p>
                    <h1 className="mt-4 text-[42px] md:text-[64px] font-black leading-[1.1] tracking-tight text-white drop-shadow-2xl max-w-4xl uppercase">
                        ABOUT TERREOAK<br />
                        <span className="text-[#01fa6d]">BUILT RIGHT.</span>
                    </h1>
                    <p className="mt-6 max-w-2xl text-[1.1rem] font-bold text-white/90 md:text-[1.3rem]">
                        Local, reliable, and committed to Calgary properties. We focus on professional design, quality builds, and accountable maintenance.
                    </p>
                    <div className="mt-10 flex flex-wrap gap-4">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-full bg-[#017a6d] px-12 py-[14px] text-[16px] font-extrabold text-white border-2 border-white/10 hover:opacity-90 transition-opacity whitespace-nowrap"
                        >
                            START A CONVERSATION
                        </Link>
                        <a
                            href="tel:4038913252"
                            className="inline-flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm px-12 py-[14px] text-[16px] font-extrabold text-white border-2 border-white/40 hover:bg-white/20 transition-colors whitespace-nowrap"
                        >
                            CALL NOW
                        </a>
                    </div>

                    {/* TRUST GRID */}
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="rounded-lg border border-black/10 bg-white p-[14px]">
                            <h3 className="font-black text-[16px] text-black">LOCAL CALGARY EXPERTISE</h3>
                            <p className="mt-1.5 text-[14px] text-black/70 leading-relaxed">
                                Born and bred in Calgary—we know what works in our city's environment.
                            </p>
                        </div>
                        <div className="rounded-lg border border-black/10 bg-white p-[14px]">
                            <h3 className="font-black text-[16px] text-black">INTEGRITY IN BUILD</h3>
                            <p className="mt-1.5 text-[14px] text-black/70 leading-relaxed">
                                We don't cut corners. We prep right so your project lasts for years.
                            </p>
                        </div>
                        <div className="rounded-lg border border-black/10 bg-white p-[14px]">
                            <h3 className="font-black text-[16px] text-black">LONG-TERM CARE</h3>
                            <p className="mt-1.5 text-[14px] text-black/70 leading-relaxed">
                                We build relationships, not just projects. We're here for the long haul.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* OUR MISSION */}
            <Section
                kicker="Our Mission"
                title="BUILT RIGHT ISN'T JUST A SLOGAN"
                titleClassName="text-[#017a6d]"
                py="py-24"
            >
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <div className="lg:w-1/2 space-y-6 text-[18px] text-black/80 leading-relaxed font-medium">
                        <p>
                            TERREOAK Landscaping & Snow was founded on a simple principle: doing things the right way. In a city with extreme weather like Calgary, "Built Right" is a necessity for results that last.
                        </p>
                        <p>
                            Whether we are designing a custom backyard oasis, clearing a commercial parking lot at 3 AM, or performing a seasonal cleanup, our focus remains on professional standards and reliable communication.
                        </p>
                        <p>
                            We work with homeowners, builders, and commercial property managers who expect clean execution, clear communication, and long-term value.
                        </p>
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl border border-black/5">
                            <Image
                                src="/Calgary-landscape-design-build-patio.JPG"
                                alt="TERREOAK landscape project in Calgary"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </Section>

            {/* FINAL CTA */}
            <section className="py-24 bg-[#017a6d] text-center text-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase">READY TO START YOUR PROJECT?</h2>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12 font-bold italic">
                        Let's discuss how we can bring professional standards and "Built Right" quality to your property.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-full bg-white px-12 py-[16px] text-[18px] font-black text-[#017a6d] hover:bg-gray-100 transition-all shadow-2xl hover:-translate-y-1"
                    >
                        GET IN TOUCH
                    </Link>
                </div>
            </section>
        </main>
    );
}
