import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "./Badge";

interface SectionHeadingProps {
  badge?: string;
  badgeIcon?: React.ReactNode;
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  align?: "left" | "center" | "right";
  theme?: "light" | "dark";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  badgeIcon,
  title,
  subtitle,
  align = "center",
  theme = "light",
  className,
}) => {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "flex flex-col gap-3.5 max-w-3xl",
        align === "center" && "mx-auto text-center items-center",
        align === "left" && "text-left items-start",
        align === "right" && "ml-auto text-right items-end",
        className
      )}
    >
      {badge && (
        <Badge
          variant={isDark ? "secondary" : "primary"}
          size="md"
          icon={badgeIcon}
          className={cn(isDark && "bg-white/10 text-white border-white/20")}
        >
          {badge}
        </Badge>
      )}

      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight",
          isDark ? "text-white" : "text-ink"
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "text-base sm:text-lg leading-relaxed",
            isDark ? "text-slate-300" : "text-muted"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

