<template>
  <div>
    <label for="email">Email</label>
    <input type="email" id="email-address" name="email" v-model="email" />
    <br/>
    <button @click="submit">Submit</button>
  </div>
</template>

<script>
import store from '../store'

export default {
  methods: {
    submit () {
      console.log('Submitted to backend with data: ' + this.$store.state.firstName + ',' +
       this.$store.state.lastName + ',' + this.$store.state.email)
    }
  },
  computed: {
    email: {
      get () {
        return this.$store.state.email
      },
      set (value) {
        this.$store.commit('setEmail', { email: value })
      }
    }
  }
}
</script>
