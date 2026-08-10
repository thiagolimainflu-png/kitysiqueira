import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Clock, Image as ImageIcon, PlusCircle, Star } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { SmoothImage } from "@/components/SmoothImage";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatsAppFab, WHATSAPP_URL } from "@/components/WhatsAppFab";
import heroImg from "@/assets/hero-bianca.jpg";
import heroThumb from "@/assets/hero-bianca-thumb.jpg";
import sobreImg from "@/assets/sobre-bianca.jpg";
import { PhoneMockup } from "@/components/PhoneMockup";
import { InstagramPosts } from "@/components/InstagramPosts";
import insightsGeral from "@/assets/insights-geral.jpg";
import insightsPublico from "@/assets/insights-publico.jpg";
import insightsStories from "@/assets/insights-stories.jpg";


const EMAIL = "contato.talitaacosta@gmail.com";
const TELEFONE = "(92) 99588-9599 · publis e parcerias";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Talita Costa | Criadora de Conteúdo Digital" },
      {
        name: "description",
        content:
          "Talita Costa (@eu.talitaacosta): 16,9 mil seguidores no Instagram com conteúdo estratégico, marketing e vida real. Publis e parcerias que geram resultado.",
      },
      {
        property: "og:title",
        content: "Talita Costa | Criadora de Conteúdo Digital",
      },
      {
        property: "og:description",
        content:
          "Marketing e vida real. 1.650 publicações e uma comunidade de 16,9 mil seguidores em Pres. Figueiredo (AM). Parcerias com marcas que querem autenticidade.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
      className={`btn-sheen block w-full px-6 py-4 text-center text-xs font-semibold tracking-[0.2em] uppercase ${className}`}
    >
      {children}
    </a>
  );
}

/* ---------------- sections ---------------- */

function Hero() {
  return (
    <section id="top" className="band-dark relative overflow-hidden">
      <div className="mx-auto lg:grid lg:min-h-[86vh] lg:max-w-7xl lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-16 lg:px-10 lg:py-20">
        <div className="relative lg:order-2">
          <div className="img-frame relative">
            <SmoothImage
              src={heroImg}
              alt="Talita Costa em blazer preto, retrato em estúdio com luz difusa"
              priority
              placeholder={heroThumb}
              objectPosition="object-top"
              wrapperClassName="h-[62vh] min-h-[380px] w-full lg:h-[74vh]"
              className="h-[62vh] min-h-[380px] w-full object-cover object-top lg:h-[74vh]"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-dark to-transparent lg:hidden" />
          </div>
          <div className="float-soft relative -mt-16 ml-0 w-fit bg-rose-soft px-7 py-4 text-ink shadow-[0_18px_40px_-24px_rgba(0,0,0,0.7)] lg:absolute lg:bottom-10 lg:-left-10 lg:mt-0">
            <p className="font-display text-2xl leading-none">16,9K</p>
            <p className="mt-1 text-[0.65rem] tracking-[0.18em] uppercase">
              Seguidores
            </p>
          </div>
        </div>

        <div className="relative px-5 pb-16 pt-12 text-center sm:px-8 lg:order-1 lg:px-0 lg:py-0 lg:text-left">
          <span className="watermark">Talita</span>
          <div className="relative mx-auto max-w-3xl lg:mx-0">
            <Reveal delay={60}><Eyebrow>Criadora de conteúdo digital · Marketing &amp; vida real</Eyebrow></Reveal>
            <Reveal delay={160}><h1 className="mt-6 font-display text-4xl leading-[1.12] sm:text-6xl lg:text-[4.25rem]">
              Conteúdo estratégico e autêntico que{" "}
              <em className="italic text-rose-soft">gera resultado.</em>
            </h1></Reveal>
            <Reveal delay={260}><p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-dark-muted sm:text-base lg:mx-0 lg:max-w-lg">
              Oii, Mermãs! Sou Talita Costa, de Pres. Figueiredo (AM). Crio
              conteúdo real, com uma comunidade que acompanha de perto e confia no
              que eu indico.
            </p></Reveal>


            <Reveal delay={340} className="mx-auto mt-10 flex max-w-sm flex-col gap-3 lg:mx-0 lg:max-w-xl lg:flex-row">
              <CtaWhats className="bg-rose text-white">
                Quero anunciar com você
              </CtaWhats>
              <a
                href="#numeros"
                className="btn-sheen block w-full border border-white/35 px-6 py-4 text-center text-xs font-semibold tracking-[0.2em] uppercase"
              >
                Ver resultados
              </a>
            </Reveal>

            <Reveal as="dl" delay={440} className="mt-14 grid grid-cols-3 gap-2 lg:max-w-xl lg:gap-6">
              {[
                ["16,9 mil", "Seguidores"],
                ["1.650", "Publicações"],
                ["6.001", "Seguindo"],
              ].map(([n, l]) => (

                <div key={l}>
                  <dt className="font-display text-2xl sm:text-3xl">{n}</dt>
                  <dd className="mt-2 text-[0.6rem] tracking-[0.18em] text-dark-muted uppercase">
                    {l}
                  </dd>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}


function Sobre() {
  const tags = ["Life Style", "Moda", "Beleza", "Maternidade"];
  return (
    <section id="sobre" className="bg-cream px-5 py-16 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-3xl lg:grid lg:max-w-6xl lg:grid-cols-2 lg:items-start lg:gap-16">
        <div className="lg:sticky lg:top-28">
          <Reveal variant="scale" className="img-frame">
            <SmoothImage
              src={sobreImg}
              alt="Talita Costa, criadora de conteúdo digital"
              ratio="1 / 1"
              className="w-full object-cover"
            />
          </Reveal>
          <Reveal as="figure" delay={120} className="bg-card px-6 py-7 shadow-[0_10px_30px_-24px_rgba(0,0,0,0.5)]">
            <blockquote className="font-display text-base italic">
              &ldquo;Oii, Mermãs! Fica aqui comigo.&rdquo;
            </blockquote>
          </Reveal>
        </div>

        <Reveal className="mt-14 lg:mt-0">

          <Eyebrow>Quem sou</Eyebrow>
          <h2 className="mt-6 font-display text-3xl leading-[1.15] sm:text-5xl">
            Mais do que uma criadora.{" "}
            <em className="italic text-rose">Uma amiga do público.</em>
          </h2>
          <div className="mt-7 space-y-5 text-sm leading-loose text-muted-foreground sm:text-base">
            <p>
              Talita Costa, 29 anos, casada, mãe de 3 filhos, é profissional de
              educação física e modelo. Compartilha nas redes o dia a dia de
              mãe, com muita leveza e bom humor, além de dicas de moda, beleza e
              vida saudável.
            </p>
            <p>
              Começou nas mídias sociais em 2018, quando foi eleita Miss
              Amazonas. No ano seguinte, em 2019, recebeu mais um título: Miss
              Beleza do Amazonas.
            </p>
            <p>
              Depois da carreira como Miss, casou-se e passou a falar sobre
              maternidade no perfil. Hoje o conteúdo é focado em produções
              estratégicas para empresas — leves, criativas e divertidas, em
              nichos como moda e beleza.
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
        </Reveal>
      </div>
    </section>
  );
}

const numeros: [string, string, string][] = [
  ["Instagram", "16,9 mil", "Seguidores"],
  ["Instagram · Stories", "2 mil a 12 mil", "Views diários"],
  ["Instagram · Feed", "3 mil a 7,7 mil", "Alcance médio por post"],
  ["Instagram · Reels", "10 mil a 30 mil", "Média de reproduções"],
];


function Numeros() {
  return (
    <section id="numeros" className="band-dark px-5 py-16 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-3xl lg:max-w-6xl">
        <Reveal className="text-center">
          <Eyebrow>Prova social</Eyebrow>
          <h2 className="mt-6 font-display text-3xl leading-[1.15] sm:text-5xl">
            Números que falam
            <br />
            por si mesmos.
          </h2>
          <p className="mt-4 font-display text-sm italic text-dark-muted">
            Alcance que converte.
          </p>
        </Reveal>

        <div className="mt-12 grid border-t border-l border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {numeros.map(([rede, valor, label], i) => (
            <Reveal
              key={valor + label}
              delay={i * 90}
              className="border-r border-b border-white/10 px-6 py-10 text-center"
            >
              <p className="text-[0.6rem] tracking-[0.22em] text-rose-soft uppercase">
                {rede}
              </p>
              <p className="mt-5 font-display text-4xl sm:text-5xl lg:text-4xl">{valor}</p>
              <p className="mt-3 text-[0.65rem] tracking-[0.18em] text-dark-muted uppercase">
                {label}
              </p>
            </Reveal>
          ))}
        </div>


        <p className="mt-10 text-center font-display text-sm italic text-dark-muted">
          Comunidade pequena no número, gigante na confiança.
        </p>

      </div>
    </section>
  );
}

const barras: [string, number][] = [
  ["Feminino", 85],
  ["18-44 anos", 74],
  ["Amazonas e Norte", 68],
];

const insightsPrints: [string, string, string][] = [
  [
    insightsGeral,
    "Print do Instagram Insights com 2.022.728 visualizações em 30 dias",
    "2 milhões de visualizações",
  ],
  [
    insightsPublico,
    "Print do Instagram Insights mostrando público 63,6% feminino",
    "Perfil do público",
  ],
  [
    insightsStories,
    "Print de métricas de stories com 4.992 visualizações",
    "Stories no dia a dia",
  ],
];


function Audiencia() {
  const { ref, seen } = useInView<HTMLDivElement>();
  return (
    <section id="audiencia" className="bg-cream-deep px-5 py-16 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-3xl lg:max-w-6xl">
        <Reveal className="text-center">
          <Eyebrow>Audiência</Eyebrow>
          <h2 className="mt-6 font-display text-3xl leading-[1.15] sm:text-5xl">
            Um público qualificado e{" "}
            <em className="italic text-rose">pronto para comprar.</em>
          </h2>
          <p className="mt-4 font-display text-sm italic text-muted-foreground">
            &ldquo;Não é só alcance. É conversão.&rdquo;
          </p>
        </Reveal>

        <div className="lg:mt-6 lg:grid lg:grid-cols-[minmax(0,320px)_1fr] lg:items-center lg:gap-16">
          <div ref={ref} className="mt-12 space-y-6 lg:mt-0">
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

          <div className="mt-12 -mx-6 px-6 sm:mx-0 sm:px-0 lg:mt-0">
            <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-10 lg:justify-center lg:gap-8 lg:overflow-visible lg:pb-0">
              {insightsPrints.map(([src, alt, caption], i) => (
                <Reveal key={caption} delay={i * 110}>
                  <div className="w-[68vw] max-w-[280px] shrink-0 snap-center sm:w-[300px] lg:w-[240px]">
                    <PhoneMockup src={src} alt={alt} caption={caption} />
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="text-center text-xs text-muted-foreground sm:hidden">
              arraste para o lado →
            </p>
          </div>
        </div>



      </div>
    </section>
  );
}

function Conteudos() {
  return (
    <section id="conteudos" className="bg-cream px-5 py-16 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <Eyebrow>Conteúdos</Eyebrow>
          <h2 className="mt-6 font-display text-3xl leading-[1.15] sm:text-5xl">
            Destaques <em className="italic text-rose">recentes</em>
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Publicações reais do perfil, com entrega orgânica e engajamento consistente.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12">
            <InstagramPosts />
          </div>
        </Reveal>
      </div>
    </section>
  );
}



const formatos = [
  {
    icon: Clock,
    title: "Stories",
    desc: "Sequência de stories com conteúdo autêntico, mostrando o produto ou serviço integrado à rotina.",
  },
  {
    icon: PlusCircle,
    title: "Reels",
    desc: "Vídeo curto com roteiro criativo, edição profissional e integração natural da marca ao conteúdo.",
  },
  {
    icon: ImageIcon,
    title: "Post no Feed",
    desc: "Publicação estática ou carrossel com foto profissional, legenda estratégica e menção à marca.",
  },
  {
    icon: Star,
    title: "Combo Completo",
    desc: "Pacote personalizado combinando Stories + Reels + Post, com cobertura completa e maior impacto.",
    recommended: true,
  },
];

function Parceria() {
  return (
    <section id="parceria" className="bg-secondary px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-5xl lg:max-w-6xl">
        <Reveal className="text-center">
          <p className="text-[0.68rem] tracking-[0.24em] text-primary uppercase">
            Formatos
          </p>
          <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
            Como podemos
            <br />
            trabalhar juntos
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {formatos.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal
                as="article"
                key={f.title}
                delay={i * 90}
                className="relative"
              >
                <div
                  className={`lift relative h-full rounded-xl bg-card px-7 py-10 text-center ${
                    f.recommended
                      ? "border border-primary/60"
                      : "border border-border/60"
                  }`}
                >
                  {f.recommended ? (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-[0.6rem] tracking-[0.18em] text-primary-foreground uppercase">
                      Recomendado
                    </span>
                  ) : null}
                  <Icon
                    className="mx-auto h-6 w-6 text-primary"
                    strokeWidth={1.4}
                    aria-hidden
                  />
                  <h3 className="mt-6 font-display text-2xl">{f.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {f.desc}
                  </p>
                  <p className="mt-6 text-[0.68rem] tracking-[0.2em] text-primary uppercase">
                    Sob consulta
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}




const marcas = [
  "MODA",
  "BELEZA",
  "CASA",
  "GASTRONOMIA",
  "TURISMO",
  "+ PARCERIAS",
];

function Portfolio() {
  return (
    <section id="portfolio" className="bg-cream px-5 pb-16 sm:px-8 lg:pb-28">
      <Reveal className="mx-auto max-w-3xl text-center lg:max-w-5xl">
        <Eyebrow>Portfólio</Eyebrow>
        <h2 className="mt-6 font-display text-3xl sm:text-4xl">
          Segmentos que combinam
        </h2>
        <p className="mt-2 font-display text-sm italic text-muted-foreground">
          com o meu conteúdo
        </p>

        <ul className="mt-10 grid grid-cols-3 border-t border-l border-border lg:grid-cols-6">
          {marcas.map((m) => (
            <li
              key={m}
              className="grid min-h-24 place-items-center border-r border-b border-border bg-card px-2 text-[0.6rem] tracking-[0.14em] text-muted-foreground uppercase transition-colors duration-500 hover:bg-accent/20 hover:text-ink"
            >
              {m}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

function Contato() {
  return (
    <section id="contato" className="band-dark relative overflow-hidden px-5 py-20 sm:px-8 lg:py-32">
      <span className="watermark">Juntos</span>
      <Reveal className="relative mx-auto max-w-2xl text-center">
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
            className="btn-sheen flex flex-1 items-center justify-center gap-3 bg-whats px-6 py-4 text-xs font-semibold tracking-[0.2em] text-white uppercase"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
              <path d="M12.04 2C6.6 2 2.18 6.42 2.18 11.86c0 1.74.46 3.44 1.32 4.94L2 22l5.35-1.4a9.83 9.83 0 0 0 4.69 1.19c5.43 0 9.85-4.42 9.85-9.86 0-2.63-1.02-5.1-2.88-6.96A9.78 9.78 0 0 0 12.04 2z" />
            </svg>
            WhatsApp
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="btn-sheen flex-1 border border-white/35 px-6 py-4 text-xs font-semibold tracking-[0.2em] uppercase"
          >
            E-mail
          </a>
        </div>

        <div className="mt-14 space-y-4 text-sm text-dark-muted">
          <p>
            <span className="emoji mr-3">📧</span>
            <a href={`mailto:${EMAIL}`} className="link-underline">{EMAIL}</a>
          </p>
          <p>
            <span className="emoji mr-3">📱</span>
            {TELEFONE}
          </p>
        </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0d0b0b] px-5 py-14 text-center sm:px-8">
      <p className="font-display text-2xl text-dark-muted">Talita Costa</p>
      <p className="mt-6 text-xs text-dark-muted/70">
        © 2026 Talita Costa · Todos os direitos reservados
      </p>
      <div className="mt-6 flex justify-center gap-8 text-[0.62rem] tracking-[0.22em] text-dark-muted/70 uppercase [&_a]:transition-colors [&_a:hover]:text-dark-foreground">
        <a
          href="https://instagram.com/eu.talitaacosta"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          href="https://instagram.com/eu.talitaacosta"
          target="_blank"
          rel="noopener noreferrer"
        >
          Direct
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
        <Conteudos />
        <Parceria />
        <Portfolio />
        <Contato />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
