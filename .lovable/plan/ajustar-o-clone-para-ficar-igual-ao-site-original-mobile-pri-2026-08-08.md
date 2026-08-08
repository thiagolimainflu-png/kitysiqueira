# Ajustar o clone para ficar igual ao site original (mobile primeiro)

Analisei as 26 capturas do celular. O clone atual errou o mais importante: o **site original não é escuro**. Ele alterna faixas claras (creme) e faixas escuras (marrom quase preto), e a maior parte da página é clara.

## O que está diferente hoje

1. **Fundo geral**: o clone é todo escuro. O original tem fundo creme `#FAF5F0` / `#F7EDE7` na maioria das seções.
2. **Header**: no original é uma barra creme fixa, com "Melissa Costa" em serifada preta à esquerda e um ícone de menu (hambúrguer) à direita. O clone não tem esse header.
3. **Botão flutuante do WhatsApp**: círculo verde fixo no canto inferior direito, presente em toda a rolagem. Não existe no clone.
4. **Alternância de faixas**: hero escuro → "Quem sou" claro → "Prova social" escuro → "Audiência" claro → "Formatos de parceria" escuro → "Tabela de valores" claro → "Diferenciais" claro → "Contato" escuro → rodapé preto.
5. **Cores dos textos**: nas faixas claras o texto é preto/cinza escuro; o destaque itálico é rosa-vinho `#B8677E`. Nas escuras o texto é branco e o itálico rosa claro `#E8B4C4`.
6. **Ícones**: o original usa emojis reais (🎯 ✨ ❤️ 💎 📖 👩 📍 🛍️ 💬), não ícones de biblioteca.

## Estrutura correta, na ordem do original

```text
Header creme fixo (Melissa Costa + hambúrguer)
1. HERO (escuro, marca d'água "Melissa" ao fundo)
   eyebrow · título serif + "influência que vende." em itálico rosa
   2 botões: rosa cheio "QUERO ANUNCIAR COM VOCÊ" / contorno "VER RESULTADOS"
   3 números: 436K Instagram · 205K TikTok · 62M+ Views totais (+ "VER PERFIL →")
2. QUEM SOU (claro) — texto + tags contornadas MODA/LIFESTYLE/BELEZA/BEM-ESTAR/PERFORMANCE
3. PROVA SOCIAL (escuro) — cards empilhados com Instagram 436K, TikTok 205K, etc.
4. PAINEL DE MÉTRICAS (escuro) — prints dos analytics do Instagram/TikTok
5. AUDIÊNCIA (claro) — 3 barras de progresso (Feminino 80%, 18-35 72%, Capitais 95%)
   + cards brancos com emoji: 80%, 95%, 18-50, Alto
6. FORMATOS DE PARCERIA (escuro) — foto + 3 cards: Avulso / Combinado / Recorrente
7. TABELA DE VALORES (claro rosado) — aviso de agenda, botão FECHAR PARCERIA,
   cards brancos "Publicações avulsas", "Combos estratégicos", "Contrato mensal" (destacado)
8. DIFERENCIAIS (claro) — 5 cards brancos empilhados com emoji
9. PORTFÓLIO (claro) — SHEIN, SHOPEE, DUX, HUMAN HEALTH, Beach Park, GOCASE, + MARCAS
10. CONTATO (escuro) — botão WhatsApp verde + E-mail contornado, e-mail e telefone
11. Rodapé preto — Melissa Costa · © 2025 · Instagram / TikTok
Botão flutuante WhatsApp (verde, fixo)
```

## Prioridade mobile

Tudo construído primeiro para tela de celular: uma coluna, cards empilhados em largura total, títulos grandes serifados, botões de largura total. Versões maiores só recebem grades de 2-3 colunas.

## Fotos

As fotos reais da Melissa aparecem nas capturas. Vou recortá-las das próprias capturas para usar na seção "Quem sou", "Formatos de parceria" e "Tabela de valores". Se você tiver os arquivos originais das fotos, o resultado fica bem mais nítido — pode enviar depois que eu terminar.

## Detalhes técnicos

- `src/styles.css`: trocar o tema para claro por padrão — `--background: #FAF5F0`, `--foreground` quase preto, `--primary` rosa-vinho `#B8677E`, e novos tokens para as faixas escuras (`--section-dark`, `--section-dark-foreground`, `--accent-soft`) e para o verde do WhatsApp.
- Fontes mantidas: Playfair Display (títulos) + Montserrat (corpo).
- `src/routes/index.tsx`: reescrever a página seguindo a ordem acima, quebrando em componentes por seção em `src/components/sections/`.
- Header e botão flutuante do WhatsApp como componentes próprios, com `position: fixed`.
- Menu hambúrguer abre painel com âncoras para as seções.
- Links de WhatsApp e e-mail mantidos: `(85) 99952-1373` e `melissa.souzac15@gmail.com`.
