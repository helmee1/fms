import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HelloWorld from "@/components/HelloWorld"
import DataCenter from "@/views/DataCenter"
import Manager from "@/views/Manager"
import BusTerminal from "@/views/BusTerminal"
import User from "@/views/User"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/helloworld',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/datacenter',
    name: 'DataCenter',
    component: DataCenter
  },
  {
    path: '/manager',
    name: 'Manager',
    component: Manager
  },
  {
    path: '/busterminal',
    name: 'BusTerminal',
    component: BusTerminal
  },
  {
    path: '/user',
    name: 'User',
    component: User
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
