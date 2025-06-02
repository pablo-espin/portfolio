my-portfolio/
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Navigation.astro
│   │   ├── ProjectCard.astro
│   │   ├── BlogCard.astro
│   │   └── SEO.astro
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── ProjectLayout.astro
│   │   ├── BlogLayout.astro
│   │   └── PageLayout.astro
│   ├── pages/
│   │   ├── index.astro (Homepage)
│   │   ├── about.astro
│   │   ├── projects/
│   │   │   ├── index.astro (Projects overview)
│   │   │   ├── project-1.astro
│   │   │   └── project-2.astro
│   │   ├── writing/
│   │   │   ├── index.astro (Blog listing)
│   │   │   └── [slug].astro (Individual posts)
│   │   ├── research/
│   │   │   ├── index.astro (Research overview)
│   │   │   ├── research-1.astro
│   │   │   └── research-2.astro
│   │   └── 404.astro
│   ├── content/
│   │   ├── config.ts
│   │   ├── blog/
│   │   │   ├── post-1.md
│   │   │   ├── post-2.md
│   │   │   └── post-3.md
│   │   ├── projects/
│   │   │   ├── project-1.md
│   │   │   └── project-2.md
│   │   └── research/
│   │       ├── research-1.md
│   │       └── research-2.md
│   ├── styles/
│   │   ├── global.css
│   │   └── components/
│   └── assets/
│       └── images/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── images/
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── tailwind.config.mjs