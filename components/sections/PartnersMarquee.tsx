"use client";

import React from "react";
import Image from "next/image";
import { partners } from "@/data/partners";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";

export const PartnersMarquee: React.FC = () => {
  // Duplicate for seamless infinite marquee loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-white border-y border-slate-100">
      <Container className="mb-10">
        <Reveal direction="up">
          <SectionHeading
            badge="Global Alliances"
            title="Trusted by World-Renowned Medical Manufacturers"
            subtitle="Authorised nationwide distributor for premier European, American, and international diagnostic pioneers."
            align="center"
          />
        </Reveal>
      </Container>

      {/* Marquee Track Container */}
      <div className="relative w-full  flex items-center py-4 group">
        {/* Left & Right Gradient Shadows for seamless fading */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Marquee Inner */}
        <div className="flex w-max animate-marquee space-x-5 sm:space-x-7 group-hover:[animation-play-state:paused]">
          {duplicatedPartners.map((partner, idx) => (
            <div
              key={`${partner.id}-${idx}`}
              className="relative w-40 h-24  transition-all duration-300  group/item shrink-0"
            >

              <div className="relative w-full h-full transition-transform duration-300 group-hover/item:scale-105">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  sizes="(max-width: 768px) 192px, 224px"
                  className="object-cover "
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};
