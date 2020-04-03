<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/claims">Claims</router-link> |
      <router-link to="/grocerySimple">Search Claim</router-link> |
      <router-link to="/grocery">Grocery</router-link> |
      <router-link to="/firstStep">Steps</router-link> |
      <router-link to="/bsForm">BSForm</router-link> |
      <router-link to="/stepsForm">StepsForm</router-link> |
      <router-link to="/formWiz">FormWiz</router-link> |
      <router-link to="/vuetifyMenu">VuetifyTreeview</router-link> |
      <router-link to="/vuetifyData">VuetifyData</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
import { Tabs, Tab } from 'vue-tabs-component'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import BootstrapNav from './views/BootstrapNav'

Vue.use(BootstrapVue)

Vue.component('tabs', Tabs)
Vue.component('tab', Tab)

export default {
  // components: { BootstrapNav }
}

</script>

<style lang="scss">
/* Bootrtrap Nav
.dropdown-item {
    display: block;
    width: 100%;
    padding: .25rem 1.5rem;
    padding-top: 0.25rem;
    padding-right: 1.5rem;
    padding-bottom: 0.25rem;
    padding-left: 0.5rem;
    clear: both;
    font-weight: 400;
    color: #212529;
    text-align: inherit;
    white-space: nowrap;
    background-color: transparent;
    border: 0;
}
*/

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}

#nav {
    padding: 10px;
    padding-left: 0;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

/* vue-tabs-component */
.tabs-component {
  margin: 0em 0;
}

.tabs-component-tabs {
  border: solid 1px #ddd;
  border-radius: 6px;
  margin-bottom: 5px;
}

@media (min-width: 700px) {
  .tabs-component-tabs {
    border: 0;
    align-items: stretch;
    display: flex;
    justify-content: flex-start;
    margin-bottom: -1px;
  }
}

.tabs-component-tab {
  color: #999;
  font-size: 14px;
  /* font-weight: 600; */
  margin-right: 0;
  list-style: none;
}

.tabs-component-tab:not(:last-child) {
  border-bottom: dotted 1px #ddd;
}

.tabs-component-tab:hover {
  color: #666;
}

.tabs-component-tab.is-active {
  color: #000;
}

.tabs-component-tab.is-disabled * {
  color: #cdcdcd;
  cursor: not-allowed !important;
}

@media (min-width: 700px) {
  .tabs-component-tab {
    background-color: #fff;
    border: solid 1px #ddd;
    border-radius: 3px 3px 0 0;
    margin-right: .5em;
    transform: translateY(2px);
    transition: transform .3s ease;
  }

  .tabs-component-tab.is-active {
    border-bottom: solid 1px #fff;
    z-index: 2;
    transform: translateY(0);
  }
}

.tabs-component-tab-a {
  align-items: center;
  color: inherit;
  display: flex;
  padding: .75em 1em;
  text-decoration: none;
}

.tabs-component-panels {
  padding: 1em 0;
}

@media (min-width: 700px) {
  .tabs-component-panels {
    border-top-left-radius: 0;
    background-color: #fff;
    border: solid 1px #ddd;
    border-radius: 0 6px 6px 6px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .05);
    padding: 1em 2em;
  }
}

/* Tab component refine */
  *,
  *:after,
  *:before {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      position: relative;
  }

  body {
      background-color: #efefef;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
      font-size: 16px;
      padding: 1em;
  }

  .page {
      background-color: #fff;
      border-radius: 3px;
      box-shadow: 0 2px 20px rgba(0, 0, 0, .025);
      margin: 0 auto;
      max-width: 66em;
      padding: 4em 2em;
  }

  @media (min-width: 700px) {
      .page {
          padding: 4em;
      }
  }

  .page-title {
      font-size: 2.4rem;
      margin-bottom: 1em;
  }

  .page-title a {
      color: inherit;
      text-decoration: none;
  }

  .page-title a:hover {
      color: #007593;
  }

  .page-subtitle {
      font-size: 1.25rem;
      margin-bottom: 1em;
      padding-top: .25em;
  }

  .page-about {
      background-color: #d1e8eb;
      margin: 0 -2em;
      padding: 2em 1em;
  }

  @media (min-width: 700px) {
      .page-about {
          border-radius: 3px;
          margin: 0;
          padding: 2em;
      }
  }

  .page-about h2 {
      color: #003345;
  }

  .page-about p {
      color: #003345;
      line-height: 1.45;
      margin-bottom: 1em;
  }

  .page-about a {
      color: #007593;
  }

  .page-about code {
      background-color: rgba(255, 255, 255, .75);
      border-radius: 3px;
      padding: 0 .25em;
  }

  .page-outro {
      color: #999;
      display: block;
      margin-top: 4em;
      text-align: center;
  }

  .page-outro a {
      color: #999;
  }

  .prefix,
  .suffix {
      align-items: center;
      border-radius: 1.25rem;
      display: flex;
      font-size: .75rem;
      flex-shrink: 0;
      height: 1.25rem;
      justify-content: center;
      line-height: 1.25rem;
      min-width: 1.25rem;
      padding: 0 .1em;
  }

  .prefix {
      background-color: #d1e8eb;
      color: #0c5174;
      margin-right: .35em;
  }

  .suffix {
      background-color: #c03;
      color: #fff;
      margin-left: .35em;

  }

  @media (min-width: 700px) {
      .suffix {
          position: absolute;
          right: -.725em;
          top: -.725em;
      }
  }
</style>
