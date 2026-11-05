"use client";

import React from "react";
import Link from "next/link";
import { Syringe, Package, Cpu, FlaskConical, Pill, ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/animations/TiltCard";
import { Reveal } from "@/components/animations/Reveal";

interface ExpertiseItem {
  id: string;
  title: string;
  categoryName: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  link: string;
  badge: string;
  gradient: string;
}

const expertiseList: ExpertiseItem[] = [
  {
    id: "vaccines",
    title: "Vaccines & Biologicals",
    categoryName: "Cold Chain Storage",
    badge: "2°C to 8°C Certified",
    description:
      "Strict cold-chain logistics for human vaccines, biological serums, and prophylactic immunization programs across healthcare systems.",
    icon: Syringe,
    features: [
      "IoT temperature-monitored distribution",
      "WHO-prequalified vaccine sourcing",
      "DRAP federal import compliance",
    ],
    link: "/about/distribution",
    gradient: "from-blue-500/20 via-teal-500/10 to-transparent",
  },
  {
    id: "hospital-supplies",
    title: "Hospital Supplies",
    categoryName: "Consumables & PPE",
    badge: "Clinical Hygiene",
    description:
      "Comprehensive daily hospital necessities including Greiner CLiP Neo safety catheters, dignity sheets, prep pads, and surgical disposables.",
    icon: Package,
    features: [
      "Greiner safety needle systems",
      "70% IPA antiseptic prep pads",
      "Ultra-absorbent underpads",
    ],
    link: "/products?category=hospital-supplies",
    gradient: "from-teal-500/20 via-cyan-500/10 to-transparent",
  },
  {
    id: "medical-devices",
    title: "Medical Devices",
    categoryName: "Telehealth & Monitoring",
    badge: "Digital Precision",
    description:
      "Wearable ECG monitors, telecardiology cloud infrastructure, and point-of-care patient diagnostics with real-time biometric telemetry.",
    icon: Cpu,
    features: [
      "Bittium Faros 360 ECG (18g)",
      "Bittium HolterPlus cloud monitoring",
      "Bedside telemetry integration",
    ],
    link: "/products?category=medical-devices",
    gradient: "from-indigo-500/20 via-blue-500/10 to-transparent",
  },
  {
    id: "diagnostic-kits",
    title: "Diagnostic Kits",
    categoryName: "Clinical Assays",
    badge: "High Specificity",
    description:
      "Reagent kits and multi-parameter assay panels for routine chemistry, cardiac enzymes, diabetes HbA1c, and therapeutic drugs.",
    icon: FlaskConical,
    features: [
      "Randox direct HbA1c reagents",
      "Lipids and cardiac biomarkers",
      "Liquid-stable calibration standards",
    ],
    link: "/products?category=clinical-chemistry-analyzer",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
  },
  {
    id: "medicine-drugs",
    title: "Medicine / Drugs",
    categoryName: "Surgical & Therapeutic",
    badge: "Hospital Formulary",
    description:
      "Essential hospital pharmaceuticals, specialized surgical tissue adhesives (Histoacryl), and high-demand hospital formulary agents.",
    icon: Pill,
    features: [
      "B. Braun Histoacryl tissue adhesive",
      "Sutureless wound closure in 60s",
      "Hospital critical injectables",
    ],
    link: "/products?category=medicine-drugs",
    gradient: "from-rose-500/20 via-orange-500/10 to-transparent",
  },
];

export const ExpertiseSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-surface">
      <div className="absolute inset-0 bg-dots-pattern opacity-50 pointer-events-none" />

      <Container>
        <Reveal direction="up">
          <SectionHeading
            badge="Our Core Expertise"
            badgeIcon={<Sparkles className="w-3.5 h-3.5" />}
            title="Comprehensive Healthcare & Diagnostic Solutions"
            subtitle="We provide end-to-end distribution, scientific validation, and equipment lifecycle support across 5 key medical domains."
            align="center"
            className="mb-16"
          />
        </Reveal>

        {/* 5 Cards Grid: 3 on top row, 2 centered on bottom row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {expertiseList.slice(0, 3).map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.id} direction="up" delay={idx * 0.1}>
                <TiltCard className="h-full">
                  <div className="h-full flex flex-col justify-between p-7 rounded-3xl bg-white border border-slate-200/80 shadow-lg shadow-primary/5 hover:border-secondary/40 transition-all duration-300 relative overflow-hidden group">
                    {/* Top gradient glow */}
                    <div
                      className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl ${item.gradient} rounded-bl-full pointer-events-none transition-transform duration-500 group-hover:scale-125`}
                    />

                    <div>
                      {/* Icon & Badge */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110 shadow-sm">
                          <Icon className="w-7 h-7" />
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-secondary-dark bg-secondary/10 px-2.5 py-1 rounded-full border border-secondary/20">
                          {item.badge}
                        </span>
                      </div>

                      <span className="text-xs font-semibold text-muted uppercase tracking-wider">
                        {item.categoryName}
                      </span>
                      <h3 className="text-xl font-bold font-heading text-ink mt-1 mb-3 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-sm text-muted leading-relaxed mb-5">
                        {item.description}
                      </p>

                      {/* Feature check list */}
                      <ul className="space-y-2 border-t border-slate-100 pt-4 mb-6">
                        {item.features.map((f, fIdx) => (
                          <li
                            key={fIdx}
                            className="flex items-center text-xs font-medium text-slate-700"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-2 shrink-0" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={item.link}
                      className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:text-secondary-dark transition-colors pt-2"
                    >
                      <span>Explore Category</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom row: 2 centered cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-6 lg:mt-8 max-w-4xl mx-auto">
          {expertiseList.slice(3, 5).map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.id} direction="up" delay={0.3 + idx * 0.1}>
                <TiltCard className="h-full">
                  <div className="h-full flex flex-col justify-between p-7 rounded-3xl bg-white border border-slate-200/80 shadow-lg shadow-primary/5 hover:border-secondary/40 transition-all duration-300 relative overflow-hidden group">
                    <div
                      className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl ${item.gradient} rounded-bl-full pointer-events-none transition-transform duration-500 group-hover:scale-125`}
                    />

                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110 shadow-sm">
                          <Icon className="w-7 h-7" />
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-secondary-dark bg-secondary/10 px-2.5 py-1 rounded-full border border-secondary/20">
                          {item.badge}
                        </span>
                      </div>

                      <span className="text-xs font-semibold text-muted uppercase tracking-wider">
                        {item.categoryName}
                      </span>
                      <h3 className="text-xl font-bold font-heading text-ink mt-1 mb-3 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-sm text-muted leading-relaxed mb-5">
                        {item.description}
                      </p>

                      <ul className="space-y-2 border-t border-slate-100 pt-4 mb-6">
                        {item.features.map((f, fIdx) => (
                          <li
                            key={fIdx}
                            className="flex items-center text-xs font-medium text-slate-700"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-2 shrink-0" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={item.link}
                      className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:text-secondary-dark transition-colors pt-2"
                    >
                      <span>Explore Category</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

