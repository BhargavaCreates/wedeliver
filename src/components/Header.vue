<template>
    <div>
        <nav>
            <ul>
                <router-link to='/'>Home</router-link>
                <br>
                <router-link to="/login">Login</router-link>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name:'Header'
    }
</script>

<style scoped>

</style>