import Vue from 'vue'
import VueRouter from 'vue-router'
import Order from '../components/views/Order.vue'
import Login from '../components/views/Login.vue'
import store from "@/store"

Vue.use(VueRouter)

const routes = [
    {
      path:"/",
      name: 'Order',
      component: Order,
      beforeEnter: (to, from, next) => {
        console.log(store.state.auth.isAuthenticated);
        
        const isAuthenticated = store.getters['auth/authentication']
        if (to.name !== "Login" && !isAuthenticated){
          return next({ name: 'Login' })  
        }
        else next()
      }
      
    },
    {
      path:"/login",
      name: 'Login',
      component: Login
    }
  ]
  
  const router = new VueRouter({
    routes: routes,
    mode:'history'
  })


  export default router