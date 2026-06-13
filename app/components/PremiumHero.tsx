"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import GoogleReviewBadge from "./GoogleReviewBadge";

interface PremiumHeroProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  backgroundImage?: string;
  backgroundImageAlt?: string;
  backgroundVideo?: string;
  ctaText?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
  ctaSubtext?: string;
  secondaryCtaText?: string;
  onSecondaryCtaClick?: () => void;
  badgeLabel?: string;
  children?: React.ReactNode;
}

export default function PremiumHero({
  title,
  description,
  backgroundImage,
  backgroundImageAlt = "Landscaping Background",
  backgroundVideo,
  ctaText = "VIEW PROJECT",
  ctaHref,
  onCtaClick,
  ctaSubtext,
  secondaryCtaText,
  onSecondaryCtaClick,
  badgeLabel = "TERREOAK Services",
  children,
}: PremiumHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((e) => console.error("Autoplay failed:", e));
    }
  }, [backgroundVideo]);

  const renderCta = () => {
    if (!ctaText) return null;

    const className = "w-full md:w-auto inline-flex items-center justify-center rounded-full bg-[#01fa6d] px-6 md:px-10 py-4 md:py-4 text-[15px] md:text-[16px] font-black text-black hover:bg-white transition-all duration-300 uppercase tracking-widest shadow-lg shadow-[#01fa6d]/20 hover:-translate-y-0.5 text-center leading-tight";
    
    if (ctaHref) {
      // If it's an anchor link or normal link
      return <Link href={ctaHref} className={className}>{ctaText}</Link>;
    }
    
    return (
      <div className="flex flex-col items-center">
        <button onClick={onCtaClick} className={className}>
          {ctaText}
        </button>
        {ctaSubtext && (
          <span className="text-[10px] md:text-[11px] font-bold text-[#01fa6d] uppercase tracking-widest mt-1.5 md:mt-2 block text-center">
            {ctaSubtext}
          </span>
        )}
      </div>
    );
  };

  const renderSecondaryCta = () => {
    if (!secondaryCtaText) return null;
    return (
      <button 
        onClick={onSecondaryCtaClick} 
        className="w-full md:w-auto inline-flex items-center justify-center rounded-full bg-transparent px-5 md:px-8 py-4 md:py-4 text-[14px] md:text-[15px] font-bold text-white border-[1.5px] md:border-2 border-white hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest shadow-lg leading-tight"
      >
        {secondaryCtaText}
      </button>
    );
  };

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-black text-white">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        {backgroundVideo ? (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="object-cover w-full h-full opacity-80 transform-gpu will-change-transform"
          >
            <source src={backgroundVideo} type="video/quicktime" />
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        ) : backgroundImage ? (
          <Image
            src={backgroundImage}
            alt={backgroundImageAlt}
            fill
            priority
            className="object-cover opacity-80"
          />
        ) : null}
        {/* Deep, subtle gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col justify-center h-full pt-32 pb-48 md:pt-40 md:pb-32">
        <div className="max-w-4xl animate-slide-in-left">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white uppercase drop-shadow-2xl mb-8">
            {title}
          </h1>





          {/* Extra content slots like Trust Boxes */}
          {children && (
            <div className="mt-8">
              {children}
            </div>
          )}
        </div>
      </div>

      {/* Glassmorphic Floating Action Bar */}
      <div className="absolute bottom-8 left-0 right-0 z-20 pointer-events-none">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="inline-block pointer-events-auto w-full">
            <div className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-6">
              <div className="flex flex-col items-center md:items-start pl-0 md:pl-2 w-full max-w-[340px] md:max-w-none mx-auto md:mx-0">

                <GoogleReviewBadge className="!mt-0 scale-100 md:scale-100 origin-center md:origin-left -mt-1 md:-mt-0 drop-shadow-lg !w-full md:!w-fit" />
              </div>
              <div className="flex flex-col md:flex-row items-stretch md:items-start gap-3 md:gap-4 w-full max-w-[340px] md:max-w-none mx-auto md:mx-0 shrink-0 md:pr-2">
                <div className="flex-1 md:flex-none">
                  {renderSecondaryCta()}
                </div>
                <div className="flex-1 md:flex-none">
                  {renderCta()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
