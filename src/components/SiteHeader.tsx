import { useEffect, useState } from "react";

const links = [
  { href: "#sobre", label: "Quem sou" },
  { href: "#numeros", label: "Números" },
  { href: "#audiencia", label: "Audiência" },
  { href: "#parceria", label: "Formatos" },
  { href: "#investimento", label: "Tabela de valores" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#contato", label: "Contato" },
];

export function SiteHeader() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        solid || open
          ? "bg-cream/85 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-5xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8">
        <a
          href="#top"
          className={`truncate font-display text-2xl tracking-wide ${
            solid || open ? "text-ink" : "text-dark-foreground"
          }`}
        >
          Melissa Costa
        </a>
        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-[6px]"
        >
          <span
            className={`block h-[2px] w-7 transition-transform ${
              solid || open ? "bg-ink" : "bg-dark-foreground"
            } ${open ? "translate-y-[8px] rotate-45" : ""}`}
          />
          <span
            className={`block h-[2px] w-7 transition-opacity ${
              solid || open ? "bg-ink" : "bg-dark-foreground"
            } ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-[2px] w-7 transition-transform ${
              solid || open ? "bg-ink" : "bg-dark-foreground"
            } ${open ? "-translate-y-[8px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="animate-fade-in border-t border-border bg-cream/95 px-5 pb-8 pt-4 backdrop-blur-xl sm:px-8">
          <ul className="mx-auto max-w-5xl space-y-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/60 py-3 font-display text-xl text-ink transition-[padding,color] duration-500 hover:pl-2 hover:text-rose"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
