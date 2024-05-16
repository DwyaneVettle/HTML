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
                    component: Detail,
                    // props: true 布尔值写法
                    // props: {id:1,title:'新闻标题',content:'新闻内容'} 对象写法
                    props: (route) => ({id:route.params.id,title:route.params.title,content:route.params.content}) //函数写法
                }
            ]
        },
        {
            name:'guanyu',
            path: '/about',
            component: About
        },
        {
            path:'/',
            redirect: '/home'
        }
    ]
})

// 3.导出路由器
export default router
