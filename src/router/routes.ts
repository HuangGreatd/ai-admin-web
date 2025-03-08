import type { RouteRecordRaw } from 'vue-router'
import HomeView from '@/pages/HomeView.vue'
import UserLoginPage from '@/pages/user/UserLoginPage.vue'
import UserManagerPage from '@/pages/admin/UserManagerPage.vue'
import { HomeOutlined, UserOutlined, TeamOutlined } from '@ant-design/icons-vue'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      menu: {
        icon: HomeOutlined,
        label: '主页',
        title: '主页',
        hide: false
      }
    }
  },
  {
    path: '/user/login',
    name: '用户登录',
    component: UserLoginPage,
    meta: {
      menu: {
        icon: UserOutlined,
        label: '用户登录',
        title: '用户登录',
        hide: true
      }
    }
  },
  {
    path: '/admin/userManage',
    name: '用户管理',
    component: UserManagerPage,
    meta: {
      menu: {
        icon: TeamOutlined,
        label: '用户管理',
        title: '用户管理',
        hide: false
      }
    }
  }
]
