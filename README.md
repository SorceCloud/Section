# ansidev 's blog

[![Netlify Status](https://api.netlify.com/api/v1/badges/2862c07d-8cb3-4326-bbf2-b3a07eeda938/deploy-status)](https://app.netlify.com/sites/ansidev/deploys)

## Introduction

This source code is based on [Vitesse](https://github.com/antfu/vitesse) by [Anthony Fu](https://github.com/antfu).

## Features

- ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite 3](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [ESBuild](https://github.com/evanw/esbuild) - born with fastness
- 🗂 [File based routing](./src/pages)
- 📦 [Components auto importing](./src/components)
- 📑 [Layout system](./src/layouts)
- 📲 [PWA](https://github.com/antfu/vite-plugin-pwa)
- 😃 [Use icons from any icon sets, with no compromise](./src/components)
- 🌍 [I18n ready](./locales)
- 🗒 [Markdown Support](https://github.com/antfu/vite-plugin-md)
- 🔥 Use the [new `<script setup>` syntax](https://github.com/vuejs/rfcs/pull/227)
- 📥 [APIs auto importing](https://github.com/antfu/unplugin-auto-import) - use Composition API and others directly
- 🖨 Static-site generation (SSG) via [vite-ssg](https://github.com/antfu/vite-ssg)
- 🦾 TypeScript, of course
- ☁️ Deploy on Netlify, zero-config

## Pre-packed

### UI Frameworks

- [TailwindCSS](https://tailwindcss.com) - A utility-first CSS framework.

### Icons

- [Iconify](https://iconify.design) - use icons from any icon sets [🔍Icônes](https://icones.netlify.app/)

### Vite Plugins

- [Vue Router](https://github.com/vuejs/router)
  - [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) - file system based routing
  - [`vite-plugin-vue-layouts`](https://github.com/JohnCampionJr/vite-plugin-vue-layouts) - layouts for pages
- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) - components auto import
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - Directly use Vue Composition API and others without importing
- [`vite-plugin-pwa`](https://github.com/antfu/vite-plugin-pwa) - PWA
- [`vite-plugin-md`](https://github.com/antfu/vite-plugin-md) - Markdown as components / components in Markdown
  - [`markdown-it-shiki`](https://github.com/antfu/markdown-it-shiki) - [Shiki](https://github.com/shikijs/shiki) for syntax highlighting
- [Vue I18n](https://github.com/intlify/vue-i18n-next) - Internationalization
  - [`vite-plugin-vue-i18n`](https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n) - Vite plugin for Vue I18n
- [VueUse](https://github.com/antfu/vueuse) - collection of useful composition APIs
- [`vite-ssg-sitemap`](https://github.com/jbaubree/vite-ssg-sitemap) - Sitemap generator
- [`@vueuse/head`](https://github.com/vueuse/head) - manipulate document head reactively

### Blog Plugins

All plugin is located at [./src/plugins](./src/plugins) and their config is saved in [./src/site.config.ts](./src/site.config.ts)`.plugins`.

- [Donation](./src/plugins/donation)
- [Facebook Comment](./src/plugins/facebookComment)
- [Google Analytics](./src/plugins/googleAnalytics)
- [I18n](./src/plugins/i18n.ts)
- [Medium Zoom](./src/plugins/mediumZoom)
- [Nprogress](./src/plugins/nprogress.ts)
- [Sharing](./src/plugins/sharing)
- [Substack Newsletter](./src/plugins/substack)
- [Swetrix Analytics](./src/plugins/swetrix)

### Coding Style

- Use Composition API with [`<script setup>` SFC syntax](https://github.com/vuejs/rfcs/pull/227)
- [ESLint](https://eslint.org/) with [@antfu/eslint-config](https://github.com/antfu/eslint-config), single quotes, no semi.

### Dev tools

- [TypeScript](https://www.typescriptlang.org/)
- [pnpm](https://pnpm.js.org/) - fast, disk space efficient package manager
- [`vite-ssg`](https://github.com/antfu/vite-ssg) - Static-site generation
- [Netlify](https://www.netlify.com/) - zero-config deployment
- [VS Code Extensions](./.vscode/extensions.json)
  - [Vite](https://marketplace.visualstudio.com/items?itemName=antfu.vite) - Fire up Vite server automatically
  - [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Vue 3 `<script setup>` IDE support
  - [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - Icon inline display and autocomplete
  - [i18n Ally](https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally) - All in one i18n support
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Try it now!

> This source code requires Node >=14.18

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
git clone git@github.com:ansidev/blog.git my-blog
cd my-blog
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```

## Usage

### Development

Just run and visit http://localhost:3333

```bash
pnpm dev
```

### Build

To build the App, run

```bash
pnpm build
```

And you will see the generated file in `dist` that ready to be served.

### Deploy on Netlify

Go to [Netlify](https://app.netlify.com/start) and select your clone, `OK` along the way, and your App will be live in a minute.
