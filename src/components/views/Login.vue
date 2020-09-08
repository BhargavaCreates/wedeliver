<template>
    <div id="login">
       <div class="container is-widescreen">
            <div class="notification">
                <template v-if="authenticated">
                    <div class="notification is-primary is-light">
                    User Successfully Authenticated ! 
                </div>
                </template>
                <template v-if="authStatus === 401">
                    <div class="notification is-danger is-light">
                    Please Check Email and Password! 
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
                    <button type="submit" class="button is-primary" v-on:click="redirectHome">Sign In</button>
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
import { router } from '../../router/index.js';
 
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
                user: 'auth/user',
                authStatus: 'auth/authStatus'
            })
        },
        methods:{
        ...mapActions({
            logIn: 'auth/logIn'
        }),
        submit(e)
            {
                this.logIn(this.form)
                e.preventDefault()
            },
        redirectHome(){
            console.log("button pressed!!")
            router.push('/')
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