"use client";

import Image from "next/image";
import Link from "next/link";
import { Section, ScrollReveal } from "../../components/UI";

export default function SpringCleanupArticle() {
    return (
        <main className="bg-white">
            {/* HERO SECTION */}
            <section className="relative min-h-[70vh] flex flex-col justify-end pb-16 md:pb-24 overflow-hidden bg-black">
                <div className="absolute inset-0 z-0 opacity-60">
                    <Image
                        src="/spring-cleanup-pics/Leaf-Cleanup-near-me.jpg"
                        alt="TERREOAK professionally cleaning a Calgary lawn"
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
                    <p className="text-[#01fa6d] font-black uppercase tracking-widest text-sm mb-4">Seasonal Service • Expert Guide</p>
                    <h1 className="text-[36px] md:text-[64px] lg:text-[72px] font-black leading-[1] text-white uppercase tracking-tight max-w-4xl">
                        Why a Professional Spring Cleanup is Essential for Calgary Lawns
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
                                A great Calgary summer lawn starts in the first two weeks of April. Without it, your grass is literally gasping for air under a winter&apos;s worth of debris.
                            </p>
                            <p className="text-xl text-black/70 leading-relaxed font-medium">
                                After six months of sub-zero temperatures, heavy snow packs, and road salt, your lawn isn&apos;t just "dormant"—it&apos;s struggling. For Calgary homeowners, the window between the final snow melt and the first heat wave is the most critical time for property maintenance. A professional spring cleanup isn&apos;t just about aesthetics; it&apos;s a biological requirement for a healthy, green lawn.
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* The Biological Awakening */}
                    <div className="space-y-8">
                        <h2 className="text-4xl font-black text-[#017a6d] uppercase tracking-wide">The Biological Awakening</h2>
                        <p className="text-lg text-black/70 leading-relaxed">
                            As soil temperatures in Calgary rise above 5°C, grass roots begin to wake up from their winter slumber. They look for three things: Oxygen, Sunlight, and Nutrients. However, a typical winter leaves behind a "cap" of dead grass, leaves, and dirt that seals off the soil. If this cap isn&apos;t broken, the soil stays cold longer, and the roots remain dormant, allowing weeds (which are more resilient) to take over your yard before the grass even starts growing.
                        </p>
                    </div>

                    {/* The Pain Points */}
                    <div className="space-y-12">
                        <h2 className="text-4xl font-black text-[#017a6d] uppercase tracking-wide underline decoration-[#01fa6d] underline-offset-8">Critical Winter Damage (Pain Points)</h2>

                        <div className="grid grid-cols-1 gap-8">
                            <div className="bg-red-50 p-10 rounded-[2rem] border-l-8 border-red-500 shadow-sm">
                                <h3 className="font-black text-[22px] text-red-600 uppercase mb-4 tracking-wider">01. Snow Mold & Fungal Disease</h3>
                                <p className="text-black/70 font-medium leading-relaxed text-lg">
                                    When snow sits on a Calgary lawn for 4+ months, moisture gets trapped between the grass blades and the frozen ground. This creates a perfect breeding ground for Grey and Pink Snow Mold. If not raked out quickly in spring, this fungus can kill the "crown" of the grass plant, leading to large dead patches that require expensive sod replacement later in the summer.
                                </p>
                            </div>

                            <div className="bg-red-50 p-10 rounded-[2rem] border-l-8 border-red-500 shadow-sm">
                                <h3 className="font-black text-[22px] text-red-600 uppercase mb-4 tracking-wider">02. Salt, Sand & Gravel Buildup</h3>
                                <p className="text-black/70 font-medium leading-relaxed text-lg">
                                    Calgary road crews use massive amounts of gravel and salt to keep our streets safe. When snow is plowed or shoved onto your lawn, this grit settles deep into the grass. Salt changes the chemical balance of your soil, making it toxic to grass roots, while the gravel physically blocks new shoots from reaching the sun.
                                </p>
                            </div>

                            <div className="bg-red-50 p-10 rounded-[2rem] border-l-8 border-red-500 shadow-sm">
                                <h3 className="font-black text-[22px] text-red-600 uppercase mb-4 tracking-wider">03. Soil Compaction & Thatch</h3>
                                <p className="text-black/70 font-medium leading-relaxed text-lg">
                                    The weight of heavy Calgary snow packs compresses your soil, squeezing out the air pockets that roots need to survive. Combined with a thick layer of thatch (old dead grass), your lawn becomes "nutrient-locked," meaning even if you water and fertilize, nothing reaches the roots.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* The Solutions */}
                    <div className="space-y-12 bg-[#017a6d]/5 p-12 rounded-[3rem] border border-[#017a6d]/10">
                        <h2 className="text-4xl font-black text-[#017a6d] uppercase tracking-wide">The TERREOAK Professional Solutions</h2>

                        <div className="space-y-12">
                            <div className="flex gap-8 group">
                                <span className="flex-shrink-0 w-16 h-16 rounded-3xl bg-[#01fa6d] text-black font-black flex items-center justify-center text-3xl shadow-xl transition-transform group-hover:rotate-12">01</span>
                                <div>
                                    <h4 className="text-2xl font-black uppercase text-black mb-3">Industrial Power Raking (Dethatching)</h4>
                                    <p className="text-black/70 font-medium leading-relaxed text-lg">
                                        We use commercial-grade power rakes with steel tines that spin at high speeds to pull dead thatch and snow mold from the soil surface. This process "exfoliates" the lawn, allowing it to breathe and exposing the soil to the essential warmth of the spring sun. A hand rake simply cannot achieve the same level of soil-clearing.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-8 group">
                                <span className="flex-shrink-0 w-16 h-16 rounded-3xl bg-[#01fa6d] text-black font-black flex items-center justify-center text-3xl shadow-xl transition-transform group-hover:rotate-12">02</span>
                                <div>
                                    <h4 className="text-2xl font-black uppercase text-black mb-3">Oxygenating Core Aeration</h4>
                                    <p className="text-black/70 font-medium leading-relaxed text-lg">
                                        Our heavy-duty core aerators remove thousands of small soil plugs from your yard. This instantly relieves soil compaction and creates direct highways for water, oxygen, and liquid fertilizer to penetrate deep into the root zone. This is the single most effective way to spark explosive spring growth.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-8 group">
                                <span className="flex-shrink-0 w-16 h-16 rounded-3xl bg-[#01fa6d] text-black font-black flex items-center justify-center text-3xl shadow-xl transition-transform group-hover:rotate-12">03</span>
                                <div>
                                    <h4 className="text-2xl font-black uppercase text-black mb-3">High-Output Blower Cleanup & Detailing</h4>
                                    <p className="text-black/70 font-medium leading-relaxed text-lg">
                                        We don&apos;t just rake; we detail your entire property. Using high-output commercial blowers, we clear out gravel from boulevards, debris from garden beds, and salt buildup from driveways. We ensure your entire property—not just the grass—is ready for the season.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Common Mistakes */}
                    <div className="space-y-8">
                        <h2 className="text-4xl font-black text-[#017a6d] uppercase tracking-wide">Common Spring Cleanup Mistakes</h2>
                        <ul className="list-disc pl-8 space-y-4 text-lg text-black/70 font-medium">
                            <li><strong className="text-black">Waiting Too Long:</strong> If you wait until the grass is green to power rake, you risk tearing out the healthy new shoots. The best time is while the lawn is still mostly dormant.</li>
                            <li><strong className="text-black">Ignoring the Edges:</strong> Salt and gravel concentrate at the edges of driveways and sidewalks. If this isn&apos;t manually removed, the "burn" will creep into your lawn all summer.</li>
                            <li><strong className="text-black">Fertilizing Before Cleanup:</strong> Applying fertilizer on top of a thick layer of thatch is a waste of money. The nutrients will never reach the soil and will likely wash away in the next rain.</li>
                        </ul>
                    </div>

                    {/* FAQ */}
                    <div className="space-y-8 py-12">
                        <h2 className="text-4xl font-black text-[#017a6d] uppercase tracking-wide">Spring Cleanup FAQ</h2>
                        <div className="divide-y divide-black/10">
                            <div className="py-6">
                                <h5 className="text-xl font-bold mb-2">When should I book my Calgary spring cleanup?</h5>
                                <p className="text-black/70">As soon as the snow is 90% gone. Typically, the window starts in mid-March and runs through late April. Booking early ensures you get your service completed before the first growth spurt.</p>
                            </div>
                            <div className="py-6">
                                <h5 className="text-xl font-bold mb-2">Will power raking damage my lawn?</h5>
                                <p className="text-black/70">When done professionally at the right time (while dormant), it is highly beneficial. It removes the dead "mat" of grass so the healthy crowns can grow unobstructed.</p>
                            </div>
                            <div className="py-6">
                                <h5 className="text-xl font-bold mb-2">Do I need to be home for the service?</h5>
                                <p className="text-black/70">No! As long as we have access to the yard and pets are indoors, we can complete the entire cleanup and leave your property looking pristine while you are at work.</p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <ScrollReveal>
                        <div className="mt-24 p-16 bg-[#2c2d32] rounded-[50px] text-center shadow-3xl relative overflow-hidden group border border-white/5">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 transition-transform duration-1000 group-hover:scale-125" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#01fa6d]/5 rounded-full -ml-32 -mb-32 transition-transform duration-1000 group-hover:scale-125" />

                            <h2 className="text-white text-4xl md:text-5xl font-black uppercase mb-8 relative z-10 leading-tight">
                                Ready for a Lush <br className="hidden md:block" />Calgary Summer?
                            </h2>
                            <p className="text-white/60 text-xl mb-12 max-w-2xl mx-auto font-medium relative z-10">
                                Don&apos;t let winter damage dictate the health of your yard. Book your professional spring cleanup today and give your grass the head start it deserves.
                            </p>
                            <Link
                                href="/spring-cleanup-calgary"
                                className="inline-flex items-center justify-center rounded-full bg-[#01fa6d] px-14 py-[20px] text-[18px] font-black text-black hover:bg-white transition-all transform hover:-translate-y-2 shadow-2xl relative z-10 uppercase tracking-widest"
                            >
                                BOOK YOUR SPRING CLEANUP
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </article>
        </main>
    );
}
