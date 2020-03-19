<template>
<div>
    <label for="first-name">First Name</label>
    <input type="text" id="first-name" name="firstName" v-model="firstName"/>
    <br/>
    <label for="last-name">Last Name</label>
    <input type="text" id="last-name" name="lastName" v-model="lastName"/>
    <br/>
    <button @click="save">Save</button>
  </div>
</template>

<script>
import store from '../store'

export default {
  methods: {
    save () {
      console.log('Submitted to backend with data: ' + this.$store.state.firstName + ',' +
       this.$store.state.lastName + ',' + this.$store.state.email)
    }
  },
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
