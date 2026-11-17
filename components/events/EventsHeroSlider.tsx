"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Calendar,
  MapPin,
  Clock,
  Pause,
  Play,
} from "lucide-react";
import { Container } from "@/components/ui/Container";

interface SlideData {
  src: string;
  badge: string;
  title: string;
  subtitle: string;
  date: string;
  location: string;
}

const sliderImages: SlideData[] = [
  {
    src: "/images/events/randox-opening/photo-10.jpg",
    badge: "Official Unveiling",
    title: "Randox RX Modena Grand Unveiling",
    subtitle: "Introducing next-generation high-throughput clinical chemistry automation to premier healthcare laboratories.",
    date: "November 2026",
    location: "Marriott Hotel Karachi",
  },
  {
    src: "/images/events/randox-opening/photo-8.jpg",
    badge: "Keynote Address",
    title: "Welcome Address & Clinical Keynote",
    subtitle: "Distinguished speech by clinical leadership highlighting analytical reliability, patient care, and laboratory excellence.",
    date: "November 2026",
    location: "Marriott Hotel Karachi",
  },
  {
    src: "/images/events/randox-opening/photo-9.jpg",
    badge: "National Assembly",
    title: "National Gathering of Healthcare Leaders",
    subtitle: "Clinical pathologists, diagnostic laboratory directors, and healthcare executives united for diagnostic advancement.",
    date: "November 2026",
    location: "Marriott Hotel Karachi",
  },
  {
    src: "/images/events/randox-opening/photo-4.jpg",
    badge: "Global Collaboration",
    title: "International Partnership Felicitation",
    subtitle: "Honoring long-term distribution partnerships and principal technical support across Pakistan.",
    date: "November 2026",
    location: "Marriott Hotel Karachi",
  },
  {
    src: "/images/events/randox-opening/photo-1.jpg",
    badge: "Clinical Presentation",
    title: "Randox RX Series Technology Showcase",
    subtitle: "Comprehensive review of test consolidation, low water consumption, and automated ISE diagnostic capabilities.",
    date: "November 2026",
    location: "Marriott Hotel Karachi",
  },
  {
    src: "/images/events/randox-opening/photo-6.jpg",
    badge: "Consultative Networking",
    title: "Distinguished Pathologists Forum",
    subtitle: "In-depth exchange between biomedical specialists, clinical scientists, and laboratory administrators.",
    date: "November 2026",
    location: "Marriott Hotel Karachi",
  },
  {
    src: "/images/events/randox-opening/photo-5.jpg",
    badge: "Scientific Symposium",
    title: "Advancing Diagnostic Standards",
    subtitle: "Interactive symposium on daily QC calibration, direct HbA1c profiling, and high-volume clinical chemistry testing.",
    date: "November 2026",
    location: "Marriott Hotel Karachi",
  },
  {
    src: "/images/events/randox-opening/photo-7.jpg",
    badge: "Executive Panel",
    title: "Healthcare Leadership Panel",
    subtitle: "Strategic dialogue on modern hospital laboratory workflows and precision diagnostic instrumentation.",
    date: "November 2026",
    location: "Marriott Hotel Karachi",
  },
  {
    src: "/images/events/randox-opening/photo-3.jpg",
    badge: "Event Moments",
    title: "Clinical Ceremony Highlights",
    subtitle: "Commemorating a milestone evening in advancing clinical diagnostics and hospital laboratory automation.",
    date: "November 2026",
    location: "Marriott Hotel Karachi",
  },
  {
    src: "/images/events/randox-opening/photo-2.jpg",
    badge: "Grand Opening",
    title: "Grand Opening Celebration",
    subtitle: "Celebrating clinical partnership milestones with distinguished healthcare patrons and honored guests.",
    date: "November 2026",
    location: "Marriott Hotel Karachi",
  },
];

const AUTOPLAY_DURATION = 5500; // 5.5s per slide

export const EventsHeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const touchStartXRef = useRef<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const prefersReduced = useReducedMotion();

  const total = sliderImages.length;

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
    setProgress(0);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total);
    setProgress(0);
  }, [total]);

  const goToSlide = (idx: number) => {
    setCurrent(idx);
    setProgress(0);
  };

  // Autoplay timer with linear progress
  useEffect(() => {
    if (isPaused) return;

    const interval = 50;
    const step = 100 / (AUTOPLAY_DURATION / interval);

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
  }, [isPaused, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevSlide, nextSlide]);

  // Touch Swipe for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartXRef.current = null;
  };

  const activeSlide = sliderImages[current];

  return (
    <section
      aria-label="Events Fullscreen Showcase Slider"
      className="relative w-full h-[76vh] sm:h-[84vh] lg:h-[92vh] min-h-[580px] lg:min-h-[660px] overflow-hidden bg-slate-950 select-none group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* ========================================================================= */}
      {/* 1. SLIDE BACKGROUND WITH KEN BURNS ZOOM & CROSSFADE                       */}
      {/* ========================================================================= */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`slide-bg-${current}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.75, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full overflow-hidden"
        >
          <motion.div
            initial={{ scale: 1 }}
            animate={prefersReduced ? { scale: 1 } : { scale: 1.08 }}
            transition={{
              duration: 8,
              ease: "linear",
            }}
            className="relative w-full h-full"
          >
            <Image
              src={activeSlide.src}
              alt={activeSlide.title}
              fill
              priority={current === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* 2. CINEMATIC GRADIENT MASKS (Left-to-Right + Bottom-to-Top High Contrast) */}
      {/* ========================================================================= */}
      {/* Left-to-right deep mask for guaranteed text readability */}
      {/* <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/30 sm:w-4/5 lg:w-3/5 z-[2] pointer-events-none"
      /> */}

      {/* Bottom-to-top vignette & top shadow behind navbar */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/70 z-[2] pointer-events-none"
      />

      {/* Radial soft accent glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-primary/20 blur-[120px] pointer-events-none z-[2]"
      />

      {/* ========================================================================= */}
      {/* 3. FOREGROUND CONTENT (Starts safely below floating navbar)               */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 pointer-events-none">
        <Container className="w-full">
          <div className="max-w-3xl !ml-6 pointer-events-auto">
            {/* Top Category Badge */}
            <motion.div
              key={`badge-${current}`}
              initial={prefersReduced ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="flex items-center gap-2.5 mb-3.5 flex-wrap"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-white/15 backdrop-blur-md border border-white/25 text-sky-300 shadow-md">
                {/* <Sparkles className="w-3.5 h-3.5 text-sky-400" /> */}
                Corporate Events &amp; Clinical Moments
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold bg-primary/80 backdrop-blur-md border border-sky-400/30 text-white shadow-md">
                {activeSlide.badge}
              </span>
            </motion.div>

            {/* Main Events Heading */}
            <motion.div
              key={`heading-${current}`}
              initial={prefersReduced ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.14 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading text-white tracking-tight leading-[1.08] drop-shadow-lg">
                Events
              </h1>
            </motion.div>

            {/* Current Slide Event Title */}
            <motion.div
              key={`title-${current}`}
              initial={prefersReduced ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-2.5 sm:mt-3"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading text-sky-300 leading-snug drop-shadow-md">
                {activeSlide.title}
              </h2>
            </motion.div>

            {/* Short Narrative Subtitle */}
            <motion.p
              key={`subtitle-${current}`}
              initial={prefersReduced ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.26 }}
              className="text-sm sm:text-base lg:text-lg text-slate-200 mt-2 sm:mt-3 leading-relaxed max-w-2xl font-normal drop-shadow-md"
            >
              {activeSlide.subtitle}
            </motion.p>

            {/* Metadata (Date & Location) + Counter & Progress Bar */}
            <motion.div
              key={`meta-${current}`}
              initial={prefersReduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.32 }}
              className="mt-5 flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-semibold text-slate-300"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/40 backdrop-blur-md border border-white/15 text-slate-200">
                <Calendar className="w-3.5 h-3.5 text-sky-400" />
                {activeSlide.date}
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/40 backdrop-blur-md border border-white/15 text-slate-200">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                {activeSlide.location}
              </span>

              {/* Slide Counter Pill */}
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/40 backdrop-blur-md border border-white/15 text-white font-mono font-bold">
                <span className="text-sky-400">{String(current + 1).padStart(2, "0")}</span>
                <span className="text-slate-500">/</span>
                <span>{String(total).padStart(2, "0")}</span>
              </span>

              {/* Pause / Play Indicator */}
              <button
                type="button"
                onClick={() => setIsPaused((prev) => !prev)}
                className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-black/40 backdrop-blur-md border border-white/15 text-slate-300 hover:text-white transition-colors"
                title={isPaused ? "Play Autoplay" : "Pause Autoplay"}
                aria-label={isPaused ? "Play slide progression" : "Pause slide progression"}
              >
                {isPaused ? <Play className="w-3 h-3 text-emerald-400" /> : <Pause className="w-3 h-3 text-amber-300" />}
                <span className="text-[11px]">{isPaused ? "Paused" : "Auto"}</span>
              </button>
            </motion.div>

            {/* Thin Slide Linear Autoplay Progress Bar */}
            <div className="mt-4 w-full max-w-md h-1 rounded-full bg-white/20 overflow-hidden backdrop-blur-xs">
              <div
                className="h-full bg-gradient-to-r from-sky-400 to-primary transition-all duration-75 ease-linear rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </Container>
      </div>

      {/* ========================================================================= */}
      {/* 4. GLASSMORPHISM NAVIGATION ARROWS                                       */}
      {/* ========================================================================= */}
      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-3 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-slate-950/45 hover:bg-slate-900/90 active:scale-95 text-white flex items-center justify-center transition-all duration-200 backdrop-blur-xl border border-white/25 shadow-2xl z-20 group/arrow hover:border-sky-400 hover:shadow-sky-500/20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 group-hover/arrow:-translate-x-0.5 transition-transform" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-3 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-slate-950/45 hover:bg-slate-900/90 active:scale-95 text-white flex items-center justify-center transition-all duration-200 backdrop-blur-xl border border-white/25 shadow-2xl z-20 group/arrow hover:border-sky-400 hover:shadow-sky-500/20"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 group-hover/arrow:translate-x-0.5 transition-transform" />
      </button>

      {/* ========================================================================= */}
      {/* 5. THUMBNAIL STRIP CAROUSEL (Interactive previews at the bottom)         */}
      {/* ========================================================================= */}
      <div className="absolute bottom-3 sm:bottom-4 left-0 right-0 z-20 hidden md:flex items-center justify-center px-4">
        <div className="flex items-center gap-2 max-w-4xl overflow-x-auto py-1 px-2 bg-black/45 backdrop-blur-md rounded-2xl border border-white/15 scrollbar-thin scrollbar-thumb-white/20">
          {sliderImages.map((item, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => goToSlide(idx)}
              className={`group/thumb relative w-16 lg:w-20 aspect-video rounded-lg overflow-hidden shrink-0 border-2 transition-all duration-300 ${idx === current
                  ? "border-sky-400 scale-105 shadow-md shadow-sky-500/40 opacity-100"
                  : "border-transparent opacity-40 hover:opacity-90 hover:border-white/40"
                }`}
              title={item.title}
              aria-label={`Jump to slide ${idx + 1}: ${item.title}`}
            >
              <Image
                src={item.src}
                alt={`thumb-${idx + 1}`}
                fill
                sizes="80px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20 group-hover/thumb:bg-transparent transition-colors" />
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Dot Indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex md:hidden items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 z-20">
        {sliderImages.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => goToSlide(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${idx === current ? "w-5 bg-sky-400" : "w-1.5 bg-white/50"
              }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
