// 创建一个路由器，并暴露
// 1.引入 createRouter,createWebHistory
import { createRouter,createWebHistory } from 'vue-router'
// 引入路由组件
import Home from '../../../src/pages/Home.vue'
import News from '../../../src/pages/News.vue'
import About from '../../../src/pages/About.vue'

// 2.创建路由器
const router = createRouter({
    history: createWebHistory(), // 路由器工作模式
    // 配置路由
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: '/news',
            component: News
        },
        {
            path: '/about',
            component: About
        }
    ]
})

// 3.导出路由器
export default router
