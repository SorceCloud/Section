<script setup lang="ts">
import siteConfig from '~/site.config'
import { isPluginEnabled } from '~/helpers'
import { useSubstackNewsletterConfig } from '~/plugins/substack/hooks'

const isDonationPluginEnabled = computed(() => isPluginEnabled('donation'))
const { isSubstackNewsletterPluginEnabled, substackNewsletterConfig } = useSubstackNewsletterConfig(siteConfig)
</script>

<template>
  <footer>
    <div class="grid grid-cols-2 space-y-6 mb-3">
      <div class="flex flex-wrap items-center justify-center space-x-4 col-span-2">
        <div class="mb-3">
          <Link href="/">
            <Icon icon="bi:house-heart-fill" :width="32" :height="32" />
          </Link>
        </div>
        <ThemeSwitcher :size="24" class="mb-3" />
        <LocaleSwitcher :size="24" class="mb-3" />
        <div class="hidden sm:block">
          {{ ` • ` }}
        </div>
        <SocialIcon v-for="(networkProfile, network) in siteConfig.socialNetworks" :key="network" :kind="network" :href="networkProfile" class="mb-3 hidden sm:block" />
      </div>
      <div class="sm:hidden flex flex-wrap items-center justify-center space-x-4 col-span-2">
        <SocialIcon v-for="(networkProfile, network) in siteConfig.socialNetworks" :key="network" :kind="network" :href="networkProfile" class="mb-3" />
      </div>
      <div class="flex items-center justify-center space-x-2 text-sm text-gray-500 dark:text-gray-400 col-span-2">
        <div>
          <Link href="/">
            {{ siteConfig.title }}
          </Link>
        </div>
        <div>{{ ` • ` }}</div>
        <div>
          {{ `© 2019-${new Date().getFullYear()} by` }}
          <Link href="/">
            {{ siteConfig.author }}
          </Link>
        </div>
      </div>
    </div>
  </footer>
</template>
