"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye, ShieldCheck, Check } from "lucide-react";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/Button";

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickView,
}) => {
  // Determine canonical link
  const productHref =
    product.category === "clinical-chemistry-analyzer"
      ? `/products/clinical-chemistry-analyzer/${product.slug}`
      : product.category === "medical-consumables"
      ? `/products/medical-consumables/${product.slug}`
      : `/products/${product.slug}`;

  return (
    <div className="group rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-lg hover:border-slate-300 transition-[box-shadow,border-color] duration-200 flex flex-col justify-between overflow-hidden">
      <div>
        {/* Image Container with Hover Zoom & Quick View Action */}
        <div className="relative aspect-[4/3] w-full bg-slate-50/80 p-6 flex items-center justify-center overflow-hidden border-b border-slate-100">
          {product.badge && (
            <div className="absolute top-3.5 left-3.5 z-10">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                <ShieldCheck className="w-3 h-3" />
                {product.badge}
              </span>
            </div>
          )}

          <div className="relative w-full h-full transition-transform duration-300 motion-safe:group-hover:scale-102">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain"
            />
          </div>

          {/* Quick View Floating Button on Hover */}
          {onQuickView && (
            <div className="absolute inset-0 bg-ink/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-3 p-4">
              <button
                type="button"
                onClick={() => onQuickView(product)}
                className="px-4 py-2 rounded-xl bg-white text-ink text-xs font-bold shadow-lg hover:bg-primary hover:text-white transition-colors flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-primary/40"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Quick View</span>
              </button>
            </div>
          )}
        </div>

        {/* Content Details */}
        <div className="p-6">
          <div className="text-xs font-medium text-primary mb-1">
            {product.categoryName}
          </div>
          <h3 className="text-lg font-bold font-heading text-ink group-hover:text-primary transition-colors line-clamp-1">
            <Link href={productHref}>{product.name}</Link>
          </h3>
          <p className="text-xs text-muted mt-2 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Top 2 Features */}
          <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
            {product.features.slice(0, 2).map((feature, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-xs text-slate-600 line-clamp-1"
              >
                <Check className="w-3.5 h-3.5 text-secondary shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="px-6 pb-6 pt-1 flex items-center justify-between">
        <Link
          href={productHref}
          className="text-xs font-bold text-primary group-hover:text-primary-dark transition-colors inline-flex items-center gap-1"
        >
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
        <span className="text-[11px] font-medium text-slate-400">
          {product.brand || "Altimi Biosciences"}
        </span>
      </div>
    </div>
  );
};

