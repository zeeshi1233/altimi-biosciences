"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "scale" | "fade";
  delay?: number;
  duration?: number;
  className?: string;
  viewportMargin?: string;
  once?: boolean;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className,
  viewportMargin = "-60px",
  once = true,
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const offset = 40;

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? offset : direction === "down" ? -offset : 0,
      x: direction === "left" ? offset : direction === "right" ? -offset : 0,
      scale: direction === "scale" ? 0.94 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: viewportMargin }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

