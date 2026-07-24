import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function PremiumStatsSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-black text-white border-y border-black/10">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Landscape web page pics/Finished-hardscape-project.JPG"
          alt="Lush green landscaping background"
          fill
          className="object-cover opacity-40 scale-105"
        />
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Story & CTA */}
        <div>
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-[11px] font-black tracking-[0.2em] uppercase text-white/80 mb-8">
            Our Story
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-white mb-6 uppercase drop-shadow-lg">
            CRAFTING BEAUTIFUL <br/><span className="text-white/50">YARDS SINCE '18</span>
          </h2>
          
          <p className="text-lg text-white/80 leading-relaxed font-medium mb-10 max-w-lg">
            TERREOAK has been building and maintaining Calgary yards since 2018. We’re a small crew, owner-operated, hands-on, and we treat every property like it’s our own. You can expect consistent, high-quality work every time.
          </p>

          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-full border border-white/30 bg-transparent px-8 py-3.5 text-sm font-black text-white hover:bg-white hover:text-black transition-all duration-300 tracking-widest uppercase"
          >
            OUR PROJECTS
          </Link>
        </div>

        {/* Right Side: 2x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          
          {/* Top Left: Glassmorphic */}
          <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col justify-center items-center text-center shadow-2xl">
            <div className="text-2xl font-black mb-3 text-white">Excellent</div>
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-[#fbbc05]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              ))}
            </div>
            <div className="text-sm text-white/70 font-medium mb-4">Based on 40 Google reviews</div>
            <div className="flex items-center gap-1 font-black tracking-tighter text-2xl">
               <span className="text-[#4285f4]">G</span>
               <span className="text-[#ea4335]">o</span>
               <span className="text-[#fbbc05]">o</span>
               <span className="text-[#4285f4]">g</span>
               <span className="text-[#34a853]">l</span>
               <span className="text-[#ea4335]">e</span>
            </div>
          </div>

          {/* Top Right: Solid Green */}
          <div className="bg-[#213527]/90 backdrop-blur-sm rounded-3xl p-8 flex flex-col justify-center shadow-xl border border-white/5">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-white/80">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <div className="text-4xl font-black text-white">250+</div>
            </div>
            <div className="text-sm text-white/70 font-medium">Happy Customers</div>
          </div>

          {/* Bottom Left: Solid Green */}
          <div className="bg-[#213527]/90 backdrop-blur-sm rounded-3xl p-8 flex flex-col justify-center shadow-xl border border-white/5">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-white/80">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-4xl font-black text-white">8+</div>
            </div>
            <div className="text-sm text-white/70 font-medium">Years Serving Calgary</div>
          </div>

          {/* Bottom Right: Glassmorphic */}
          <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col justify-center items-center text-center shadow-2xl">
            <div className="text-3xl font-black mb-2 text-white">4.9 / 5</div>
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-[#fbbc05]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              ))}
            </div>
            <div className="text-sm text-white/70 font-medium mb-3">Average Rating</div>
            <div className="text-sm font-black tracking-widest uppercase text-white/90">
               Top Rated
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
