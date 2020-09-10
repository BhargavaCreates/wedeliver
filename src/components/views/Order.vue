<template>
    <div>
        <section class="section" >
            <Appbar class="header"/>
        </section>
        <section class="section">
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
    section{
        padding: 1.5rem 1.5rem;
    }
</style>