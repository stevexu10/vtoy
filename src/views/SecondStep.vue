<template>
  <div>
    <label for="email">Email</label>
    <input type="email" id="email-address" name="email" v-model="email" />

    <navigation></navigation>
  </div>
</template>

<script>
import store from '../store'
import Navigation from '../views/Navigation.vue'

export default {
  components: { Navigation },
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
