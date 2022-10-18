<template>
  <BackDrop @click="toggleSidebar" :show="isOpen" />
  <transition name="sidebar-slide">
    <aside v-show="isOpen || isLgSize" :class="{ '!lg:hidden': isHome }"
      class="fixed inset-0 z-40 flex-none w-72 h-screen bg-base-100 border-r lg:(z-30 static h-auto overflow-y-visible  w-62 block)">
      <div class="lg:hidden flex items-center justify-between h-$navbar-height bg-primary-200/10 px-2">
        <btn @click="toggleSidebar" variant="transparent" color="secondary" class="!fill-base-text">
          <icn name="arrow-left" regular xl />
        </btn>
      </div>
      <div class="overflow-hidden overflow-y-auto h-full scrolling-touch max-w-2xs h-screen lg:fixed lg:mr-0 lg:w-62">
        <nav class="pt-2 px-1 pl-3 overflow-y-auto text-base lg:(pl-0 pt-9 text-sm pb-10 h-(screen-18))"
          aria-label="Docs navigation">
          <template v-for="menu in routes">
            <Menu v-if="menu.children && menu.children.length>1" v-for="parent in menu.children" class="w-full pt-0">
              <span class="menu-title">{{parent.meta.title}}</span>
              <btn size="sm" item variant="transparent" v-for="child in parent.children" tag="RouterLink"
                :to="child.path"
                :class="[router.meta.title === child.meta.title ? 'border-l-2 border-primary bg-base-gray-200 dark:bg-base-gray-600':'']">
                {{child.meta.title}}
              </btn>
            </Menu>
          </template>
        </nav>
      </div>
    </aside>
  </transition>
</template>
<script setup lang="ts">
import routes from '../../router/route'
import { useRoute } from 'vue-router'
import { isOpen, toggleSidebar } from '../../store/sidebar'
import { windowWidth } from '../../store/window-width'
import BackDrop from './BackDrop.vue'
import { computed } from 'vue'
const { isLgSize } = windowWidth();
let router = useRoute()
const isHome = computed(() => router.meta.title === 'Index');
</script>
