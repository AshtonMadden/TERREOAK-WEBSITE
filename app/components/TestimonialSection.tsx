"use client";

import { useRef, useState, useEffect } from "react";
import { Section } from "./UI";

interface Testimonial {
    name: string;
    role: string;
    text: string;
}

interface TestimonialSectionProps {
    testimonials: Testimonial[];
    kicker?: string;
    title?: string;
    titleClassName?: string;
}

export default function TestimonialSection({
    testimonials,
    kicker = "Success Stories",
    title = "What Our Clients Say",
    titleClassName = "text-[#017a6d]"
}: TestimonialSectionProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setShowLeftArrow(scrollLeft > 10);
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener("scroll", checkScroll);
            // Initial check
            checkScroll();

            // Also check on window resize
            window.addEventListener("resize", checkScroll);
        }
        return () => {
            if (container) container.removeEventListener("scroll", checkScroll);
            window.removeEventListener("resize", checkScroll);
        };
    }, []);

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const containerWidth = scrollContainerRef.current.clientWidth;
            // On desktop we want to scroll by the full width (3 cards), on mobile by one card width
            const scrollAmount = window.innerWidth >= 768 ? containerWidth : containerWidth * 0.8;
            const finalAmount = direction === "left" ? -scrollAmount : scrollAmount;

            scrollContainerRef.current.scrollBy({ left: finalAmount, behavior: "smooth" });
        }
    };

    return (
        <Section kicker={kicker} title={title} titleClassName={titleClassName}>
            <div className="relative mt-12 group">
                {/* ARROWS */}
                <button
                    onClick={() => scroll("left")}
                    className={`absolute -left-4 md:-left-6 top-1/2 -mt-6 z-20 w-12 h-12 bg-white rounded-full shadow-2xl border border-black/10 flex items-center justify-center text-[#017a6d] hover:bg-[#017a6d] hover:text-white transition-all transform hover:scale-110 active:scale-95 disabled:opacity-0 ${!showLeftArrow ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                    aria-label="Previous testimonials"
                    disabled={!showLeftArrow}
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    onClick={() => scroll("right")}
                    className={`absolute -right-4 md:-right-6 top-1/2 -mt-6 z-20 w-12 h-12 bg-white rounded-full shadow-2xl border border-black/10 flex items-center justify-center text-[#017a6d] hover:bg-[#017a6d] hover:text-white transition-all transform hover:scale-110 active:scale-95 disabled:opacity-0 ${!showRightArrow ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                    aria-label="Next testimonials"
                    disabled={!showRightArrow}
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* CARDS CONTAINER */}
                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 hide-scrollbar px-1"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {testimonials.map((testimonial, i) => (
                        <div
                            key={i}
                            className="w-[85%] md:w-[calc(33.333%-16px)] flex-shrink-0 snap-start"
                        >
                            <div className="h-full bg-white rounded-[32px] p-8 md:p-10 border border-black/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group/card hover:border-[#01fa6d]/30 min-h-[400px]">
                                <div>
                                    <h4 className="font-black text-xl text-black uppercase tracking-tight mb-1">
                                        {testimonial.name}
                                    </h4>

                                    {/* STARS */}
                                    <div className="flex gap-1 mb-6">
                                        {[...Array(5)].map((_, j) => (
                                            <svg key={j} className="w-4 h-4 text-[#01fa6d]" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>

                                    <p className="text-[16px] md:text-[17px] text-black/80 leading-relaxed font-medium">
                                        &quot;{testimonial.text}&quot;
                                    </p>
                                </div>

                                <div className="mt-8 pt-6 border-t border-black/5 flex items-center justify-between">
                                    <div>
                                        <span className="block text-[10px] font-black text-black/30 uppercase tracking-[0.2em] mb-1">Service Type</span>
                                        <span className="block font-black text-[#017a6d] text-xs uppercase">{testimonial.role}</span>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center border border-black/5 text-[#017a6d] font-black">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
        </Section>
    );
}
