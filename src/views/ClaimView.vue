<template>
  <div>
    <b-container class="" fluid="true">
      <b-row align-h="start" class="text-center">
        <b-col cols="3" class="adam-fully-occupied">
          <b-container class="adam-fully-occupied">
            <b-row class="text-center adam-claim-search">
              <div class="header-search">
                View Claim Search Criteria
              </div>
            </b-row>
            <b-row style="height: .1rem"/>
            <b-row class="text-center adam-claim-search">
              <search-claim></search-claim>
            </b-row>
          </b-container>
        </b-col>
        <b-col class="adam-fully-occupied">
          <b-container class="" fluid="true">
              <b-row class="text-center adam-claim-search">
              <div class="header-view">
                SELECT CLAIM FOR VIEW
              </div>
            </b-row>
              <b-row class="text-center adam-claim-search">
                <display-claim></display-claim>
              </b-row>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
    <router-view></router-view>
  </div>
</template>

<script>
import SearchClaim from '../components/SearchClaim.vue'
import DisplayClaim from '../components/DisplayClaim.vue'

export default {
  components: {
    SearchClaim,
    DisplayClaim
  }
}
</script>

<style lang="scss">
.adam-align-right {
  width: 60px;
  height: 20px;
  display: table;
  text-align: right;
  padding: 0px;
  margin: 0px;
}

.adam-fully-occupied {
  width: 100%;
  padding: 0px;
  margin-left: 8px;
}

.claim-view {
  width: 100%;
  position: absolute;
  border:1px solid black;
  margin: 0px;
  padding: 0px;
}

.adam-claim-search {
  width: 100%;
  height: 100%;
  display: table;
  text-align: center;
  border-left: 0.1em solid grey;
  border-top: 0.1em solid grey;
  border-bottom: 0.1em solid grey;
  border-right: 0.1em solid grey;
  padding: 0px;
  margin: 0px;

  .header-search {
    background-color: black;
    color: gold;
  }

  .header-view {
    background-color: #080808fa;
    color: white;
  }
}

/*** b-form refine ***/
.form-group {
  margin-bottom: 0rem;
}

.col-form-label {
    text-align: right;
}

.btn {
  background-color: whitesmoke;
}

.adam-table {
  padding: 0px;
  margin: 0px;
}
.adam-thClass {
  background-color: darkgrey;
}
.adam-tdClass {
  border: 0.1rem solid black;
}
.adam-page-active {
  background-color: darkgrey;
}

/* MDB table fix */
.md-form .form-control {
    /* height: auto;
    padding: .6rem 0 .4rem 0;
    margin: 0 0 .5rem 0;
    background-color: transparent;
    border-radius: 0; */
    width: fit-content;
}

.md-form label.active {
    /* -webkit-transform: translateY(-14px) scale(0.8);
    transform: translateY(-14px) scale(0.8); */
    display: none;
}

.table-dark {
    /* color: #fff; */
    background-color: #596B81;
}

.ivu-menu-horizontal .ivu-menu-item, .ivu-menu-horizontal .ivu-menu-submenu {
    float: left;
    padding: 0;
    /* position: relative;
    cursor: pointer;
    z-index: 3;
    transition: all .2s ease-in-out; */
}

.ivu-menu-submenu-title span>i, .ivu-menu-submenu-title>i {
    margin-right: 0px;
}

.table {
    width: 100%;
    margin-bottom: 0rem;
    // color: #212529;
}

.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu {
    // height: inherit;
    line-height: 2rem;
    // border-bottom: 2px solid transparent;
      color: #515a6e;
}

.ivu-menu-horizontal {
    height: 30px;
    line-height: 60px;
}

.md-form {
    position: relative;
    /* margin-top: 1.5rem; */
    margin-bottom: 0rem;
}

.mdb-datatable thead th[data-v-562d30fe] {
    background-color: #425267;
    color: white;
}

.table-header th {
  border: 1px solid black;
}

.dataTable td {
  border: 1px solid grey;
}

.mdb-datatable .mdb-datatable-footer {
    border-top: 0px solid #dee2e6;
}

.form-group {
    margin-bottom: 0rem;
    margin-top: 1rem;
}

.md-form lable {
  padding-left: 2rem;
}

label {
    display: inline-block;
    margin-bottom: .5rem;
    margin-left: .5rem;
}
.form-group {
    margin-bottom: 0rem;
    margin-top: 0rem;
}

.md-form {
  margin-left: .5rem;
}

.form-control-sm, custom-select-sm{
    border-radius: .1rem;
    border-right: 0rem;
}
</style>
