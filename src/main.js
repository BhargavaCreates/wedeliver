import Vue from 'vue'
import App from './App.vue'
import './../node_modules/bulma/css/bulma.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueRouter from 'vue-router'
import Login from "../src/components/Login.vue"
import Order from "../src/components/Order.vue"
import store from './store/index.js'



Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    component:Login
  },
  {
    path:"/order",
    component:Order
  }
]

const router = new VueRouter({
  routes: routes,
  mode:'history'
})

Vue.config.productionTip = false

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  render: h => h(App),
  store,
  router: router
}).$mount('#app')
