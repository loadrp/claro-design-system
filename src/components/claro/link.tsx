"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const linkVariants = cva(
  "inline-flex items-center gap-1 font-medium transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-primary-medium)] focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "text-[var(--color-brand-primary-medium)] hover:text-[var(--color-brand-primary-dark)] hover:underline",
        inverse:
          "text-white hover:text-[var(--color-brand-primary-light)] hover:underline",
        secondary:
          "text-[var(--color-neutral-dark)] hover:text-[var(--color-neutral-darkest)] hover:underline",
        ghost:
          "text-[var(--color-neutral-darkest)] hover:text-[var(--color-neutral-dark)] no-underline",
      },
      size: {
        sm: "text-sm",
        default: "text-base",
        lg: "text-lg",
      },
      underline: {
        true: "underline",
        false: "no-underline",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      underline: false,
    },
  }
);

export interface ClaroLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  external?: boolean;
}

const ClaroLink = React.forwardRef<HTMLAnchorElement, ClaroLinkProps>(
  ({ className, variant, size, underline, external, children, ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={cn(linkVariants({ variant, size, underline }), className)}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
        {...props}
      >
        {children}
        {external && (
          <svg
            className="w-3.5 h-3.5 opacity-70"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        )}
      </a>
    );
  }
);
ClaroLink.displayName = "ClaroLink";

export { ClaroLink, linkVariants };
