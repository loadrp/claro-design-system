"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ClaroPaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange?: (page: number) => void;
  maxVisible?: number;
  className?: string;
}

const ClaroPagination = ({
  totalPages,
  currentPage,
  onPageChange,
  maxVisible = 5,
  className,
}: ClaroPaginationProps) => {
  const getVisiblePages = () => {
    const pages: (number | string)[] = [];
    const half = Math.floor(maxVisible / 2);
    let start = Math.max(1, currentPage - half);
    let end = Math.min(totalPages, start + maxVisible - 1);

    if (end - start < maxVisible - 1) {
      start = Math.max(1, end - maxVisible + 1);
    }

    if (start > 1) {
      pages.push(1);
      if (start > 2) pages.push("...");
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < totalPages) {
      if (end < totalPages - 1) pages.push("...");
      pages.push(totalPages);
    }

    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
    <div className={cn("inline-flex items-center gap-2 font-medium text-base", className)}>
      {/* Previous */}
      <button
        type="button"
        onClick={() => onPageChange?.(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className={cn(
          "flex items-center justify-center w-8 h-8 rounded-full border border-[var(--color-neutral-medium)] transition-all duration-200",
          "hover:bg-[var(--color-neutral-light)] active:scale-90",
          currentPage === 1 && "opacity-50 cursor-not-allowed"
        )}
        aria-label="Página anterior"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Pages */}
      {visiblePages.map((page, index) => (
        <React.Fragment key={index}>
          {page === "..." ? (
            <span className="w-8 h-8 flex items-center justify-center text-[var(--color-neutral-dark)]">
              ...
            </span>
          ) : (
            <button
              type="button"
              onClick={() => onPageChange?.(page as number)}
              className={cn(
                "flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-200 text-sm",
                page === currentPage
                  ? "bg-[var(--color-brand-primary-medium)] text-white border-[var(--color-brand-primary-medium)] font-medium"
                  : "bg-white text-[var(--color-neutral-darkest)] border-[var(--color-neutral-medium)] hover:bg-[var(--color-neutral-light)] active:scale-90"
              )}
            >
              {page}
            </button>
          )}
        </React.Fragment>
      ))}

      {/* Next */}
      <button
        type="button"
        onClick={() => onPageChange?.(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className={cn(
          "flex items-center justify-center w-8 h-8 rounded-full border border-[var(--color-neutral-medium)] transition-all duration-200",
          "hover:bg-[var(--color-neutral-light)] active:scale-90",
          currentPage === totalPages && "opacity-50 cursor-not-allowed"
        )}
        aria-label="Próxima página"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export { ClaroPagination };
