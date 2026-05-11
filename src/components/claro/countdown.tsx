"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ClaroCountdownProps {
  targetDate: Date;
  size?: "sm" | "md" | "lg";
  className?: string;
  showLabels?: boolean;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(target: Date): TimeLeft {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const sizeMap = {
  sm: "text-2xl px-3 py-2 gap-2",
  md: "text-4xl px-4 py-3 gap-3",
  lg: "text-5xl px-6 py-4 gap-4",
};

const ClaroCountdown = ({
  targetDate,
  size = "md",
  className,
  showLabels = true,
}: ClaroCountdownProps) => {
  const [timeLeft, setTimeLeft] = React.useState<TimeLeft>(getTimeLeft(targetDate));

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const blocks = [
    { value: timeLeft.days, label: "Dias" },
    { value: timeLeft.hours, label: "Horas" },
    { value: timeLeft.minutes, label: "Min" },
    { value: timeLeft.seconds, label: "Seg" },
  ];

  return (
    <div
      className={cn(
        "inline-flex items-center bg-[var(--color-brand-primary-medium)] text-white font-bold rounded-xl",
        sizeMap[size],
        className
      )}
    >
      {blocks.map((block, index) => (
        <React.Fragment key={block.label}>
          <div className="flex flex-col items-center">
            <span className="tabular-nums leading-none">
              {String(block.value).padStart(2, "0")}
            </span>
            {showLabels && (
              <span className="text-xs font-normal opacity-80 mt-1">
                {block.label}
              </span>
            )}
          </div>
          {index < blocks.length - 1 && (
            <span className="opacity-60 self-start">:</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export { ClaroCountdown };
