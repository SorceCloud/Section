<script setup lang="ts">

const router = useRouter()
const routes = router.getRoutes().filter(route => route.path.startsWith('/posts'))

const posts = computed(() => routes
  .map(r => r.meta)
  .filter(m => m.type === 'post')
  .sort((p1, p2) => Date.parse(p2.date) - Date.parse(p1.date))
  .slice(0, 10))
</script>

<template>
  <div class="divide-y divide-gray-200 dark:divide-gray-700">
    <ul v-if="Array.isArray(posts) && posts.length > 0" class="divide-y divide-gray-200 dark:divide-gray-700">
      <li v-for="post of posts" :key="post.slug" class="py-4">
        <PostItem :post="post" />
      </li>
    </ul>
  </div>
</template>
