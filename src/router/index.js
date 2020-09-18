import Vue from "vue";
import Router from "vue-router";
import Order from "../components/views/Order.vue";
import Login from "../components/views/Login.vue";
import PageNotFound from "../components/views/PageNotFound.vue";
//import store from "@/store";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Order",
      component: Order,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/*",
      name: "Page Not Found",
      component: PageNotFound,
    },
  ],
});

router.beforeEach((to, from, next) => {
  // const isAuthenticated = store.getters["auth/authenticated"];
  const isAuthenticated = localStorage.getItem('token');
  if (to.name !== "Login" && !isAuthenticated) {
    return next({ name: "Login" });
  } else next();
});

export default router;
