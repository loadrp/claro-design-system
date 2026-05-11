"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ClaroDividerProps extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: "horizontal" | "vertical";
  variant?: "default" | "primary" | "inverse" | "dark";
}

const ClaroDivider = React.forwardRef<HTMLHRElement, ClaroDividerProps>(
  ({ className, orientation = "horizontal", variant = "default", ...props }, ref) => {
    return (
      <hr
        ref={ref}
        className={cn(
          "border-none shrink-0",
          orientation === "horizontal" && "h-[1px] w-full my-4",
          orientation === "vertical" && "w-[1px] h-full mx-4",
          variant === "default" && "bg-[var(--color-neutral-medium)]",
          variant === "primary" && "bg-[var(--color-brand-primary-medium)]",
          variant === "inverse" && "bg-[var(--color-neutral-lightest)]",
          variant === "dark" && "bg-[var(--color-neutral-darkest)]",
          className
        )}
        {...props}
      />
    );
  }
);
ClaroDivider.displayName = "ClaroDivider";

export { ClaroDivider };
