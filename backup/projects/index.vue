<script setup lang="ts">

const router = useRouter()
const route = useRoute()
const routes = router.getRoutes().filter(route => route.path.startsWith('/projects'))

const isProjectPostType = p => p.type === 'project'

const projects = computed(() => {
  let projectList = routes
    .map(r => r.meta)
    .filter(isProjectPostType)
    .sort((p1, p2) => Date.parse(p2.date as string) - Date.parse(p1.date as string))

  if (route.query.tech && route.query.tech.length > 0) {
    projectList = projectList
      .filter(p => Array.isArray(p.techs) && p.techs.length > 0 && p.techs.map(kebabCase).includes(route.query.tech as string))
  }

  if (route.query.q && route.query.q.length > 0) {
    const q = (route.query.q as string).toLowerCase()
    return projectList.filter((p) => {
      let searchContent = `${p.title} ${p.excerpt}`
      if (Array.isArray(p.techs) && p.techs.length > 0) {
        searchContent += ` ${p.techs.join(' ')}`
        searchContent += ` ${p.techs.map(kebabCase).join(' ')}`
      }
      return isProjectPostType(p) && searchContent.toLowerCase().includes(q)
    })
  }

  return projectList
})
</script>

<template>
  <div class="divide-y divide-gray-200 dark:divide-gray-700">

    <ProjectList :projects="projects" />
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
