import Vue from 'vue'

import App from './App.vue'

import router from './router'

import VueResource from 'vue-resource'

import './lib/mint-ui/style.css'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
// 按需引入部分组件
// 固定顶部
import { Header, Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

Vue.config.productionTip = false

new Vue({
  router, //  挂在路由对象到VM实例上
  render: h => h(App)
}).$mount('#app')
Vue.use(VueResource)
