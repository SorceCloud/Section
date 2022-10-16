# Section UI
## Features

- ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite 3](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), - born with fastness
- 🗂 [File based routing](./src/page)
- 😃 [Use icons from any icon sets, with no compromise](./src/packet)
- 🌍 [I18n ready](./locale)
- 🗒 [Markdown Support](https://github.com/antfu/vite-plugin-md)
- 🔥 Use the [new `<script setup>` syntax](https://github.com/vuejs/rfcs/pull/227)
- 📥 [APIs auto importing](https://github.com/antfu/unplugin-auto-import) - use Composition API and others directly
- 🦾 TypeScript, of course
- ☁️ Deploy on Netlify, zero-config

## Pre-packed

### UI Frameworks

- [WindiCSS](https://windicss.com) - A utility-first CSS framework.

### Vite Plugins

- [Vue Router](https://github.com/vuejs/router)
- [`vite-plugin-md`](https://github.com/antfu/vite-plugin-md) - Markdown as components / components in Markdown
- [Vue I18n](https://github.com/intlify/vue-i18n-next) - Internationalization
  - [`vite-plugin-vue-i18n`](https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n) - Vite plugin for Vue I18n

## Section

### Element
### Section
### Pattern
### Layout
### Template
## Try it now!

This source code requires Node >=14.18

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
git clone git@github.com:SorceCloud/Section.git
cd section
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```

## Usage

### Development

Just run and visit http://localhost:8888

```bash
pnpm run dev
```

### Build

To build the App, run

```bash
pnpm build
```

And you will see the generated file in `dist` that ready to be served.

### Deploy on Netlify

Go to [Netlify](https://app.netlify.com/start) and select your clone, `OK` along the way, and your App will be live in a minute.
