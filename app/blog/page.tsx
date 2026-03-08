"use client";

import Image from "next/image";
import { Section } from "../components/UI";

export default function BlogPage() {
    return (
        <main>
            {/* HERO */}
            <section className="relative min-h-screen flex flex-col justify-center border-b border-black/10 overflow-hidden bg-black">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/blog-hero.jpg"
                        alt="TERREOAK landscaping expert advice and property maintenance blog"
                        fill
                        priority
                        className="object-cover opacity-70"
                    />
                    <div className="absolute inset-0 bg-black/40 z-0"></div>
                </div>

                <div className="relative z-10 mx-auto max-w-6xl px-6 pt-48 pb-16 md:pt-56 md:pb-24 lg:pt-60 lg:pb-32 text-left">
                    <p className="text-[14px] font-bold tracking-widest text-[#01fa6d] uppercase drop-shadow-md">
                        TERREOAK • Insights
                    </p>
                    <h1 className="mt-4 text-[42px] md:text-[56px] lg:text-[64px] font-black leading-[1.1] tracking-tight text-white drop-shadow-2xl max-w-4xl uppercase">
                        THE TERREOAK BLOG —<br />
                        <span className="text-[#01fa6d]">EXPERT ADVICE.</span>
                    </h1>
                    <p className="mt-6 max-w-2xl text-[1.1rem] font-bold text-white/90 md:text-[1.3rem] drop-shadow-md italic">
                        Landscaping, snow removal, and property maintenance tips specifically for Calgary&apos;s unique climate.
                        Learn how to protect your investment and improve your outdoor space.
                    </p>

                    {/* Trust Grid */}
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="rounded-xl border border-white/10 bg-white/10 backdrop-blur-md p-6 shadow-2xl">
                            <h3 className="font-black text-[18px] text-[#01fa6d] uppercase">Seasonal Tips</h3>
                            <p className="mt-2 text-[14px] text-white/80 leading-relaxed font-bold uppercase">
                                Stay ahead of Calgary&apos;s weather with timely property care advice.
                            </p>
                        </div>
                        <div className="rounded-xl border border-white/10 bg-white/10 backdrop-blur-md p-6 shadow-2xl">
                            <h3 className="font-black text-[18px] text-[#01fa6d] uppercase">Professional Advice</h3>
                            <p className="mt-2 text-[14px] text-white/80 leading-relaxed font-bold uppercase">
                                Industry insights on materials, base prep, and maintenance.
                            </p>
                        </div>
                        <div className="rounded-xl border border-white/10 bg-white/10 backdrop-blur-md p-6 shadow-2xl">
                            <h3 className="font-black text-[18px] text-[#01fa6d] uppercase">Local Focus</h3>
                            <p className="mt-2 text-[14px] text-white/80 leading-relaxed font-bold uppercase">
                                Everything we share is tailored to the Calgary environment.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Section kicker="Updates" title="LATEST ARTICLES" titleClassName="text-[#017a6d] uppercase">
                <div className="space-y-8 mt-12 bg-gray-50 p-12 rounded-3xl border border-black/5">
                    <div className="pb-6">
                        <h2 className="text-3xl font-black uppercase text-[#017a6d]">Latest Updates Coming Soon</h2>
                        <p className="text-black/60 mt-4 text-xl font-bold italic">Stay tuned for our expert tips and company news.</p>
                    </div>
                </div>
            </Section>
        </main>
    );
}
