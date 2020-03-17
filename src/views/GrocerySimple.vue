<template>
  <div id="grocery">
      <ul>
        <li v-for="item in groceryList"
            v-bind:key="item.id">
          {{ item.text }}
        </li>
      </ul>
    </div>
</template>

<script>

export default {
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
