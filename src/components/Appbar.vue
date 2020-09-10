<template>
    <div class="sticky">
        <section class="hero is-warning center">
            <div class="hero-body">
                <div class="container">
                <h1 class="title center">
                    Order History
                </h1>
                </div>
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
    .sticky {
        position: -webkit-sticky; /* Safari */
        position: sticky;
        top: 0;
    }
</style>