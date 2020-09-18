<template>
    <div>
  <b-tabs content-class="mt-3" fill>
    <b-tab title="First" active>
        <div v-for="order in allOrders" v-bind:key="order['order_id']" class="order">
                  <Card v-bind:order="order" />
        </div>
        </b-tab>
    <b-tab title="Second"><p>I'm the second tab</p></b-tab>
    <b-tab title="Very, very long title"><p>I'm the tab with the very, very long title</p></b-tab>
    <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
  </b-tabs>
</div>
</template>

<script>
import Card from "../components/Card";
import { mapActions, mapGetters } from "vuex";
    export default {
        name: "Tabs",
        components:{
            Card
        },
            computed:{
    ...mapGetters({
      allOrders:'allOrders/allOrders'
    })
  },
  methods: {
    ...mapActions({
      getallOrders: "allOrders/getallOrders"
    })
  }
    }
</script>

<style scoped>

</style>