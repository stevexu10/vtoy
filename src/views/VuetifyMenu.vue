<template>
  <div id="app">
    <v-app id="inspire">
      <v-treeview :items="items"
        activatable
        :open-on-click=true
        :dense=true
        :selectable=true
        :hoverable=true
        :color='primary'
        :shaped=true
        :rounded=true
        >
        <template v-slot:prepend="{ item, open }">
          <i v-if="item.children" aria-hidden="true" :class="['v-icon v-treeview-node__toggle v-treeview-node__toggle-mine v-icon--link material-icons theme--light', {'v-treeview-node__toggle--open': open}]" :style="{color: item.color}">arrow_drop_down</i>
        </template>
      </v-treeview>
    </v-app>
  </div>
</template>

<style lang="scss">
.v-treeview-node__toggle {
  opacity: 0;
}
.v-treeview-node__toggle-mine {
  opacity: 1;
  margin-left: -24px;
  /* let the click events go through to the actual toggle underneath */
  pointer-events: none;
}

</style>

<script>
export default {
  data: () => ({
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
