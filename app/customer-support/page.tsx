"use client";

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Section, ScrollReveal } from "../components/UI";

export default function CustomerSupportPage() {
  return (
    <main className="bg-white text-black">
      {/* HERO */}
      <section className="relative min-h-[70vh] flex flex-col justify-center border-b border-black/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/commercial.png"
            alt="TERREOAK Customer Support and Service Assistance"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-44 pb-24 md:pt-60 md:pb-32">
          <p className="text-[14px] font-bold tracking-widest text-[#01fa6d] uppercase drop-shadow-md">
            TERREOAK • CUSTOMER SUPPORT
          </p>
          <h1 className="mt-4 text-[42px] md:text-[64px] font-black leading-[1.1] tracking-tight text-white drop-shadow-2xl max-w-4xl uppercase">
            CUSTOMER SUPPORT &<br />
            <span className="text-[#01fa6d]">SERVICE ASSISTANCE.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-[1.1rem] font-bold text-white/90 md:text-[1.3rem]">
            Questions, concerns, or property damage? Our Calgary team is here to help. The more detail you provide, the faster we can resolve your request.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://clienthub.getjobber.com/client_hubs/41b3399e-3795-43d8-afe2-e6c38c1b3e6e/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#017a6d] px-12 py-[14px] text-[16px] font-extrabold text-white border-2 border-white/10 hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              CLIENT PORTAL
            </a>
            <a
              href="tel:4038913252"
              className="inline-flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm px-12 py-[14px] text-[16px] font-extrabold text-white border-2 border-white/40 hover:bg-white/20 transition-colors whitespace-nowrap"
            >
              CALL NOW
            </a>
          </div>

          {/* QUICK ROUTING CARDS */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-lg border border-black/10 bg-white p-[14px]">
              <h3 className="font-black text-[16px] text-black uppercase">SERVICE QUESTIONS</h3>
              <p className="mt-1.5 text-[14px] text-black/70 leading-relaxed">
                Scheduling, what’s included, billing, or general inquiries about our landscaping and snow services.
              </p>
            </div>
            <div className="rounded-lg border border-black/10 bg-white p-[14px]">
              <h3 className="font-black text-[16px] text-black uppercase">CONCERNS OR COMPLAINTS</h3>
              <p className="mt-1.5 text-[14px] text-black/70 leading-relaxed">
                If something didn’t meet expectations, tell us—we will make it right for you and your property.
              </p>
            </div>
            <div className="rounded-lg border border-black/10 bg-white p-[14px]">
              <h3 className="font-black text-[16px] text-black uppercase">PROPERTY DAMAGE</h3>
              <p className="mt-1.5 text-[14px] text-black/70 leading-relaxed">
                Report damage with photos + details so we can investigate and resolve it as fast as possible.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ABOUT US SECTION (TAILORED FOR SUPPORT) */}
      <Section
        kicker="Standing Behind Our Work"
        title="OUR COMMITMENT TO ACCOUNTABILITY"
        titleClassName="text-[#017a6d] uppercase"
        py="pt-12 md:pt-16 pb-24"
      >
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-12">
          <div className="lg:w-1/2 space-y-6 text-[18px] text-black/80 leading-relaxed font-medium">
            <p>
              TERREOAK is built on a foundation of professional accountability and structured systems. We understand that property maintenance and landscape construction require more than just technical skill—they require a partner who stands behind their work 365 days a year.
            </p>
            <p>
              Whether we are managing your commercial grounds or installing a new residential hardscape, our commitment to you doesn&apos;t end when the project is complete. We believe in clear communication, rapid response times, and resolving every concern with professional integrity.
            </p>
            <p>
              If something isn&apos;t right, or if you simply have a question about your service, our Calgary-based support team is here to ensure your property receives the care it deserves.
            </p>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl border border-black/5 ring-1 ring-black/5">
              <Image
                src="/Calgary-landscape-design-build-patio.JPG"
                alt="TerreOak high-end landscape project in Calgary"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* DESIGN • BUILD • MAINTAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-black/5 pt-12">
          {/* DESIGN */}
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-16 h-16 text-[#017a6d]">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="6" width="32" height="36" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M14 14H34M14 22H24M14 30H34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M30 22L40 12L42 14L32 24L30 22Z" fill="currentColor" />
                <path d="M39 11L43 15" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-black mb-2 uppercase tracking-tight">Design</h3>
              <p className="text-[15px] text-black/60 leading-relaxed font-medium">
                Custom residential build plans and 3D visualizations tailored to your property&apos;s potential and Calgary&apos;s unique landscape.
              </p>
            </div>
          </div>

          {/* BUILD */}
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-16 h-16 text-[#017a6d]">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 32H32V24H12V32Z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M10 32H34V38H10V32Z" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M14 24L18 14H30L32 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M32 22L42 22V32L38 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M42 32L44 34L40 38H36L38 32" fill="currentColor" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-black mb-2 uppercase tracking-tight">Build</h3>
              <p className="text-[15px] text-black/60 leading-relaxed font-medium">
                Expert construction of hardscapes, retaining walls, and softscapes using climate-ready materials designed for Alberta&apos;s seasons.
              </p>
            </div>
          </div>

          {/* MAINTAIN */}
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-16 h-16 text-[#017a6d]">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 8V24M24 24L16 16M24 24L32 16M24 14L20 10M24 14L28 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M12 24H24M24 24L16 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
                <path d="M24 24L34 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M24 24L30 36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M24 24L38 34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M8 42H40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-black mb-2 uppercase tracking-tight">Maintain</h3>
              <p className="text-[15px] text-black/60 leading-relaxed font-medium">
                Disciplined year-round property care, from precision grounds maintenance to reliable 24/7 priority snow removal.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CLIENT PORTAL BANNER */}
      <section className="bg-[#2c2d32] py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-[#017a6d] rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden group">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 transition-transform duration-700 group-hover:scale-110" />

            <div className="relative z-10 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight leading-tight">
                ACCESS YOUR <span className="text-[#01fa6d]">CLIENT PORTAL</span>
              </h2>
              <p className="text-white/80 text-lg font-medium max-w-xl">
                View your quotes, pay invoices, and manage your property services 24/7 through our secure Jobber portal.
              </p>
            </div>

            <div className="relative z-10 flex-shrink-0">
              <a
                href="https://clienthub.getjobber.com/client_hubs/41b3399e-3795-43d8-afe2-e6c38c1b3e6e/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white px-10 py-5 text-[18px] font-black text-[#017a6d] hover:bg-gray-100 transition-all shadow-xl hover:-translate-y-1"
              >
                LOGIN TO PORTAL
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-[#017a6d] text-center text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase">NEED IMMEDIATE ASSISTANCE?</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12 font-bold italic">
            Our team is dedicated to professional accountability. If you have any concerns, we are here to make it right.
          </p>
          <a
            href="tel:4038913252"
            className="inline-flex items-center justify-center rounded-full bg-white px-12 py-[16px] text-[18px] font-black text-[#017a6d] hover:bg-gray-100 transition-all shadow-2xl hover:-translate-y-1"
          >
            CALL (403) 891-3252
          </a>
        </div>
      </section>

      {/* FAQ */}
      <Section
        kicker="Quick Answers"
        title="FREQUENTLY ASKED QUESTIONS"
        titleClassName="text-[#017a6d]"
        wrapperClassName="bg-gray-50"
      >
        <div className="mt-12 max-w-4xl mx-auto space-y-4">
          {[
            { q: "How fast do you respond?", a: "We aim to reply quickly during business hours. Damage reports get priority once we have all the required photos and details." },
            { q: "What should I include for a damage report?", a: "Address, service date/time window, clear photos (both wide and close-up), and a description of what was damaged." },
            { q: "Is this for both landscaping and snow?", a: "Yes—this support page covers all TERREOAK services across landscaping construction, maintenance, and seasonal snow removal." }
          ].map((faq, i) => (
            <details key={i} className="group bg-white rounded-xl border border-black/5 overflow-hidden shadow-sm">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-black text-lg hover:bg-gray-50 transition-colors">
                {faq.q}
                <span className="w-8 h-8 rounded-full bg-[#017a6d]/5 flex items-center justify-center group-open:rotate-45 transition-transform text-[#017a6d]">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </summary>
              <div className="p-6 pt-0 text-black/60 leading-relaxed border-t border-black/5 bg-gray-50/30">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </Section>
    </main>
  );
}
