<template>
<div>
    <label for="first-name">First Name</label>
    <input type="text" id="first-name" name="firstName" v-model="firstName"/>

    <label for="last-name">Last Name</label>
    <input type="text" id="last-name" name="lastName" v-model="lastName"/>

    <navigation></navigation>
  </div>
</template>

<script>
import store from '../store'
import Navigation from '../views/Navigation.vue'

export default {
  components: { Navigation },
  computed: {
    firstName: {
      get () {
        return this.$store.state.firstName
      },
      set (value) {
        this.$store.commit('setFirstName', { firstName: value })
      }
    },
    lastName: {
      get () {
        return this.$store.state.lastName
      },
      set (value) {
        this.$store.commit('setLastName', { lastName: value })
      }
    }
  }
}
</script>
