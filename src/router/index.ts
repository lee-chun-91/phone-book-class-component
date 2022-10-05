import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import InfoListView from "@/views/InfoListView.vue"

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: InfoListView
  },
  {
    path: '/add',
    name: 'AddInfo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AddInfoView.vue')
  },
  {
    path: '/update/:id',
    name: 'updateInfo',
    component: () => import('../views/UpdateInfoView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
