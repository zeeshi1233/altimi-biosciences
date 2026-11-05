"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AgentState } from "@/types/agent";

interface WaveformProps {
  state: AgentState;
  barCount?: number;
  className?: string;
}

export const Waveform: React.FC<WaveformProps> = ({
  state,
  barCount = 5,
  className = "",
}) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setPrefersReducedMotion(mediaQuery.matches);

      const handleChange = (e: MediaQueryListEvent) => {
        setPrefersReducedMotion(e.matches);
      };
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, []);

  // Determine bar animation values based on state
  const getBarVariants = (index: number) => {
    if (prefersReducedMotion) {
      return {
        animate: {
          scaleY: state === "idle" ? 0.3 : 0.8,
          opacity: state === "idle" ? 0.4 : 1,
        },
      };
    }

    switch (state) {
      case "listening":
        return {
          animate: {
            scaleY: [0.3, 1.4, 0.5, 1.8, 0.4],
            transition: {
              duration: 0.8,
              repeat: Infinity,
              repeatType: "mirror" as const,
              delay: index * 0.12,
              ease: "easeInOut",
            },
          },
        };
      case "thinking":
        return {
          animate: {
            scaleY: [0.4, 0.9, 0.4],
            opacity: [0.5, 1, 0.5],
            transition: {
              duration: 1.2,
              repeat: Infinity,
              repeatType: "mirror" as const,
              delay: index * 0.18,
              ease: "easeInOut",
            },
          },
        };
      case "speaking":
        return {
          animate: {
            scaleY: [0.2, 1.6, 0.6, 2.0, 0.3],
            transition: {
              duration: 0.6,
              repeat: Infinity,
              repeatType: "mirror" as const,
              delay: (index % 3) * 0.14,
              ease: "easeInOut",
            },
          },
        };
      case "idle":
      default:
        return {
          animate: {
            scaleY: [0.25, 0.45, 0.25],
            transition: {
              duration: 2.2,
              repeat: Infinity,
              repeatType: "mirror" as const,
              delay: index * 0.15,
              ease: "easeInOut",
            },
          },
        };
    }
  };

  const getBarColor = () => {
    switch (state) {
      case "listening":
        return "bg-gradient-to-t from-primary to-sky-400 shadow-sm shadow-primary/40";
      case "thinking":
        return "bg-gradient-to-t from-amber-500 to-primary shadow-sm shadow-amber-400/30";
      case "speaking":
        return "bg-gradient-to-t from-secondary to-emerald-400 shadow-sm shadow-secondary/40";
      case "idle":
      default:
        return "bg-slate-300 dark:bg-slate-600";
    }
  };

  return (
    <div className={`flex items-center justify-center gap-1 h-6 ${className}`}>
      {Array.from({ length: barCount }).map((_, i) => {
        const variants = getBarVariants(i);
        return (
          <motion.span
            key={i}
            variants={variants}
            animate="animate"
            className={`w-1 h-4 rounded-full origin-center transition-colors duration-300 ${getBarColor()}`}
            style={{ transformOrigin: "center" }}
          />
        );
      })}
    </div>
  );
};

