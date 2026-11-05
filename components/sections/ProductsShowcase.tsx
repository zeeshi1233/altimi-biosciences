"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Layers, FileDown, CheckCircle2, PhoneCall } from "lucide-react";
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

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-white">
      <Container>
        <Reveal direction="up">
          <SectionHeading
            badge="Our Product Portfolio"
            badgeIcon={<Layers className="w-3.5 h-3.5" />}
            title="Advanced Diagnostic Equipment & Supplies"
            subtitle="Explore our DRAP-registered clinical analyzers, cardiology sensors, and high-purity hospital consumables."
            align="center"
            className="mb-10"
          />
        </Reveal>

        {/* Category Tabs */}
        <Reveal direction="up" delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {productCategories.slice(0, 5).map((category) => {
              const isActive = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none ${
                    isActive
                      ? "bg-primary text-white shadow-md shadow-primary/25"
                      : "bg-surface text-slate-700 hover:bg-slate-200/80 border border-slate-200"
                  }`}
                >
                  {category.name}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Products Grid with Framer Motion AnimatePresence */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence>
            {filteredProducts.slice(0, 6).map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
              >
                <ProductCard
                  product={product}
                  onQuickView={(p) => setQuickViewProduct(p)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

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
                <span className="text-[11px] font-bold text-secondary-dark uppercase tracking-wider">
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
                <h5 className="text-xs font-bold uppercase tracking-wider text-ink mb-2">
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
                <h5 className="text-xs font-bold uppercase tracking-wider text-ink mb-2">
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
                  href={
                    quickViewProduct.category === "clinical-chemistry-analyzer"
                      ? `/products/clinical-chemistry-analyzer/${quickViewProduct.slug}`
                      : quickViewProduct.category === "medical-consumables"
                      ? `/products/medical-consumables/${quickViewProduct.slug}`
                      : `/products/${quickViewProduct.slug}`
                  }
                  className="px-4 py-2 text-xs font-bold text-ink hover:text-primary transition-colors"
                >
                  Full Page →
                </Link>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

