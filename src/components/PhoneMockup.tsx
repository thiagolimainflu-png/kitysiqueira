export function PhoneMockup({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="mx-auto w-full max-w-[240px]">
      <div className="relative rounded-[2.2rem] border border-border bg-[#0d0b0b] p-2 shadow-[0_28px_60px_-30px_rgba(0,0,0,0.75)]">
        <div className="relative overflow-hidden rounded-[1.7rem] bg-[#0d0b0b]">
          <span className="pointer-events-none absolute left-1/2 top-2 z-10 h-4 w-20 -translate-x-1/2 rounded-full bg-[#0d0b0b]" />
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="block w-full object-cover"
          />
        </div>
        <span className="pointer-events-none absolute -left-[3px] top-24 h-10 w-[3px] rounded-full bg-border" />
        <span className="pointer-events-none absolute -right-[3px] top-28 h-14 w-[3px] rounded-full bg-border" />
      </div>
      {caption ? (
        <figcaption className="mt-4 text-center text-[0.6rem] tracking-[0.18em] text-muted-foreground uppercase">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
