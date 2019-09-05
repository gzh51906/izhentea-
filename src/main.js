import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'

//引入router组件
import router from './router';

Vue.config.productionTip = false


// 把axios写入Vue原型，方便子组件调用
Vue.prototype.$axios = axios;


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
