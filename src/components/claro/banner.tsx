"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ClaroButton } from "./button";
import { ClaroPrice } from "./price";

export interface ClaroBannerProps {
  title: string;
  subtitle?: string;
  description?: string;
  priceInteger?: string;
  priceCents?: string;
  pricePeriod?: string;
  priceLabel?: string;
  ctaText?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
  imageSrc?: string;
  imageAlt?: string;
  variant?: "primary" | "secondary" | "gradient";
  layout?: "left" | "right" | "center";
  className?: string;
  children?: React.ReactNode;
}

const variantMap = {
  primary: "bg-[var(--color-brand-primary-medium)]",
  secondary: "bg-[var(--color-brand-secondary-darkest)]",
  gradient:
    "bg-gradient-to-r from-[var(--color-brand-secondary-darkest)] via-[#c7166f] to-[var(--color-brand-primary-medium)]",
};

const ClaroBanner = React.forwardRef<HTMLDivElement, ClaroBannerProps>(
  (
    {
      title,
      subtitle,
      description,
      priceInteger,
      priceCents,
      pricePeriod,
      priceLabel,
      ctaText,
      ctaHref,
      onCtaClick,
      imageSrc,
      imageAlt,
      variant = "gradient",
      layout = "right",
      className,
      children,
    },
    ref
  ) => {
    const content = (
      <div className="flex flex-col gap-4">
        {subtitle && (
          <span className="text-sm font-semibold uppercase tracking-wider text-white/80">
            {subtitle}
          </span>
        )}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight font-[var(--font-family-highlight)]">
          {title}
        </h2>
        {description && (
          <p className="text-base md:text-lg text-white/90 max-w-xl">
            {description}
          </p>
        )}
        {(priceInteger || children) && (
          <div className="flex flex-wrap items-end gap-6 mt-2">
            {priceInteger && (
              <div className="text-white">
                {priceLabel && (
                  <span className="text-sm text-white/80 mb-1 block">{priceLabel}</span>
                )}
                <div className="flex items-end">
                  <span className="text-lg self-end mr-1 font-medium">R$</span>
                  <span className="text-5xl font-bold leading-none">{priceInteger}</span>
                  {priceCents && (
                    <div className="flex flex-col ml-1">
                      <span className="text-xl font-medium">,{priceCents}</span>
                      {pricePeriod && (
                        <span className="text-base text-white/80">{pricePeriod}</span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}
            {children}
          </div>
        )}
        {ctaText && (
          <div className="mt-2">
            <ClaroButton
              variant="primaryInverse"
              size="lg"
              onClick={onCtaClick}
            >
              {ctaText}
            </ClaroButton>
          </div>
        )}
      </div>
    );

    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-2xl",
          variantMap[variant],
          className
        )}
      >
        <div
          className={cn(
            "relative z-10 flex flex-col md:flex-row items-center gap-8 p-8 md:p-12 lg:p-16",
            layout === "center" && "text-center justify-center",
            layout === "right" && "md:flex-row",
            layout === "left" && "md:flex-row-reverse"
          )}
        >
          <div
            className={cn(
              "flex-1",
              layout === "center" && "max-w-3xl mx-auto"
            )}
          >
            {content}
          </div>
          {imageSrc && (
            <div className="flex-shrink-0 w-full md:w-auto md:max-w-sm lg:max-w-md">
              <img
                src={imageSrc}
                alt={imageAlt || ""}
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
          )}
        </div>
        {/* Decorative circles */}
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-white/5 pointer-events-none" />
      </div>
    );
  }
);
ClaroBanner.displayName = "ClaroBanner";

export { ClaroBanner };
