"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ClaroCollapseProps {
  title: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

const ClaroCollapse = ({
  title,
  children,
  defaultOpen = false,
  className,
}: ClaroCollapseProps) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  return (
    <div
      className={cn(
        "w-full border border-[var(--color-neutral-medium)] rounded-xl overflow-hidden",
        className
      )}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-6 py-4 text-left font-medium text-[var(--color-neutral-darkest)] transition-colors hover:bg-[var(--color-neutral-light)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-primary-medium)]"
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <svg
          className={cn(
            "h-5 w-5 text-[var(--color-neutral-dark)] transition-transform duration-200",
            isOpen && "rotate-180"
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-6 py-4 border-t border-[var(--color-neutral-medium)] text-[var(--color-neutral-dark)]">
          {children}
        </div>
      </div>
    </div>
  );
};

export { ClaroCollapse };
