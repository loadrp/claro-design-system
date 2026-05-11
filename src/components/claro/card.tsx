"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ClaroCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const ClaroCard = React.forwardRef<HTMLDivElement, ClaroCardProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col bg-white border border-[var(--color-neutral-medium)] rounded-xl shadow-[0_4px_8px_rgba(31,29,29,0.16)] min-w-[296px] w-full overflow-hidden",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
ClaroCard.displayName = "ClaroCard";

const ClaroCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-row-reverse justify-between px-4 pt-3 pb-1",
      className
    )}
    {...props}
  />
));
ClaroCardHeader.displayName = "ClaroCardHeader";

const ClaroCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("px-4 py-2", className)} {...props} />
));
ClaroCardContent.displayName = "ClaroCardContent";

const ClaroCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center px-4 py-3 mt-auto", className)}
    {...props}
  />
));
ClaroCardFooter.displayName = "ClaroCardFooter";

export { ClaroCard, ClaroCardHeader, ClaroCardContent, ClaroCardFooter };
