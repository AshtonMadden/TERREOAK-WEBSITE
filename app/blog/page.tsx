"use client";

import Link from "next/link";
import Image from "next/image";
import { Section, Carousel } from "../components/UI";

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

            <Section kicker="News & Insights" title="LATEST ARTICLES" titleClassName="text-[#017a6d] uppercase">
                <Carousel className="!gap-12 !items-stretch mt-12 !flex-nowrap !overflow-x-auto">
                    {/* Article 1 - Open Grade */}
                    <Link
                        href="/blog/why-open-grade-base-for-paver-patios"
                        className="group flex flex-col w-[85vw] md:w-[calc(50%-24px)] flex-shrink-0 snap-start bg-white rounded-3xl border border-black/5 shadow-xl transition-all hover:shadow-2xl hover:-translate-y-1 h-full overflow-hidden"
                    >
                        <div className="relative aspect-[16/9] overflow-hidden group-hover:border-[#01fa6d] transition-colors border-b border-black/5">
                            <Image
                                src="/Landscape web page pics/Techo-Bloc-pavers-river-rock.JPG"
                                alt="Open grade base for Calgary patio and hardscaping"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="flex flex-col flex-grow p-8">
                            <p className="text-[#017a6d] font-black uppercase text-xs mb-3 tracking-widest">LANDSCAPE CONSTRUCTION • EXPERT TIPS</p>
                            <h2 className="text-2xl font-black uppercase text-black leading-tight mb-4 group-hover:text-[#017a6d] transition-colors">
                                Why Open Grade Base is the Gold Standard for Calgary Patio & Hardscaping
                            </h2>
                            <div className="space-y-4 text-black/70 text-base leading-relaxed font-medium mb-6">
                                <p>
                                    In Calgary, the freeze-thaw cycle is the enemy of any hardscaping project. Traditional road crush can trap moisture...
                                </p>
                            </div>
                            <div className="mt-auto">
                                <span className="inline-flex items-center justify-center rounded-full bg-[#2c2d32] px-6 py-3 text-[13px] font-black text-white group-hover:bg-[#01fa6d] group-hover:text-black transition-all shadow-lg uppercase tracking-wider">
                                    Read Full Article →
                                </span>
                            </div>
                        </div>
                    </Link>

                    {/* Article 2 - Spring Cleanup */}
                    <Link
                        href="/blog/why-calgary-spring-cleanup-matters"
                        className="group flex flex-col w-[85vw] md:w-[calc(50%-24px)] flex-shrink-0 snap-start bg-white rounded-3xl border border-black/5 shadow-xl transition-all hover:shadow-2xl hover:-translate-y-1 h-full overflow-hidden"
                    >
                        <div className="relative aspect-[16/9] overflow-hidden group-hover:border-[#01fa6d] transition-colors border-b border-black/5">
                            <Image
                                src="/spring-cleanup-pics/Leaf-Cleanup-near-me.jpg"
                                alt="Why spring cleanup is essential for Calgary lawns"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="flex flex-col flex-grow p-8">
                            <p className="text-[#017a6d] font-black uppercase text-xs mb-3 tracking-widest">SEASONAL CARE • EXPERT ADVICE</p>
                            <h2 className="text-2xl font-black uppercase text-black leading-tight mb-4 group-hover:text-[#017a6d] transition-colors">
                                Why a Professional Spring Cleanup is Essential for Calgary Lawns
                            </h2>
                            <div className="space-y-4 text-black/70 text-base leading-relaxed font-medium mb-6">
                                <p>
                                    Between snow mold, winter salt buildup, and soil compaction, your lawn goes through massive stress during the Calgary winter...
                                </p>
                            </div>
                            <div className="mt-auto">
                                <span className="inline-flex items-center justify-center rounded-full bg-[#2c2d32] px-6 py-3 text-[13px] font-black text-white group-hover:bg-[#01fa6d] group-hover:text-black transition-all shadow-lg uppercase tracking-wider">
                                    Read Full Article →
                                </span>
                            </div>
                        </div>
                    </Link>
                </Carousel>
            </Section>
        </main>
    );
}
