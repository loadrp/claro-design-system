"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textVariants = cva("font-[var(--font-family-base)]", {
  variants: {
    variant: {
      body: "text-base font-normal leading-[130%] text-[var(--color-neutral-darkest)]",
      caption: "text-xs font-normal leading-[130%] text-[var(--color-neutral-dark)]",
      small: "text-sm font-normal leading-[130%] text-[var(--color-neutral-dark)]",
      inverse: "text-base font-normal leading-[130%] text-white",
      medium: "text-base font-medium leading-[130%] text-[var(--color-neutral-darkest)]",
      bold: "text-base font-bold leading-[130%] text-[var(--color-neutral-darkest)]",
    },
    size: {
      xxxs: "text-xs",
      xxs: "text-sm",
      xs: "text-base",
      sm: "text-xl",
      md: "text-2xl",
      lg: "text-[28px]",
      xl: "text-[32px]",
      xxl: "text-4xl",
      xxxl: "text-5xl",
    },
  },
  defaultVariants: {
    variant: "body",
    size: "xs",
  },
});

export interface ClaroTextProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof textVariants> {
  as?: "span" | "p" | "div" | "label" | "strong";
}

const ClaroText = React.forwardRef<HTMLSpanElement, ClaroTextProps>(
  ({ className, variant, size, as: Component = "span", ...props }, ref) => {
    return (
      <Component
        ref={ref as any}
        className={cn(textVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);
ClaroText.displayName = "ClaroText";

const headingVariants = cva(
  "font-bold font-[var(--font-family-highlight)] text-[var(--color-neutral-darkest)]",
  {
    variants: {
      level: {
        1: "text-5xl leading-tight",
        2: "text-4xl leading-tight",
        3: "text-[32px] leading-tight",
        4: "text-2xl leading-tight",
        5: "text-xl leading-tight",
        6: "text-base leading-tight",
      },
      inverse: {
        true: "text-white",
        false: "",
      },
    },
    defaultVariants: {
      level: 2,
      inverse: false,
    },
  }
);

export interface ClaroHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const ClaroHeading = React.forwardRef<HTMLHeadingElement, ClaroHeadingProps>(
  ({ className, level, inverse, as: Component = "h2", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(headingVariants({ level, inverse }), className)}
        {...props}
      />
    );
  }
);
ClaroHeading.displayName = "ClaroHeading";

export { ClaroText, textVariants, ClaroHeading, headingVariants };
