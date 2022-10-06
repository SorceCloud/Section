import type { MarkdownItHeader } from '@mdit-vue/plugin-headers'
import type { Frontmatter } from 'vite-plugin-md'
export declare interface MdFrontmatter extends Frontmatter {
  type: string
  author: string
  gravatar: string
  twitter: string
  date: Date | string
  toc: MarkdownItHeader[]
}

export declare interface PostFrontmatter extends MdFrontmatter {
  categories: string[]
  tags: string[]
}
