import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type SmoothImageProps = Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  src: string;
  /** Aspect ratio reserved for the skeleton, e.g. "4 / 5". */
  ratio?: string;
  wrapperClassName?: string;
  /** Load immediately (LCP image), skipping the viewport observer. */
  priority?: boolean;
  /** Distance from the viewport at which loading starts. */
  rootMargin?: string;
  /** Tiny low-res version shown blurred until the full image decodes. */
  placeholder?: string;
  /** Object-position utility applied to the placeholder, e.g. "object-top". */
  objectPosition?: string;
};

/**
 * Image that only starts downloading when it approaches the viewport
 * (IntersectionObserver), showing a blurred thumbnail (or shimmering
 * skeleton) until decoded and then cross-fading in.
 */
export function SmoothImage({
  src,
  ratio,
  wrapperClassName,
  className,
  priority = false,
  rootMargin = "300px",
  placeholder,
  objectPosition,
  onLoad,
  ...props
}: SmoothImageProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [inView, setInView] = useState(priority);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (priority || inView) return;
    const node = wrapperRef.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [priority, inView, rootMargin]);

  useEffect(() => {
    // Cached images can finish before React attaches the handler.
    if (inView && imgRef.current?.complete) setLoaded(true);
  }, [inView]);

  return (
    <div
      ref={wrapperRef}
      className={cn("relative overflow-hidden", wrapperClassName)}
      style={ratio && !loaded ? { aspectRatio: ratio } : undefined}
    >
      {placeholder ? (
        <img
          aria-hidden
          src={placeholder}
          alt=""
          className={cn(
            "absolute inset-0 h-full w-full scale-110 object-cover blur-xl transition-opacity duration-700",
            objectPosition,
            loaded ? "opacity-0" : "opacity-100",
          )}
        />
      ) : (
        <div
          aria-hidden
          className={cn(
            "skeleton-shimmer absolute inset-0 transition-opacity duration-700",
            loaded ? "opacity-0" : "opacity-100",
          )}
        />
      )}

      {inView ? (
        <img
          ref={imgRef}
          src={src}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
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
      ) : null}
    </div>
  );
}
