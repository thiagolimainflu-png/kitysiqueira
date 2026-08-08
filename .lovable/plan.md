Atualizar o link do WhatsApp

## Contexto
Hoje todo o site usa uma única constante `WHATSAPP_URL` exportada de `src/components/WhatsAppFab.tsx`. Ela alimenta o botão flutuante do WhatsApp, o CTA principal do hero e o botão da seção de contato.

## O que será feito
Substituir a URL atual `https://wa.me/5585999521373?text=...` pelo novo link enviado:
`https://api.whatsapp.com/send/?phone=71986113211&text&type=phone_number&app_absent=0`

## Escopo
- Alterar apenas `src/components/WhatsAppFab.tsx`, linhas 1-2.
- Todos os botões que importam `WHATSAPP_URL` serão atualizados automaticamente.

## Validação
- Build do projeto deve continuar passando.
- Verificar preview para garantir que o botão flutuante e os CTAs apontam para o novo número.
