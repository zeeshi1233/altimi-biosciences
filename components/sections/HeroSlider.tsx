"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, CheckCircle2, ArrowRight, ShieldCheck, Activity } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface HeroSlide {
  id: string;
  category: string;
  title: string;
  highlight: string;
  bullets: string[];
  image: string;
  images?: { src: string; alt: string; label?: string }[];
  exploreUrl: string;
  badge: string;
}

const slides: HeroSlide[] = [
  {
    id: "rx-modena",
    category: "Clinical Chemistry Analyzers",
    title: "Randox ",
    highlight: "– RX modena & RX imola",
    badge: "1,200 Tests / Hr",
    bullets: [
      "800 photometric tests per hour & 1,200 tests per hour, including ISE (RX modena).",
      "400 photometric tests per hour & 240 ISE tests per hour (RX imola).",
      "Direct whole-blood HbA1c testing without manual pre-treatment.",
      "Consolidates routine chemistry, specific protein, lipid, and STAT profiles.",
      "Intuitive touchscreen interface with automated washing and cooled onboard reagents.",
    ],
    image: "/images/products/rx-9000.png",
    images: [
      { src: "/images/products/rx-9000.png", alt: "Randox RX modena Clinical Chemistry Analyzer", label: "RX modena" },
      { src: "/images/products/rx-imola.png", alt: "Randox RX imola Clinical Chemistry Analyzer", label: "RX imola" },
    ],
    exploreUrl: "/products/randox-rx-series",
  },
  {
    id: "bosch-vivalytic",
    category: "Molecular Diagnostics",
    title: "Bosch ",
    highlight: "- Vivalytic",
    badge: "Closed Cartridge PCR",
    bullets: [
      "All-in-One Molecular Analyzer",
      "All-in-one cartridge-based molecular diagnostic platform by Bosch GmbH & Randox.",
      "Sample-in to result-out workflow with minimal contamination risk.",
      "Multiplex & singleplex testing for respiratory, STI, and bacterial pathogens.",
      "Intuitive touchscreen operation with automated barcode tracking and bidirectional LIS.",
    ],
    image: "/images/products/bosch-vivalytic.jpeg",
    exploreUrl: "/products/bosch-vivalytic",
  },
  {
    id: "quikread-go",
    category: "Point-of-Care Testing (POCT)",
    title: "Aidian QuikRead go® ",
    highlight: "– ",
    badge: "Portable POCT Analyzer",
    bullets: [
      "Instrument & POCT Kits",
      "Compact, portable point-of-care (POCT) analyzer engineered by Aidian (Finland).",
      "Combines photometric and turbidimetric measurement technologies for rapid diagnostic testing.",
      "QuikRead go easy CRP provides quantitative results in 2 minutes at the point of care.",
      "QuikRead go HbA1c delivers IFCC & NGSP certified diabetes screening and monitoring.",
    ],
    image: "/images/products/quikread-go.webp",
    images: [
      { src: "/images/products/quikread-go.webp", alt: "Aidian QuikRead go Instrument", label: "QuikRead go Instrument" },
      { src: "/images/products/quikread-easy-crp.png", alt: "QuikRead go easy CRP POCT Kit", label: "QuikRead easy CRP Kit" },
      { src: "/images/products/quikread-hba1c.png", alt: "QuikRead go HbA1c POCT Kit", label: "QuikRead HbA1c Kit" },
    ],
    exploreUrl: "/products/point-of-care-testing",
  },
  {
    id: "faros-180",
    category: "Holter Monitoring Systems",
    title: "Bittium Faros™ ",
    highlight: "– Holter Monitor",
    badge: "18 Grams Sensor",
    bullets: [
      "Bittium Faros 360 & Bittium Faros 180 & Bittium HolterPlus",
      "Wearable Bittium FAROS ECG sensors paired with Cardiac Navigator analysis software.",
      "Ultra-compact, lightweight 18g waterproof medical-grade ECG recorder.",
      "Multi-day continuous ambulatory cardiac rhythm recording and arrhythmia monitoring.",
      "Seamless wireless cloud telemetry via Bittium HolterPlus platform.",
    ],
    image: "/images/products/bittium-360-180.png",
    exploreUrl: "/products/faros-360-ecg",
  },
  {
    id: "and-abpm",
    category: "Ambulatory Blood Pressure Monitoring",
    title: "A&D Medical ",
    highlight: "– ABPM",
    badge: "Clinical 24h ABPM",
    bullets: [
      "TM-2440 & TM-2441 ABPM",
      "Lightweight oscillometric 24-hour ambulatory blood pressure monitors from Japan.",
      "Clinically validated for accurate hypertension profiling and nocturnal dipping analysis.",
      "Quiet cuff inflation technology for undisturbed patient sleep.",
      "Dedicated clinical PC software for circadian reporting and analysis.",
    ],
    image: "/images/products/tm-2441.png",
    images: [
      { src: "/images/products/tm-2441.png", alt: "A&D Medical TM-2441 Ambulatory Blood Pressure Monitor", label: "TM-2441 ABPM" },
      { src: "/images/products/tm-2440.png", alt: "A&D Medical TM-2440 Ambulatory Blood Pressure Monitor", label: "TM-2440 ABPM" },
    ],
    exploreUrl: "/products/and-abpm-monitor",
  },
];

const AUTOPLAY_DELAY = 6500;

export const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [innerImgIndex, setInnerImgIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const prefersReduced = useReducedMotion();

  const total = slides.length;
  const slide = slides[current];
  const activeImages = slide.images && slide.images.length > 0 
    ? slide.images 
    : [{ src: slide.image, alt: slide.title, label: slide.badge }];

  // Reset inner image when main slide changes
  useEffect(() => {
    setInnerImgIndex(0);
  }, [current]);

  // Sub-loop rotation for slides that have multiple images
  useEffect(() => {
    if (activeImages.length <= 1 || isPaused) return;

    const subInterval = setInterval(() => {
      setInnerImgIndex((prev) => (prev + 1) % activeImages.length);
    }, 2800);

    return () => clearInterval(subInterval);
  }, [activeImages.length, isPaused, current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % total);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
    setProgress(0);
  };

  // Autoplay timer
  useEffect(() => {
    if (isPaused) return;

    const interval = 50;
    const step = 100 / (AUTOPLAY_DELAY / interval);

    timerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + step;
      });
    }, interval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [current, isPaused]);

  return (
    <section
      aria-label="Featured Medical Equipment & Supplies"
      className="relative min-h-[88dvh] lg:min-h-[90dvh] flex items-center overflow-hidden bg-primary-900 pt-28 sm:pt-32 pb-12"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Office Building Image + Deep Dark/Blue Clinical Gradient Overlay */}
      <div aria-hidden="true" className="absolute inset-0 z-0 pointer-events-none select-none">
        <Image
          src="/build-office.jpg"
          alt="Altimi Biosciences Headquarters Building"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Primary dark-navy to deep-blue gradient overlay for high text contrast & reduced visual clutter */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-900/82 to-primary-800/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/55 via-transparent to-primary-900/90" />
      </div>

      {/* Subtle clinical grid texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={prefersReduced ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={prefersReduced ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-5">
              {/* Category & Spec Badges */}
              <motion.div
                initial={prefersReduced ? false : { opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.08 }}
                className="flex flex-wrap items-center gap-2.5"
              >
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-white">
                  <Activity className="w-3.5 h-3.5 text-sky-300" />
                  {slide.category}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-secondary/20 backdrop-blur-md border border-secondary-light/30 text-xs font-semibold text-secondary-100">
                  <ShieldCheck className="w-3.5 h-3.5 text-secondary-300" />
                  {slide.badge}
                </span>
              </motion.div>

              {/* Slide Heading */}
              <motion.div
                initial={prefersReduced ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.12 }}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black font-heading !text-white text-white tracking-tight leading-[1.12]">
                  <span>{slide.title}</span>{" "}
                  <span className="text-sky-300 font-black">
                    {slide.highlight}
                  </span>
                </h1>
              </motion.div>

              {/* Bullet Points with Staggered Entrance */}
              <motion.ul
                initial={prefersReduced ? "visible" : "hidden"}
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.06, delayChildren: 0.16 },
                  },
                }}
                className="space-y-2.5 pt-1 max-w-2xl"
              >
                {slide.bullets.map((bullet, idx) => (
                  <motion.li
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, x: -12 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    className="flex items-start gap-3 text-slate-100 text-sm sm:text-base leading-relaxed"
                  >
                    <CheckCircle2 className="w-5 h-5 text-secondary-300 shrink-0 mt-0.5" />
                    <span className="font-medium">{bullet}</span>
                  </motion.li>
                ))}
              </motion.ul>

              {/* CTA Action Buttons */}
              <motion.div
                initial={prefersReduced ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4 pt-3"
              >
                <Button
                  href={slide.exploreUrl}
                  variant="primary"
                  size="lg"
                  magnetic
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                  className="shadow-xl shadow-primary-900/40"
                >
                  Explore Product
                </Button>
                <Button
                  href="/contact"
                  variant="outline"
                  size="lg"
                  className="border-white/35 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white/60 hover:text-white"
                >
                  Contact Us
                </Button>
              </motion.div>
            </div>

            {/* Right Product Display Card (5 cols) — Glassmorphism Stage */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <motion.div
                initial={prefersReduced ? false : { opacity: 0, scale: 0.94, y: 14 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={prefersReduced ? {} : { opacity: 0, scale: 0.96, y: -12 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-lg group/hardware rounded-3xl bg-white/15 backdrop-blur-xl border border-white/25 p-3 sm:p-4 shadow-2xl"
              >
                {/* Inner Crisp Frosted Clinical Stage so product never mixes harshly with building lines */}
                <div className="relative w-full aspect-[4/3] rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 overflow-hidden flex items-center justify-center">
                  {/* Slide index badge */}
                  <div className="absolute top-3 right-3 z-20">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-surface text-ink shadow-xs border border-slate-200/90 num">
                      {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Hardware Image with gentle floating motion & multi-model loop support */}
                  <motion.div
                    animate={prefersReduced ? {} : { y: [0, -10, 0] }} // Range thori barha di hai taake zeda notice ho
                    transition={{
                      repeat: Infinity,
                      duration: 2.5, // Speed tez karne ke liye duration kam kar di (pehle 6 thi)
                      ease: "easeInOut",
                    }}
                    className="relative w-full h-full p-5 sm:p-6 transition-transform duration-150 motion-safe:group-hover/hardware:scale-105"
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${slide.id}-${innerImgIndex}`}
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="relative w-full h-full"
                      >
                        <Image
                          src={activeImages[innerImgIndex]?.src || slide.image}
                          alt={activeImages[innerImgIndex]?.alt || slide.title}
                          fill
                          priority
                          className="object-contain p-3 drop-shadow-xl"
                          sizes="(max-width: 1024px) 100vw, 40vw"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </motion.div>

                  {/* Interactive Technical Spec Hotspot */}
                  <div className="absolute bottom-3 left-3 z-20">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-md text-xs font-semibold text-ink">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 motion-safe:animate-pulse" />
                      <span>{activeImages[innerImgIndex]?.label || slide.badge}</span>
                    </div>
                  </div>

                  {/* Multi-image indicators if slide has multiple models */}
                  {activeImages.length > 1 && (
                    <div className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2 py-1 rounded-full border border-white/20">
                      {activeImages.map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setInnerImgIndex(i)}
                          className={`w-1.5 h-1.5 rounded-full transition-all ${
                            i === innerImgIndex ? "w-3 bg-sky-400" : "bg-white/60"
                          }`}
                          aria-label={`Show model image ${i + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Controls: Progress bar, slide indicators, arrow navigation */}
        <div className="mt-10 sm:mt-12 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Progress Bar */}
          <div className="w-full sm:w-1/3 bg-white/20 h-1.5 rounded-full overflow-hidden">
            <div
              className="h-full bg-sky-400 rounded-full"
              style={{ width: `${progress}%`, transition: "width 75ms linear" }}
            />
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setCurrent(idx);
                  setProgress(0);
                }}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-colors duration-200 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 ${current === idx
                  ? "w-8 h-2.5 bg-white"
                  : "w-2.5 h-2.5 bg-white/35 hover:bg-white/60"
                  }`}
              />
            ))}
          </div>

          {/* Prev / Next Arrows */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous slide"
              className="p-2.5 rounded-xl border border-white/25 bg-white/10 backdrop-blur-md hover:bg-white hover:text-primary hover:border-white text-white transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="p-2.5 rounded-xl border border-white/25 bg-white/10 backdrop-blur-md hover:bg-white hover:text-primary hover:border-white text-white transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

