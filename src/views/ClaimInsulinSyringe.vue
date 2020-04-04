<template>
  <div>
    <div>Record Insulin Syringe Claim</div>
    <tabs @clicked="tabClicked" @changed="tabChanged">
        <tab name="Step1">
          <div>
            <label for="Address">Address</label>
            <input type="text" id="address" name="address" v-model="address"/>
            <br/>
            <button @click="save">Save</button>
        </div>
        </tab>
        <tab name="Step2">
            <first-step></first-step>
        </tab>
        <tab name="step3">
            <second-step></second-step>
        </tab>
    </tabs>
    </div>
</template>

<script>
import store from '../store'
import FirstStep from './FirstStepNoNav.vue'
import SecondStep from './SecondStepNoNav.vue'

export default {
  components: {
    FirstStep, SecondStep
  },
  data () {
    return {
      address: ''
    }
  },
  methods: {
    tabClicked (selectedTab) {
      console.log('Current tab re-clicked:' + selectedTab.tab.name)
    },
    tabChanged (selectedTab) {
      console.log('Tab changed to:' + selectedTab.tab.name)
    },
    save () {
      console.log('Submitted to backend with data: ' + this.$store.state.firstName + ',' +
       this.$store.state.lastName + ',' + this.$store.state.email)
    }
  }
}
</script>
