<template>
  <aside
    class="fixed inset-0 z-40 flex-none w-72 h-screen overflow-auto border-r lg:z-30 lg:static lg:h-auto lg:overflow-y-visible lg:w-62 lg:block">
    <div class="overflow-hidden overflow-y-auto h-full scrolling-touch max-w-2xs h-screen lg:fixed lg:mr-0 lg:w-62">
      <nav class="pt-2 px-1 pl-3 overflow-y-auto text-base lg:(pl-0 pt-9 text-sm pb-10 h-(screen-18))"
        aria-label="Docs navigation">
        <template v-for="menu in routes">
          <Menu v-if="menu.children && menu.children.length>1" v-for="parent in menu.children" class="w-full pt-0">
            <span class="menu-title">{{parent.meta.title}}</span>
            <btn size="sm" menu-item variant="transparent" v-for="child in parent.children" tag="RouterLink"
              :to="child.path"
              :class="[router.meta.title === child.meta.title ? 'border-l-2 border-primary bg-base-gray-200 dark:bg-base-gray-600':'']">
              {{child.meta.title}}
            </btn>
          </Menu>
        </template>
      </nav>
    </div>
  </aside>
</template>
<script setup lang="ts">
import routes from '../../router/route'
import { useRoute } from 'vue-router'
let router = useRoute()
</script>