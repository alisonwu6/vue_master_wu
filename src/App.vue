<template>
  <div id="app">
    <TheNavbar />
    <div class="container push-top">
      <router-view v-show="showPage" @ready="showPage = true"/>
      <AppSpinner v-show="!showPage"/>
    </div>
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue';
import AppSpinner from '@/components/AppSpinner.vue';
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
  created () {
    this.$router.beforeEach((to, from, next) => {
      console.log('be', to, from, next);
      this.showPage = false
      next()
    })
  }
}
</script>

<style>
@import "assets/css/style.css";
</style>
