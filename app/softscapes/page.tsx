"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Section, ScrollReveal } from "../components/UI";
import GoogleReviewBadge from "../components/GoogleReviewBadge";
import OurBlogSection from "../components/OurBlogSection";
import JobberLeadForm from "../components/JobberLeadForm";
import TrustBar from "../components/TrustBar";
import TestimonialSection from "../components/TestimonialSection";
import PremiumHero from "../components/PremiumHero";
// SodUnrollTransition removed

export default function SoftscapesPage() {
  const [isCtaVisible, setIsCtaVisible] = useState(false);

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

  return (
    <main className="bg-white text-black">
      <PremiumHero
        title={<>CALGARY<br />SOFTSCAPE INSTALLATION<br /><span className="text-[#01fa6d]">Lush & Vibrant Spaces.</span></>}
        description="Transform your outdoor space with premium, Zone-4 hardy softscaping built specifically for Calgary's climate. From expert garden bed design and robust tree planting to complete yard grading and sod installation, we handle all the living elements of your landscape to dramatically boost your curb appeal and property value."
        backgroundImage="/Landscape web page pics/Sod-installation-calgary.jpg"
        badgeLabel="Landscaping • Calgary"
        ctaText="REQUEST QUOTE"
        ctaHref="/landscape-installs"
      />
      
      <TrustBar />

      {/* CONTENT */}
      <Section title="Living Landscapes" titleClassName="text-[#017a6d]">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center mb-12">
          
          {/* TEXT */}
          <div className="w-full lg:w-1/2 text-lg text-black/80 leading-relaxed font-normal">
            <ScrollReveal>
              <p className="mb-6">
                Breathe life into your property with professional softscape installation in Calgary. From ripping out old, failing grass to expert garden bed installation, we handle all the organic elements of your landscape to ensure a vibrant and healthy yard built for our unique climate.
              </p>
              <p className="mb-6">
                Whether you need a complete tear-out and fresh sod installation for a new build, or simply want to refresh tired, overgrown spaces with new topsoil and mulch, our landscaping crews bring the horticulture expertise and the heavy equipment needed to execute flawlessly.
              </p>
            </ScrollReveal>
          </div>

          {/* IMAGE GRID */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 md:gap-6 px-4">
            <ScrollReveal className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-black/10 translate-y-8 hover:scale-[1.02] transition-transform">
              <Image 
                src="/Landscape web page pics/lawn-relevel-calgary.JPG" 
                alt="Softscape installation Calgary - fresh topsoil grading and lawn replacement" 
                fill 
                className="object-cover"
              />
            </ScrollReveal>
            <ScrollReveal className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-black/10 -translate-y-8 hover:scale-[1.02] transition-transform">
              <Image 
                src="/Landscape web page pics/rock-bed-refresh.JPG" 
                alt="Garden bed installation Calgary - decorative rock and hardy shrub planting" 
                fill 
                className="object-cover"
              />
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* WHAT IS SOFTSCAPING */}
      <Section wrapperClassName="bg-[#2c2d32]" title="What is Softscaping?" titleClassName="text-[#01fa6d]">
        <div className="max-w-4xl mx-auto text-center">
           <ScrollReveal>
             <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-medium">
               Softscaping refers to the living, organic elements of a landscape design, such as grass, soil, trees, shrubs, and garden beds. Unlike hardscaping—which involves building structural features like patios or retaining walls—softscaping focuses entirely on horticulture, planting, and turf installation to breathe natural life and vibrant color into your outdoor space.
             </p>
           </ScrollReveal>
        </div>
      </Section>

      {/* SERVICES INCLUDED */}
      <Section title="Our Softscape Services" titleClassName="text-[#017a6d]" wrapperClassName="bg-gray-50 border-y border-black/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { 
              title: "Garden Bed Design & Installation", 
              desc: "We excavate, edge, and construct custom garden beds utilizing commercial-grade weed barriers, ensuring a clean separation between your lawn and your horticulture.",
              icon: "🌷"
            },
            { 
              title: "Lawn Installation", 
              desc: "Whether rolling out premium Kentucky Bluegrass sod for an instant lawn or seeding expansive areas, we establish thick, durable turf that thrives in Alberta.",
              icon: "🌱"
            },
            { 
              title: "Shrub & Tree Planting", 
              desc: "From privacy screening with Swedish Aspens to foundational planting with Mugo Pines, we source, amend soil, and meticulously plant Zone 4-rated nursery stock.",
              icon: "🌳"
            },
            { 
              title: "Perennial & Annual Planting", 
              desc: "We inject color and layered texture into your property by designing beds with vibrant, hardy perennials and annuals suited to Calgary's short growing season.",
              icon: "🌺"
            },
            { 
              title: "Mulching & Top Dressing", 
              desc: "We supply and install premium cedar mulch, bark nuggets, or decorative river rock to lock in critical soil moisture, suppress weeds, and provide a polished finish.",
              icon: "🍂"
            },
            { 
              title: "Yard Grading & Prep", 
              desc: "A healthy yard starts from the ground up. We bring in topsoil to correct drainage issues, level rutted areas, and ensure a perfect, nutrient-rich base before planting.",
              icon: "🚜"
            }
          ].map((service, i) => (
            <ScrollReveal key={i} className="bg-white rounded-3xl p-8 shadow-md border border-black/5 hover:-translate-y-2 transition-all group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform origin-left">{service.icon}</div>
              <h3 className="text-xl font-black text-black mb-3 leading-tight">{service.title}</h3>
              <p className="text-black/70 font-medium leading-relaxed">{service.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* WHY IT MATTERS / BENEFITS */}
      <Section title="The Value of Professional Softscaping" titleClassName="text-[#017a6d]" wrapperClassName="bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-xl text-black/80 font-medium mb-12 max-w-3xl">
              A premium landscape installation in Calgary does more than just look nice. It fundamentally changes how you interact with your property and provides measurable returns on your investment. Here is why homeowners choose TERREOAK for their Calgary softscape projects:
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal className="bg-gray-50 rounded-3xl p-8 border border-black/5 shadow-sm">
              <div className="w-12 h-12 bg-[#01fa6d]/20 text-[#017a6d] flex items-center justify-center rounded-full mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              </div>
              <h4 className="text-2xl font-black text-black mb-3">Instant Curb Appeal</h4>
              <p className="text-black/70 leading-relaxed font-medium">
                Whether you are prepping for a sale or settling into your forever home, nothing transforms a property faster than a fresh, level lawn and meticulously edged garden beds. High-end landscape installation in Calgary is one of the few home improvements that immediately boosts both aesthetic charm and total property value.
              </p>
            </ScrollReveal>

            <ScrollReveal className="bg-gray-50 rounded-3xl p-8 border border-black/5 shadow-sm">
              <div className="w-12 h-12 bg-[#01fa6d]/20 text-[#017a6d] flex items-center justify-center rounded-full mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </div>
              <h4 className="text-2xl font-black text-black mb-3">Four-Season Color</h4>
              <p className="text-black/70 leading-relaxed font-medium">
                We design your yard to look beautiful year-round. By carefully mixing evergreen trees for winter structure, early-blooming shrubs for spring vibrancy, and hardy perennials for late-summer color, your Calgary softscape will always have something stunning to show, regardless of the season.
              </p>
            </ScrollReveal>

            <ScrollReveal className="bg-gray-50 rounded-3xl p-8 border border-black/5 shadow-sm">
              <div className="w-12 h-12 bg-[#01fa6d]/20 text-[#017a6d] flex items-center justify-center rounded-full mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h4 className="text-2xl font-black text-black mb-3">Low-Maintenance Living</h4>
              <p className="text-black/70 leading-relaxed font-medium">
                Your backyard shouldn't feel like a second job. By utilizing proper soil grading, commercial-grade weed barriers, heavy mulch, and native Zone-4 rated plants, our installation teams create breathtaking environments that require minimal ongoing upkeep so you can spend your weekends relaxing.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </Section>



      {/* PLANTING PROCESS */}
      <Section title="Our Planting Process" titleClassName="text-[#017a6d]" wrapperClassName="bg-gray-50">
         <div className="max-w-6xl mx-auto">
            <p className="text-lg text-black/70 font-medium mb-12 text-center max-w-2xl mx-auto">We don't just dig a hole and drop a tree in. Proper planting guarantees survival.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { step: 1, title: "Sourcing & Selection", desc: "We hand-select premium nursery stock specifically rated for Calgary's Zone 4 climate, verifying excellent health and robust root structures before transport." },
                { step: 2, title: "Excavation & Prep", desc: "We dig the planting hole two to three times wider than the root ball, aggressively breaking up the dense Calgary clay to ensure roots can easily expand horizontally rather than becoming root-bound." },
                { step: 3, title: "Cultivation & Amendment", desc: "Calgary's alkaline clay lacks vital nutrients. We blend the native soil with high-quality compost, premium topsoil, and specialized root-starting fertilizers to create an ideal growing environment." },
                { step: 4, title: "Precision Installation", desc: "The plant is set at the precise grade to prevent crown rot. We carefully backfill the hole, tamping to eliminate air pockets, and finish with a heavy foundational watering to lock the soil in place." },
                { step: 5, title: "Mulch & Insulation", desc: "We apply a thick layer of premium cedar mulch or decorative rock around the base to insulate the roots against Calgary's rapid temperature swings and retain critical moisture." },
                { step: 6, title: "Client Aftercare", desc: "We don't just walk away. We provide you with detailed, plant-specific watering schedules and care instructions so you know exactly how to nurture your new softscape through its critical first year." },
              ].map((item, i) => (
                <ScrollReveal 
                  key={i} 
                  className="bg-white p-8 rounded-3xl shadow-lg border border-black/5 flex flex-col hover:-translate-y-1 transition-transform"
                >
                  <div className="text-6xl font-black text-[#01fa6d]/30 tracking-tighter mb-4">0{item.step}</div>
                  <h3 className="text-xl font-black mb-3 text-black uppercase">{item.title}</h3>
                  <p className="text-black/70 text-base leading-relaxed font-medium">{item.desc}</p>
                </ScrollReveal>
              ))}
            </div>
         </div>
      </Section>

      {/* ARTICLE */}
      <Section title="Calgary Planting Guide" titleClassName="text-[#017a6d]" wrapperClassName="bg-white relative overflow-hidden">
        {/* Decorative Background Illustrations */}
        <div className="absolute left-[-2%] top-[10%] opacity-[0.03] pointer-events-none hidden lg:block">
          <svg width="450" height="450" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="0.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 22v-6m-4 6h8m-1.7-8.3C15.9 11 18 8.8 18 6.5 18 3.5 15.3 2 12 2S6 3.5 6 6.5c0 2.3 2.1 4.5 3.7 7.2" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 14c-2.8 0-5 2.2-5 5 0 .6.1 1.1.3 1.6M14 14c2.8 0 5 2.2 5 5 0 .6-.1 1.1-.3 1.6" />
          </svg>
        </div>
        
        <div className="absolute right-[-2%] bottom-0 opacity-[0.03] pointer-events-none hidden lg:block">
          <svg width="400" height="400" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="0.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 22V12m0 0a4 4 0 100-8 4 4 0 000 8zm0 0a4 4 0 118 0 4 4 0 01-8 0zm0 0a4 4 0 10-8 0 4 4 0 008 0zm0 0a4 4 0 110 8 4 4 0 010-8z" />
          </svg>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
           <ScrollReveal>
             <h3 className="text-3xl md:text-4xl font-black text-black mb-12 text-center max-w-3xl mx-auto">Why Most Plants Die in Calgary (And How to Prevent It)</h3>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
               <div className="prose prose-lg text-black/80 font-medium leading-relaxed">
                 <p className="mb-6">
                   Calgary's climate is notoriously unforgiving. Rapid Chinooks can trick plants out of dormancy in January, only for a deep freeze to hit in February. Couple this with our dense, alkaline clay soil, and it’s no wonder many homeowners struggle to keep their garden beds alive.
                 </p>
                 <p className="mb-6 text-xl text-black font-bold border-l-4 border-[#01fa6d] pl-5 py-2 bg-gray-50 rounded-r-xl">
                   The secret to a thriving Calgary softscape comes down to two absolute rules: Zone Hardiness and Soil Amendment.
                 </p>
               </div>

               <div className="space-y-10">
                 <div>
                   <h4 className="text-2xl font-black text-[#017a6d] mb-4 flex items-center gap-4">
                     <span className="w-10 h-10 rounded-full bg-[#01fa6d] text-black flex items-center justify-center text-lg shadow-md">1</span> 
                     Respect the Zone
                   </h4>
                   <p className="text-black/80 font-medium leading-relaxed">
                     Calgary is classified as Plant Hardiness Zone 4. While big-box garden centers often sell beautiful plants rated for Zone 5 or 6, planting these outdoors in Calgary is essentially renting them for the summer. They will not survive the winter. Always verify that the tree, shrub, or perennial you are purchasing is rated for Zone 2, 3, or 4.
                   </p>
                 </div>
                 
                 <div>
                   <h4 className="text-2xl font-black text-[#017a6d] mb-4 flex items-center gap-4">
                     <span className="w-10 h-10 rounded-full bg-[#01fa6d] text-black flex items-center justify-center text-lg shadow-md">2</span> 
                     Break the Clay
                   </h4>
                   <p className="text-black/80 font-medium leading-relaxed">
                     Calgary soil is heavy clay. If you dig a hole and plant a tree directly into it without amending the soil, you’ve essentially planted it in a clay bathtub. Water will pool in the hole, drowning the roots. We always excavate wider than the root ball and mix in organic compost and high-quality topsoil to improve drainage and nutrient uptake.
                   </p>
                 </div>
               </div>
             </div>
           </ScrollReveal>
        </div>
      </Section>

      {/* PHOTO GALLERY */}
      <Section title="Recent Softscape Projects" titleClassName="text-[#017a6d]" wrapperClassName="bg-white border-y border-black/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            "/Landscape web page pics/Sod-installation-calgary.jpg",
            "/Landscape web page pics/rock-bed-refresh.JPG",
            "/Landscape web page pics/lawn-relevel-calgary.JPG",
            "/Landscape web page pics/lawn-irrigation-install.jpeg"
          ].map((src, i) => (
            <ScrollReveal key={i} className="relative aspect-square rounded-2xl overflow-hidden shadow-lg border border-black/5 hover:scale-105 transition-transform duration-500 cursor-pointer">
              <Image src={src} alt="Calgary softscaping project installation" fill className="object-cover" />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* NATIVE ALBERTA PLANT LIST */}
      <Section title="Native Alberta Plant Guide" titleClassName="text-[#017a6d]" wrapperClassName="bg-gray-50 border-y border-black/5">
        <ScrollReveal>
          <p className="max-w-3xl text-lg text-black/80 leading-relaxed font-medium mb-12">
            Native plants have evolved to thrive in Alberta's specific climate, soil, and precipitation levels. By incorporating native species into your softscape, you ensure maximum survival rates, dramatically lower maintenance, and support local ecosystems.
          </p>
        </ScrollReveal>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
          {[
            { 
              name: "Trembling Aspen", scientific: "Populus tremuloides", type: "Tree", 
              desc: "A fast-growing iconic Alberta tree with white bark and leaves that flutter beautifully in the slightest breeze.", 
              sun: "Full Sun", size: "40ft Tall × 15ft Wide" 
            },
            { 
              name: "White Spruce", scientific: "Picea glauca", type: "Evergreen Tree", 
              desc: "A massive, dense evergreen that provides incredible winter structure, wind breaks, and year-round privacy.", 
              sun: "Full to Part Sun", size: "60ft Tall × 20ft Wide" 
            },
            { 
              name: "Saskatoon Berry", scientific: "Amelanchier alnifolia", type: "Shrub", 
              desc: "Features beautiful white spring blossoms, edible purple berries in summer, and brilliant yellow/red autumn foliage.", 
              sun: "Full Sun to Part Shade", size: "15ft Tall × 10ft Wide" 
            },
            { 
              name: "Red Osier Dogwood", scientific: "Cornus sericea", type: "Shrub", 
              desc: "Famous for its striking, blood-red stems that provide spectacular visual contrast against white winter snow.", 
              sun: "Full Sun to Part Shade", size: "8ft Tall × 8ft Wide" 
            },
            { 
              name: "Prickly Wild Rose", scientific: "Rosa acicularis", type: "Flowering Shrub", 
              desc: "Alberta's provincial flower. Extremely hardy, producing highly fragrant pink blossoms and bright red rose hips.", 
              sun: "Full Sun to Part Shade", size: "5ft Tall × 5ft Wide" 
            },
            { 
              name: "Wolf Willow", scientific: "Elaeagnus commutata", type: "Shrub", 
              desc: "A drought-tolerant shrub featuring stunning metallic-silver foliage and small, intensely fragrant yellow flowers.", 
              sun: "Full Sun", size: "8ft Tall × 6ft Wide" 
            }
          ].map((plant, idx) => (
            <ScrollReveal key={idx} className="bg-white border border-black/10 rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:shadow-lg transition-shadow group h-full">
              <div className="mb-6">
                <div className="flex items-center justify-between gap-3 mb-3">
                  <h4 className="text-2xl font-black text-black">{plant.name}</h4>
                  <span className="text-xs font-bold text-black/40 italic text-right">{plant.scientific}</span>
                </div>
                <p className="text-black/70 font-medium leading-relaxed">{plant.desc}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-auto pt-5 border-t border-black/5">
                <div className="flex-1 bg-gray-50 rounded-xl p-3 border border-black/5 group-hover:bg-[#01fa6d]/5 transition-colors">
                  <div className="text-[10px] font-black text-black/40 uppercase tracking-widest mb-1">Light Req.</div>
                  <div className="font-bold text-[#017a6d] flex items-center gap-1.5 text-sm">
                    <svg className="w-4 h-4 text-yellow-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 4.22a1 1 0 011.415 0l.708.708a1 1 0 01-1.414 1.414l-.708-.708a1 1 0 010-1.414zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM14.22 15.78a1 1 0 010 1.415l-.708.708a1 1 0 01-1.414-1.414l.708-.708a1 1 0 011.414 0zM10 18a1 1 0 01-1-1v-1a1 1 0 112 0v1a1 1 0 01-1 1zm-4.22-4.22a1 1 0 01-1.415 0l-.708-.708a1 1 0 011.414-1.414l.708.708a1 1 0 010 1.414zM2 10a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zm2.22-4.22a1 1 0 010-1.415l.708-.708a1 1 0 011.414 1.414l-.708.708a1 1 0 01-1.414 0zM10 5a5 5 0 100 10 5 5 0 000-10z" clipRule="evenodd" /></svg>
                    {plant.sun}
                  </div>
                </div>
                
                <div className="flex-1 bg-gray-50 rounded-xl p-3 border border-black/5 group-hover:bg-[#01fa6d]/5 transition-colors">
                  <div className="text-[10px] font-black text-black/40 uppercase tracking-widest mb-1">Mature Size</div>
                  <div className="font-bold text-[#017a6d] flex items-center gap-1.5 text-sm">
                    <svg className="w-4 h-4 text-gray-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
                    {plant.size}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <ScrollReveal>
            <p className="text-lg text-black/70 mb-6 font-medium">Looking for more options? We have hundreds of varieties available.</p>
            <a 
              href="/Terreoak-Plant-Catalog.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#01fa6d] px-8 py-4 text-[16px] font-black text-black hover:opacity-90 transition-all transform hover:-translate-y-1 shadow-lg shadow-[#01fa6d]/20"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              DOWNLOAD FULL PLANT CATALOG (PDF)
            </a>
          </ScrollReveal>
        </div>
      </Section>

      {/* SERVICE AREA SECTION */}
      <Section
        kicker="Service Area"
        title="WHERE WE INSTALL"
        titleClassName="text-[#017a6d]"
        wrapperClassName="bg-white"
        hasBorder={true}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-8">
          <ScrollReveal>
            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-black/80 leading-relaxed font-bold uppercase tracking-tight">
                Proudly Serving Calgary & Surrounding Municipalities
              </p>
              <p className="text-lg text-black/70 leading-relaxed">
                Unlike our snow removal services which are strictly limited to South Calgary, our softscape installation teams operate across the entire Greater Calgary Region to bring premium landscape construction to your doorstep.
              </p>
              
              <div className="space-y-4 pt-4">
                {["Calgary (All Quadrants)", "Okotoks", "Airdrie", "Cochrane", "Chestermere"].map((city, idx) => (
                  <div key={idx} className="flex gap-4 items-center">
                    <div className="w-8 h-8 rounded-full bg-[#01fa6d] flex-shrink-0 flex items-center justify-center font-black text-black text-sm">✓</div>
                    <h4 className="text-black font-bold text-lg">{city}</h4>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="relative group/map">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-100 bg-white">
              {/* Base Map Image */}
              <Image
                src="/calgary-base-map.png"
                alt="Softscape Service Area Map Calgary"
                fill
                className="object-cover transition-transform duration-700 group-hover/map:scale-[1.02]"
              />
              
              {/* Interactive SVG Zones Overlay */}
              <div className="absolute inset-0 z-10 pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-full h-full transition-all duration-700">
                  {/* Full Region Overlay */}
                  <circle 
                    cx="50" cy="50" r="42" 
                    fill="#01fa6d" fillOpacity="0.45" 
                    stroke="#01fa6d" strokeWidth="1" 
                    className="transition-all hover:fill-opacity-60"
                  />
                  
                  {/* Zone Labels */}
                  <g className="font-black text-[3.5px] uppercase tracking-tighter">
                    {/* Calgary Label */}
                    <rect x="35" y="47" width="30" height="6" rx="3" fill="#01fa6d" />
                    <text x="50" y="51.2" textAnchor="middle" fill="black">GREATER CALGARY</text>
                  </g>
                </svg>
              </div>

              {/* Legend Overlay on Map */}
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="flex justify-between items-end">
                  <div className="bg-black text-white px-5 py-3 rounded-2xl border border-white/10 shadow-2xl">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 rounded-full bg-[#01fa6d] animate-pulse" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#01fa6d]">Active Softscape Region</span>
                    </div>
                    <p className="text-[11px] font-bold text-white/90 italic">Citywide + Surrounding Communities</p>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 pointer-events-none" />
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* LEAD FORM SECTION */}
      <Section id="seasonal-form" title="Get a Softscape Estimate" titleClassName="text-[#017a6d]" wrapperClassName="bg-white">
        <div className="max-w-4xl mx-auto text-center mb-12">
           <p className="text-xl font-bold text-black/80">
              Fill out the form below and our team will get back to you with a detailed estimate.
           </p>
        </div>
        <div className="max-w-4xl mx-auto bg-gray-50 p-4 md:p-8 rounded-3xl shadow-xl border border-black/5">
           <JobberLeadForm />
        </div>
      </Section>

      {/* FAQ */}
      <Section kicker="Support" title="Softscaping FAQ" titleClassName="text-[#017a6d]" wrapperClassName="bg-gray-50 border-y border-black/5">
        <div className="mt-12 max-w-4xl mx-auto space-y-4">
          {[
            {
              q: "What’s the best time to plant in Calgary?",
              a: "The ideal window for planting in Calgary is late spring (late May) after the final frost risk has passed, or early fall (September) when the soil is warm but the extreme summer heat has broken. Planting during these periods gives roots the best chance to establish before enduring severe temperature stress."
            },
            {
              q: "How long does installation take?",
              a: "Most residential softscape installations are incredibly fast compared to hardscaping. A standard yard grading and sod installation usually takes 1 to 2 days. More complex projects involving expansive garden bed creation and extensive tree planting may take 3 to 5 days."
            },
            {
              q: "Do you offer a warranty on plants?",
              a: "Yes. Because we strictly source Zone-4 rated nursery stock and employ meticulous soil amendment practices, we proudly back our softscaping installations with a robust plant survival warranty for the first critical year, provided our simple aftercare watering instructions are followed."
            },
            {
              q: "Do you offer design-only services?",
              a: "Yes. If you prefer to install the landscape yourself or hire your own contractor, we offer comprehensive 3D landscape design and blueprinting as a standalone service. This includes a full plant and material list so you know exactly what to buy."
            },
            {
              q: "Why is Kentucky Bluegrass the standard for sod in Calgary?",
              a: "Kentucky Bluegrass is the undisputed king of lawns in Alberta. It is incredibly cold-hardy, recovers well from foot traffic, and has a rich, dark green color that looks highly premium."
            },
            {
              q: "How long does new sod take to root?",
              a: "New sod typically takes 10 to 14 days to establish shallow roots. During this critical window, you must keep the sod consistently moist, but not flooded. Avoid walking on it during this period."
            },
            {
              q: "When can I mow my new sod?",
              a: "You should only mow your new lawn once the roots have firmly attached to the soil beneath. Gently tug on the grass blades—if the sod doesn't lift, it's ready for a high-setting trim!"
            }
          ].map((faq, i) => (
            <details key={i} className="group bg-white rounded-xl border border-black/5 overflow-hidden">
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What’s the best time to plant in Calgary?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The ideal window for planting in Calgary is late spring (late May) after the final frost risk has passed, or early fall (September) when the soil is warm but the extreme summer heat has broken."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does installation take?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most residential softscape installations take 1 to 2 days. More complex projects involving garden bed creation and tree planting may take 3 to 5 days."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you offer a warranty on plants?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We strictly source Zone-4 rated nursery stock and back our installations with a plant survival warranty for the first critical year."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you offer design-only services?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We offer comprehensive 3D landscape design and blueprinting as a standalone service for those looking to DIY."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Why is Kentucky Bluegrass the standard for sod in Calgary?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Kentucky Bluegrass is incredibly cold-hardy, recovers well from foot traffic, and has a rich, dark green color that thrives in Alberta."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does new sod take to root?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "New sod typically takes 10 to 14 days to establish shallow roots. During this critical window, you must keep the sod consistently moist, but not flooded."
                  }
                },
                {
                  "@type": "Question",
                  "name": "When can I mow my new sod?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You should only mow your new lawn once the roots have firmly attached to the soil beneath. Gently tug on the grass blades to check if it has rooted."
                  }
                }
              ]
            })
          }}
        />
      </Section>

      {/* HARDSCAPING CROSS-LINK */}
      <Section title="Looking for Patios & Retaining Walls?" titleClassName="text-[#017a6d]" wrapperClassName="bg-white border-b border-black/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-black/80 font-medium mb-8 leading-relaxed">
            Softscaping is only half the battle. If your project requires heavy structural work—like interlocking stone patios, retaining walls, or custom woodworking—we offer complete hardscaping and construction services to build your entire backyard oasis from the ground up.
          </p>
          <Link href="/hardscaping" className="inline-flex items-center justify-center rounded-xl bg-white border-2 border-[#017a6d] px-8 py-4 text-[16px] font-black text-[#017a6d] hover:bg-[#017a6d] hover:text-white transition-all shadow-md hover:-translate-y-1">
            EXPLORE HARDSCAPING SERVICES
          </Link>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <TestimonialSection
        kicker="Client Feedback"
        title="What Calgary Says About Our Softscaping"
        testimonials={[
          {
            name: "Sarah M.",
            role: "Softscape Installation",
            text: "TERREOAK completely transformed our backyard. From the initial 3D design to the final walk-through, their team was incredibly professional. They handled the sod, the garden beds, and planted gorgeous trees that perfectly fit the space. Highly recommend!"
          },
          {
            name: "David K.",
            role: "Yard Grading & Sod",
            text: "We struggled with a muddy, unlevel backyard for years. The team at TERREOAK came in, regraded the entire property for proper drainage, and laid premium Kentucky Bluegrass. It took less than two days and looks like a golf course."
          },
          {
            name: "Emily R.",
            role: "Garden Bed Design",
            text: "I wanted a low-maintenance, native Alberta garden but didn't know where to start. They designed beautiful, drought-resistant beds and sourced incredibly healthy plants. It has completely elevated our front yard's curb appeal."
          }
        ]}
      />

      {/* FINAL CTA */}
      <section className="py-24 bg-[#017a6d] text-center text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-8">Ready to transform your yard?</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12 font-bold italic">
            Book a consultation today. Our landscape crews fill up fast for the Calgary spring and summer season.
          </p>
          <Link
            href="#seasonal-form"
            className="inline-flex items-center justify-center rounded-full bg-white px-12 py-[16px] text-[18px] font-black text-[#017a6d] hover:bg-gray-100 transition-all shadow-2xl hover:-translate-y-1 cursor-pointer"
          >
            REQUEST AN ESTIMATE
          </Link>
        </div>
      </section>

      {/* BLOG */}
      <OurBlogSection />
      
      {isCtaVisible && (
        <div style={styles.stickyCtaContainer} className="stickyCtaWrapper animate-float-up">
          <Link
            href="#seasonal-form"
            style={styles.stickyCtaLink}
            className="cursor-pointer"
          >
            START MY PROJECT
          </Link>
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
    color: "#000",
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
    background: "rgba(0,0,0,0.1)",
    color: "#000",
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
};
