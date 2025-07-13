

import { createRouter, createWebHistory } from 'vue-router'

// Import your page components
import Home from '@/views/Home.vue'
import About from '@/views/AboutUs.vue'
import Staff from '@/views/Staff.vue'
import Calculator from '@/views/Calculator.vue'
import Contact from '@/views/Contact.vue'


const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/staff', name: 'Staff', component: Staff },
  { path: '/calculator', name: 'Calculator', component: Calculator },
  { path: '/contact', name: 'Contact', component: Contact }



]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router