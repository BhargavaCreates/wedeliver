<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Login from './components/views/Login.vue'
import Order from './components/views/Order.vue' 



export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Login,
    // eslint-disable-next-line vue/no-unused-components
    Order,

  }
}
</script>

<style>
  @import '../node_modules/bulma/css/bulma.css'; 
  /* @import url('https://fonts.googleapis.com/css?family=Poppins|Source+Code+Pro&display=swap');
  #app{
    margin-top: -0px !important;
    /* background-color:black; */
  /* }
  html {
  background-color: #1f2b3b !important;
  color: #fff !important;
   font-size: 2em;
  font-family: "Poppins", sans-serif !important;
}
  body {
  background-color: #1f2b3b   !important;
  color: #fff !important;
  font-size: 20px !important;
  font-family: "Poppins", sans-serif !important;
}  */
</style>
