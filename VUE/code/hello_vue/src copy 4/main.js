import Vue from 'vue'
import App from './App.vue'
import {mixin} from './mixin.js'
Vue.config.productionTip = false
Vue.mixin(mixin)

new Vue({
  render: h => h(App),
}).$mount('#app')
