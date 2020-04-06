<template>
  <div id="app">
    <div>
      <table class="table table-dark adam-banner">
        <tbody>
          <tr style="background-color: #596B81">
            <td align="left"><img src="./banner_back.jpg" class=""/></td>
            <td align="right" width="100%" height="33" valign="bottom">
              <h5>Ministry of Health</h5>
              <h4 style="color: gold">
                Assistive Devices Application Management (ADAM) System
              </h4>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <Menu mode="horizontal" :theme="theme1" active-name="1"  @on-select="selected">
        <Submenu name="claim">
            <template slot="title">
                <Icon type="stats-bars"></Icon>
                Claim
            </template>
            <MenuGroup title="Record Claim">
                <MenuItem v-bind:name="menuData.menuGroups[0].menuItems[0].name">Breast Prostheses</MenuItem>
                <MenuItem v-bind:name="menuData.menuGroups[0].menuItems[1].name">Communication Aids</MenuItem>
                <MenuItem v-bind:name="menuData.menuGroups[0].menuItems[2].name">Insulin Syringe</MenuItem>
            </MenuGroup>
            <MenuGroup title="Assess Claim">
                <MenuItem v-bind:name="menuData.menuGroups[1].menuItems[0].name">Assess</MenuItem>
            </MenuGroup>
            <MenuGroup title="View Claim">
                <MenuItem v-bind:name="menuData.menuGroups[2].menuItems[0].name">View</MenuItem>
            </MenuGroup>
        </submenu>
        <Submenu name="claimBatch">
            <template slot="title">
                <Icon type="stats-bars"></Icon>
                Claim Batch
            </template>
        </Submenu>
        <Submenu name="client">
            <template slot="title">
                <Icon type="stats-bars"></Icon>
                Client
            </template>
        </Submenu>
    </Menu>

    <!--div v-for="(i, key, index) in nowData" v-if="(key !== 'children')">
        {{ i }} - {{ key }} - {{ index }}
    </div>
    <div v-else>
      {{ i }}
    </div-->
    
    <div class="">

    <!--Menu
        :active-name="4"
        v-show="true"
        theme="dark"
        width="300px"
        @on-select="selected"
        >
      <template v-for="(item, key, index) in nowData">
        <template v-if="key === 'children'">
          <template v-for="it in item">
            <Submenu :name="it.name">
              <template slot="title">
                <span> {{ it.title }} </span>
              </template>
              <template slot="title">
                <MenuItem :name="it.name" :key="it.name">
                  <span> {{ it.title }}</span>
                </MenuItem>
              </template>
            </Submenu>
          </template>
        </template>
        <template v-else>
          <MenuItem :name="key" :key="key">
            <span> {{ item }} </span>
          </MenuItem>
        </template>
      </template>
    </Menu-->

      <!--Submenu v-for="item in nowData" :name="item.name" v-bind:key="item.name" ref="child">
        <template slot="title">
          <span :key="item">{{item}}</span>
        </template>
        <template v-for="item1 in item.children">
          <Submenu v-if="item1.children&&item1.children.length!==0" :name="item1.name" :key="item1.name">
            <template v-for="item1 in item1" slot="title">
              <span :key="item1.name">{{item1.title}}xx</span>
            </template>
            <MenuItem 
                :name="item2.name" 
                v-for="item2 in item1.children"									            
                to = "Jump routing"
                :key="item2.name">
                {{item2.title}}xx
            </MenuItem>
          </Submenu>
          <MenuItem
            class="noChildmenuitem"
            v-else
            :name="item1.name"
            :key="item1.name"
            to = "Jump routing2">
            <i :class="'iconfont '+'11'"></i>
            &nbsp;&nbsp;&nbsp;
            {{ item1.title }}
          </MenuItem>
        </template>
      </Submenu>
    </Menu-->

    <!--Menu
        ref="side_menu"
        :active-name="activeName"
        theme="light"
        width="300px"
        :class="menuitemClasses"
        accordion
        :open-names="openNames"
        @on-select="checkList"
        @on-open-change="openList"
        >
      <Submenu v-for="(item, key, index) in nowData" :name="key" :key="key" ref="child">
        <template slot="title" v-if="key !== 'children'">
          <span>{{item}}xxx</span>
        </template>
        <template v-else v-for="(list1, key, index) in item" >
          <Submenu v-if="list1.children&&list1.children.length!==0" :name="list1.name">
            <template v-for="(item1, key, index) in list1" slot="title">
              <span>{{ item1.name }}yyy</span>
            </template>
            <MenuItem   
                :name="list2.name" 
                v-for="list2 in list1"									            
                to = "Jump routing1"
                :key="list2.name">
                {{list2.title}}wwwww
            </MenuItem>
          </Submenu>
          <MenuItem
            class="noChildmenuitem"
            v-else
            :name="list1.name"
              to = "Jump routing2"
            >
            {{ list1.title }}zzz
          </MenuItem>
        </template>
      </Submenu>
    </Menu-->

    </div>
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
import { Tabs, Tab } from 'vue-tabs-component'
import { adamMenu } from './menu-data.js'
import { appMenu } from './appcnf/menu.js'

Vue.component('tabs', Tabs)
Vue.component('tab', Tab)

export default {
  components: {
  },

  data () {
    return {
      // light, dark, primary
      theme1: 'light',
      menuData: adamMenu,
      nowData: {
        title: ' 4',
        name: '4',
        icon: 'iconxiangmugaikuo1',
        closable: false,
        showInTags: true,
        showInMenus: true,
        choosed: true,
        opened: false,
        children: [
          {
            title: '4-1',
            name: '4-1',
            closable: true,
            showInTags: false,
            showInMenus: true,
            choosed: false,
            opened: false,
            children: [
              {
                title: '4-1-1',
                name: '4-1-1',
                closable: true,
                showInTags: false,
                showInMenus: true,
                opened: false
              },
              {
                title: '4-1-2',
                name: '4-1-2',
                closable: true,
                showInTags: false,
                showInMenus: true,
                choosed: false
              },
              {
                title: '4-1-3',
                name: '4-1-3',
                closable: true,
                showInTags: false,
                showInMenus: true,
                choosed: false
              },
              {
                title: '4-1-4',
                name: '4-1-4',
                closable: true,
                showInTags: false,
                showInMenus: true,
                choosed: false
              }
            ]
          },
          {
            title: '4-2',
            name: '4-2',
            closable: true,
            showInTags: false,
            showInMenus: true,
            choosed: false,
            children: [
              {
                title: '4-2-1',
                name: '4-2-1',
                closable: true,
                showInTags: false,
                showInMenus: true,
                choosed: false
              },
              {
                title: '4-2-2',
                name: '4-2-2',
                closable: true,
                showInTags: false,
                showInMenus: true,
                choosed: false
              },
              {
                title: '4-2-3',
                name: '4-2-3',
                closable: true,
                showInTags: false,
                showInMenus: true,
                choosed: false
              },
              {
                title: '4-2-4',
                name: '4-2-4',
                closable: true,
                showInTags: false,
                showInMenus: true,
                choosed: false
              },
              {
                title: '4-2-5',
                name: '4-2-5',
                closable: true,
                showInTags: false,
                showInMenus: true,
                choosed: false
              }
            ]
          },
          {
            title: '4-3',
            name: '4-3',
            closable: true,
            showInTags: false,
            showInMenus: true,
            choosed: false,
            children: [
              {
                title: '4-3-1',
                name: '4-3-1',
                closable: true,
                showInTags: false,
                showInMenus: true,
                choosed: false
              },
              {
                title: '4-3-2',
                name: '4-3-2',
                closable: true,
                showInTags: false,
                showInMenus: true,
                choosed: false
              },
              {
                title: '4-3-3',
                name: '4-3-3',
                closable: true,
                showInTags: false,
                showInMenus: true,
                choosed: false
              }
            ]
          },
          {
            title: '4-4',
            name: '4-4',
            closable: true,
            showInTags: false,
            showInMenus: true,
            choosed: false,
            children: [
              {
                title: '4-4-1',
                name: '4-4-1',
                closable: true,
                showInTags: false,
                showInMenus: true,
                choosed: false
              }
            ]
          },
          {
            title: '4-5',
            name: '4-5',
            closable: true,
            showInTags: false,
            showInMenus: true,
            choosed: false
          },
          {
            title: '4-6',
            name: '4-6',
            closable: true,
            showInTags: false,
            showInMenus: true,
            choosed: false
          },
          {
            title: '4-7',
            name: '4-7',
            closable: true,
            showInTags: false,
            showInMenus: true,
            choosed: false,
            children: [
              {
                title: '4-7-1',
                name: '4-7-1',
                closable: true,
                showInTags: false,
                showInMenus: true,
                choosed: false
              },
              {
                title: '4-7-2',
                name: '4-7-2',
                closable: true,
                showInTags: false,
                showInMenus: true,
                choosed: false
              }
            ]
          }
        ]
        }
    }
  },
  methods: {
    home () {
      this.$router.push({ name: 'Home', params: { display: true } }).catch(error => {
        console.log(error)
      })
    },
    insulineSyringe () {
      this.$router.push({ name: 'ClaimInsulinSyringe', params: { display: true } }).catch(error => {
        console.log(error)
      })
    },
    claimView () {
      this.$router.push({ name: 'ClaimView', params: { display: true } }).catch(error => {
        console.log(error)
      })
    },
    selected (name) {
      console.log(name)
      switch (name) {
        case this.menuData.menuGroups[1].menuItems[0].name:
          this.$router.push({ name: 'ClaimView', params: { display: true } }).catch(error => {
            console.log(error)
          })
          break
        case this.menuData.menuGroups[2].menuItems[0].name:
          this.claimView()
          break
        default:
          this.home()
      }
    }
  }
}

</script>

<style lang="scss">
/**** ADAM Banner  ****/
.adam-banner {
  background-color: #596B81;
  margin: 0px;
}

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

    &.router-link-exact-active, .submenu {
      color: #42b983;
    }
  }
}

body {
      background-color: #efefef;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
      font-size: 16px;
      padding: 0.01em;
  }

img {
    vertical-align: top;
    border-style: none;
}

/*** Multi-level menu ****/
.Menu__header {
  display: flex;
  align-items: center;
  padding-left: 35px;
  height: 50px;
  color: #fff;
  font-size: 16px;
  background-color: #232f3e;
  cursor: pointer;

  .arrow {
    padding-top: 2px;
    fill: #fff;
    margin-right: 10px;
    width: 10px;
    height: 100%;
    display: flex;
    align-items: center;
  }
}

.Menu__list {
  list-style: none;
  padding-bottom: 2px;

  .separator {
      border-bottom: 1px solid #d5dbdb;
      padding: 2px 0 0 0;
      margin: 0;
  }
}

.Menu__item {
  color: #4a4a4a;
  padding-left: 35px;
  height: 45px;
  display: flex;
  align-items: center;
  cursor: pointer;

  a {
    color: #4a4a4a;
    text-decoration: none;
  }

  .arrow[data-v-2a060565] {
    padding-top: 2px;
    fill: black;
    padding-left: 15px;
    display: flex;
    align-items: left;
    width: 25px;
    height: 100%;
  }

}

/****  vue-tabs-component ****/
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
