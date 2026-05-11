"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ClaroCheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
}

const ClaroCheckbox = React.forwardRef<HTMLInputElement, ClaroCheckboxProps>(
  ({ className, label, helperText, id, ...props }, ref) => {
    const inputId = id || React.useId();
    return (
      <div className={cn("flex flex-col", className)}>
        <label
          htmlFor={inputId}
          className="flex cursor-pointer items-start gap-3 text-left"
        >
          <div className="relative flex items-center">
            <input
              id={inputId}
              type="checkbox"
              className="peer sr-only"
              ref={ref}
              {...props}
            />
            <div
              className={cn(
                "h-5 w-5 shrink-0 rounded-md border-2 border-[var(--color-neutral-medium)] bg-white transition-all",
                "peer-checked:border-[var(--color-brand-primary-medium)] peer-checked:bg-[var(--color-brand-primary-medium)]",
                "peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--color-brand-primary-medium)] peer-focus-visible:ring-offset-2",
                "peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
              )}
            >
              <svg
                className="h-full w-full p-0.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
          {label && (
            <span className="text-sm font-medium text-[var(--color-neutral-darkest)]">
              {label}
            </span>
          )}
        </label>
        {helperText && (
          <p className="mt-1 pl-8 text-xs text-[var(--color-neutral-dark)]">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);
ClaroCheckbox.displayName = "ClaroCheckbox";

export { ClaroCheckbox };
