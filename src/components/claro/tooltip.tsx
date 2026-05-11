"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ClaroTooltipProps {
  children: React.ReactElement<any>;
  content: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  className?: string;
}

const positionClasses = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2",
};

const arrowClasses = {
  top: "top-full left-1/2 -translate-x-1/2 -mt-1 border-l-transparent border-r-transparent border-b-transparent",
  bottom: "bottom-full left-1/2 -translate-x-1/2 -mb-1 border-l-transparent border-r-transparent border-t-transparent",
  left: "left-full top-1/2 -translate-y-1/2 -ml-1 border-t-transparent border-b-transparent border-r-transparent",
  right: "right-full top-1/2 -translate-y-1/2 -mr-1 border-t-transparent border-b-transparent border-l-transparent",
};

const ClaroTooltip = ({
  children,
  content,
  position = "top",
  className,
}: ClaroTooltipProps) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const triggerRef = React.useRef<HTMLDivElement>(null);

  const child = React.cloneElement(children, {
    onMouseEnter: () => setIsVisible(true),
    onMouseLeave: () => setIsVisible(false),
    onFocus: () => setIsVisible(true),
    onBlur: () => setIsVisible(false),
  });

  return (
    <div className="relative inline-flex" ref={triggerRef}>
      {child}
      {isVisible && (
        <div
          className={cn(
            "absolute z-50 max-w-[300px] whitespace-nowrap rounded-lg border border-transparent bg-[var(--color-neutral-darkest)] px-3 py-2 text-left text-xs text-white shadow-lg",
            positionClasses[position],
            className
          )}
          role="tooltip"
        >
          {content}
          <span
            className={cn(
              "absolute h-0 w-0 border-4 border-[var(--color-neutral-darkest)]",
              arrowClasses[position]
            )}
          />
        </div>
      )}
    </div>
  );
};

export { ClaroTooltip };
