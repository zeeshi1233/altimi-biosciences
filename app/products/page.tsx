"use client";

import React, { useState, useMemo, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Search, X, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ProductCard } from "@/components/ui/ProductCard";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { products, productCategories } from "@/data/products";
import { Product } from "@/types/product";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const prefersReduced = useReducedMotion();
  const tabListRef = useRef<HTMLDivElement>(null);

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory =
        selectedCategory === "all" || p.category === selectedCategory;
      const matchesSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.categoryName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (p.brand && p.brand.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const activeIndex = productCategories.findIndex((c) => c.id === selectedCategory);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) return;
      e.preventDefault();
      const len = productCategories.length;
      let next = activeIndex;
      if (e.key === "ArrowRight") next = (activeIndex + 1) % len;
      if (e.key === "ArrowLeft") next = (activeIndex - 1 + len) % len;
      if (e.key === "Home") next = 0;
      if (e.key === "End") next = len - 1;
      setSelectedCategory(productCategories[next].id);
      const tabEl = tabListRef.current?.querySelectorAll("[role=tab]")[next] as HTMLElement | undefined;
      tabEl?.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
    },
    [activeIndex]
  );

  useEffect(() => {
    const tabEl = tabListRef.current?.querySelectorAll("[role=tab]")[activeIndex] as HTMLElement | undefined;
    tabEl?.scrollIntoView({ block: "nearest", inline: "center", behavior: prefersReduced ? "auto" : "smooth" });
  }, [activeIndex, prefersReduced]);

  return (
    <div className="pt-6 pb-16 lg:pt-8 lg:pb-20 bg-surface min-h-screen">
      <Container>
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-medium text-muted mb-3.5">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span className="text-slate-400">/</span>
          <span className="text-primary font-semibold">Products</span>
        </nav>

        {/* Left-Aligned Header */}
        <div className="mb-8 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-ink tracking-tight leading-[1.15]">
            Medical Diagnostics &amp; Supplies Catalog
          </h1>
          <p className="text-sm sm:text-base text-muted leading-relaxed mt-3.5">
            Explore our comprehensive inventory of Randox automated chemistry systems, Bittium wearable biosensors, Greiner safety catheters, and hospital consumables.
          </p>
        </div>

        {/* Sticky Filter & Search Bar */}
        <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-md p-5 sm:p-6 rounded-3xl border border-slate-200/90 shadow-md mb-10 space-y-4">
          <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by product, brand, or code..."
                className="w-full pl-11 pr-10 py-2.5 rounded-xl bg-surface border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-[border-color,box-shadow]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-ink focus:outline-none"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Results counter */}
            <div className="text-xs font-semibold text-muted shrink-0">
              Showing <span className="text-ink font-bold">{filteredProducts.length}</span> of{" "}
              {products.length} products
            </div>
          </div>

          {/* Category Tabs in ONE row with sliding active indicator & smooth touch scroll */}
          <div className="relative flex items-center overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pt-2 border-t border-slate-100">
            <div
              ref={tabListRef}
              role="tablist"
              aria-label="Filter products by category"
              onKeyDown={handleKeyDown}
              className="flex items-center gap-1.5 flex-nowrap min-w-0 flex-1 py-1"
            >
              {productCategories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    role="tab"
                    type="button"
                    aria-selected={isActive}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`relative flex items-center gap-2 shrink-0 snap-start px-4 py-2 rounded-xl text-xs font-semibold select-none transition-[color,box-shadow,transform] duration-200 outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-primary/40 ${
                      isActive
                        ? "text-white [box-shadow:var(--shadow-tab-active)] hover:brightness-105"
                        : "text-slate-700 hover:text-primary hover:bg-slate-100/80"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="products-sticky-tab-indicator"
                        className="absolute inset-0 rounded-xl bg-gradient-to-b from-primary-light to-primary"
                        transition={
                          prefersReduced
                            ? { duration: 0 }
                            : { type: "spring", stiffness: 380, damping: 32 }
                        }
                        aria-hidden="true"
                      />
                    )}
                    <span className="relative z-10 whitespace-nowrap">{cat.name}</span>
                    <span
                      className={`relative z-10 inline-flex items-center justify-center min-w-[20px] h-4 px-1 rounded-full text-[10px] font-bold leading-none ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-slate-200/90 text-slate-600"
                      }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Reset Action if active filters */}
          {(selectedCategory !== "all" || searchQuery !== "") && (
            <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
              <span className="text-muted">
                Active:{" "}
                <strong className="text-ink">
                  {selectedCategory !== "all" ? productCategories.find((c) => c.id === selectedCategory)?.name : "All Categories"}
                  {searchQuery ? ` • "${searchQuery}"` : ""}
                </strong>
              </span>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="font-bold text-primary hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 p-8">
            <p className="text-base font-semibold text-ink">
              No products found matching &ldquo;{searchQuery}&rdquo;.
            </p>
            <p className="text-xs text-muted mt-1">
              Try adjusting your search terms or category selection.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary-dark transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={(p) => setQuickViewProduct(p)}
              />
            ))}
          </div>
        )}
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
            <div className="aspect-square relative bg-slate-50 rounded-2xl p-6 border border-slate-100 flex items-center justify-center">
              <Image
                src={quickViewProduct.image}
                alt={quickViewProduct.name}
                fill
                className="object-contain p-4"
              />
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-xs font-semibold text-secondary-dark">
                  {quickViewProduct.categoryName}
                </span>
                <h4 className="text-xl font-bold font-heading text-ink mt-1">
                  {quickViewProduct.name}
                </h4>
                <p className="text-xs text-muted mt-2 leading-relaxed">
                  {quickViewProduct.fullDescription}
                </p>
              </div>

              <div>
                <h5 className="text-xs font-bold text-ink mb-2">
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

              <div className="pt-2 border-t border-slate-100">
                <h5 className="text-xs font-bold text-ink mb-2">
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
                  href={
                    quickViewProduct.category === "clinical-chemistry-analyzer"
                      ? `/products/clinical-chemistry-analyzer/${quickViewProduct.slug}`
                      : quickViewProduct.category === "medical-consumables"
                      ? `/products/medical-consumables/${quickViewProduct.slug}`
                      : `/products/${quickViewProduct.slug}`
                  }
                  className="px-4 py-2 text-xs font-bold text-ink hover:text-primary transition-colors"
                >
                  View Product Page
                </Link>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
