"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ClaroRadioProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const ClaroRadio = React.forwardRef<HTMLInputElement, ClaroRadioProps>(
  ({ className, label, id, ...props }, ref) => {
    const inputId = id || React.useId();
    return (
      <label
        htmlFor={inputId}
        className={cn(
          "flex cursor-pointer items-center gap-3 text-left",
          className
        )}
      >
        <div className="relative flex items-center">
          <input
            id={inputId}
            type="radio"
            className="peer sr-only"
            ref={ref}
            {...props}
          />
          <div
            className={cn(
              "h-5 w-5 shrink-0 rounded-full border-2 border-[var(--color-neutral-medium)] bg-white transition-all",
              "peer-checked:border-[var(--color-brand-primary-medium)] peer-checked:ring-4 peer-checked:ring-[var(--color-brand-primary-lightest)]",
              "peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--color-brand-primary-medium)] peer-focus-visible:ring-offset-2",
              "peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
            )}
          >
            <div className="m-auto h-full w-full rounded-full border-2 border-white bg-transparent transition-all peer-checked:bg-[var(--color-brand-primary-medium)]" />
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
ClaroRadio.displayName = "ClaroRadio";

export { ClaroRadio };
