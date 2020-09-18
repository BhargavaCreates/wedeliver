<template>
    <div>
        <section>
            <div class="orders">
                <div v-for="order in tomOrders" v-bind:key="order['order_id']">
                        <Card v-bind:order="order" />
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Card from './Card';
import { mapActions, mapGetters } from "vuex";
    export default {
        name: "tomOrder",
        data(){
            return{
                tomOrders: []
            }
        },
        components:{
            Card
        },
        computed:{
            ...mapGetters({
            allOrders:'allOrders/allOrders'
            })
        },
        methods: {
            ...mapActions({
            getallOrders: "allOrders/getallOrders"
            })
        },
        mounted(){
        // console.log("ill pop every time you load this component")
            //var today = new Date().toISOString().slice(0,10)

            var today = "2020-07-20";
            this.allOrders.forEach(order => {
                if (order["slot_date"] !== today){
                    this.tomOrders.push(order);
                }
            })
        }
    }
</script>

<style scoped>

</style>