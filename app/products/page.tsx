"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Filter, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/ui/ProductCard";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { products, productCategories } from "@/data/products";
import { Product } from "@/types/product";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

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

  return (
    <div className="py-12 lg:py-20 bg-surface min-h-screen">
      <Container>
        {/* Header */}
        <SectionHeading
          badge="Product Directory"
          title="Complete Medical & Diagnostics Portfolio"
          subtitle="Explore our comprehensive line of automated clinical chemistry analyzers, medical devices, and hospital consumables distributed across Pakistan."
          align="center"
          className="mb-12"
        />

        {/* Filter & Search Bar */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-md mb-10 space-y-4">
          <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by product, brand, or code..."
                className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-surface border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-[border-color,box-shadow]"
              />
            </div>

            {/* Results counter */}
            <div className="text-xs font-semibold text-muted">
              Showing <span className="text-ink font-bold">{filteredProducts.length}</span> of{" "}
              {products.length} products
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
            {productCategories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-[background-color,color,border-color,box-shadow] duration-150 ${
                    isActive
                      ? "bg-primary text-white shadow-sm"
                      : "bg-surface text-slate-700 hover:bg-slate-200/80 border border-slate-200"
                  }`}
                >
                  {cat.name} ({cat.count})
                </button>
              );
            })}
          </div>
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
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-primary text-white text-xs font-bold"
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

