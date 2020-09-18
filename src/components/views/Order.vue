<template>
  <div>
    <section class="section">
      <Appbar class="header" />
    </section>
    <section id="nav">
      <nav class="tabs is-boxed is-fullwidth">
        <div class="container">
          <ul>
            <li v-bind:class="{'is-active': isActiveToday}" @click="today">
              <a>Today</a>
            </li>
             <li v-bind:class="{'is-active': isActiveTom}" @click="tom">
              <a>Tommorow</a>
            </li> 
            <li v-bind:class="{'is-active': isActiveOld}" @click="old">
              <a>Older</a>
            </li>
          </ul>
        </div>
      </nav>
    </section>
    <section>
      <component v-bind:is="component"></component>
    </section>
    <!-- <section class="section">
      <div class="orders">
        <div v-for="order in allOrders" v-bind:key="order['order_id']" class="order">
                  <Card v-bind:order="order" />
        </div>
      </div>
    </section> -->
  </div>
</template>

<script>
import Appbar from "../Appbar";
import todayOrder from '../todayOrder'
import tomOrder from '../tomOrder'
import oldOrder from '../oldOrder'
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { mapActions, mapGetters } from "vuex";

Vue.use(VueAxios, axios);
export default {
  name: "Order",
  data(){
    return{
      isActiveToday: true,
      isActiveTom: false,
      isActiveOld: false,
      component: 'todayOrder'
    }
  },
  components: {
    Appbar,
    'todayOrder':todayOrder,
    'tomOrder': tomOrder,
    'oldOrder': oldOrder
  },
  computed:{
    ...mapGetters({
      allOrders:'allOrders/allOrders'
    })
  },
  methods: {
    ...mapActions({
      getallOrders: "allOrders/getallOrders"
    }),
    today(){
      this.isActiveToday = true
      this.isActiveTom = false
      this.isActiveOld = false
      this.component = todayOrder
    },
    tom(){
      this.isActiveToday = false;
      this.isActiveTom = true
      this.isActiveOld = false
      this.component = tomOrder
    },
    old(){
      this.isActiveToday = false;
      this.isActiveTom = false
      this.isActiveOld = true
      this.component = oldOrder
    }
  },
  created() {
    this.getallOrders();
  },
};

</script>

<style scoped>
.header {
  position: fixed; /* fixing the position takes it out of html flow - knows
                    nothing about where to locate itself except by browser
                    coordinates */
  left: 0; /* top left corner should start at leftmost spot */
  top: 0; /* top left corner should start at topmost spot */
  width: 100vw; /* take up the full browser width */
  z-index: 100; /* high z index so other content scrolls underneath */
  height: 80px; /* define height for content */
}
section {
  padding: 1rem 1.5rem;
}
#nav {
  margin-top: 2.5rem;
}
</style>