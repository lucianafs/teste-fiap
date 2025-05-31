# Next.js Landing Page with TypeScript and SCSS

Este projeto é uma landing page desenvolvida com Next.js, TypeScript e SCSS. A página inclui seções como Navbar, Header, Intro, Cursos e FAQ, com suporte para resoluções de desktop e mobile.

## Estrutura do Projeto

```
Teste-Fiap
├── public
│   └── fonts
│   │   └── gotham
│   │   └── gotham.css
│   └── icons
│   └── images
│   └── favicon.ico
├── src
│   ├── components
│   │   ├── Navbar.tsx
│   │   ├── Header.tsx
│   │   ├── Intro.tsx
│   │   ├── Courses.tsx
│   │   └── FAQ.tsx
│   ├── pages
│   │   ├── index.tsx
│   │   └── _document.tsx
│   │   └── _app.tsx
│   ├── styles
│   │   ├── globals.scss
│   │   ├── navbar.module.scss
│   │   ├── header.module.scss
│   │   ├── intro.module.scss
│   │   ├── courses.module.scss
│   │   └── faq.module.scss
│   └── types
│       └── index.ts
├── global.d.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Instalação

Para instalar as dependências do projeto, execute o seguinte comando:

```
npm install
```

## Execução

Para iniciar o servidor de desenvolvimento, utilize:

```
npm run dev
```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

## Estrutura das Seções

- **Navbar**: Componente que renderiza o logo da FIAP.
- **Header**: Seção de cabeçalho com título e subtítulo.
- **Intro**: Seção com título e subtítulo, incluindo imagens e animações.
- **Cursos**: Lista de cursos disponíveis.
- **FAQ**: Perguntas frequentes e suas respostas.

## Estilos

Os estilos globais estão localizados em `src/styles/global.scss`, enquanto os estilos específicos de cada componente estão em arquivos `.module.scss` correspondentes.
