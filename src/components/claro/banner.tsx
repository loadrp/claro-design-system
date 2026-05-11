"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ClaroButton } from "./button";

export interface BannerSlide {
  id: string;
  type?: "custom" | "basic";
  imageSrc: string;
  imageAlt?: string;
  href?: string;
  title?: string;
  subtitle?: string;
  subtitleColor?: "white" | "highlight";
  fullPrice?: string;
  priceInteger?: string;
  priceCents?: string;
  pricePeriod?: string;
  priceNote?: string;
  ctaText?: string;
}

export interface ClaroBannerProps {
  slides: BannerSlide[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
}

const ClaroBanner = React.forwardRef<HTMLDivElement, ClaroBannerProps>(
  ({ slides, autoPlay = true, autoPlayInterval = 5000, className }, ref) => {
    const [active, setActive] = React.useState(0);
    const timerRef = React.useRef<ReturnType<typeof setInterval> | null>(null);

    const goTo = React.useCallback((index: number) => {
      setActive((index + slides.length) % slides.length);
    }, [slides.length]);

    const next = React.useCallback(() => goTo(active + 1), [active, goTo]);
    const prev = React.useCallback(() => goTo(active - 1), [active, goTo]);

    React.useEffect(() => {
      if (!autoPlay || slides.length <= 1) return;
      timerRef.current = setInterval(next, autoPlayInterval);
      return () => {
        if (timerRef.current) clearInterval(timerRef.current);
      };
    }, [autoPlay, autoPlayInterval, next, slides.length]);

    const resetTimer = React.useCallback(() => {
      if (!autoPlay || slides.length <= 1) return;
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = setInterval(next, autoPlayInterval);
    }, [autoPlay, autoPlayInterval, next, slides.length]);

    const handleBullet = (index: number) => {
      setActive(index);
      resetTimer();
    };

    return (
      <div
        ref={ref}
        className={cn("relative w-full overflow-hidden", className)}
        role="region"
        aria-roledescription="carousel"
        aria-label="Ofertas em destaque"
      >
        {/* Slides */}
        <div className="relative w-full">
          {slides.map((slide, index) => {
            const isActive = index === active;
            const isCustom = slide.type === "custom" || slide.title;

            const content = (
              <div
                className={cn(
                  "relative w-full transition-opacity duration-500",
                  isActive ? "opacity-100 static" : "opacity-0 absolute inset-0 pointer-events-none"
                )}
                aria-hidden={!isActive}
              >
                {/* Background image */}
                <div className="relative w-full aspect-[21/9] md:aspect-[1920/420] min-h-[220px] sm:min-h-[280px] md:min-h-[320px] lg:min-h-[380px]">
                  <img
                    src={slide.imageSrc}
                    alt={slide.imageAlt || ""}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                  {/* Overlay for text readability */}
                  {isCustom && (
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
                  )}
                </div>

                {/* Custom overlay content */}
                {isCustom && (
                  <div className="absolute inset-0 flex items-center">
                    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                      <div className="max-w-lg">
                        {/* Title */}
                        {slide.title && (
                          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                            {slide.title}
                          </h2>
                        )}
                        {/* Subtitle */}
                        {slide.subtitle && (
                          <p
                            className={cn(
                              "mt-2 text-base md:text-lg font-medium",
                              slide.subtitleColor === "highlight"
                                ? "text-[var(--color-support-highlight-medium)]"
                                : "text-white"
                            )}
                          >
                            {slide.subtitle}
                          </p>
                        )}
                        {/* Price */}
                        {(slide.priceInteger || slide.fullPrice) && (
                          <div className="mt-4">
                            {slide.fullPrice && (
                              <p className="text-sm text-white/80">
                                De: <s className="text-white/60">R$ {slide.fullPrice}</s>
                              </p>
                            )}
                            <div className="flex items-end gap-1 mt-1">
                              <span className="text-lg md:text-xl font-bold text-white">R$</span>
                              <span className="text-4xl md:text-5xl font-bold text-white leading-none">
                                {slide.priceInteger}
                              </span>
                              {slide.priceCents && (
                                <span className="text-lg md:text-xl font-bold text-white">
                                  ,{slide.priceCents}
                                </span>
                              )}
                            </div>
                            {slide.priceNote && (
                              <p className="text-sm text-white/80 mt-1">{slide.priceNote}</p>
                            )}
                          </div>
                        )}
                        {/* CTA */}
                        {slide.ctaText && (
                          <div className="mt-6">
                            <ClaroButton variant="global" size="lg">
                              {slide.ctaText}
                            </ClaroButton>
                          </div>
                        )}
                        {/* Caption */}
                        <p className="text-xs text-white/70 mt-4">
                          consulte disponibilidade e oferta para a sua região
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );

            return slide.href ? (
              <a
                key={slide.id}
                href={slide.href}
                className="block"
                target="_self"
                aria-label={slide.title || slide.imageAlt || "Ver oferta"}
              >
                {content}
              </a>
            ) : (
              <div key={slide.id}>{content}</div>
            );
          })}
        </div>

        {/* Pagination bullets */}
        {slides.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => handleBullet(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-200 border-2",
                  index === active
                    ? "bg-white border-white scale-110"
                    : "bg-white/40 border-white/40 hover:bg-white/60"
                )}
                aria-label={`Selecionar o banner ${index + 1}`}
                aria-current={index === active ? "true" : undefined}
              />
            ))}
          </div>
        )}

        {/* Navigation arrows */}
        {slides.length > 1 && (
          <>
            <button
              onClick={() => { prev(); resetTimer(); }}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-colors"
              aria-label="Banner anterior"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => { next(); resetTimer(); }}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-colors"
              aria-label="Próximo banner"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>
    );
  }
);
ClaroBanner.displayName = "ClaroBanner";

export { ClaroBanner };
