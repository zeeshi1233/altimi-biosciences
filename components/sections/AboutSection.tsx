"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Award, FlaskConical, Users, Building2, CheckCircle2, Activity, Gauge } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/Button";

const stats = [
  { label: "Years of Excellence", value: 8, suffix: "+", icon: Award },
  { label: "Diagnostic Instruments", value: 100, suffix: "+", icon: FlaskConical },
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

          {/* Right Animated Product Showcase: Randox RX Modena (6 cols) */}
          <div className="lg:col-span-6">
            <Reveal direction="left" delay={0.2}>
              <div className="relative rounded-[2rem] bg-gradient-to-br from-surface via-white to-primary/5 border border-slate-200/90 shadow-lg hover:shadow-xl hover:border-primary/30 transition-[box-shadow,border-color] duration-300 p-6 sm:p-8 overflow-hidden group">
                {/* Subtle clinical dots texture */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-dots-pattern opacity-35 pointer-events-none"
                />

                {/* Top Meta Header */}
                <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 mb-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-semibold text-ink">
                    <span className="w-2 h-2 rounded-full bg-secondary motion-safe:animate-pulse" />
                    <span>Randox Laboratories • Flagship System</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold">
                    <Gauge className="w-3.5 h-3.5" />
                    1,200 Tests / Hr
                  </span>
                </div>

                {/* Animated Floating Product Stage */}
                <div className="relative z-10 my-2 rounded-2xl bg-gradient-to-b from-white to-surface border border-slate-200/80 p-4 sm:p-6 flex items-center justify-center overflow-hidden">
                  <motion.div
                    animate={prefersReduced ? undefined : { y: [0, -7, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-full aspect-[16/10]"
                  >
                    <Image
                      src="/images/products/rx-9000.png"
                      alt="Randox RX Modena (RX 9000) Automated Clinical Chemistry Analyzer"
                      fill
                      className="object-contain drop-shadow-xl"
                      sizes="(max-width: 1024px) 100vw, 560px"
                    />
                  </motion.div>
                </div>

                {/* Product Summary & Key Metrics */}
                <div className="relative z-10 mt-6 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-xs font-semibold text-secondary-dark">
                        Automated Chemistry Analyzer
                      </span>
                      <h4 className="text-xl sm:text-2xl font-black font-heading text-ink mt-0.5">
                        Randox RX Modena (RX 9000)
                      </h4>
                    </div>
                    <Link
                      href="/products/randox-rx-series"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary-dark active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 transition-[background-color,transform] shrink-0 self-start sm:self-center shadow-sm"
                    >
                      <span>View Analyzer</span>
                      <ArrowRight className="w-3.5 h-3.5 motion-safe:transition-transform motion-safe:group-hover:translate-x-1" />
                    </Link>
                  </div>

                  {/* Quick Spec Chips */}
                  <div className="grid grid-cols-3 gap-2.5 pt-3 border-t border-slate-200/80">
                    <div className="rounded-xl bg-white/90 border border-slate-200/80 p-2.5 text-center">
                      <div className="text-xs sm:text-sm font-black font-heading text-primary">800/hr</div>
                      <div className="text-[11px] font-medium text-muted">Photometric Rate</div>
                    </div>
                    <div className="rounded-xl bg-white/90 border border-slate-200/80 p-2.5 text-center">
                      <div className="text-xs sm:text-sm font-black font-heading text-ink flex items-center justify-center gap-1">
                        <Activity className="w-3.5 h-3.5 text-secondary shrink-0" />
                        <span>Direct</span>
                      </div>
                      <div className="text-[11px] font-medium text-muted">HbA1c Testing</div>
                    </div>
                    <div className="rounded-xl bg-white/90 border border-slate-200/80 p-2.5 text-center">
                      <div className="text-xs sm:text-sm font-black font-heading text-ink">150 Pos</div>
                      <div className="text-[11px] font-medium text-muted">STAT Continuous</div>
                    </div>
                  </div>
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

