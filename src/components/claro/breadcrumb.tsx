"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface ClaroBreadcrumbProps {
  items: BreadcrumbItem[];
  inverse?: boolean;
  className?: string;
}

const ClaroBreadcrumb = ({
  items,
  inverse = false,
  className,
}: ClaroBreadcrumbProps) => {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <svg
                  className={cn(
                    "mx-2 h-4 w-4 shrink-0",
                    inverse
                      ? "text-white/70"
                      : "text-[var(--color-neutral-dark)]"
                  )}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
              {isLast || !item.href ? (
                <span
                  className={cn(
                    "text-sm",
                    inverse
                      ? "text-[var(--color-brand-primary-light)]"
                      : "text-[var(--color-neutral-dark)]"
                  )}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              ) : (
                <a
                  href={item.href}
                  className={cn(
                    "text-sm transition-colors hover:underline",
                    inverse
                      ? "text-white hover:text-[var(--color-brand-primary-light)]"
                      : "text-[var(--color-brand-primary-medium)] hover:text-[var(--color-brand-primary-dark)]"
                  )}
                >
                  {item.label}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export { ClaroBreadcrumb };
