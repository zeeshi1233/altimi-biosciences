"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, FlaskConical, Users, Building2, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/Button";

const stats = [
  { label: "Years of Excellence", value: 18, suffix: "+", icon: Award },
  { label: "Diagnostic Instruments", value: 450, suffix: "+", icon: FlaskConical },
  { label: "Global Brand Partners", value: 15, suffix: "+", icon: Building2 },
  { label: "Hospital & Lab Clients", value: 850, suffix: "+", icon: Users },
];

export const AboutSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-white">
      <Container>
        {/* Section Heading */}
        <Reveal direction="up">
          <SectionHeading
            badge="About Altimi Biosciences"
            title="We Are A Modern Research Expert Company"
            subtitle="Leading Pakistan's medical diagnostic sector through world-renowned automated instrumentation and specialized clinical supplies."
            align="center"
            className="mb-14"
          />
        </Reveal>

        {/* Narrative & Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Text Narrative (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
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
                From routine chemistries and direct HbA1c assays to specialized cardiac monitoring, consumables, and safety catheters, we support healthcare workflows across Pakistan with calibrated accuracy and prompt technical assistance.
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

          {/* Right Two Image Cards (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card 1: Lab Machines */}
            <Reveal direction="left" delay={0.2}>
              <div className="group rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                  <Image
                    src="/images/about/lab-machines.png"
                    alt="Lab Machines – Advanced laboratory equipment"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                </div>
                <div className="p-5 sm:p-6 space-y-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary/15 text-secondary-dark border border-secondary/25">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    Clinical Technology
                  </span>
                  <h4 className="text-base sm:text-lg font-bold font-heading text-ink group-hover:text-primary transition-colors">
                    Lab Machines
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Advanced laboratory equipment engineered for ultra-high throughput and continuous automated chemistry testing.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Card 2: Research Center */}
            <Reveal direction="right" delay={0.3}>
              <div className="group rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between sm:translate-y-8">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                  <Image
                    src="/images/about/research-center.png"
                    alt="Research Center – Precision testing equipment"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                </div>
                <div className="p-5 sm:p-6 space-y-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Biomedical Infrastructure
                  </span>
                  <h4 className="text-base sm:text-lg font-bold font-heading text-ink group-hover:text-primary transition-colors">
                    Research Center
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Precision testing equipment, calibration facilities, and biomedical quality assurance operations.
                  </p>
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

