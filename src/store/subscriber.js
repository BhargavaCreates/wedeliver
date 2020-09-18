import store from '@/store'
import axios from 'axios';
//import axios from 'axios'


store.subscribe((mutation) => {
    switch(mutation.type) {
        case 'auth/SET_TOKEN':
            if (mutation.payload){
                axios.defaults.headers.common['Authorization'] = `Bearer ${mutation.payload}`
                //` console.log(axios.defaults.headers.common['Authorization'])
                // store token & user in local storage
                localStorage.setItem('token',mutation.payload)
            } else {
                axios.defaults.headers.common['Authorization'] = null
                //console.log(axios.defaults.headers.common['Authorization'])
                //localStorage.setItem('token',null)
            }
            break;
    }
} )
