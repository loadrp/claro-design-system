"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium leading-none transition-all duration-200 ease-in cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--color-brand-primary-medium)] text-white border border-[var(--color-brand-primary-medium)] hover:bg-[var(--color-brand-primary-dark)] hover:border-[var(--color-brand-primary-dark)] active:scale-95",
        primaryInverse:
          "bg-white text-[var(--color-brand-primary-medium)] border border-[var(--color-brand-primary-medium)] hover:bg-[var(--color-neutral-light)] active:scale-95",
        secondary:
          "bg-transparent text-[var(--color-brand-primary-medium)] border border-[var(--color-brand-primary-medium)] hover:border-[var(--color-brand-primary-dark)] active:scale-95",
        secondaryInverse:
          "bg-transparent text-white border border-white hover:bg-white/10 active:scale-95",
        global:
          "bg-[var(--color-support-highlight-medium)] text-[var(--color-neutral-darkest)] border border-[var(--color-support-highlight-medium)] hover:bg-[var(--color-support-highlight-dark)] hover:border-[var(--color-support-highlight-dark)] active:scale-95",
        globalInverse:
          "bg-[var(--color-support-highlight-dark)] text-[var(--color-neutral-darkest)] border border-[var(--color-support-highlight-dark)] hover:bg-[var(--color-support-highlight-medium)] hover:border-[var(--color-support-highlight-medium)] active:scale-95",
        ghost:
          "bg-transparent text-[var(--color-neutral-darkest)] border-transparent hover:underline",
      },
      size: {
        sm: "h-7 min-w-[5rem] px-2 text-xs rounded-xl",
        default: "h-10 min-w-[110px] px-4 text-base rounded-xl",
        lg: "h-12 min-w-[140px] px-6 text-base rounded-xl",
        icon: "h-8 w-8 min-w-0 p-0 rounded-full",
      },
      block: {
        true: "flex w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      block: false,
    },
  }
);

export interface ClaroButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
}

const ClaroButton = React.forwardRef<HTMLButtonElement, ClaroButtonProps>(
  ({ className, variant, size, block, loading, disabled, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, block }), className)}
        ref={ref}
        disabled={disabled || loading}
        aria-disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg
            className="mr-2 h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);
ClaroButton.displayName = "ClaroButton";

export { ClaroButton, buttonVariants };
