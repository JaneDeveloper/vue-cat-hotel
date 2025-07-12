

import { createRouter, createWebHistory } from 'vue-router'

// Import your page components
import Home from '@/views/Home.vue'
import About from '@/views/AboutUs.vue'


const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router