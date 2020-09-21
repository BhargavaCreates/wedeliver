<template>
  <div id="app">
    <title>Parchi Orders</title>
    <Appbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Appbar from './components/Appbar'



export default {
  name: 'App',
  components: {
    Appbar
  }
}
</script>

<style>
  @import '../node_modules/bulma/css/bulma.css'; 
</style>
