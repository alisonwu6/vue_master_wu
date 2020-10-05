import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/PageHome';
import ThreadShow from '@/pages/PageThreadShow';
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/thread/:id',  // using router-link with params object can change path without other settings.
    name: 'ThreadShow',
    component: ThreadShow,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
