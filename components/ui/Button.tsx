"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "outline" | "ghost" | "dark" | "glass";
  size?: "sm" | "md" | "lg" | "xl";
  href?: string;
  magnetic?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      href,
      magnetic = false,
      leftIcon,
      rightIcon,
      children,
      className,
      disabled,
      target,
      rel,
      ...props
    },
    ref
  ) => {
    const btnRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!magnetic || disabled) return;
      const { clientX, clientY } = e;
      const { left, top, width, height } = btnRef.current?.getBoundingClientRect() || {
        left: 0,
        top: 0,
        width: 0,
        height: 0,
      };
      const middleX = clientX - (left + width / 2);
      const middleY = clientY - (top + height / 2);
      setPosition({ x: middleX * 0.25, y: middleY * 0.25 });
    };

    const handleMouseLeave = () => {
      if (!magnetic || disabled) return;
      setPosition({ x: 0, y: 0 });
    };

    const variantStyles = {
      primary:
        "bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 border border-transparent",
      secondary:
        "bg-secondary hover:bg-secondary-dark text-white shadow-lg shadow-secondary/25 hover:shadow-secondary/40 border border-transparent",
      accent:
        "bg-accent hover:bg-accent-dark text-white shadow-lg shadow-accent/25 hover:shadow-accent/40 border border-transparent",
      outline:
        "bg-transparent border-2 border-primary/40 hover:border-primary text-primary hover:bg-primary/5",
      ghost:
        "bg-transparent hover:bg-slate-100 text-ink hover:text-primary border border-transparent",
      dark:
        "bg-ink hover:bg-ink-soft text-white shadow-lg shadow-ink/20 border border-transparent",
      glass:
        "bg-white/80 backdrop-blur-md border border-white/60 text-ink hover:bg-white hover:text-primary shadow-sm",
    };

    const sizeStyles = {
      sm: "px-3.5 py-1.5 text-xs font-semibold rounded-lg gap-1.5",
      md: "px-5 py-2.5 text-sm font-semibold rounded-xl gap-2",
      lg: "px-7 py-3.5 text-base font-semibold rounded-2xl gap-2.5",
      xl: "px-8 py-4 text-lg font-bold rounded-2xl gap-3",
    };

    const content = (
      <>
        {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
      </>
    );

    const baseClass = cn(
      "inline-flex items-center justify-center font-heading transition-all duration-300 relative overflow-hidden select-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed group",
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    const magneticWrapper = (inner: React.ReactNode) => (
      <motion.div
        ref={btnRef}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.1 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="inline-block"
      >
        {inner}
      </motion.div>
    );

    if (href) {
      const linkElem = (
        <Link
          href={href}
          target={target}
          rel={rel}
          onClick={props.onClick as any}
          className={baseClass}
        >
          {content}
        </Link>
      );
      return magnetic ? magneticWrapper(linkElem) : linkElem;
    }

    const buttonElem = (
      <button ref={ref} disabled={disabled} className={baseClass} {...props}>
        {content}
      </button>
    );

    return magnetic ? magneticWrapper(buttonElem) : buttonElem;
  }
);

Button.displayName = "Button";

