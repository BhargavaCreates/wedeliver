<template>
  <div>
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
  </div>
</template>

<script>
import todayOrder from '../todayOrder'
import tomOrder from '../tomOrder'
import oldOrder from '../oldOrder'
import Spinner from '../Spinner.vue'
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { mapActions, mapGetters } from "vuex";

Vue.use(VueAxios, axios);
export default {
  name: "Order",
  data(){
    return{
      isActiveToday: true,  // to maintain is-active class on nav bar
      isActiveTom: false,
      isActiveOld: false,
      component: 'Spinner'
    }
  },
  components: {
    'todayOrder':todayOrder,
    'tomOrder': tomOrder,
    'oldOrder': oldOrder,
    'Spinner' : Spinner
  },
  computed:{
    ...mapGetters({
      allOrders:'allOrders/allOrders',
      isLoading:'allOrders/isLoading'
    })
  },
  methods: {
    ...mapActions({
      getallOrders: "allOrders/getallOrders"
    }),
    today(){
      this.isActiveToday = true // to maintain is-active class on nav bar
      this.isActiveTom = false
      this.isActiveOld = false
      this.component = todayOrder
    },
    tom(){
      this.isActiveToday = false;
      this.isActiveTom = true
      this.isActiveOld = false
      this.component = tomOrder // sets componet to tomOrder 
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
  watch:{
    allOrders: function(){
      console.log(this.component)
      this.component = 'todayOrder';
      console.log(this.component)
    }
  }
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
</style>