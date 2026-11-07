"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
    id: "faros-360",
    category: "Medical Devices & Telecardiology",
    title: "FAROS 360",
    highlight: "– ECG MONITOR",
    badge: "18 Grams Sensor",
    bullets: [
      "Bittium Faros 360 is an innovative tool for offline and online monitoring.",
      "Tracks ECG, HRV, stress, recovery and well-being.",
      "Smoothly designed for user comfort.",
      "Lightweight design, weighing only 18g.",
      "Easy to use and highly efficient.",
    ],
    image: "/images/products/faros-360.png",
    exploreUrl: "/products/medical-devices",
  },
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
  {
    id: "bittium-holterplus",
    category: "Remote Telecardiology",
    title: "BITTIUM HOLTERPLUS",
    highlight: "– REMOTE CARDIAC MONITORING",
    badge: "Cloud Telemetry",
    bullets: [
      "The perfect option for extended cardiac monitoring.",
      "A web-based cardiac monitoring solution.",
      "Enables remote cardiac monitoring with ease.",
      "Ideal for private cardiologists, cardiac service providers, hospitals and clinics.",
    ],
    image: "/images/products/bittium-holterplus.png",
    exploreUrl: "/products/medical-devices",
  },
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
      className="relative min-h-[90dvh] lg:min-h-[92dvh] flex items-center overflow-hidden bg-gradient-to-b from-surface via-white to-surface pt-4 pb-12"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Dynamic Background Elements: DNA / Molecule Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 py-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-5">
              {/* Category & Badge */}
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex flex-wrap items-center gap-2.5"
              >
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary">
                  <Activity className="w-3.5 h-3.5 text-primary" />
                  {slide.category}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-xs font-semibold text-secondary-dark">
                  <ShieldCheck className="w-3.5 h-3.5 text-secondary" />
                  {slide.badge}
                </span>
              </motion.div>

              {/* Slide Heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black font-heading text-ink tracking-tight leading-[1.12]">
                  <span>{slide.title}</span>{" "}
                  <span className="text-primary font-black">
                    {slide.highlight}
                  </span>
                </h1>
              </motion.div>

              {/* Bullet Points with Staggered Entrance */}
              <motion.ul
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
                  },
                }}
                className="space-y-2.5 pt-1"
              >
                {slide.bullets.map((bullet, idx) => (
                  <motion.li
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, x: -15 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    className="flex items-start gap-3 text-slate-700 text-sm sm:text-base leading-relaxed"
                  >
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="font-medium">{bullet}</span>
                  </motion.li>
                ))}
              </motion.ul>

              {/* CTA Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="flex flex-wrap items-center gap-4 pt-4"
              >
                <Button
                  href={slide.exploreUrl}
                  variant="primary"
                  size="lg"
                  magnetic
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                  className="shadow-xl shadow-primary/20"
                >
                  Explore Product
                </Button>
                <Button
                  href="/contact"
                  variant="outline"
                  size="lg"
                >
                  Contact Us
                </Button>
              </motion.div>
            </div>

            {/* Right Product Image Column (5 cols) */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full aspect-[4/3] max-w-lg"
              >
                {/* Floating Halo Ring */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-2xl transform scale-95" />

                {/* Glass Container */}
                <div className="relative w-full h-full glass-card rounded-3xl p-6 sm:p-8 flex items-center justify-center overflow-hidden border border-white/80 shadow-2xl">
                  {/* Subtle corner badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/90 text-ink shadow-sm border border-slate-200">
                      Slide {current + 1} / {total}
                    </span>
                  </div>

                  {/* Parallax Floating Image */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 5,
                      ease: "easeInOut",
                    }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      priority
                      className="object-contain drop-shadow-2xl"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Controls: Progress bar, slide indicators, arrow navigation */}
        <div className="mt-10 sm:mt-12 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Progress Bar */}
          <div className="w-full sm:w-1/3 bg-slate-200 h-1.5 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full"
              style={{ width: `${progress}%`, transition: "width 75ms linear" }}
            />
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrent(idx);
                  setProgress(0);
                }}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-colors duration-200 rounded-full ${
                  current === idx
                    ? "w-8 h-2.5 bg-primary"
                    : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          {/* Prev / Next Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="p-2.5 rounded-xl border border-slate-200 bg-white hover:bg-primary hover:text-white hover:border-primary text-ink transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="p-2.5 rounded-xl border border-slate-200 bg-white hover:bg-primary hover:text-white hover:border-primary text-ink transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

