"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ClaroSpinBoxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "type"> {
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (value: number) => void;
  label?: string;
}

const ClaroSpinBox = React.forwardRef<HTMLInputElement, ClaroSpinBoxProps>(
  ({ className, value = 0, min = 0, max = 100, step = 1, onChange, label, ...props }, ref) => {
    const [internalValue, setInternalValue] = React.useState(value);

    React.useEffect(() => {
      setInternalValue(value);
    }, [value]);

    const update = (newVal: number) => {
      const clamped = Math.max(min, Math.min(max, newVal));
      setInternalValue(clamped);
      onChange?.(clamped);
    };

    return (
      <div className={cn("w-full", className)}>
        {label && (
          <label className="mb-2 block text-sm font-medium text-[var(--color-neutral-darkest)]">
            {label}
          </label>
        )}
        <div className="flex h-[54px] rounded-xl overflow-hidden">
          <button
            type="button"
            onClick={() => update(internalValue - step)}
            disabled={internalValue <= min}
            className="flex items-center justify-center w-12 bg-[var(--color-neutral-light)] border border-[var(--color-neutral-medium)] border-r-0 text-[var(--color-neutral-darkest)] font-bold text-lg hover:bg-[var(--color-neutral-medium)] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            −
          </button>
          <input
            ref={ref}
            type="number"
            value={internalValue}
            min={min}
            max={max}
            step={step}
            onChange={(e) => update(Number(e.target.value))}
            className="flex-1 text-center bg-white border-y border-[var(--color-neutral-medium)] text-[var(--color-neutral-darkest)] font-medium text-base outline-none focus:ring-2 focus:ring-[var(--color-brand-primary-medium)] focus:z-10 appearance-none"
            {...props}
          />
          <button
            type="button"
            onClick={() => update(internalValue + step)}
            disabled={internalValue >= max}
            className="flex items-center justify-center w-12 bg-[var(--color-neutral-light)] border border-[var(--color-neutral-medium)] border-l-0 text-[var(--color-neutral-darkest)] font-bold text-lg hover:bg-[var(--color-neutral-medium)] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            +
          </button>
        </div>
      </div>
    );
  }
);
ClaroSpinBox.displayName = "ClaroSpinBox";

export { ClaroSpinBox };
