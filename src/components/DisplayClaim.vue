<template>
  <v-app id="inspire">
      <v-toolbar dark color="secondary" fixed>
        <v-spacer></v-spacer>
        <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
        <v-menu offset-y :nudge-left="170" :close-on-content-click="false">
            <v-btn icon slot="activator">
                <v-icon>more_vert</v-icon>
              </v-btn>
            <v-list>
              <v-list-tile  v-for="(item) in headers"  :key="item.value"   @click="changeSort(item.value)">
                <v-list-tile-title>{{ item.text }}<v-icon v-if="pagination.sortBy === item.value">{{pagination.descending ? 'arrow_downward':'arrow_upward'}}</v-icon></v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
      </v-toolbar>
          <v-layout v-resize="onResize" column style="padding-top:56px">
            <v-data-table :headers="headers" :items="claimsData" :search="search" :pagination.sync="pagination" :hide-headers="isMobile" :class="{mobile: isMobile}">
              <template slot="items" slot-scope="props">
                <tr v-if="!isMobile">
                  <td>{{ props.item.name }}</td>
                  <td class="text-xs-right">{{ props.item.calories }}</td>
                  <td class="text-xs-right">{{ props.item.fat }}</td>
                  <td class="text-xs-right">{{ props.item.carbs }}</td>
                  <td class="text-xs-right">{{ props.item.protein }}</td>
                  <td class="text-xs-right">{{ props.item.iron }}</td>
                </tr>
                <tr v-else>
                  <td>
                    <ul class="flex-content">
                      <li class="flex-item" data-label="Name">{{ props.item.name }}</li>
                      <li class="flex-item" data-label="Calories">{{ props.item.calories }}</li>
                      <li class="flex-item" data-label="Fat (g)">{{ props.item.fat }}</li>
                      <li class="flex-item" data-label="Carbs (g)">{{ props.item.carbs }}</li>
                      <li class="flex-item" data-label="Protein (g)">{{ props.item.protein }}</li>
                      <li class="flex-item" data-label="Iron (%)">{{ props.item.iron }}</li>
                    </ul>
                  </td>
                </tr>
              </template>
              <v-alert slot="no-results" :value="true" color="error" icon="warning">
                Your search for "{{ search }}" found no results.
              </v-alert>
            </v-data-table>
          </v-layout>
    </v-app>
</template>

<script>
// import { mdbTbl, mdbDatatable2, mdbInput } from 'mdbvue'
import { claimInsulinSyringeData } from '../data/claims-insulin-syringe.js'
import axios from 'axios'

const claimUrl = 'http://localhost:4001/graphql?query=%7BfindAllClaimInsulinSyringeSimples%7Bid%20batchId%20claimNumber%20p%20deviceCategory%20gtkpDate%20claimStatus%20paid%20healthNumber%20clientName%20lastUpdated%7D%7D'

export default {
  components: {
    // mdbTbl,
    // mdbDatatable2,
    // mdbInput
  },
  created () {
    axios.get(claimUrl)
      .then(response => {
        this.claimFromGraphql = response.data.data.findAllClaimInsulinSyringeSimples
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    onResize () {
      if (window.innerWidth < 769) {
        this.isMobile = true
      } else {
        this.isMobile = false
      }
    },
    toggleAll () {
      if (this.selected.length) this.selected = []
      else this.selected = this.desserts.slice()
    },
    changeSort (column) {
      console.log(column)
      if (this.pagination.sortBy === column) {
        this.pagination.descending = !this.pagination.descending
      } else {
        this.pagination.sortBy = column
        this.pagination.descending = false
      }
    }
  },
  data () {
    return {
      claimFromGraphql: [],
      pagination: {
        sortBy: 'name'
      },
      selected: [],
      search: '',
      isMobile: false,
      headers: [
        {
          text: 'Claim #',
          align: 'left',
          value: 'claimNumber'
        },
        {
          text: 'Batch ID',
          value: 'batchId'
        },
        {
          text: 'P',
          value: 'p'
        },
        {
          text: 'Device Category',
          value: 'deviceCategory'
        },
        {
          text: 'Gtkp. Date',
          value: 'gtkpDate'
        },
        {
          text: 'Claim Status',
          value: 'claimStatus'
        },
        {
          text: 'Paid',
          value: 'paid'
        },
        {
          text: 'Health #',
          value: 'healthNumber'
        },
        {
          text: 'Client Name',
          value: 'clientName'
        },
        {
          text: 'Laset Updated',
          value: 'lastUpdated'
        }
      ],
      claimsData: claimInsulinSyringeData
    }
  }
}
</script>

<style lang="scss">
/* Vuetify Datatable header height fix */
.v-application--wrap {
  min-height: fit-content;
}

</style>
