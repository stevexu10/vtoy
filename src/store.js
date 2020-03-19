import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store(
  {
    strict: process.env.NODE_ENV !== 'production',
    state: {
      firstName: '',
      lastName: '',
      email: ''
    },
    mutations: {
      setFirstName (state, playoad) {
        state.firstName = playoad.firstName
      },
      setLastName (state, playoad) {
        state.lastName = playoad.lastName
      },
      setEmail (state, playoad) {
        state.email = playoad.email
      }
    }
  })
