"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  href: string;
}

const services: ServiceItem[] = [
  { id: '01', title: 'Landscape Installs', description: 'Premium hardscape and softscape construction, paving, stone work, and planting designed for stability and style.', href: '/landscape-installs' },
  { id: '02', title: 'Hardscaping', description: 'Expert installation of patios, walkways, retaining walls, and custom stonework engineered for Calgary winters.', href: '/hardscaping' },
  { id: '03', title: 'Softscaping', description: 'Sod installation, tree planting, mulching, and custom garden bed creation to bring your yard to life.', href: '/softscapes' },
  { id: '04', title: 'Residential Snow Removal', description: 'Reliable driveway and sidewalk snow removal with 1cm servicing and photo service logs.', href: '/residential-snow-removal' },
  { id: '05', title: 'Spring Cleanup', description: 'Power raking, core aeration, first mow, and debris removal to kickstart your lawn\'s growing season.', href: '/spring-cleanup-calgary' },
  { id: '06', title: 'Fall Cleanup', description: 'Comprehensive leaf cleanup, final mow, and winter preparation to protect your property during the freeze.', href: '/fall-cleanup' },
  { id: '07', title: 'Irrigation Blowouts', description: 'Professional sprinkler system winterization using high-volume compressed air to prevent freezing.', href: '/irrigation-blowouts' },
  { id: '08', title: 'Commercial Maintenance', description: 'Professional groundskeeping and 24/7 priority snow removal for commercial property managers.', href: '/commercial-grounds-maintenance' },
];

export default function ServicesAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-black text-white py-24 md:py-32 w-full border-b border-black/5">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/projects/cranston-makeover/hero-aerial.jpg"
          alt="Front Yard Landscape Makeover"
          fill
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        
        {/* Left Column: Heading */}
        <div className="lg:col-span-5 flex flex-col justify-between pr-4">
          <div>
            <h2 className="text-white/60 text-[10px] uppercase tracking-[0.2em] font-black mb-1 font-lora">OUR SERVICES</h2>
            <h3 className="mt-2 text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[1.05] text-[#017a6d] mb-8">
              LANDSCAPING AND SNOW
            </h3>
          </div>
          <div className="hidden lg:block mt-12 mb-12">
            <svg className="w-8 h-8 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

        {/* Right Column: Accordion Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-0 text-lg">
          {services.map((service, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={service.id} className="border-b border-white/10">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-white/40 font-mono text-base">{service.id}</span>
                    <span className="text-white font-black uppercase text-xl tracking-tight group-hover:text-[#017a6d] transition-colors duration-300">
                      {service.title}
                    </span>
                  </div>
                  <span className={`text-white/40 text-xl font-light transition-transform duration-300 ${isOpen ? 'rotate-45 text-[#017a6d]' : ''}`}>
                    +
                  </span>
                </button>
                
                {/* Dropdown Content */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 pb-8' : 'max-h-0 opacity-0'}`}
                >
                  <div className="pl-12 pr-4">
                    <p className="text-white/70 text-base leading-relaxed mb-6 font-medium">
                      {service.description}
                    </p>
                    <Link 
                      href={service.href}
                      className="inline-flex items-center justify-center rounded-lg bg-[#01fa6d] px-8 py-3 text-sm font-black text-black hover:opacity-90 transition-all transform hover:-translate-y-1 shadow-md uppercase tracking-wider"
                    >
                      LEARN MORE
                    </Link>
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
