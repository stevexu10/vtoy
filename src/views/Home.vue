<template>
  <div class="home">
    <HelloWorld v-bind:msg="msg"/>
  </div>
</template>

<script>
// @ is an alias to  /src
import HelloWorld from '@/components/HelloWorld.vue'
import { appMenu } from '../appcnf/menu.js'
import { adamMenu } from '../menu-data.js'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data () {
    return { msg: appMenu.appMenu }
  }
}
</script>
