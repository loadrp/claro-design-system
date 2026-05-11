"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputVariants = cva(
  "w-full bg-white text-[var(--color-neutral-darkest)] border border-[var(--color-neutral-darkest)] font-[var(--font-family-base)] text-xs leading-[130%] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary-medium)] focus:border-[var(--color-brand-primary-medium)] placeholder:text-[var(--color-neutral-dark)]",
  {
    variants: {
      variant: {
        default: "rounded-xl px-4 py-3",
        inverse:
          "bg-[var(--color-neutral-darkest)] text-white border-[var(--color-neutral-dark)] rounded-xl px-4 py-3 placeholder:text-[var(--color-neutral-medium)]",
      },
      state: {
        default: "",
        error:
          "border-[var(--color-support-danger-dark)] focus:ring-[var(--color-support-danger-dark)] focus:border-[var(--color-support-danger-dark)]",
        success:
          "border-[var(--color-support-success-dark)] focus:ring-[var(--color-support-success-dark)] focus:border-[var(--color-support-success-dark)]",
      },
    },
    defaultVariants: {
      variant: "default",
      state: "default",
    },
  }
);

export interface ClaroInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string;
  helperText?: string;
  errorText?: string;
}

const ClaroInput = React.forwardRef<HTMLInputElement, ClaroInputProps>(
  (
    { className, variant, state, label, helperText, errorText, id, ...props },
    ref
  ) => {
    const inputId = id || React.useId();
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="mb-2 block text-sm font-medium text-[var(--color-neutral-darkest)]"
          >
            {label}
          </label>
        )}
        <input
          id={inputId}
          className={cn(inputVariants({ variant, state }), className)}
          ref={ref}
          {...props}
        />
        {errorText && (
          <p className="mt-1 text-sm text-[var(--color-support-danger-dark)]">
            {errorText}
          </p>
        )}
        {helperText && !errorText && (
          <p className="mt-1 text-sm text-[var(--color-neutral-dark)]">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);
ClaroInput.displayName = "ClaroInput";

export { ClaroInput, inputVariants };
