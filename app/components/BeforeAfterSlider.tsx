"use client";

import { useState } from "react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(event.target.value));
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto aspect-[4/3] md:aspect-video max-h-[70vh] overflow-hidden rounded-2xl shadow-2xl group cursor-ew-resize">
      {/* After Image (Background) */}
      <img
        src={afterImage}
        alt={afterAlt}
        className="w-full h-full object-cover block absolute inset-0"
      />
      <div className="absolute top-4 right-4 bg-black/70 text-white text-xs font-bold px-3 py-1 rounded tracking-wider backdrop-blur-md">
        AFTER
      </div>

      {/* Before Image (Foreground overlay clipped by slider position) */}
      <div
        className="absolute top-0 left-0 bottom-0 right-0 overflow-hidden select-none"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={beforeImage}
          alt={beforeAlt}
          className="w-full h-full object-cover block max-w-none"
          // We need an absolute width to ensure the before image is exactly 
          // the same width as the container, otherwise it shrinks when clipped
        />
        <div className="absolute top-4 left-4 bg-red-600/90 text-white text-xs font-bold px-3 py-1 rounded tracking-wider backdrop-blur-md">
          BEFORE
        </div>
      </div>

      {/* Slider Input */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={handleSliderChange}
        className="absolute top-0 left-0 w-full h-full opacity-0 cursor-ew-resize z-20"
      />

      {/* Custom Slider Handle/Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10 pointer-events-none"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.4)] text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 8l-4 4 4 4" />
            <path d="M15 8l4 4-4 4" />
          </svg>
        </div>
      </div>
    </div>
  );
}
