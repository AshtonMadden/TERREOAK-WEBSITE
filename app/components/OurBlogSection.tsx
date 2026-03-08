"use client";

import Link from "next/link";
import Image from "next/image";

export default function OurBlogSection() {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/blog-bg.jpg"
                    alt="TERREOAK Blog Background"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-6xl px-6">
                <div className="max-w-3xl">
                    <p className="text-[13px] font-bold tracking-widest text-[#01fa6d] uppercase mb-2">
                        Stay Informed
                    </p>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-8 uppercase">
                        Our Blog
                    </h2>
                    <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10 font-medium">
                        Stay updated with the latest landscaping tips, seasonal advice, and project highlights from the TERREOAK team.
                    </p>
                    <Link
                        href="/blog"
                        className="inline-flex items-center justify-center rounded-full bg-[#01fa6d] px-10 py-4 text-[16px] font-black text-black hover:bg-white transition-all transform hover:-translate-y-1 shadow-xl"
                    >
                        READ OUR BLOG
                    </Link>
                </div>
            </div>
        </section>
    );
}
