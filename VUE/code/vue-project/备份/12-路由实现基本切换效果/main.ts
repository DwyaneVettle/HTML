// 引入createApp用于创建应用
import {createApp} from 'vue'
// 引入App根组件
import App from './App.vue'
// 引入路由
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')




