// 创建一个路由器，并暴露
// 1.引入 createRouter,createWebHistory
import { createRouter,createWebHistory } from 'vue-router'
// 引入路由组件
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'
import Detail from '@/pages/Detail.vue'

// 2.创建路由器
const router = createRouter({
    history: createWebHistory(), // 路由器工作模式
    // 配置路由
    routes: [
        {
            name:'zhuye',
            path: '/home',
            component: Home
        },
        {
            name:'xinwen',
            path: '/news',
            component: News,
            children:[
                {
                    name:'news-detail',
                    path: 'detail/:id/:title/:content',
                    component: Detail
                }
            ]
        },
        {
            name:'guanyu',
            path: '/about',
            component: About
        }
    ]
})

// 3.导出路由器
export default router
