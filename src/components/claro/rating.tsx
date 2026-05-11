"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ClaroRatingProps {
  value?: number;
  max?: number;
  onChange?: (value: number) => void;
  readonly?: boolean;
  size?: "sm" | "md" | "lg";
  showValue?: boolean;
  evaluations?: number;
}

const sizeMap = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
};

const ClaroRating = ({
  value = 0,
  max = 5,
  onChange,
  readonly = false,
  size = "md",
  showValue = true,
  evaluations,
}: ClaroRatingProps) => {
  const [hoverValue, setHoverValue] = React.useState(0);

  return (
    <div className="flex flex-col items-center w-[130px]">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: max }, (_, i) => {
          const starValue = i + 1;
          const isFilled = (hoverValue || value) >= starValue;
          const isHalf = !isFilled && (hoverValue || value) >= starValue - 0.5;

          return (
            <button
              key={i}
              type="button"
              disabled={readonly}
              onMouseEnter={() => !readonly && setHoverValue(starValue)}
              onMouseLeave={() => setHoverValue(0)}
              onClick={() => onChange?.(starValue)}
              className={cn(
                sizeMap[size],
                "transition-colors duration-150",
                !readonly && "cursor-pointer hover:scale-110",
                readonly && "cursor-default"
              )}
            >
              <svg
                viewBox="0 0 24 24"
                fill={isFilled ? "currentColor" : "none"}
                stroke="currentColor"
                strokeWidth={isFilled ? 0 : 1.5}
                className={cn(
                  "w-full h-full",
                  isFilled
                    ? "text-[var(--color-brand-primary-medium)]"
                    : "text-[var(--color-neutral-medium)]"
                )}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </button>
          );
        })}
      </div>

      {showValue && (
        <div className="mt-1 flex items-center gap-1">
          <span className="text-sm font-bold text-[var(--color-neutral-darkest)]">
            {value.toFixed(1)}
          </span>
          <span className="text-xs text-[var(--color-neutral-dark)]">
            / {max}
          </span>
        </div>
      )}

      {evaluations !== undefined && (
        <span className="text-xs text-[var(--color-neutral-dark)] mt-0.5">
          {evaluations} avaliações
        </span>
      )}
    </div>
  );
};

export { ClaroRating };
