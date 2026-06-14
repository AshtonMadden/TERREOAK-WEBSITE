"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Section, ScrollReveal, Carousel } from "../components/UI";
import OurBlogSection from "../components/OurBlogSection";
import JobberLeadForm from "../components/JobberLeadForm";
import PremiumHero from "../components/PremiumHero";
import TrustBar from "../components/TrustBar";
import PremiumStatsSection from "../components/PremiumStatsSection";
import TestimonialSection from "../components/TestimonialSection";
import InstagramEmbed from "../components/InstagramEmbed";

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
    const formElement = document.getElementById('seasonal-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="bg-white text-black">
      <PremiumHero
        title={<>CALGARY LANDSCAPING & DESIGN<br /><span className="text-[#01fa6d]">WHERE THE SUN MEETS SOIL</span></>}
        description="Every TERREOAK build accounts for Calgary's specific conditions. From engineered retaining walls and exposed aggregate concrete to sod installations and drainage solutions, we build outdoor spaces designed to last through Alberta's freeze-thaw cycles."
        backgroundImage="/images/landscape-hero-pavers.jpg"
        badgeLabel="Landscape Installs"
        ctaText="PRICE PROJECT"
        onCtaClick={handleScrollToForm}
      />

      <TrustBar />

      {/* FEATURED PROJECTS */}
      <Section
        title="FEATURED PROJECTS"
        titleClassName="text-[#017a6d]"
        wrapperClassName="bg-gray-50 border-y border-black/5"
      >
        <div className="max-w-6xl mx-auto flex flex-col gap-24">
            {[
              {
                id: 1,
                title: "Custom Stone Pathway",
                location: "McKenzie Lake, Calgary AB",
                budget: "$5,000",
                desc: "This project focused on upgrading an outdated, low-end rock and stepping-stone pathway into a premium, durable hardscape. The client wanted a much cleaner, modern look that would be easy to maintain and drastically improve their backyard's curb appeal. Within just two days, our crew stripped the existing materials and installed a far superior, professional-grade foundation and aesthetic finish.",
                img: "/Landscape web page pics/Finished-hardscape-project.JPG",
                link: "/mckenzielakelandscaping"
              },
              {
                id: 2,
                title: "Techo-Bloc Path",
                location: "McKenzie Lake, Calgary AB",
                budget: "$10,000",
                desc: "This project focused entirely on high-quality hardscaping to completely refresh an outdated side-yard and pathway. The old mixed rock and aggregate steppers were heavily weathered and failing, so we completely removed and disposed of them to make way for a modern upgrade. We replaced the old pathway with large-format Techo-Bloc Blu 60 Grande pavers in a stunning Shale Grey finish, cleanly bordered with premium washed river rock for a striking, low-maintenance aesthetic.",
                img: "/Landscape web page pics/Techo-Bloc-pavers-river-rock.JPG",
                link: "/projects/mckenzie-lake-landscaping"
              }
            ].map((project, index) => (
                <div key={project.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image Side */}
                    <div className={`relative overflow-hidden rounded-3xl aspect-[4/3] shadow-xl border border-black/5 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                        <Image
                            src={project.img}
                            alt={project.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        
                        {/* Info Bar */}
                        <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-5 grid grid-cols-2 sm:grid-cols-3 gap-4">
                            <div className="col-span-2 sm:col-span-1">
                                <div className="text-white/80 text-[10px] uppercase tracking-[0.2em] font-bold mb-1">Project Scope</div>
                                <div className="text-white font-black text-base md:text-lg leading-tight">{project.title}</div>
                            </div>
                            <div className="col-span-1">
                                <div className="text-white/80 text-[10px] uppercase tracking-[0.2em] font-bold mb-1">Location</div>
                                <div className="text-white font-black text-base md:text-lg leading-tight">{project.location.split(',')[0]}</div>
                            </div>
                            <div className="col-span-1 text-right sm:text-left">
                                <div className="text-white/80 text-[10px] uppercase tracking-[0.2em] font-bold mb-1">Investment</div>
                                <div className="text-white font-black text-base md:text-lg leading-tight text-[#01fa6d]">{project.budget}</div>
                            </div>
                        </div>
                    </div>

                    {/* Text Summary Side */}
                    <div className={`text-lg text-black/80 leading-relaxed font-medium ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                        <h3 className="text-3xl font-black text-black mb-6 uppercase">{project.title}</h3>
                        <p className="mb-6">{project.desc}</p>
                        
                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <Link
                                href={project.link}
                                className="inline-flex items-center justify-center rounded-lg bg-black px-8 py-3 text-sm font-black text-white hover:bg-black/80 transition-all transform hover:-translate-y-1 shadow-md cursor-pointer uppercase tracking-wider"
                            >
                                Read Full Project
                            </Link>
                            <button 
                                onClick={() => document.getElementById('seasonal-form')?.scrollIntoView({ behavior: 'smooth' })}
                                className="inline-flex items-center justify-center rounded-lg bg-[#01fa6d] px-8 py-3 text-sm font-black text-black hover:opacity-90 transition-all transform hover:-translate-y-1 shadow-md cursor-pointer uppercase tracking-wider"
                            >
                                Get a Similar Quote
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </Section>

      {/* LATEST FROM INSTAGRAM */}
      <Section
        kicker="Follow Us"
        title="LATEST PROJECT VIDEOS"
        titleClassName="text-[#017a6d]"
        wrapperClassName="bg-white border-y border-black/5"
      >
        <div className="flex flex-col items-center">
            <p className="text-lg font-medium text-black/70 mb-12 text-center max-w-2xl">
                Check out our latest landscape transformations and snow removal updates over on Instagram. We post regular jobsite walk-throughs and before/afters!
            </p>
            <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar md:grid md:grid-cols-3 gap-6 lg:gap-8 w-full max-w-6xl pb-4 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0">
                <div className="flex-none w-[85%] snap-center md:w-auto">
                    <InstagramEmbed url="https://www.instagram.com/p/DZYJ9hey3Wz/" />
                </div>
                <div className="flex-none w-[85%] snap-center md:w-auto">
                    <InstagramEmbed url="https://www.instagram.com/p/DZbTO0OTIKM/" />
                </div>
                <div className="flex-none w-[85%] snap-center md:w-auto">
                    <InstagramEmbed url="https://www.instagram.com/p/DZIwwSby7ED/" />
                </div>
            </div>
            <div className="mt-16">
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-black hover:bg-black/80 transition-colors uppercase tracking-widest text-sm shadow-xl hover:-translate-y-1">
                    Follow us on Instagram <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
            </div>
        </div>
      </Section>


      {/* PREMIUM PROPERTY TYPES SECTION */}
      <Section title="Custom Landscaping for homeowners" titleClassName="text-[#017a6d]">
        <div className="max-w-4xl text-lg text-black/80 leading-relaxed font-normal mb-12">
          <p className="mb-6">
            TERREOAK is a premier Calgary landscaping and design-build firm specializing in high-end, custom outdoor transformations. We partner with homeowners who value top-quality work, from engineered retaining walls and exposed aggregate concrete to custom pergolas and complex drainage solutions. We build luxury outdoor spaces designed to endure Alberta’s freeze-thaw cycles without cutting corners.
          </p>
          <p className="mb-6">
            Our focus is on established homeowners upgrading aging yards and luxury property owners looking for a contractor capable of executing a great finish. We specialize in complete yard makeovers and beautiful custom landscapes. To ensure careful planning, every project begins with a dedicated on-site consultation followed by a paid, professional 3D design service, so you can visualize and perfect your exact space before a single shovel hits the ground.
          </p>
          <p className="mb-6 font-black text-[#01fa6d] bg-[#2c2d32] p-4 rounded-xl inline-block shadow-md">
            🛡️ The TERREOAK Standard: Every custom landscape installation is backed by a comprehensive 1-Year Workmanship Warranty. We use premium materials and refuse to compromise on quality.
          </p>
          <p className="font-black text-[#017a6d]">
            Because we limit the number of projects we take on to maintain our exacting standards, our build season fills up fast. If you’re planning a premium landscape upgrade, contact us today to secure your spot.
          </p>
        </div>


        {/* FOUNDER SPOTLIGHT */}
        <div className="flex flex-col md:flex-row items-stretch bg-white rounded-3xl shadow-xl border border-black/5 overflow-hidden group mt-20">
          <div className="md:w-2/5 relative min-h-[350px] md:min-h-full">
            <Image
              src="/images/Ashton-Madden-Cowboy.jpg"
              alt="Ashton Madden - Founder & Director"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <div className="md:w-3/5 p-8 md:p-12 relative flex flex-col justify-center">
            <h3 className="text-3xl font-black text-[#017a6d] uppercase tracking-tight mb-4 text-left">Ashton Madden</h3>
            <div className="space-y-4">
              <p className="text-lg text-black/70 leading-relaxed font-medium">
                My goal with TERREOAK is simple: build a company rooted in strong values, a great team culture, and a customer experience people can trust.
              </p>
            </div>

            {/* SIGNATURE AREA */}
            <div className="mt-8 flex justify-end items-end">
              <div className="text-right w-full flex flex-col items-end">
                <div className="relative h-20 w-[200px] md:h-[136px] md:w-[435px] mb-2">
                  <Image
                    src="/Ashton_Signature_.jpg"
                    alt="Ashton Madden Signature"
                    fill
                    sizes="(max-width: 768px) 200px, 435px"
                    className="object-contain object-right"
                  />
                </div>
                <span className="text-[10px] font-bold text-black/30 uppercase tracking-[0.2em]">Founder & Director</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <PremiumStatsSection />



      {/* PROCESS */}
      {/* PROCESS */}
      <Section title="How We Work" titleClassName="text-[#017a6d]" wrapperClassName="bg-gray-50 border-y border-black/5">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-xl md:text-2xl text-black/80 font-medium mb-16 text-center max-w-3xl mx-auto leading-relaxed">
              Getting your yard done right starts long before we pick up a shovel. Here’s what working with TERREOAK looks like from first contact to final walkthrough.
            </p>
          </ScrollReveal>
            
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { step: 1, title: "Initial Consultation", desc: "It starts with a conversation. When you reach out, we’ll ask about your project goals, timeline, and budget to make sure we’re a good fit before anyone commits to anything. From there, we’ll schedule a site walk to see the space in person." },
              { step: 2, title: "Quote & Agreement", desc: "After the site walk, we put together a detailed quote in our client portal with everything laid out clearly, scope, materials, and pricing. Your service agreement is attached and accepted alongside the quote, so there’s no paperwork chasing. Most projects run on a payment schedule with a deposit required to secure your spot on the schedule." },
              { step: 3, title: "Design & Revisions", desc: "If your project includes a 3D landscape design, that’s available as an add-on. Once we’re aligned on plants and materials, we finalize everything, attaching material photos and the design to your quote so you know exactly what you’re getting. We offer up to two revisions to make sure it’s right before we move forward." },
              { step: 4, title: "Scheduling & Installation", desc: "Once the quote is accepted and deposit received, your project gets booked. On site, we treat every yard like it’s our own, working methodically and holding ourselves to the same standard regardless of project size." },
              { step: 5, title: "Final Walkthrough & Completion", desc: "When the work is done, we walk the property with you to make sure you’re happy with everything. Then we clean up the site, document the finished project with photos, and collect the final payment." },
              { step: 6, title: "Warranty", desc: "We stand behind our work. TERREOAK provides a one-year workmanship warranty, if anything we installed fails due to our work, we’ll come back and make it right at no charge. Plant warranty follows what the nursery provides, which we’ll communicate clearly upfront." },
            ].map((item, i) => (
              <ScrollReveal 
                key={i} 
                className="bg-white p-8 rounded-3xl shadow-lg border border-black/5 flex flex-col hover:-translate-y-1 transition-transform h-full"
              >
                <div className="text-6xl font-black text-[#01fa6d]/30 tracking-tighter mb-4">0{item.step}</div>
                <h3 className="text-xl font-black mb-3 text-black uppercase">{item.title}</h3>
                <p className="text-black/70 text-base leading-relaxed font-medium">{item.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Section>




      {/* JOBBER LEAD FORM */}
      <Section id="seasonal-form" title="REQUEST A PROPOSAL" titleClassName="text-[#01fa6d]">
        <div className="max-w-6xl mx-auto w-full">
          <JobberLeadForm
            clienthubId="41b3399e-3795-43d8-afe2-e6c38c1b3e6e-2235504"
            formUrl="https://clienthub.getjobber.com/client_hubs/41b3399e-3795-43d8-afe2-e6c38c1b3e6e/public/work_request/embedded_work_request_form?form_id=2235504"
          />
        </div>
      </Section>

      {/* RECENT PROJECTS (Gallery) */}
      <Section kicker="Projects" title="Our Recent Projects" titleClassName="text-[#017a6d]" wrapperClassName="bg-white">
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
            <div key={i} className="min-w-[85vw] md:min-w-[450px] px-4 snap-center">
              <ScrollReveal className="relative aspect-[16/10] rounded-2xl overflow-hidden group border border-black/5 shadow-lg">
                <Image src={photo.src} alt={photo.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              </ScrollReveal>
            </div>
          ))}
        </Carousel>
      </Section>

      <div className="mt-12 text-center pb-24">
        <Link
          href="/projects"
          className="inline-flex items-center justify-center rounded-lg border-2 border-[#017a6d] px-8 py-3 text-sm font-bold text-[#017a6d] hover:bg-[#017a6d] hover:text-white transition-all shadow-md hover:-translate-y-1"
        >
          VIEW ALL PROJECTS
        </Link>
      </div>

      {/* TESTIMONIALS */}
      <TestimonialSection
        testimonials={[
          {
            name: "Brian Williamson",
            role: "Walking Path Repair",
            text: "I was looking for a landscape company to repair a walking path. Ashton from TERREOAK answered immediately and we booked a site visit. He provided several options, samples, and photos. We were pleased with the finished product and the way he handled the process and kept us informed throughout.",
          },
          {
            name: "Chris Leech",
            role: "Lawn Aeration",
            text: "Got these guys in to aerate my lawn for the first time. Could not be happier. Ashton and his crew did a tremendous job. They reply quickly and get the job booked and done fast. Always great to deal with a local business that actual replies.",
          },
          {
            name: "Linda Hayes Conradson",
            role: "Yard Cleanup Customer",
            text: "I recently used TERREOAK for yard cleanup and was extremely happy with the quality of work and how courteous and considerate the onsite team was. Email communications were friendly, helpful and received quickly. Thank you to Ashton and his team. Would highly recommend!",
          },
          {
            name: "George Witherley",
            role: "Snow Removal",
            text: "The guys from TERREOAK are amazing. They are clear on when they are coming with emails and show up every single time no matter how bad the snow fall is. They always go above and beyond clearing not only the walk way but my stairs as well. They are very polite and do an excellent job.",
          },
          {
            name: "J Walker",
            role: "Snow Removal Client",
            text: "I currently use TERREOAK for snow removal services and have been extremely happy with their work. They always send notification of when they will be coming and are extremely prompt and courteous. Will definitely be using them again next season and would highly recommend.",
          },
          {
            name: "Susan Lewis",
            role: "Snow Removal",
            text: "TERREOAK are doing snow removal for me this year. They send an email to advise when they are dispatching the crew each time it snows. They always get it done within the time they say. I'm very happy with their service and would highly recommend them.",
          },
          {
            name: "John Vaisman",
            role: "Spring Aeration & Clean Up",
            text: "I used TERREOAK for spring aeration and clean up. They did a fantastic job and the lawn looked great all summer. Very professional and reasonably priced. Would recommend.",
          },
          {
            name: "Justin & Ashley Lamrock",
            role: "Power Rake and Aeration",
            text: "If great service and professional results is what you're after, TERREOAK Landscaping is the place to go! Great pricing on power rake and aeration. Will book again next spring.",
          },
          {
            name: "Chad Coopman",
            role: "Lawn Care",
            text: "Hands down one of the best Lawn Care Companies I've dealt with. Fast, Quality workmanship, above and beyond my expectations. I highly recommend Ashton and TERREOAK, thank you again.",
          },
          {
            name: "Ewa Tybura",
            role: "Landscaping",
            text: "It was a great experience that I had within this company rep Ashton. They were very fast, professional and they were paying attention to all details. I will definitely using their service again.",
          },
          {
            name: "Cheryl O'Brien",
            role: "Window Washing",
            text: "Great service from the team @ TERREOAK!! Recently had them out to wash my windows, quick, professional service. My only complaint is that now that the outside of the windows are so clean I have to clean the inside 🤣. Thanks guys great job!!",
          },
          {
            name: "Shawn Gareau",
            role: "Landscaping",
            text: "I have relied on TERREOAK for all of my landscaping needs and they always deliver a great job in a timely manner. I highly recommend them.",
          },
        ]}
      />

      {/* COST & PRICING */}
      <Section title="How Much Does Landscaping Cost in Calgary?" titleClassName="text-[#017a6d]" wrapperClassName="bg-gray-50">
        <div className="max-w-4xl">
          <p className="text-xl text-black/80 leading-relaxed font-bold mb-8">
            Landscaping project costs in Calgary vary widely based on scope, materials, and site conditions. As a general guide:
          </p>
          <div className="grid gap-6 md:grid-cols-2 mb-12">
            <div className="p-6 bg-white rounded-xl border border-black/5 shadow-sm">
              <h3 className="font-black text-lg mb-2">Sod & Grading</h3>
              <p className="text-black/70 leading-relaxed">A basic sod installation on a standard Calgary lot typically runs <strong>$2,000–$6,000</strong> depending on lawn size, grading required, and soil prep.</p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-black/5 shadow-sm">
              <h3 className="font-black text-lg mb-2">Patios & Hardscapes</h3>
              <p className="text-black/70 leading-relaxed">Exposed aggregate or paver patio projects range from <strong>$8,000–$25,000+</strong> depending on size and material grade.</p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-black/5 shadow-sm">
              <h3 className="font-black text-lg mb-2">Retaining Walls</h3>
              <p className="text-black/70 leading-relaxed">Retaining wall installations start around <strong>$5,000</strong> and scale with height, length, and engineering requirements.</p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-black/5 shadow-sm">
              <h3 className="font-black text-lg mb-2">Full Yard Transformations</h3>
              <p className="text-black/70 leading-relaxed">Full yard design-build transformations for new homes commonly range from <strong>$20,000–$60,000+</strong>.</p>
            </div>
          </div>
          <p className="text-lg text-black/70 leading-relaxed italic border-l-4 border-[#017a6d] pl-6 py-2">
            Every TERREOAK project starts with a free on-site consultation and a detailed, fixed-price quote. We don’t do vague estimates, you’ll know exactly what you’re getting and what it costs before any work begins.
          </p>
        </div>
      </Section>

      {/* FAQ */}
      <Section kicker="Support" title="Frequently Asked Questions" titleClassName="text-[#017a6d]" wrapperClassName="bg-white">
        <div className="mt-12 max-w-4xl mx-auto space-y-4">
          {[
            {
              q: "How long does a typical landscaping project take in Calgary?",
              a: "Most residential projects run between 1 and 4 weeks from start to final walkthrough, depending on scope. A sod and cleanup install might take 2–3 days. A full hardscape build with retaining walls, concrete, and planting can run 2–4 weeks. We provide a project timeline before work begins so you’re never left guessing."
            },
            {
              q: "Do you work on new build lots in Calgary?",
              a: "Yes, new build landscaping is a significant part of our work. We’re familiar with the requirements of Calgary’s new communities including grading certificates, utility locates, and builder coordination. If you’ve just taken possession and need your yard completed, we can take it from bare dirt to finished landscape."
            },
            {
              q: "What’s the best time of year to book landscaping in Calgary?",
              a: "The Calgary build season runs roughly May through October. Our schedule fills up quickly in early spring, so we recommend booking your consultation in March or April for a spring or early summer start. Fall is also a good window for hardscape and grading work before the ground freezes."
            },
            {
              q: "Do you offer phased projects?",
              a: "Yes. If budget or timing is a consideration, we can design your full yard plan and build it in phases across one or more seasons. This way the design is cohesive even if the construction happens over time."
            },
            {
              q: "Is your work under warranty?",
              a: "All hardscape installations are backed by our Built Right Guarantee covering craftsmanship and material integrity. We stand behind our work and return to address any issues that arise from our installation."
            },
            {
              q: "Do you handle drainage and grading issues?",
              a: "Drainage is one of the most common issues we solve on Calgary properties, particularly in communities with heavy clay soil. We use engineered grading, French drains, catch basins, and swales to direct water away from your foundation and prevent pooling. If you’re noticing water in your basement, garage, or yard after rain or snowmelt, a drainage assessment should be your first call."
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
            GET YOUR BUILD PROPOSAL
          </button>
        </div>
      </section>

      {/* BLOG */}
      <OurBlogSection />
      {
        isCtaVisible && (
          <div style={styles.stickyCtaContainer} className="stickyCtaWrapper animate-float-up">
            <button
              onClick={handleScrollToForm}
              style={styles.stickyCtaLink}
              className="cursor-pointer"
            >
              START MY PROJECT
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
