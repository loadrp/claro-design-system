"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface AccordionItem {
  id: string;
  title: React.ReactNode;
  content: React.ReactNode;
}

interface ClaroAccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  defaultExpanded?: string[];
  className?: string;
}

const ClaroAccordion = ({
  items,
  allowMultiple = false,
  defaultExpanded = [],
  className,
}: ClaroAccordionProps) => {
  const [expanded, setExpanded] = React.useState<Set<string>>(
    new Set(defaultExpanded)
  );

  const toggle = (id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        if (!allowMultiple) next.clear();
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div
      className={cn(
        "w-full border border-[var(--color-neutral-medium)] rounded-xl overflow-hidden",
        className
      )}
    >
      {items.map((item, index) => {
        const isExpanded = expanded.has(item.id);
        return (
          <div
            key={item.id}
            className={cn(
              "border-b border-[var(--color-neutral-medium)] last:border-b-0",
              isExpanded && "bg-[var(--color-neutral-light)]"
            )}
          >
            <button
              type="button"
              onClick={() => toggle(item.id)}
              className="flex w-full items-center justify-between px-6 py-4 text-left font-medium text-[var(--color-neutral-darkest)] transition-colors hover:bg-[var(--color-neutral-light)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-primary-medium)]"
              aria-expanded={isExpanded}
            >
              <span>{item.title}</span>
              <svg
                className={cn(
                  "h-5 w-5 text-[var(--color-neutral-dark)] transition-transform duration-200",
                  isExpanded && "rotate-180"
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
                isExpanded ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
              )}
            >
              <div className="px-6 py-4 text-[var(--color-neutral-dark)]">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export { ClaroAccordion };
export type { AccordionItem };
