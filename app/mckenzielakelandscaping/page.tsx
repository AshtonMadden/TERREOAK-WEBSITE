"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal, Section, Carousel } from "../components/UI";

export default function FeaturedProjectOne() {
    return (
        <main className="bg-white text-black">
            {/* HERO */}
            <section className="relative min-h-screen flex flex-col justify-center border-b border-black/10 overflow-hidden">
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <Image
                        src="/Landscape web page pics/Finished-hardscape-project.JPG"
                        alt="TERREOAK Custom Landscape Design & Build Project"
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
                            McKenzie Lake Custom Landscape Design & Build
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
                            <p className="text-3xl font-black text-[#017a6d] uppercase">$5,000</p>
                        </div>
                    </div>
                </ScrollReveal>

                <div className="prose prose-xl max-w-none text-black/80 space-y-12">
                    <ScrollReveal>
                        <h2 className="text-4xl font-black text-black uppercase tracking-wide">Project Breakdown</h2>
                        <p className="text-lg leading-relaxed font-medium">
                            This project focused on upgrading an outdated, low-end rock and stepping-stone pathway into a premium, durable hardscape. The client wanted a much cleaner, modern look that would be easy to maintain and drastically improve their backyard's curb appeal.
                        </p>
                        <p className="text-lg leading-relaxed font-medium">
                            Within just two days, our crew stripped the existing materials and installed a far superior, professional-grade foundation and aesthetic finish.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal>
                        <h3 className="text-2xl font-black text-[#017a6d] uppercase mt-12 mb-6">Scope of Work</h3>
                        <ul className="list-disc pl-6 space-y-4 text-lg font-medium marker:text-[#01fa6d]">
                            <li><strong>Demolition & Removal:</strong> Completely stripped and hauled away the old, failing rock beds and cheap stepping stones to provide a clean slate.</li>
                            <li><strong>Premium Base Layer:</strong> Rolled out heavy-duty 5oz commercial filter fabric to establish a permanent weed barrier and stabilize the soil beneath the new rock.</li>
                            <li><strong>Upgraded Hardscaping:</strong> Precision-installed high-end paving stones to create a modern, highly durable walkway.</li>
                            <li><strong>Decorative Finish:</strong> Filled the surrounding beds with beautiful 40mm Rundle Rock, providing excellent drainage and a striking contrast against the new pavers.</li>
                        </ul>
                    </ScrollReveal>
                </div>

                {/* PROJECT GALLERY */}
                <div className="pt-24">
                    <h3 className="text-2xl font-black text-[#017a6d] uppercase mb-8">Project Progress Gallery</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { src: "/projects/project-1/prep-1.jpg", alt: "Worker preparing the site" },
                            { src: "/projects/project-1/prep-2.jpg", alt: "Filter fabric laid out along the side of the house" },
                            { src: "/projects/project-1/prep-3.jpg", alt: "Stepping stones being laid out over the filter fabric" }
                        ].map((photo, i) => (
                            <ScrollReveal key={i} className="relative aspect-[3/4] rounded-2xl overflow-hidden group border border-black/5 shadow-lg w-full">
                                <Image src={photo.src} alt={photo.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                            </ScrollReveal>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <ScrollReveal>
                    <div className="mt-24 p-16 bg-[#2c2d32] rounded-[50px] text-center shadow-2xl">
                        <h2 className="text-white text-4xl font-black uppercase mb-6">Ready to transform your space?</h2>
                        <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
                            Whether you want a complete backyard overhaul or a custom patio, our team is ready to bring your vision to life.
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
