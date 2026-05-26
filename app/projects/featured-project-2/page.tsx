"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "../../components/UI";

export default function FeaturedProjectTwo() {
    return (
        <main className="bg-white text-black">
            {/* HERO */}
            <section className="relative min-h-screen flex flex-col justify-center border-b border-black/10 overflow-hidden">
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <Image
                        src="/Landscape web page pics/Techo-Bloc-pavers-river-rock.JPG"
                        alt="TERREOAK Premium Hardscape Installation"
                        fill
                        priority
                        className="object-cover opacity-90 scale-105 transform origin-center"
                    />
                </div>
                <div className="absolute inset-0 bg-black/40 z-0"></div>

                <div className="relative z-10 w-full mx-auto max-w-6xl px-6 flex flex-col justify-center min-h-[100dvh] md:min-h-0 md:block pt-32 pb-12 md:pt-56 md:pb-24 lg:pt-60 lg:pb-32 text-left animate-slide-in-left">
                    <div className="mt-auto md:mt-0">
                        <Link
                            href="/projects"
                            className="inline-flex items-center text-[#01fa6d] font-black text-[14px] uppercase tracking-widest mb-4 hover:opacity-80 transition-all transform hover:-translate-x-2 drop-shadow-md"
                        >
                            <span className="mr-2 text-lg">←</span> Back to portfolio
                        </Link>
                        <h1 className="mt-2 text-[32px] md:text-[56px] lg:text-[64px] font-black leading-[1.1] tracking-tight text-white drop-shadow-2xl max-w-4xl uppercase">
                            McKenzie Lake Premium Hardscape Installation
                        </h1>
                    </div>
                </div>
            </section>

            {/* PROJECT DETAILS */}
            <article className="py-24 mx-auto max-w-5xl px-6">
                <ScrollReveal>
                    {/* Fast Facts Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 bg-gray-50 p-12 rounded-3xl border border-black/5">
                        <div>
                            <p className="text-sm font-black text-black/50 uppercase tracking-widest mb-2">Location</p>
                            <p className="text-3xl font-black text-[#017a6d] uppercase">McKenzie Lake, SE Calgary</p>
                        </div>
                        <div>
                            <p className="text-sm font-black text-black/50 uppercase tracking-widest mb-2">Project Cost</p>
                            <p className="text-3xl font-black text-[#017a6d] uppercase">$10,000</p>
                        </div>
                    </div>
                </ScrollReveal>

                <div className="prose prose-xl max-w-none text-black/80 space-y-12">
                    <ScrollReveal>
                        <h2 className="text-4xl font-black text-black uppercase tracking-wide">Project Breakdown</h2>
                        <p className="text-lg leading-relaxed font-medium">
                            This project focused entirely on high-quality hardscaping to completely refresh an outdated side-yard and pathway. The old mixed rock and aggregate steppers were heavily weathered and failing, so we completely removed and disposed of them to make way for a modern upgrade.
                        </p>
                        <p className="text-lg leading-relaxed font-medium">
                            We replaced the old pathway with large-format Techo-Bloc Blu 60 Grande pavers in a stunning Shale Grey finish, cleanly bordered with premium washed river rock for a striking, low-maintenance aesthetic. To complete the clean look, we also removed and replaced the deteriorating wood border running down the property line.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal>
                        <h3 className="text-2xl font-black text-[#017a6d] uppercase mt-12 mb-6">Scope of Work</h3>
                        <ul className="list-disc pl-6 space-y-4 text-lg font-medium marker:text-[#01fa6d]">
                            <li><strong>Demolition & Removal:</strong> Completely dug out and hauled away the old aggregate steppers, mixed rock, and deteriorated landscaping fabric.</li>
                            <li><strong>Premium Base Preparation:</strong> Installed a proper compacted base layer to ensure the new heavy pavers would not shift or heave during the winter.</li>
                            <li><strong>Techo-Bloc Installation:</strong> Precision-laid Techo-Bloc Blu 60 Grande pavers in Shale Grey to create a bold, modern, and highly durable walking path.</li>
                            <li><strong>River Rock Border:</strong> Surrounded the new Grande pavers with washed river rock for excellent drainage and a crisp, professional finish.</li>
                            <li><strong>Property Line Border:</strong> Removed and replaced the old wood retaining border along the property line to re-establish a sharp, structural edge.</li>
                        </ul>
                    </ScrollReveal>
                </div>

                {/* PROJECT GALLERY */}
                <div className="pt-24">
                    <h3 className="text-2xl font-black text-[#017a6d] uppercase mb-8">Project Progress Gallery</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                        {[
                            { src: "/projects/project-2/img-7.jpg", alt: "Full view of the new Techo-Bloc paver pathway and new wood property line border" },
                            { src: "/projects/project-2/img-6.jpg", alt: "Close up of the new Techo-Bloc pavers" },
                            { src: "/projects/project-2/img-2.jpg", alt: "Worker adjusting base prep next to house" },
                            { src: "/projects/project-2/img-3.jpg", alt: "Close up of Techo-Bloc Blu 60 Grande pavers wet with river rock" },
                            { src: "/projects/project-2/img-4.jpg", alt: "Chainlink gate showing old rock and square steppers" },
                            { src: "/projects/project-2/img-5.jpg", alt: "Downspout draining onto old mixed rock and steppers" }
                        ].map((photo, i) => (
                            <ScrollReveal key={i} className="relative aspect-[3/4] md:aspect-square rounded-2xl overflow-hidden group border border-black/5 shadow-lg w-full">
                                <Image src={photo.src} alt={photo.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                            </ScrollReveal>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <ScrollReveal>
                    <div className="mt-24 p-16 bg-[#2c2d32] rounded-[50px] text-center shadow-2xl">
                        <h2 className="text-white text-4xl font-black uppercase mb-6">Want a hardscape built to last?</h2>
                        <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
                            Don't settle for sinking patios. Our open-grade base systems and premium materials are built specifically for Alberta.
                        </p>
                        <Link
                            href="/landscape-installs"
                            className="inline-flex items-center justify-center rounded-full bg-[#01fa6d] px-12 py-[16px] text-[18px] font-black text-black hover:bg-white transition-all shadow-xl hover:-translate-y-1 uppercase tracking-wider"
                        >
                            REQUEST AN ESTIMATE
                        </Link>
                    </div>
                </ScrollReveal>
            </article>
        </main>
    );
}
