<template>
  <div>
    <section class="hero is-warning center">
      <div class="hero-body">
        <div class="container">
          <h1 class="title center">
            <a href="/" style="color: black">
              <div>Order History</div>
            </a>
            <div class="date">
              {{ current_date }}
            </div>
            <div v-if="authenticated || token">
              <button class="button" @click="logout">Log Out</button>
            </div>
          </h1>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

var today = new Date().toISOString().slice(0,10)

export default {
  name: "Appbar",
  data() {
    return {
       current_date: today,
       token: localStorage.getItem('token')
    }
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.loggedOutAction();
      this.setTokenNull(null); // setting token null
      this.$router.push("/login");
    },
    ...mapActions({
      loggedOutAction: "auth/loggedOut",
      setTokenNull: "auth/setTokenNull" //action for commiting token to null
    }),
  },
  computed: {
    ...mapGetters({
      loggedOut: "auth/loggedOut",
      authenticated: "auth/authenticated"
    })
  }
};
</script>

<style scoped>
.center {
  display: flex;
  justify-content: space-evenly;
}
.hero {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  block-size: 75px;
}
.hero-body {
  padding: 0rem 1.5rem;
}
.hero.is-warning .title {
  color: rgba(0, 0, 0, 0.7);
  padding: 1rem 1.5rem 1rem 1.5rem;
}
h1.title.center {
  justify-content: space-between;
}
.date {
  margin-top: 12.5px ;
  font-size: medium;
  margin-right: 90px;
}
@media(max-width: 700px){
  .date{
    display: none;
  }
}
</style>