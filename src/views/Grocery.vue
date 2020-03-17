<template>
  <div class="grocery">
      <ol>
        <!--
          Now we provide each todo-item with the todo object
          it's representing, so that its content can be dynamic.
          We also need to provide each component with a "key",
          which will be explained later.
        -->
        <Grocery
          v-for="item in groceryList"
          v-bind:todo="item"
          v-bind:key="item.id">
          </Grocery>
      </ol>
    </div>
</template>

<script>
// @ is an alias to /src
import Grocery from '@/components/Grocery.vue'

export default {
  name: 'Grocery1',
  components: {
    Grocery
  },
  data () {
    return {
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ]
    }
  }
}
</script>
