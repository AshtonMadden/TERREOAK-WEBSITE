"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Section, ScrollReveal, Carousel } from "../components/UI";

export default function LandscapeInstallsPage() {
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

  const handleScrollToForm = () => {
    window.location.href = "/contact";
  };

  return (
    <main className="bg-white text-black">
      {/* HERO */}
      <section className="relative min-h-[70vh] flex flex-col justify-center border-b border-black/10 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute min-w-full min-h-full object-cover"
          >
            <source src="/Landscape web page pics/calgary-landscape-installs.mov" type="video/quicktime" />
            <source src="/Landscape web page pics/calgary-landscape-installs.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-44 pb-24 md:pt-60 md:pb-32">
          <p className="text-[14px] font-bold tracking-widest text-[#01fa6d] uppercase drop-shadow-md">
            Calgary • Commercial & Residential
          </p>
          <h1 className="mt-4 text-[42px] md:text-[64px] font-black leading-[1.1] tracking-tight text-white drop-shadow-2xl max-w-4xl uppercase">
            Landscape Installs &<br />
            <span className="text-[#01fa6d]">Design-Build Solutions.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-[1.1rem] font-bold text-white/90 md:text-[1.3rem]">
            Engineered hardscapes, precision grading, and full-yard transformations built for Calgary&apos;s extreme climate.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={handleScrollToForm}
              className="inline-flex items-center justify-center rounded-full bg-[#017a6d] px-12 py-[14px] text-[16px] font-extrabold text-white border-2 border-white/10 hover:opacity-90 transition-opacity cursor-pointer"
            >
              Request a Build Quote
            </button>
          </div>

          {/* TRUST GRID (Advantage Cards) */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg border border-black/10 bg-white p-[14px]">
              <h3 className="font-black text-[16px] text-black">Quality & Accountability</h3>
              <p className="mt-1.5 text-[14px] text-black/70 leading-relaxed">
                Fully insured and WCB-compliant professional standards from start to finish.
              </p>
            </div>

            <div className="rounded-lg border border-black/10 bg-white p-[14px]">
              <h3 className="font-black text-[16px] text-black">Design • Build • Maintain</h3>
              <p className="mt-1.5 text-[14px] text-black/70 leading-relaxed">
                Seamless experience from initial 3D design to ongoing seasonal care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <Section
        kicker="Built for Calgary"
        kickerClassName="text-white/60"
        title="Why Calgarians choose TerreOak for Landscape Design and Build"
        titleClassName="text-white"
        wrapperClassName="bg-[#2c2d32]"
        py="py-8"
      >
        <div className="relative">
          <p className="max-w-3xl text-lg text-white/80 leading-relaxed font-normal relative z-10">
            Engineered for longevity and aesthetics, our design-build approach ensures your outdoor space withstands Calgary&apos;s unique climate while enhancing your lifestyle.
          </p>
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-screen h-[100px] opacity-10 grayscale pointer-events-none z-0 overflow-hidden">
            <Image
              src="/images/calgary-skyline.png"
              alt="Calgary Skyline silhouette"
              width={1920}
              height={150}
              className="w-full h-full object-cover object-bottom"
            />
          </div>
        </div>
      </Section>

      {/* PROPERTY TYPES SECTION */}
      <Section title="Landscaping Services for All Calgary Properties" titleClassName="text-[#017a6d]">
        <p className="max-w-3xl text-lg text-black/80 leading-relaxed font-normal mb-12">
          From new builds to established homes, we create custom outdoor spaces designed to fit your property and lifestyle. TerreOak specializes in Calgary residential lots, infill homes, and upscale new neighborhoods, delivering complete design-build services that stand up to Alberta&apos;s extreme seasons.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "New Builds",
            "Established Homes",
            "Infill Townhomes",
            "Luxury Properties"
          ].map((type, i) => (
            <div key={i} className="flex flex-col items-center justify-center p-6 rounded-xl border border-black/10 transition-all hover:border-[#017a6d] hover:bg-gray-50 group">
              <div className="w-12 h-12 rounded-full bg-[#017a6d]/5 flex items-center justify-center mb-4 group-hover:bg-[#017a6d] transition-colors">
                <svg className="w-6 h-6 text-[#017a6d] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="font-black text-center text-sm md:text-base">{type}</h3>
            </div>
          ))}
        </div>
      </Section>

      {/* PROCESS */}
      <Section
        kicker="Our Process"
        kickerClassName="text-white/60"
        title="Our proven Design & Build Process"
        titleClassName="text-white"
        wrapperClassName="bg-[#2c2d32]"
      >
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {[
            { step: "01", title: "Discovery & Consultation", desc: "We meet on-site to understand your vision, budget, and property requirements." },
            { step: "02", title: "Conceptual Design & 3D Rendering", desc: "Our designers create detailed plans and visualizations to bring your project to life." },
            { step: "03", title: "Budgeting & Material Selection", desc: "We select climate-ready materials and finalize a transparent, fixed-price scope." },
            { step: "04", title: "Construction Management", desc: "Our skilled crews execute the build with structured systems and daily management." },
            { step: "05", title: "Final Walkthrough", desc: "We ensure every detail meets our 'Built Right' standard before handing over your space." }
          ].map((p, i) => (
            <ScrollReveal key={i} className="group relative">
              <div className="h-full bg-[#017a6d] p-8 rounded-2xl flex flex-col justify-center min-h-[160px] border border-white/5 shadow-xl hover:bg-[#01645a] transition-all transform hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center font-black text-sm shrink-0">
                    {p.step}
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight">{p.title}</h3>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* SERVICES (Same as home page grid style) */}
      <Section kicker="What We Do" title="Comprehensive Landscape Services" titleClassName="text-[#017a6d]">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {[
            { title: "Hardscapes & Retaining Walls", desc: "Engineered stone work and structural walls designed for stability and style.", image: "/Landscape web page pics/Techo-Bloc-pavers-river-rock.JPG" },
            { title: "Paving & Stone Work", desc: "High-end patio installations, walkways, and natural stone features.", image: "/Landscape web page pics/Exposed-aggregate-concrete.JPG" },
            { title: "Planting & Trees", desc: "Selection of hardy, Alberta-native species for a thriving mountain climate.", image: "/images/gallery/project-3.png" },
            { title: "Sod & Turf", desc: "Precision sod installation and premium synthetic turf solutions.", image: "/images/gallery/project-4.png" },
            { title: "Irrigation Systems", desc: "Efficient water management and professional system installations.", image: "/images/design.png" },
            { title: "Pergolas & Fencing", desc: "Custom wooden pergolas and horizontal privacy fencing designed for luxury outdoor living.", image: "/images/pergolas-fencing.png" }
          ].map((s, i) => (
            <ScrollReveal key={i} className="group rounded-xl border border-black/10 overflow-hidden bg-white hover:border-[#017a6d] transition-colors">
              <div className="relative aspect-video overflow-hidden">
                <Image src={s.image} alt={s.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="font-black text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-black/60 leading-relaxed">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* RECENT PROJECTS (Gallery) */}
      <Section kicker="Portfolio" title="Our Recent Projects" titleClassName="text-[#017a6d]" wrapperClassName="bg-white">
        <Carousel className="mt-12">
          {[
            { src: "/Landscape web page pics/Calgary-Concrete-pour.JPG", alt: "Calgary Concrete Pour" },
            { src: "/Landscape web page pics/Calgary-hardscaping.JPG", alt: "Calgary Hardscaping" },
            { src: "/Landscape web page pics/Exposed-aggregate-concrete.JPG", alt: "Exposed Aggregate Concrete" },
            { src: "/Landscape web page pics/Finished-hardscape-project.JPG", alt: "Finished Hardscape Project" },
            { src: "/Landscape web page pics/Hardscape-path-install.JPG", alt: "Hardscape Path Install" },
            { src: "/Landscape web page pics/Techo-Bloc-paver-pathway.JPG", alt: "Techo-Bloc Paver Pathway" },
            { src: "/Landscape web page pics/Techo-Bloc-pavers-river-rock.JPG", alt: "Techo-Bloc Pavers and River Rock" },
            { src: "/Landscape web page pics/Techo-bloc-bin-pad.JPG", alt: "Techo-Bloc Bin Pad" },
            { src: "/Landscape web page pics/base-prep-paverpath.JPG", alt: "Base Preparation for Paver Path" },
            { src: "/Landscape web page pics/lawn-relevel-calgary.JPG", alt: "Lawn Relevel Calgary" },
            { src: "/Landscape web page pics/rock-bed-refresh.JPG", alt: "Rock Bed Refresh" }
          ].map((photo, i) => (
            <div key={i} className="min-w-[85vw] md:min-w-[450px] px-4 snap-start">
              <ScrollReveal className="relative aspect-[16/10] rounded-2xl overflow-hidden group border border-black/5 shadow-lg">
                <Image src={photo.src} alt={photo.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              </ScrollReveal>
            </div>
          ))}
        </Carousel>
      </Section>

      {/* CONTACT SECTION */}
      <Section id="landscape-installs-contact" title="START YOUR PROJECT" titleClassName="text-[#017a6d]">
        <div className="max-w-4xl mx-auto w-full text-center">
          <p className="text-xl text-black/60 mb-8 font-medium italic">
            Ready to build? Contact us directly for a professional consultation and fixed-price estimate.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 py-8 border-y border-black/5">
            <a href="tel:4038913252" className="group">
              <span className="block text-xs font-bold text-black/40 uppercase tracking-widest mb-1">Call Us</span>
              <span className="text-3xl font-black text-[#017a6d] hover:underline">(403) 891-3252</span>
            </a>
            <div className="hidden md:block w-px h-12 bg-black/10"></div>
            <a href="mailto:services@terreoak.ca" className="group">
              <span className="block text-xs font-bold text-black/40 uppercase tracking-widest mb-1">Email Us</span>
              <span className="text-2xl font-black text-black/60 hover:text-[#017a6d] transition-colors">services@terreoak.ca</span>
            </a>
          </div>
        </div>
      </Section>
      <div className="mt-12 text-center pb-24">
        <Link
          href="/portfolio"
          className="inline-flex items-center justify-center rounded-lg border-2 border-[#017a6d] px-8 py-3 text-sm font-bold text-[#017a6d] hover:bg-[#017a6d] hover:text-white transition-all shadow-md hover:-translate-y-1"
        >
          VIEW FULL PORTFOLIO
        </Link>
      </div>

      {/* TESTIMONIALS */}
      <Section kicker="Success Stories" title="What Our Clients Say" titleClassName="text-[#017a6d]">
        <div className="max-w-4xl mx-auto text-center mt-12">
          <div className="flex justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-6 h-6 text-[#017a6d]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-[22px] md:text-[28px] font-medium italic leading-relaxed text-black/80">
            &quot;I was looking for a landscape company to repair a walking path. Ashton from Terreoak answered immediately and we booked a site visit. He provided several options, samples, and photos. We were pleased with the finished product and the way he handled the process and kept us informed throughout.&quot;
          </p>
          <div className="mt-8">
            <div className="font-black text-lg">Brian Williamson</div>
            <div className="text-sm text-black/40 uppercase tracking-widest font-bold">Walking Path Repair</div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section kicker="Support" title="Frequently Asked Questions" titleClassName="text-[#017a6d]" wrapperClassName="bg-white">
        <div className="mt-12 max-w-4xl mx-auto space-y-4">
          {[
            { q: "How long does a typical landscape build take?", a: "Residential projects typically range from 1 to 4 weeks depending on complexity, materials, and property size." },
            { q: "Do you provide 3D designs for all projects?", a: "We offer professional 3D renderings for all major landscape overhauls and design-build contracts to ensure total alignment." },
            { q: "Is your work under warranty?", a: "Yes, all our hardscape installations are backed by our Built Right Guarantee, which covers craftsmanship and material integrity." },
            { q: "How do you handle slope and drainage issues?", a: "Drainage is our priority. We use engineered solutions and precise grading to ensure water is directed away from your foundation." }
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
      </Section>

      {/* FINAL CTA */}
      <section className="py-24 bg-[#017a6d] text-center text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-8">Ready to transform your landscape?</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12 font-bold italic">
            Secure your spot in our build queue today. Our crews fill up fast for the Calgary spring and summer season.
          </p>
          <button
            onClick={handleScrollToForm}
            className="inline-flex items-center justify-center rounded-full bg-white px-12 py-[16px] text-[18px] font-black text-[#017a6d] hover:bg-gray-100 transition-all shadow-2xl hover:-translate-y-1 cursor-pointer"
          >
            GET YOUR BUILD ESTIMATE
          </button>
        </div>
      </section>
      {
        isCtaVisible && (
          <div style={styles.stickyCtaContainer} className="stickyCtaWrapper animate-float-up">
            <button
              onClick={handleScrollToForm}
              style={styles.stickyCtaLink}
              className="cursor-pointer"
            >
              Start My Project
            </button>
            <button
              onClick={() => setIsCtaVisible(false)}
              style={styles.closeSticky}
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        )
      }
    </main >
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
