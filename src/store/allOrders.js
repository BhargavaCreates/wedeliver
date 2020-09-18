import axios from "axios";

export default {
  namespaced: true,
  state: {
    allOrders: []
  },
  getters: {
      allOrders(state){
          return state.allOrders
      },
      todayOrders(state){
          return state.todayOrders
      }
  },
    mutations: {
      SET_ALL_ORDERS(state, allOrders){
          state.allOrders = allOrders;
      }
  },
  actions: {
    async getallOrders({commit}) {
      const url = "/admin/view-order";
      try {
        let response = await axios({
          method: "post",
          url: url,
          data: {
            fromDate: "2020-07-20",
            toDate: "2020-07-21",
          },
        });
        commit("SET_ALL_ORDERS",response.data.orders);
        console.log("Yoo! Got all the Orders for you")
      }
      catch(error){
        if(error.response.status == 401){
          alert("Authorization Token Expired! Try to login again!")
          localStorage.removeItem('token')
        }
        console.log("Error while api call below")
        console.log(error)
      }
      
    },
  },
};
