import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/PageHome';
import ThreadShow from '@/pages/PageThreadShow';
import Forum from '@/pages/PageForum';
import NotFound from '@/pages/PageNotFound';
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
  }, 
  {
    path: '/forum/:id',
    name: 'Forum',
    component: Forum,
    props: true
  }, 
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
    // redirect: {name: 'Home'}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
