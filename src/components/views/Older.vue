<template>
  <div>
    <section class="section">
      <Appbar class="header" />
    </section>
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
              <router-link to="/older">Older</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </section>
    <section class="section">
      <Card date="26" />
      <Card date="26" />
    </section>
  </div>
</template>

<script>
import Appbar from "../Appbar";
import Card from "../Card";

export default {
  name: "OrderTom",
  components: {
    Appbar,
    Card
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
  padding: 1.5rem 1.5rem;
}
#nav {
  margin-top: 1rem;
}
</style>