<template>
    <div>
        <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
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
                    <td class="border px-4 py-2">{{ order['products']}}</td>
                    <td class="border px-4 py-2">1</td>
                    <td class="border px-4 py-2">₹{{ order['total_amount']}}</td>
                    </tr>
                </tbody>
                </table>
            </div>
        </section>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
    export default {
        name:'OrderDetailTable',
        data() {
            return{
                order: {}
            }
        },
        computed:{
            ...mapGetters({
                allOrders: 'allOrders/allOrders'
            })
        },
        mounted(){
            this.allOrders.forEach((order) => {
                if(order['order_id'] == this.$route.params['order_id']){
                this.order = order
                }
            })
        }
    }
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