<template>
    <div id="login">
       <div class="">
            <div class="container my-3">
                <template v-if="authStatus === 200">
                    <div class="notification is-primary is-light">
                        User Successfully Authenticated ! 
                    </div>
                </template>
                <template v-if="authStatus === 401">
                    <div class="notification is-danger is-light">
                    Please Check Email and Password! 
                </div>
                </template>
                <h1 class="title">We Deliver Order Management System</h1>
                <h2 class="title">LOGIN</h2>
                <br>
                <form @submit="submit" method="post">
                    <div class="form-group">
                        <input v-model="form.email" class="input form" placeholder="Email" required>
                    </div>
                    <br>
                    <div class="form-group">
                        <input v-model="form.password" class="input form" type="password" placeholder="Password">
                    </div>
                    <br>
                    <button type="submit" class="button is-primary" >Sign In</button>
                </form>
                <br>
                <progress class="progress is-small is-primary" max="100" v-if="isLoading">15%</progress>
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
                },
                delete_notication: false,
            }
        },
        computed:{
            ...mapGetters({
                authenticated: 'auth/authenticated',
                user: 'auth/user',
                authStatus: 'auth/authStatus',
                isLoading: 'auth/isLoading'
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
                console.log(this.isLoading)
            }
        },
        watch: {
            authenticated: function() {
                this.$router.push('/');
            }
        }
    }
    
</script>

<style lang="css" scoped>
    #login {
        text-align: center;
        color:aliceblue;
        margin-top: 60px;
    }
    .form {
        width: 50%;
    }
    *{
        color:rgb(21, 50, 88);
    }
</style>