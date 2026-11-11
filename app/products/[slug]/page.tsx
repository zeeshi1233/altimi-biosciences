"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CheckCircle2,
  FileDown,
  ShieldCheck,
  Package,
  Layers,
  ArrowRight,
  Boxes,
  Phone,
  Award,
  Truck,
  Building2,
  Check,
  Activity,
  Cpu,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { getProductBySlug, products } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";

interface Props {
  params: { slug: string };
}

export default function GenericProductDetailPage({ params }: Props) {
  const product = getProductBySlug(params.slug);
  const [activeTab, setActiveTab] = useState<"specs" | "features" | "compliance">("specs");

  if (!product) notFound();

  const parentMatch = products.find((p) => p.slug === params.slug || p.id === params.slug);
  const initialModelIdx = parentMatch
    ? 0
    : product.models?.findIndex((m) => m.slug === params.slug || m.id === params.slug) ?? 0;

  const [selectedModelIndex, setSelectedModelIndex] = useState<number>(
    initialModelIdx >= 0 ? initialModelIdx : 0
  );
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState<number>(0);

  const handleSelectModel = (idx: number) => {
    setSelectedModelIndex(idx);
    setSelectedGalleryIndex(0);
  };

  const hasModels = Boolean(product.models && product.models.length > 0);
  const activeModel = hasModels ? product.models![selectedModelIndex] || product.models![0] : null;
  const activeGallery =
    activeModel?.gallery && activeModel.gallery.length > 0
      ? activeModel.gallery
      : activeModel
      ? [activeModel.image]
      : [product.image];

  const displayName = activeModel ? activeModel.name : product.name;
  const displayImage = activeGallery[selectedGalleryIndex] || activeGallery[0];
  const displayBadge = activeModel?.badge || product.badge;
  const displayModelCode = activeModel?.modelCode || product.modelCode;
  const displayDescription = activeModel ? activeModel.shortDescription : product.fullDescription;
  const displayFeatures = activeModel?.features && activeModel.features.length > 0 ? activeModel.features : product.features;
  const displaySpecifications =
    activeModel?.specifications && activeModel.specifications.length > 0
      ? activeModel.specifications
      : product.specifications;

  // Find other related products
  const relatedProducts = products
    .filter((p) => p.slug !== params.slug && p.id !== product.id)
    .slice(0, 3);

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
            href={`/products?category=${product.category}`}
            className="hover:text-primary transition-colors"
          >
            {product.categoryName}
          </Link>
          <span>/</span>
          <span className="text-primary font-bold">{product.name}</span>
        </nav>

        {/* HERO PRODUCT SHOWCASE SECTION */}
        <div id="product-viewer" className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16 scroll-mt-24">
          {/* Left Column: Visual Showcase Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative aspect-[4/3] rounded-3xl bg-gradient-to-tr from-white via-surface to-white border border-slate-200/90 p-8 sm:p-10 shadow-2xl flex items-center justify-center overflow-hidden group">
              <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-2xl group-hover:bg-primary/10 transition-colors pointer-events-none" />

              <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5">
                {displayBadge && (
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-secondary-dark text-white shadow-md">
                    {displayBadge}
                  </span>
                )}
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                  DRAP Registered
                </span>
              </div>

              <div className="absolute top-4 right-4 z-10">
                <span className="px-2.5 py-1 rounded-xl text-[10px] font-mono font-bold bg-slate-100 text-slate-700 border border-slate-200">
                  {displayModelCode}
                </span>
              </div>

              <div className="relative w-full h-full">
                <Image
                  src={displayImage}
                  alt={displayName}
                  fill
                  priority
                  className="object-contain drop-shadow-xl"
                />
              </div>
            </div>

            {/* Gallery Switcher (for models with multiple views like Cardiac Navigator) */}
            {activeGallery.length > 1 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {activeGallery.map((imgSrc, gIdx) => {
                  const isCurrentImg = selectedGalleryIndex === gIdx;
                  return (
                    <button
                      key={imgSrc}
                      type="button"
                      onClick={() => setSelectedGalleryIndex(gIdx)}
                      className={`relative aspect-[16/10] rounded-2xl bg-white border p-1.5 overflow-hidden transition-[border-color,box-shadow] duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
                        isCurrentImg
                          ? "border-primary shadow-md ring-1 ring-primary/30"
                          : "border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <Image
                        src={imgSrc}
                        alt={`${displayName} view ${gIdx + 1}`}
                        fill
                        className="object-contain p-1"
                      />
                    </button>
                  );
                })}
              </div>
            )}

            {/* Quick Action CTAs */}
            <div className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Button
                  href={`/contact?product=${encodeURIComponent(displayName)}&type=quote`}
                  variant="primary"
                  size="lg"
                  className="w-full justify-center shadow-lg shadow-primary/25"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Request Official Quote
                </Button>
                <Button
                  href={product.brochureUrl || "/brochures"}
                  variant="outline"
                  size="lg"
                  className="w-full justify-center"
                  leftIcon={<FileDown className="w-4 h-4" />}
                >
                  Catalog (PDF)
                </Button>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-slate-600">
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  <span>Karachi Healthcare Hotline:</span>
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
                  <strong className="text-ink block font-bold">DRAP Approved</strong>
                  <span className="text-muted">Pakistan Regulatory Compliance</span>
                </div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-2.5">
                <Truck className="w-5 h-5 text-primary shrink-0" />
                <div className="text-[11px] leading-snug">
                  <strong className="text-ink block font-bold">Cold Chain & Depot</strong>
                  <span className="text-muted">Karachi Central Logistics</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Details & Model Switcher (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-secondary/15 text-secondary-dark border border-secondary/25">
                  {product.brand}
                </span>
                <span className="text-xs font-semibold text-muted">
                  • {product.categoryName}
                </span>
                {product.country && (
                  <span className="text-xs font-medium text-slate-500">
                    • {product.country}
                  </span>
                )}
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-ink tracking-tight">
                {displayName}
              </h1>
              <p className="text-base sm:text-lg font-medium text-primary mt-2">
                {product.subtitle}
              </p>
            </div>

            {/* Interactive Model Switcher (only shown when parent product has multiple models) */}
            {hasModels && (
              <div className="p-4 rounded-2xl bg-white border border-primary/20 shadow-xs space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-ink flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-primary" />
                    Select Product Model ({product.models!.length} Variants)
                  </span>
                  <span className="text-muted">Click a model to inspect specs</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.models!.map((m, idx) => {
                    const isSelected = selectedModelIndex === idx;
                    return (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => handleSelectModel(idx)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-[background-color,color,border-color,box-shadow] duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
                          isSelected
                            ? "bg-primary text-white shadow-sm"
                            : "bg-surface text-slate-700 hover:bg-slate-200/80 border border-slate-200"
                        }`}
                      >
                        {m.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {displayDescription}
            </p>

            {/* Key Clinical & Technical Checklist */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-ink flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  Key Clinical & Technical Features
                </h3>
                <span className="text-xs text-muted font-medium">Quality Assurance</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {displayFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    <span className="leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Regulatory Approvals Badges */}
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

        {/* AVAILABLE MODELS & VARIANTS SHOWCASE SECTION */}
        {hasModels && (
          <div className="mb-16">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-2">
                  <Layers className="w-3.5 h-3.5 text-primary" />
                  Product Family Models
                </span>
                <h2 className="text-2xl sm:text-3xl font-black font-heading text-ink">
                  Available Models in {product.categoryName}
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-muted max-w-md">
                Compare and preview every registered configuration under this category. Click any model to view it in the main showcase above.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.models!.map((model, idx) => {
                const isSelected = selectedModelIndex === idx;
                return (
                  <div
                    key={model.id}
                    className={`rounded-3xl bg-white border transition-[border-color,box-shadow] duration-200 overflow-hidden flex flex-col justify-between ${
                      isSelected
                        ? "border-primary shadow-lg ring-1 ring-primary/25"
                        : "border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300"
                    }`}
                  >
                    <div>
                      <div className="relative aspect-[4/3] bg-slate-50/80 p-6 border-b border-slate-100 flex items-center justify-center">
                        {model.badge && (
                          <span className="absolute top-3 left-3 z-10 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-primary/10 text-primary border border-primary/20">
                            {model.badge}
                          </span>
                        )}
                        <div className="relative w-full h-full">
                          <Image
                            src={model.image}
                            alt={model.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>

                      <div className="p-6 space-y-3">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-semibold text-primary">
                            {model.modelCode || product.brand}
                          </span>
                          {isSelected && (
                            <span className="text-[11px] font-bold text-secondary-dark bg-secondary/10 px-2 py-0.5 rounded-full">
                              Viewing Now
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg font-bold font-heading text-ink">
                          {model.name}
                        </h3>
                        <p className="text-xs text-muted leading-relaxed">
                          {model.shortDescription}
                        </p>

                        {model.specifications && model.specifications.length > 0 && (
                          <div className="pt-3 border-t border-slate-100 space-y-1.5">
                            {model.specifications.slice(0, 3).map((s, si) => (
                              <div key={si} className="flex items-center justify-between text-xs">
                                <span className="text-slate-500">{s.label}</span>
                                <span className="font-semibold text-ink">{s.value}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="px-6 pb-6 flex items-center gap-2.5">
                      <button
                        type="button"
                        onClick={() => {
                          handleSelectModel(idx);
                          document
                            .getElementById("product-viewer")
                            ?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-colors ${
                          isSelected
                            ? "bg-secondary text-white"
                            : "bg-primary text-white hover:bg-primary-dark"
                        }`}
                      >
                        {isSelected ? "Selected in Viewer" : "View Model Details"}
                      </button>
                      <Button
                        href={`/contact?product=${encodeURIComponent(model.name)}&type=quote`}
                        variant="outline"
                        size="sm"
                      >
                        Quote
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* INTERACTIVE DETAIL TABS SECTION */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xl mb-16">
          <div className="flex flex-wrap items-center gap-2 pb-6 border-b border-slate-100">
            {[
              { id: "specs", label: "Technical Specifications" },
              { id: "features", label: "Clinical Capabilities & Applications" },
              { id: "compliance", label: "Regulatory Compliance & Warranty" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-[background-color,color,border-color,box-shadow] duration-150 focus:outline-none ${
                  activeTab === tab.id
                    ? "bg-primary text-white shadow-md shadow-primary/20"
                    : "bg-surface text-slate-600 hover:bg-slate-200/80 border border-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === "specs" && (
            <div className="pt-8 space-y-6">
              <div className="max-w-2xl">
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-ink">
                  Specifications & Performance Parameters
                </h3>
                <p className="text-xs sm:text-sm text-muted mt-1">
                  Verified parameters and performance benchmarks for institutional evaluation.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {displaySpecifications.map((spec, idx) => (
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

          {activeTab === "features" && (
            <div className="pt-8 space-y-6">
              <div className="max-w-2xl">
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-ink">
                  Clinical Capabilities & Workflow Integration
                </h3>
                <p className="text-xs sm:text-sm text-muted mt-1">
                  Engineered to optimize diagnostic turnaround times and hospital workflow safety.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="p-5 rounded-2xl bg-surface border border-slate-200/80 space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                    <Activity className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="text-sm font-bold text-ink">Clinical Accuracy</h4>
                  <p className="text-xs text-muted leading-relaxed">
                    High precision biosensors, optics, and assay chemistry delivering gold-standard results.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-surface border border-slate-200/80 space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-secondary/15 text-secondary-dark flex items-center justify-center font-bold">
                    <ShieldCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <h4 className="text-sm font-bold text-ink">Infection & Needlestick Safety</h4>
                  <p className="text-xs text-muted leading-relaxed">
                    Designed with clinical ergonomics and passive barriers to protect hospital staff and patients.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-surface border border-slate-200/80 space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="text-sm font-bold text-ink">Nationwide Support</h4>
                  <p className="text-xs text-muted leading-relaxed">
                    Direct manufacturer warranty, Karachi engineering support, and immediate spare parts inventory.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "compliance" && (
            <div className="pt-8 space-y-6">
              <div className="max-w-2xl">
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-ink">
                  Quality Assurance & DRAP Compliance
                </h3>
                <p className="text-xs sm:text-sm text-muted mt-1">
                  Full regulatory documentation, Form 7 DRAP clearances, and CE/ISO certifications available for hospital tender submissions.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-surface border border-slate-200/80 space-y-3">
                <div className="flex flex-wrap gap-3">
                  {product.certifications.map((cert, i) => (
                    <div
                      key={i}
                      className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-ink flex items-center gap-2 shadow-xs"
                    >
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Every product distributed by Altimi Biosciences is tracked through rigorous cold chain and batch inspection protocols from arrival at Karachi Port to delivery at your healthcare facility.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* RELATED PRODUCTS EXPLORER */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-secondary/10 text-secondary-dark border border-secondary/20 mb-2">
                Diagnostics Portfolio
              </span>
              <h2 className="text-2xl sm:text-3xl font-black font-heading text-ink mt-1">
                Explore More Solutions
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

        {/* INSTITUTIONAL PROCUREMENT CALLOUT BANNER */}
        <div className="rounded-3xl bg-gradient-to-r from-ink via-slate-900 to-primary-dark text-white p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 max-w-xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-secondary border border-white/10 mb-2">
              <Building2 className="w-4 h-4 text-secondary" />
              Direct Institutional Quotation & Tender Supply
            </span>
            <h3 className="text-2xl sm:text-3xl font-black font-heading !text-white text-white">
              Upgrade Your Healthcare Facility with Altimi
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Connect directly with our Karachi Central Diagnostics Operations to request technical datasheets, institutional pricing, or equipment demonstrations.
            </p>
          </div>

          <Button
            href={`/contact?product=${encodeURIComponent(displayName)}&type=quote`}
            variant="primary"
            size="lg"
            className="shrink-0 shadow-xl shadow-primary/25"
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Inquire Product Pricing
          </Button>
        </div>
      </Container>
    </div>
  );
}

