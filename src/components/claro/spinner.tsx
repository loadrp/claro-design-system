"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ClaroSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary" | "white";
}

const sizeMap = {
  sm: "h-4 w-4 border-2",
  md: "h-8 w-8 border-[3px]",
  lg: "h-12 w-12 border-4",
};

const colorMap = {
  primary: "border-[var(--color-brand-primary-medium)] border-t-transparent",
  secondary:
    "border-[var(--color-brand-secondary-medium)] border-t-transparent",
  white: "border-white border-t-transparent",
};

const ClaroSpinner = React.forwardRef<HTMLDivElement, ClaroSpinnerProps>(
  (
    { className, size = "md", color = "primary", ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "inline-block rounded-full animate-spin",
          sizeMap[size],
          colorMap[color],
          className
        )}
        {...props}
      >
        <span className="sr-only">Carregando...</span>
      </div>
    );
  }
);
ClaroSpinner.displayName = "ClaroSpinner";

export { ClaroSpinner };
