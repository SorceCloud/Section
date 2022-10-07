<template>

  <h1 class="antialiased font-extrabold text-4xl leading-8 sm:text-5xl lg:text-6xl tracking-tight sm:leading-16">
    Section UI
  </h1>
  <p class="m-0 mt-10 text-lg opacity-75 leading-6 font-medium">
    Component library for VUE 3 using Windi CSS, most components are using daisyUI styles.
  </p>
  <div class="mt-10 flex space-x-4 ">
    <router-link :to="{path:'/section/started'}"> <Button size="md">Get Started</Button></router-link>
    <router-link :to="{path:'/section/button'}"><Button variant="outline" size="md">Components</Button></router-link>
  </div>
</template>
<script setup lang="ts">
import Button from '../pecket/Element/Button/Button.vue'
</script>