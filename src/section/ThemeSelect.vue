<script setup lang="ts">
import { useTheme } from '../store/theme'
import Button from '../pecket/Element/Button/Button.vue'
import Dropdown from '~/pecket/Section/Dropdown/Dropdown.vue'
import Menu from '~/pecket/Section/Menu/Menu.vue';

const { changeTheme } = useTheme()

</script>
<template>
  <Dropdown placement="bottom-end">
    <template #trigger="{ active }">
      <Button variant="transparent" color="secondary" class="stroke-base-text">
        <i class="fa-light fa-swatchbook fa-xl"></i>
      </Button>
    </template>
    <Menu horizontal="md" compact rounded class="w-auto !bg-base-200">
      <Button menu-item @click="changeTheme('theme-default')"><span
          class="theme-blue rounded-[0.5rem] bg-blue-700 h-7 w-7"></span>
      </Button>
      <Button menu-item @click="changeTheme('theme-teal')"><span
          class="theme-teal rounded-$rounded-btn bg-teal-700 h-7 w-7"></span>
      </Button>
      <Button menu-item @click="changeTheme('theme-rose')"><span
          class="theme-rose rounded-$rounded-btn bg-rose-700 h-7 w-7"></span>
      </Button>
      <Button menu-item @click="changeTheme('theme-violet')"><span
          class="theme-violet rounded-$rounded-btn bg-violet-700 h-7 w-7"></span>
      </Button>
      <Button menu-item @click="changeTheme('theme-orange')"><span
          class="theme-orange rounded-$rounded-btn bg-orange-700 h-7 w-7"></span>
      </Button>
    </Menu>
  </Dropdown>
</template>
