<template>
  <div class="home">
    <HelloWorld v-bind:msg="msg"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data () {
    return { msg: 'Welcome to' }
  }
}
</script>
