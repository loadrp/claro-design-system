"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface DrawerSection {
  id: string;
  icon?: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

export interface ClaroDrawerProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  sections: DrawerSection[];
  footer?: React.ReactNode;
  className?: string;
}

const ClaroDrawer = React.forwardRef<HTMLDivElement, ClaroDrawerProps>(
  ({ open, onClose, title, sections, footer, className }, ref) => {
    const [expanded, setExpanded] = React.useState<string | null>(null);

    const toggle = (id: string) => {
      setExpanded((prev) => (prev === id ? null : id));
    };

    // Close on Escape
    React.useEffect(() => {
      const handleKey = (e: KeyboardEvent) => {
        if (e.key === "Escape" && open) onClose();
      };
      window.addEventListener("keydown", handleKey);
      return () => window.removeEventListener("keydown", handleKey);
    }, [open, onClose]);

    // Lock body scroll
    React.useEffect(() => {
      if (open) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
      return () => {
        document.body.style.overflow = "";
      };
    }, [open]);

    return (
      <>
        {/* Overlay */}
        <div
          className={cn(
            "fixed inset-0 z-40 bg-black/50 transition-opacity duration-300",
            open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
          onClick={onClose}
          aria-hidden={!open}
        />
        {/* Drawer panel */}
        <div
          ref={ref}
          className={cn(
            "fixed top-0 right-0 z-50 h-full w-full max-w-md bg-white shadow-2xl transition-transform duration-300 ease-in-out flex flex-col",
            open ? "translate-x-0" : "translate-x-full",
            className
          )}
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? "drawer-title" : undefined}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--color-neutral-medium)]">
            {title && (
              <h2 id="drawer-title" className="text-lg font-bold text-[var(--color-neutral-darkest)]">
                {title}
              </h2>
            )}
            <button
              onClick={onClose}
              className="ml-auto w-8 h-8 flex items-center justify-center rounded-full hover:bg-[var(--color-neutral-light)] transition-colors"
              aria-label="Fechar modal"
            >
              <svg className="w-5 h-5 text-[var(--color-neutral-darkest)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            <div className="space-y-2">
              {sections.map((section) => {
                const isExpanded = expanded === section.id;
                return (
                  <div key={section.id} className="border border-[var(--color-neutral-medium)] rounded-xl overflow-hidden">
                    <button
                      onClick={() => toggle(section.id)}
                      className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-[var(--color-neutral-light)] transition-colors"
                      aria-expanded={isExpanded}
                    >
                      {section.icon && (
                        <span className="flex-shrink-0 text-[var(--color-neutral-dark)]">
                          {section.icon}
                        </span>
                      )}
                      <span className="flex-1 font-medium text-[var(--color-neutral-darkest)]">
                        {section.title}
                      </span>
                      <svg
                        className={cn(
                          "w-5 h-5 text-[var(--color-neutral-dark)] transition-transform duration-200",
                          isExpanded && "rotate-180"
                        )}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isExpanded && (
                      <div className="px-4 pb-4 text-sm text-[var(--color-neutral-dark)]">
                        {section.content}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Footer */}
          {footer && (
            <div className="border-t border-[var(--color-neutral-medium)] px-6 py-4">
              {footer}
            </div>
          )}
        </div>
      </>
    );
  }
);
ClaroDrawer.displayName = "ClaroDrawer";

export { ClaroDrawer };
