<template>
  <div>
    <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
    <section>
      <Appbar class="header" />
    </section>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <div>
            <h1 class="title">Order Status</h1>
          </div>
          <div class="dropdown is-active">
            <select name="order-status">
              <option value="Pending">Pending</option>
              <option value="Processing">Processing</option>
              <option value="On its way">On its way</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <table class="table-auto">
          <thead>
            <tr>
              <th class="px-4 py-2">Products</th>
              <th class="px-4 py-2">Quantity</th>
              <th class="px-4 py-2">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border px-4 py-2">Intro to CSS</td>
              <td class="border px-4 py-2">Adam</td>
              <td class="border px-4 py-2">858</td>
            </tr>
            <tr class="bg-gray-100">
              <td
                class="border px-4 py-2"
              >A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
              <td class="border px-4 py-2">Adam</td>
              <td class="border px-4 py-2">112</td>
            </tr>
            <tr>
              <td class="border px-4 py-2">Intro to JavaScript</td>
              <td class="border px-4 py-2">Chris</td>
              <td class="border px-4 py-2">1,280</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script>
import Appbar from "../Appbar";
export default {
  name: "OrderDetail",
  components: {
    Appbar
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
</style>