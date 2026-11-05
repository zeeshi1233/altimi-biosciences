"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  const cursorX = useSpring(0, { stiffness: 450, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 450, damping: 28 });

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const target = e.target as HTMLElement | null;
      if (
        target?.closest("a") ||
        target?.closest("button") ||
        target?.closest("[role='button']") ||
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.tagName === "SELECT"
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer Ring */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isPointer ? 1.6 : 1,
          borderColor: isPointer ? "rgba(14, 159, 154, 0.8)" : "rgba(11, 94, 215, 0.4)",
          backgroundColor: isPointer ? "rgba(14, 159, 154, 0.08)" : "transparent",
        }}
        transition={{ duration: 0.15 }}
        className="w-8 h-8 rounded-full border-2 border-primary/40 fixed top-0 left-0"
      />
      {/* Center Dot */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isPointer ? 0.5 : 1,
          backgroundColor: isPointer ? "#0E9F9A" : "#0B5ED7",
        }}
        className="w-2 h-2 rounded-full fixed top-0 left-0"
      />
    </div>
  );
};

