<template>
  <div>
    <section>
      <component v-bind:is="component"></component>
    </section>
    <br>
    <section class='container'>
      <router-link to="/">Go back</router-link>
    </section>
  </div>
</template>

<script>
import Spinner from '../Spinner'
import OrderDetailTable from '../OrderDetailTable'
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "OrderDetail",
  data(){
    return{
      order_id: this.$route.params['order_id'],
      component: 'Spinner'
    }
  },
  components: {
     Spinner,
     OrderDetailTable
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
  },
  created() {
    this.getallOrders();
  },
  watch:{
    allOrders: function(){
      this.component = 'OrderDetailTable';
    }
  }

};
</script>

<style scoped>
hero.title {
  justify-items: center;
}
.container {
  justify-content: center;
  justify-content: space-evenly;
  display: flex;
}
#back{
  text-align-last: right;
}
</style>