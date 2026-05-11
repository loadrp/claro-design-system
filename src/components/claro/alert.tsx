"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const alertVariants = cva(
  "flex items-center justify-between rounded-xl border px-4 py-3 min-h-[56px]",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--color-neutral-light)] border-[var(--color-neutral-medium)] text-[var(--color-neutral-darkest)]",
        primary:
          "bg-[var(--color-brand-primary-lightest)] border-[var(--color-brand-primary-light)] text-[var(--color-brand-primary-darkest)]",
        secondary:
          "bg-[var(--color-brand-secondary-lightest)] border-[var(--color-brand-secondary-light)] text-[var(--color-brand-secondary-darkest)]",
        success:
          "bg-[var(--color-support-success-light)] border-[var(--color-support-success-dark)] text-[var(--color-support-success-dark)]",
        danger:
          "bg-[var(--color-support-danger-light)] border-[var(--color-support-danger-dark)] text-[var(--color-support-danger-dark)]",
        highlight:
          "bg-[var(--color-support-highlight-lightest)] border-[var(--color-support-highlight-light)] text-[var(--color-support-highlight-darkest)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ClaroAlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  onClose?: () => void;
  icon?: React.ReactNode;
}

const ClaroAlert = React.forwardRef<HTMLDivElement, ClaroAlertProps>(
  ({ className, variant, onClose, icon, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant }), className)}
        {...props}
      >
        <div className="flex items-center gap-3 pr-3 flex-1">
          {icon && <span className="shrink-0">{icon}</span>}
          <div className="text-sm">{children}</div>
        </div>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 inline-flex h-6 w-6 items-center justify-center rounded-md text-current opacity-70 transition-opacity hover:opacity-100 hover:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-current"
            aria-label="Fechar"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>
    );
  }
);
ClaroAlert.displayName = "ClaroAlert";

export { ClaroAlert, alertVariants };
