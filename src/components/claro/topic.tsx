"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ClaroTopicProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
}

const ClaroTopic = React.forwardRef<HTMLDivElement, ClaroTopicProps>(
  ({ className, icon, title, description, action, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-start gap-4 p-4 rounded-xl bg-white border border-[var(--color-neutral-medium)]",
          className
        )}
        {...props}
      >
        {icon && (
          <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-brand-primary-lightest)] text-[var(--color-brand-primary-medium)]">
            {icon}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-bold text-[var(--color-neutral-darkest)]">
            {title}
          </h3>
          {description && (
            <p className="mt-1 text-sm text-[var(--color-neutral-dark)]">
              {description}
            </p>
          )}
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </div>
    );
  }
);
ClaroTopic.displayName = "ClaroTopic";

export { ClaroTopic };
