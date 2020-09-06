<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Login from './components/Login.vue'
import Order from './components/Order.vue'


export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Login,
    // eslint-disable-next-line vue/no-unused-components
    Order
  }
}
</script>

<style>
  @import '../node_modules/bulma/css/bulma.css';
</style>
