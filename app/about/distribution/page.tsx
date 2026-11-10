"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Building2,
  ShieldCheck,
  Truck,
  Boxes,
  Activity,
  CheckCircle2,
  ExternalLink,
  Copy,
  Check,
  Layers,
  ThermometerSnowflake,
  RefreshCw,
  GitBranch,
  ArrowRight,
  Phone,
  Clock,
  Warehouse,
  Users2,
  Target,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/Button";

export default function DistributionPage() {
  const [copied, setCopied] = useState(false);
  const [activeChannel, setActiveChannel] = useState<"all" | "distributors" | "pharmacies" | "tenders">("all");

  const companyAddress =
    "Altimi Biosciences Private Limited, R39+HR6, Khalid Commercial Area Phase 7 Ext, Karachi, Pakistan";

  const handleCopyAddress = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(companyAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="py-12 lg:py-20 bg-surface min-h-screen">
      <Container>
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-muted">About Us</span>
          <span>/</span>
          <span className="text-primary font-bold">Distribution</span>
        </nav>

        {/* Hero Section Heading */}
        <Reveal direction="up">
          <SectionHeading
            badge="Healthcare Distribution & Infrastructure"
            badgeIcon={<Truck className="w-3.5 h-3.5" />}
            title="Strategic Distribution & Supply Operations"
            subtitle="Getting the right medicines and medical devices to the right patients at the right time, safely, efficiently, and with unbroken cold-chain integrity across Pakistan."
            align="center"
            className="mb-14"
          />
        </Reveal>

        {/* SECTION 1: Text Content & "OSM" High-Tech Map Command Center */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-20">
          {/* Left Column: Real Official Content (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <Reveal direction="left" delay={0.1}>
              <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-xl space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-3">
                    <Activity className="w-3.5 h-3.5 text-primary" />
                    Core Healthcare Mission
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black font-heading text-ink leading-snug">
                    Beyond Simple Delivery
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                    Healthcare distribution has never been just about delivery for{" "}
                    <strong className="text-ink font-semibold">Altimi Biosciences</strong>. It is about
                    getting the right medicines to the right patients at the right time, safely and
                    efficiently. Distributors work around the clock to help our hospitals, long-term
                    care facilities, clinics, and other healthcare providers across the country to keep
                    their shelves stocked with the medications and products that patients need.
                  </p>
                </div>

                <div className="pt-5 border-t border-slate-100">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-secondary/15 text-secondary-dark border border-secondary/25 mb-3">
                    <Warehouse className="w-3.5 h-3.5 text-secondary" />
                    Storage & Compliance
                  </div>
                  <h4 className="text-lg font-bold font-heading text-ink">
                    450 m² DRAP-Approved Central Warehouse
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    <strong className="text-ink font-semibold">ABL</strong> possess adequate Storage
                    Warehouse, measuring{" "}
                    <span className="font-bold text-primary">450 square meters</span> approved by the{" "}
                    <strong className="text-ink font-semibold">
                      Drug Regulating Authority of Pakistan (DRAP)
                    </strong>{" "}
                    with complete storage protocols which are essentially required for the storage of
                    Medical Devices, Medicines, and Biosimilar Drugs.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    Altimi&apos;s operational network is diffused all over Pakistan. Altimi intend to
                    establish more adequately equipped outlets in all major cities are under progress.
                  </p>
                </div>
                
                {/* Key Spec Badges */}
                <div className="grid grid-cols-2 gap-3 pt-3">
                  <div className="p-3.5 rounded-2xl bg-surface border border-slate-200/80">
                    <div className="text-lg font-black font-heading text-primary">450 m²</div>
                    <div className="text-[11px] text-muted font-medium mt-0.5">DRAP Certified Space</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-surface border border-slate-200/80">
                    <div className="text-lg font-black font-heading text-secondary-dark">Karachi HQ</div>
                    <div className="text-[11px] text-muted font-medium mt-0.5">Central Logistics Hub</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: High-Tech "OSM" Command Center Map Frame (7 cols) */}
          <div className="lg:col-span-7">
            <Reveal direction="right" delay={0.2}>
              <div className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-700/80 shadow-2xl flex flex-col h-full min-h-[520px]">
                {/* Map Command Top Bar */}
                <div className="bg-slate-900/95 backdrop-blur-md px-5 py-3.5 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 z-20">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-3 w-3">
                      <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                    </span>
                    <div>
                      <span className="text-xs font-semibold text-white">
                        Active Logistics Facility
                      </span>
                      <span className="hidden sm:inline-block text-[11px] text-slate-400 ml-2">
                        • Karachi, Pakistan
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleCopyAddress}
                      className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-200 flex items-center gap-1.5 transition-colors duration-150 focus:outline-none"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-400" />
                          <span>Copy Address</span>
                        </>
                      )}
                    </button>
                    <a
                      href="https://maps.google.com/?q=Altimi+Biosciences+Private+Limited+Karachi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-primary hover:bg-primary-dark text-xs font-bold text-white flex items-center gap-1.5 shadow-md shadow-primary/25 transition-colors duration-150"
                    >
                      <span>Directions</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Interactive Map Iframe Viewport */}
                <div className="relative flex-1 w-full min-h-[440px] bg-slate-950">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.3148408592156!2d67.07951270000001!3d24.8189045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33d001fb5dcb9%3A0x913ac73e16776265!2sAltimi%20Biosciences%20Private%20Limited!5e0!3m2!1sen!2s!4v1793900814112!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="absolute inset-0 w-full h-full grayscale-[15%] contrast-105"
                    title="Altimi Biosciences Karachi Location Map"
                  />

                  {/* High-Tech Floating Glass HUD Badge */}
                  <div className="absolute top-4 left-4 z-10 max-w-xs">
                    <div className="p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 shadow-2xl text-white">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Central Office & Depot
                        </span>
                        <div className="flex items-center text-amber-400 text-xs font-bold">
                          ★ 5.0
                        </div>
                      </div>
                      <h4 className="text-sm font-bold font-heading text-white">
                        Altimi Biosciences (Pvt) Ltd
                      </h4>
                      <p className="text-[11px] text-slate-300 mt-1 leading-snug">
                        R39+HR6, Khalid Commercial Area Phase 7 Ext, Karachi, Pakistan
                      </p>
                      <div className="mt-2.5 pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
                        <span>450 m² Cold Storage</span>
                        <span className="text-primary-light font-semibold">Karachi Central Hub</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Coordinates & Time Bar */}
                  <div className="absolute bottom-3 right-3 z-10 hidden sm:block">
                    <div className="px-3 py-1.5 rounded-xl bg-slate-900/85 backdrop-blur-md border border-slate-800 text-[10px] text-slate-300 font-mono flex items-center gap-2">
                      <span>LAT: 24.8189° N</span>
                      <span className="text-slate-600">|</span>
                      <span>LNG: 67.0795° E</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* SECTION 2: Modern Animated "Distribution Arrangement" & Strategic Pillars */}
        <div className="mt-10 mb-20">
          <Reveal direction="up">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-secondary/15 text-secondary-dark border border-secondary/25 mb-3">
                <GitBranch className="w-3.5 h-3.5 text-secondary" />
                Operational Architecture
              </span>
              <h2 className="text-3xl sm:text-4xl font-black font-heading text-ink">
                Distribution Arrangement
              </h2>
              <p className="text-xs sm:text-sm text-muted mt-2">
                Structured multi-channel supply architecture connecting our Karachi central hub with public and private healthcare sectors across Pakistan.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left Side: Modern Interactive Schematic (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <Reveal direction="left" delay={0.2}>
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl h-full flex flex-col justify-between relative overflow-hidden">
                  {/* Subtle Background Circuit Glow */}
                  <div className="absolute -top-24 -right-24 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

                  {/* Flowchart Filter Tabs */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-8 pb-4 border-b border-slate-100">
                    <div className="text-xs font-semibold text-ink">
                      Interactive Supply Channels:
                    </div>
                    <div className="flex items-center gap-1.5">
                      {[
                        { id: "all", label: "All Pathways" },
                        { id: "distributors", label: "Commercial" },
                        { id: "pharmacies", label: "Pharmacies" },
                        { id: "tenders", label: "Tenders" },
                      ].map((tab) => (
                        <button
                          key={tab.id}
                          type="button"
                          onClick={() => setActiveChannel(tab.id as any)}
                          className={`px-3 py-1 rounded-xl text-[11px] font-semibold transition-[background-color,color] duration-150 focus:outline-none ${activeChannel === tab.id
                            ? "bg-primary text-white shadow-sm"
                            : "bg-surface text-slate-600 hover:bg-slate-200/70"
                            }`}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Interactive Flow Architecture Diagram */}
                  <div className="space-y-6">
                    {/* Level 1: Central Command Node */}
                    <div className="text-center">
                      <div className="inline-block p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-primary via-primary-dark to-ink text-white shadow-xl shadow-primary/20 border border-primary-light/30 max-w-md w-full">
                        <div className="text-[11px] font-semibold text-secondary-light flex items-center justify-center gap-1 mb-1">
                          <Building2 className="w-3.5 h-3.5" />
                          Central Origin & Regulatory Holder
                        </div>
                        <h4 className="text-base sm:text-lg !text-white text-white font-black font-heading tracking-wide">
                          Altimi Biosciences (Private) Limited
                        </h4>
                        <div className="text-[11px] text-slate-200 mt-0.5">
                          Central Karachi Facility • 450 m² Cold Storage
                        </div>
                      </div>
                    </div>

                    {/* Connecting Arrows from Central to 3 Channels */}
                    <div className="grid grid-cols-3 text-center py-1">
                      <div className="flex flex-col items-center">
                        <div className="h-6 w-0.5 bg-gradient-to-b from-primary to-secondary" />
                        <span className="text-[10px] font-medium text-muted">
                          Channel A
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="h-6 w-0.5 bg-gradient-to-b from-primary to-primary" />
                        <span className="text-[10px] font-medium text-muted">
                          Channel B
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="h-6 w-0.5 bg-gradient-to-b from-primary to-secondary-dark" />
                        <span className="text-[10px] font-medium text-muted">
                          Channel C
                        </span>
                      </div>
                    </div>

                    {/* Level 2: Three Channels */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {/* Channel 1: Commercial / Wholesale Route */}
                      <div
                        className={`p-4 rounded-2xl border transition-[background-color,border-color,box-shadow] duration-200 flex flex-col justify-between ${activeChannel === "all" || activeChannel === "distributors"
                          ? "bg-slate-50 border-secondary/40 shadow-md ring-1 ring-secondary/20"
                          : "bg-slate-50/50 border-slate-200 opacity-50"
                          }`}
                      >
                        <div className="space-y-2">
                          <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-center shadow-xs">
                            <span className="text-xs font-semibold text-ink">
                              Distributors
                            </span>
                          </div>
                          <div className="flex justify-center text-slate-400">
                            <ArrowRight className="w-3 h-3 rotate-90" />
                          </div>
                          <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-center shadow-xs">
                            <span className="text-xs font-semibold text-ink">
                              Wholesellers
                            </span>
                          </div>
                          <div className="flex justify-center text-slate-400">
                            <ArrowRight className="w-3 h-3 rotate-90" />
                          </div>
                          <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-center shadow-xs">
                            <span className="text-xs font-semibold text-ink">
                              Medical Stores
                            </span>
                          </div>
                        </div>
                        <div className="text-[10px] text-center font-semibold text-secondary-dark mt-3 pt-2 border-t border-slate-200/60">
                          Commercial Channel
                        </div>
                      </div>

                      {/* Channel 2: Direct Hospital Pharmacies Route */}
                      <div
                        className={`p-4 rounded-2xl border transition-[background-color,border-color,box-shadow] duration-200 flex flex-col justify-between ${activeChannel === "all" || activeChannel === "pharmacies"
                          ? "bg-slate-50 border-primary/40 shadow-md ring-1 ring-primary/20"
                          : "bg-slate-50/50 border-slate-200 opacity-50"
                          }`}
                      >
                        <div className="my-auto space-y-3">
                          <div className="p-4 rounded-xl bg-white border border-primary/20 text-center shadow-xs">
                            <Boxes className="w-5 h-5 text-primary mx-auto mb-1.5" />
                            <span className="text-xs font-bold text-ink block">
                              Hospital Pharmacies
                            </span>
                            <span className="text-[10px] text-muted">Direct Clinical Supplies</span>
                          </div>
                        </div>
                        <div className="text-[10px] text-center font-semibold text-primary mt-3 pt-2 border-t border-slate-200/60">
                          Direct Institutional
                        </div>
                      </div>

                      {/* Channel 3: Tender Bidders Route */}
                      <div
                        className={`p-4 rounded-2xl border transition-[background-color,border-color,box-shadow] duration-200 flex flex-col justify-between ${activeChannel === "all" || activeChannel === "tenders"
                          ? "bg-slate-50 border-secondary-dark/40 shadow-md ring-1 ring-secondary-dark/20"
                          : "bg-slate-50/50 border-slate-200 opacity-50"
                          }`}
                      >
                        <div className="my-auto space-y-3">
                          <div className="p-4 rounded-xl bg-white border border-secondary/20 text-center shadow-xs">
                            <ShieldCheck className="w-5 h-5 text-secondary-dark mx-auto mb-1.5" />
                            <span className="text-xs font-bold text-ink block">
                              Tender Bidders
                            </span>
                            <span className="text-[10px] text-muted">Public Procurement</span>
                          </div>
                        </div>
                        <div className="text-[10px] text-center font-semibold text-secondary-dark mt-3 pt-2 border-t border-slate-200/60">
                          Institutional Tenders
                        </div>
                      </div>
                    </div>

                    {/* Connecting Arrows down to Hospitals */}
                    <div className="flex justify-center py-1">
                      <div className="h-6 w-0.5 bg-gradient-to-b from-slate-400 to-primary" />
                    </div>

                    {/* Level 3: Final Destination Node */}
                    <div className="text-center">
                      <div className="inline-block p-4 sm:p-5 rounded-2xl text-white bg-gradient-to-r from-ink via-slate-900 to-ink shadow-xl border border-slate-700 max-w-lg w-full">
                        <div className="text-[11px] font-semibold text-emerald-400 flex items-center justify-center gap-1.5 mb-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Final End-User Healthcare Providers
                        </div>
                        <h4 className="text-base sm:text-lg font-black !text-white text-white font-heading tracking-wide">
                          Hospitals & Institutions
                        </h4>
                        <div className="text-[11px] text-slate-300 mt-0.5">
                          Public & Private Healthcare Sectors Nationwide
                        </div>
                      </div>
                    </div>

                    {/* Feedback Loop Banner */}
                    <div className="p-3.5 rounded-2xl bg-primary/5 border border-primary/20 flex items-center justify-between text-xs text-slate-700">
                      <div className="flex items-center gap-2">
                        <RefreshCw className="w-4 h-4 text-primary animate-spin-slow shrink-0" />
                        <span className="font-semibold text-ink">Continuous Demand & Telemetry Loop:</span>
                        <span className="text-muted hidden sm:inline">
                          Direct consumption feedback returns to ABL for proactive restocking.
                        </span>
                      </div>
                      <span className="text-[10px] font-semibold text-primary shrink-0">
                        Loop Back ↺
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Side: Real Text Details from Original Website (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <Reveal direction="right" delay={0.3}>
                <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-xl space-y-6">
                  {/* Public & Private Relations */}
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-secondary/15 text-secondary-dark border border-secondary/25 mb-3">
                      <Users2 className="w-3.5 h-3.5 text-secondary" />
                      Sector Relationships
                    </div>
                    <h3 className="text-xl font-bold font-heading text-ink">
                      Public & Private Healthcare Network
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                      <strong className="text-ink font-semibold">ABL</strong> enjoy excellent
                      relations and reputation with almost all Public & Private healthcare Sectors in
                      Pakistan which enables ABL helping them to identify the demands to be generated
                      by decision-makers for the purchase of products.
                    </p>
                  </div>

                  {/* Skilled Manpower & Value Proposition */}
                  <div className="pt-5 border-t border-slate-100">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-3">
                      <Target className="w-3.5 h-3.5 text-primary" />
                      Marketing & Sales Objectives
                    </div>
                    <h4 className="text-lg font-bold font-heading text-ink">
                      Deploying Professionally Skilled Manpower
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                      ABL&apos;s Marketing & Sales objectives are achieved by deploying professionally
                      skilled manpower emphasizing{" "}
                      <span className="font-semibold text-ink">
                        product importance, reliability, accuracy, features, benefits, and return on
                        investment as well
                      </span>
                      .
                    </p>
                  </div>

                  {/* Two Different Modules */}
                  <div className="pt-5 border-t border-slate-100">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200 mb-3">
                      <Layers className="w-3.5 h-3.5 text-primary" />
                      Operational Framework
                    </div>
                    <h4 className="text-lg font-bold font-heading text-ink">
                      Two Distinct Management Modules
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                      ABL&apos;s exercise two different modules for the{" "}
                      <strong className="text-ink font-semibold">Product Marketing</strong> and{" "}
                      <strong className="text-ink font-semibold">Sales Management</strong> to achieve
                      the set-forth targets in various health sectors.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                      <div className="p-3.5 rounded-2xl bg-surface border border-slate-200/80">
                        <div className="text-xs font-semibold text-primary">
                          Module 1
                        </div>
                        <div className="text-sm font-bold text-ink mt-0.5">Product Marketing</div>
                        <div className="text-[11px] text-muted mt-1 leading-snug">
                          Awareness, product features, and clinical seminars.
                        </div>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-surface border border-slate-200/80">
                        <div className="text-xs font-semibold text-secondary-dark">
                          Module 2
                        </div>
                        <div className="text-sm font-bold text-ink mt-0.5">Sales Management</div>
                        <div className="text-[11px] text-muted mt-1 leading-snug">
                          Direct supply, tender fulfilment, and client ROI.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* SECTION 3: Storage Protocols & In-Progress Expansion Callout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Reveal direction="up" delay={0.1}>
            <div className="glass-card p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/80 shadow-md h-full">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <ThermometerSnowflake className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold font-heading text-ink mb-1">
                Strict Cold-Chain Protocols
              </h4>
              <p className="text-xs text-muted leading-relaxed">
                2°C to 8°C validated cold rooms and temperature logging systems tailored specifically for diagnostic reagents, enzymes, and biosimilar drugs.
              </p>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <div className="glass-card p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/80 shadow-md h-full">
              <div className="w-12 h-12 rounded-2xl bg-secondary/10 text-secondary-dark flex items-center justify-center mb-4">
                <Warehouse className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold font-heading text-ink mb-1">
                DRAP Karachi Central Facility
              </h4>
              <p className="text-xs text-muted leading-relaxed">
                450 m² certified storage facility located in Khalid Commercial Area, Phase 7 Ext, Karachi, with full regulatory clearance.
              </p>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.3}>
            <div className="glass-card p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/80 shadow-md h-full">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <Truck className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold font-heading text-ink mb-1">
                Nationwide Delivery Network
              </h4>
              <p className="text-xs text-muted leading-relaxed">
                Dispatches serving military, teaching, tertiary, and private hospitals all over Pakistan, with equipped outlets in major cities under progress.
              </p>
            </div>
          </Reveal>
        </div>

        {/* SECTION 4: CTA Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-ink via-slate-900 to-primary-dark text-white p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          {/* Soft ambient radial glow with zero hard edges */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

          {/* Left Text Column */}
          <div className="relative z-10 space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-secondary border border-white/10 mb-2">
              <ShieldCheck className="w-4 h-4 text-secondary" />
              Partner with Altimi Biosciences
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading !text-white text-white leading-tight">
              Looking for Reliable Healthcare Distribution in Pakistan?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Connect directly with our Karachi Central Logistics Operations to schedule product distribution, hospital supplies, or tender collaborations.
            </p>
          </div>

          {/* Right Action Buttons */}
          <div className="relative z-10 shrink-0 flex flex-col sm:flex-row items-center gap-3.5 w-full md:w-auto">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto justify-center shadow-xl shadow-primary/25"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Contact Logistics Team
            </Button>
            <Button
              href="tel:+922135344476"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto justify-center border-white/30 text-white hover:bg-white/10"
            >
              Call: +92 21 35344476
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
