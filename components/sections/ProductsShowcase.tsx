"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, Layers, CheckCircle2, FlaskConical, ShieldCheck, Activity, Pill, HeartPulse, Microscope, Droplet, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/ui/ProductCard";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { products, productCategories } from "@/data/products";
import { Product } from "@/types/product";
import { Reveal } from "@/components/animations/Reveal";

export const ProductsShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const prefersReduced = useReducedMotion();
  const tabListRef = useRef<HTMLDivElement>(null);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const displayedCount = filteredProducts.length;

  const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    all: Layers,
    "clinical-chemistry-analyzers": FlaskConical,
    "point-of-care-testing": Activity,
    "holter-monitoring-systems": HeartPulse,
    "ambulatory-blood-pressure-monitoring": Activity,
    medicines: Pill,
    "hospital-consumables": ShieldCheck,
    "surgical-supplies": ShieldCheck,
    "chemistry-analyzer": FlaskConical,
    "molecular-analyzer": Microscope,
    "diagnostic-kits": Activity,
    "cardiac-monitors": HeartPulse,
    "remote-cardiac-monitoring": HeartPulse,
    "cardiac-monitoring": HeartPulse,
    "automatic-blood-pressure-monitor": Activity,
    "biosimilar-drugs": Pill,
    "alcohol-pads": Droplet,
    "dignity-underpads": ShieldCheck,
    "surgical-gloves": ShieldCheck,
  };

  const categoryTabs = productCategories.map((c) => ({
    id: c.id,
    name: c.name,
    count: c.count,
    icon: categoryIcons[c.id] || Layers,
  }));

  const activeIndex = categoryTabs.findIndex((t) => t.id === selectedCategory);

  /* Arrow-key keyboard navigation for the tablist */
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) return;
      e.preventDefault();
      const len = categoryTabs.length;
      let next = activeIndex;
      if (e.key === "ArrowRight") next = (activeIndex + 1) % len;
      if (e.key === "ArrowLeft") next = (activeIndex - 1 + len) % len;
      if (e.key === "Home") next = 0;
      if (e.key === "End") next = len - 1;
      setSelectedCategory(categoryTabs[next].id);
      /* Scroll the newly focused tab into view on mobile */
      const tabEl = tabListRef.current?.querySelectorAll("[role=tab]")[next] as HTMLElement | undefined;
      tabEl?.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
    },
    [activeIndex, categoryTabs]
  );

  /* Auto-scroll active tab into view when it changes on mobile */
  useEffect(() => {
    const tabEl = tabListRef.current?.querySelectorAll("[role=tab]")[activeIndex] as HTMLElement | undefined;
    tabEl?.scrollIntoView({ block: "nearest", inline: "center", behavior: prefersReduced ? "auto" : "smooth" });
  }, [activeIndex, prefersReduced]);

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-white">
      <Container>
        {/* Editorial Split Header */}
        <Reveal direction="up">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 pb-8 border-b border-slate-200/80">
            <div className="space-y-3 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                <Layers className="w-3.5 h-3.5 text-primary" />
                Featured Diagnostic Portfolio
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-ink tracking-tight leading-tight">
                Precision Medical & Diagnostic Systems
              </h2>
            </div>
            <div className="max-w-md space-y-2">
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Explore our DRAP-registered clinical chemistry instruments, Holter monitoring systems, and specialized hospital consumables to support comprehensive healthcare delivery across Pakistan.
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-secondary-dark">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 motion-safe:animate-pulse" />
                <span>Verified OEM Systems • Nationwide Distribution</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ── Redesigned Filter Bar ─────────────────────────────────────── */}
        <Reveal direction="up" delay={0.05}>
          <div className="mb-10">
            {/*
              Outer container: soft light-blue/gray surface, 1px border, rounded-2xl, subtle inset shadow.
              On mobile it becomes a horizontally-scrollable, snap-scroll row.
            */}
            <div className="relative flex items-center gap-3 bg-surface border border-primary/10 rounded-2xl px-1.5 py-1.5 [box-shadow:var(--shadow-filter-bar)] overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden dark:bg-slate-800/60 dark:border-slate-700">

              {/* Mobile edge-fade gradients (pointer-events:none so they don't block clicks) */}
              <div className="absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-surface to-transparent pointer-events-none z-10 rounded-l-2xl dark:from-slate-800 sm:hidden" />
              <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-surface to-transparent pointer-events-none z-10 rounded-r-2xl dark:from-slate-800 sm:hidden" />

              {/* Tab list */}
              <div
                ref={tabListRef}
                role="tablist"
                aria-label="Filter products by category"
                onKeyDown={handleKeyDown}
                className="flex items-center gap-1 flex-nowrap min-w-0 flex-1"
              >
                {categoryTabs.map((category) => {
                  const isActive = selectedCategory === category.id;
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      role="tab"
                      type="button"
                      aria-selected={isActive}
                      tabIndex={isActive ? 0 : -1}
                      onClick={() => setSelectedCategory(category.id)}
                      className={[
                        /* Base — consistent sizing, font, layout */
                        "relative flex items-center gap-2 shrink-0 snap-start",
                        "px-[14px] min-h-[44px] rounded-xl",
                        "text-[13.5px] font-semibold leading-none select-none",
                        "transition-[color,box-shadow,transform] duration-200 ease-out",
                        "outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-primary/40",
                        isActive
                          ? /* Active: solid blue gradient + white glow */
                            "text-white [box-shadow:var(--shadow-tab-active)] hover:brightness-105"
                          : /* Inactive */
                            "text-slate-600 hover:text-primary hover:bg-white hover:shadow-sm hover:-translate-y-px dark:text-slate-300 dark:hover:bg-slate-700",
                      ].join(" ")}
                    >
                      {/* Animated sliding background for the active tab */}
                      {isActive && (
                        <motion.span
                          layoutId="showcase-tab-indicator"
                          className="absolute inset-0 rounded-xl bg-gradient-to-b from-primary-light to-primary"
                          transition={
                            prefersReduced
                              ? { duration: 0 }
                              : { type: "spring", stiffness: 380, damping: 32 }
                          }
                          aria-hidden="true"
                        />
                      )}

                      {/* Icon */}
                      <span className="relative z-10 shrink-0">
                        <Icon
                          className={`w-[18px] h-[18px] stroke-2 transition-colors duration-200 ${
                            isActive ? "text-white" : "text-slate-400 group-hover:text-primary"
                          }`}
                        />
                      </span>

                      {/* Label */}
                      <span className="relative z-10 whitespace-nowrap">{category.name}</span>

                      {/* Count badge */}
                      <span
                        className={[
                          "relative z-10 inline-flex items-center justify-center",
                          "min-w-[24px] h-5 px-1.5 rounded-full",
                          "text-[11px] font-semibold leading-none",
                          isActive
                            ? "bg-white/20 text-white"
                            : "bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300",
                        ].join(" ")}
                      >
                        {category.count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Divider between filters and counter — hidden on mobile */}
              <div className="hidden sm:block h-6 w-px bg-primary/10 shrink-0" aria-hidden="true" />

              {/* Results counter — right-aligned, vertically centred in the same row */}
              {/* <div className="hidden sm:flex items-center gap-1.5 shrink-0 pr-1 text-[13px] text-muted whitespace-nowrap dark:text-slate-400">
                <span>Showing</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={displayedCount}
                    initial={prefersReduced ? {} : { opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={prefersReduced ? {} : { opacity: 0, y: 6 }}
                    transition={{ duration: 0.18 }}
                    className="inline-flex items-center justify-center min-w-[26px] h-6 rounded-md bg-white border border-slate-200/80 px-1.5 font-bold text-ink text-[13px] shadow-xs dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                  >
                    {displayedCount}
                  </motion.span>
                </AnimatePresence>
                <span>of {filteredProducts.length} systems</span>
              </div> */}
            </div>

            {/* Mobile-only results counter + Reset button — shown below the scrollable row */}
            <div className="sm:hidden flex items-center justify-between mt-2.5 px-0.5">
              <p className="text-xs text-muted">
                Showing <strong className="text-ink">{displayedCount}</strong> of {filteredProducts.length} systems
              </p>
              {selectedCategory !== "all" && (
                <button
                  type="button"
                  onClick={() => setSelectedCategory("all")}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary-dark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                >
                  <X className="w-3.5 h-3.5" />
                  Reset
                </button>
              )}
            </div>

            {/* Desktop Reset button — appears inline when a filter other than All is active */}
            {selectedCategory !== "all" && (
              <div className="hidden sm:flex justify-end mt-2">
                <button
                  type="button"
                  onClick={() => setSelectedCategory("all")}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary-dark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                >
                  <X className="w-3 h-3" />
                  Clear filter
                </button>
              </div>
            )}
          </div>
        </Reveal>
        {/* ── End Filter Bar ────────────────────────────────────────────── */}

        {/* Products Grid — staggered fade/slide-up on filter change */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={prefersReduced ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={prefersReduced ? {} : { opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {filteredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={prefersReduced ? {} : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.22,
                  delay: prefersReduced ? 0 : i * 0.055,
                  ease: "easeOut",
                }}
              >   
                <ProductCard
                  product={product}
                  onQuickView={(p) => setQuickViewProduct(p)}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All Button */}
        <Reveal direction="up" delay={0.2}>
          <div className="mt-14 text-center">
            <Button
              href="/products"
              variant="outline"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              View Full Product Catalog ({products.length} Items)
            </Button>
          </div>
        </Reveal>
      </Container>

      {/* Quick View Modal */}
      <Modal
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        title={quickViewProduct?.name || "Product Quick View"}
        size="lg"
      >
        {quickViewProduct && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* Image Preview */}
            <div className="aspect-square relative bg-slate-50 rounded-2xl p-6 border border-slate-100 flex items-center justify-center">
              <Image
                src={quickViewProduct.image}
                alt={quickViewProduct.name}
                fill
                className="object-contain p-4"
              />
            </div>

            {/* Details & Specs */}
            <div className="space-y-4">
              <div>
                <span className="text-xs font-medium text-secondary-dark">
                  {quickViewProduct.categoryName}
                </span>
                <h4 className="text-xl font-bold font-heading text-ink mt-1">
                  {quickViewProduct.name}
                </h4>
                <p className="text-xs text-muted mt-2 leading-relaxed">
                  {quickViewProduct.fullDescription}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h5 className="text-xs font-semibold text-ink mb-2">
                  Key Capabilities
                </h5>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {quickViewProduct.features.slice(0, 4).map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specifications preview */}
              <div className="pt-2 border-t border-slate-100">
                <h5 className="text-xs font-semibold text-ink mb-2">
                  Specifications
                </h5>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {quickViewProduct.specifications.slice(0, 4).map((s, i) => (
                    <div key={i} className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                      <div className="text-[10px] text-muted">{s.label}</div>
                      <div className="font-semibold text-ink line-clamp-1">{s.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-3 flex items-center gap-3">
                <Button
                  href={`/contact?product=${encodeURIComponent(quickViewProduct.name)}`}
                  variant="primary"
                  size="md"
                  className="flex-1 justify-center"
                >
                  Request Official Quote
                </Button>
                <Link
                  href={`/products/${quickViewProduct.slug}`}
                  className="px-4 py-2 text-xs font-semibold text-ink hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  <span>View Details{quickViewProduct.models?.length ? ` (${quickViewProduct.models.length} Models)` : ""}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

