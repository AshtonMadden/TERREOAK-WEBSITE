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
                        <div className="space-y-8">
                            <p className="text-2xl md:text-3xl font-black text-black leading-tight italic border-l-[12px] border-[#01fa6d] pl-8 md:pl-12">
                                If you&apos;ve ever seen a beautiful Calgary patio that&apos;s suddenly "wavy" or uneven after just one winter, you&apos;ve witnessed the failure of traditional road crush in local hardscaping.
                            </p>
                            <p className="text-xl text-black/70 leading-relaxed font-medium">
                                Building a luxury patio in Calgary isn&apos;t just about picking the right Techo-Bloc or Belgard pavers; it&apos;s about what happens six inches below the surface. In the landscaping industry, there's a constant debate between "Traditional Base" and "Open Grade Base." For TERREOAK, the choice is clear. In the high-altitude, extreme-climate environment of Calgary, open grade base is the only way to ensure a lifetime of stability.
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* Geography & Soil */}
                    <div className="space-y-8">
                        <h2 className="text-4xl font-black text-[#017a6d] uppercase tracking-wide">The Calgary Soil Science</h2>
                        <p className="text-lg text-black/70 leading-relaxed">
                            Calgary is built on heavy, expansive clay. If you dig more than a foot into your backyard, you will likely hit a thick, greyish layer of soil that holds moisture like a sponge. In the summer, this clay dries out and cracks; in the winter, it absorbs water and expands (frost heave).
                        </p>
                        <p className="text-lg text-black/70 leading-relaxed">
                            Traditional "Road Crush" (also known as 20mm minus) contains tiny dust particles called fines. These fines are designed to pack tightly together to create a solid surface for roads. However, in a patio application, these fines act as a wick. They pull moisture from the clay upward into the base. When that moisture freezes during a Calgary winter, it expands by roughly 9%, pushing your pavers upward and creating that "wavy" look come spring.
                        </p>
                    </div>

                    {/* Comparison Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
                        <div className="bg-gray-50 p-10 rounded-[2rem] border border-black/5 shadow-sm">
                            <h3 className="font-black text-[20px] text-red-600 uppercase mb-4 tracking-wider">Traditional Base</h3>
                            <p className="text-black/60 font-bold uppercase text-[14px] leading-relaxed">
                                Uses "road crush" containing tiny dust particles (fines). These fines act as a wick, pulling water into the base and trapping it. This leads to ice expansion and inevitable movement.
                            </p>
                        </div>
                        <div className="bg-[#01fa6d]/5 p-10 rounded-[2rem] border border-[#01fa6d]/20 shadow-sm">
                            <h3 className="font-black text-[20px] text-[#017a6d] uppercase mb-4 tracking-wider">Open Grade Base</h3>
                            <p className="text-black/80 font-bold uppercase text-[14px] leading-relaxed">
                                Uses clean, crushed rock with zero fines. Water cannot be trapped; it simply drains through the stone into the subgrade, leaving the base dry and stable during frost cycles.
                            </p>
                        </div>
                    </div>

                    {/* The Chinook Effect */}
                    <div className="space-y-8">
                        <h2 className="text-4xl font-black text-[#017a6d] uppercase tracking-wide">The "Chinook" Factor</h2>
                        <p className="text-lg text-black/70 leading-relaxed">
                            Calgary is unique because of our Chinooks. We can experience a 20-degree temperature swing in 24 hours. This causes rapid melting of surface snow. On a traditional patio base, that melt water hits the frozen, dust-filled road crush and has nowhere to go. It pools under the pavers, then re-freezes at night, causing aggressive "jacking" of the stones.
                        </p>
                        <p className="text-lg text-black/70 leading-relaxed italic font-bold">
                            With an open grade system, that Chinook melt water flows instantly through the stones and away from the installation.
                        </p>
                    </div>

                    {/* Deep Technical Dive */}
                    <div className="space-y-12">
                        <h2 className="text-4xl font-black text-[#017a6d] uppercase tracking-wide text-center">How We Build It: The TERREOAK Method</h2>

                        <div className="space-y-10">
                            <div className="bg-white p-8 rounded-3xl border border-black/5 shadow-md">
                                <h4 className="text-2xl font-black uppercase text-black mb-4">Phase 1: Excavation & Geotextile</h4>
                                <p className="text-lg text-black/70 font-medium leading-relaxed">
                                    We excavate to a minimum depth of 10-12 inches. Before a single stone is dropped, we install a high-performance woven geotextile fabric. This is a critical barrier that prevents the heavy structural clear stone from mixing with and sinking into the soft Calgary clay subgrade. Without this fabric, the base will eventually fail regardless of the material used.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-3xl border border-black/5 shadow-md">
                                <h4 className="text-2xl font-black uppercase text-black mb-4">Phase 2: Use of 20mm Clear Stone</h4>
                                <p className="text-lg text-black/70 font-medium leading-relaxed">
                                    We install a 4-6" deep layer of **20mm Clear Crushed Rock**. This rock has zero fines, meaning it contains roughly 40% air voids. These voids are what allow water to move freely and provide space for any internal moisture to expand without pushing the rock upward.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-3xl border border-black/5 shadow-md">
                                <h4 className="text-2xl font-black uppercase text-black mb-4">Phase 3: The "Choke" Layer (7mm Stone)</h4>
                                <p className="text-lg text-black/70 font-medium leading-relaxed">
                                    To create a smooth setting bed, we "choke" the 20mm layer with a 1" bedding layer of **7mm washed stone** (often called bird&apos;s eye). Unlike bedding sand, 7mm stone won&apos;t wash away into the base below or hold water. It provides a perfectly level surface that locks the top pavers into place without settling.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-3xl border border-black/5 shadow-md">
                                <h4 className="text-2xl font-black uppercase text-black mb-4">Phase 4: G2 Polymeric Sand</h4>
                                <p className="text-lg text-black/70 font-medium leading-relaxed">
                                    Finally, we sweep in advanced G2 polymeric sand. This industrial-strength sand hardens when misted with water, creating a flexible, weed-resistant barrier. Because the base is free-draining, the polymeric sand stays dry and lasts significantly longer than it would on a traditional damp road crush base.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Summary of Benefits */}
                    <div className="space-y-8 bg-gray-50 p-12 rounded-[3rem] border border-black/5">
                        <h2 className="text-4xl font-black text-[#017a6d] uppercase tracking-wide mb-12">The Business Case for Open Grade</h2>

                        <div className="space-y-12">
                            <div className="flex gap-8 group">
                                <span className="flex-shrink-0 w-16 h-16 rounded-3xl bg-[#01fa6d] text-black font-black flex items-center justify-center text-3xl shadow-xl transition-transform group-hover:rotate-12">01</span>
                                <div>
                                    <h4 className="text-2xl font-black uppercase text-black mb-3">98% Immediate Compaction</h4>
                                    <p className="text-black/70 font-medium leading-relaxed text-lg">
                                        Traditional base requires multiple passes with a compactor and just the right amount of water. Open grade stone "settles" into a structural state almost instantly. This means we aren't guessing if it's compacted; we know it is rock solid from day one.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-8 group">
                                <span className="flex-shrink-0 w-16 h-16 rounded-3xl bg-[#01fa6d] text-black font-black flex items-center justify-center text-3xl shadow-xl transition-transform group-hover:rotate-12">02</span>
                                <div>
                                    <h4 className="text-2xl font-black uppercase text-black mb-3">Superior Drainage (4,000" per hour)</h4>
                                    <p className="text-black/70 font-medium leading-relaxed text-lg">
                                        Open grade base can drain up to 4,000 inches of rain per hour. Even in a flash Calgary thunderstorm, your patio will remain clear of standing water, protecting your foundation and surrounding landscape from erosion.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-8 group">
                                <span className="flex-shrink-0 w-16 h-16 rounded-3xl bg-[#01fa6d] text-black font-black flex items-center justify-center text-3xl shadow-xl transition-transform group-hover:rotate-12">03</span>
                                <div>
                                    <h4 className="text-2xl font-black uppercase text-black mb-3">Lower Lifecycle Cost</h4>
                                    <p className="text-black/70 font-medium leading-relaxed text-lg">
                                        Repairing a "wavy" patio can cost 50-70% of the original installation price. By investing an extra 10-15% in materials upfront for an open grade system, you eliminate the need for future re-leveling, effectively making it the cheaper option over a 10-year period.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <div className="space-y-8 py-12">
                        <h2 className="text-4xl font-black text-[#017a6d] uppercase tracking-wide">Frequently Asked Questions</h2>
                        <div className="divide-y divide-black/10">
                            <div className="py-6">
                                <h5 className="text-xl font-bold mb-2">Is Open Grade more expensive?</h5>
                                <p className="text-black/70">Yes, clear stone generally costs 20-30% more than road crush per yard, and the specialized geotextile adds a small cost. However, the labor time is often reduced because compaction is faster.</p>
                            </div>
                            <div className="py-6">
                                <h5 className="text-xl font-bold mb-2">Can I use this for my driveway?</h5>
                                <p className="text-black/70">Absolutely. In fact, it is highly recommended for permeable driveway installations to handle heavy vehicle loads and drainage simultaneously.</p>
                            </div>
                            <div className="py-6">
                                <h5 className="text-xl font-bold mb-2">Does it attract weeds?</h5>
                                <p className="text-black/70">Actually, it achieves the opposite. Because the base stays dry, weed seeds that land in the joints have a harder time germinating compared to the damp, soil-rich environment of a traditional base.</p>
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
