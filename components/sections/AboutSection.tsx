"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Award, FlaskConical, Users, Building2, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/Button";

const stats = [
  { label: "Years of Excellence", value: 8, suffix: "+", icon: Award },
  { label: "Healthcare Products", value: 100, suffix: "+", icon: FlaskConical },
  { label: "Global Brand Partners", value: 20, suffix: "+", icon: Building2 },
  { label: "Hospital & Lab Clients", value: 100, suffix: "+", icon: Users },
];

export const AboutSection: React.FC = () => {
  const prefersReduced = useReducedMotion();

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-white">
      <Container>
        {/* Section Heading */}
        <Reveal direction="up">
          <SectionHeading
            badge="About Altimi Biosciences"
            title="Driving the Future of Precision Healthcare and Diagnostics"
            subtitle="Leading Pakistan's medical diagnostic sector through world-renowned automated instrumentation and specialized clinical supplies."
            align="center"
            className="mb-14"
          />
        </Reveal>

        {/* Narrative & Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left Text Narrative (6 cols) */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            <Reveal direction="up" delay={0.1}>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-ink leading-snug">
                Redefining diagnostic speed, analytical precision, and laboratory reliability.
              </h3>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <p className="text-muted text-base sm:text-lg leading-relaxed">
                At <strong className="text-ink font-semibold">Altimi Biosciences</strong>, we supply verified diagnostic systems and hospital consumables. Our automated chemistry platforms, including the <span className="text-primary font-semibold">RX imola</span> and <span className="text-primary font-semibold">RX modena</span>, support institutional laboratories with reliable, continuous testing.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <p className="text-muted text-base leading-relaxed">
                From routine chemistries and direct HbA1c assays to specialized cardiac monitoring and consumables, we support healthcare workflows across Pakistan with calibrated accuracy and prompt technical assistance.
              </p>
            </Reveal>

            {/* Core Competency Highlights */}
            <Reveal direction="up" delay={0.35}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-sm font-semibold text-ink">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                  <span>DRAP & ISO 13485 Certified</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold text-ink">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                  <span>Validated Cold-Chain Logistics</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold text-ink">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                  <span>Factory-Trained Engineers</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold text-ink">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                  <span>24/7 Technical On-Call Support</span>
                </div>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.4}>
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Button
                  href="/about/leadership"
                  variant="primary"
                  size="md"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Our Leadership Team
                </Button>
                <Button
                  href="/about/distribution"
                  variant="outline"
                  size="md"
                >
                  Distribution Network
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right Animated Product Showcase: Block-Level 1-by-1 Stack (6 cols) */}
          <div className="lg:col-span-6 flex flex-col">
            <Reveal direction="left" delay={0.2} className="h-full flex-1">
              <div className="relative h-full rounded-[2rem] bg-gradient-to-br from-surface via-white to-primary/5 border border-slate-200/90 shadow-lg hover:shadow-xl hover:border-primary/30 transition-[box-shadow,border-color] duration-300 p-5 sm:p-7 overflow-hidden flex flex-col justify-between group">
                {/* Subtle clinical dots texture */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-dots-pattern opacity-35 pointer-events-none"
                />

                {/* Header Badge */}
                {/* <div className="relative z-10 flex items-center justify-between pb-3.5 mb-3.5 border-b border-slate-200/80">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary motion-safe:animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-primary font-heading">
                      Advanced Clinical &amp; Molecular Systems
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-secondary-dark bg-secondary/10 px-2.5 py-0.5 rounded-full border border-secondary/20">
                    Direct OEM Import
                  </span>
                </div> */}

                {/* Block-Level 1 by 1 Vertical Stack */}
                <div className="relative z-10 flex flex-col gap-3.5 flex-1 justify-between">
                  {/* Item 1: Randox RX Modena (RX 9000) */}
                  <Link
                    href="/products/rx-modena"
                    className="rounded-2xl bg-white border border-slate-200/85 hover:border-primary/50 hover:shadow-md active:scale-[0.99] transition-[border-color,box-shadow,transform] duration-200 p-3.5 sm:p-4 flex items-center gap-4 group/item flex-1"
                  >
                    <div className="relative w-24 sm:w-32 h-20 sm:h-24 shrink-0 rounded-xl bg-surface border border-slate-100 p-2 flex items-center justify-center overflow-hidden">
                      <Image
                        src="/images/products/rx-9000.png"
                        alt="Randox RX Modena (RX 9000) Automated Clinical Chemistry Analyzer"
                        fill
                        className="object-contain p-1 motion-safe:group-hover/item:scale-105 transition-transform duration-300 drop-shadow-sm"
                        sizes="(max-width: 640px) 100px, 140px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-[10px] sm:text-xs font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                          1,200 Tests / Hr
                        </span>
                        <span className="text-[11px] font-semibold text-muted group-hover/item:text-primary transition-colors inline-flex items-center gap-0.5">
                          View Specs
                          <ArrowRight className="w-3 h-3 group-hover/item:translate-x-0.5 transition-transform" />
                        </span>
                      </div>
                      <h4 className="text-sm sm:text-base font-bold font-heading text-ink group-hover/item:text-primary transition-colors truncate">
                        Randox RX Modena (RX 9000)
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                        800 Photometric + 400 ISE • Direct HbA1c Whole Blood
                      </p>
                    </div>
                  </Link>

                  {/* Item 2: Randox RX Imola (RX 4900) */}
                  <Link
                    href="/products/rx-imola"
                    className="rounded-2xl bg-white border border-slate-200/85 hover:border-primary/50 hover:shadow-md active:scale-[0.99] transition-[border-color,box-shadow,transform] duration-200 p-3.5 sm:p-4 flex items-center gap-4 group/item flex-1"
                  >
                    <div className="relative w-24 sm:w-32 h-20 sm:h-24 shrink-0 rounded-xl bg-surface border border-slate-100 p-2 flex items-center justify-center overflow-hidden">
                      <Image
                        src="/images/products/rx-imola.png"
                        alt="Randox RX Imola (RX 4900) Automated Clinical Chemistry Analyzer"
                        fill
                        className="object-contain p-1 motion-safe:group-hover/item:scale-105 transition-transform duration-300 drop-shadow-sm"
                        sizes="(max-width: 640px) 100px, 140px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-[10px] sm:text-xs font-bold text-secondary-dark bg-secondary/10 px-2.5 py-0.5 rounded-full">
                          400 + 240 ISE / Hr
                        </span>
                        <span className="text-[11px] font-semibold text-muted group-hover/item:text-primary transition-colors inline-flex items-center gap-0.5">
                          View Specs
                          <ArrowRight className="w-3 h-3 group-hover/item:translate-x-0.5 transition-transform" />
                        </span>
                      </div>
                      <h4 className="text-sm sm:text-base font-bold font-heading text-ink group-hover/item:text-primary transition-colors truncate">
                        Randox RX Imola (RX 4900)
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                        Rapid Benchtop Chemistry • 72 Permanent Pyrex Cuvettes
                      </p>
                    </div>
                  </Link>

                  {/* Item 3: Bosch Vivalytic */}
                  <Link
                    href="/products/bosch-vivalytic"
                    className="rounded-2xl bg-white border border-slate-200/85 hover:border-primary/50 hover:shadow-md active:scale-[0.99] transition-[border-color,box-shadow,transform] duration-200 p-3.5 sm:p-4 flex items-center gap-4 group/item flex-1"
                  >
                    <div className="relative w-24 sm:w-32 h-20 sm:h-24 shrink-0 rounded-xl bg-surface border border-slate-100 p-2 flex items-center justify-center overflow-hidden">
                      <Image
                        src="/images/products/bosch-vivalytic.jpeg"
                        alt="Bosch Vivalytic All-in-One Cartridge PCR Molecular Diagnostics"
                        fill
                        className="object-contain p-1 motion-safe:group-hover/item:scale-105 transition-transform duration-300 drop-shadow-sm"
                        sizes="(max-width: 640px) 100px, 140px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-[10px] sm:text-xs font-bold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200/50">
                          Closed Cartridge PCR
                        </span>
                        <span className="text-[11px] font-semibold text-muted group-hover/item:text-primary transition-colors inline-flex items-center gap-0.5">
                          View Specs
                          <ArrowRight className="w-3 h-3 group-hover/item:translate-x-0.5 transition-transform" />
                        </span>
                      </div>
                      <h4 className="text-sm sm:text-base font-bold font-heading text-ink group-hover/item:text-primary transition-colors truncate">
                        Bosch Vivalytic Molecular Analyzer
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                        All-in-One PCR &amp; Microarray • Multiplex Target Panels
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Animated Counter Strip */}
        <Reveal direction="up" delay={0.4}>
          <div className="mt-20 pt-10 border-t border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="flex flex-col items-center text-center p-6 rounded-2xl bg-surface hover:bg-white hover:shadow-md transition-colors duration-200 border border-slate-100"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-black font-heading text-ink">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
};

