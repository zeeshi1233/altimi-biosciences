"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  FileDown,
  ShieldCheck,
  Zap,
  Layers,
  ArrowRight,
  Phone,
  Clock,
  Sparkles,
  ThermometerSnowflake,
  Activity,
  Award,
  Wrench,
  Download,
  Building2,
  Check,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { getProductBySlug, products } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";
import { Reveal } from "@/components/animations/Reveal";

export default function RxModenaPage() {
  const product = getProductBySlug("rx-modena");
  const [activeTab, setActiveTab] = useState<"specs" | "assays" | "service">("specs");

  if (!product) return null;

  // Filter related products (exclude this one)
  const relatedProducts = products
    .filter((p) => p.id !== "rx-modena")
    .slice(0, 3);

  const kpis = [
    { label: "Maximum Throughput", value: "1,200 Tests/Hr", sub: "Photometric + ISE combined" },
    { label: "Direct HbA1c", value: "Automated", sub: "Zero manual pre-treatment" },
    { label: "Cooled Reagents", value: "100 Positions", sub: "2°C – 8°C onboard stability" },
    { label: "Water Efficiency", value: "20 L/Hr", sub: "Low laboratory consumption" },
  ];

  const assayMenu = [
    { category: "Diabetes & Glycemic", items: ["Direct HbA1c", "Glucose (GOD-PAP)", "Fructosamine", "Microalbumin"] },
    { category: "Cardiac & Lipids", items: ["Cholesterol", "HDL / LDL Direct", "Triglycerides", "CK-MB", "High-Sensitivity CRP"] },
    { category: "Liver & Renal Panels", items: ["ALT / AST", "Bilirubin (Total/Direct)", "Creatinine (Enzymatic)", "Urea / BUN", "Uric Acid"] },
    { category: "Specialty & Therapeutic", items: ["Therapeutic Drug Monitoring (TDM)", "Drugs of Abuse (DoA)", "Antioxidant Status (TAS)", "Specific Proteins"] },
  ];

  return (
    <div className="py-10 lg:py-16 bg-surface min-h-screen">
      <Container>
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-primary transition-colors">
            Products
          </Link>
          <span>/</span>
          <Link
            href="/products?category=clinical-chemistry-analyzer"
            className="hover:text-primary transition-colors"
          >
            Clinical Chemistry Analyzers
          </Link>
          <span>/</span>
          <span className="text-primary font-bold">{product.name}</span>
        </nav>

        {/* HERO SHOWCASE SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16">
          {/* Left Column: Visual Product Showcase Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative aspect-[4/3] rounded-3xl bg-gradient-to-tr from-white via-surface to-white border border-slate-200/90 p-8 sm:p-10 shadow-2xl flex items-center justify-center overflow-hidden group">
              {/* Radial ambient glow */}
              <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-2xl group-hover:bg-primary/10 transition-colors pointer-events-none" />

              {/* Badges in corners */}
              <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5">
                <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-primary text-white shadow-md uppercase tracking-wider">
                  {product.badge}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-secondary/15 text-secondary-dark border border-secondary/25 uppercase tracking-wider">
                  DRAP Registered
                </span>
              </div>

              <div className="absolute top-4 right-4 z-10">
                <span className="px-2.5 py-1 rounded-xl text-[10px] font-mono font-bold bg-slate-100 text-slate-700 border border-slate-200">
                  {product.modelCode}
                </span>
              </div>

              {/* Product Image */}
              <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Quick Action CTAs */}
            <div className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Button
                  href={`/contact?product=${encodeURIComponent(product.name)}`}
                  variant="primary"
                  size="lg"
                  className="w-full justify-center shadow-lg shadow-primary/25"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Request Quote
                </Button>
                <Button
                  href={product.brochureUrl || "/brochures"}
                  variant="outline"
                  size="lg"
                  className="w-full justify-center"
                  leftIcon={<FileDown className="w-4 h-4" />}
                >
                  Technical PDF
                </Button>
              </div>

              {/* Direct Helpline Bar */}
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-slate-600">
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  <span>Clinical Diagnostics Desk:</span>
                </div>
                <a
                  href="tel:+922135344476"
                  className="font-bold text-primary hover:underline"
                >
                  +92 21 35344476
                </a>
              </div>
            </div>

            {/* Trust Badges Strip */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-secondary shrink-0" />
                <div className="text-[11px] leading-snug">
                  <strong className="text-ink block font-bold">Authorized Distributor</strong>
                  <span className="text-muted">Direct Randox Partner</span>
                </div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-2.5">
                <Wrench className="w-5 h-5 text-primary shrink-0" />
                <div className="text-[11px] leading-snug">
                  <strong className="text-ink block font-bold">Factory Service SLA</strong>
                  <span className="text-muted">Pakistan Certified Engineers</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Intelligence & Value Props (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-secondary/15 text-secondary-dark border border-secondary/25">
                  {product.brand}
                </span>
                <span className="text-xs font-semibold text-muted">
                  • {product.categoryName}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-ink tracking-tight">
                {product.name}
              </h1>
              <p className="text-base sm:text-lg font-medium text-primary mt-2">
                {product.subtitle}
              </p>
            </div>

            {/* Quick KPI Metric Highlights Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {kpis.map((kpi, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm"
                >
                  <div className="text-[10px] uppercase font-bold text-muted tracking-wider">
                    {kpi.label}
                  </div>
                  <div className="text-lg font-black font-heading text-ink mt-0.5">
                    {kpi.value}
                  </div>
                  <div className="text-[10px] text-slate-500 mt-0.5 leading-tight">
                    {kpi.sub}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {product.fullDescription}
            </p>

            {/* Core Capability Checklist */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold uppercase tracking-wider text-ink flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  Key Clinical & Workflow Advantages
                </h3>
                <span className="text-xs text-muted font-medium">Randox RX Series</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    <span className="leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Regulatory & Approvals Badges */}
            <div className="p-4 rounded-2xl bg-surface border border-slate-200/80 flex flex-wrap items-center gap-2.5">
              <span className="text-xs font-bold text-ink mr-1 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-primary" />
                Certifications:
              </span>
              {product.certifications.map((cert, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-xs font-bold bg-white text-ink border border-slate-200 shadow-xs"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* INTERACTIVE DETAIL TABS SECTION */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xl mb-16">
          {/* Tab Navigation Header */}
          <div className="flex flex-wrap items-center gap-2 pb-6 border-b border-slate-100">
            {[
              { id: "specs", label: "Technical Specifications" },
              { id: "assays", label: "Consolidated Assay Menu" },
              { id: "service", label: "Installation & Biomedical SLA" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all focus:outline-none ${
                  activeTab === tab.id
                    ? "bg-primary text-white shadow-md shadow-primary/20"
                    : "bg-surface text-slate-600 hover:bg-slate-200/80 border border-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab 1: Technical Specs Grid */}
          {activeTab === "specs" && (
            <div className="pt-8 space-y-6">
              <div className="max-w-2xl">
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-ink">
                  Engineering & Performance Parameters
                </h3>
                <p className="text-xs sm:text-sm text-muted mt-1">
                  Validated laboratory engineering parameters for high-throughput diagnostic operations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.specifications.map((spec, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-surface border border-slate-200/80 flex items-center justify-between"
                  >
                    <span className="text-xs font-semibold text-slate-600">
                      {spec.label}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-ink text-right">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 2: Consolidated Assay Menu */}
          {activeTab === "assays" && (
            <div className="pt-8 space-y-6">
              <div className="max-w-2xl">
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-ink">
                  Randox Broad-Spectrum Assay Reagents
                </h3>
                <p className="text-xs sm:text-sm text-muted mt-1">
                  The RX series consolidates dedicated routine, esoteric, and specialty testing onto one analyzer platform.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {assayMenu.map((group, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-surface border border-slate-200/80 space-y-3"
                  >
                    <div className="flex items-center gap-2 text-sm font-bold font-heading text-ink border-b border-slate-200/60 pb-2">
                      <Activity className="w-4 h-4 text-primary" />
                      <span>{group.category}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item, itemIdx) => (
                        <span
                          key={itemIdx}
                          className="px-2.5 py-1 rounded-xl text-xs font-medium bg-white text-slate-700 border border-slate-200 shadow-2xs"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Installation & SLA */}
          {activeTab === "service" && (
            <div className="pt-8 space-y-6">
              <div className="max-w-2xl">
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-ink">
                  Comprehensive Pakistan Biomedical Support SLA
                </h3>
                <p className="text-xs sm:text-sm text-muted mt-1">
                  Full lifecycle ownership provided directly by Altimi Biosciences factory-trained service engineers.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="p-5 rounded-2xl bg-surface border border-slate-200/80 space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                    01
                  </div>
                  <h4 className="text-sm font-bold text-ink">Site Audit & Installation</h4>
                  <p className="text-xs text-muted leading-relaxed">
                    Pre-installation electrical checks, water deionizer testing, and calibration protocols before commission.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-surface border border-slate-200/80 space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-secondary/15 text-secondary-dark flex items-center justify-center font-bold">
                    02
                  </div>
                  <h4 className="text-sm font-bold text-ink">Operator Certification</h4>
                  <p className="text-xs text-muted leading-relaxed">
                    Extensive hands-on training for hospital pathologists, technicians, and quality assurance supervisors.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-surface border border-slate-200/80 space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                    03
                  </div>
                  <h4 className="text-sm font-bold text-ink">Emergency Spare Parts</h4>
                  <p className="text-xs text-muted leading-relaxed">
                    Genuine Randox OEM lamps, tubing, probes, and cuvettes stocked in our Karachi central depot for rapid uptime.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* RELATED PRODUCTS EXPLORER */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold text-secondary-dark uppercase tracking-wider">
                Complementary Portfolio
              </span>
              <h2 className="text-2xl sm:text-3xl font-black font-heading text-ink mt-1">
                Explore Related Medical Equipment
              </h2>
            </div>
            <Button href="/products" variant="outline" size="sm" rightIcon={<ArrowRight className="w-4 h-4" />}>
              View All Products
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((relProduct) => (
              <ProductCard key={relProduct.id} product={relProduct} />
            ))}
          </div>
        </div>

        {/* INSTITUTIONAL CONSULTATION BANNER */}
        <div className="rounded-3xl bg-gradient-to-r from-ink via-slate-900 to-primary-dark text-white p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-bold text-secondary uppercase tracking-widest flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-secondary" />
              Hospital Workflow Consultation
            </span>
            <h3 className="text-2xl sm:text-3xl font-black font-heading !text-white text-white">
              Plan Your Laboratory Upgrade with Altimi
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Our diagnostic consultants provide complete assay volume modeling, water system audits, and ROI analysis for hospitals across Pakistan.
            </p>
          </div>

          <Button
            href={`/contact?product=${encodeURIComponent(product.name)}`}
            variant="primary"
            size="lg"
            className="shrink-0 shadow-xl shadow-primary/25"
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Schedule On-Site Demo
          </Button>
        </div>
      </Container>
    </div>
  );
}
