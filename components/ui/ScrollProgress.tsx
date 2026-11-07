"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ChevronUp } from "lucide-react";

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setShowBackToTop(latest > 350);
    });
  }, [scrollY]);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      setPercent(Math.round(latest * 100));
    });
  }, [scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const circleRadius = 20;
  const circumference = 2 * Math.PI * circleRadius;
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  return (
    <>
      {/* Top Progress Line */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary origin-left z-[100]"
      />

      {/* Back to top floating button with progress ring */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{
          opacity: showBackToTop ? 1 : 0,
          scale: showBackToTop ? 1 : 0.6,
          pointerEvents: showBackToTop ? "auto" : "none",
        }}
        transition={{ duration: 0.2 }}
        className="fixed bottom-6 right-6 z-40"
      >
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="relative w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-ink hover:text-primary transition-[color,transform] duration-200 motion-safe:hover:scale-105 active:scale-95 group border border-slate-200"
        >
          {/* SVG Ring */}
          <svg className="w-12 h-12 -rotate-90 absolute inset-0" viewBox="0 0 48 48">
            <circle
              cx="24"
              cy="24"
              r={circleRadius}
              className="text-slate-100"
              strokeWidth="3"
              stroke="currentColor"
              fill="transparent"
            />
            <circle
              cx="24"
              cy="24"
              r={circleRadius}
              className="text-primary transition-[stroke-dashoffset] duration-150"
              strokeWidth="3"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
            />
          </svg>
          <ChevronUp className="w-5 h-5 z-10 transition-transform group-hover:-translate-y-0.5" />
        </button>
      </motion.div>
    </>
  );
};

