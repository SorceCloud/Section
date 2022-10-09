import path, { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import VuePlugin from '@vitejs/plugin-vue'
// import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components'
import Markdown from 'vite-plugin-md'
import VueI18n from '@intlify/vite-plugin-vue-i18n'
import LinkAttributes from 'markdown-it-link-attributes'
import frontmatterToc from './src/plugin/markdown/frontmatter-toc'
import WindiCSS from 'vite-plugin-windicss'

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
      // https://github.com/antfu/unplugin-auto-import
      // AutoImport({
      //   imports: [
      //     'vue',
      //     'vue-router',
      //     'vue-i18n',
      //     'vue/macros',
      //     '@vueuse/head',
      //     '@vueuse/core',
      //   ],
      //   dts: 'src/auto-imports.d.ts',
      //   vueTemplate: true,
      // }),

      // https://github.com/antfu/vite-plugin-md
      Markdown({
        builders: [
          frontmatterToc(),
        ],
        markdownItUses: [
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
        ],
        wrapperComponent: 'Markdown',
      }),

      // https://github.com/antfu/unplugin-vue-components
      // Components({
      //   dirs: ['src/section'],
      //   // allow auto load markdown components under `./src/components/`
      //   extensions: ['vue', 'md'],
      //   // allow auto import and register components used in markdown
      //   include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      //   dts: true,
      // }),
      // https://github.com/intlify/vite-plugin-vue-i18n
      VueI18n({
        runtimeOnly: true,
        compositionOnly: true,
        include: [resolve(dirname(fileURLToPath(import.meta.url)), './src/locales/**')],
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
