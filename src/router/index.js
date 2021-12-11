import { createRouter, createWebHashHistory } from 'vue-router'

import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/Login.vue'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        //using el svg icon, the elSvgIcon first when at the same time using elSvgIcon and icon
        //https://element-plus.gitee.io/zh-CN/component/icon.html#svg
        meta: { title: 'Dashboard', elSvgIcon: 'Fold' }
      }
    ]
  }
]

export const asyncRoutes = []

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior: () => ({
    top: 0
  }),
  routes: constantRoutes
})

export default router
