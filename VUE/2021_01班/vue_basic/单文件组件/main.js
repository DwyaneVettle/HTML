// 创建Vue对象，引入App.vue文件
import App from './App.vue'
    
new Vue({
    el:'#root',
    template:'<App></App>',
    components:{
        App
    }
})