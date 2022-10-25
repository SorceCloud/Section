import { createRouter, createWebHistory } from 'vue-router';
import route from './route'

const router = createRouter({
  history: createWebHistory(),
  routes: [...route,
  {
    path: '/test',
    component: () => import('~/view/test.vue'),
    meta: { title: 'Test' },
  },]
})
export default router