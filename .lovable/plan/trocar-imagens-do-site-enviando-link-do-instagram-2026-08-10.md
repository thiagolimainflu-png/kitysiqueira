# Trocar imagens do site enviando link do Instagram

## Como vai funcionar

Você manda no chat uma mensagem como:

```text
Trocar a foto do hero por: https://www.instagram.com/p/XXXXXXXX/
```

Eu tento baixar a imagem daquele post e substituo o arquivo correspondente no site. Não é preciso baixar nada no seu celular.

## Imagens que podem ser trocadas

- Hero (foto principal do topo)
- "Quem sou" (seção sobre)
- Formatos de parceria
- Tabela de valores
- Prints de métricas (Instagram e TikTok)

## Passos de cada troca

1. Você envia o link + qual seção deve receber a imagem.
2. Eu busco a imagem do post público e verifico a qualidade/enquadramento.
3. Substituo o arquivo em `src/assets/` mantendo o mesmo nome, para nada mais mudar.
4. Gero também a versão reduzida (thumb) quando a seção usa carregamento progressivo.
5. Confirmo no preview que a nova foto aparece certinho no celular.

## Limitação importante

O Instagram às vezes bloqueia o download automático de imagens (posts privados, stories, ou bloqueio anti-robô). Quando isso acontecer eu aviso na hora e aí sim peço o arquivo. Na maioria dos posts públicos de feed deve funcionar.

## Detalhes técnicos

- Busca da imagem do post público via requisição HTTP no sandbox; extração da URL do CDN a partir do HTML/oEmbed do post.
- Recorte/redimensionamento com as ferramentas de imagem já disponíveis, mantendo proporção e peso semelhantes aos arquivos atuais.
- Arquivos gravados sobre os existentes em `src/assets/`, sem alterar `src/routes/index.tsx`.
