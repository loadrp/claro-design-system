"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface Step {
  label: string;
  description?: string;
}

interface ClaroStepperProps {
  steps: Step[];
  currentStep: number;
  className?: string;
}

const ClaroStepper = ({ steps, currentStep, className }: ClaroStepperProps) => {
  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-start justify-between w-full">
        {steps.map((step, index) => {
          const isDone = index < currentStep;
          const isActive = index === currentStep;
          const isLast = index === steps.length - 1;

          return (
            <div key={index} className="flex items-start flex-1 last:flex-initial">
              {/* Step circle + label */}
              <div className="flex flex-col items-center min-w-[80px]">
                <div
                  className={cn(
                    "flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold transition-colors duration-300",
                    isDone && "bg-[var(--color-brand-primary-medium)] text-white",
                    isActive && "bg-[var(--color-brand-primary-medium)] text-white ring-4 ring-[var(--color-brand-primary-lightest)]",
                    !isDone && !isActive && "bg-[var(--color-neutral-medium)] text-[var(--color-neutral-dark)]"
                  )}
                >
                  {isDone ? (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    index + 1
                  )}
                </div>
                <span
                  className={cn(
                    "mt-2 text-xs text-center font-medium max-w-[100px]",
                    (isDone || isActive) && "text-[var(--color-neutral-darkest)]",
                    !isDone && !isActive && "text-[var(--color-neutral-dark)]"
                  )}
                >
                  {step.label}
                </span>
                {step.description && (
                  <span className="text-[10px] text-[var(--color-neutral-dark)] text-center mt-0.5 max-w-[100px]">
                    {step.description}
                  </span>
                )}
              </div>

              {/* Connector line */}
              {!isLast && (
                <div className="flex-1 h-[2px] mt-4 mx-2 relative">
                  <div className="absolute inset-0 bg-[var(--color-neutral-medium)] rounded-full" />
                  <div
                    className={cn(
                      "absolute inset-y-0 left-0 rounded-full transition-all duration-500",
                      isDone ? "w-full bg-[var(--color-brand-primary-medium)]" : "w-0"
                    )}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { ClaroStepper };
