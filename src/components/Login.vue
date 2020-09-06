<template>
    <div id="login">
       <div class="container is-widescreen">
            <div class="notification">
                <template v-if="authenticated">
                    <div class="notification is-primary is-light">
                    <button class="delete"></button>
                    User Successfully Authenticated ! 
                </div>
                </template>
                <h1 class="title is-1">We Deliver Order Management System</h1>
                <h2 class="subtitle is-2">LOGIN</h2>
                <form @submit="submit" method="post">
                    <div class="form-group">
                        <input v-model="form.email" class="input form" placeholder="Email">
                        <p>{{ email }}</p>
                    </div>
                    <br>
                    <div class="form-group">
                        <input v-model="form.password" class="input form" type="password" placeholder="Password">
                        <p>{{ password }}</p>
                    </div>
                    <br>
                    <button type="submit" class="button is-primary">Sign In</button>
                </form>
                <br>
            </div>
        </div>
    </div>
</template>


<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
 
Vue.use(VueAxios, axios)
    export default {
        name: 'Login',
        data(){
            return {
                form:{
                    email:null,
                    password:null
                }
            }
        },
        computed:{
            ...mapGetters({
                authenticated: 'auth/authenticated',
                user: 'auth/user'
            })
        },
        methods:{
        ...mapActions({
            logIn: 'auth/logIn'
        }),
        submit(e)
            {
                this.logIn(this.form)
                e.preventDefault();
            }
        }
    }
    
</script>

<style lang="css" scoped>
    #login {
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    .form {
        width: 50%;
    }
</style>