"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "../../components/UI";

export default function CranstonProject() {
    return (
        <main className="bg-white text-black">
            {/* HERO */}
            <section className="relative min-h-screen flex flex-col justify-center border-b border-black/10 overflow-hidden">
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <Image
                        src="/projects/cranston-makeover/hero-aerial.jpg"
                        alt="TERREOAK Cranston Front Yard Makeover"
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
                            Cranston, Calgary, Alberta Front Yard Landscape Makeover
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
                            <p className="text-3xl font-black text-[#017a6d] uppercase">Cranston, Calgary AB</p>
                        </div>
                        <div>
                            <p className="text-sm font-black text-black/50 uppercase tracking-widest mb-2">Project Cost</p>
                            <p className="text-3xl font-black text-[#017a6d] uppercase">$3,150</p>
                        </div>
                    </div>
                </ScrollReveal>

                <div className="prose prose-xl max-w-none text-black/80 space-y-12">
                    <ScrollReveal>
                        <h2 className="text-4xl font-black text-black uppercase tracking-wide">Project Breakdown</h2>
                        <p className="text-lg leading-relaxed font-medium">
                            Originally, this client reached out to us after accidentally spraying his entire front yard with Killex, which unfortunately killed off the entire lawn. We stepped in to completely revitalize the space, removing the dead turf and starting fresh to give the home its curb appeal back.
                        </p>
                        <p className="text-lg leading-relaxed font-medium">
                            We brought in new, nutrient-rich soil to establish a healthy foundation and installed premium Kentucky Bluegrass sod across the entire front yard. To complete the makeover, we refreshed the landscape beds by filling them with 20 mil Rundle rock and placed a beautiful 300 lb decorative Rundle boulder as a focal point.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal>
                        <h3 className="text-2xl font-black text-[#017a6d] uppercase mt-12 mb-6">Scope of Work</h3>
                        <ul className="list-disc pl-6 space-y-4 text-lg font-medium marker:text-[#01fa6d]">
                            <li><strong>Lawn Replacement:</strong> Removed the existing dead grass after accidental Killex application.</li>
                            <li><strong>Soil Preparation:</strong> Brought in fresh topsoil to ensure a healthy base for the new lawn.</li>
                            <li><strong>Sod Installation:</strong> Professionally laid high-quality Kentucky Bluegrass sod for an instant, lush green lawn.</li>
                            <li><strong>Rock Beds:</strong> Filled the front landscape beds with beautiful 20 mil Rundle rock.</li>
                            <li><strong>Decorative Boulder:</strong> Installed a striking 300 lb Rundle boulder as a centerpiece in the bed.</li>
                        </ul>
                    </ScrollReveal>
                </div>

                {/* PROJECT GALLERY */}
                <div className="pt-24">
                    <h3 className="text-2xl font-black text-[#017a6d] uppercase mb-8">Project Progress Gallery</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                        {[
                            { src: "/projects/cranston-makeover/front-view.jpg", alt: "Front view of the newly landscaped yard" },
                            { src: "/projects/cranston-makeover/laying-sod.jpg", alt: "Workers laying new Kentucky Bluegrass sod" },
                            { src: "/projects/cranston-makeover/rundle-bed.jpg", alt: "Close up of the new 20 mil Rundle rock bed and 300 lb boulder" }
                        ].map((photo, i) => (
                            <ScrollReveal key={i} className="relative aspect-[4/3] rounded-2xl overflow-hidden group border border-black/5 shadow-lg w-full">
                                <Image src={photo.src} alt={photo.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                            </ScrollReveal>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <ScrollReveal>
                    <div className="mt-24 p-16 bg-[#2c2d32] rounded-[50px] text-center shadow-2xl">
                        <h2 className="text-white text-4xl font-black uppercase mb-6">Ready to revitalize your yard?</h2>
                        <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
                            Whether you need a complete lawn replacement or a fresh new look for your landscape beds, our team is ready to help.
                        </p>
                        <Link
                            href="/landscape-installs"
                            className="inline-flex items-center justify-center rounded-full bg-[#01fa6d] px-12 py-[16px] text-[18px] font-black text-black hover:bg-white transition-all shadow-xl hover:-translate-y-1 uppercase tracking-wider"
                        >
                            REQUEST A PROPOSAL
                        </Link>
                    </div>
                </ScrollReveal>
            </article>
        </main>
    );
}
