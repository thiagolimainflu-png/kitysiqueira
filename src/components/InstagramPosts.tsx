import p1 from "@/assets/post-Dbqg6dFxS2j.jpg.asset.json";
import p2 from "@/assets/post-DbonYkexNmW.jpg.asset.json";
import p3 from "@/assets/post-DbYz2cSx7Hz.jpg.asset.json";
import p4 from "@/assets/post-DbW0JASxYI4.jpg.asset.json";
import p5 from "@/assets/post-DbMSwFUquac.jpg.asset.json";
import p6 from "@/assets/post-DbD0D4JxdL_.jpg.asset.json";

const POSTS = [
  { src: p1.url, href: "https://www.instagram.com/p/Dbqg6dFxS2j/" },
  { src: p2.url, href: "https://www.instagram.com/p/DbonYkexNmW/" },
  { src: p3.url, href: "https://www.instagram.com/p/DbYz2cSx7Hz/" },
  { src: p4.url, href: "https://www.instagram.com/p/DbW0JASxYI4/" },
  { src: p5.url, href: "https://www.instagram.com/p/DbMSwFUquac/" },
  { src: p6.url, href: "https://www.instagram.com/p/DbD0D4JxdL_/" },
];

export function InstagramPosts() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5">
        {POSTS.map((post, i) => (
          <a
            key={post.href}
            href={post.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block aspect-[4/5] overflow-hidden rounded-sm bg-secondary"
          >
            <img
              src={post.src}
              alt={`Publicação ${i + 1} de Talita Costa no Instagram`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <span className="absolute left-3 top-3 rounded-sm bg-dark/55 px-2 py-1 text-[0.55rem] font-medium tracking-[0.18em] text-cream uppercase backdrop-blur-sm">
              Post
            </span>
            <span className="pointer-events-none absolute inset-0 bg-dark/0 transition-colors duration-500 group-hover:bg-dark/15" />
          </a>
        ))}
      </div>

      <div className="mt-8 text-center">
        <a
          href="https://www.instagram.com/eu.talitaacosta/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-rose underline-offset-4 hover:underline"
        >
          Ver perfil completo no Instagram ↗
        </a>
      </div>
    </div>
  );
}
