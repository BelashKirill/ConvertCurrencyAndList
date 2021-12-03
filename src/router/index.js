import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Convert from '../views/Convert.vue'
import List from '../views/List.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/convert',
    name: 'Convert',
    component: Convert
  },
  {
    path: '/list',
    name: 'List',
    component: List
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
