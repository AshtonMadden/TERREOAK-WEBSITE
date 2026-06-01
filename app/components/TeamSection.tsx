"use client";
import Image from "next/image";
import { Section } from "./UI";

export default function TeamSection() {
  return (
    <Section
      kicker="Locally Owned & Operated"
      title="MEET THE TEAM"
      titleClassName="text-[#017a6d] uppercase"
      wrapperClassName="bg-white border-t border-black/5"
    >
      <div className="flex flex-col lg:flex-row gap-12 items-center max-w-6xl mx-auto mt-8">
        <div className="lg:w-1/2 w-full">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl border border-black/5">
                <Image
                    src="/images/about-mission-team.jpg"
                    alt="TERREOAK Landscaping Team"
                    fill
                    className="object-cover"
                />
            </div>
        </div>
        <div className="lg:w-1/2 space-y-6 text-[18px] text-black/80 leading-relaxed font-medium text-left">
            <p>
                At TERREOAK, we believe great work starts with a strong work ethic, attention to detail, and a commitment to doing things the right way — every time.
            </p>
            <p>
                From building premium landscapes to maintaining properties year-round, our goal is to create results our customers can rely on season after season. We aren't just here to complete jobs; we're here to build lasting relationships, improve the properties we work on, and continue growing a local Calgary company you can trust.
            </p>
            <p className="font-black text-[#017a6d] pt-4 uppercase tracking-widest text-sm">
                - Ashton Madden, Founder & Director
            </p>
        </div>
      </div>
    </Section>
  );
}
