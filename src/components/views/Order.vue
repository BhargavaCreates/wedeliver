<template>
    <div>
        <section class="section" id="section-header">
            <Appbar class="header"/>
        </section>
        <section class="section" id="section-card">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </section>
       
    </div>
</template>

<script>
import Appbar from '../Appbar'
import Card from '../Card'

    export default {
        name: 'Order',
        components: {
            Appbar,
            Card
        }
    }
</script>

<style scoped>
    .nav {
        display: flex;
        flex-wrap: wrap;
        padding-left: 0;
        margin-bottom: 0;
        list-style: none;
    }
    .justify-content-center {
        justify-content: center !important;
    }
    .container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
    #title{
        text-align: center;
        margin-bottom: 10px;
        font-size: 80px;
    }
   .header {
    position:fixed; /* fixing the position takes it out of html flow - knows
                    nothing about where to locate itself except by browser
                    coordinates */
    left:0;           /* top left corner should start at leftmost spot */
    top:0;            /* top left corner should start at topmost spot */
    width:100vw;      /* take up the full browser width */
    z-index:100;  /* high z index so other content scrolls underneath */
    height:100px;     /* define height for content */
    }
    .scroll{
        padding-top: 100px;
    }
    section{
        padding: 1.5rem 1.5rem;
    }
</style>