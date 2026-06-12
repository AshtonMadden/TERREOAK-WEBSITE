
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal, Section, Carousel } from "../components/UI";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parkland Front Yard Overhaul | TERREOAK Landscaping",
  description: "See our complete front yard landscaping overhaul in Parkland, SE Calgary. River rock, custom borders, and hardy perennials.",
  keywords: ["Parkland landscaping", "front yard overhaul", "river rock installation", "SE Calgary landscaping project", "drought tolerant landscaping"],
};

export default function ParklandFlowerBedProject() {
    return (
        <main className="bg-white text-black">
            {/* HERO */}
            <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-black text-white">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/softscaping-river-rock-hostas.jpg"
                        alt="Parkland Flower Bed Softscaping Project with river rock and perennials"
                        fill
                        priority
                        className="object-cover opacity-80 scale-105 transform origin-center"
                    />
                </div>
                {/* Deep, subtle gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col justify-center h-full pt-32 pb-48 md:pt-40 md:pb-32 text-left animate-slide-in-left">
                    <div className="max-w-4xl">
                        <Link
                            href="/projects"
                            className="inline-flex items-center text-[#01fa6d] font-black text-[14px] uppercase tracking-widest mb-6 hover:opacity-80 transition-all transform hover:-translate-x-2 drop-shadow-md"
                        >
                            <span className="mr-2 text-lg">←</span> Back to portfolio
                        </Link>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white uppercase drop-shadow-2xl mb-8">
                            Parkland Complete Front Yard Overhaul
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
                            <p className="text-3xl font-black text-[#017a6d] uppercase">Parkland, SE Calgary</p>
                        </div>
                        <div>
                            <p className="text-sm font-black text-black/50 uppercase tracking-widest mb-2">Project Cost</p>
                            <p className="text-3xl font-black text-[#017a6d] uppercase">$4,000</p>
                        </div>
                    </div>
                </ScrollReveal>

                <div className="prose prose-xl max-w-none text-black/80 space-y-12">
                    <ScrollReveal>
                        <h2 className="text-4xl font-black text-black uppercase tracking-wide">Project Breakdown</h2>
                        <p className="text-lg leading-relaxed font-medium">
                            We completely transformed this space from a fading wood garden with no decorative stone or plants into a stunning, complete rock garden that will look incredible for years to come. 
                        </p>
                        <p className="text-lg leading-relaxed font-medium">
                            First, we started off by demoing all the old wood border and removing the dirt from the trench. From there, we established a rock-solid foundation by installing geogrid, base rock, and a concrete-set border. After digging holes for the plants, we installed a diverse mix of greenery including White Virginia Creeper, Coral Bells, Siberian Bugloss, Patriot Hosta, Ninebark Diablo, Lily of the Valley, and Elijah Bluegrass. To finish the space, we laid down 40mm river rock and placed a beautiful 70 lb Rundle boulder as a centerpiece.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal>
                        <h3 className="text-2xl font-black text-[#017a6d] uppercase mt-12 mb-6">Scope of Work</h3>
                        <ul className="list-disc pl-6 space-y-4 text-lg font-medium marker:text-[#01fa6d]">
                            <li><strong>Demolition & Excavation:</strong> Demoed all the old wood borders and removed dirt from the trench to prepare for the new installation.</li>
                            <li><strong>Base & Edging:</strong> Installed geogrid, base rock, and a permanent concrete-set border for maximum durability.</li>
                            <li><strong>Planting:</strong> Dug holes and installed White Virginia Creeper, Coral Bells, Siberian Bugloss, Patriot Hosta, Ninebark Diablo, Lily of the Valley, and Elijah Bluegrass.</li>
                            <li><strong>Decorative Stone & Boulders:</strong> Finished the bed with 40mm river rock and a 70 lb Rundle boulder centerpiece.</li>
                        </ul>
                    </ScrollReveal>
                </div>

                {/* PROJECT GALLERY */}
                <div className="pt-24">
                    <h3 className="text-2xl font-black text-[#017a6d] uppercase mb-8">Project Gallery</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { src: "/images/parkland-jobsite-4.jpg", alt: "Empty dirt bed with old wooden border" },
                            { src: "/images/parkland-jobsite-2.jpg", alt: "Worker planting and installing weed barrier and edging" },
                            { src: "/images/parkland-jobsite-3.jpg", alt: "Plants laid out on the weed barrier before planting" },
                            { src: "/images/parkland-jobsite-1.jpg", alt: "Finished rock bed with plants and river rock" }
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
