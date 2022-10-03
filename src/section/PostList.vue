<script setup lang="ts">
defineProps({
  posts: {
    type: Array,
    required: true,
    default: () => [],
  },
})
</script>

<template>
  <ul v-if="Array.isArray(posts) && posts.length > 0" class="divide-y divide-gray-200 dark:divide-gray-700">
    <li v-for="post of posts" :key="post.slug" class="py-4">
      <PostItem :post="post" />
    </li>
  </ul>
</template>
