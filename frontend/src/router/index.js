import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    { name: '首页', path: '/', component: () => import('../pages/Home.vue')}
  ]

// 创建路由实例
const router = createRouter({
    history: createWebHashHistory(),
    routes //路由表
})



export default router