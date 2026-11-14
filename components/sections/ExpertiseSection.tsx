"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Microscope, Package, Cpu, FlaskConical, Pill, ArrowRight, Activity, ChevronLeft, ChevronRight } from "lucide-react";
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
  image?: string;
}

const expertiseList: ExpertiseItem[] = [
  {
    id: "clinical-analyzers",
    title: "Clinical Chemistry & Molecular Analyzers",
    categoryName: "Randox Laboratories (UK) & Bosch (Germany)",
    badge: "DRAP Registered",
    description:
      "Automated high-throughput clinical chemistry analyzers engineered by Randox Laboratories (UK) and all-in-one cartridge PCR molecular diagnostics by Bosch for reference laboratories across Pakistan.",
    icon: Microscope,
    features: [
      "Randox RX modena (RX 9000) — 800 photometric, 1,200 tests/hr incl. ISE",
      "Bosch Vivalytic — All-in-One Closed Cartridge PCR Molecular Diagnostics",
      "Randox RX imola (RX 4900) — 400 photometric + 240 ISE tests/hr",
      "Direct HbA1c testing without manual pre-treatment & consolidated panels",
    ],
    link: "/products/randox-rx-series",
    ctaLabel: "Explore Analyzers",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
  },
  {
    id: "holter-monitoring",
    title: "Holter Monitoring Systems",
    categoryName: "Bittium Corporation (Finland)",
    badge: "Digital Precision",
    description:
      "Wearable Bittium FAROS ECG sensors paired with Cardiac Navigator analysis software for continuous ECG recording and arrhythmia monitoring.",
    icon: Cpu,
    features: [
      "Bittium Faros 360 (up to 3 ECG channels • 18g waterproof)",
      "Bittium Faros 180 (single-channel ECG • IP67 waterproof)",
      "Bittium Cardiac Navigator™ arrhythmia analysis workstation",
      "Bittium HolterPlus™ secure cloud remote monitoring",
    ],
    link: "/products/faros-360-ecg",
    ctaLabel: "Explore Holter Systems",
    gradient: "from-indigo-500/20 via-blue-500/10 to-transparent",
    image: "/images/products/bittium-360-180.png",
  },
  {
    id: "point-of-care-testing",
    title: "Point-of-Care Testing (POCT)",
    categoryName: "Aidian Oy (Finland)",
    badge: "Portable POCT",
    description:
      "Aidian QuikRead go® portable POCT instrument paired with ready-to-use easy CRP and IFCC-standardized HbA1c rapid diagnostic test kits.",
    icon: Activity,
    features: [
      "QuikRead go® Instrument with dual photometric & turbidimetric optics",
      "QuikRead go® easy CRP kit (quantitative CRP in 2 minutes)",
      "QuikRead go® HbA1c kit (IFCC & NGSP standardized monitoring)",
      "Touchscreen UI with step-by-step guidance & LIS connectivity",
    ],
    link: "/products/point-of-care-testing",
    ctaLabel: "Explore QuikRead go® POCT",
    gradient: "from-teal-500/20 via-emerald-500/10 to-transparent",
    image: "/images/products/quikread-go.webp",
  },
  {
    id: "bp-monitoring",
    title: "Ambulatory Blood Pressure Monitoring",
    categoryName: "A&D Medical (Japan)",
    badge: "Clinical ABPM",
    description:
      "Japanese-engineered A&D TM-2440 and TM-2441 24-hour ambulatory blood pressure monitors delivering clinically validated hypertension profiling.",
    icon: Activity,
    features: [
      "A&D TM-2440 compact lightweight 24-hour recorder",
      "A&D TM-2441 multi-parameter monitor with activity sensors",
      "Quiet cuff inflation for undisturbed nocturnal dipping evaluation",
      "Dedicated PC clinical analysis & circadian reporting software",
    ],
    link: "/products/and-abpm-monitor",
    ctaLabel: "Explore BP Monitors",
    gradient: "from-indigo-500/20 via-blue-500/10 to-transparent",
    image: "/images/products/tm-2441.png",
  },
  {
    id: "hospital-supplies",
    title: "Hospital Consumables & Supplies",
    categoryName: "Consumables & Sterile Protection",
    badge: "Clinical Hygiene",
    description:
      "Essential registered hospital disposables including Anji Hongde 70% isopropyl alcohol prep pads, dignity underpads, and sterile latex surgical gloves.",
    icon: Package,
    features: [
      "Anji Hongde 70% Isopropyl Alcohol Prep Pads",
      "Anji Hongde Multi-Layer Disposable Dignity Underpads",
      "Sterile Latex Surgical Gloves Powder Free (Gamma Sterilized)",
    ],
    link: "/products/sterile-surgical-gloves",
    ctaLabel: "View Medical Consumables",
    gradient: "from-teal-500/20 via-cyan-500/10 to-transparent",
    image: "/images/products/alcohol-pads.png",
  },
  {
    id: "medicine-drugs",
    title: "Medicines & Biosimilars",
    categoryName: "Hetero Biopharma Limited",
    badge: "Cold-Chain Biologics",
    description:
      "Targeted monoclonal antibody biosimilars manufactured by Hetero Biopharma Limited and distributed across Pakistan under validated 2°C to 8°C cold chain.",
    icon: Pill,
    features: [
      "Pamera 40 (Adalimumab 40mg/0.8ml Prefilled Syringe)",
      "Bevaas 100 (Bevacizumab 100mg/4ml IV Infusion Vial)",
      "Bevaas 400/16 (Bevacizumab 400mg/16ml IV Infusion Vial)",
    ],
    link: "/products/hetero-biosimilar-drugs",
    ctaLabel: "View Medicines",
    gradient: "from-rose-500/20 via-orange-500/10 to-transparent",
    image: "/images/products/pamera-40.png",
  },
];

const [clinicalAnalyzers, holterMonitoring, ...secondaryDivisions] = expertiseList;

export const ExpertiseSection: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const updateScrollButtons = useCallback(() => {
    const el = sliderRef.current;
    if (!el) return;
    setCanScrollPrev(el.scrollLeft > 4);
    setCanScrollNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateScrollButtons();
    window.addEventListener("resize", updateScrollButtons);
    return () => window.removeEventListener("resize", updateScrollButtons);
  }, [updateScrollButtons]);

  const scrollSlider = (direction: "prev" | "next") => {
    const el = sliderRef.current;
    if (!el) return;
    const firstCard = el.firstElementChild as HTMLElement | null;
    const step = firstCard ? firstCard.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({
      left: direction === "next" ? step : -step,
      behavior: "smooth",
    });
  };

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
          {/* 1. Flagship Lead: Randox Clinical Chemistry Analyzers (6 cols) */}
          <div className="md:col-span-1 lg:col-span-6">
            <Reveal direction="up" delay={0.1} className="h-full">
              <TiltCard className="h-full">
                <div className="h-full flex flex-col justify-between p-7 sm:p-9 rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-xl hover:border-primary/40 transition-[box-shadow,border-color] duration-200 relative overflow-hidden group">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center transition-colors duration-200 group-hover:bg-primary group-hover:text-white shadow-sm">
                        <clinicalAnalyzers.icon className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-semibold text-secondary-dark bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20">
                        {clinicalAnalyzers.badge}
                      </span>
                    </div>

                    <div className="mb-4">
                      <span className="text-xs font-bold text-primary tracking-wide uppercase">
                        {clinicalAnalyzers.categoryName}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black font-heading text-ink mt-1 mb-2.5 group-hover:text-primary transition-colors">
                        {clinicalAnalyzers.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-4">
                        {clinicalAnalyzers.description}
                      </p>
                    </div>

                    {/* Maximized Product Images: Randox RX modena, Bosch Vivalytic, RX imola */}
                    <div className="rounded-2xl bg-gradient-to-br from-surface via-white to-primary/5 border border-slate-200/80 p-3 grid grid-cols-3 gap-2 sm:gap-3 mb-5 shadow-inner">
                      <div className="flex flex-col items-center rounded-xl bg-white border border-slate-200/80 p-2 sm:p-2.5 shadow-sm hover:border-primary/40 transition-colors">
                        <div className="relative w-full h-24 sm:h-32">
                          <Image
                            src="/images/products/rx-9000.png"
                            alt="Randox RX modena (RX 9000) High-Throughput Chemistry Analyzer"
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 33vw, 160px"
                          />
                        </div>
                        <span className="mt-2 text-[11px] sm:text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full text-center truncate max-w-full">
                          RX modena (RX 9000)
                        </span>
                        <span className="text-[10px] text-slate-500 font-semibold mt-0.5 text-center hidden sm:block">
                          1,200 tests/hr incl. ISE
                        </span>
                      </div>

                      <div className="flex flex-col items-center rounded-xl bg-white border border-slate-200/80 p-2 sm:p-2.5 shadow-sm hover:border-primary/40 transition-colors">
                        <div className="relative w-full h-24 sm:h-32">
                          <Image
                            src="/images/products/bosch-vivalytic.jpeg"
                            alt="Bosch Vivalytic All-in-One Cartridge PCR Molecular Diagnostics"
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 33vw, 160px"
                          />
                        </div>
                        <span className="mt-2 text-[11px] sm:text-xs font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-full text-center truncate max-w-full">
                          Bosch Vivalytic
                        </span>
                        <span className="text-[10px] text-slate-500 font-semibold mt-0.5 text-center hidden sm:block">
                          All-in-One PCR Platform
                        </span>
                      </div>

                      <div className="flex flex-col items-center rounded-xl bg-white border border-slate-200/80 p-2 sm:p-2.5 shadow-sm hover:border-primary/40 transition-colors">
                        <div className="relative w-full h-24 sm:h-32">
                          <Image
                            src="/images/products/rx-imola.png"
                            alt="Randox RX imola (RX 4900) Benchtop Chemistry Analyzer"
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 33vw, 160px"
                          />
                        </div>
                        <span className="mt-2 text-[11px] sm:text-xs font-bold text-secondary-dark bg-secondary/10 px-2 py-0.5 rounded-full text-center truncate max-w-full">
                          RX imola (RX 4900)
                        </span>
                        <span className="text-[10px] text-slate-500 font-semibold mt-0.5 text-center hidden sm:block">
                          400 photometric + 240 ISE
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 border-t border-slate-100 pt-4 mb-5">
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

          {/* 2. Position 2 (Card 3 in Divisions): Bittium Holter Monitoring Systems (6 cols) */}
          <div className="md:col-span-1 lg:col-span-6">
            <Reveal direction="up" delay={0.15} className="h-full">
              <TiltCard className="h-full">
                <div className="h-full flex flex-col justify-between p-7 sm:p-9 rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-xl hover:border-primary/40 transition-[box-shadow,border-color] duration-200 relative overflow-hidden group">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center transition-colors duration-200 group-hover:bg-primary group-hover:text-white shadow-sm">
                        <holterMonitoring.icon className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-semibold text-secondary-dark bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20">
                        {holterMonitoring.badge}
                      </span>
                    </div>

                    <div className="mb-4">
                      <span className="text-xs font-bold text-primary tracking-wide uppercase">
                        {holterMonitoring.categoryName}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black font-heading text-ink mt-1 mb-2.5 group-hover:text-primary transition-colors">
                        {holterMonitoring.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-4">
                        {holterMonitoring.description}
                      </p>
                    </div>

                    {/* Maximized Product Image for Bittium Faros 360 / 180 */}
                    <div className="rounded-2xl bg-gradient-to-br from-surface via-white to-primary/5 border border-slate-200/80 p-3 mb-5 shadow-inner">
                      <div className="flex flex-col items-center rounded-xl bg-white border border-slate-200/80 p-3 shadow-sm hover:border-primary/40 transition-colors">
                        <div className="relative w-full h-32 sm:h-40">
                          <Image
                            src="/images/products/bittium-360-180.png"
                            alt="Bittium Faros 360 & 180 Wearable ECG Holter Sensors"
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 480px"
                          />
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-2 mt-2">
                          <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full text-center">
                            Bittium Faros 360
                          </span>
                          <span className="text-xs font-bold text-secondary-dark bg-secondary/10 px-2.5 py-0.5 rounded-full text-center">
                            Bittium Faros 180
                          </span>
                          <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-full text-center">
                            Cardiac Navigator™
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 border-t border-slate-100 pt-4 mb-5">
                      {holterMonitoring.features.map((f, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700">
                          <span className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={holterMonitoring.link}
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:text-primary-dark transition-colors pt-2"
                  >
                    <span>{holterMonitoring.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4 motion-safe:transition-transform motion-safe:group-hover:translate-x-1" />
                  </Link>
                </div>
              </TiltCard>
            </Reveal>
          </div>

        </div>

        {/* 3-7. Secondary Clinical Divisions — Position 3: Bittium, Position 4: Aidian, etc. */}
        <div className="mt-8 lg:mt-10">
          <div className="flex items-center justify-between gap-4 mb-5">
            <p className="text-xs sm:text-sm font-semibold text-white/80">
              Additional Specialized Divisions &amp; Diagnostic Technologies
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollSlider("prev")}
                disabled={!canScrollPrev}
                aria-label="Previous division card"
                className="p-2.5 rounded-xl bg-white/15 border border-white/25 text-white hover:bg-white/25 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 disabled:opacity-40 disabled:cursor-not-allowed transition-[background-color,transform,opacity] duration-200"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollSlider("next")}
                disabled={!canScrollNext}
                aria-label="Next division card"
                className="p-2.5 rounded-xl bg-white/15 border border-white/25 text-white hover:bg-white/25 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 disabled:opacity-40 disabled:cursor-not-allowed transition-[background-color,transform,opacity] duration-200"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div
            ref={sliderRef}
            onScroll={updateScrollButtons}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {secondaryDivisions.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="snap-start shrink-0 w-[85%] sm:w-[calc(50%-0.75rem)] lg:w-[calc((100%-3rem)/3)] xl:w-[calc((100%-4.5rem)/4)]"
                >
                  <Reveal direction="up" delay={0.15 + idx * 0.04} className="h-full">
                    <TiltCard className="h-full">
                      <div className="h-full flex flex-col justify-between p-6 rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-xl hover:border-primary/40 transition-[box-shadow,border-color] duration-200 relative overflow-hidden group">
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center transition-colors duration-200 group-hover:bg-primary group-hover:text-white shadow-sm">
                              <Icon className="w-6 h-6" />
                            </div>
                            <span className="text-xs font-medium text-secondary-dark bg-secondary/10 px-2.5 py-0.5 rounded-full border border-secondary/20">
                              {item.badge}
                            </span>
                          </div>

                          {/* Division Product Image Preview */}
                          {item.image && (
                            <div className="relative w-full h-28 mb-3 rounded-xl bg-surface border border-slate-200/70 p-2 flex items-center justify-center overflow-hidden">
                              <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-contain p-1"
                                sizes="220px"
                              />
                            </div>
                          )}

                          <span className="text-xs font-bold text-primary uppercase tracking-wide">
                            {item.categoryName}
                          </span>
                          <h3 className="text-lg font-bold font-heading text-ink mt-1 mb-2 group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>

                          <p className="text-xs text-muted leading-relaxed mb-4">
                            {item.description}
                          </p>

                          <div className="space-y-1.5 border-t border-slate-100 pt-3 mb-4">
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
                          className="inline-flex items-center gap-2 text-xs font-bold text-primary group-hover:text-secondary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-md transition-colors"
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
        </div>
      </Container>
    </section>
  );
};

