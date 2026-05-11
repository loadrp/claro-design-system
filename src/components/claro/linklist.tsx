"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface LinkListItem {
  label: string;
  href: string;
  external?: boolean;
}

interface ClaroLinkListProps {
  items: LinkListItem[];
  title?: string;
  className?: string;
}

const ClaroLinkList = ({ items, title, className }: ClaroLinkListProps) => {
  return (
    <div className={cn("w-full", className)}>
      {title && (
        <h3 className="text-base font-bold text-[var(--color-neutral-darkest)] mb-3">
          {title}
        </h3>
      )}
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              {...(item.external && { target: "_blank", rel: "noopener noreferrer" })}
              className="text-sm text-[var(--color-neutral-dark)] hover:text-[var(--color-brand-primary-medium)] hover:underline transition-colors duration-200"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { ClaroLinkList };
export type { LinkListItem };
