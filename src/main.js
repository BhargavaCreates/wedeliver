import Vue from 'vue'
import App from './App.vue'
import './../node_modules/bulma/css/bulma.css';
import store from './store/index.js'
import axios from 'axios'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

require('@/store/subscriber')

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

axios.defaults.baseURL = 'https://cors-anywhere.herokuapp.com/https://we-deliver.herokuapp.com/api/v1';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
