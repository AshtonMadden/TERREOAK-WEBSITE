"use client";

import Image from "next/image";
import Link from "next/link";
import { Section, ScrollReveal } from "../../components/UI";

export default function OpenGradeBaseArticle() {
    return (
        <main className="bg-white">
            {/* HERO SECTION */}
            <section className="relative min-h-[70vh] flex flex-col justify-end pb-16 md:pb-24 overflow-hidden bg-black">
                <div className="absolute inset-0 z-0 opacity-60">
                    <Image
                        src="/Landscape web page pics/Techo-Bloc-pavers-river-rock.JPG"
                        alt="High-end Calgary patio and luxury hardscaping installation"
                        fill
                        priority
                        className="object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />

                <div className="relative z-20 mx-auto max-w-5xl px-6 text-left">
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-[#01fa6d] font-black text-sm uppercase tracking-[0.2em] mb-12 hover:opacity-80 transition-all transform hover:-translate-x-2"
                    >
                        <span className="mr-3 text-xl">←</span> Back to insights
                    </Link>
                    <p className="text-[#01fa6d] font-black uppercase tracking-widest text-sm mb-4">Landscape Construction • Technical Guide</p>
                    <h1 className="text-[36px] md:text-[64px] lg:text-[72px] font-black leading-[1] text-white uppercase tracking-tight max-w-4xl">
                        Why Open Grade Base is the Gold Standard for Calgary Patio & Hardscaping
                    </h1>
                </div>
            </section>

            {/* ARTICLE CONTENT */}
            <article className="py-24 mx-auto max-w-4xl px-6">
                <div className="prose prose-xl prose-invert max-w-none space-y-16 text-black">

                    {/* Intro */}
                    <ScrollReveal>
                        <p className="text-2xl md:text-3xl font-black text-black leading-tight italic border-l-[12px] border-[#01fa6d] pl-8 md:pl-12">
                            If you&apos;ve ever seen a beautiful Calgary patio that&apos;s suddenly "wavy" or uneven after just one winter, you&apos;ve witnessed the failure of traditional road crush in local hardscaping.
                        </p>
                    </ScrollReveal>

                    {/* The Calgary Challenge */}
                    <div className="space-y-6">
                        <h2 className="text-4xl font-black text-[#017a6d] uppercase tracking-wide">The Calgary Hardscaping Challenge</h2>
                        <p className="text-xl text-black/70 leading-relaxed font-medium">
                            Calgary&apos;s soil and climate present a unique challenge for hardscaping: the freeze-thaw cycle. Our local clay soil holds moisture like a sponge. When coupled with Calgary&apos;s extreme frost depths (up to 4-5 feet) and constant temperature fluctuations, moisture becomes the enemy.
                        </p>
                    </div>

                    {/* Comparison Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
                        <div className="bg-gray-50 p-10 rounded-[2rem] border border-black/5 shadow-sm">
                            <h3 className="font-black text-[20px] text-red-600 uppercase mb-4 tracking-wider">Traditional Base</h3>
                            <p className="text-black/60 font-bold uppercase text-[14px] leading-relaxed">
                                Uses "road crush" containing tiny dust particles (fines). These fines act as a wick, pulling water into the base and trapping it. When that water freezes, it expands, pushing the pavers upward—creating "frost heave" in your Calgary patio.
                            </p>
                        </div>
                        <div className="bg-[#01fa6d]/5 p-10 rounded-[2rem] border border-[#01fa6d]/20 shadow-sm">
                            <h3 className="font-black text-[20px] text-[#017a6d] uppercase mb-4 tracking-wider">Open Grade Base</h3>
                            <p className="text-black/80 font-bold uppercase text-[14px] leading-relaxed">
                                Uses clean, crushed rock with zero fines. Water cannot be trapped; it simply drains through the stone, keeping your Calgary hardscaping project dry and stable even in extreme sub-zero temperatures.
                            </p>
                        </div>
                    </div>

                    {/* Deep Technical Dive */}
                    <div className="space-y-12">
                        <h2 className="text-4xl font-black text-[#017a6d] uppercase tracking-wide">A Technical Breakdown</h2>

                        <div className="space-y-10">
                            <div className="space-y-4">
                                <h4 className="text-2xl font-black uppercase text-black">1. Geotextile Separation</h4>
                                <p className="text-lg text-black/70 font-medium leading-relaxed">
                                    Before a single stone is dropped, we install a high-performance woven geotextile fabric. This prevents the heavy structural clear stone from sinking into the soft Calgary clay subgrade over time, maintaining the structural integrity of your patio for life.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-2xl font-black uppercase text-black">2. The Two-Layer Clear System</h4>
                                <p className="text-lg text-black/70 font-medium leading-relaxed">
                                    We start with a 4-6" deep layer of **20mm Clear Crushed Rock** for deep structural stability and drainage. We then "choke" that layer with a 1" bedding layer of **7mm washed stone**. Unlike bedding sand, 7mm stone won't wash away or hold water, providing a perfectly level surface that stays level.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-2xl font-black uppercase text-black">3. G2 Polymeric Sand Integration</h4>
                                <p className="text-lg text-black/70 font-medium leading-relaxed">
                                    To complete the system, we use advanced G2 polymeric sand in the joints. This creates a flexible, weed-resistant barrier that allows the patio to "breathe" while still permitting surface water entry into the drainage base below.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Advantages List */}
                    <div className="space-y-8 bg-gray-50 p-12 rounded-[3rem] border border-black/5">
                        <h2 className="text-4xl font-black text-[#017a6d] uppercase tracking-wide mb-12">Three Critical Advantages</h2>

                        <div className="space-y-12">
                            <div className="flex gap-8 group">
                                <span className="flex-shrink-0 w-16 h-16 rounded-3xl bg-[#01fa6d] text-black font-black flex items-center justify-center text-3xl shadow-xl transition-transform group-hover:rotate-12">01</span>
                                <div>
                                    <h4 className="text-2xl font-black uppercase text-black mb-3">98% Immediate Compaction</h4>
                                    <p className="text-black/70 font-medium leading-relaxed text-lg">
                                        Unlike traditional base which requires watering and vibrating layers over hours, open-grade stone locks together mechanically. It provides a structural, non-settling foundation for Calgary patio and driveway projects the second it is installed.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-8 group">
                                <span className="flex-shrink-0 w-16 h-16 rounded-3xl bg-[#01fa6d] text-black font-black flex items-center justify-center text-3xl shadow-xl transition-transform group-hover:rotate-12">02</span>
                                <div>
                                    <h4 className="text-2xl font-black uppercase text-black mb-3">Self-Cleaning Drainage</h4>
                                    <p className="text-black/70 font-medium leading-relaxed text-lg">
                                        Even under high-intensity rain, water flows through the base into the subgrade. This prevents the "pudding" effect often seen in wet Calgary springs, ensuring your hardscaping remains rock solid and never washes out.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-8 group">
                                <span className="flex-shrink-0 w-16 h-16 rounded-3xl bg-[#01fa6d] text-black font-black flex items-center justify-center text-3xl shadow-xl transition-transform group-hover:rotate-12">03</span>
                                <div>
                                    <h4 className="text-2xl font-black uppercase text-black mb-3">Long-Term Calgary Patio Savings</h4>
                                    <p className="text-black/70 font-medium leading-relaxed text-lg">
                                        While the materials for open-grade bases costs more up front, they virtually eliminate the need for costly "re-leveling" maintenance down the line. It's a "set it and forget it" solution for discerning Calgary homeowners who want results that last.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <ScrollReveal>
                        <div className="mt-24 p-16 bg-[#2c2d32] rounded-[50px] text-center shadow-3xl relative overflow-hidden group border border-white/5">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 transition-transform duration-1000 group-hover:scale-125" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#01fa6d]/5 rounded-full -ml-32 -mb-32 transition-transform duration-1000 group-hover:scale-125" />

                            <h2 className="text-white text-4xl md:text-5xl font-black uppercase mb-8 relative z-10 leading-tight">
                                Want a Patio Built <br className="hidden md:block" />for a Calgary Lifetime?
                            </h2>
                            <p className="text-white/60 text-xl mb-12 max-w-2xl mx-auto font-medium relative z-10">
                                At TERREOAK, we don&apos;t take shortcuts on what you can&apos;t see. Your Calgary patio&apos;s long-term beauty is built from the ground up with expert hardscaping techniques.
                            </p>
                            <Link
                                href="/landscape-installs"
                                className="inline-flex items-center justify-center rounded-full bg-[#01fa6d] px-14 py-[20px] text-[18px] font-black text-black hover:bg-white transition-all transform hover:-translate-y-2 shadow-2xl relative z-10 uppercase tracking-widest"
                            >
                                VIEW OUR CALGARY HARDSCAPING SERVICES
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </article>
        </main>
    );
}
