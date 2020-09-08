import axios from 'axios'
export default { 
    namespaced:true,
    state:{
        token: null,
        user: null,
        authStatus: null
    },
    getters:{
        authenticated(state){
            return (state.token && state.user) != null
        },
        user(state){
            return state.user
        },
        authStatus(state){
            return state.authStatus
        }
    }, 
    mutations:{
        SET_TOKEN(state,token){
            state.token = token
        },
        SET_USER(state,user){
            state.user = user
        },
        SET_AUTH_STATUS(state, authStatus){
            state.authStatus = authStatus
        },
        SET_IS_AUTHENTICATED(state){
            state.isAuthenticated = true
        }
    },  
    actions:{
        async logIn ({ commit },creds) { //creds for credentials // dispatch or commit 
            //const proxy = "https://cors-anywhere.herokuapp.com/"
            //var url = `https://we-deliver.herokuapp.com/api/v1/admin/login?id=${creds.email}&password=${creds.password}`
            var url = `/admin/login?id=${creds.email}&password=${creds.password}` //axios.baseURL set in main.js file 
            try {
                //let response = await axios.post(proxy+url,creds)
                let response = await axios.post(url,creds)
                console.log(response.status)
                commit('SET_TOKEN', response.data.access_token)
                commit('SET_USER', creds)
                commit('SET_AUTH_STATUS',response.status)
            } catch (error) {
                console.log(error.response.status)
                commit('SET_AUTH_STATUS',error.response.status)
                commit('SET_TOKEN', null)
                commit('SET_USER', null)
            }
        }
    }
}