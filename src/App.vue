<template>
  <div id="app">
    <TheNavbar />
    <div class="container push-top">
      <router-view v-show="showPage" @ready="pageReady"/>
      <AppSpinner v-show="!showPage"/>
    </div>
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue';
import AppSpinner from '@/components/AppSpinner.vue';
import NProgress from 'nprogress'
export default {
  name: 'App',
  components: {
    TheNavbar,
    AppSpinner
  },
  data() {
    return {
      showPage: false
    }
  },
  methods: {
    pageReady() {
      this.showPage = true
      NProgress.done()
    }
  },
  created () {
    NProgress.configure({
      speed: 200, 
      showSpinner: false
    })
    this.$router.beforeEach((to, from, next) => {
      this.showPage = false
      NProgress.start()
      next()
    })
  }
}
</script>

<style>
@import "assets/css/style.css";
@import "~nprogress/nprogress.css";  /* ~ ponits to the node modules directory  */

#nprogress .bar {
  background: thistle;
}
</style>
