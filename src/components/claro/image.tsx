"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ClaroImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  aspectRatio?: "square" | "video" | "wide" | "auto";
  objectFit?: "cover" | "contain" | "fill";
  rounded?: boolean;
  border?: boolean;
}

const aspectMap = {
  square: "aspect-square",
  video: "aspect-video",
  wide: "aspect-[21/9]",
  auto: "",
};

const ClaroImage = React.forwardRef<HTMLImageElement, ClaroImageProps>(
  ({ className, aspectRatio = "auto", objectFit = "cover", rounded = true, border = false, alt = "", ...props }, ref) => {
    return (
      <div
        className={cn(
          "overflow-hidden",
          aspectRatio !== "auto" && aspectMap[aspectRatio],
          rounded && "rounded-xl",
          border && "border border-[var(--color-neutral-medium)]"
        )}
      >
        <img
          ref={ref}
          alt={alt}
          className={cn(
            "w-full h-full",
            objectFit === "cover" && "object-cover",
            objectFit === "contain" && "object-contain",
            objectFit === "fill" && "object-fill",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);
ClaroImage.displayName = "ClaroImage";

export { ClaroImage };
