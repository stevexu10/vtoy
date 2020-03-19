<template>
  <div>
    <button @click="navigatePrevious" v-show="true">Previous</button>
    <button @click="navigateNext">{{ nextButtonText() }}</button>
  </div>
</template>

<script>
import store from '../store'
import router from '../router'

export default {
  methods: {
    nextButtonText () {
      if (this.$route.name === 'SecondStep') {
        return 'Finish'
      }
      return 'Next'
    },
    isFisrt () {
      return this.$route.name === 'FirstStep'
    },
    navigateNext () {
      if (this.$route.name === 'SecondStep') {
        this.submit()
      } else {
        this.$router.push('/secondStep')
      }
    },
    navigatePrevious () {
      if (this.$route.name === 'SecondStep') {
        this.$router.push('/firstStep')
      }
    },
    submit () {
      console.log('Submitted to backend with data: ' + this.$store.state.firstName + ',' +
       this.$store.state.lastName + ',' + this.$store.state.email)
    }
  }
}
</script>
