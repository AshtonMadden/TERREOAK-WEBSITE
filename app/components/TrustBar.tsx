import React from 'react';

export default function TrustBar() {
  return (
    <div className="bg-[#01fa6d] py-6 w-full relative z-20 shadow-lg border-b border-black/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-around items-center gap-6 md:gap-4 text-center">
        <div className="flex items-center gap-3">
          <svg className="w-8 h-8 text-black shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span className="text-black font-black uppercase tracking-widest text-sm md:text-base">8 Years of Experience</span>
        </div>
        <div className="hidden md:block w-px h-8 bg-black/20"></div>
        <div className="flex items-center gap-3">
          <svg className="w-8 h-8 text-black shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
          <span className="text-black font-black uppercase tracking-widest text-sm md:text-base">Licensed & Insured</span>
        </div>
        <div className="hidden md:block w-px h-8 bg-black/20"></div>
        <div className="flex items-center gap-3">
          <svg className="w-8 h-8 text-black shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="text-black font-black uppercase tracking-widest text-sm md:text-base">Professionally Trained Team</span>
        </div>
      </div>
    </div>
  );
}
