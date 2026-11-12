"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Microscope, Package, Cpu, FlaskConical, Pill, ArrowRight, Activity } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { TiltCard } from "@/components/animations/TiltCard";
import { Reveal } from "@/components/animations/Reveal";
import { motion } from "framer-motion";
interface ExpertiseItem {
  id: string;
  title: string;
  categoryName: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  link: string;
  ctaLabel: string;
  badge: string;
  gradient: string;
}

const expertiseList: ExpertiseItem[] = [
  {
    id: "clinical-analyzers",
    title: "Clinical Chemistry Analyzer",
    categoryName: "Chemistry & Molecular Systems",
    badge: "DRAP Registered",
    description:
      "Automated Randox clinical chemistry analyzers and Bosch Vivalytic closed-cartridge molecular diagnostics built for high-throughput hospital laboratories.",
    icon: Microscope,
    features: [
      "Randox RX 4900",
      "RX 9000 Chemistry Analyzers",
      "Bosch Vivalytic Molecular Analyzer",
    ],
    link: "/products/randox-rx-series",
    ctaLabel: "Explore Clinical Analyzers",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
  },
  {
    id: "point-of-care-testing",
    title: "Point Of Care Testing",
    categoryName: "",
    badge: "Portable POCT",
    description:
      "A compact, portable point-of-care (POCT) analyzer combining photometric and turbidimetric measurement technologies for rapid diagnostic testing.",
    icon: Activity,
    features: [
      "Photometric & turbidimetric measurement technologies",
      "Intuitive touchscreen interface & automated processing",
      "Broad assay portfolio for clinics & laboratories",
    ],
    link: "/products/clinical-chemistry-analyzer/point-of-care-testing",
    ctaLabel: "Explore QuikRead go® POCT",
    gradient: "from-sky-500/20 via-blue-500/10 to-transparent",
  },
  {
    id: "diagnostic-kits",
    title: "Diagnostic Kits",
    categoryName: "Human Diagnostics (Rapid Test)",
    badge: "DRAP Registered",
    description:
      "Rapid quantitative human diagnostic test kits by Aidian for fast, accurate CRP and HbA1c measurement in outpatient clinics and labs.",
    icon: FlaskConical,
    features: [
      "Aidian QuikRead go® easy CRP & HbA1c Kits",
      "QuikRead go® easy CRP Assay",
      "QuikRead go® HbA1c Test Kit",
    ],
    link: "/products/point-of-care-testing",
    ctaLabel: "Explore Diagnostic Kits",
    gradient: "from-teal-500/20 via-emerald-500/10 to-transparent",
  },
  {
    id: "medical-devices",
    title: "Cardiac & BP Monitoring",
    categoryName: "Medical Devices",
    badge: "Digital Precision",
    description:
      "Wearable Bittium ECG telemetry monitors, clinical Holter software, and Japanese A&D 24-hour ambulatory blood pressure monitoring systems.",
    icon: Cpu,
    features: [
      "Bittium Faros 360 & Faros 180 (ECG Monitor)",
      "Bittium HolterPlus & Cardiac Navigator",
      "A&D TM-2440 & TM-2441 Ambulatory BP Monitor",
    ],
    link: "/products/faros-360-ecg",
    ctaLabel: "View Cardiac & BP Devices",
    gradient: "from-indigo-500/20 via-blue-500/10 to-transparent",
  },
  {
    id: "hospital-supplies",
    title: "Medical Consumables & Supplies",
    categoryName: "Consumables & Sterile Protection",
    badge: "Clinical Hygiene",
    description:
      "Essential registered hospital disposables including Hongde 70% isopropyl alcohol pads, dignity underpads, and powder-free sterile latex surgical gloves.",
    icon: Package,
    features: [
      "Anji Hongde 70% Alcohol Pads",
      "Anji Hongde Dignity Underpads",
      "Sterile Latex Surgical Gloves Powder Free",
    ],
    link: "/products/sterile-surgical-gloves",
    ctaLabel: "View Medical Consumables",
    gradient: "from-teal-500/20 via-cyan-500/10 to-transparent",
  },
  {
    id: "medicine-drugs",
    title: "Biosimilar Drugs",
    categoryName: "Biopharmaceuticals",
    badge: "Cold-Chain Biologics",
    description:
      "Targeted monoclonal antibody biosimilars manufactured by Hetero Biopharma Limited and distributed across Pakistan under validated 2°C to 8°C cold chain.",
    icon: Pill,
    features: [
      "Pamera 40 (Adalimumab)",
      "Bevaas 100 (Bevacizumab)",
      "Bevaas 400/16 (Bevacizumab)",
    ],
    link: "/products/hetero-biosimilar-drugs",
    ctaLabel: "View Biosimilar Drugs",
    gradient: "from-rose-500/20 via-orange-500/10 to-transparent",
  },
];

const [clinicalAnalyzers, poctDivision, ...secondaryDivisions] = expertiseList;

export const ExpertiseSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-ink
">
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-32 w-96 h-96 bg-primary rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-secondary rounded-full blur-[100px] pointer-events-none"
      />

      <div className="absolute inset-0 bg-dots-pattern opacity-50 pointer-events-none" />

      <Container>
        {/* Editorial Split Header */}
        <Reveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-slate-200/80 pb-8">
            <div className="space-y-3 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-white border border-primary/20">
                <Activity className="w-3.5 h-3.5 text-white" />
                Comprehensive Healthcare & Diagnostic Solutions
              </span>
              <h2 className="text-3xl relative z-40 sm:text-4xl lg:text-5xl font-black font-heading text-white tracking-tight leading-tight">
                Specialized Diagnostic & Clinical Divisions
              </h2>
            </div>
            <p className="text-sm sm:text-base text-white max-w-md leading-relaxed">
              We provide end-to-end distribution, scientific validation, and equipment lifecycle support across 6 key medical domains in Pakistan.
            </p>
          </div>
        </Reveal>

        {/* Architectural Bento Grid with Clinical Hierarchy */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* 1. Flagship Lead: Clinical Analyzers (6 cols) */}
          <div className="md:col-span-1 lg:col-span-6">
            <Reveal direction="up" delay={0.1} className="h-full">
              <TiltCard className="h-full">
                <div className="h-full flex flex-col justify-between p-7 sm:p-9 rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-xl hover:border-primary/40 transition-[box-shadow,border-color] duration-200 relative overflow-hidden group">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center transition-colors duration-200 group-hover:bg-primary group-hover:text-white shadow-sm">
                        <clinicalAnalyzers.icon className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-semibold text-secondary-dark bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20">
                        {clinicalAnalyzers.badge}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center mb-6">
                      <div className="sm:col-span-7">
                        <span className="text-xs font-semibold text-primary">
                          {clinicalAnalyzers.categoryName}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-black font-heading text-ink mt-1 mb-2.5 group-hover:text-primary transition-colors">
                          {clinicalAnalyzers.title}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {clinicalAnalyzers.description}
                        </p>
                      </div>

                      <div className="sm:col-span-5 rounded-2xl bg-gradient-to-br from-surface via-white to-primary/5 border border-slate-200/80 p-2.5 grid grid-cols-2 gap-2">
                        <div className="flex flex-col items-center rounded-xl bg-white border border-slate-200/70 p-2 shadow-sm">
                          <div className="relative w-full aspect-square">
                            <Image
                              src="/images/products/rx-9000.png"
                              alt="Randox RX 9000 (RX Modena) Chemistry Analyzer"
                              fill
                              className="object-contain p-1"
                              sizes="(max-width: 768px) 30vw, 100px"
                            />
                          </div>
                          <span className="mt-1 text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                            RX 9000
                          </span>
                        </div>
                        <div className="flex flex-col items-center rounded-xl bg-white border border-slate-200/70 p-2 shadow-sm">
                          <div className="relative w-full aspect-square">
                            <Image
                              src="/images/products/rx-imola.png"
                              alt="Randox RX 4900 (RX Imola) Chemistry Analyzer"
                              fill
                              className="object-contain p-1"
                              sizes="(max-width: 768px) 30vw, 100px"
                            />
                          </div>
                          <span className="mt-1 text-[10px] font-bold text-secondary-dark bg-secondary/10 px-2 py-0.5 rounded-full">
                            RX 4900
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-slate-100 pt-5 mb-6">
                      {clinicalAnalyzers.features.map((f, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700">
                          <span className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={clinicalAnalyzers.link}
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:text-primary-dark transition-colors pt-2"
                  >
                    <span>{clinicalAnalyzers.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4 motion-safe:transition-transform motion-safe:group-hover:translate-x-1" />
                  </Link>
                </div>
              </TiltCard>
            </Reveal>
          </div>

          {/* 2. Featured POCT Division: Point Of Care Testing — QuikRead go by Aidian (6 cols) */}
          <div className="md:col-span-1 lg:col-span-6">
            <Reveal direction="up" delay={0.15} className="h-full">
              <TiltCard className="h-full">
                <div className="h-full flex flex-col justify-between p-7 sm:p-9 rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-xl hover:border-primary/40 transition-[box-shadow,border-color] duration-200 relative overflow-hidden group">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center transition-colors duration-200 group-hover:bg-primary group-hover:text-white shadow-sm">
                        <poctDivision.icon className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-semibold text-secondary-dark bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20">
                        {poctDivision.badge}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center mb-6">
                      <div className="sm:col-span-7">
                        <span className="text-xs font-semibold text-primary">
                          {poctDivision.categoryName}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-black font-heading text-ink mt-1 mb-2.5 group-hover:text-primary transition-colors">
                          {poctDivision.title}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {poctDivision.description}
                        </p>
                      </div>

                      <div className="sm:col-span-5 relative aspect-[4/3] rounded-2xl bg-surface border border-slate-200/80 p-3 flex items-center justify-center overflow-hidden">
                        <Image
                          src="/images/products/quikread-go.webp"
                          alt="QuikRead go Instrument by Aidian"
                          fill
                          className="object-contain p-2"
                          sizes="(max-width: 768px) 100vw, 200px"
                        />
                      </div>
                    </div>

                    <div className="space-y-2 border-t border-slate-100 pt-5 mb-6">
                      {poctDivision.features.map((f, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700">
                          <span className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={poctDivision.link}
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:text-primary-dark transition-colors pt-2"
                  >
                    <span>{poctDivision.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4 motion-safe:transition-transform motion-safe:group-hover:translate-x-1" />
                  </Link>
                </div>
              </TiltCard>
            </Reveal>
          </div>

          {/* 3-6. Secondary Clinical Divisions (Diagnostic Kits, Cardiac & BP, Consumables, Biosimilar Drugs) */}
          {secondaryDivisions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className="md:col-span-1 lg:col-span-3">
                <Reveal direction="up" delay={0.2 + idx * 0.05} className="h-full">
                  <TiltCard className="h-full">
                    <div className="h-full flex flex-col justify-between p-6 rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-xl hover:border-primary/40 transition-[box-shadow,border-color] duration-200 relative overflow-hidden group">
                      <div>
                        <div className="flex items-center justify-between mb-5">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center transition-colors duration-200 group-hover:bg-primary group-hover:text-white shadow-sm">
                            <Icon className="w-6 h-6" />
                          </div>
                          <span className="text-xs font-medium text-secondary-dark bg-secondary/10 px-2.5 py-0.5 rounded-full border border-secondary/20">
                            {item.badge}
                          </span>
                        </div>

                        <span className="text-xs font-medium text-primary">
                          {item.categoryName}
                        </span>
                        <h3 className="text-lg font-bold font-heading text-ink mt-1 mb-2.5 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>

                        <p className="text-xs text-muted leading-relaxed mb-5">
                          {item.description}
                        </p>

                        <div className="space-y-2 border-t border-slate-100 pt-4 mb-5">
                          {item.features.map((f, fIdx) => (
                            <div key={fIdx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                              <span>{f}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Link
                        href={item.link}
                        className="inline-flex items-center gap-2 text-xs font-bold text-primary group-hover:text-secondary-dark transition-colors"
                      >
                        <span>{item.ctaLabel}</span>
                        <ArrowRight className="w-3.5 h-3.5 motion-safe:transition-transform motion-safe:group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </TiltCard>
                </Reveal>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

