import Vue from 'vue'
import App from './App.vue'
import store from './store'
import axios from 'axios'
import router from './router'  // 引入路由
Vue.prototype.$axios= axios

Vue.config.productionTip = false
axios.defaults.baseURL='/api'
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
