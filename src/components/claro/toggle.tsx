"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ClaroToggleProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  id?: string;
}

const ClaroToggle = React.forwardRef<HTMLInputElement, ClaroToggleProps>(
  ({ checked, onChange, label, disabled, id, ...props }, ref) => {
    const inputId = id || React.useId();
    return (
      <label
        htmlFor={inputId}
        className={cn(
          "inline-flex items-center gap-3 cursor-pointer",
          disabled && "cursor-not-allowed opacity-60"
        )}
      >
        <div className="relative">
          <input
            id={inputId}
            type="checkbox"
            className="sr-only peer"
            ref={ref}
            checked={checked}
            disabled={disabled}
            onChange={(e) => onChange?.(e.target.checked)}
            {...props}
          />
          <div
            className={cn(
              "w-11 h-6 rounded-xl border border-[var(--color-neutral-medium)] transition-all duration-200",
              "bg-[var(--color-neutral-medium)]",
              "peer-checked:bg-[var(--color-brand-secondary-darkest)] peer-checked:border-[var(--color-brand-secondary-darkest)]",
              "peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--color-brand-primary-medium)] peer-focus-visible:ring-offset-2",
              "peer-disabled:opacity-50 peer-disabled:cursor-not-allowed"
            )}
          >
            <div
              className={cn(
                "absolute top-[2px] left-[2px] h-5 w-5 rounded-lg bg-white transition-all duration-200 shadow-sm",
                "peer-checked:translate-x-5"
              )}
            />
          </div>
        </div>
        {label && (
          <span className="text-sm font-medium text-[var(--color-neutral-darkest)]">
            {label}
          </span>
        )}
      </label>
    );
  }
);
ClaroToggle.displayName = "ClaroToggle";

export { ClaroToggle };
