"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface Project {
  id: number | string;
  title: string;
  location: string;
  budget?: string;
  desc: string;
  img: string;
  link: string;
}

export default function FeaturedProjectsGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar md:grid md:grid-cols-2 gap-6 md:gap-8 pb-4 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0">
      {projects.map((project) => (
        <Link 
          key={project.id} 
          href={project.link}
          className="flex-none w-[85vw] sm:w-[70vw] snap-center md:w-auto md:flex-initial flex flex-col bg-white rounded-3xl border border-black/10 hover:border-[#017a6d]/50 hover:shadow-[0_0_30px_rgba(1,122,109,0.15)] transition-all duration-500 overflow-hidden group cursor-pointer hover:-translate-y-1"
        >
          {/* Image Container */}
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src={project.img}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
              <div>
                <div className="text-white/80 text-[9px] uppercase tracking-[0.2em] font-black mb-1 font-lora">Location</div>
                <div className="text-white font-black text-sm md:text-base leading-tight drop-shadow-md">{project.location.split(',')[0]}</div>
              </div>
              {project.budget && (
                <div className="text-right">
                  <div className="text-white/80 text-[9px] uppercase tracking-[0.2em] font-black mb-1 font-lora">Investment</div>
                  <div className="text-[#01fa6d] font-black text-sm md:text-base leading-tight drop-shadow-md">{project.budget}</div>
                </div>
              )}
            </div>
          </div>

          {/* Content Container */}
          <div className="p-6 md:p-8 flex flex-col flex-1">
            <h3 className="text-xl md:text-2xl font-black text-black uppercase tracking-tight mb-3 group-hover:text-[#017a6d] transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-sm md:text-base text-black/70 font-medium leading-relaxed line-clamp-3 mb-8">
              {project.desc}
            </p>
            
            <div className="mt-auto">
              <span className="inline-flex items-center gap-2 text-[13px] font-black uppercase tracking-widest text-[#017a6d] font-lora">
                Read Project 
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
