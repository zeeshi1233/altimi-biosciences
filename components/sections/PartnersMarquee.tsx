"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";

const customerLogos = [
  { id: "cust-01", name: "Dr. Ruth K.M. Pfau Civil Hospital Karachi", src: "/images/customer-logos/logo_01.png" },
  { id: "cust-02", name: "Jinnah Post Graduate Medical Centre (JPMC)", src: "/images/customer-logos/logo_02.png" },
  { id: "cust-03", name: "Orthopaedic & Medical Institute (OMI)", src: "/images/customer-logos/logo_03.png" },
  { id: "cust-04", name: "National Institute of Cardiovascular Diseases (NICVD)", src: "/images/customer-logos/logo_04.png" },
  { id: "cust-05", name: "Dr. Ziauddin Hospital", src: "/images/customer-logos/logo_05.png" },
  { id: "cust-06", name: "Patel Hospital", src: "/images/customer-logos/logo_06.png" },
  { id: "cust-07", name: "Liaquat National Hospital & Medical College", src: "/images/customer-logos/logo_07.png" },
  { id: "cust-08", name: "The Indus Hospital & Health Network", src: "/images/customer-logos/logo_08.png" },
  { id: "cust-09", name: "The Kidney Centre Post-Graduate Training Institute", src: "/images/customer-logos/logo_09.png" },
  { id: "cust-10", name: "Sindh Institute of Urology and Transplantation (SIUT)", src: "/images/customer-logos/logo_10.png" },
  { id: "cust-11", name: "National Medical Centre (NMC)", src: "/images/customer-logos/logo_11.png" },
  { id: "cust-12", name: "Tabba Heart Institute", src: "/images/customer-logos/logo_12.png" },
  { id: "cust-13", name: "Chughtai Lab & Healthcare", src: "/images/customer-logos/logo_13.png" },
  { id: "cust-14", name: "South City Hospital Karachi", src: "/images/customer-logos/logo_14.png" },
  { id: "cust-15", name: "Dow University of Health Sciences (DUHS)", src: "/images/customer-logos/logo_15.png" },
  { id: "cust-16", name: "Kashif Iqbal Thalassemia Care Centre", src: "/images/customer-logos/logo_16.png" },
  { id: "cust-17", name: "Dr. Essa Laboratory & Diagnostic Centre", src: "/images/customer-logos/logo_17.png" },
  { id: "cust-18", name: "Baqai Institute of Diabetology & Endocrinology", src: "/images/customer-logos/logo_18.png" },
  { id: "cust-19", name: "Baqai Medical University Hospital", src: "/images/customer-logos/logo_19.png" },
  { id: "cust-20", name: "Sir Syed Hospital & Medical College", src: "/images/customer-logos/logo_20.png" },
  { id: "cust-21", name: "Anklesaria Hospital Karachi", src: "/images/customer-logos/logo_21.png" },
  { id: "cust-22", name: "Park Lane Hospital Karachi", src: "/images/customer-logos/logo_22.png" },
];

export const PartnersMarquee: React.FC = () => {
  // Duplicate for seamless infinite marquee loop
  const duplicatedCustomers = [...customerLogos, ...customerLogos];

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-white border-y border-slate-100">
      <Container className="mb-10">
        <Reveal direction="up">
          <SectionHeading
            badge="Institutional Trust"
            title="Trusted by Pakistan's Leading Hospitals & Diagnostic Centers"
            subtitle="Powering clinical laboratories, premier tertiary-care hospitals, and reference diagnostic networks nationwide."
            align="center"
          />
        </Reveal>
      </Container>

      {/* Marquee Track Container */}
      <div className="relative w-full overflow-hidden flex items-center py-4 group">
        {/* Left & Right Gradient Shadows for seamless fading */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Marquee Inner */}
        <div className="marquee-track space-x-6 sm:space-x-8">
          {duplicatedCustomers.map((cust, idx) => (
            <div
              key={`${cust.id}-${idx}`}
              title={cust.name}
              className="relative w-36 h-24 sm:w-44 sm:h-28 rounded-2xl bg-white border border-slate-100 shadow-sm p-3.5 flex items-center justify-center shrink-0 hover:border-primary/30 hover:shadow-md transition-[border-color,box-shadow] duration-200 group/item"
            >
              <div className="relative w-full h-full">
                <Image
                  src={cust.src}
                  alt={cust.name}
                  fill
                  sizes="(max-width: 768px) 144px, 176px"
                  className="object-contain filter contrast-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
