<template>
  <section id="nav">
    <nav class="tabs is-boxed is-fullwidth">
      <div class="container">
        <ul>
          <li>
            <router-link to="/">Today</router-link>
          </li>
          <li>
            <router-link to="/tommorow">Tommorow</router-link>
          </li>
          <li class="is-active">
            <router-link to="#">Older</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </section>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
section {
  padding: 1rem 1.5rem;
}
#nav {
  margin-top: 2.5rem;
}
</style>