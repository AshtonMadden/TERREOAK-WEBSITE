import React from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: "Careers | TERREOAK Landscaping & Snow Removal",
  description: "Join the TERREOAK team. We are hiring professional landscapers, snow removal operators, and crew members in Calgary.",
};

export default function CareersPage() {
  return (
    <main className="bg-white text-black min-h-screen flex flex-col">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-center border-b border-black/10 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/careers-hero.png"
            alt="TERREOAK Crew"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 w-full mx-auto max-w-6xl px-6 flex flex-col justify-center min-h-[100dvh] md:min-h-0 md:block pt-32 pb-12 md:pt-56 md:pb-24 lg:pt-60 lg:pb-32 text-left animate-slide-in-left">
          <div className="mt-auto md:mt-0">
            <p className="text-[14px] font-black tracking-widest text-[#01fa6d] uppercase drop-shadow-md font-lora">
              TERREOAK • JOIN THE CREW
            </p>
            <h1 className="mt-2 text-[32px] md:text-[56px] lg:text-[64px] font-black leading-[1.1] tracking-tight text-white drop-shadow-2xl max-w-4xl uppercase">
              BUILD YOUR CAREER<br />
              <span className="text-[#01fa6d]">WITH TERREOAK.</span>
            </h1>
          </div>

          <div className="mt-auto md:mt-12 mb-8 md:mb-0 flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="flex flex-wrap gap-4">
              <a
                href="#open-positions"
                className="inline-flex items-center justify-center rounded-full bg-[#01fa6d]/80 backdrop-blur-md px-12 md:px-24 py-[16px] text-[16px] font-extrabold text-black border-2 border-white/10 hover:bg-[#01fa6d] transition-all cursor-pointer shadow-xl shadow-[#01fa6d]/20 hover:-translate-y-1 w-full md:w-auto text-center"
              >
                VIEW OPEN POSITIONS
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY WORK WITH US */}
      <section className="py-20 md:py-32 bg-gray-50 border-b border-black/5">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[48px] font-black uppercase text-black leading-tight">
              Why Work With Us?
            </h2>
            <p className="mt-4 text-[18px] font-medium text-black/70 max-w-3xl">
              At TERREOAK, we believe that taking care of our properties starts with taking care of our people. We offer industry-leading pay, year-round stable employment, and top-tier equipment so you can do your best work safely and efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-black/5">
              <div className="text-[32px] mb-4">🏆</div>
              <h3 className="text-[20px] font-black uppercase text-black mb-2">Competitive Pay</h3>
              <p className="text-[15px] font-medium text-black/70">
                We pay above industry standards for reliable, hardworking professionals. Hard work is always recognized and rewarded.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-black/5">
              <div className="text-[32px] mb-4">🚜</div>
              <h3 className="text-[20px] font-black uppercase text-black mb-2">Modern Equipment</h3>
              <p className="text-[15px] font-medium text-black/70">
                No fighting with broken gear. We run modern, well-maintained fleets and equipment so you can focus on getting the job done right.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-black/5">
              <div className="text-[32px] mb-4">❄️</div>
              <h3 className="text-[20px] font-black uppercase text-black mb-2">Year-Round Work</h3>
              <p className="text-[15px] font-medium text-black/70">
                Forget seasonal layoffs. With comprehensive summer landscaping and winter snow removal, we offer stable year-round employment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section id="open-positions" className="py-20 md:py-32 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-[32px] md:text-[48px] font-black uppercase text-black leading-tight mb-4">
            Open Positions
          </h2>
          <p className="text-[18px] font-medium text-black/70 max-w-3xl mb-12 border-l-4 border-[#01fa6d] pl-4">
            <strong>How to Apply:</strong> We want to know the real you. To apply for any position, click the apply button to email us. You <strong>MUST</strong> attach your resume and a short video (shot on your phone is fine) answering the role-specific questions listed below.
          </p>

          <div className="space-y-8">
            {/* Position 1 */}
            <div className="p-8 border border-black/10 rounded-xl hover:border-[#01fa6d] transition-colors group">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
                <div className="flex-grow">
                  <h3 className="text-[24px] font-black uppercase text-black group-hover:text-[#017a6d] transition-colors">Landscape Crew Leader</h3>
                  <p className="text-[14px] font-black text-[#017a6d] uppercase mt-1 tracking-widest font-lora">Full-Time • Calgary, AB</p>
                  <p className="mt-4 text-[16px] text-black/70 font-medium">
                    Lead a dedicated team executing premium hardscape and softscape installations. Requires 3+ years of landscaping experience, a valid driver's license, and strong leadership skills.
                  </p>
                  
                  <div className="mt-6 bg-gray-50 p-6 rounded-lg border border-black/5">
                    <h4 className="font-bold text-[14px] uppercase text-black mb-2">Video Application Questions:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-[15px] text-black/80 font-medium">
                      <li>Walk us through your step-by-step process for properly prepping and laying a paver patio.</li>
                      <li>Describe a time you had to manage a difficult or underperforming team member. How did you handle it?</li>
                    </ol>
                  </div>
                </div>
                <div className="shrink-0 pt-2">
                  <a 
                    href="mailto:careers@terreoak.com?subject=Application:%20Landscape%20Crew%20Leader&body=Please%20attach%20your%20resume%20and%20your%20video%20answering%20the%20application%20questions%20here."
                    className="inline-flex w-full md:w-auto items-center justify-center rounded-full bg-black px-10 py-[14px] text-[14px] font-extrabold text-white uppercase group-hover:bg-[#01fa6d] group-hover:text-black transition-colors"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </div>

            {/* Position 2 */}
            <div className="p-8 border border-black/10 rounded-xl hover:border-[#01fa6d] transition-colors group">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
                <div className="flex-grow">
                  <h3 className="text-[24px] font-black uppercase text-black group-hover:text-[#017a6d] transition-colors">Snow Removal Operator</h3>
                  <p className="text-[14px] font-black text-[#017a6d] uppercase mt-1 tracking-widest font-lora">Seasonal / Full-Time • Calgary, AB</p>
                  <p className="mt-4 text-[16px] text-black/70 font-medium">
                    Operate commercial snow removal equipment (skid steers, tractors, plows). Requires open availability during winter months and previous heavy equipment experience.
                  </p>
                  
                  <div className="mt-6 bg-gray-50 p-6 rounded-lg border border-black/5">
                    <h4 className="font-bold text-[14px] uppercase text-black mb-2">Video Application Questions:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-[15px] text-black/80 font-medium">
                      <li>What specific experience do you have operating heavy machinery in winter conditions?</li>
                      <li>Snow removal requires extremely long and unpredictable hours. How do you handle fatigue and stay safe during a 14+ hour shift?</li>
                    </ol>
                  </div>
                </div>
                <div className="shrink-0 pt-2">
                  <a 
                    href="mailto:careers@terreoak.com?subject=Application:%20Snow%20Removal%20Operator&body=Please%20attach%20your%20resume%20and%20your%20video%20answering%20the%20application%20questions%20here."
                    className="inline-flex w-full md:w-auto items-center justify-center rounded-full bg-black px-10 py-[14px] text-[14px] font-extrabold text-white uppercase group-hover:bg-[#01fa6d] group-hover:text-black transition-colors"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </div>

            {/* Position 3 */}
            <div className="p-8 border border-black/10 rounded-xl hover:border-[#01fa6d] transition-colors group">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
                <div className="flex-grow">
                  <h3 className="text-[24px] font-black uppercase text-black group-hover:text-[#017a6d] transition-colors">Maintenance Crew Member</h3>
                  <p className="text-[14px] font-black text-[#017a6d] uppercase mt-1 tracking-widest font-lora">Full-Time • Calgary, AB</p>
                  <p className="mt-4 text-[16px] text-black/70 font-medium">
                    Join our fast-paced commercial and residential maintenance crews. Mowing, trimming, fall cleanups, and property care. Willing to train the right hardworking individual.
                  </p>
                  
                  <div className="mt-6 bg-gray-50 p-6 rounded-lg border border-black/5">
                    <h4 className="font-bold text-[14px] uppercase text-black mb-2">Video Application Questions:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-[15px] text-black/80 font-medium">
                      <li>Why do you want to work outdoors in a physically demanding job?</li>
                      <li>In your own words, what is the difference between a "good enough" job and a "high-quality" job when maintaining a property?</li>
                    </ol>
                  </div>
                </div>
                <div className="shrink-0 pt-2">
                  <a 
                    href="mailto:careers@terreoak.com?subject=Application:%20Maintenance%20Crew%20Member&body=Please%20attach%20your%20resume%20and%20your%20video%20answering%20the%20application%20questions%20here."
                    className="inline-flex w-full md:w-auto items-center justify-center rounded-full bg-black px-10 py-[14px] text-[14px] font-extrabold text-white uppercase group-hover:bg-[#01fa6d] group-hover:text-black transition-colors"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
