"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

interface ClaroTabSelectProps {
  tabs: Tab[];
  defaultTab?: string;
  onChange?: (tabId: string) => void;
  className?: string;
  variant?: "default" | "pills";
}

const ClaroTabSelect = ({
  tabs,
  defaultTab,
  onChange,
  className,
  variant = "default",
}: ClaroTabSelectProps) => {
  const [activeTab, setActiveTab] = React.useState(defaultTab || tabs[0]?.id);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    onChange?.(tabId);
  };

  return (
    <div className={cn("w-full", className)}>
      <div
        className={cn(
          "flex border-b border-[var(--color-neutral-medium)]",
          variant === "pills" && "border-b-0 gap-2"
        )}
        role="tablist"
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              disabled={tab.disabled}
              onClick={() => handleTabChange(tab.id)}
              className={cn(
                "px-6 py-3 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-primary-medium)] focus-visible:ring-offset-2",
                variant === "default" && [
                  "border-b-2 -mb-px",
                  isActive
                    ? "border-[var(--color-brand-primary-medium)] text-[var(--color-brand-primary-medium)]"
                    : "border-transparent text-[var(--color-neutral-dark)] hover:text-[var(--color-neutral-darkest)] hover:border-[var(--color-neutral-medium)]",
                ],
                variant === "pills" && [
                  "rounded-xl",
                  isActive
                    ? "bg-[var(--color-brand-primary-medium)] text-white"
                    : "bg-[var(--color-neutral-light)] text-[var(--color-neutral-dark)] hover:bg-[var(--color-neutral-medium)]",
                ],
                tab.disabled && "opacity-50 cursor-not-allowed"
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className="py-6">
        {tabs.find((t) => t.id === activeTab)?.content}
      </div>
    </div>
  );
};

export { ClaroTabSelect };
