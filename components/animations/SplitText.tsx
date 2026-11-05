"use client";

import React, { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface SplitTextProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  delay?: number;
  stagger?: number;
}

export const SplitText: React.FC<SplitTextProps> = ({
  children,
  className = "",
  as: Component = "h2",
  delay = 0,
  stagger = 0.04,
}) => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const words = containerRef.current.querySelectorAll(".split-word");
    if (!words.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        {
          opacity: 0,
          y: 28,
          rotateX: -20,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [children, delay, stagger]);

  const words = children.split(" ");

  return (
    // @ts-expect-error Component dynamic tag
    <Component ref={containerRef} className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden mr-[0.28em] align-top"
        >
          <span className="split-word inline-block will-change-transform">
            {word}
          </span>
        </span>
      ))}
    </Component>
  );
};

