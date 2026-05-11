"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ClaroPriceProps extends React.HTMLAttributes<HTMLDivElement> {
  currency?: string;
  integer: string;
  cents?: string;
  period?: string;
  label?: string;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: {
    currency: "text-sm",
    integer: "text-2xl",
    cents: "text-sm",
    label: "text-xs",
  },
  md: {
    currency: "text-base",
    integer: "text-4xl",
    cents: "text-lg",
    label: "text-sm",
  },
  lg: {
    currency: "text-lg",
    integer: "text-5xl",
    cents: "text-xl",
    label: "text-base",
  },
};

const ClaroPrice = React.forwardRef<HTMLDivElement, ClaroPriceProps>(
  (
    { className, currency = "R$", integer, cents, period, label, size = "md", ...props },
    ref
  ) => {
    const s = sizeMap[size];
    return (
      <div
        ref={ref}
        className={cn("flex flex-col justify-center max-w-[200px]", className)}
        {...props}
      >
        {label && (
          <span className={cn("text-[var(--color-neutral-dark)] mb-1", s.label)}>
            {label}
          </span>
        )}
        <div className="flex flex-row items-end">
          <span className={cn("self-end mr-1 text-[var(--color-neutral-darkest)] font-medium", s.currency)}>
            {currency}
          </span>
          <span className={cn("text-[var(--color-neutral-darkest)] font-bold leading-none", s.integer)}>
            {integer}
          </span>
          {cents && (
            <span className={cn("self-baseline ml-0.5 text-[var(--color-neutral-dark)] font-medium", s.cents)}>
              ,{cents}
            </span>
          )}
        </div>
        {period && (
          <span className={cn("text-[var(--color-neutral-dark)] mt-1", s.label)}>
            {period}
          </span>
        )}
      </div>
    );
  }
);
ClaroPrice.displayName = "ClaroPrice";

export { ClaroPrice };
