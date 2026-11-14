"use client";

import Image from "next/image";
import { useState } from "react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
}

export default function BeforeAfterSlider({ beforeImage, afterImage, beforeAlt, afterAlt }: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);

  return (
    <div className="relative aspect-[4/5] w-full sm:aspect-[4/3] select-none overflow-hidden rounded-[14px] bg-[#1d1f21]">
      <Image src={afterImage} alt={afterAlt} fill sizes="(min-width: 1024px) 600px, 100vw" className="object-cover" />
      <span className="absolute right-4 top-4 rounded-md bg-brand px-2.5 py-1 text-sm font-semibold text-[#10231a]">After</span>

      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <Image src={beforeImage} alt={beforeAlt} fill sizes="(min-width: 1024px) 600px, 100vw" className="object-cover" />
        <span className="absolute left-4 top-4 rounded-md bg-[#1d1f21] px-2.5 py-1 text-sm font-semibold text-white">Before</span>
      </div>

      <input
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        aria-label="Drag to compare before and after"
        className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
      />

      <div className="pointer-events-none absolute inset-y-0 z-10 w-[3px] -translate-x-1/2 bg-brand" style={{ left: `${position}%` }}>
        <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-[#10231a] shadow-[0_4px_14px_rgba(0,0,0,0.35)]">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 8l-4 4 4 4" />
            <path d="M15 8l4 4-4 4" />
          </svg>
        </div>
      </div>
    </div>
  );
}
