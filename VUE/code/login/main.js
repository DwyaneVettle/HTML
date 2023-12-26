import Vue form 'vue'
import app form './App.vue'
import VueRouter  form 'vue-router'
Vue.use(VueRouter)
import router from './router.js'
new Vue({
    el:'#app',
    render:c => c(app),
    router
})
