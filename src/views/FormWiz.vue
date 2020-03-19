<template>
  <form-wizard @on-complete="onComplete"
                        shape="tab"
                        color="#9b59b6">
        <tab-content title="Personal details"
                     icon="ti-user">
          My first tab content
        </tab-content>
        <tab-content title="Additional Info"
                     icon="ti-settings">
          My second tab content
        </tab-content>
        <tab-content title="Last step"
                     icon="ti-check">
          Yuhuuu! This seems pretty damn simple
        </tab-content>
   </form-wizard>

</template>

<script>
import Vue from 'vue'
import VueFormWizard from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

Vue.use(VueFormWizard)

export default {
  methods: {
    onComplete: function () {
      alert('Yay. Done!')
    }
  }
}
</script>
