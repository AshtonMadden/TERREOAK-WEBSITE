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

            <Section kicker="News & Insights" title="LATEST ARTICLES" titleClassName="text-[#017a6d] uppercase">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 bg-white p-6 md:p-12 rounded-3xl border border-black/5 shadow-xl">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-4 border-gray-100 shadow-lg">
                        <Image
                            src="/Landscape web page pics/Techo-Bloc-pavers-river-rock.JPG"
                            alt="Open grade base for paver patio installation"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <p className="text-[#017a6d] font-black uppercase text-sm mb-4 tracking-widest">LANDSCAPE CONSTRUCTION • EXPERT TIPS</p>
                        <h2 className="text-3xl md:text-4xl font-black uppercase text-black leading-tight mb-6">
                            Why Open Grade Base is the Gold Standard for Calgary Paver Patios
                        </h2>
                        <div className="space-y-4 text-black/70 text-lg leading-relaxed font-medium">
                            <p>
                                In Calgary, our soil and climate present a unique challenge for hardscaping: the freeze-thaw cycle. Traditional road crush bases (which contain 'fines' or dust) can trap moisture, leading to ice expansion and the dreaded "frost heave."
                            </p>
                            <p>
                                At TERREOAK, we exclusively use **Open Grade Base** (clean stone) for our luxury paver installations. Here&apos;s why:
                            </p>
                            <ul className="space-y-3 font-bold text-black border-l-4 border-[#01fa6d] pl-6 py-2">
                                <li>• **Superior Drainage**: Water flows through the base rather than sitting under the pavers.</li>
                                <li>• **Zero Frost Heave**: By eliminating moisture trap, we prevent the ground from shifting in winter.</li>
                                <li>• **Pure Compaction**: Clear stone achieves immediate, structural stability that doesn&apos;t settle over time.</li>
                            </ul>
                            <p className="pt-4 italic font-bold text-[#017a6d]">
                                "A patio is only as good as the ground it sits on. Open grade base ensures your investment stays level for decades, not just seasons."
                            </p>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}
