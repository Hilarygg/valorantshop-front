import Vue from 'vue'
import VueRouter from 'vue-router'

import Signup from 'vue/signup/index.vue'
import LoginPage from '~/pages/login/index.vue'
import HomePage from '~/pages/home/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: LoginPage
  },
  {
    path: '/signup',
    component: Signup
  },
  {
    path: '/home',
    component: HomePage,
    meta: { requiresAuth: true } // ruta protegida
  }
]

// Crea el router con las rutas definidas
const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
