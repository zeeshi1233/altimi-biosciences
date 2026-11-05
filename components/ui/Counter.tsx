"use client";

import React, { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface CounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
  className?: string;
}

export const Counter: React.FC<CounterProps> = ({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
  decimals = 0,
  className = "",
}) => {
  const numberRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!numberRef.current || !containerRef.current) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      numberRef.current.innerText = `${prefix}${value.toLocaleString()}${suffix}`;
      return;
    }

    const obj = { val: 0 };

    const ctx = gsap.context(() => {
      gsap.to(obj, {
        val: value,
        duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          if (numberRef.current) {
            numberRef.current.innerText = `${prefix}${
              decimals > 0
                ? obj.val.toFixed(decimals)
                : Math.floor(obj.val).toLocaleString()
            }${suffix}`;
          }
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [value, duration, decimals, prefix, suffix]);

  return (
    <span ref={containerRef} className={className}>
      <span ref={numberRef}>
        {prefix}0{suffix}
      </span>
    </span>
  );
};

