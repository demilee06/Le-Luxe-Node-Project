import { createStore } from 'vuex'
import axios from 'axios'
const apiURL = 'https://le-luxe-node-project.onrender.com/'
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css'
/*eslint-disble */

axios.defaults.withCredentials = true
/* eslint-disable*/
export default createStore({
  state: {
    users: [],
    products: [],
    user:null,
    product:null
  },
  getters: {
  },
  mutations: {
    setProducts(state, payload){
      state.products = payload
    },
    setProduct(state, payload){
      state.product = payload
    },
    setUsers(state, payload){
      state.users = payload
    },
    setUser(state, payload){
      state.user = payload
    }
  },
  actions: {
    async getProducts({ commit }) {
      try {
        const { data } = await axios.get(`${apiURL}products`)
        console.log(data);
        commit('setProducts', data)
      } catch (error) {
        console.log(error)
      }
    },
    async getProduct({ commit },id) {
      try {
        // console.log(id);
        const { data } = await axios.get(`${apiURL}products/${id}`)
        console.log(data);
        commit('setProduct', data)
      } catch (error) {
        console.log(error)
      }
    },
    async addToCart({ commit }, product) {
      try {
        const { data } = await axios.post(`${apiURL}cart`, product)
        console.log(data);
        if(data){
          toast(`${product.prodName} Has Been Added To Cart`, {
            theme: "dark",
            type: "default",
            position: "top-center",
            dangerouslyHTMLString: true
          })
        }  
      } catch (error) {
        console.log(error)
      }
    },
    async addProduct({ commit }, product) {
      try {
        const { data } = await (await axios.post(`${apiURL}products/addProduct`, product)).data
        console.log('newdata'+data.message)

        if (data.message){
          toast("Product Added Successfully", {
            theme: "dark",
            type: "default",
            position: "top-center",
            dangerouslyHTMLString: true
          })
          
        }
      } catch (error) {
        console.log(error)
      }
    },
    async updateProduct({ commit }, product) {
      console.log(product);
      try {
        const { data } = await axios.patch(`${apiURL}products/update/${product.id}`, product)
        if (data.message){
          toast("Product Updated Successfully", {
            theme: "dark",
            type: "default",
            position: "top-center",
            dangerouslyHTMLString: true
          })
        }
      } catch (error) {
        console.log(error)
      }
    },
    async deleteProduct({commit}, product){
      try {
        const { data } = await axios.delete(`${apiURL}products/delete/${product.id}`)
        if (data.message){
          toast("Product Deleted Successfully", {
            theme: "dark",
            type: "default",
            position: "top-center",
            dangerouslyHTMLString: true
            })
            } 
            } catch (error) {
              console.log(error)
              }
    },
    async getUsers({ commit }) {
      try {
        const { data } = await axios.get(`${apiURL}users`)
        console.log(data);
        commit('setUsers', data)
      } catch (error) {
        console.log(error)
      }
    },
    async getUser({ commit },id) {
      try {
        const { data } = await axios.get(`${apiURL}users/${id}`)
        console.log(data);
        commit('setUser', data)
      } catch (error) {
        console.log(error)
      }
    },
    async addUser({ commit }, user) {
      console.log('newdata'+data.message)
      // console.log(id);
      try {
        const { data } = await (await axios.post(`${apiURL}users/register`, user)).data
        console.log('newdata'+data.message)

        if (data.message){
          toast("User Added Successfully", {
            theme: "dark",
            type: "default",
            position: "top-center",
            dangerouslyHTMLString: true
          })
          
        }
      } catch (error) {
        console.log(error)
      }
    },
    async deleteUser({ commit }, userId) {
      try {
        await axios.delete(`${apiURL}users/delete/${userId}`)
        commit('deleteUser', userId)
        toast("User Deleted Successfully", {
          theme: "dark",
          type: "default",
          position: "top-center",
          dangerouslyHTMLString: true
        })
      } catch (error) {
        console.log(error)
      }
    },
    async updateUser({ commit }, user) {
      console.log(id);
      try {
        const { data } = await axios.patch(`${apiURL}users/update/${user.userID}`, user)
        if (data.message) {
          toast("User Updated Successfully", {
            theme: "dark",
            type: "default",
            position: "top-center",
            dangerouslyHTMLString: true
          })
        }
      } catch (error) {
        console.log(error)
      }
    },
  },
  modules: {
  }
})