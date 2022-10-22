<template>
  <div>
    <h1 class="antialiased font-extrabold text-4xl leading-8 sm:text-5xl lg:text-6xl tracking-tight sm:leading-16">
      Section UI
    </h1>
    <p class="m-0 mt-10 text-lg opacity-75 leading-6 font-medium">
      Component library for VUE 3 using Windi CSS, most components are using daisyUI styles.
    </p>
    <div class="mt-10 flex space-x-4 ">
      <btn tag="RouterLink" to="/section/started" size="md">{{ t("home.started") }}</btn>
      <btn tag="RouterLink" to="/section/button" variant="outline" size="md">{{ t("home.components") }}</btn>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n();
</script>