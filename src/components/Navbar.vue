<template>
    <section id="nav">
        <nav class="tabs is-boxed is-fullwidth">
                        <div class="container">
                            <ul>
                            <li>
                                {{ isActiveToday }}
                                <router-link to="/">Today</router-link>
                            </li>
                            <li>
                                {{ isActiveTommorow }}
                                <router-link to="/tommorow">Tommorow</router-link>
                            </li>
                            <li class="is-active">
                                {{ isActiveOlder }}
                                <router-link to="#">Older</router-link>
                            </li>
                            </ul>
                        </div>
                    </nav>
    </section>
</template>

<script>
    export default {
        name: 'Navbar',
        props: ["isActiveToday","isActiveTommorow","isActiveOlder"]
    }
</script>

<style scoped>
    section{
        padding: 1rem 1.5rem;
    }
    #nav{
        margin-top: 2.5rem;
    }
</style>