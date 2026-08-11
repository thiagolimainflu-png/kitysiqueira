import p1 from "@/assets/post-casal-1.jpg";
import p2 from "@/assets/post-casal-2.jpg";
import p3 from "@/assets/post-casal-3.jpg";
import p4 from "@/assets/post-casal-4.jpg";
import p5 from "@/assets/post-casal-5.jpg";
import p6 from "@/assets/post-casal-6.jpg";

const POSTS = [
  { src: p1, href: "https://www.instagram.com/p/Db6gHQlTSLe/" },
  { src: p2, href: "https://www.instagram.com/p/Db5ewPiTsvU/" },
  { src: p3, href: "https://www.instagram.com/p/Db3ZIYZzD6B/" },
  { src: p4, href: "https://www.instagram.com/p/Db23QQnz7eI/" },
  { src: p5, href: "https://www.instagram.com/p/Db0peaQTyAL/" },
  { src: p6, href: "https://www.instagram.com/p/Db0PqYdzFcY/" },
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
              alt={`Publicação ${i + 1} de Katy e Fábio no Instagram`}
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

      <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-rose">
        <a
          href="https://www.instagram.com/katysiqueiraa/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline-offset-4 hover:underline"
        >
          @katysiqueiraa ↗
        </a>
        <a
          href="https://www.instagram.com/fabiolimaaoficial/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline-offset-4 hover:underline"
        >
          @fabiolimaaoficial ↗
        </a>
      </div>
    </div>
  );
}
