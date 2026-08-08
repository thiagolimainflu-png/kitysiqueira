import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import { SiteHeader } from "@/components/SiteHeader";
import { WhatsAppFab, WHATSAPP_URL } from "@/components/WhatsAppFab";
import heroImg from "@/assets/hero-melissa.jpg";
import sobreImg from "@/assets/sobre-melissa.jpg";
import parceriaImg from "@/assets/parceria-melissa.jpg";
import tabelaImg from "@/assets/tabela-melissa.jpg";
import metricasInstagram from "@/assets/metricas-instagram.jpg";
import metricasTiktok from "@/assets/metricas-tiktok.jpg";

const EMAIL = "melissa.souzac15@gmail.com";
const TELEFONE = "(85) 99952-1373";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Melissa Costa | Influenciadora Digital de Moda e Lifestyle" },
      {
        name: "description",
        content:
          "Melissa Costa: 436K no Instagram e 205K no TikTok. Conteúdo de moda, beleza e lifestyle que transforma estética em influência que vende.",
      },
      {
        property: "og:title",
        content: "Melissa Costa | Influenciadora Digital de Moda e Lifestyle",
      },
      {
        property: "og:description",
        content:
          "436K seguidores, 61.8M de visualizações e 3.8M de interações mensais. Parcerias estratégicas para marcas que querem resultado real.",
      },
    ],
  }),
  component: Home,
});

/* ---------------- helpers ---------------- */

function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, seen };
}

function Eyebrow({ children }: { children: string }) {
  return <p className="eyebrow">{children}</p>;
}

function CtaWhats({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`block w-full px-6 py-4 text-center text-xs font-semibold tracking-[0.2em] uppercase transition-opacity hover:opacity-90 ${className}`}
    >
      {children}
    </a>
  );
}

/* ---------------- sections ---------------- */

function Hero() {
  return (
    <section id="top" className="band-dark relative overflow-hidden">
      <img
        src={heroImg}
        alt="Melissa Costa em vestido rosa ao lado de uma parede florida"
        className="h-[62vh] min-h-[380px] w-full object-cover object-top"
      />
      <div className="relative -mt-16 ml-0 w-fit bg-rose-soft px-7 py-4 text-ink">
        <p className="font-display text-2xl leading-none">3.8M</p>
        <p className="mt-1 text-[0.65rem] tracking-[0.18em] uppercase">
          Interações/mês
        </p>
      </div>

      <div className="relative px-5 pb-16 pt-12 text-center sm:px-8">
        <span className="watermark">Melissa</span>
        <div className="relative mx-auto max-w-3xl">
          <Eyebrow>Influenciadora digital · Moda &amp; Lifestyle</Eyebrow>
          <h1 className="mt-6 font-display text-4xl leading-[1.12] sm:text-6xl">
            Transformando estética em{" "}
            <em className="italic text-rose-soft">influência que vende.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-dark-muted sm:text-base">
            Moda, lifestyle e performance com autenticidade, estratégia e alto
            poder de decisão.
          </p>

          <div className="mx-auto mt-10 flex max-w-sm flex-col gap-3">
            <CtaWhats className="bg-rose text-white">
              Quero anunciar com você
            </CtaWhats>
            <a
              href="#numeros"
              className="block w-full border border-white/35 px-6 py-4 text-center text-xs font-semibold tracking-[0.2em] uppercase"
            >
              Ver resultados
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-3 gap-2">
            {[
              ["436K", "Instagram"],
              ["205K", "TikTok"],
              ["62M+", "Views totais"],
            ].map(([n, l]) => (
              <div key={l}>
                <dt className="font-display text-2xl sm:text-3xl">{n}</dt>
                <dd className="mt-2 text-[0.6rem] tracking-[0.18em] text-dark-muted uppercase">
                  {l}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Sobre() {
  const tags = ["Moda", "Lifestyle", "Beleza", "Bem-estar", "Performance"];
  return (
    <section id="sobre" className="bg-cream px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <img
          src={sobreImg}
          alt="Melissa Costa escolhendo roupas em uma arara colorida"
          loading="lazy"
          className="w-full object-cover"
        />
        <figure className="bg-card px-6 py-7 shadow-[0_10px_30px_-24px_rgba(0,0,0,0.5)]">
          <blockquote className="font-display text-base italic">
            &ldquo;Influência que gera resultado real.&rdquo;
          </blockquote>
        </figure>

        <div className="mt-14">
          <Eyebrow>Quem sou</Eyebrow>
          <h2 className="mt-6 font-display text-3xl leading-[1.15] sm:text-5xl">
            Mais do que uma criadora.{" "}
            <em className="italic text-rose">Uma estrategista.</em>
          </h2>
          <div className="mt-7 space-y-5 text-sm leading-loose text-muted-foreground sm:text-base">
            <p>
              Melissa Costa é criadora de conteúdo focada em moda, beleza,
              lifestyle e bem-estar, combinando estética, autenticidade e
              estratégia.
            </p>
            <p>
              Acadêmica de Medicina, compartilha uma rotina disciplinada e real
              — conciliando estudos, treinos e produção de conteúdo, conectando
              saúde, performance e estilo de vida.
            </p>
            <p>
              Seu conteúdo vai além da estética: cria conexão, influencia
              decisões e transforma seguidores em consumidores. Trabalha com
              marcas que buscam posicionamento, desejo e resultado.
            </p>
          </div>
          <ul className="mt-9 flex flex-wrap gap-2">
            {tags.map((t) => (
              <li
                key={t}
                className="border border-border px-4 py-2 text-[0.6rem] tracking-[0.18em] text-muted-foreground uppercase"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const numeros: [string, string, string][] = [
  ["Instagram", "436K", "Seguidores"],
  ["Instagram", "61.8M", "Visualizações totais"],
  ["Instagram", "3.8M", "Interações mensais"],
  ["Instagram · Stories", "15K", "Views por stories"],
  ["TikTok", "205K", "Seguidores"],
  ["TikTok", "+1M", "Visualizações"],
];

function Numeros() {
  return (
    <section id="numeros" className="band-dark px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <Eyebrow>Prova social</Eyebrow>
          <h2 className="mt-6 font-display text-3xl leading-[1.15] sm:text-5xl">
            Números que falam
            <br />
            por si mesmos.
          </h2>
          <p className="mt-4 font-display text-sm italic text-dark-muted">
            Alcance que converte.
          </p>
        </div>

        <div className="mt-12 border border-white/10">
          {numeros.map(([rede, valor, label], i) => (
            <div
              key={valor + label}
              className={`px-6 py-10 text-center ${i > 0 ? "border-t border-white/10" : ""}`}
            >
              <p className="text-[0.6rem] tracking-[0.22em] text-rose-soft uppercase">
                {rede}
              </p>
              <p className="mt-5 font-display text-4xl sm:text-5xl">{valor}</p>
              <p className="mt-3 text-[0.65rem] tracking-[0.18em] text-dark-muted uppercase">
                {label}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center font-display text-sm italic text-dark-muted">
          Números que mostram alcance. Resultado que mostram impacto.
        </p>

        <div className="mt-14">
          <p className="text-center text-[0.6rem] tracking-[0.22em] text-dark-muted uppercase">
            Painel de métricas · Dados reais
          </p>
          <div className="mt-6 space-y-6">
            <img
              src={metricasInstagram}
              alt="Painel de analytics do Instagram e TikTok de Melissa Costa"
              loading="lazy"
              className="w-full"
            />
            <img
              src={metricasTiktok}
              alt="Métricas de engajamento, alcance e impressões do TikTok"
              loading="lazy"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const barras: [string, number][] = [
  ["Feminino", 80],
  ["18-35 anos", 72],
  ["Capitais", 95],
];

const audienciaCards = [
  ["👩", "80%", "Público feminino"],
  ["📍", "95%", "Em capitais brasileiras"],
  ["🛍️", "18-50", "Faixa etária principal"],
  ["💬", "Alto", "Engajamento real"],
];

function Audiencia() {
  const { ref, seen } = useInView<HTMLDivElement>();
  return (
    <section id="audiencia" className="bg-cream-deep px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <Eyebrow>Audiência</Eyebrow>
          <h2 className="mt-6 font-display text-3xl leading-[1.15] sm:text-5xl">
            Um público qualificado e{" "}
            <em className="italic text-rose">pronto para comprar.</em>
          </h2>
          <p className="mt-4 font-display text-sm italic text-muted-foreground">
            &ldquo;Não é só alcance. É conversão.&rdquo;
          </p>
        </div>

        <div ref={ref} className="mt-12 space-y-6">
          {barras.map(([label, pct]) => (
            <div
              key={label}
              className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4"
            >
              <div className="min-w-0">
                <p className="text-[0.62rem] tracking-[0.18em] text-muted-foreground uppercase">
                  {label}
                </p>
                <div className="mt-3 h-[3px] w-full bg-border">
                  <div
                    className="h-full bg-rose transition-[width] duration-[1400ms] ease-out"
                    style={{ width: seen ? `${pct}%` : "0%" }}
                  />
                </div>
              </div>
              <span className="shrink-0 font-display text-lg">{pct}%</span>
            </div>
          ))}
        </div>

        <ul className="mt-10 space-y-4">
          {audienciaCards.map(([icon, value, label]) => (
            <li
              key={label}
              className="flex items-center gap-5 bg-card px-6 py-6 shadow-[0_10px_30px_-26px_rgba(0,0,0,0.55)]"
            >
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-accent/35 text-2xl">
                {icon}
              </span>
              <div className="min-w-0">
                <p className="font-display text-2xl">{value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{label}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const formatos = [
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

function Parceria() {
  return (
    <section id="parceria" className="band-dark px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <Eyebrow>Serviços</Eyebrow>
          <h2 className="mt-6 font-display text-3xl sm:text-5xl">
            Formatos de Parceria
          </h2>
        </div>

        <img
          src={parceriaImg}
          alt="Melissa Costa de óculos escuros nas dunas ao entardecer"
          loading="lazy"
          className="mt-12 w-full object-cover"
        />

        <div className="mt-10 space-y-6">
          {formatos.map((f) => (
            <article key={f.tag} className="border border-white/12 px-6 py-9">
              <p className="text-[0.62rem] tracking-[0.22em] text-rose-soft uppercase">
                {f.tag}
              </p>
              <h3 className="mt-5 font-display text-3xl">{f.title}</h3>
              <ul className="mt-6 space-y-4">
                {f.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-center gap-4 text-sm text-dark-muted"
                  >
                    <span className="h-px w-6 shrink-0 bg-rose-soft" />
                    {it}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const avulsas = [
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

function PriceCard({ label }: { label: string }) {
  return (
    <li className="bg-card px-6 py-7">
      <p className="text-sm text-muted-foreground">{label}</p>
      <CtaWhats className="mt-6 bg-rose text-white">Consultar valor →</CtaWhats>
    </li>
  );
}

function GroupTitle({ children }: { children: string }) {
  return (
    <div className="mt-14 mb-6 grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4">
      <p className="text-[0.62rem] tracking-[0.22em] text-rose uppercase">
        {children}
      </p>
      <span className="h-px w-full bg-border" />
    </div>
  );
}

function Investimento() {
  return (
    <section id="investimento" className="bg-cream-deep px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <img
          src={tabelaImg}
          alt="Melissa Costa em camisa rosa ao lado de uma arara de roupas"
          loading="lazy"
          className="w-full object-cover"
        />

        <div className="mt-12">
          <Eyebrow>Investimento</Eyebrow>
          <h2 className="mt-6 font-display text-3xl sm:text-5xl">
            Tabela de Valores
          </h2>
          <p className="mt-3 font-display text-sm italic text-muted-foreground">
            Formatos pensados para gerar resultado real.
          </p>
          <p className="mt-7 flex items-center gap-3 text-xs text-muted-foreground">
            <span className="h-2 w-2 shrink-0 rounded-full bg-rose" />
            Agenda com poucas datas disponíveis em maio
          </p>
          <CtaWhats className="mt-6 bg-rose text-white">
            Fechar parceria
          </CtaWhats>
        </div>

        <GroupTitle>Publicações avulsas</GroupTitle>
        <ul className="space-y-4">
          {avulsas.map((a) => (
            <PriceCard key={a} label={a} />
          ))}
        </ul>

        <GroupTitle>Combos estratégicos</GroupTitle>
        <ul className="space-y-4">
          {combos.map((c) => (
            <PriceCard key={c} label={c} />
          ))}
        </ul>

        <article className="band-dark mt-14 px-6 py-10">
          <p className="text-[0.62rem] tracking-[0.22em] text-rose-soft uppercase">
            Melhor custo-benefício
          </p>
          <h3 className="mt-5 font-display text-3xl">Contrato Mensal</h3>
          <p className="mt-5 text-sm leading-relaxed text-dark-muted">
            2 Reels ou 1 Reels + 1 TikTok · 1 Foto no feed · 1 Storie semanal
          </p>
          <p className="mt-7 flex items-center gap-3 border border-white/15 px-4 py-3 text-[0.62rem] tracking-[0.16em] text-rose-soft uppercase">
            <span className="h-2 w-2 shrink-0 rounded-full bg-rose" />
            Apenas 2 vagas disponíveis em maio
          </p>
          <CtaWhats className="mt-7 bg-whats text-white">
            Consultar valor →
          </CtaWhats>
          <p className="mt-5 text-center text-[0.62rem] tracking-[0.22em] text-dark-muted uppercase">
            Resposta em minutos
          </p>
        </article>
      </div>
    </section>
  );
}

const diferenciais = [
  ["🎯", "Conteúdo estratégico que vende"],
  ["✨", "Produção estética de alto nível"],
  ["❤️", "Conexão real com o público"],
  ["💎", "Posicionamento de marca premium"],
  ["📖", "Storytelling que gera desejo"],
];

function Diferenciais() {
  return (
    <section id="diferenciais" className="bg-cream px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <Eyebrow>Diferenciais</Eyebrow>
          <h2 className="mt-6 font-display text-3xl leading-[1.15] sm:text-5xl">
            O que marcas parceiras recebem.
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Muito além de um post. Uma parceria estratégica.
          </p>
        </div>

        <ul className="mt-12 space-y-4">
          {diferenciais.map(([icon, label]) => (
            <li
              key={label}
              className="border border-border bg-card px-6 py-10 text-center"
            >
              <span className="text-3xl">{icon}</span>
              <p className="mt-5 text-sm font-medium">{label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const marcas = [
  "SHEIN",
  "SHOPEE",
  "DUX",
  "HUMAN HEALTH",
  "GOCASE",
  "+ MARCAS",
];

function Portfolio() {
  return (
    <section id="portfolio" className="bg-cream px-5 pb-16 sm:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow>Portfólio</Eyebrow>
        <h2 className="mt-6 font-display text-3xl sm:text-4xl">
          Marcas que já confiaram
        </h2>
        <p className="mt-2 font-display text-sm italic text-muted-foreground">
          em minha influência
        </p>

        <ul className="mt-10 grid grid-cols-3 border-t border-l border-border">
          {marcas.map((m) => (
            <li
              key={m}
              className="grid min-h-24 place-items-center border-r border-b border-border bg-card px-2 text-[0.6rem] tracking-[0.14em] text-muted-foreground uppercase"
            >
              {m}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contato() {
  return (
    <section id="contato" className="band-dark relative overflow-hidden px-5 py-20 sm:px-8">
      <span className="watermark">Juntos</span>
      <div className="relative mx-auto max-w-2xl text-center">
        <Eyebrow>Contato</Eyebrow>
        <h2 className="mt-6 font-display text-4xl leading-[1.12] sm:text-5xl">
          Vamos construir algo{" "}
          <em className="italic text-rose-soft">forte juntos?</em>
        </h2>
        <p className="mx-auto mt-7 max-w-md text-sm leading-loose text-dark-muted">
          Marcas não compram posts — compram impacto. Vamos conversar sobre como
          posso gerar resultados reais para a sua marca.
        </p>

        <div className="mx-auto mt-12 flex max-w-md flex-col gap-3 sm:flex-row">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-3 bg-whats px-6 py-4 text-xs font-semibold tracking-[0.2em] text-white uppercase"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
              <path d="M12.04 2C6.6 2 2.18 6.42 2.18 11.86c0 1.74.46 3.44 1.32 4.94L2 22l5.35-1.4a9.83 9.83 0 0 0 4.69 1.19c5.43 0 9.85-4.42 9.85-9.86 0-2.63-1.02-5.1-2.88-6.96A9.78 9.78 0 0 0 12.04 2z" />
            </svg>
            WhatsApp
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="flex-1 border border-white/35 px-6 py-4 text-xs font-semibold tracking-[0.2em] uppercase"
          >
            E-mail
          </a>
        </div>

        <div className="mt-14 space-y-4 text-sm text-dark-muted">
          <p>
            <span className="mr-3">📧</span>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </p>
          <p>
            <span className="mr-3">📱</span>
            {TELEFONE}
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0d0b0b] px-5 py-14 text-center sm:px-8">
      <p className="font-display text-2xl text-dark-muted">Melissa Costa</p>
      <p className="mt-6 text-xs text-dark-muted/70">
        © 2025 Melissa Costa · Todos os direitos reservados
      </p>
      <div className="mt-6 flex justify-center gap-8 text-[0.62rem] tracking-[0.22em] text-dark-muted/70 uppercase">
        <a
          href="https://instagram.com/melissasoucostaa"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          href="https://tiktok.com/@melissasoucostaa"
          target="_blank"
          rel="noopener noreferrer"
        >
          TikTok
        </a>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader />
      <main>
        <Hero />
        <Sobre />
        <Numeros />
        <Audiencia />
        <Parceria />
        <Investimento />
        <Diferenciais />
        <Portfolio />
        <Contato />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
