"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Section, ScrollReveal, Carousel } from "../components/UI";

import OurBlogSection from "../components/OurBlogSection";
import StatsCounter from "./StatsCounter";
import GoogleReviewBadge from "../components/GoogleReviewBadge";
import dynamic from "next/dynamic";

const JobberLeadForm = dynamic(() => import("../components/JobberLeadForm"), {
  loading: () => <div className="w-full h-[600px] animate-pulse bg-gray-50 rounded-3xl" />,
  ssr: false
});

const SnowflakeSVG = ({ size = 24, strokeWidth = 2, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth={strokeWidth} 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <line x1="2" y1="12" x2="22" y2="12" />
    <line x1="12" y1="2" x2="12" y2="22" />
    <path d="m20 16-4-4 4-4" />
    <path d="m4 8 4 4-4 4" />
    <path d="m16 4-4 4-4-4" />
    <path d="m8 20 4-4 4 4" />
  </svg>
);


export default function ResidentialSnowBlowingPage() {
  const [isCtaVisible, setIsCtaVisible] = useState(false);
  const [isAfterOnTop, setIsAfterOnTop] = useState(false);
  const [snowFillHeight, setSnowFillHeight] = useState("0%");

  useEffect(() => {
    const timer = setTimeout(() => setSnowFillHeight("72%"), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsCtaVisible(true);
      } else {
        setIsCtaVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToForm = () => {
    const formElement = document.getElementById('seasonal-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center border-b border-black/10 overflow-hidden bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/Calgary-snowremoval-drone.mov" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-32 pb-12 md:pt-56 md:pb-24 lg:pt-60 lg:pb-32 text-left">
          <p className="text-[14px] font-bold tracking-widest text-[#01fa6d] uppercase drop-shadow-md">
            Calgary • Residential Snow Removal
          </p>
          <h1 className="mt-2 text-[32px] md:text-[56px] lg:text-[64px] font-black leading-[1.1] tracking-tight text-white drop-shadow-2xl max-w-4xl uppercase">
            CALGARY RESIDENTIAL<br />
            SNOW REMOVAL —<br />
            <span className="text-[#01fa6d]">Worry-free all winter.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-[1rem] font-bold text-white/90 md:text-[1.3rem]">
            Unlimited driveway + front sidewalk clearing all season long, with photo logs,
            dispatch alerts, and 12–24 hour service after snowfall ends.{" "}
            <span style={{ opacity: 0.85 }}>
              Built for reliability, not excuses.
            </span>
          </p>

          <div className="mt-6 flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleScrollToForm}
                className="inline-flex items-center justify-center rounded-full bg-[#01fa6d] px-8 md:px-12 py-[16px] text-[16px] font-extrabold text-black border-2 border-white/10 hover:opacity-90 transition-all cursor-pointer shadow-xl shadow-[#01fa6d]/20 hover:-translate-y-1"
              >
                SIGN UP
              </button>
              <a
                href="tel:+15877077648"
                className="inline-flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm px-8 md:px-12 py-[14px] text-[16px] font-extrabold text-white border-2 border-white/40 hover:bg-white/20 transition-colors"
              >
                CALL NOW
              </a>
            </div>

            <GoogleReviewBadge />
          </div>
        </div>
      </section>

      {/* STATS COUNTER */}
      <StatsCounter stats={[
        { end: 100, label: "Total Properties Managed", suffix: "+" },
        { end: 92, label: "Happy Clients", suffix: "+" },



        { end: 2, label: "TERREOAK Crews" },
      ]} />

      <section style={styles.offerSection}>
        <div style={styles.inner} className="text-left">
          <h2 style={{ ...styles.h2, color: "#fff" }} className="w-full">WHAT WE OFFER</h2>
          <p style={{ ...styles.p, color: "rgba(255,255,255,0.8)" }}>
            Reliable, professional snow management tailored for Calgary homeowners.
          </p>

          <div style={styles.cards3}>
            {[
              {
                title: "Full Season Coverage",
                desc: "One flat monthly rate covers unlimited driveway and front sidewalk clearing from the first snowfall through the final melt — no per-visit fees, no surprises."
              },
              {
                title: "1cm Trigger",
                desc: "We dispatch as soon as accumulation hits 1cm. You won’t wake up to a buried driveway waiting for a contractor who services “major storms only.”"
              },
              {
                title: "Photo Service Log",
                desc: "After every visit, you receive time-stamped photos by email confirming exactly what was cleared and when. Perfect for renters, property owners, or anyone who needs documentation."
              },
              {
                title: "Dispatch Alerts",
                desc: "Email notifications sent before our crew arrives so you always know service is on the way — no guessing, no wondering."
              },
              {
                title: "Driveway Markers",
                desc: "We install free snow pickets before the season starts so our crews can clear right to the edges without damaging your lawn, garden beds, or interlock."
              },
              {
                title: "Flexible Payment",
                desc: "Pay in full upfront and save 10%, or split into 5 monthly auto-payments — whichever works for your budget."
              }
            ].map((offer, i) => (
              <div key={i} style={styles.offerCard}>
                <h3 style={styles.offerTitle}>{offer.title}</h3>
                <p style={styles.offerDesc}>{offer.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUILT FOR WINTER SECTION */}
      <section style={styles.sectionAlt} className="section-divider">
        <div style={styles.inner}>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div style={{ flex: 1, maxWidth: 800 }}>
              <div className="flex justify-between items-start gap-4">
                <h2 style={{ ...styles.h2, fontSize: 36, lineHeight: 1.2, color: "#017a6d" }} className="flex-1">
                  RESIDENTIAL SNOW REMOVAL IN CALGARY THAT&apos;S BUILT FOR WINTER.
                </h2>
                <div className="md:hidden flex-shrink-0 w-24 animate-pulse-slow pt-2">
                  <Image
                    src="/Snow Page web pics/TERREOAK-Snow-Picket.JPG"
                    alt="TERREOAK Snow Picket"
                    width={100}
                    height={100}
                    sizes="100px"
                    className="w-full h-auto drop-shadow-lg rounded-2xl"
                  />
                </div>
              </div>
              <p style={{ ...styles.p, fontSize: 18, marginTop: 24, color: "#333" }}>
                TERREOAK provides residential snow removal for Calgary homeowners who want a reliable, hands-off solution for the entire winter season. No wondering if your driveway got done — just consistent service, dispatch alerts before we arrive, and a photo log in your inbox after every visit.
              </p>
              <p style={{ ...styles.p, fontSize: 18, marginTop: 16, color: "#333" }}>
                We service driveways and front sidewalks at just 1cm of accumulation, so your property stays clear and safe through every storm Calgary throws at it. Our route-based crews cover communities across SW, SE, Calgary — with capacity capped each season so service quality never slips.
              </p>
              <p style={{ ...styles.p, fontSize: 18, marginTop: 16, color: "#333", fontWeight: 900 }}>
                Spots fill up before the first snowfall. Reserve your season pass early to lock in your route and your rate.
              </p>
              <div style={{ marginTop: 32 }}>
                <button
                  onClick={handleScrollToForm}
                  className="inline-flex items-center justify-center rounded-lg bg-[#01fa6d] px-10 py-4 text-sm font-black text-black hover:opacity-90 transition-all transform hover:-translate-y-1 shadow-lg cursor-pointer"
                >
                  RESERVE SEASON PASS
                </button>
              </div>
            </div>
            <div className="hidden md:block flex-shrink-0 w-64 md:w-96 animate-pulse-slow">
              <Image
                src="/Snow Page web pics/TERREOAK-Snow-Picket.JPG"
                alt="TERREOAK Snow Picket"
                width={400}
                height={400}
                className="w-full h-auto drop-shadow-2xl grayscale-[0.2] hover:grayscale-0 transition-all duration-500 rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SNOW TRACKER SECTION */}
      <section className="bg-[#2c2d32] py-12 border-b border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Visual Snowflake Tracker */}
            <ScrollReveal className="bg-black/40 rounded-3xl p-8 border border-white/10 flex flex-col items-center">
              <p className="text-[#01fa6d] text-[12px] font-black uppercase tracking-[0.2em] mb-6">Seasonal Progress</p>
              <div className="relative w-40 h-40 flex items-center justify-center">
                {/* Background Snowflake (Empty) */}
                <SnowflakeSVG size={140} strokeWidth={1} className="text-white/10" />
                
                {/* Filled Snowflake (Overlay) */}
                <div 
                  className="absolute inset-x-0 bottom-0 overflow-hidden flex items-end justify-center transition-all duration-[2500ms] ease-out" 
                  style={{ height: snowFillHeight }}
                >
                  <SnowflakeSVG size={140} strokeWidth={2} className="text-[#01fa6d] mb-0" />
                </div>

                {/* CM Multiplier Label */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pt-2">
                  <span className="text-4xl font-black text-white leading-none drop-shadow-lg">142</span>
                  <span className="text-[11px] font-black text-[#01fa6d] uppercase tracking-[0.2em] mt-1 bg-black/50 px-2 py-0.5 rounded">CM Total</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Stats Breakdown */}
            <ScrollReveal className="md:col-span-2 space-y-6">
              <div>
                <h2 className="text-4xl font-black text-white uppercase tracking-tight leading-tight">
                  2025-2026 <br />
                  <span className="text-[#01fa6d]">SNOW TRACKER.</span>
                </h2>
                <p className="text-white/60 font-medium mt-2 max-w-xl text-lg">
                  We track every centimeter so you don&apos;t have to. Our crews trigger at just 1cm of accumulation, ensuring your driveway is clear before the ice builds up.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Season Avg", val: "129cm" },
                  { label: "Current Total", val: "142cm", highlight: true },
                  { label: "Last Snowfall", val: "12cm" },
                  { label: "Visits to Date", val: "38" }
                ].map((stat, i) => (
                  <div key={i} className={`p-4 rounded-2xl border ${stat.highlight ? 'bg-[#01fa6d] border-[#01fa6d]' : 'bg-white/5 border-white/10'}`}>
                    <p className={`text-[10px] font-black uppercase tracking-widest ${stat.highlight ? 'text-black' : 'text-white/40'}`}>{stat.label}</p>
                    <p className={`text-xl font-black mt-1 ${stat.highlight ? 'text-black' : 'text-white'}`}>{stat.val}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SERVICE AREA SECTION */}
      <Section
        kicker="Service Area"
        title="OUR CALGARY SERVICE ZONES"
        titleClassName="text-black !text-[30.6px] uppercase"
        wrapperClassName="bg-white"
        hasBorder={true}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-8">
          <ScrollReveal>
            <div className="space-y-6">
              <p className="text-[20px] text-black/80 leading-relaxed font-bold uppercase tracking-tight">
                High-density routes for maximum reliability.
              </p>
              <p className="text-[17px] text-black/70 leading-relaxed">
                We use a tiered zone system to guarantee our 24-hour service standard. <strong>Zone 1</strong> is our core service area, where our crews are consistently active during every storm.
              </p>
              
              <div className="space-y-6 pt-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#01fa6d] flex-shrink-0 flex items-center justify-center font-black text-black">1</div>
                  <div>
                    <h4 className="text-[#017a6d] font-black uppercase tracking-wider text-sm">Zone 1: Southeast Calgary</h4>
                    <p className="text-sm text-black/60 mt-1">Auburn Bay, Mahogany, Cranston, Copperfield, McKenzie Towne, Legacy, and Walden.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#01fa6d]/80 flex-shrink-0 flex items-center justify-center font-black text-black">2</div>
                  <div>
                    <h4 className="text-[#017a6d] font-black uppercase tracking-wider text-sm">Zone 2: Southwest Calgary</h4>
                    <p className="text-sm text-black/60 mt-1">Evergreen, Shawnessy, Silverado, Chaparral, Bridlewood, and Somerset.</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-black/5">
                <p className="text-[16px] text-[#017a6d] font-bold">
                  Outside these areas? <a href="tel:+15877077648" className="underline underline-offset-4 decoration-2">Call for availability</a>
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="relative group/map">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-100 bg-white">
              {/* Base Map Image */}
              <Image
                src="/calgary-base-map.png"
                alt="Interactive Calgary Service Zones"
                fill
                className="object-cover transition-transform duration-700 group-hover/map:scale-[1.02]"
              />
              
              {/* Interactive SVG Zones Overlay */}
              <div className="absolute inset-0 z-10 pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-full h-full transition-all duration-700">
                  {/* SW Zone Shape - Hugging Ring Road */}
                  <path 
                    d="M 50,55 L 12,55 Q 5,75 15,85 Q 25,92 50,92 Z" 
                    fill="#01fa6d" fillOpacity="0.45" 
                    stroke="#01fa6d" strokeWidth="0.5" 
                    className="transition-all hover:fill-opacity-60"
                  />
                  
                  {/* SE Zone Shape - Hugging Ring Road */}
                  <path 
                    d="M 50,55 L 88,55 Q 95,75 85,85 Q 75,92 50,92 Z" 
                    fill="#01fa6d" fillOpacity="0.45" 
                    stroke="#01fa6d" strokeWidth="0.5" 
                    className="transition-all hover:fill-opacity-60"
                  />
                  
                  {/* Zone Labels - Solid Black Pills */}
                  <g className="font-black text-[3.5px] uppercase tracking-tighter">
                    {/* SW Label (Zone 2) */}
                    <rect x="18" y="70" width="24" height="6" rx="3" fill="#01fa6d" />
                    <text x="30" y="74.2" textAnchor="middle" fill="black">SERVICE ZONE 2: SW</text>
                    
                    {/* SE Label (Zone 1) */}
                    <rect x="58" y="70" width="24" height="6" rx="3" fill="#01fa6d" />
                    <text x="70" y="74.2" textAnchor="middle" fill="black">SERVICE ZONE 1: SE</text>

                    {/* Boundary Marker */}
                    <line x1="50" y1="55" x2="50" y2="92" stroke="black" strokeWidth="0.2" strokeDasharray="1,1" opacity="0.3" />
                  </g>
                </svg>
              </div>

              {/* Legend Overlay on Map */}
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="flex justify-between items-end">
                  <div className="bg-black text-white px-5 py-3 rounded-2xl border border-white/10 shadow-2xl">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 rounded-full bg-[#01fa6d] animate-pulse" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#01fa6d]">Active Service Area</span>
                    </div>
                    <p className="text-[11px] font-bold text-white/90 italic">South Calgary Ring-Road Priority</p>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 pointer-events-none" />
            </div>
          </ScrollReveal>
        </div>
      </Section>

      <Section
        kicker="Our Process"
        kickerClassName="text-white/60"
        title="HOW IT WORKS"
        titleClassName="text-white !text-[30.6px] uppercase"
        wrapperClassName="bg-[#2c2d32]"
        hasBorder={false}
      >
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3 mt-12">
          {[
            { step: "01", title: "Sign up for snow pass", desc: "Lock in your spot for the season." },
            { step: "02", title: "We install your picket", desc: "Professional driveway markers for precision clearing." },
            { step: "03", title: "Our team gets to work", desc: "Reliable service whenever it snows." }
          ].map((p, i) => (
            <ScrollReveal key={i} className="group relative">
              <div className="h-full bg-[#017a6d] p-8 rounded-2xl flex flex-col justify-center min-h-[160px] border border-white/5 shadow-xl hover:bg-[#01645a] transition-all transform hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center font-black text-sm shrink-0">
                    {p.step}
                  </div>
                  <h3 className="text-[21.6px] font-black text-white leading-tight">{p.title}</h3>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* GUARANTEES */}
      <Section title="OUR GUARANTEES" titleClassName="text-[#017a6d] !text-[30.6px] uppercase">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 border-t border-black/5 pt-12">
          {/* Money-Back Guarantee */}
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-16 h-16 text-[#017a6d]">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 4L6 12V24C6 34.5 13.5 44 24 47C34.5 44 42 34.5 42 24V12L24 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <text x="24" y="31" fontSize="18" fontWeight="900" textAnchor="middle" fill="currentColor" fontFamily="Arial">$</text>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-black mb-2 uppercase tracking-tight">First-Service Money-Back Guarantee</h3>
              <p className="text-[15px] text-black/60 leading-relaxed font-medium">
                Not happy after your first visit? We refund you in full — no questions, no fine print. We’re confident enough in our service to put that in writing because we’ve never had to use it.
              </p>
            </div>
          </div>

          {/* 24-Hour Service Guarantee */}
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-16 h-16 text-[#017a6d]">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.5" />
                <text x="24" y="29" fontSize="10" fontWeight="900" textAnchor="middle" fill="currentColor" fontFamily="Arial">24H</text>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-black mb-2 uppercase tracking-tight">24-Hour Service Guarantee</h3>
              <p className="text-[15px] text-black/60 leading-relaxed font-medium">
                We clear your property within 24 hours of snowfall ending. If we miss that window for any reason, we send a crew back at no charge. Calgary’s snow removal bylaw gives property owners 24 hours to clear sidewalks — we make sure you’re covered.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <section style={styles.beforeAfterSection} className="section-divider">
        <div style={styles.inner}>
          <div className="text-center mb-12">
            <h2 style={styles.h2}>THE TERREOAK RESULTS</h2>
          </div>

          <div
            className="mt-12"
          >
            {/* Desktop View: Side-by-Side */}
            <div className="hidden md:grid md:grid-cols-2 gap-8 items-start">
              <div className="relative">
                <img
                  src="/snow-removal-okotoks-before.JPG"
                  alt="Snow removal Okotoks before clearing"
                  className="rounded-2xl shadow-2xl w-full h-auto border-4 border-white"
                />
                <div style={{ ...styles.label, bottom: "auto", top: "20px", left: "20px", right: "auto" }} className="!bg-red-600">BEFORE</div>
              </div>
              <div className="relative">
                <img
                  src="/snow-removal-okotoks-after.JPG"
                  alt="Snow removal Okotoks after clearing"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
                <div style={styles.label}>AFTER</div>
              </div>
            </div>

            {/* Mobile View: Original Stacked/Interactive */}
            <div
              style={styles.photoContainer}
              className="relative max-w-4xl mx-auto h-[400px] cursor-pointer md:hidden"
              onClick={() => setIsAfterOnTop(!isAfterOnTop)}
            >
              {/* After Photo */}
              <div style={{
                ...styles.photoBase,
                ...styles.photoAfter,
                zIndex: isAfterOnTop ? 15 : 5,
                transform: isAfterOnTop ? "rotate(0deg) scale(1.02)" : "rotate(2deg) scale(1)",
                boxShadow: isAfterOnTop ? "0 30px 60px -12px rgba(0,0,0,0.3)" : "0 20px 40px -12px rgba(0,0,0,0.2)"
              }} className="w-[85%] absolute right-0 bottom-4">
                <img
                  src="/snow-removal-okotoks-after.JPG"
                  alt="Snow removal Okotoks after clearing"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
                <div style={styles.label}>AFTER</div>
              </div>

              {/* Before Photo */}
              <div style={{
                ...styles.photoBase,
                ...styles.photoBefore,
                zIndex: isAfterOnTop ? 5 : 15,
                transform: isAfterOnTop ? "rotate(-8deg) scale(0.95)" : "rotate(-4deg) scale(1.02)",
                boxShadow: isAfterOnTop ? "0 10px 20px -12px rgba(0,0,0,0.2)" : "0 30px 60px -12px rgba(0,0,0,0.3)"
              }} className="w-[85%] absolute left-0 top-4">
                <img
                  src="/snow-removal-okotoks-before.JPG"
                  alt="Snow removal Okotoks before clearing"
                  className="rounded-2xl shadow-2xl w-full h-auto border-4 border-white"
                />
                <div style={{ ...styles.label, bottom: "auto", top: "20px", left: "20px", right: "auto" }} className="!bg-red-600">BEFORE</div>
              </div>
            </div>
          </div>
          <p className="text-center mt-8 text-black/40 font-bold text-sm md:hidden">TAP PHOTOS TO SWITCH</p>

        </div>
      </section>







      {/* JOBBER LEAD FORM */}
      <Section id="seasonal-form" title="SIGN UP FOR YOUR SEASON PASS" titleClassName="text-[#01fa6d]">
        <div className="max-w-6xl mx-auto w-full">
          <JobberLeadForm
            clienthubId="41b3399e-3795-43d8-afe2-e6c38c1b3e6e-2232203"
            formUrl="https://clienthub.getjobber.com/client_hubs/41b3399e-3795-43d8-afe2-e6c38c1b3e6e/public/work_request/embedded_work_request_form?form_id=2232203"
          />
        </div>
      </Section>

      {/* RECENT PROJECTS (Gallery) */}
      <Section kicker="Portfolio" title="Our Recent Work" titleClassName="text-[#017a6d]" wrapperClassName="bg-white">
        <Carousel className="mt-12">
          {[
            { src: "/Snow Page web pics/Ice-removal-after.JPG", alt: "Ice Removal After" },
            { src: "/Snow Page web pics/Ice-removal-before.JPG", alt: "Ice Removal Before" },
            { src: "/Snow Page web pics/Residential-snow-removal.JPG", alt: "Residential Snow Removal" },
            { src: "/Snow Page web pics/South-Calgary-Snow-Removal.JPG", alt: "South Calgary Snow Removal" },
            { src: "/Snow Page web pics/TERREOAK-Snow-Picket.JPG", alt: "TERREOAK Snow Picket" },
            { src: "/snow-removal-okotoks-after.JPG", alt: "Snow Removal Okotoks After" },
            { src: "/snow-removal-okotoks-before.JPG", alt: "Snow Removal Okotoks Before" },
            { src: "/residential-snow-removalJPG.JPG", alt: "Residential Snow Removal Calgary" },
          ].map((photo, i) => (
            <div key={i} className="min-w-[85vw] md:min-w-[400px] px-3 snap-center">
              <ScrollReveal className="relative aspect-[4/3] rounded-lg overflow-hidden group border border-black/5 shadow-md">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 85vw, 400px"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              </ScrollReveal>
            </div>
          ))}
        </Carousel>
        <div className="mt-12 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center rounded-lg border-2 border-[#017a6d] px-8 py-3 text-sm font-bold text-[#017a6d] hover:bg-[#017a6d] hover:text-white transition-all shadow-md hover:-translate-y-1"
          >
            VIEW FULL PORTFOLIO
          </Link>
        </div>
      </Section>

      {/* FAQ */}
      <section style={styles.sectionAlt} className="section-divider">
        <div style={styles.inner}>
          <h2 style={styles.h2}>FAQS</h2>

          <div style={styles.faq}>
            <details style={styles.details}>
              <summary style={styles.summary}>What counts as a qualifying snowfall?</summary>
              <p style={styles.pSmall}>
                Any snowfall event that results in 1cm or more of accumulation at your property. We monitor weather across all our service areas and dispatch crews proactively — you don’t need to call us or submit a request.
              </p>
            </details>

            <details style={styles.details}>
              <summary style={styles.summary}>Do you clear windrows left by the city plow?</summary>
              <p style={styles.pSmall}>
                Windrows from city plows pushing snow back onto your driveway apron are not included in the standard season pass. If you’d like windrow clearing added, ask us about a custom pass when you sign up.
              </p>
            </details>

            <details style={styles.details}>
              <summary style={styles.summary}>How does the Photo Service Log work?</summary>
              <p style={styles.pSmall}>
                After every single visit, our crew submits time-stamped before-and-after photos through our service software. These are emailed directly to you, giving you a complete record of every service event throughout the winter. It’s especially useful for rental property owners or anyone who isn’t always home to check.
              </p>
            </details>

            <details style={styles.details}>
              <summary style={styles.summary}>Is ice melt included?</summary>
              <p style={styles.pSmall}>
                Ice melt is available as a monthly add-on subscription and is not included in the base season pass. The add-on covers automatic ice melt application after each visit, up to 4 visits per month, keeping walkways and driveways safe between snowfalls.
              </p>
            </details>

            <details style={styles.details}>
              <summary style={styles.summary}>Do you offer one-time snow removal?</summary>
              <p style={styles.pSmall}>
                We don’t offer one-time services. TERREOAK runs a route-based season pass model, which means our crews follow established neighbourhood routes each storm. This is what allows us to guarantee consistent 24-hour service — one-off calls would break that system for everyone on the route.
              </p>
            </details>

            <details style={styles.details}>
              <summary style={styles.summary}>What if I’m away for part of the winter?</summary>
              <p style={styles.pSmall}>
                We offer Snowbird and vacation passes for homeowners who only need coverage for a portion of the season. These short-term passes run from 1 to 8 weeks and include the same priority service and photo logs as a full season pass.
              </p>
            </details>
          </div>

          <div style={{ marginTop: 22 }}>
            <Link href="/customer-support" style={styles.secondaryBtn}>CUSTOMER SUPPORT</Link>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <OurBlogSection />

      {isCtaVisible && (
        <div style={styles.stickyCtaContainer} className="stickyCtaWrapper animate-float-up">
          <button
            onClick={handleScrollToForm}
            style={styles.stickyCtaLink}
            className="cursor-pointer"
          >
            SIGN UP!
          </button>

          <button
            onClick={() => setIsCtaVisible(false)}
            style={styles.closeSticky}
            aria-label="Close"
          >
            ✕
          </button>
        </div>
      )}
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  hero: {
    position: "relative",
    overflow: "hidden",
    background: "#000",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    minHeight: "100vh",
  },
  videoBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 0,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.4)",
    zIndex: 1,
  },
  heroInner: { position: "relative", zIndex: 2, maxWidth: 1152, margin: "0 auto", paddingLeft: "24px", paddingRight: "24px", color: "#fff" },
  kicker: { margin: 0, fontWeight: 700, fontSize: "14px", color: "rgba(255,255,255,0.7)", letterSpacing: "0.1em", textTransform: "uppercase" },
  h1: { margin: "16px 0 0", fontSize: "48px", lineHeight: 1.05, fontWeight: 900, color: "#fff", letterSpacing: "-0.02em" },
  subhead: { marginTop: 24, maxWidth: 820, fontSize: "1.2rem", lineHeight: 1.5, color: "rgba(255,255,255,0.85)", fontWeight: 700 },
  ctaRow: { marginTop: 22, display: "flex", gap: 12, flexWrap: "wrap" },
  primaryBtn: {
    background: "#22c55e", // green-500
    color: "#fff",
    padding: "12px 18px",
    borderRadius: 8, // matched to homepage 'rounded'
    fontWeight: 700,
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  },
  secondaryBtn: {
    border: "2px solid rgba(0,0,0,0.2)",
    color: "#000",
    padding: "12px 18px",
    borderRadius: 8,
    fontWeight: 700,
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    background: "transparent",
  },
  stickyCtaContainer: {
    position: "fixed",
    bottom: "24px",
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    background: "#01fa6d",
    borderRadius: "999px",
    padding: "4px",
    boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
    width: "fit-content",
    left: 0,
    right: 0,
    margin: "0 auto",
  },
  stickyCtaLink: {
    color: "#000000",
    padding: "12px 32px",
    fontWeight: 800,
    fontSize: "18px",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    whiteSpace: "nowrap",
  },
  closeSticky: {
    background: "#01fa6d", // Light green from site primary green
    color: "#000000",
    border: "none",
    borderRadius: "50%",
    width: "32px",
    height: "32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: 900,
    marginRight: "4px",
  },
  trustGrid: { marginTop: 26, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12 },
  trustCard: { border: "1px solid rgba(0,0,0,0.10)", borderRadius: 8, padding: 14, background: "#f9fafb" }, // gray-50
  trustTitle: { fontWeight: 900, color: "#000", fontSize: 21.6 },
  trustText: { marginTop: 6, color: "rgba(0,0,0,0.7)", fontSize: 14, lineHeight: 1.4 },

  section: { padding: "56px 0", background: "#fff", color: "#000" },
  sectionAlt: { padding: "56px 0", background: "#f9fafb", color: "#000" }, // gray-50
  final: { padding: "66px 0", background: "#f9fafb", color: "#000", borderTop: "1px solid rgba(0,0,0,0.08)" },

  inner: { maxWidth: 1200, margin: "0 auto", padding: "0 20px" },
  h2: { margin: 0, fontSize: 30.6, fontWeight: 900, color: "#000" },
  h3: { margin: 0, fontSize: 21.6, fontWeight: 900, color: "#000" },
  p: { marginTop: 10, maxWidth: 880, color: "rgba(0,0,0,0.7)", lineHeight: 1.6 },
  pSmall: { marginTop: 10, color: "rgba(0,0,0,0.7)", lineHeight: 1.55, fontSize: 12.6 },

  grid2: { marginTop: 18, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16 },
  bullets: { margin: 0, paddingLeft: 18, color: "rgba(0,0,0,0.7)", lineHeight: 1.8 },

  cards3: { marginTop: 18, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14 },
  cards2: { marginTop: 18, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 14 },
  card: { border: "1px solid rgba(0,0,0,0.10)", borderRadius: 8, padding: 16, background: "#fff" },

  offerCard: { background: "#019587", borderRadius: 12, padding: "28px 24px", display: "flex", flexDirection: "column" as const, alignItems: "flex-start", justifyContent: "flex-start", minHeight: "180px", border: "none" },
  offerTitle: { margin: 0, fontSize: 21.6, fontWeight: 900, color: "#fff", textAlign: "left" as const },
  offerDesc: { marginTop: 12, fontSize: 15, color: "rgba(255,255,255,0.9)", lineHeight: 1.5, fontWeight: 500 },

  ctaBox: {
    border: "1px solid rgba(0,0,0,0.10)",
    borderRadius: 8,
    padding: 18,
    background: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 14,
    flexWrap: "wrap",
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  },
  formShell: {
    marginTop: 14,
    border: "1px dashed rgba(0,0,0,0.18)",
    borderRadius: 8,
    padding: 16,
    background: "#fff",
  },

  faq: { marginTop: 18, display: "grid", gap: 10 },
  details: { border: "1px solid rgba(0,0,0,0.10)", borderRadius: 8, padding: "10px 14px", background: "#fff" },
  summary: { cursor: "pointer", fontWeight: 900, color: "#000" },

  beforeAfterSection: {
    padding: "100px 0",
    background: "#fdfdfd",
    overflow: "hidden",
  },
  photoContainer: {
    position: "relative",
    marginTop: "40px",
  },
  photoBase: {
    transition: "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  },
  photoBefore: {
    zIndex: 10,
    transform: "rotate(-4deg) scale(1.02)",
    boxShadow: "0 30px 60px -12px rgba(0,0,0,0.3)",
  },
  photoAfter: {
    zIndex: 5,
    transform: "rotate(2deg)",
    boxShadow: "0 20px 40px -12px rgba(0,0,0,0.2)",
  },
  label: {
    position: "absolute",
    bottom: "20px",
    right: "20px",
    background: "rgba(1, 122, 109, 0.95)",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "8px",
    fontWeight: 900,
    fontSize: "14px",
    letterSpacing: "0.05em",
    backdropFilter: "blur(4px)",
    zIndex: 20,
  }
};
