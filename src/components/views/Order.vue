<template>
    <div>
        <template v-if="authenticated">
                    <div class="notification is-primary is-light">
                    User Successfully Authenticated ! 
                    </div>
        </template>
        <div class="title is-1">Order Page</div>

    </div>
</template>

<script>
    export default {
        name: 'Order'
    }
</script>

<style scoped>

</style>