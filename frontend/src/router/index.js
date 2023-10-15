import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    { name: 'home', path: '/', component: () => import('../pages/home/index.vue')},
    { name: 'search', path: '/search', component: () => import('../pages/search/index.vue')},
  ]

// 创建路由实例
const router = createRouter({
    history: createWebHashHistory(),
    routes //路由表
})



export default router