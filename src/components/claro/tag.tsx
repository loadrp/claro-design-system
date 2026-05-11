"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const tagVariants = cva(
  "inline-flex items-center font-[var(--font-family-base)] text-base leading-[130%]",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--color-neutral-light)] text-[var(--color-neutral-darkest)] border border-[var(--color-neutral-medium)]",
        primary:
          "bg-[var(--color-brand-primary-lightest)] text-[var(--color-brand-primary-darkest)] border border-[var(--color-brand-primary-light)]",
        secondary:
          "bg-[var(--color-brand-secondary-lightest)] text-[var(--color-brand-secondary-darkest)] border border-[var(--color-brand-secondary-light)]",
        highlight:
          "bg-[var(--color-support-highlight-lightest)] text-[var(--color-support-highlight-darkest)] border border-[var(--color-support-highlight-light)]",
        success:
          "bg-[var(--color-support-success-light)] text-[var(--color-support-success-dark)] border border-[var(--color-support-success-light)]",
        danger:
          "bg-[var(--color-support-danger-light)] text-[var(--color-support-danger-dark)] border border-[var(--color-support-danger-light)]",
      },
      size: {
        sm: "px-2 py-0.5 text-xs rounded-lg",
        default: "px-3 py-1 text-sm rounded-xl",
        lg: "px-4 py-1.5 text-base rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ClaroTagProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof tagVariants> {}

const ClaroTag = React.forwardRef<HTMLSpanElement, ClaroTagProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(tagVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);
ClaroTag.displayName = "ClaroTag";

export { ClaroTag, tagVariants };
