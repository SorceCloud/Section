import { createRouter, createWebHistory } from 'vue-router';
import route from './route'

const router = createRouter({
  history: createWebHistory(),
  routes: [...route]
})
export default router