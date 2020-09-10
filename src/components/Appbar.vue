<template>
    <div>
        <section class="hero is-warning center">
            <!-- <div class="hero-body"> -->
                <div class="container">
                <h1 class="title center">
                    Order History
                </h1>
                <!-- </div> -->
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "Appbar"
    }
</script>

<style scoped>
    .center{
        display: flex;
        justify-content: center;
    }
    .hero{
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
        block-size: 75px;
    }
    .hero.is-warning .title {
    color: rgba(0, 0, 0, 0.7);
    padding: 1rem 1.5rem 1rem 1.5rem;
    }
</style>