import store from '@/store'
import axios from 'axios';
//import axios from 'axios'


store.subscribe((mutation) => {
    switch(mutation.type) {
        case 'auth/SET_TOKEN':
            if (mutation.payload){
                axios.defaults.headers.common['Authorization'] = `Bearer ${mutation.payload}`
                localStorage.setItem('token',mutation.payload) // locally storing token .. then setting axios headers token in main.js file
            } else {
                axios.defaults.headers.common['Authorization'] = null
                //console.log(axios.defaults.headers.common['Authorization'])
                //localStorage.setItem('token',null)
            }
            break;
    }
} )
