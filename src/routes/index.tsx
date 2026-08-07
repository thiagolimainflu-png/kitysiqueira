import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

const WA =
  "https://wa.me/5581985981192?text=Ol%C3%A1%2C%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20parcerias.";

const IMG = {
  hero: "https://melissacosta.com.br/Public/tela%201.jpg",
  sobre: "https://melissacosta.com.br/Public/sobre.jpg",
  metrics1: "https://melissacosta.com.br/Public/rede%20sociais.jpg",
  metrics2: "https://melissacosta.com.br/Public/rede%20social%202.jpg",
  audience: "https://melissacosta.com.br/Public/3.jpg",
  services: "https://melissacosta.com.br/Public/2.jpg",
  pricing: "https://melissacosta.com.br/Public/1.jpg",
  contact: "https://melissacosta.com.br/Public/vamos%20juntos.jpg",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Melissa Costa | Influenciadora Digital de Moda & Lifestyle",
      },
      {
        name: "description",
        content:
          "Melissa Costa transforma estética em influência que vende. Moda, beleza e lifestyle com 436K no Instagram, 205K no TikTok e 62M+ de views.",
      },
      {
        property: "og:title",
        content: "Melissa Costa | Influenciadora Digital de Moda & Lifestyle",
      },
      {
        property: "og:description",
        content:
          "Parcerias estratégicas com uma criadora de conteúdo de moda e lifestyle: alcance, engajamento real e conversão para a sua marca.",
      },
      { property: "og:image", content: IMG.hero },
      { name: "twitter:image", content: IMG.hero },
    ],
  }),
  component: Home,
});

function useCountUp(target: number, suffix = "") {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || started.current) return;
        started.current = true;
        const duration = 1600;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setValue(Math.round(target * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  return {
    ref,
    display: value.toLocaleString("pt-BR") + suffix,
  };
}

function Counter({
  target,
  suffix,
  label,
  source,
}: {
  target: number;
  suffix?: string;
  label: string;
  source: string;
}) {
  const { ref, display } = useCountUp(target, suffix);
  return (
    <div className="border-t border-border pt-6">
      <p className="eyebrow text-muted-foreground">{source}</p>
      <p className="mt-3 font-display text-4xl md:text-5xl text-foreground">
        <span ref={ref}>{display}</span>
      </p>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="h-px w-10 bg-primary" />
      <span className="eyebrow">{children}</span>
    </div>
  );
}

function Home() {
  return (
    <div className="min-h-screen surface-glow">
      <Header />
      <main>
        <Hero />
        <About />
        <Numbers />
        <Audience />
        <Differentials />
        <Services />
        <Pricing />
        <Brands />
        <Contact />
      </main>
      <Footer />
      <a
        href={WA}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-black shadow-lg transition-transform hover:scale-105"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden>
          <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.95 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.48 1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 2C6.5 2 2 6.5 2 12.05c0 1.77.46 3.5 1.35 5.02L2 22l5.06-1.32a10 10 0 0 0 4.99 1.32h.01c5.54 0 10.04-4.5 10.04-10.05C22.1 6.5 17.6 2 12.05 2z" />
        </svg>
      </a>
    </div>
  );
}

function Header() {
  const nav = [
    { label: "Sobre", href: "#sobre" },
    { label: "Números", href: "#numeros" },
    { label: "Parceria", href: "#parceria" },
    { label: "Valores", href: "#valores" },
  ];
  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7">
        <a href="#top" className="font-display text-xl tracking-wide">
          Melissa Costa
        </a>
        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
          <a
            href={WA}
            target="_blank"
            rel="noreferrer"
            className="border border-border px-5 py-3 text-[0.7rem] uppercase tracking-[0.2em] transition-colors hover:border-primary hover:text-primary"
          >
            Fale comigo
          </a>
        </nav>
        <a
          href={WA}
          target="_blank"
          rel="noreferrer"
          className="border border-border px-4 py-2.5 text-[0.65rem] uppercase tracking-[0.2em] md:hidden"
        >
          Contato
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pb-24 pt-36 md:pt-44">
      <span
        aria-hidden
        className="pointer-events-none absolute right-[-4%] top-24 select-none font-display text-[18rem] leading-none text-foreground/[0.03] md:text-[24rem]"
      >
        Melissa
      </span>
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <SectionLabel>Influenciadora digital · Moda &amp; Lifestyle</SectionLabel>
          <h1 className="mt-8 font-display text-5xl leading-[1.05] md:text-7xl">
            Transformando estética em{" "}
            <em className="italic text-primary">influência que vende.</em>
          </h1>
          <p className="mt-7 max-w-md text-base leading-relaxed text-muted-foreground">
            Moda, lifestyle e performance com autenticidade, estratégia e alto poder de
            engajamento.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={WA}
              target="_blank"
              rel="noreferrer"
              className="bg-primary px-8 py-4 text-[0.7rem] uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90"
            >
              Quero anunciar com você
            </a>
            <a
              href="#numeros"
              className="border border-border px-8 py-4 text-[0.7rem] uppercase tracking-[0.2em] transition-colors hover:border-primary hover:text-primary"
            >
              Ver resultados
            </a>
          </div>

          <div className="mt-14 h-px w-full hairline" />

          <div className="mt-8 flex flex-wrap gap-12">
            <HeroStat
              value="436K"
              label="Instagram"
              href="https://www.instagram.com/melissascostaa?igsh=YjRtaW5zbW56ZTl3"
            />
            <HeroStat
              value="205K"
              label="TikTok"
              href="https://www.tiktok.com/@melissascostaa?_r=1&_t=ZS-95lBM8veXPm"
            />
            <HeroStat value="62M+" label="Views totais" />
          </div>
        </div>

        <div className="relative">
          <img
            src={IMG.hero}
            alt="Melissa Costa, influenciadora digital de moda e lifestyle"
            className="w-full object-cover shadow-2xl"
            loading="eager"
          />
          <div className="absolute -bottom-8 -left-4 bg-primary px-7 py-5 text-primary-foreground md:-left-10">
            <p className="font-display text-3xl">3.8M</p>
            <p className="mt-1 text-[0.65rem] uppercase tracking-[0.2em]">
              Interações/mês
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroStat({
  value,
  label,
  href,
}: {
  value: string;
  label: string;
  href?: string;
}) {
  return (
    <div>
      <p className="font-display text-3xl">{value}</p>
      <p className="mt-1 text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </p>
      {href && (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-block border-b border-primary/50 pb-0.5 text-[0.65rem] uppercase tracking-[0.2em] text-primary"
        >
          Ver perfil →
        </a>
      )}
    </div>
  );
}

function About() {
  const tags = ["Moda", "Lifestyle", "Beleza", "Bem-estar", "Performance"];
  return (
    <section id="sobre" className="border-t border-border px-6 py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div className="relative">
          <img
            src={IMG.sobre}
            alt="Retrato de Melissa Costa"
            className="w-full object-cover"
            loading="lazy"
          />
          <p className="mt-5 font-display text-lg italic text-primary">
            “Influência que gera resultado real.”
          </p>
        </div>
        <div>
          <SectionLabel>Quem sou</SectionLabel>
          <h2 className="mt-7 font-display text-4xl leading-tight md:text-5xl">
            Mais do que uma criadora. <em className="italic text-primary">Uma estrategista.</em>
          </h2>
          <div className="mt-7 space-y-5 text-sm leading-relaxed text-muted-foreground md:text-base">
            <p>
              Melissa Costa é criadora de conteúdo focada em moda, beleza, lifestyle e
              bem-estar, combinando estética, autenticidade e estratégia.
            </p>
            <p>
              Acadêmica de Medicina, compartilha uma rotina disciplinada e real —
              conciliando estudos, treinos e produção de conteúdo, conectando saúde,
              performance e estilo de vida.
            </p>
            <p>
              Seu conteúdo vai além da estética: cria conexão, influencia decisões e
              transforma seguidores em consumidores. Trabalha com marcas que buscam
              posicionamento, desejo e resultado.
            </p>
          </div>
          <ul className="mt-9 flex flex-wrap gap-3">
            {tags.map((tag) => (
              <li
                key={tag}
                className="border border-border px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Numbers() {
  return (
    <section id="numeros" className="border-t border-border px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>Prova social</SectionLabel>
        <div className="mt-7 flex flex-wrap items-end justify-between gap-6">
          <h2 className="max-w-2xl font-display text-4xl leading-tight md:text-5xl">
            Números que falam <em className="italic text-primary">por si mesmos.</em>
          </h2>
          <p className="text-sm text-muted-foreground">Alcance que converte.</p>
        </div>

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          <Counter source="Instagram" target={436000} label="Seguidores" />
          <Counter source="Instagram" target={62000000} label="Visualizações totais" />
          <Counter source="Instagram" target={3800000} label="Interações mensais" />
          <Counter source="Instagram · Stories" target={45000} label="Views por stories" />
          <Counter source="TikTok" target={205000} label="Seguidores" />
          <div className="border-t border-border pt-6">
            <p className="eyebrow text-muted-foreground">TikTok</p>
            <p className="mt-3 font-display text-4xl text-foreground md:text-5xl">+1M</p>
            <p className="mt-2 text-sm text-muted-foreground">Visualizações</p>
          </div>
        </div>

        <p className="mt-14 font-display text-xl italic text-muted-foreground">
          Números que mostram alcance. Resultados que mostram impacto.
        </p>

        <div className="mt-16">
          <p className="eyebrow">Painel de métricas · dados reais</p>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <figure className="border border-border p-4">
              <img
                src={IMG.metrics1}
                alt="Métricas de redes sociais da Melissa Costa no Instagram e TikTok"
                className="w-full object-cover"
                loading="lazy"
              />
              <figcaption className="mt-4 text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                Instagram &amp; TikTok · Analytics
              </figcaption>
            </figure>
            <figure className="border border-border p-4">
              <img
                src={IMG.metrics2}
                alt="Métricas de engajamento, alcance e impressões da Melissa Costa"
                className="w-full object-cover"
                loading="lazy"
              />
              <figcaption className="mt-4 text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                Engajamento · Alcance &amp; Impressões
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

function Audience() {
  const bars = [
    { label: "Feminino", value: "80%", width: "80%" },
    { label: "18–35 anos", value: "72%", width: "72%" },
    { label: "Capitais", value: "95%", width: "95%" },
  ];
  const cards = [
    { icon: "👩", value: "80%", label: "Público feminino" },
    { icon: "📍", value: "95%", label: "Em capitais brasileiras" },
    { icon: "🛍️", value: "18–50", label: "Faixa etária principal" },
    { icon: "💬", value: "Alto", label: "Engajamento real" },
  ];
  return (
    <section className="border-t border-border px-6 py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div>
          <SectionLabel>Audiência</SectionLabel>
          <h2 className="mt-7 font-display text-4xl leading-tight md:text-5xl">
            Um público qualificado e{" "}
            <em className="italic text-primary">pronto para comprar.</em>
          </h2>
          <p className="mt-6 font-display text-lg italic text-muted-foreground">
            “Não é só alcance, é conversão.”
          </p>

          <div className="mt-10 space-y-6">
            {bars.map((bar) => (
              <div key={bar.label}>
                <div className="flex items-center justify-between text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
                  <span>{bar.label}</span>
                  <span className="text-primary">{bar.value}</span>
                </div>
                <div className="mt-3 h-px w-full bg-border">
                  <div className="h-px bg-primary" style={{ width: bar.width }} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-px bg-border sm:grid-cols-2">
            {cards.map((card) => (
              <div key={card.label} className="bg-background p-6">
                <span className="text-xl">{card.icon}</span>
                <p className="mt-3 font-display text-2xl">{card.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{card.label}</p>
              </div>
            ))}
          </div>
        </div>
        <img
          src={IMG.audience}
          alt="Melissa Costa em ensaio de moda"
          className="w-full object-cover"
          loading="lazy"
        />
      </div>
    </section>
  );
}

function Differentials() {
  const items = [
    { icon: "🎯", text: "Conteúdo estratégico que vende" },
    { icon: "✨", text: "Produção estética de alto nível" },
    { icon: "❤️", text: "Conexão real com o público" },
    { icon: "💎", text: "Posicionamento de marca premium" },
    { icon: "📖", text: "Storytelling que gera desejo" },
  ];
  return (
    <section id="parceria" className="border-t border-border px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>Diferenciais</SectionLabel>
        <h2 className="mt-7 font-display text-4xl leading-tight md:text-5xl">
          O que marcas parceiras recebem.
        </h2>
        <p className="mt-4 text-sm text-muted-foreground">
          Muito além de um post. Uma parceria estratégica.
        </p>

        <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-5">
          {items.map((item) => (
            <div key={item.text} className="bg-background p-8">
              <span className="text-2xl">{item.icon}</span>
              <p className="mt-6 font-display text-lg leading-snug">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const plans = [
    {
      tag: "Avulso",
      title: "Conteúdo Unitário",
      items: ["Stories", "Feed (foto)", "Reels", "TikTok"],
    },
    {
      tag: "Combinado",
      title: "Combos Estratégicos",
      items: [
        "Reels + Stories",
        "Feed + Stories",
        "Campanhas completas",
        "Instagram + TikTok",
      ],
    },
    {
      tag: "Recorrente",
      title: "Parcerias Mensais",
      items: [
        "Plano semanal dedicado",
        "Presença contínua",
        "Estratégia de longo prazo",
        "Brand ambassador",
      ],
    },
  ];
  return (
    <section className="border-t border-border px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>Serviços</SectionLabel>
        <h2 className="mt-7 font-display text-4xl leading-tight md:text-5xl">
          Formatos de Parceria
        </h2>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <img
            src={IMG.services}
            alt="Melissa Costa produzindo conteúdo de moda"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="grid gap-px bg-border sm:grid-cols-3">
            {plans.map((plan) => (
              <div key={plan.title} className="bg-background p-8">
                <p className="eyebrow">{plan.tag}</p>
                <h3 className="mt-4 font-display text-2xl">{plan.title}</h3>
                <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                  {plan.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-primary">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const single = [
    "1 Storie mostrando o produto",
    "2 Stories mostrando o produto",
    "3 Stories mostrando o produto",
    "1 TikTok",
    "1 Foto no feed com o produto",
    "Reels com o produto",
  ];
  const combos = [
    "1 Foto no feed + 1 Storie",
    "Reels + 1 Storie",
    "1 Reels + 2 Stories",
    "1 Foto no feed + 2 Stories",
  ];
  return (
    <section id="valores" className="border-t border-border px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <img
              src={IMG.pricing}
              alt="Melissa Costa em campanha de marca"
              className="w-full object-cover"
              loading="lazy"
            />
            <div className="mt-8">
              <SectionLabel>Investimento</SectionLabel>
              <h2 className="mt-6 font-display text-4xl leading-tight">
                Tabela de Valores
              </h2>
              <p className="mt-4 text-sm text-muted-foreground">
                Formatos pensados para gerar resultado real.
              </p>
              <p className="mt-6 border border-border px-4 py-3 text-[0.65rem] uppercase tracking-[0.2em] text-primary">
                Agenda com poucas datas disponíveis em maio
              </p>
              <a
                href={WA}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block bg-primary px-8 py-4 text-[0.7rem] uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90"
              >
                Fechar parceria
              </a>
            </div>
          </div>

          <div className="space-y-12">
            <PriceGroup title="Publicações avulsas" items={single} />
            <PriceGroup title="Combos estratégicos" items={combos} />

            <div className="border border-primary/40 p-8">
              <p className="eyebrow">Melhor custo-benefício</p>
              <h3 className="mt-4 font-display text-3xl">Contrato Mensal</h3>
              <p className="mt-4 text-sm text-muted-foreground">
                2 Reels ou 1 Reels + 1 TikTok · 1 Foto no feed · 1 Storie semanal
              </p>
              <p className="mt-4 text-[0.65rem] uppercase tracking-[0.2em] text-primary">
                Apenas 2 vagas disponíveis em maio
              </p>
              <a
                href={WA}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block border-b border-primary pb-1 text-[0.7rem] uppercase tracking-[0.2em] text-primary"
              >
                Consultar valor →
              </a>
            </div>

            <p className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
              Resposta em minutos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PriceGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="font-display text-2xl">{title}</h3>
      <ul className="mt-6 divide-y divide-border border-y border-border">
        {items.map((item) => (
          <li
            key={item}
            className="flex flex-wrap items-center justify-between gap-3 py-5"
          >
            <span className="text-sm text-muted-foreground">{item}</span>
            <a
              href={WA}
              target="_blank"
              rel="noreferrer"
              className="text-[0.65rem] uppercase tracking-[0.2em] text-primary transition-opacity hover:opacity-70"
            >
              Consultar valor →
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Brands() {
  const brands = [
    {
      name: "SHEIN",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Shein_Logo_2017.svg",
    },
    {
      name: "Shopee",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Shopee.svg/320px-Shopee.svg.png",
    },
    {
      name: "DUX Nutrition",
      logo: "https://duxnutrition.vtexassets.com/assets/vtex.file-manager-graphql/images/058e8c6f-dc46-464e-a6a7-7567a8d22f70___f87ea316877b5a923f2b15dd8703e19f.svg",
    },
    {
      name: "Beach Park",
      logo: "https://beachpark.com.br/app/uploads/2024/06/beach-park-logo.webp",
    },
    { name: "GoCase" },
    { name: "+ Marcas" },
  ];
  return (
    <section className="border-t border-border px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>Portfólio</SectionLabel>
        <h2 className="mt-7 font-display text-4xl leading-tight md:text-5xl">
          Marcas que já confiaram <br />
          <em className="italic text-primary">em minha influência.</em>
        </h2>

        <div className="mt-14 grid gap-px bg-border sm:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex h-32 flex-col items-center justify-center gap-3 bg-background p-6"
            >
              {brand.logo ? (
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-7 w-auto max-w-[70%] object-contain opacity-70 brightness-0 invert"
                  loading="lazy"
                />
              ) : null}
              <span className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contato" className="border-t border-border px-6 py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <img
          src={IMG.contact}
          alt="Melissa Costa convidando marcas para parceria"
          className="w-full object-cover"
          loading="lazy"
        />
        <div>
          <SectionLabel>Contato</SectionLabel>
          <h2 className="mt-7 font-display text-4xl leading-tight md:text-5xl">
            Vamos construir algo <em className="italic text-primary">forte juntos?</em>
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
            Marcas não compram posts — compram impacto. Vamos conversar sobre como posso
            gerar resultados reais para a sua marca.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={WA}
              target="_blank"
              rel="noreferrer"
              className="bg-primary px-8 py-4 text-[0.7rem] uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90"
            >
              WhatsApp
            </a>
            <a
              href="mailto:melissa.souzac15@gmail.com"
              className="border border-border px-8 py-4 text-[0.7rem] uppercase tracking-[0.2em] transition-colors hover:border-primary hover:text-primary"
            >
              E-mail
            </a>
          </div>
          <div className="mt-10 space-y-3 text-sm text-muted-foreground">
            <p>
              📧{" "}
              <a
                href="mailto:melissa.souzac15@gmail.com"
                className="transition-colors hover:text-primary"
              >
                melissa.souzac15@gmail.com
              </a>
            </p>
            <p>
              📱{" "}
              <a href="tel:+5585999521373" className="transition-colors hover:text-primary">
                (85) 99952-1373
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6">
        <p className="font-display text-lg">Melissa Costa</p>
        <div className="flex flex-wrap items-center gap-6 text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
          <a
            href="https://www.instagram.com/melissascostaa?igsh=YjRtaW5zbW56ZTl3"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-primary"
          >
            Instagram
          </a>
          <a
            href="https://www.tiktok.com/@melissascostaa?_r=1&_t=ZS-95lBM8veXPm"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-primary"
          >
            TikTok
          </a>
          <a
            href={WA}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-primary"
          >
            Fale comigo
          </a>
        </div>
      </div>
    </footer>
  );
}
