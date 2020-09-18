<template>
    <div class="container" id="myDate">
       <input type="date" v-model="date" id="myDate">
    </div>

</template>



<script>
    export default {
        name: "oldOrder",
        components: {
         
        },
        data(){
            return{
                date: new Date().toISOString().slice(0,10)
            }
        },
        methods: {
            
        },
        mounted(){
            var dateControl = document.querySelector('input[type="date"]');
            dateControl.value = new Date().toISOString().slice(0,10);
            //this.date = new Date().toISOString().slice(0,10);
        }
    }
</script>

<style scoped>
    .container{
        display: flex;
        justify-content: center;
    }
</style>