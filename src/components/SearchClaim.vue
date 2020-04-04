<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <!-- Health No -->
      <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="4"
        label-align-sm="left"
        label="Client Health #:"
        label-for="clientHealthNo"
        description="">
        <b-form-input
          id="clientHealthNo"
          v-model="form.clientHealthNo"
          type="text"
          required
          placeholder=""
          size="sm">
        </b-form-input>
      </b-form-group>
      <!-- Last Name -->
      <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="4"
        label-align-sm="left"
        label="Client Last Name:"
        label-for="clienLastName"
        description="">
        <b-form-input
          id="clienLastName"
          v-model="form.clienLastName"
          type="text"
          placeholder=""
          size="sm">
        </b-form-input>
      </b-form-group>
      <!-- First Name -->
      <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="4"
        label-align-sm="left"
        label="Client First Name:"
        label-for="clienFirstName"
        description="">
        <b-form-input
          id="clienFirstName"
          v-model="form.clienFirstName"
          type="text"
          placeholder=""
          size="sm">
        </b-form-input>
      </b-form-group>
      <!-- Home Phone -->
      <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="4"
        label-align-sm="left"
        label="Home Phone #:"
        label-for="homePhone"
        description="">
        <b-form-input
          id="homePhone"
          v-model="form.homePhone"
          type="text"
          placeholder=""
          size="sm">
        </b-form-input>
      </b-form-group>
      <!-- City -->
      <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="12"
        label-align-sm="left"
        label="City (Ontario only):"
        label-for="city"
        description="">
        <b-form-input
          id="city"
          v-model="form.city"
          type="text"
          placeholder=""
          size="sm">
        </b-form-input>
      </b-form-group>
      <!-- Postal Code -->
      <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="4"
        label-align-sm="left"
        label="Postal Code:"
        label-for="postalCode"
        description="">
        <b-form-input
          id="postalCode"
          v-model="form.postalCode"
          type="text"
          placeholder=""
          size="sm">
        </b-form-input>
      </b-form-group>
      <hr/>
      <!-- Claim # -->
      <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="4"
        label-align-sm="left"
        label="Claim #:"
        label-for="claimNumber"
        description="">
        <b-form-input
          id="claimNumber"
          v-model="form.claimNumber"
          type="text"
          placeholder=""
          size="sm">
        </b-form-input>
      </b-form-group>
      <!-- Claim Status -->
      <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="4"
        label-align-sm="left"
        label="Claim Status #:"
        label-for="claimStatus"
        description="">
        <b-form-input
          id="claimStatus"
          v-model="form.claimStatus"
          type="text"
          placeholder=""
          size="sm">
        </b-form-input>
      </b-form-group>
      <!-- Claim Device Category -->
      <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="12"
        label-align-sm="left"
        label="Claim Device Category:"
        label-for="claimDeviceCategory"
        description="">
        <b-form-select v-model="selected" :options="options" size="sm" class=""></b-form-select>
      </b-form-group>
      <hr/>
      <!-- Gate Keeper's Data Range -->
      <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="12"
        label-align-sm="left"
        label="Gate Keeper's Data Range:"
        label-for="gateKeepersDateRange"
        description="">
        <b-form-datepicker id="gateKeepersDateRangeFrom" v-model="gateKeepersDateRangeFrom" class="mb-2" placeholder="From"></b-form-datepicker>
        <b-form-datepicker id="gateKeepersDateRangeTo" v-model="gateKeepersDateRangeTo" class="mb-2" placeholder="To"></b-form-datepicker>
      </b-form-group>
      <hr/>
      <!-- Vendor Reg # -->
      <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="4"
        label-align-sm="left"
        label="Vendor Reg #:"
        label-for="vendorRegNumber"
        description="">
        <b-form-input
          id="vendorRegNumber"
          v-model="form.vendorRegNumber"
          type="text"
          required
          placeholder=""
          size="sm">
        </b-form-input>
      </b-form-group>
      <!-- Authorizer Reg # -->
      <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="4"
        label-align-sm="left"
        label="Authorizer Reg #:"
        label-for="authorizerRegNumber"
        description="">
        <b-form-input
          id="authorizerRegNumber"
          v-model="form.authorizerRegNumber"
          type="text"
          placeholder=""
          size="sm">
        </b-form-input>
      </b-form-group>
      <!-- Provider Billing # -->
      <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="4"
        label-align-sm="left"
        label="Provider Billing #:"
        label-for="providerBillingNumber"
        description="">
        <b-form-input
          id="providerBillingNumber"
          v-model="form.providerBillingNumber"
          type="text"
          placeholder=""
          size="sm">
        </b-form-input>
      </b-form-group>
      <!-- Provider Licence # -->
      <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="4"
        label-align-sm="left"
        label="Provider Licence #"
        label-for="providerLicenceNmber"
        description="">
        <b-form-input
          id="providerLicenceNmber"
          v-model="form.providerLicenceNmber"
          type="text"
          placeholder=""
          size="sm">
        </b-form-input>
      </b-form-group>
      <!-- VA/CA clients -->
      <b-form-checkbox
        id="vacaFlag"
        v-model="purchaseViaNonRegisteredVendor"
        name="vacaFlag"
        value="yes"
        unchecked-value="no"
      >
        VA/CA Clients - purchase via non-registered vendor
      </b-form-checkbox>

      <br/>
      <b-container class="">
        <b-row class="text-center adam-btn-right">
          <b-col>
            <b-button type="submit" variant="outline-secondary" size="sm">Search</b-button>
            &nbsp;
            <b-button type="reset" variant="outline-secondary" size="sm">Clear</b-button>
          </b-col>
        </b-row>
      </b-container>
    </b-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        clientHealthNo: '',
        clienLastName: '',
        clientFirstName: '',
        homePhone: '',
        city: '',
        postalCode: '',
        claimDeviceCategory: '',
        claimStatus: '',
        claimNumber: '',
        gateKeepersDateRangeFrom: '',
        gateKeepersDateRangeTo: '',
        vendorRegNumber: '',
        authorizerRegNumber: '',
        providerBillingNumber: '',
        providerLicenceNmber: '',
        purchaseViaNonRegisteredVendor: '',
        email: '',
        name: '',
        food: null,
        checked: []
      },
      gateKeepersDateRangeFrom: '',
      gateKeepersDateRangeTo: '',
      purchaseViaNonRegisteredVendor: '',
      foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true,
      selected: null,
      options: [
        { value: null, text: '...' },
        { value: 'a', text: 'Breast Prostheses' },
        { value: 'b', text: 'Insluin Syringe' },
        { value: { C: '3PO' }, text: 'Insulin Pump' },
        { value: 'd', text: 'Unavailable', disabled: true }
      ]
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset (evt) {
      evt.preventDefault()
      // Reset our form values
      this.clientHealthNo = ''
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

<style lang="scss">
.adam-btn-right {
  position: relative;
  width: 100%;
  padding-right: 0px;
  padding-left: 101px;
}
hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid black;
}
</style>
