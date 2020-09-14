<template>
  <div>
    <a href="/order_detail">
      <section class="section">
        <div class="container">
          <!-- ... -->
          <div class="columns">
            <div class="column">
              <!-- ... -->
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">
                    <a href="#">userName</a>
                  </p>
                  <p class="card-header-title">storeName</p>
                  <p class="card-header-subtitle" id="date">
                    <time datetime="2016-1-1">Tue, {{date}} Jan</time>
                  </p>
                </header>
                <div class="card-content">
                  <div class="content">
                    orderID
                    <br />
                  </div>
                </div>
                <footer class="card-footer">
                  <p class="card-footer-item">
                    <b>Total: ₹475</b>
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
          </div>
        </div>
      </section>
    </a>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["date"],
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
</style>