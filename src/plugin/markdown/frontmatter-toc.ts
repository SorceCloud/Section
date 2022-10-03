import { PipelineStage, createBuilder } from '@yankeeinlondon/builder-api'
import { headersPlugin } from '@mdit-vue/plugin-headers'
import type { MarkdownItEnv } from '@mdit-vue/types'

const frontmatterTocBuilder = createBuilder('frontmatter-toc', PipelineStage.parser)
  .options()
  .initializer()
  .handler(
    async (payload, _) => {
      const md = payload.parser.use(headersPlugin)
      const env: MarkdownItEnv = {}
      md.render(payload.md, env)
      const toc = env.headers
      payload.frontmatter.toc = toc

      return payload
    },
  )
  .meta()
export default frontmatterTocBuilder
