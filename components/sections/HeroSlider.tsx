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
  exploreUrl: string;
  badge: string;
}

const slides: HeroSlide[] = [
  {
    id: "faros-180",
    category: "Diagnostic Cardiology",
    title: "Bittium Faros ",
    highlight: "- Holter Monitor",
    badge: "18 Grams Sensor",
    bullets: [
      "Compact, lightweight, and waterproof medical-grade wearable ECG monitor.",
      "Features advanced ECG signal acquisition and multi-day recording capabilities.",
      "Designed for continuous ambulatory cardiac rhythm monitoring during daily activities.",
      "Engineered for high user comfort and efficiency.",
      "Easy to use for reliable patient monitoring.",
    ],
    image: "/images/products/bittium-360-180.png",
    exploreUrl: "/products/medical-devices",
  },
  // {
  //   id: "faros-360",
  //   category: "Medical Devices & Telecardiology",
  //   title: "FAROS 360",
  //   highlight: "– ECG MONITOR",
  //   badge: "18 Grams Sensor",
  //   bullets: [
  //     "Bittium Faros 360 is an innovative tool for offline and online monitoring.",
  //     "Tracks ECG, HRV, stress, recovery and well-being.",
  //     "Smoothly designed for user comfort.",
  //     "Lightweight design, weighing only 18g.",
  //     "Easy to use and highly efficient.",
  //   ],
  //   image: "/images/products/faros-360.png",
  //   exploreUrl: "/products/medical-devices",
  // },
  {
    id: "rx-imola",
    category: "Clinical Chemistry Analyzer",
    title: "RANDOX",
    highlight: "– RX IMOLA",
    badge: "560 Tests / Hr",
    bullets: [
      "Ideal for medium to high throughput laboratories.",
      "Performs 400 photometric tests and 560 tests per hour including ISE.",
      "Excels in performance and functionality for rapid, comprehensive testing.",
      "Covers routine chemistries and specific proteins.",
      "Supports testing for lipids, therapeutic drugs and drugs of abuse.",
      "Includes capabilities for antioxidants, diabetes and veterinary testing.",
    ],
    image: "/images/products/rx-imola.png",
    exploreUrl: "/products/clinical-chemistry-analyzer/rx-imola",
  },
  {
    id: "rx-modena",
    category: "Clinical Chemistry Analyzer",
    title: "RANDOX",
    highlight: "– RX MODENA",
    badge: "1,200 Tests / Hr",
    bullets: [
      "Capable of performing up to 1,200 tests per hour.",
      "Offers direct HbA1c testing.",
      "Consolidates all assay requirements onto one intuitive platform.",
      "Features icon-based, interactive touch-screen technology.",
      "Adds a modern, user-friendly touch to your laboratory.",
    ],
    image: "/images/products/rx-modena.png",
    exploreUrl: "/products/clinical-chemistry-analyzer/rx-modena",
  },
  {
    id: "clip-neo",
    category: "Hospital Supplies & Safety Needles",
    title: "GREINER",
    highlight: "– STICK TO SAFETY: CLiP NEO, WINGED & PORTED",
    badge: "Passive Safety",
    bullets: [
      "Automatic safety.",
      "Excellent insertion properties.",
      "Comprehensive range.",
      "Vast variety of gauge sizes, lengths and materials.",
    ],
    image: "/images/products/clip-neo.png",
    exploreUrl: "/products/hospital-supplies",
  },
  // {
  //   id: "bittium-holterplus",
  //   category: "Remote Telecardiology",
  //   title: "BITTIUM HOLTERPLUS",
  //   highlight: "– REMOTE CARDIAC MONITORING",
  //   badge: "Cloud Telemetry",
  //   bullets: [
  //     "The perfect option for extended cardiac monitoring.",
  //     "A web-based cardiac monitoring solution.",
  //     "Enables remote cardiac monitoring with ease.",
  //     "Ideal for private cardiologists, cardiac service providers, hospitals and clinics.",
  //   ],
  //   image: "/images/products/bittium-holterplus.png",
  //   exploreUrl: "/products/medical-devices",
  // },
  {
    id: "latex-gloves",
    category: "Medical Disposable / Consumables",
    title: "LATEX GLOVES",
    highlight: "– CLINICAL BARRIER",
    badge: "AQL 1.5 Standard",
    bullets: [
      "Unparalleled comfort and protection.",
      "Perfect combination of toughness, elasticity and non-slip.",
      "Textured for improved grip.",
      "AQL 1.5.",
      "Low level of extractable proteins and chemical residue.",
    ],
    image: "/images/products/latex-gloves.png",
    exploreUrl: "/products/medical-consumables/latex-gloves",
  },
  {
    id: "histoacryl",
    category: "Medicine / Drugs & Surgical",
    title: "HISTOACRYL TISSUE ADHESIVE",
    highlight: "– WOUND CLOSURE IN A MINUTE",
    badge: "Anti-Bacterial Barrier",
    bullets: [
      "Anti-bacterial barrier protects the wound.",
      "No need of refrigeration.",
      "Significantly less pain than suture material.",
      "Excellent cosmetic result.",
      "Water resistant: showering is possible.",
    ],
    image: "/images/products/histoacryl.png",
    exploreUrl: "/products/medicine-drugs",
  },
  {
    id: "nitrile-gloves",
    category: "Medical Disposable / Consumables",
    title: "NITRILE GLOVES",
    highlight: "– HIGH PROTECTION",
    badge: "Latex-Free",
    bullets: [
      "Latex free, powder free and odor free.",
      "Custom design enhanced comfort and fit.",
      "An alternative for people allergic to natural rubber latex.",
      "Good barrier protection against chemicals and dangerous substances.",
    ],
    image: "/images/products/nitrile-gloves.png",
    exploreUrl: "/products/medical-consumables/nitrile-gloves",
  },
];

const AUTOPLAY_DELAY = 6500;

export const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const prefersReduced = useReducedMotion();

  const total = slides.length;

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

  const slide = slides[current];

  return (
    <section
      aria-label="Featured Medical Equipment & Supplies"
      className="relative min-h-[88dvh] lg:min-h-[90dvh] flex items-center overflow-hidden bg-primary-900 pt-6 pb-12"
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

                  {/* Hardware Image with gentle floating motion */}
                  <motion.div
                    animate={prefersReduced ? {} : { y: [0, -7, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 6,
                      ease: "easeInOut",
                    }}
                    className="relative w-full h-full p-5 sm:p-6 transition-transform duration-300 motion-safe:group-hover/hardware:scale-105"
                  >
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      priority
                      className="object-contain p-3 drop-shadow-xl"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </motion.div>

                  {/* Interactive Technical Spec Hotspot */}
                  <div className="absolute bottom-3 left-3 z-20">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-md text-xs font-semibold text-ink">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 motion-safe:animate-pulse" />
                      <span>{slide.badge}</span>
                    </div>
                  </div>
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

