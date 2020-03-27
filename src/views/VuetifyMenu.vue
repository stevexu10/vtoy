<template>
  <div id="app">
    <v-app id="inspire">
      <v-treeview :items="items"
        activatable
        :open-on-click=true
        :dense=true
        :selectable=false
        :hoverable=true
        :shaped=false
        :rounded=false
        >
        <!--template>
          <span slot="label" slot-scope="item" :class="['myclaz']">
            {{ item }}
          </span>
        </template-->
        <!--template slot="label" slot-scope="{ item }">
          <router-link :to="{ path: '/vuetifyMenu/about' }">{{ item.name }}</router-link>
        </template-->
        <template v-slot:scope="{ item }">
          <i v-if="item.name" :class="[ myclaz ]" :style="{  }">arrow_drop_down</i>
        </template>
        <!--template v-slot:prepend="{ item, open }">
          <i v-if="item.children" aria-hidden="true" :class="['v-icon v-treeview-node__toggle v-treeview-node__toggle-mine v-icon--link material-icons theme--light', {'v-treeview-node__toggle--open': open}]" :style="{color: item.color}">arrow_drop_down</i>
        </template-->
        <!--template slot="prepend">
          <v-list-tile-avatar
            size="30"
            style="min-width: 40px;"
            tile>
          </v-list-tile-avatar>
        </template-->
        <!--v-treeview :items="items">
            <template slot="label" slot-scope="props">
                <router-link :to="props.item.to" v-if="props.item.to">{{ props.item.name }}</router-link>
                <span v-else>{{ props.item.name }}</span>
            </template>
        </v-treeview-->
        <!--v-treeview
          v-model="tree"
          :items="items"
          activatable
          item-key="name">
          <template slot="label" slot-scope="{ item }">
            <a @click="openDialog(item)">{{ item.name }}</a>
          </template>
        </v-treeview-->
        <!--v-treeview
          v-model="tree"
          :items="items"
          :active="active"
          activatable
          open-on-click
          @update:active="test"
          >
        </v-treeview-->
      </v-treeview>
      <router-view></router-view>
    </v-app>
  </div>
</template>

<style lang="scss">
.v-treeview-node__toggle {
  opacity: 0;
}
.v-treeview-node__toggle-mine {
  opacity: 1;
  margin-left: 0px;
  /* let the click events go through to the actual toggle underneath */
  pointer-events: none;
}
.myclaz {
  color: bisque;
}

.v-treeview--dense .v-treeview-node__root {
    min-height: fit-content;
    height: fit-content;
    border: 1px;
}

.v-treeview-node.v-treeview-node--shaped .v-treeview-node__root {
    margin-top: 0px;
    padding-bottom: inherit;
    width: fit-content;
 }

 .v-treeview-node--click>.v-treeview-node__root, .v-treeview-node--click>.v-treeview-node__root>.v-treeview-node__content>* {
    border-spacing: initial;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: fit-content;
    border: 1px solid green;
    padding: 0px;
    margin: 0px;
    border-collapse: collapse;
}

</style>

<script>
export default {
  methods: {
    test () { console.log('TEST', this.active) }
  },
  data: () => ({
    myclass: '.v-treeview-node__toggle',
    items: [
      {
        id: 1,
        name: 'Applications :',
        children: [
          { id: 2, name: 'Calendar : app' },
          { id: 3, name: 'Chrome : app' },
          { id: 4, name: 'Webstorm : app' }
        ]
      },
      {
        id: 5,
        name: 'Documents :',
        children: [
          {
            id: 6,
            name: 'vuetify :',
            children: [
              {
                id: 7,
                name: 'src :',
                children: [
                  { id: 8, name: 'index : ts' },
                  { id: 9, name: 'bootstrap : ts' }
                ]
              }
            ]
          },
          {
            id: 10,
            name: 'material2 :',
            children: [
              {
                id: 11,
                name: 'src :',
                children: [
                  { id: 12, name: 'v-btn : ts' },
                  { id: 13, name: 'v-card : ts' },
                  { id: 14, name: 'v-window : ts' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 15,
        name: 'Downloads :',
        children: [
          { id: 16, name: 'October : pdf' },
          { id: 17, name: 'November : pdf' },
          { id: 18, name: 'Tutorial : html' }
        ]
      },
      {
        id: 19,
        name: 'Videos :',
        children: [
          {
            id: 20,
            name: 'Tutorials :',
            children: [
              { id: 21, name: 'Basic layouts : mp4' },
              { id: 22, name: 'Advanced techniques : mp4' },
              { id: 23, name: 'All about app : dir' }
            ]
          },
          { id: 24, name: 'Intro : mov' },
          { id: 25, name: 'Conference introduction : avi' }
        ]
      }
    ]
  })
}
</script>
