import type { MarkdownItHeader } from '@mdit-vue/plugin-headers'
import type { Frontmatter } from 'vite-plugin-md'

export declare interface SiteConfig {
  title: string
  author: string
  description: string
  defaultMetaImage: string
  headerNavigationItems: NavItem[]
  socialNetworks: Record<string, string>
}
export declare interface NavItem {
  title: string
  href: string
  icon?: string
  disableRouterLink?: boolean
}
export declare interface BreadcrumbItem {
  text: string
  path?: string
  active?: Boolean
}

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

export declare interface ProjectFrontmatter extends Frontmatter {
  repositoryUrl?: string
  showcaseUrl?: string
  licenseUrl?: string
  license?: string
  techs: string[]
  developmentStatus: string
}
