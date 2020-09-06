import axios from 'axios'
export default { 
    namespaced:true,
    state:{
        token: null,
        user: null
    },
    getters:{
        autherised(state){
            return (state.token && state.user) != null
        },
        user(state){
            return state.user
        }
    }, 
    mutations:{
        SET_TOKEN(state,token){
            state.token = token
        },
        SET_USER(state,user){
            state.user = user.email
        }
    },  
    actions:{
        async logIn ({ commit },creds) { //creds for credentials // dispatch or commit 
            const proxy = "https://cors-anywhere.herokuapp.com/"
            var url = `https://we-deliver.herokuapp.com/api/v1/admin/login?id=${creds.email}&password=${creds.password}`
            try {
                let response = await axios.post(proxy+url,creds)
                console.log("Authenticated!")
                commit('SET_TOKEN', response.data.access_token)
                commit('SET_USER', creds)
            } catch (error) {
                console.log(error)
                commit('SET_TOKEN', null)
                commit('SET_USER', null)
            }
        }
    }
}