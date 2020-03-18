<template>
  <div>
    <tabs @clicked="tabClicked" @changed="tabChanged">
        <tab name="First tab">
          <div>
            <div v-for="item in groceryList"
                v-bind:key="item.id">
              {{item.id}} {{ item.text }}
            </div>
          </div>
        </tab>
        <tab name="Second tab">
            Second tab content
        </tab>
        <tab name="Third tab">
            Third tab content
        </tab>
    </tabs>
    </div>
</template>

<script>
import Vue from 'vue'

export default {
  data () {
    return {
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Vegetables' },
        { id: 3, text: 'Cheese' },
        { id: 4, text: 'Vegetables' },
        { id: 5, text: 'Cheese' },
        { id: 6, text: 'Vegetables' },
        { id: 7, text: 'Cheese' },
        { id: 8, text: 'Whatever else humans are supposed to eat' }
      ]
    }
  },
  methods: {
    tabClicked (selectedTab) {
      console.log('Current tab re-clicked:' + selectedTab.tab.name)
    },
    tabChanged (selectedTab) {
      console.log('Tab changed to:' + selectedTab.tab.name)
    }
  }
}
</script>
