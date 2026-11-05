import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent" | "muted" | "outline";
  size?: "sm" | "md";
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "primary",
  size = "md",
  className,
  icon,
}) => {
  const variantStyles = {
    primary: "bg-primary/10 text-primary border-primary/20",
    secondary: "bg-secondary/10 text-secondary-dark border-secondary/20",
    accent: "bg-accent/10 text-accent border-accent/20",
    muted: "bg-slate-100 text-slate-700 border-slate-200",
    outline: "bg-transparent text-slate-700 border-slate-300",
  };

  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5 rounded-full font-medium",
    md: "text-xs px-3 py-1 rounded-full font-semibold",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 border tracking-wide uppercase",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};

