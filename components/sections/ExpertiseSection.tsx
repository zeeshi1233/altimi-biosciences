"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Syringe, Package, Cpu, FlaskConical, Pill, ArrowRight, Activity } from "lucide-react";
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
    title: "Hospital & Surgical Supplies",
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
    gradient: "from-teal-500/20 via-cyan-500/10 to-transparent",
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
    gradient: "from-indigo-500/20 via-blue-500/10 to-transparent",
  },
  {
    id: "diagnostic-kits",
    title: "Diagnostic Kits & Clinical Analyzers",
    categoryName: "Chemistry, Molecular & Rapid Kits",
    badge: "DRAP Registered",
    description:
      "Randox automated clinical chemistry systems, Bosch Vivalytic molecular diagnostics, and Aidian QuikRead go rapid human diagnostic test kits.",
    icon: FlaskConical,
    features: [
      "Randox RX 4900 & RX 9000 Chemistry Analyzers",
      "Bosch Vivalytic Molecular Analyzer",
      "Aidian QuikRead go® easy CRP & HbA1c Kits",
    ],
    link: "/products/randox-rx-series",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
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
    gradient: "from-rose-500/20 via-orange-500/10 to-transparent",
  },
  {
    id: "point-of-care-testing",
    title: "QuikRead go® by Aidian",
    categoryName: "Point Of Care Testing",
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
    gradient: "from-sky-500/20 via-blue-500/10 to-transparent",
  },
];

export const ExpertiseSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-surface">
      <div className="absolute inset-0 bg-dots-pattern opacity-50 pointer-events-none" />

      <Container>
        {/* Editorial Split Header */}
        <Reveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-slate-200/80 pb-8">
            <div className="space-y-3 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                <Activity className="w-3.5 h-3.5 text-primary" />
                Comprehensive Healthcare & Diagnostic Solutions
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-ink tracking-tight leading-tight">
                Specialized Diagnostic & Clinical Divisions
              </h2>
            </div>
            <p className="text-sm sm:text-base text-muted max-w-md leading-relaxed">
              We provide end-to-end distribution, scientific validation, and equipment lifecycle support across 6 key medical domains in Pakistan.
            </p>
          </div>
        </Reveal>

        {/* Architectural Bento Grid with Clinical Hierarchy */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* 1. Flagship Lead: Diagnostic Kits & Automated Chemistry (6 cols) */}
          <div className="md:col-span-1 lg:col-span-6">
            <Reveal direction="up" delay={0.1} className="h-full">
              <TiltCard className="h-full">
                <div className="h-full flex flex-col justify-between p-7 sm:p-9 rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-xl hover:border-primary/40 transition-[box-shadow,border-color] duration-200 relative overflow-hidden group">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center transition-colors duration-200 group-hover:bg-primary group-hover:text-white shadow-sm">
                        <FlaskConical className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-semibold text-secondary-dark bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20">
                        {expertiseList[3].badge}
                      </span>
                    </div>

                    <span className="text-xs font-semibold text-primary">
                      {expertiseList[3].categoryName}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black font-heading text-ink mt-1 mb-3 group-hover:text-primary transition-colors">
                      {expertiseList[3].title}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                      {expertiseList[3].description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-slate-100 pt-5 mb-6">
                      {expertiseList[3].features.map((f, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700">
                          <span className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={expertiseList[3].link}
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:text-primary-dark transition-colors pt-2"
                  >
                    <span>Explore Clinical Chemistry Analyzers</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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
                        <Activity className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-semibold text-secondary-dark bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20">
                        {expertiseList[5].badge}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center mb-6">
                      <div className="sm:col-span-7">
                        <span className="text-xs font-semibold text-primary">
                          {expertiseList[5].categoryName}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-black font-heading text-ink mt-1 mb-2.5 group-hover:text-primary transition-colors">
                          {expertiseList[5].title}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {expertiseList[5].description}
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
                      {expertiseList[5].features.map((f, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700">
                          <span className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={expertiseList[5].link}
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:text-primary-dark transition-colors pt-2"
                  >
                    <span>Explore QuikRead go® POCT</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </TiltCard>
            </Reveal>
          </div>

          {/* 3. Medical Devices & Telecardiology (3 cols) */}
          <div className="md:col-span-1 lg:col-span-3">
            <Reveal direction="up" delay={0.2} className="h-full">
              <TiltCard className="h-full">
                <div className="h-full flex flex-col justify-between p-6 rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-xl hover:border-secondary/40 transition-[box-shadow,border-color] duration-200 relative overflow-hidden group">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-secondary/15 text-secondary-dark flex items-center justify-center transition-colors duration-200 group-hover:bg-secondary group-hover:text-white shadow-sm">
                        <Cpu className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-medium text-secondary-dark bg-secondary/10 px-2.5 py-0.5 rounded-full border border-secondary/20">
                        {expertiseList[2].badge}
                      </span>
                    </div>

                    <span className="text-xs font-medium text-secondary-dark">
                      {expertiseList[2].categoryName}
                    </span>
                    <h3 className="text-lg font-bold font-heading text-ink mt-1 mb-2.5 group-hover:text-primary transition-colors">
                      {expertiseList[2].title}
                    </h3>

                    <p className="text-xs text-muted leading-relaxed mb-5">
                      {expertiseList[2].description}
                    </p>

                    <div className="space-y-2 border-t border-slate-100 pt-4 mb-5">
                      {expertiseList[2].features.map((f, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={expertiseList[2].link}
                    className="inline-flex items-center gap-2 text-xs font-bold text-primary group-hover:text-secondary-dark transition-colors"
                  >
                    <span>View Telehealth Devices</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </TiltCard>
            </Reveal>
          </div>

          {/* 4. Vaccines & Biologicals (3 cols) */}
          <div className="md:col-span-1 lg:col-span-3">
            <Reveal direction="up" delay={0.25} className="h-full">
              <TiltCard className="h-full">
                <div className="h-full flex flex-col justify-between p-6 rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-xl hover:border-slate-300 transition-[box-shadow,border-color] duration-200 group">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center transition-colors duration-200 group-hover:bg-primary group-hover:text-white shadow-sm">
                        <Syringe className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-medium text-secondary-dark bg-secondary/10 px-2.5 py-0.5 rounded-full border border-secondary/20">
                        {expertiseList[0].badge}
                      </span>
                    </div>

                    <span className="text-xs font-medium text-primary">
                      {expertiseList[0].categoryName}
                    </span>
                    <h3 className="text-lg font-bold font-heading text-ink mt-1 mb-2.5 group-hover:text-primary transition-colors">
                      {expertiseList[0].title}
                    </h3>

                    <p className="text-xs text-muted leading-relaxed mb-5">
                      {expertiseList[0].description}
                    </p>

                    <div className="space-y-2 border-t border-slate-100 pt-4 mb-5">
                      {expertiseList[0].features.map((f, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Link
                    href={expertiseList[0].link}
                    className="inline-flex items-center gap-2 text-xs font-bold text-primary group-hover:text-secondary-dark transition-colors"
                  >
                    <span>Cold-Chain Network</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </TiltCard>
            </Reveal>
          </div>

          {/* 5. Hospital Supplies & Safety Needles (3 cols) */}
          <div className="md:col-span-1 lg:col-span-3">
            <Reveal direction="up" delay={0.3} className="h-full">
              <TiltCard className="h-full">
                <div className="h-full flex flex-col justify-between p-6 rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-xl hover:border-slate-300 transition-[box-shadow,border-color] duration-200 group">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center transition-colors duration-200 group-hover:bg-primary group-hover:text-white shadow-sm">
                        <Package className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-medium text-secondary-dark bg-secondary/10 px-2.5 py-0.5 rounded-full border border-secondary/20">
                        {expertiseList[1].badge}
                      </span>
                    </div>

                    <span className="text-xs font-medium text-primary">
                      {expertiseList[1].categoryName}
                    </span>
                    <h3 className="text-lg font-bold font-heading text-ink mt-1 mb-2.5 group-hover:text-primary transition-colors">
                      {expertiseList[1].title}
                    </h3>

                    <p className="text-xs text-muted leading-relaxed mb-5">
                      {expertiseList[1].description}
                    </p>
                    <div className="space-y-2 border-t border-slate-100 pt-4 mb-5">
                      {expertiseList[1].features.map((f, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={expertiseList[1].link}
                    className="inline-flex items-center gap-2 text-xs font-bold text-primary group-hover:text-secondary-dark transition-colors"
                  >
                    <span>View Hospital Supplies</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </TiltCard>
            </Reveal>
          </div>

          {/* 6. Medicine & Surgical Adhesives (3 cols) */}
          <div className="md:col-span-1 lg:col-span-3">
            <Reveal direction="up" delay={0.35} className="h-full">
              <TiltCard className="h-full">
                <div className="h-full flex flex-col justify-between p-6 rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-xl hover:border-slate-300 transition-[box-shadow,border-color] duration-200 group">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center transition-colors duration-200 group-hover:bg-primary group-hover:text-white shadow-sm">
                        <Pill className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-medium text-secondary-dark bg-secondary/10 px-2.5 py-0.5 rounded-full border border-secondary/20">
                        {expertiseList[4].badge}
                      </span>
                    </div>
                    <span className="text-xs font-medium text-primary">
                      {expertiseList[4].categoryName}
                    </span>
                    <h3 className="text-lg font-bold font-heading text-ink mt-1 mb-2.5 group-hover:text-primary transition-colors">
                      {expertiseList[4].title}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed mb-5">
                      {expertiseList[4].description}
                    </p>

                    <div className="space-y-2 border-t border-slate-100 pt-4 mb-5">
                      {expertiseList[4].features.map((f, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={expertiseList[4].link}
                    className="inline-flex items-center gap-2 text-xs font-bold text-primary group-hover:text-secondary-dark transition-colors"
                  >
                    <span>View Biosimilar Drugs</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
};

