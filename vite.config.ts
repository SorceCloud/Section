import path, { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import VuePlugin from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
import Anchor from 'markdown-it-anchor'
import VueI18n from '@intlify/vite-plugin-vue-i18n'
import LinkAttributes from 'markdown-it-link-attributes'
import frontmatterToc from './src/plugin/markdown/frontmatter-toc'
import WindiCSS from 'vite-plugin-windicss'
import Shiki from 'markdown-it-shiki'

export default defineConfig(({ mode }) => {
  return {
    resolve: {
      alias: {
        '~/': `${resolve(dirname(fileURLToPath(import.meta.url)), 'src')}/`,
      },
    },
    build: {
      rollupOptions: {
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue',
          },
        },
      },
      lib: {
        entry: './src/packet/index.ts',
        name: 'Section',
      }
    },
    plugins: [
      VuePlugin({
        reactivityTransform: true,
        include: [/\.vue$/, /\.md$/],
      }),

      // https://github.com/antfu/vite-plugin-md
      Markdown({
        builders: [
          frontmatterToc(),
        ],
        markdownItUses: [
          [Shiki,
            {
              theme: {
                light: 'min-light',
                dark: 'min-dark',
              },
            },],
          [
            LinkAttributes,
            {
              matcher: (link: string) => /^https?:\/\//.test(link),
              attrs: {
                target: '_blank',
                rel: 'noopener',
              },
            },
          ],
          [Anchor],
        ],
        wrapperComponent: 'Markdown',
        excerpt: '<!-- more -->',
        excerptExtract: true,
      }),
      VueI18n({
        runtimeOnly: true,
        compositionOnly: true,
        include: [resolve(dirname(fileURLToPath(import.meta.url)), './src/locale/**')],
      }),
      WindiCSS(
        {
          scan: {
            dirs: ['.'], // all files in the cwd
            fileExtensions: ['vue', 'js', 'ts'], // also enabled scanning for js/ts
          },
          config: path.resolve(__dirname, 'windi.config.ts'),
        }
      )
    ],
  }
})
