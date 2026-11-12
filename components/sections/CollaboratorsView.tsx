"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Truck,
  Headphones,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  Globe2,
  Building2,
  FileCheck2,
  Handshake,
  Mail,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/Button";
import {
  partnerCollaborators,
  partnerStats,
  partnerValueProps,
  PartnerCollaborator,
} from "@/data/collaborators";

interface CountryTab {
  label: string;
  value: string;
}

const countryTabs: CountryTab[] = [
  { label: "All", value: "All" },
  { label: "UK", value: "United Kingdom" },
  { label: "Finland", value: "Finland" },
  { label: "Japan", value: "Japan" },
  { label: "China", value: "China" },
];

export const CollaboratorsView: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [logoErrors, setLogoErrors] = useState<Record<string, boolean>>({});

  const filteredPartners =
    selectedFilter === "All"
      ? partnerCollaborators
      : partnerCollaborators.filter((p) => p.country === selectedFilter);

  const handleImageError = (id: string) => {
    setLogoErrors((prev) => ({ ...prev, [id]: true }));
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((w) => w[0])
      .filter(Boolean)
      .slice(0, 2)
      .join("")
      .toUpperCase();
  };

  return (
    <div className="bg-slate-50 text-slate-900 overflow-hidden">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Midnight Navy Healthcare Aesthetic + Luminous Globe SVG) */}
      {/* ========================================================================= */}
      <section className="relative pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-[#031326] via-[#061D3B] to-[#031326] text-white lg:min-h-[660px] lg:flex lg:items-center">
        {/* Ambient Medical Tech Radial Glows */}
        <div
          aria-hidden="true"
          className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] rounded-full bg-[#0756B8]/25 blur-[130px] pointer-events-none hero-orb-1"
        />
        <div
          aria-hidden="true"
          className="absolute top-1/3 right-1/4 w-[34rem] h-[34rem] rounded-full bg-[#00BFEA]/20 blur-[140px] pointer-events-none hero-orb-2"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[48rem] h-72 rounded-full bg-[#0756B8]/30 blur-[110px] pointer-events-none"
        />

        {/* Faint Dotted Grid Pattern with Radial Mask */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-dots-pattern opacity-[0.06] pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_85%)]"
        />

        {/* Diagonal Soft Light Sweep */}
        <div
          aria-hidden="true"
          className="absolute inset-y-0 -inset-x-full w-1/2 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent pointer-events-none hero-shine-sweep"
        />

        <Container className="relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Heading, Description, CTAs & Trust Indicators */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <Reveal direction="up" delay={0.1}>
                {/* Sleek Subtitle Badge (Electric Cyan Outline) */}
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#061D3B]/90 border border-[#00BFEA]/40 text-[#8AF7FF] text-xs font-semibold tracking-wider uppercase mb-6 shadow-[0_0_20px_rgba(0,191,234,0.18)]">
                  <Handshake className="w-4 h-4 text-[#00BFEA] shrink-0" />
                  <span>Trusted Worldwide Partnerships</span>
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.18}>
                <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-bold font-heading tracking-tight text-white leading-[1.08] mb-6">
                  Our Global <br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BFEA] via-[#8AF7FF] to-[#00BFEA]">
                    Partners
                  </span>
                </h1>
              </Reveal>

              <Reveal direction="up" delay={0.26}>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mb-8 font-normal">
                  We maintain direct principal distribution agreements with internationally accredited healthcare manufacturers to supply authentic diagnostic analyzers, certified reagents, and clinical monitoring technology across Pakistan.
                </p>
              </Reveal>

              <Reveal direction="up" delay={0.34}>
                <div className="flex flex-wrap items-center gap-4">
                  <Button
                    href="#partner-grid"
                    variant="primary"
                    size="lg"
                    magnetic
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                    className="shadow-xl shadow-primary/30"
                  >
                    Explore Partners
                  </Button>
                  <Button
                    href="/contact"
                    variant="outline"
                    size="lg"
                    leftIcon={<Mail className="w-4 h-4" />}
                    className="border-white/35 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white/60 hover:text-white"
                  >
                    Contact Us
                  </Button>
                </div>
              </Reveal>

              {/* Trust Indicators Strip with Subtle Dividers */}
              <Reveal direction="up" delay={0.42}>
                <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-300 font-medium">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#00BFEA] shrink-0" />
                    <span>Authorized Distribution</span>
                  </div>
                  <span className="hidden sm:inline text-white/20">|</span>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#8AF7FF] shrink-0" />
                    <span>DRAP Registered</span>
                  </div>
                  <span className="hidden sm:inline text-white/20">|</span>
                  <div className="flex items-center gap-2">
                    <Globe2 className="w-4 h-4 text-[#00BFEA] shrink-0" />
                    <span>Global Supply Network</span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: High-Definition Animated Globe Asset */}
            <div className="lg:col-span-6 flex items-center justify-center lg:justify-end">
              <Reveal direction="up" delay={0.25} className="w-full flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[720px] group">
                  {/* Glowing Radial Lighting Behind the Globe */}
                  <div
                    aria-hidden="true"
                    className="absolute -inset-6 sm:-inset-12 rounded-full bg-gradient-to-tr from-[#0756B8]/40 via-[#00BFEA]/30 to-[#8AF7FF]/20 blur-3xl pointer-events-none"
                  />

                  {/* Luminous Core Spotlight */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 m-auto w-[360px] h-[360px] rounded-full bg-[#00BFEA]/15 blur-[80px] pointer-events-none"
                  />

                  {/* Native Animated SVG Illustration */}
                  <div className="relative z-10 w-full transition-transform duration-500 motion-safe">
                    <img
                      src="/images/partners/altimi-global-partners-logo-text-fit.svg"
                      alt="Altimi Biosciences Global Partners Network"
                      width="760"
                      height="620"
                      loading="eager"
                      // @ts-ignore - React 18 / HTML fetchpriority
                      fetchpriority="high"
                      className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,191,234,0.22)]"
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>

        {/* Bottom Luminous Wave Horizon Accent */}
        <div aria-hidden="true" className="absolute -bottom-1 inset-x-0 pointer-events-none overflow-hidden h-20 sm:h-28">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full preserve-3d"
            preserveAspectRatio="none"
          >
            <path
              d="M0,80 C320,120 720,20 1440,70 L1440,120 L0,120 Z"
              fill="#031326"
              opacity="0.6"
            />
            <path
              d="M0,95 C480,40 960,110 1440,85 L1440,120 L0,120 Z"
              fill="#F8FAFC"
            />
            <path
              d="M0,92 C480,38 960,108 1440,83"
              stroke="url(#waveGlow)"
              strokeWidth="2"
              strokeOpacity="0.75"
            />
            <defs>
              <linearGradient id="waveGlow" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0756B8" stopOpacity="0" />
                <stop offset="0.4" stopColor="#00BFEA" stopOpacity="0.85" />
                <stop offset="0.75" stopColor="#8AF7FF" stopOpacity="0.95" />
                <stop offset="1" stopColor="#0756B8" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. PARTNER LOGOS STRIP (Elevated Frosted Glass Container) */}
      {/* ========================================================================= */}
      <section aria-label="Official Partner Brands" className="relative z-20 -mt-10 sm:-mt-12 px-4 sm:px-6">
        <Container>
          <Reveal direction="up" delay={0.2}>
            <div className="backdrop-blur-md bg-white/90 shadow-xl border border-slate-100 rounded-2xl p-6 sm:p-8">
              {/* Header inside the strip */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Authorized Manufacturer Principals</span>
                </div>
                <div className="text-xs text-slate-400 font-medium">
                  Direct international imports for hospitals, clinical laboratories &amp; research institutions
                </div>
              </div>

              {/* Logo Grid (Randox, Aidian, Bittium, A&D, Anji Hongde, Yangzhong) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 items-center">
                {partnerCollaborators.map((partner) => {
                  const hasError = logoErrors[`strip-${partner.id}`];

                  return (
                    <div
                      key={`strip-${partner.id}`}
                      title={`${partner.name} (${partner.country})`}
                      className="group/brand h-20 sm:h-24 rounded-xl bg-slate-50/70 border border-slate-200/70 p-3 sm:p-4 flex items-center justify-center hover:bg-white hover:border-blue-400/80 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                    >
                      {hasError ? (
                        <div className="flex items-center gap-1.5 font-heading font-bold text-xs text-slate-700">
                          <span className="w-6 h-6 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center text-[10px] font-black">
                            {getInitials(partner.name)}
                          </span>
                          <span className="truncate">{partner.name.split(" ")[0]}</span>
                        </div>
                      ) : (
                        <div className="relative w-full h-full grayscale opacity-75 group-hover/brand:grayscale-0 group-hover/brand:opacity-100 transition-all duration-300">
                          <Image
                            src={partner.logo}
                            alt={`${partner.name} logo`}
                            fill
                            sizes="(max-width: 640px) 140px, 180px"
                            onError={() => handleImageError(`strip-${partner.id}`)}
                            className="object-contain"
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 3. KEY METRICS STATS SECTION */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/60">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {partnerStats.map((stat, i) => (
              <Reveal key={stat.label} direction="up" delay={0.08 * i}>
                <div className="h-full p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 hover:border-blue-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-slate-900 flex items-baseline">
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm sm:text-base font-bold text-slate-800 mt-2">
                      {stat.label}
                    </div>
                  </div>
                  <div className="text-xs text-slate-500 mt-3 pt-3 border-t border-slate-100">
                    {stat.subtext}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 4. COLLABORATORS / PRINCIPALS GRID WITH COUNTRY FILTERS */}
      {/* ========================================================================= */}
      <section id="partner-grid" className="py-20 lg:py-28 bg-white">
        <Container>
          <Reveal direction="up">
            <SectionHeading
              badge="Authorized Distribution"
              title="Global Manufacturing Principals"
              subtitle="Directly imported clinical instruments, diagnostic reagents, and certified protective consumables."
              align="center"
              className="mb-10"
            />
          </Reveal>

          {/* Interactive Country Filter Pills */}
          <div
            role="tablist"
            aria-label="Filter partners by country"
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14"
          >
            {countryTabs.map((tab) => {
              const isSelected = selectedFilter === tab.value;
              const count =
                tab.value === "All"
                  ? partnerCollaborators.length
                  : partnerCollaborators.filter((p) => p.country === tab.value).length;

              return (
                <button
                  key={tab.label}
                  role="tab"
                  aria-selected={isSelected}
                  type="button"
                  onClick={() => setSelectedFilter(tab.value)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${isSelected
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/25"
                      : "bg-white text-slate-700 border border-slate-200 hover:border-blue-300 hover:text-blue-600 shadow-sm"
                    }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${isSelected
                        ? "bg-white/20 text-white"
                        : "bg-slate-100 text-slate-600"
                      }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* 3 Columns Desktop, 2 Tablet, 1 Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {filteredPartners.map((partner, idx) => {
              const hasError = logoErrors[partner.id];

              return (
                <Reveal key={partner.id} direction="up" delay={0.08 * (idx % 3)}>
                  <div className="group h-full flex flex-col justify-between p-7 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:-translate-y-1 hover:shadow-2xl hover:border-blue-500 transition-all duration-300 relative overflow-hidden">
                    {/* Top Subtle Brand Accent Bar */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />

                    <div>
                      {/* Logo Frame & Country Pill */}
                      <div className="flex items-center justify-between gap-4 mb-6">
                        <div className="relative w-36 h-16 sm:w-40 sm:h-20 rounded-xl bg-slate-50 border border-slate-100 p-2.5 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:border-blue-100 transition-colors">
                          {hasError ? (
                            <div className="flex items-center gap-1.5 font-heading font-black text-xs text-blue-600">
                              <span className="w-6 h-6 rounded-md bg-blue-50 flex items-center justify-center text-[10px]">
                                {getInitials(partner.name)}
                              </span>
                              <span>{partner.name.split(" ")[0]}</span>
                            </div>
                          ) : (
                            <div className="relative w-full h-full grayscale group-hover:grayscale-0 transition-all duration-300">
                              <Image
                                src={partner.logo}
                                alt={`${partner.name} logo`}
                                fill
                                sizes="(max-width: 640px) 150px, 180px"
                                onError={() => handleImageError(partner.id)}
                                className="object-contain"
                              />
                            </div>
                          )}
                        </div>

                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-50 border border-slate-200 text-slate-700 shadow-2xs">
                          <span aria-hidden="true">{partner.flag}</span>
                          <span>{partner.country}</span>
                        </span>
                      </div>

                      {/* Partner Name & Description */}
                      <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 group-hover:text-blue-600 transition-colors mb-2.5">
                        {partner.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                        {partner.description}
                      </p>

                      {/* Products We Import Checklist */}
                      <div className="pt-4 border-t border-slate-100 mb-6">
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                          <span>Products we import:</span>
                        </div>
                        <ul className="space-y-2.5">
                          {partner.products.map((prod, pIdx) => (
                            <li
                              key={pIdx}
                              className="flex items-start gap-2.5 text-xs text-slate-700 font-medium leading-relaxed"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                              <span className="leading-snug">{prod}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Bottom CTA link */}
                    <div className="pt-4 border-t border-slate-100">
                      <Link
                        href={`/contact?subject=Inquiry%20about%20${encodeURIComponent(
                          partner.name
                        )}`}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-600 group-hover:text-blue-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
                      >
                        <span>Enquire about this principal</span>
                        <ArrowRight className="w-3.5 h-3.5 motion-safe:transition-transform motion-safe:group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 5. WHY PARTNER WITH US (Medical Distribution Excellence) */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200/70">
        <Container>
          <Reveal direction="up">
            <SectionHeading
              badge="Import Excellence"
              title="Why Healthcare Institutions Trust Us"
              subtitle="Ensuring authenticated diagnostics, continuous clinical cold-chain logistics, and reliable technical backup across Pakistan."
              align="center"
              className="mb-14"
            />
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {partnerValueProps.map((prop, i) => {
              const icons = {
                ShieldCheck: <ShieldCheck className="w-6 h-6 text-blue-600" />,
                Award: <Award className="w-6 h-6 text-cyan-600" />,
                Truck: <Truck className="w-6 h-6 text-blue-600" />,
                Headphones: <Headphones className="w-6 h-6 text-cyan-600" />,
              };
              const icon = icons[prop.icon as keyof typeof icons] || (
                <Sparkles className="w-6 h-6 text-blue-600" />
              );

              return (
                <Reveal key={prop.title} direction="up" delay={0.08 * i}>
                  <div className="h-full p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-blue-50/70 border border-blue-100 flex items-center justify-center shadow-2xs mb-5 group-hover:scale-105 group-hover:bg-blue-100/70 transition-all duration-200">
                        {icon}
                      </div>
                      <h4 className="text-lg font-bold font-heading text-slate-900 group-hover:text-blue-600 transition-colors mb-2.5">
                        {prop.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {prop.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 6. CALL TO ACTION BANNER (High-End Corporate Medical Finish) */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white border-t border-slate-100">
        <Container>
          <Reveal direction="up">
            <div className="relative rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden bg-gradient-to-br from-[#071325] via-[#102A45] to-[#0B1E34] text-white shadow-2xl">
              {/* Background ambient accents */}
              <div
                aria-hidden="true"
                className="absolute top-0 right-0 w-96 h-96 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none"
              />
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl pointer-events-none"
              />

              <div className="relative z-10 max-w-2xl">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/15 text-blue-300 border border-blue-400/30 mb-4">
                  Procurement &amp; Technical Support
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading leading-tight mb-4 text-white">
                  Interested in our partner products?
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
                  Get in touch with our clinical sales specialists for institutional quotations, reagent schedules, and turnkey laboratory installations.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Button
                    href="/contact"
                    variant="primary"
                    size="lg"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                    className="bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30"
                  >
                    Contact Us
                  </Button>
                  <Button
                    href="/products"
                    variant="outline"
                    size="lg"
                    className="border-white/25 text-white hover:bg-white hover:text-slate-900 hover:border-white transition-all"
                  >
                    Browse Product Catalog
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
};
