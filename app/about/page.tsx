"use client";

import Link from "next/link";
import Image from "next/image";
import { Section } from "../components/UI";
import OurBlogSection from "../components/OurBlogSection";

export default function AboutPage() {
    return (
        <main className="bg-white text-black">
            {/* HERO */}
            <section className="relative min-h-screen flex flex-col justify-center border-b border-black/10 overflow-hidden bg-black">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/spring-cleanup-pics/City-of-Calgary-skyline.JPG"
                        alt="TERREOAK Landscaping projects in Calgary"
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </div>

                <div className="relative z-10 w-full mx-auto max-w-6xl px-6 flex flex-col justify-center min-h-[100dvh] md:min-h-0 md:block pt-48 pb-16 md:pt-56 md:pb-24 lg:pt-60 lg:pb-32 text-left">
                    <div className="mt-auto md:mt-0">
                        <p className="text-[14px] md:text-[17px] font-bold tracking-widest text-[#01fa6d] uppercase drop-shadow-md">
                            TERREOAK • OUR STORY
                        </p>
                        <h1 className="mt-4 text-[32px] md:text-[68px] lg:text-[76px] font-black leading-[1.1] tracking-tight text-white drop-shadow-2xl max-w-4xl uppercase">
                            FROM A SNOW SHOVEL<br />
                            <span className="text-[#01fa6d]">TO A CALGARY LANDSCAPE COMPANY.</span>
                        </h1>
                    </div>

                    {/* TRUST GRID */}
                    <div className="mt-auto md:mt-16 mb-8 md:mb-0 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="rounded-lg border border-black/10 bg-white p-[14px]">
                            <h3 className="font-black text-[16px] text-black">LOCAL CALGARY EXPERTISE</h3>
                            <p className="mt-1.5 text-[14px] text-black/70 leading-relaxed">
                                Born and bred in Calgary&mdash;we know what works in our city&apos;s environment.
                            </p>
                        </div>
                        <div className="rounded-lg border border-black/10 bg-white p-[14px]">
                            <h3 className="font-black text-[16px] text-black">INTEGRITY IN BUILD</h3>
                            <p className="mt-1.5 text-[14px] text-black/70 leading-relaxed">
                                We don&apos;t cut corners. We prep right so your project lasts for years.
                            </p>
                        </div>
                        <div className="rounded-lg border border-black/10 bg-white p-[14px]">
                            <h3 className="font-black text-[16px] text-black">LONG-TERM CARE</h3>
                            <p className="mt-1.5 text-[14px] text-black/70 leading-relaxed">
                                We build relationships, not just projects. We&apos;re here for the long haul.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* OUR MISSION */}
            <Section
                kicker="Our Mission"
                title="BUILT FROM THE GROUND UP"
                titleClassName="text-[#017a6d]"
                py="py-24"
            >
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <div className="lg:w-1/2 space-y-6 text-[18px] text-black/80 leading-relaxed font-medium">
                        <p>
                            At TERREOAK, our mission is simple: deliver dependable landscaping and snow services while raising the standard for professionalism in the industry.
                        </p>
                        <p>
                            We believe great work starts with a strong work ethic, attention to detail, and a commitment to doing things the right way, every time. From building landscapes to maintaining properties through the winter, our goal is to create results our customers can rely on season after season.
                        </p>
                        <p>
                            We’re not just here to complete jobs. We’re here to build lasting relationships, improve the properties we work on, and continue growing a company our community can trust.
                        </p>
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl border border-black/5">
                            <Image
                                src="/images/about-mission-team.jpg"
                                alt="TERREOAK team at work - Calgary property maintenance"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </Section>

            {/* WHO WORKS HERE */}
            <Section
                kicker="Our Team"
                title="MEET OUR LEADERSHIP"
                titleClassName="text-[#017a6d] uppercase"
                wrapperClassName="bg-gray-50"
            >
                <div className="space-y-24 mt-12">
                    {/* Row 1: Left Circle, Right Text */}
                    <div className="flex flex-col md:flex-row items-stretch bg-white rounded-3xl shadow-xl border border-black/5 overflow-hidden group">
                        <div className="md:w-2/5 relative min-h-[350px] md:min-h-full">
                            <Image
                                src="/images/Ashton-Madden-Cowboy.jpg"
                                alt="Ashton Madden - Founder & Director"
                                fill
                                sizes="(max-width: 768px) 100vw, 40vw"
                                className="object-cover object-top"
                            />
                        </div>
                        <div className="md:w-3/5 p-8 md:p-12 relative flex flex-col justify-center text-left">
                            <h3 className="text-3xl font-black text-[#017a6d] uppercase tracking-tight mb-4">Ashton Madden</h3>
                            <div className="space-y-4">
                                <p className="text-lg text-black/70 leading-relaxed font-medium">
                                    My goal with TERREOAK is simple: build a company rooted in strong values, a great team culture, and a customer experience people can trust.
                                </p>
                            </div>

                            <div className="mt-6 flex flex-col gap-2">
                                <h4 className="text-[12px] font-black text-[#017a6d] uppercase tracking-[0.2em] mb-1">Focus Areas</h4>
                                <div className="flex flex-wrap gap-x-6 gap-y-2">
                                    {[
                                        "Company Leadership",
                                        "Team Culture",
                                        "Customer Experience"
                                    ].map((area, i) => (
                                        <div key={i} className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#017a6d]" />
                                            <span className="text-[14px] font-bold text-black/60 uppercase tracking-wide">{area}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* SIGNATURE AREA */}
                            <div className="mt-8 flex justify-end items-end">
                                <div className="text-right w-full flex flex-col items-end">
                                    <div className="relative h-20 w-[200px] md:h-[136px] md:w-[435px] mb-2">
                                        <Image
                                            src="/Ashton_Signature_.jpg"
                                            alt="Ashton Madden Signature"
                                            fill
                                            sizes="(max-width: 768px) 200px, 435px"
                                            className="object-contain object-right"
                                        />
                                    </div>
                                    <span className="text-[10px] font-bold text-black/30 uppercase tracking-[0.2em]">Founder & Director</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Row 2: Right Circle, Left Text */}
                    <div className="flex flex-col md:flex-row-reverse items-stretch bg-white rounded-3xl shadow-xl border border-black/5 overflow-hidden group">
                        <div className="md:w-2/5 relative min-h-[350px] md:min-h-full">
                            <Image
                                src="/images/KEAGAN-MADDEN-HEADSHOT.JPG"
                                alt="Keagan Madden - Co-Owner"
                                fill
                                sizes="(max-width: 768px) 100vw, 40vw"
                                className="object-cover object-top"
                            />
                        </div>
                        <div className="md:w-3/5 p-8 md:p-12 relative flex flex-col justify-center text-left">
                            <h3 className="text-3xl font-black text-[#017a6d] uppercase tracking-tight mb-4">Keagan Madden</h3>
                            <div className="space-y-4">
                                <p className="text-lg text-black/70 leading-relaxed font-medium">
                                    As co-owner of TERREOAK, Keagan supports the day-to-day operations of the company. His focus is on helping train our field maintenance teams, assisting with hiring and onboarding, and supporting residential snow service sales during the winter season.
                                </p>
                            </div>

                            {/* SIGNATURE AREA */}
                            <div className="mt-8 flex justify-end items-end">
                                <div className="text-right w-full flex flex-col items-end">
                                    <div className="relative h-20 w-[200px] md:h-[136px] md:w-[435px] mb-2">
                                        <Image
                                            src="/Keagan_Signature_.jpg"
                                            alt="Keagan Madden Signature"
                                            fill
                                            sizes="(max-width: 768px) 200px, 435px"
                                            className="object-contain object-right"
                                        />
                                    </div>
                                    <span className="text-[10px] font-bold text-black/30 uppercase tracking-[0.2em]">Co-Owner & Operations Director</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Row 3: Left Circle, Right Text */}
                    <div className="flex flex-col md:flex-row items-stretch bg-white rounded-3xl shadow-xl border border-black/5 overflow-hidden group">
                        <div className="md:w-2/5 relative min-h-[350px] md:min-h-full">
                            <Image
                                src="/images/CAYDEN-MADDEN-HEADSHOT.jpg"
                                alt="Cayden Madden - Media & Content Lead"
                                fill
                                sizes="(max-width: 768px) 100vw, 40vw"
                                className="object-cover object-top"
                            />
                        </div>
                        <div className="md:w-3/5 p-8 md:p-12 relative flex flex-col justify-center text-left">
                            <h3 className="text-3xl font-black text-[#017a6d] uppercase tracking-tight mb-4">Cayden Madden</h3>
                            <div className="space-y-4">
                                <p className="text-lg text-black/70 leading-relaxed font-medium">
                                    Cayden leads media and content at TERREOAK, managing the company’s photos, videos, and online content. He also supports the development of Ashton’s personal brand by helping capture and share the story behind the work we do.
                                </p>
                            </div>

                            {/* SIGNATURE AREA */}
                            <div className="mt-8 flex justify-end items-end">
                                <div className="text-right w-full flex flex-col items-end">
                                    <div className="relative h-20 w-[200px] md:h-[136px] md:w-[435px] mb-2">
                                        <Image
                                            src="/Cayden_Signature_ copy.jpg"
                                            alt="Cayden Madden Signature"
                                            fill
                                            sizes="(max-width: 768px) 200px, 435px"
                                            className="object-contain object-right"
                                        />
                                    </div>
                                    <span className="text-[10px] font-bold text-black/30 uppercase tracking-[0.2em]">Media & Content Lead</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* HOW WE STARTED */}
            <Section
                kicker="Our Origins"
                title="HOW WE STARTED"
                titleClassName="text-[#017a6d] uppercase"
                py="py-24"
            >
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2 space-y-6 text-[18px] text-black/80 leading-relaxed font-medium">
                        <p>
                            At the age of 10, I began my entrepreneurial journey by knocking on doors with my brother offering snow removal services to our community. What started as a simple idea and a couple snow shovels in 2014 quickly grew into The Super Shovelers, which soon evolved into something much bigger. Within just 4 years our brand had changed to Madden Property Services Inc. and grew exponentially, as we upgraded our tools to include a wagon, snow blower and a lawn mower.
                        </p>
                        <p>
                            This journey symbolizes our commitment to hard work, dedication, and continuous growth. From humble beginnings to expanding our services, we have always strived to provide top notch services to Calgary and Okotoks. Our passion for serving others and our drive for excellence have been the driving forces behind our success.
                        </p>
                        <p>
                            Today, we are known as TERREOAK and stand as a company that believes in the power of perseverance and the impact of a strong vision. We are proud to have grown from a small operation to a reputable brand, and we look forward to continuing our journey of providing exceptional services to our valued customers.
                        </p>
                        <p className="font-bold">-Ashton</p>
                    </div>
                    <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
                        <div className="relative aspect-square overflow-hidden rounded-2xl shadow-lg border border-black/5 uppercase">
                            <Image
                                src="/Landscape web page pics/base-prep-paverpath.JPG"
                                alt="Humble beginnings - base preparation"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                        <div className="relative aspect-square overflow-hidden rounded-2xl shadow-lg border border-black/5 mt-8">
                            <Image
                                src="/Landscape web page pics/Calgary-Concrete-pour.JPG"
                                alt="Growth through construction"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </div>
                </div>
            </Section>


            {/* BLOG */}

            {/* BLOG */}
            <OurBlogSection />
        </main>
    );
}
