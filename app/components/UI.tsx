"use client";

import { useState, useEffect, useRef } from "react";

/**
 * ScrollReveal component that adds an entry animation when scrolled into view.
 */
export function ScrollReveal({
    children,
    className = ""
}: {
    children: React.ReactNode;
    className?: string
}) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out 
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12 md:translate-y-0 md:opacity-100"} 
        ${className}`}
        >
            {children}
        </div>
    );
}

/**
 * Standard content section with kicker, title, and optional side image.
 */
export function Section({
    kicker,
    kickerClassName,
    title,
    children,
    titleClassName,
    wrapperClassName,
    image,
    py = "py-24",
    headerRight,
    imageRight = false,
    hasBorder = true,
    id,
}: {
    kicker?: string;
    kickerClassName?: string;
    title: React.ReactNode;
    children: React.ReactNode;
    titleClassName?: string;
    wrapperClassName?: string;
    image?: React.ReactNode;
    py?: string;
    headerRight?: React.ReactNode;
    imageRight?: boolean;
    hasBorder?: boolean;
    id?: string;
}) {
    return (
        <div id={id} className={`${hasBorder ? "border-t border-black/5" : ""} ${wrapperClassName || ""}`}>
            <section className={`mx-auto max-w-6xl px-6 ${py}`}>
                <div className={image ? "grid grid-cols-1 md:grid-cols-2 gap-16 items-center" : ""}>
                    {image && (
                        <div className={`relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl ${imageRight ? "md:order-last" : ""}`}>
                            {image}
                        </div>
                    )}
                    <div className={imageRight ? "md:order-first" : ""}>
                        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                            <div>
                                {kicker ? (
                                    <p className={`text-[13px] font-bold tracking-widest text-black/60 uppercase ${kickerClassName || ""}`}>
                                        {kicker}
                                    </p>
                                ) : null}
                                <h2 className={`mt-2 text-3xl md:text-5xl font-black ${titleClassName || ""}`}>{title}</h2>
                            </div>
                            {headerRight}
                        </div>
                        <div className="mt-8">{children}</div>
                    </div>
                </div>
            </section>
        </div>
    );
}
/**
 * Simple horizontal scroll carousel with snap points.
 */
export function Carousel({ children, className = "", showArrows = true }: { children: React.ReactNode; className?: string; showArrows?: boolean }) {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (!scrollRef.current) return;
        const container = scrollRef.current;
        const scrollAmount = container.clientWidth * 0.8;
        container.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
        });
    };

    return (
        <div className="relative group">
            <div
                ref={scrollRef}
                className={`flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4 -mx-6 px-6 ${className}`}
            >
                {children}
            </div>

            {showArrows && (
                <>
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white/90 border border-black/5 rounded-full shadow-lg lg:hidden opacity-100 transition-opacity"
                        aria-label="Previous slide"
                    >
                        <svg className="w-6 h-6 text-[#017a6d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white/90 border border-black/5 rounded-full shadow-lg lg:hidden opacity-100 transition-opacity"
                        aria-label="Next slide"
                    >
                        <svg className="w-6 h-6 text-[#017a6d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </>
            )}

            <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
}
