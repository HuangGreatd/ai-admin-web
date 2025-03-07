import type { Route } from 'ant-design-vue/es/breadcrumb/Breadcrumb'
import type { RouteRecordRaw } from 'vue-router'
import HomeView from '@/pages/HomeView.vue'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },

]
