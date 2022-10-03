import { createRouter, createWebHistory } from 'vue-router';
import zhCN from './zh-CN'

const router = createRouter({
  history: createWebHistory(),
  routes: [...zhCN]
})
export default router