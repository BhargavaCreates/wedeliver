import Vue from 'vue'
import App from './App.vue'
import './../node_modules/bulma/css/bulma.css';
import store from './store/index.js'
import axios from 'axios'
import router from './router'

require('@/store/subscriber')

//set baseURL
axios.defaults.baseURL = 'https://cors-anywhere.herokuapp.com/https://we-deliver.herokuapp.com/api/v1';

// set token to headers from local storage
if(localStorage.getItem('token') !== null){
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
} 

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
