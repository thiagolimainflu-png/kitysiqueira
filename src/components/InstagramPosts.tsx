const POST_URLS = [
  "https://www.instagram.com/p/Dbqg6dFxS2j/",
  "https://www.instagram.com/p/DbonYkexNmW/",
  "https://www.instagram.com/p/DbYz2cSx7Hz/",
  "https://www.instagram.com/p/DbW0JASxYI4/",
  "https://www.instagram.com/p/DbMSwFUquac/",
  "https://www.instagram.com/p/DbD0D4JxdL_/",
];

export function InstagramPosts() {
  return (
    <div className="-mx-6 px-6 sm:mx-0 sm:px-0">
      <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible">
        {POST_URLS.map((url) => (
          <div
            key={url}
            className="w-[78vw] max-w-[340px] shrink-0 snap-center overflow-hidden rounded-2xl border border-border bg-background shadow-sm sm:w-auto sm:max-w-none"
          >
            <iframe
              src={`${url}embed/captioned/`}
              title="Publicação no Instagram"
              loading="lazy"
              scrolling="no"
              allowTransparency
              className="h-[560px] w-full border-0"
            />
          </div>
        ))}
      </div>
      <p className="text-center text-xs text-muted-foreground sm:hidden">
        arraste para o lado →
      </p>
    </div>
  );
}
