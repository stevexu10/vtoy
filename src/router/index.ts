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
  }
]

const router = new VueRouter({
  routes
})

export default router
