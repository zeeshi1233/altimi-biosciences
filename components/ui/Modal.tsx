"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  className,
  size = "md",
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      // Lock background scrolling completely
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";

      // Stop Lenis smooth scroll while modal is active
      if (typeof window !== "undefined" && (window as any).__lenis) {
        (window as any).__lenis.stop();
      }

      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";

      if (typeof window !== "undefined" && (window as any).__lenis) {
        (window as any).__lenis.start();
      }
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";

      if (typeof window !== "undefined" && (window as any).__lenis) {
        (window as any).__lenis.start();
      }

      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const sizeClasses = {
    sm: "max-w-md",
    md: "max-w-xl",
    lg: "max-w-3xl",
    xl: "max-w-5xl",
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          data-lenis-prevent="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-ink/60 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Card */}
          <motion.div
            data-lenis-prevent="true"
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-modal="true"
            className={cn(
              "relative w-full bg-white rounded-3xl shadow-2xl border border-slate-100 z-10 overflow-hidden max-h-[90vh] flex flex-col my-auto",
              sizeClasses[size],
              className
            )}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/70 shrink-0">
              <h3 className="text-xl font-bold font-heading text-ink">
                {title || "Modal"}
              </h3>
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-xl text-slate-400 hover:text-ink hover:bg-slate-200/60 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Body with strict event isolation */}
            <div
              data-lenis-prevent="true"
              className="p-6 overflow-y-auto max-h-[calc(90vh-90px)] overscroll-contain"
              style={{ overscrollBehavior: "contain" }}
              onWheel={(e) => {
                // Prevent mousewheel from bubbling to window or Lenis
                e.stopPropagation();
              }}
              onTouchMove={(e) => {
                // Prevent mobile touchmove from bubbling to window
                e.stopPropagation();
              }}
            >
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
