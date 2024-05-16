// 引入createApp用于创建应用
import {createApp} from 'vue'
// 引入App根组件
import App from './App.vue'
// 1.引入pinia
import { createPinia } from "pinia";

// 2.创建pinia实例
const pinia = createPinia();

const app = createApp(App)
// 3.将pinia实例挂载到应用上
app.use(pinia);


app.mount('#app')




