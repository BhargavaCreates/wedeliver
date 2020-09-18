<template>
  <div>
  <b-tabs content-class="mt-3">
    <b-tab title="First" active><p>I'm the first tab</p></b-tab>
    <b-tab title="Second"><p>I'm the second tab</p></b-tab>
    <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
  </b-tabs>
</div>
</template>

<script>

import Vue from 'vue';
import VMdDateRangePicker from "v-md-date-range-picker";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VMdDateRangePicker);


export default {
  name: "Older",
  date(){
    return {
      date_range: []
    }
  },
  methods: {
    getRange(values){
      console.log(values)
    }
  },
  components: {
 
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
</style>