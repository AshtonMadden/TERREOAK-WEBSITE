"use client";

import Image from "next/image";
import Link from "next/link";
import { Section, ScrollReveal } from "../../components/UI";

export default function WhyHireSnowRemoval() {
    return (
        <main className="bg-white">
            {/* HERO SECTION */}
            <section className="relative min-h-[70vh] flex flex-col justify-end pb-16 md:pb-24 overflow-hidden bg-black">
                <div className="absolute inset-0 z-0 opacity-60">
                    <Image
                        src="/blog-pics/professional_snow_clearing.png"
                        alt="TERREOAK professional snow removal crew clearing a residential driveway"
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
                    <p className="text-[#01fa6d] font-black uppercase tracking-widest text-sm mb-4">Winter Maintenance • Expert Guide</p>
                    <h1 className="text-[36px] md:text-[64px] lg:text-[72px] font-black leading-[1] text-white uppercase tracking-tight max-w-4xl">
                        Why You Should Hire a Professional Calgary Snow Removal Company
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
                                Calgary winters are unpredictable. A professional snow removal service isn&apos;t just a luxury, it&apos;s about protecting your health, your liability, and your peace of mind.
                            </p>
                            <p className="text-xl text-black/70 leading-relaxed font-medium">
                                When the temperature drops and the heavy snow falls, shoveling the driveway is the last thing anyone wants to do. But avoiding the cold isn&apos;t the only, or even the most important, reason to hire a professional snow removal company. From avoiding costly bylaw fines to preventing serious physical injuries, having a dedicated snow removal crew on a route-based season pass is one of the smartest investments a homeowner can make.
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* The Liability Factor */}
                    <div className="space-y-8">
                        <h2 className="text-4xl font-black text-[#017a6d] uppercase tracking-wide">The Liability Factor</h2>
                        <p className="text-lg text-black/70 leading-relaxed">
                            Under Calgary city bylaws, property owners are required to clear snow and ice from public sidewalks adjacent to their property within 24 hours of the snowfall ending. If you fail to do so, the city can issue hefty fines and hire a contractor to do it at your expense.
                        </p>
                        <p className="text-lg text-black/70 leading-relaxed">
                            Worse than a fine is the risk of a slip-and-fall lawsuit. If a pedestrian, delivery driver, or letter carrier slips on your icy sidewalk, you can be held legally liable. A professional snow removal service acts as an insurance policy. At TERREOAK, we provide a 12-24 hour service guarantee and maintain detailed photo logs of every property we service, ensuring you are completely protected from liability claims.
                        </p>
                    </div>

                    {/* The Pain Points */}
                    <div className="space-y-12">
                        <h2 className="text-4xl font-black text-[#017a6d] uppercase tracking-wide underline decoration-[#01fa6d] underline-offset-8">The Hidden Costs of DIY Snow Removal</h2>

                        <div className="grid grid-cols-1 gap-8">
                            <div className="bg-red-50 p-10 rounded-[2rem] border-l-8 border-red-500 shadow-sm">
                                <h3 className="font-black text-[22px] text-red-600 uppercase mb-4 tracking-wider">01. Physical Strain & Injury Risk</h3>
                                <p className="text-black/70 font-medium leading-relaxed text-lg">
                                    Shoveling wet, heavy snow is one of the leading causes of winter back injuries, muscle strains, and even cardiovascular emergencies. Professional crews use commercial-grade equipment like snowblowers, power sweepers, and truck plows to move heavy snow effortlessly, keeping you out of the cold and out of the hospital.
                                </p>
                            </div>

                            <div className="bg-red-50 p-10 rounded-[2rem] border-l-8 border-red-500 shadow-sm">
                                <h3 className="font-black text-[22px] text-red-600 uppercase mb-4 tracking-wider">02. Travel Limitations (Snowbirds)</h3>
                                <p className="text-black/70 font-medium leading-relaxed text-lg">
                                    Whether you are traveling for a week or spending the entire winter somewhere warm, leaving your driveway unplowed is a massive security risk. Untouched snow is a clear signal to burglars that a home is vacant. Having a professional service maintain your driveway ensures your home looks actively lived in, while ensuring you return to a clean property.
                                </p>
                            </div>

                            <div className="bg-red-50 p-10 rounded-[2rem] border-l-8 border-red-500 shadow-sm">
                                <h3 className="font-black text-[22px] text-red-600 uppercase mb-4 tracking-wider">03. Property Damage</h3>
                                <p className="text-black/70 font-medium leading-relaxed text-lg">
                                    Inexperienced shovelers or neighborhood kids using metal shovels and ice chippers often cause thousands of dollars in damage to concrete driveways, interlock pavers, and lawn edges. Professionals use specialized driveway markers and non-destructive scraping tools to ensure your property remains pristine until spring.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* The Solutions */}
                    <div className="space-y-12 bg-[#017a6d]/5 p-12 rounded-[3rem] border border-[#017a6d]/10">
                        <h2 className="text-4xl font-black text-[#017a6d] uppercase tracking-wide">Why TERREOAK is Different</h2>

                        <div className="space-y-12">
                            <div className="flex gap-8 group">
                                <span className="flex-shrink-0 w-16 h-16 rounded-3xl bg-[#01fa6d] text-black font-black flex items-center justify-center text-3xl shadow-xl transition-transform group-hover:rotate-12">01</span>
                                <div>
                                    <h4 className="text-2xl font-black uppercase text-black mb-3">Route-Based Reliability</h4>
                                    <p className="text-black/70 font-medium leading-relaxed text-lg">
                                        We do not accept "one-off" calls during storms. Our crews run tight, exclusive routes in South Calgary for our season-pass holders only. This guarantees that your property is always serviced quickly and consistently, no matter how bad the storm gets.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-8 group">
                                <span className="flex-shrink-0 w-16 h-16 rounded-3xl bg-[#01fa6d] text-black font-black flex items-center justify-center text-3xl shadow-xl transition-transform group-hover:rotate-12">02</span>
                                <div>
                                    <h4 className="text-2xl font-black uppercase text-black mb-3">12-24 Hour Service Guarantee</h4>
                                    <p className="text-black/70 font-medium leading-relaxed text-lg">
                                        We guarantee that your property will be cleared within 12-24 hours of the snowfall ending. If we miss that window, we'll send a crew back immediately at no charge. We take our service times very seriously.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-8 group">
                                <span className="flex-shrink-0 w-16 h-16 rounded-3xl bg-[#01fa6d] text-black font-black flex items-center justify-center text-3xl shadow-xl transition-transform group-hover:rotate-12">03</span>
                                <div>
                                    <h4 className="text-2xl font-black uppercase text-black mb-3">Email Updates & Photo Logs</h4>
                                    <p className="text-black/70 font-medium leading-relaxed text-lg">
                                        You never have to wonder if the plow is coming. We send email notifications before our crews are dispatched to your route, and we capture time-stamped photo logs of your completed driveway for total peace of mind.
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
                                Ready for a Worry-Free <br className="hidden md:block" />Calgary Winter?
                            </h2>
                            <p className="text-white/60 text-xl mb-12 max-w-2xl mx-auto font-medium relative z-10">
                                Don&apos;t wait until the first blizzard hits. Secure your spot on our exclusive South Calgary snow removal routes today.
                            </p>
                            <Link
                                href="/residential-snow-removal"
                                className="inline-flex items-center justify-center rounded-full bg-[#01fa6d] px-14 py-[20px] text-[18px] font-black text-black hover:bg-white transition-all transform hover:-translate-y-2 shadow-2xl relative z-10 uppercase tracking-widest"
                            >
                                SECURE YOUR SEASON PASS
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </article>
        </main>
    );
}
