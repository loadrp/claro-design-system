"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ClaroProgressBarProps
  extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  showPercentage?: boolean;
  size?: "sm" | "md";
  color?: "primary" | "secondary" | "success" | "highlight";
}

const sizeMap = {
  sm: "h-1.5",
  md: "h-2",
};

const colorMap = {
  primary: "bg-[var(--color-brand-primary-medium)]",
  secondary: "bg-[var(--color-brand-secondary-medium)]",
  success: "bg-[var(--color-support-success-dark)]",
  highlight: "bg-[var(--color-support-highlight-medium)]",
};

const ClaroProgressBar = React.forwardRef<
  HTMLDivElement,
  ClaroProgressBarProps
>(
  (
    {
      className,
      value,
      max = 100,
      showPercentage = true,
      size = "md",
      color = "primary",
      ...props
    },
    ref
  ) => {
    const percentage = Math.min(100, Math.max(0, (value / max) * 100));

    return (
      <div
        ref={ref}
        className={cn("flex items-center gap-3 w-full", className)}
        {...props}
      >
        <div
          className={cn(
            "flex-1 overflow-hidden rounded-full bg-[var(--color-neutral-medium)]",
            sizeMap[size]
          )}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
        >
          <div
            className={cn("h-full rounded-full transition-all duration-500", colorMap[color])}
            style={{ width: `${percentage}%` }}
          />
        </div>
        {showPercentage && (
          <span className="w-10 text-right text-sm font-medium text-[var(--color-neutral-darkest)]">
            {Math.round(percentage)}%
          </span>
        )}
      </div>
    );
  }
);
ClaroProgressBar.displayName = "ClaroProgressBar";

export { ClaroProgressBar };
