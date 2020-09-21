<template>
  <div>
      <section class="section">
        <div class="container">
          <div class="columns">
            <router-link :to="{ path: '/order_detail/'+ this.order['order_id']}">
              <div class="column">
                <div class="card">
                  <header class="card-header">
                    <p class="card-header-title">
                      <a href="#">userName</a>
                    </p>
                    <p class="card-header-title">{{ order["store_name"] }}</p>
                    <p class="card-header-subtitle" id="date">
                      <time datetime="2016-1-1"><b>{{order["slot_time"]}}</b></time>
                    </p>
                  </header>
                  <div class="card-content">
                    <div class="content">
                      {{order}}
                      <br />
                    </div>
                  </div>
                  <footer class="card-footer">
                    <p class="card-footer-item">
                      <b>Total: ₹ {{ order["total_amount"] }}</b>
                    </p>
                    <p class="card-footer-item">
                      <b>userPhoneNo</b>
                    </p>
                    <div class="columns card-footer-item">
                      <!-- <div class="row">
                          <b>Order Status: </b>
                      </div>-->
                      <div class="row" id="order-status" @change="orderStatus($event)">
                        <select name="order-status">
                          <option value="Pending">Pending</option>
                          <option value="Processing">Processing</option>
                          <option value="On its way">On its way</option>
                          <option value="Delivered">Delivered</option>
                        </select>
                      </div>
                    </div>
                  </footer>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </section>  
  </div>
</template>

<script>
export default {
  name: "Card",
  data(){
    return{
      number: 5
    }
  },
  props: ['order'],
  methods: {
    orderStatus(event) {
      console.log(event.target.value);
    }
  }
};
</script>

<style scoped>
#date {
  margin-right: 10px;
  margin-top: 10px;
}
.card-footer {
  display: flex;
  margin: 0;
  padding: 0;
}

section {
  padding: 0rem 1.5rem;
}
section:hover {
  transform: scale(1.02);
}
#order-status {
  justify-content: center;
}
.card-header{
  padding:5px 10px;
  display: flex;
  justify-content: space-evenly;
}
.card-header-title{
  margin: 0;
  padding: 0;
  text-align: center;
}
</style>