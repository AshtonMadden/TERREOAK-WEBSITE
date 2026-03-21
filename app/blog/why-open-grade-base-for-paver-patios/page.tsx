"use client";

import Image from "next/image";
import Link from "next/link";
import { Section, ScrollReveal } from "../../components/UI";

export default function OpenGradeBaseArticle() {
    return (
        <main className="bg-white">
            {/* HERO SECTION */}
            <section className="relative h-[60vh] flex flex-col justify-center overflow-hidden bg-black">
                <div className="absolute inset-0 z-0 opacity-60">
                    <Image
                        src="/Landscape web page pics/Techo-Bloc-pavers-river-rock.JPG"
                        alt="High-end paver patio installation in Calgary"
                        fill
                        priority
                        className="object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />

                <div className="relative z-20 mx-auto max-w-4xl px-6 text-center">
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-[#01fa6d] font-bold text-sm uppercase tracking-widest mb-8 hover:opacity-80 transition-opacity"
                    >
                        ← Back to Blog
                    </Link>
                    <h1 className="text-[32px] md:text-[56px] font-black leading-tight text-white uppercase tracking-tight">
                        Why Open Grade Base is the Gold Standard for Calgary Paver Patios
                    </h1>
                </div>
            </section>

            {/* ARTICLE CONTENT */}
            <article className="py-24 mx-auto max-w-4xl px-6">
                <div className="prose prose-xl prose-invert max-w-none space-y-12">
                    <ScrollReveal>
                        <p className="text-2xl font-bold text-black leading-relaxed italic border-l-8 border-[#01fa6d] pl-8">
                            If you've ever seen a beautiful paver patio that's suddenly "wavy" or uneven after just one Calgary winter, you've witnessed the failure of traditional road crush base.
                        </p>
                    </ScrollReveal>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-black text-[#017a6d] uppercase tracking-wide">The Calgary Challenge</h2>
                        <p className="text-lg text-black/70 leading-relaxed font-medium">
                            Our local soil is heavily clay-based, which holds moisture like a sponge. When coupled with Calgary&apos;s extreme frost depths (up to 4-5 feet) and constant freeze-thaw cycles, moisture is the enemy of any structural installation.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-8">
                        <div className="bg-gray-50 p-8 rounded-3xl border border-black/5">
                            <h3 className="font-black text-[18px] text-red-600 uppercase mb-4 tracking-wider">Traditional Base</h3>
                            <p className="text-black/60 font-bold uppercase text-[13px] leading-relaxed">
                                Uses "road crush" containing tiny dust particles (fines). These fines act as a wick, pulling water into the base and trapping it. When that water freezes, it expands, pushing the pavers upward—creating "frost heave."
                            </p>
                        </div>
                        <div className="bg-[#01fa6d]/5 p-8 rounded-3xl border border-[#01fa6d]/20">
                            <h3 className="font-black text-[18px] text-[#017a6d] uppercase mb-4 tracking-wider">Open Grade Base</h3>
                            <p className="text-black/80 font-bold uppercase text-[13px] leading-relaxed">
                                Uses clean, crushed rock (like 20mm washed stone) with zero fines. Water cannot be trapped; it simply drains through the stones and into the subsoil, keeping the base dry and stable during temperature drops.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-black text-[#017a6d] uppercase tracking-wide">Three Critical Advantages</h2>

                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <span className="flex-shrink-0 w-12 h-12 rounded-full bg-[#01fa6d] text-black font-black flex items-center justify-center text-xl shadow-lg">01</span>
                                <div>
                                    <h4 className="text-xl font-bold uppercase text-black mb-2">98% Immediate Compaction</h4>
                                    <p className="text-black/70 font-medium leading-relaxed">
                                        Unlike traditional base which requires watering and vibrating layers over hours, open-grade stone locks together mechanically. It provides a structural, non-settling foundation the moment it hits the ground.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <span className="flex-shrink-0 w-12 h-12 rounded-full bg-[#01fa6d] text-black font-black flex items-center justify-center text-xl shadow-lg">02</span>
                                <div>
                                    <h4 className="text-xl font-bold uppercase text-black mb-2">Self-Cleaning Drainage</h4>
                                    <p className="text-black/70 font-medium leading-relaxed">
                                        Even under high-intensity rain, the water flows through the base into the subgrade or clear out through a perforated pipe system. This prevents the "pudding" effect often seen in wet Calgary springs.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <span className="flex-shrink-0 w-12 h-12 rounded-full bg-[#01fa6d] text-black font-black flex items-center justify-center text-xl shadow-lg">03</span>
                                <div>
                                    <h4 className="text-xl font-bold uppercase text-black mb-2">Long-Term Savings</h4>
                                    <p className="text-black/70 font-medium leading-relaxed">
                                        While the materials for open-grade bases can be more expensive up front, they virtually eliminate the need for costly "re-leveling" maintenance 5 or 10 years down the line. It's a "set it and forget it" solution.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ScrollReveal>
                        <div className="mt-24 p-12 bg-[#2c2d32] rounded-[40px] text-center shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 transition-transform duration-700 group-hover:scale-110" />
                            <h2 className="text-white text-3xl font-black uppercase mb-6 relative z-10">Investing in Quality</h2>
                            <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto font-medium relative z-10">
                                At TERREOAK, we don't take shortcuts on what you can't see. Your patio's long-term beauty is built from the ground up.
                            </p>
                            <Link
                                href="/landscape-installs"
                                className="inline-flex items-center justify-center rounded-full bg-[#01fa6d] px-12 py-[16px] text-[16px] font-black text-black hover:bg-white transition-all transform hover:-translate-y-1 shadow-xl relative z-10"
                            >
                                VIEW OUR LANDSCAPE SERVICES
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </article>
        </main>
    );
}
