import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type SmoothImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  /** Aspect ratio reserved for the skeleton, e.g. "4 / 5". */
  ratio?: string;
  wrapperClassName?: string;
};

/**
 * Image that shows a shimmering skeleton until the file is decoded,
 * then cross-fades in for a smoother perceived load.
 */
export function SmoothImage({
  ratio,
  wrapperClassName,
  className,
  onLoad,
  ...props
}: SmoothImageProps) {
  const ref = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Cached images can finish before React attaches the handler.
    if (ref.current?.complete) setLoaded(true);
  }, []);

  return (
    <div
      className={cn("relative overflow-hidden", wrapperClassName)}
      style={ratio && !loaded ? { aspectRatio: ratio } : undefined}
    >
      <div
        aria-hidden
        className={cn(
          "skeleton-shimmer absolute inset-0 transition-opacity duration-700",
          loaded ? "opacity-0" : "opacity-100",
        )}
      />
      <img
        ref={ref}
        {...props}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
        className={cn(
          "transition-[opacity,transform,filter] duration-700 ease-out",
          loaded ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-md scale-[1.02]",
          className,
        )}
      />
    </div>
  );
}
