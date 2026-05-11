"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ClaroSkipLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  targetId: string;
  label?: string;
}

const ClaroSkipLink = React.forwardRef<HTMLAnchorElement, ClaroSkipLinkProps>(
  ({ className, targetId, label = "Pular para conteúdo principal", ...props }, ref) => {
    return (
      <a
        ref={ref}
        href={`#${targetId}`}
        className={cn(
          "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50",
          "inline-flex items-center px-4 py-2 bg-[var(--color-brand-primary-medium)] text-white",
          "rounded-xl font-medium text-sm shadow-lg",
          className
        )}
        {...props}
      >
        {label}
      </a>
    );
  }
);
ClaroSkipLink.displayName = "ClaroSkipLink";

export { ClaroSkipLink };
