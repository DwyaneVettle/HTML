// 创建Vue对象，引入App.vue文件
import App from './App.vue'
import Vue from 'vue'
    
new Vue({
    // render: h => h(App),
    render(createElement) {
        return createElement(App)
    }
}).$mount('#app')