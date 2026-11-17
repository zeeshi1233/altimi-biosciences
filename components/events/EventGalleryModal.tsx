"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Calendar,
  MapPin,
  Sparkles,
  Maximize2,
  Grid,
} from "lucide-react";
import { EventItem } from "@/data/eventsData";

interface EventGalleryModalProps {
  event: EventItem | null;
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}

export const EventGalleryModal: React.FC<EventGalleryModalProps> = ({
  event,
  isOpen,
  onClose,
  initialIndex = 0,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [viewMode, setViewMode] = useState<"slider" | "grid">("slider");

  useEffect(() => {
    setCurrentIndex(initialIndex);
    setViewMode("slider");
  }, [initialIndex, isOpen]);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const images = event?.images && event.images.length > 0 ? event.images : event ? [event.image] : [];
  const total = images.length;

  const nextImage = useCallback(() => {
    if (total <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevImage = useCallback(() => {
    if (total <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, nextImage, prevImage]);

  if (!isOpen || !event) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-xl"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-[96vw] max-w-6xl max-h-[92vh] flex flex-col bg-slate-900/95 border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden backdrop-blur-2xl text-white"
        >
          {/* Top Bar Header */}
          <div className="flex items-center justify-between px-5 sm:px-7 py-4 border-b border-white/10 bg-white/[0.03]">
            <div className="flex-1 min-w-0 pr-4">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                {event.badge && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-primary/30 text-sky-300 border border-sky-400/30">
                    <Sparkles className="w-3 h-3 text-sky-400" />
                    {event.badge}
                  </span>
                )}
                <span className="inline-flex items-center gap-1 text-xs text-slate-400">
                  <Calendar className="w-3 h-3 text-sky-400" />
                  {event.date}
                </span>
                <span className="text-slate-600 hidden sm:inline">•</span>
                <span className="inline-flex items-center gap-1 text-xs text-slate-400">
                  <MapPin className="w-3 h-3 text-sky-400" />
                  {event.location} {event.venue ? `(${event.venue})` : ""}
                </span>
              </div>
              <h3 className="text-base sm:text-xl font-bold font-heading truncate text-white">
                {event.title}
              </h3>
            </div>

            {/* View Mode Toggle & Close Button */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {total > 1 && (
                <div className="flex items-center bg-white/10 rounded-xl p-1 border border-white/10">
                  <button
                    type="button"
                    onClick={() => setViewMode("slider")}
                    className={`p-1.5 rounded-lg text-xs font-medium transition-all ${
                      viewMode === "slider"
                        ? "bg-primary text-white shadow-sm"
                        : "text-slate-400 hover:text-white"
                    }`}
                    title="Slide view"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode("grid")}
                    className={`p-1.5 rounded-lg text-xs font-medium transition-all ${
                      viewMode === "grid"
                        ? "bg-primary text-white shadow-sm"
                        : "text-slate-400 hover:text-white"
                    }`}
                    title="Grid view"
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                </div>
              )}

              <button
                type="button"
                onClick={onClose}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center bg-white/10 hover:bg-white/20 active:scale-95 text-slate-300 hover:text-white transition-all border border-white/10"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Body Content */}
          {viewMode === "slider" ? (
            <div className="relative flex-1 flex flex-col items-center justify-center p-3 sm:p-6 min-h-[50vh] sm:min-h-[62vh] select-none">
              {/* Main Image Stage */}
              <div className="relative w-full h-[46vh] sm:h-[58vh] max-h-[650px] flex items-center justify-center rounded-xl sm:rounded-2xl overflow-hidden bg-black/40">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    className="relative w-full h-full flex items-center justify-center"
                  >
                    <Image
                      src={images[currentIndex]}
                      alt={`${event.title} - photo ${currentIndex + 1}`}
                      fill
                      priority
                      className="object-contain p-2 sm:p-4 drop-shadow-2xl"
                      sizes="(max-width: 1200px) 95vw, 1100px"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Left / Right Nav Arrows */}
                {total > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={prevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-900/70 hover:bg-slate-900/90 text-white flex items-center justify-center backdrop-blur-md border border-white/20 shadow-xl transition-all active:scale-90 z-20 group"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
                    </button>
                    <button
                      type="button"
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-900/70 hover:bg-slate-900/90 text-white flex items-center justify-center backdrop-blur-md border border-white/20 shadow-xl transition-all active:scale-90 z-20 group"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </>
                )}

                {/* Counter Pill Badge */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-xs font-semibold text-slate-200">
                  {currentIndex + 1} / {total}
                </div>
              </div>

              {/* Thumbnails Strip */}
              {total > 1 && (
                <div className="w-full mt-3 sm:mt-4 flex items-center justify-start sm:justify-center gap-2 overflow-x-auto py-1 px-1 scrollbar-thin scrollbar-thumb-white/20">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentIndex(idx)}
                      className={`relative w-14 h-10 sm:w-16 sm:h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                        idx === currentIndex
                          ? "border-sky-400 scale-105 shadow-md shadow-sky-500/20"
                          : "border-transparent opacity-50 hover:opacity-100 hover:border-white/40"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`thumb-${idx}`}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            /* Grid View Mode */
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 max-h-[66vh]">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setCurrentIndex(idx);
                      setViewMode("slider");
                    }}
                    className="group relative aspect-video rounded-xl overflow-hidden bg-black/30 border border-white/10 hover:border-sky-400 hover:shadow-lg transition-all"
                  >
                    <Image
                      src={img}
                      alt={`Grid photo ${idx + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2.5">
                      <span className="text-[11px] font-semibold text-white">
                        Photo {idx + 1}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Description Footer */}
          <div className="px-5 sm:px-7 py-3.5 bg-black/40 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-300">
            <p className="line-clamp-2 max-w-4xl text-slate-300/90 leading-relaxed">
              {event.description}
            </p>
            <span className="text-[11px] text-slate-400 whitespace-nowrap">
              Use <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white font-mono">←</kbd> <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white font-mono">→</kbd> keys to browse
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
