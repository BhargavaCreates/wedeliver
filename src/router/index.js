import Vue from "vue";
import Router from "vue-router";
import Order from "../components/views/Order.vue";
import Login from "../components/views/Login.vue";
import OrderTom from "../components/views/OrderTom.vue";
import Older from "../components/views/Older.vue";
import OrderDetail from "../components/views/OrderDetail.vue";
import PageNotFound from "../components/views/PageNotFound.vue";
import store from "@/store";

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
      path: "/tommorow",
      name: "Tommorow",
      component: OrderTom,
    },
    {
      path: "/older",
      name: "Older",
      component: Older,
    },
    {
      path: "/order_detail",
      name: "OrderDetail",
      component: OrderDetail,
    },
    {
      path: "/*",
      name: "Page Not Found",
      component: PageNotFound,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters["auth/authenticated"];
  // const isAuthenticated = localStorage.getItem('token');
  if (to.name !== "Login" && !isAuthenticated) {
    return next({ name: "Login" });
  } else next();
});

export default router;
