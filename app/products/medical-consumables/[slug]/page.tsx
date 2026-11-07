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
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { getProductBySlug, products } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";

interface Props {
  params: { slug: string };
}

export default function MedicalConsumableDetailPage({ params }: Props) {
  const product = getProductBySlug(params.slug);
  const [activeTab, setActiveTab] = useState<"specs" | "packaging" | "compliance">("specs");

  if (!product) notFound();

  // Find other medical consumables or related products
  const relatedProducts = products
    .filter((p) => p.slug !== params.slug)
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
            href="/products?category=medical-consumables"
            className="hover:text-primary transition-colors"
          >
            Medical Consumables
          </Link>
          <span>/</span>
          <span className="text-primary font-bold">{product.name}</span>
        </nav>

        {/* HERO PRODUCT SHOWCASE SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16">
          {/* Left Column: Visual Showcase Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative aspect-[4/3] rounded-3xl bg-gradient-to-tr from-white via-surface to-white border border-slate-200/90 p-8 sm:p-10 shadow-2xl flex items-center justify-center overflow-hidden group">
              <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-2xl group-hover:bg-primary/10 transition-colors pointer-events-none" />

              <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5">
                {product.badge && (
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-secondary-dark text-white shadow-md uppercase tracking-wider">
                    {product.badge}
                  </span>
                )}
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-primary/10 text-primary border border-primary/20 uppercase tracking-wider">
                  Hospital Standard
                </span>
              </div>

              <div className="absolute top-4 right-4 z-10">
                <span className="px-2.5 py-1 rounded-xl text-[10px] font-mono font-bold bg-slate-100 text-slate-700 border border-slate-200">
                  {product.modelCode}
                </span>
              </div>

              <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  className="object-contain drop-shadow-xl"
                />
              </div>
            </div>

            {/* Quick Action CTAs */}
            <div className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Button
                  href={`/contact?product=${encodeURIComponent(product.name)}&type=bulk`}
                  variant="primary"
                  size="lg"
                  className="w-full justify-center shadow-lg shadow-primary/25"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Inquire Bulk Supply
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
                  <span>Hospital Supplies Helpline:</span>
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
                  <strong className="text-ink block font-bold">DRAP Registered</strong>
                  <span className="text-muted">Medical Consumable Grade</span>
                </div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-2.5">
                <Truck className="w-5 h-5 text-primary shrink-0" />
                <div className="text-[11px] leading-snug">
                  <strong className="text-ink block font-bold">Immediate Stock</strong>
                  <span className="text-muted">Karachi Depot Dispatch</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Details & Value Props (7 cols) */}
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

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {product.fullDescription}
            </p>

            {/* Key Clinical Checklist */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold uppercase tracking-wider text-ink flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  Key Clinical & Material Features
                </h3>
                <span className="text-xs text-muted font-medium">Hospital Quality Assurance</span>
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

        {/* INTERACTIVE DETAIL TABS SECTION */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xl mb-16">
          <div className="flex flex-wrap items-center gap-2 pb-6 border-b border-slate-100">
            {[
              { id: "specs", label: "Product Specifications" },
              { id: "packaging", label: "Packaging & Carton Units" },
              { id: "compliance", label: "Regulatory Compliance" },
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

          {activeTab === "specs" && (
            <div className="pt-8 space-y-6">
              <div className="max-w-2xl">
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-ink">
                  Material & Technical Specifications
                </h3>
                <p className="text-xs sm:text-sm text-muted mt-1">
                  Verified laboratory and clinical examination parameters for medical personnel safety.
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

          {activeTab === "packaging" && (
            <div className="pt-8 space-y-6">
              <div className="max-w-2xl">
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-ink">
                  Standard Hospital Master Packaging
                </h3>
                <p className="text-xs sm:text-sm text-muted mt-1">
                  Packaging designed for rapid stockroom barcode tracking, hygienic ward dispensing, and pallet distribution.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="p-5 rounded-2xl bg-surface border border-slate-200/80 space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                    <Boxes className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="text-sm font-bold text-ink">Dispenser Boxes</h4>
                  <p className="text-xs text-muted leading-relaxed">
                    Hermetically sealed inner packs with tear-open dispensing slots for nursing stations and ICUs.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-surface border border-slate-200/80 space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-secondary/15 text-secondary-dark flex items-center justify-center font-bold">
                    <Package className="w-5 h-5 text-secondary" />
                  </div>
                  <h4 className="text-sm font-bold text-ink">Corrugated Master Cartons</h4>
                  <p className="text-xs text-muted leading-relaxed">
                    Heavy-duty 5-ply cartons protecting against moisture, vibration, and handling during provincial road transit.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-surface border border-slate-200/80 space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="text-sm font-bold text-ink">Karachi Warehouse Inventory</h4>
                  <p className="text-xs text-muted leading-relaxed">
                    Large bulk buffer inventory maintained in Karachi to guarantee uninterrupted supply for major hospital contracts.
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
                  Stringent international and Pakistan regulatory standards governing hospital hygiene.
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
                  Every batch of Altimi medical consumables is tested for tensile strength, barrier integrity, and chemical safety prior to institutional distribution.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* RELATED PRODUCTS EXPLORER */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold text-secondary-dark uppercase tracking-wider">
                Complementary Consumables
              </span>
              <h2 className="text-2xl sm:text-3xl font-black font-heading text-ink mt-1">
                Explore Related Hospital Supplies
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
            <span className="text-xs font-bold text-secondary uppercase tracking-widest flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-secondary" />
              Annual Tender & Contract Supply
            </span>
            <h3 className="text-2xl sm:text-3xl font-black font-heading !text-white text-white">
              Institutional Hospital Bulk Procurement
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Contract with Altimi Biosciences for guaranteed scheduled monthly supply, institutional credit facilities, and direct factory pricing across Pakistan.
            </p>
          </div>

          <Button
            href={`/contact?product=${encodeURIComponent(product.name)}&type=tender`}
            variant="primary"
            size="lg"
            className="shrink-0 shadow-xl shadow-primary/25"
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Inquire Bulk Pricing
          </Button>
        </div>
      </Container>
    </div>
  );
}
