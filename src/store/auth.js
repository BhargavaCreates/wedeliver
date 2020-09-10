import axios from "axios";
export default {
    namespaced: true,
    state: {
        token: null,
        user: null,
        authStatus: null,
        isLoading: false,
    },
    getters: {
        authenticated(state) {
            return (state.token && state.user) != null
            
        },
        user(state) {
            return state.user;
        },
        authStatus(state) {
            return state.authStatus;
        },
        isLoading(state) {
            return state.isLoading;
        },
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token;
        },
        SET_USER(state, user) {
            state.user = user;
        },
        SET_AUTH_STATUS(state, authStatus) {
            state.authStatus = authStatus;
        },
        SET_IS_AUTHENTICATED(state) {
            state.isAuthenticated = true;
        },
        SET_IS_LOADING(state, isLoading) {
            state.isLoading = isLoading;
        },
    },
    actions: {
        async logIn({commit}, creds) {
            //const proxy = "https://cors-anywhere.herokuapp.com/"
            //var url = `https://we-deliver.herokuapp.com/api/v1/admin/login?id=${creds.email}&password=${creds.password}`
            var url = `/admin/login?id=${creds.email}&password=${creds.password}`; //axios.baseURL set in main.js file
            try {
                commit("SET_IS_LOADING", true);
                //let response = await axios.post(proxy+url,creds)
                let response = await axios.post(url, creds);
                console.log(response.status);
                commit("SET_TOKEN", response.data.access_token);
                commit("SET_USER", creds);
                commit("SET_AUTH_STATUS", response.status);
                commit("SET_IS_LOADING", false);
            } catch (error) {
                commit("SET_IS_LOADING", true);
                console.log(error.response.status);
                commit("SET_AUTH_STATUS", error.response.status);
                commit("SET_TOKEN", null);
                commit("SET_USER", null);
                commit("SET_IS_LOADING", false);
            }
        },
    },
};