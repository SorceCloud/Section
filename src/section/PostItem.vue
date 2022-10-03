<script setup lang="ts">
defineProps({
  post: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article>
    <div class="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
      <h2 class="text-2xl font-bold leading-8 tracking-tight mb-2">
        <Link :href="post.path" class="text-gray-900 dark:text-gray-100">
        {{ post.title }}
        </Link>
      </h2>
    </div>
  </article>
</template>
