"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FileText,
  Download,
  Search,
  Eye,
  ExternalLink,
  X,
  Layers,
  FileCheck,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { brochures } from "@/data/brochures";
import { Brochure } from "@/types/brochure";
import { Reveal } from "@/components/animations/Reveal";

export default function BrochuresPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [previewPdf, setPreviewPdf] = useState<Brochure | null>(null);

  const categories = [
    "All",
    "Medical Devices",
    "Diagnostic Kits",
    "Medical Consumables",
  ];

  const filteredBrochures = brochures.filter((b) => {
    const matchesCategory =
      selectedCategory === "All" || b.category === selectedCategory;
    const matchesSearch =
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.brand.toLowerCase().includes(search.toLowerCase()) ||
      b.description.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-6 pb-16 lg:pt-8 lg:pb-20 bg-surface min-h-screen">
      <Container>
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-medium text-muted mb-3.5">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span className="text-slate-400">/</span>
          <span className="text-primary font-semibold">Brochures &amp; Datasheets</span>
        </nav>

        {/* Left-Aligned Header */}
        <div className="mb-8 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-ink tracking-tight leading-[1.15]">
            Product Brochures &amp; Technical Documentation
          </h1>
          <p className="text-sm sm:text-base text-muted leading-relaxed mt-3.5">
            Browse and preview official datasheets, diagnostic brochures, and medical equipment specifications distributed by Altimi Biosciences.
          </p>
        </div>

        {/* Filter and Search Bar - Full Container Width matching Products Page */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-md mb-10 space-y-4">
          <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by instrument, brand, or code..."
                className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-surface border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-[border-color,box-shadow]"
              />
            </div>

            {/* Results counter */}
            <div className="text-xs font-semibold text-muted">
              Showing{" "}
              <span className="text-ink font-bold">{filteredBrochures.length}</span>{" "}
              of {brochures.length} brochures
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-[background-color,color,border-color,box-shadow] duration-150 ${
                  selectedCategory === cat
                    ? "bg-primary text-white shadow-sm"
                    : "bg-surface text-slate-700 hover:bg-slate-200/80 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Brochures Grid (4 columns on large screens) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {filteredBrochures.map((brochure, idx) => (
            <Reveal key={brochure.id} direction="up" delay={idx * 0.04}>
              <div className="glass-card rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-2xl transition-[box-shadow,border-color] duration-200 flex flex-col justify-between overflow-hidden group h-full">
                <div>
                  {/* Brochure Cover Image with A4 Portrait Ratio and Hover Overlay */}
                  <div className="relative aspect-[1/1.4] w-full bg-slate-50 overflow-hidden border-b border-slate-100 cursor-pointer"
                       onClick={() => setPreviewPdf(brochure)}>
                    <Image
                      src={brochure.coverImage}
                      alt={brochure.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-top transition-transform duration-500 motion-safe:group-hover:scale-105"
                    />

                    {/* Corner Badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white/95 text-ink shadow-sm border border-slate-200">
                        {brochure.brand}
                      </span>
                    </div>

                    {/* Hover Action Layer */}
                    <div className="absolute inset-0 bg-ink/40 backdrop-blur-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 p-4">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setPreviewPdf(brochure);
                        }}
                        className="w-full py-2.5 px-4 rounded-xl bg-white text-ink text-xs font-bold shadow-lg hover:bg-primary hover:text-white transition-colors duration-150 flex items-center justify-center gap-2 focus:outline-none"
                      >
                        <Eye className="w-4 h-4 text-primary group-hover:text-white" />
                        <span>Preview PDF</span>
                      </button>

                      <a
                        href={brochure.downloadUrl}
                        download
                        onClick={(e) => e.stopPropagation()}
                        className="w-full py-2.5 px-4 rounded-xl bg-secondary text-white text-xs font-bold shadow-lg hover:bg-secondary-dark transition-colors duration-150 flex items-center justify-center gap-2 text-center"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download PDF</span>
                      </a>
                    </div>
                  </div>

                  {/* Brochure Content */}
                  <div className="p-5">
                    <div className="flex items-center justify-between text-xs font-semibold text-secondary-dark mb-1.5">
                      <span>{brochure.category}</span>
                      <span className="text-slate-400 font-normal">
                        {brochure.size}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold font-heading text-ink group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                      {brochure.title}
                    </h3>

                    <p className="text-xs text-muted mt-2 line-clamp-2 leading-relaxed">
                      {brochure.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-5 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => setPreviewPdf(brochure)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-dark transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Preview</span>
                  </button>

                  <a
                    href={brochure.downloadUrl}
                    download
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface hover:bg-primary/10 text-slate-700 hover:text-primary text-xs font-semibold border border-slate-200 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>PDF</span>
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Regulatory & Hospital Tender Assistance */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-ink text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-secondary border border-white/10 mb-2">
              Institutional Documentation
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-heading">
              Require Tender Specifications or DRAP Registration Letters?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Our regulatory department provides certified product registration certificates, user manuals, and OEM authorization letters for hospital procurement committees.
            </p>
          </div>

          <Button href="/contact?type=brochures" variant="primary" size="md">
            Request Regulatory Dossier
          </Button>
        </div>
      </Container>

      {/* ========================================================================= */}
      {/* FULL PDF PREVIEW MODAL */}
      {/* ========================================================================= */}
      {previewPdf && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-ink/70 backdrop-blur-md transition-opacity"
            onClick={() => setPreviewPdf(null)}
          />

          {/* Modal Content Box */}
          <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-slate-200 z-10 overflow-hidden flex flex-col my-auto max-h-[94vh]">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50/80">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold font-heading text-ink line-clamp-1">
                    {previewPdf.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-muted">
                    <span className="font-semibold text-secondary-dark">
                      {previewPdf.brand}
                    </span>
                    <span>•</span>
                    <span>{previewPdf.size}</span>
                    <span>•</span>
                    <span>PDF Document</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons & Close */}
              <div className="flex items-center gap-2">
                <a
                  href={previewPdf.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 text-xs font-semibold text-ink transition-colors"
                  title="Open in new window"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Full Screen</span>
                </a>

                <a
                  href={previewPdf.downloadUrl}
                  download
                  className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-xl bg-primary hover:bg-primary-dark text-white text-xs font-bold transition-colors shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </a>

                <button
                  type="button"
                  onClick={() => setPreviewPdf(null)}
                  className="p-2 rounded-xl text-slate-400 hover:text-ink hover:bg-slate-200/80 transition-colors ml-1 focus:outline-none"
                  aria-label="Close PDF preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal PDF Viewer Body */}
            <div className="p-2 sm:p-4 bg-slate-900/5 flex-1 overflow-hidden">
              <div className="w-full h-[76vh] rounded-2xl overflow-hidden bg-white shadow-inner border border-slate-200">
                <iframe
                  src={`${previewPdf.downloadUrl}#toolbar=1&navpanes=0`}
                  title={previewPdf.title}
                  className="w-full h-full border-0"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
