# Notebooks Uberlândia

Site institucional da Notebooks Uberlândia. Landing page em React e Vite, publicada em GitHub Pages no caminho `/notebooksudia/`.

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
npm run deploy
```

`npm run deploy` gera a pasta `dist` e publica com `gh-pages`. O repositório precisa existir no GitHub e o remote `origin` precisa estar configurado. A URL prevista, no mesmo padrão dos outros projetos, é:

https://riquelmy247.github.io/notebooksudia/

Se o repositório ficar em outra conta, atualize `homepage` no `package.json`, `seo.url` em `src/data/data.js` e as metas de `index.html`.

## Onde editar o conteúdo

Tudo que muda com frequência está em `src/data/data.js`: nome, textos, serviços, telefone, WhatsApp, endereço, Instagram, Facebook e logo.

O WhatsApp usa o número `553499643952`, normalizado a partir de `(34) 9964-3952`. A mensagem inicial também fica nesse arquivo.

## Logo

A logo oficial está em `public/logo.png`. O caminho fica em `images.logo`, dentro de `src/data/data.js`. Ela aparece no cabeçalho, no rodapé e como ícone da aba, sem corte nem distorção.

## Instagram

O feed usa o embed público do perfil, como nos outros sites:

`https://www.instagram.com/notebooksuberlandia/embed`

O endereço fica em `instagram.embedUrl`, dentro de `src/data/data.js`. Não há token no projeto.

## Localização

O botão “Abrir no Google Maps” monta uma busca com o endereço informado. Não há mapa incorporado nem confirmação de um pin verificado.
