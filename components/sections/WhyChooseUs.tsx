"use client";

import React from "react";
import { Target, Zap, ShieldCheck, Headphones, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { Counter } from "@/components/ui/Counter";

const pillars = [
  {
    icon: Target,
    title: "Uncompromising Accuracy",
    subtitle: "Analytical Excellence",
    description:
      "Our analyzers deliver CV < 1% reproducibility, compliant with international CLIA, ISO 15189, and CAP proficiency standards.",
    stats: "99.8%",
    statLabel: "Assay Concordance",
    highlights: ["Direct HbA1c testing", "Liquid-stable Randox reagents", "Automatic clot detection"],
  },
  {
    icon: Zap,
    title: "High Throughput & Speed",
    subtitle: "Rapid Turnaround",
    description:
      "Processing up to 1,200 tests per hour on the RX Modena with rapid STAT interrupt capability for urgent ICU and trauma samples.",
    stats: "1,200",
    statLabel: "Tests Per Hour",
    highlights: ["Continuous sample loading", "Zero pause for reagents", "STAT emergency priority"],
  },
  {
    icon: ShieldCheck,
    title: "Unrivaled Reliability",
    subtitle: "Strict Cold Chain",
    description:
      "Nationwide 2°C–8°C validated logistics network with 24/7 wireless temperature logging and dual-redundancy power reserves.",
    stats: "100%",
    statLabel: "Cold-Chain Monitored",
    highlights: ["DRAP approved imports", "Validated thermal packaging", "IoT live GPS telemetry"],
  },
  {
    icon: Headphones,
    title: "24/7 Biomedical Support",
    subtitle: "Factory Trained Engineers",
    description:
      "Dedicated certified field engineers in Karachi, Lahore, and Islamabad ensuring < 4-hour breakdown turnaround and continuous uptime.",
    stats: "< 4h",
    statLabel: "Rapid Response SLA",
    highlights: ["Local genuine spare parts", "Annual Maintenance Contracts", "Onsite lab training"],
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-gradient-to-b from-surface via-slate-50 to-surface">
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <Container>
        <Reveal direction="up">
          <SectionHeading
            badge="Why Healthcare Leaders Choose Us"
            title="Engineered for Precision, Backed by Commitment"
            subtitle="Diagnostic accuracy, swift logistics, and dependable engineering support powering Pakistan's leading healthcare facilities."
            align="center"
            className="mb-16"
          />
        </Reveal>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={idx} direction="up" delay={idx * 0.1}>
                <div className="h-full glass-card p-6 sm:p-7 rounded-3xl bg-white/90 border border-slate-200/90 shadow-lg flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group">
                  <div>
                    {/* Top Icon & Metric */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-13 h-13 w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-black font-heading text-ink">
                          {pillar.stats}
                        </div>
                        <div className="text-[10px] uppercase font-bold text-muted">
                          {pillar.statLabel}
                        </div>
                      </div>
                    </div>

                    <div className="text-[11px] font-bold text-secondary-dark uppercase tracking-wider">
                      {pillar.subtitle}
                    </div>
                    <h3 className="text-lg font-bold font-heading text-ink mt-1 mb-2.5 group-hover:text-primary transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed mb-5">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="pt-4 border-t border-slate-100 space-y-2">
                    {pillar.highlights.map((h, hIdx) => (
                      <div
                        key={hIdx}
                        className="flex items-center gap-2 text-xs font-semibold text-slate-700"
                      >
                        <Check className="w-3.5 h-3.5 text-secondary shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

