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
                        <p className="text-2xl md:text-3xl font-black text-black leading-tight italic border-l-[12px] border-[#01fa6d] pl-8 md:pl-12">
                            A great Calgary summer lawn starts in the first two weeks of April. Without it, your grass is literally gasping for air under a winter&apos;s worth of debris.
                        </p>
                    </ScrollReveal>

                    {/* The Pain Points */}
                    <div className="space-y-12">
                        <h2 className="text-4xl font-black text-[#017a6d] uppercase tracking-wide underline decoration-[#01fa6d] underline-offset-8">The Pain Points</h2>

                        <div className="grid grid-cols-1 gap-8">
                            <div className="bg-red-50 p-10 rounded-[2rem] border-l-8 border-red-500 shadow-sm">
                                <h3 className="font-black text-[22px] text-red-600 uppercase mb-4 tracking-wider">01. Snow Mold & Fungus</h3>
                                <p className="text-black/70 font-medium leading-relaxed text-lg">
                                    When snow sits on a Calgary lawn for 4+ months, moisture gets trapped between the grass and the frozen ground. This creates a perfect breeding ground for Grey and Pink Snow Mold. If not raked out quickly in spring, it can kill your grass crown before the season even begins.
                                </p>
                            </div>

                            <div className="bg-red-50 p-10 rounded-[2rem] border-l-8 border-red-500 shadow-sm">
                                <h3 className="font-black text-[22px] text-red-600 uppercase mb-4 tracking-wider">02. Winter Salt & Road Sand</h3>
                                <p className="text-black/70 font-medium leading-relaxed text-lg">
                                    Calgary uses massive amounts of gravel and salt to keep our roads safe. This grit inevitably ends up in your lawn, changing the soil&apos;s pH and physically blocking new grass shoots from breaking through the surface.
                                </p>
                            </div>

                            <div className="bg-red-50 p-10 rounded-[2rem] border-l-8 border-red-500 shadow-sm">
                                <h3 className="font-black text-[22px] text-red-600 uppercase mb-4 tracking-wider">03. Impacted Thatch</h3>
                                <p className="text-black/70 font-medium leading-relaxed text-lg">
                                    Last year&apos;s dead grass doesn&apos;t just disappear. It turns into a thick, felt-like layer called thatch. Too much thatch prevents water, air, and fertilizer from ever reaching the root zone, making your lawn weak and prone to disease.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* The Solutions */}
                    <div className="space-y-12 bg-[#017a6d]/5 p-12 rounded-[3rem] border border-[#017a6d]/10">
                        <h2 className="text-4xl font-black text-[#017a6d] uppercase tracking-wide">The Expert Solutions</h2>

                        <div className="space-y-12">
                            <div className="flex gap-8 group">
                                <span className="flex-shrink-0 w-16 h-16 rounded-3xl bg-[#01fa6d] text-black font-black flex items-center justify-center text-3xl shadow-xl transition-transform group-hover:rotate-12">01</span>
                                <div>
                                    <h4 className="text-2xl font-black uppercase text-black mb-3">Professional Power Raking</h4>
                                    <p className="text-black/70 font-medium leading-relaxed text-lg">
                                        We use commercial-grade power rakes to mechanically pull the dead thatch from the soil surface. This "exfoliates" the lawn, allowing it to breathe and exposing the soil to the essential warmth of the spring sun.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-8 group">
                                <span className="flex-shrink-0 w-16 h-16 rounded-3xl bg-[#01fa6d] text-black font-black flex items-center justify-center text-3xl shadow-xl transition-transform group-hover:rotate-12">02</span>
                                <div>
                                    <h4 className="text-2xl font-black uppercase text-black mb-3">Oxygenating Core Aeration</h4>
                                    <p className="text-black/70 font-medium leading-relaxed text-lg">
                                        Our heavy-duty aerators remove small plugs of soil from the ground. This reduces local soil compaction and creates direct pathways for water and oxygen to reach the grass roots, sparking explosive spring growth.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-8 group">
                                <span className="flex-shrink-0 w-16 h-16 rounded-3xl bg-[#01fa6d] text-black font-black flex items-center justify-center text-3xl shadow-xl transition-transform group-hover:rotate-12">03</span>
                                <div>
                                    <h4 className="text-2xl font-black uppercase text-black mb-3">Manual Debris & Salt Detail</h4>
                                    <p className="text-black/70 font-medium leading-relaxed text-lg">
                                        Beyond the machinery, we hand-detail your yard to remove winter gravel and road salt that has accumulated near your driveway and boulevards, ensuring your lawn stays green from edge to edge.
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
