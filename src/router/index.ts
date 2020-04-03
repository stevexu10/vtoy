import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Grocery from '../views/Grocery.vue'
import GrocerySimple from '../views/GrocerySimple.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/grocery',
    name: 'Grocery',
    component: Grocery
  },
  {
    path: '/grocerySimple',
    name: 'GrocerySimple',
    component: GrocerySimple
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/firstStep',
    name: 'FirstStep',
    component: () => import('../views/FirstStep.vue')
  },
  {
    path: '/secondStep',
    name: 'SecondStep',
    component: () => import('../views/SecondStep.vue')
  },
  {
    path: '/bsForm',
    name: 'BSForm',
    component: () => import('../views/BSForm.vue')
  },
  {
    path: '/stepsForm',
    name: 'StepsForm',
    component: () => import('../views/StepsForm.vue')
  },
  {
    path: '/formWiz',
    name: 'FormWiz',
    component: () => import('../views/FormWiz.vue')
  },
  {
    path: '/vuetifyMenu',
    name: 'VuetifyMenu',
    component: () => import('../views/VuetifyMenu.vue'),
    children: [
      {
        name: 'About',
        path: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      }
    ]
  },
  {
    path: '/claims',
    name: 'Claims',
    component: () => import('../views/BootstrapNav.vue')
  },
  {
    path: '/vuetifyData',
    name: 'VuetifyData',
    component: () => import('../views/VFDatatable.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
