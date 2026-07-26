"use client";

import React, { useState } from 'react';

interface GuaranteeItem {
  id: string;
  title: string;
  description: string;
}

const guarantees: GuaranteeItem[] = [
  { 
    id: '01', 
    title: 'Fully Insured', 
    description: 'We carry comprehensive commercial liability insurance. When you hire TERREOAK, you are fully protected.' 
  },
  { 
    id: '02', 
    title: 'WCB Coverage', 
    description: 'We maintain active WCB coverage for our entire crew, ensuring complete workplace safety and compliance on your property.' 
  },
  { 
    id: '03', 
    title: 'Workmanship Warranty', 
    description: 'We back all of our landscape construction projects with a solid 1-year workmanship warranty for your peace of mind.' 
  },
];

export default function GuaranteesAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white text-black py-24 md:py-32 w-full border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        
        {/* Left Column: Heading */}
        <div className="lg:col-span-4 flex flex-col justify-between">
          <h2 className="text-black/60 text-[10px] uppercase tracking-[0.2em] font-black mb-1 font-lora">PEACE OF MIND</h2>
          <h3 className="text-3xl md:text-4xl font-black leading-[1.1] tracking-tight text-black mb-6 uppercase">
            FULLY INSURED & <br/><span className="text-[#017a6d]">GUARANTEED</span>
          </h3>
          <div className="hidden lg:block mt-auto">
            <svg className="w-6 h-6 text-black/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

        {/* Right Column: Accordion Grid */}
        <div className="lg:col-span-8 flex flex-col justify-center text-lg">
          {guarantees.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.id} className="border-b border-black/10">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-black/40 font-mono text-base">{item.id}</span>
                    <span className="text-black font-black uppercase text-xl md:text-2xl tracking-tight group-hover:text-[#017a6d] transition-colors duration-300">
                      {item.title}
                    </span>
                  </div>
                  <span className={`text-black/40 text-xl font-light transition-transform duration-300 ${isOpen ? 'rotate-45 text-[#017a6d]' : ''}`}>
                    +
                  </span>
                </button>
                
                {/* Dropdown Content */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 pb-8' : 'max-h-0 opacity-0'}`}
                >
                  <div className="pl-12 pr-4">
                    <p className="text-black/70 text-base leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
