# Quebranta-me | Missão Sedentos

Microsite oficial de lançamento da música "Quebranta-me". Uma experiência visual cinematográfica, artesanal e contemplativa para convidados e divulgação da campanha musical.

## Requisitos
- Node.js (v18+)
- npm ou yarn

## Scripts Disponíveis

- `npm install` - Instala as dependências.
- `npm run dev` - Inicia o servidor de desenvolvimento.
- `npm run build` - Compila o projeto para produção.
- `npm run preview` - Visualiza o build de produção localmente.

## Configuração de Conteúdo

Todo o conteúdo dinâmico está centralizado em `src/config/siteConfig.ts`. 

- **Data de lançamento:** Adicione a data em `launchDate` (ex: `"2026-10-30T23:59:00"`). A contagem regressiva aparecerá automaticamente.
- **Pré-save:** Insira o link da campanha em `preSaveUrl`. O botão passará de "Em breve" para clicável.
- **Áudio:** 
  - Arquivo: `public/audio/quebranta-me.mp3`
  - Configuração: `audioSrc: publicUrl("audio/quebranta-me.mp3")`
- **Imagens:** As imagens da campanha devem ser enviadas para a pasta `public/assets/` substituindo os placeholders atuais.

## Deploy no GitHub Pages

O projeto já está configurado com `base: "./"` no arquivo `vite.config.ts`, sendo totalmente compatível com subdiretórios no GitHub Pages.

Para publicar:
1. Execute `npm run build`.
2. O código otimizado será gerado na pasta `dist/`.
3. Suba o conteúdo da pasta `dist/` para a branch `gh-pages` (ou equivalente) do seu repositório, garantindo que o caminho base está adequado.
