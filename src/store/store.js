import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    authToken: null
  },
  mutations: {
    setToken (state, token) {
      state.authToken = token
    }
  }
})
