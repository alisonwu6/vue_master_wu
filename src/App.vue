<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <TheNavbar />
    <div class="container push-top">
      <router-view />
    </div>
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue';
export default {
  name: 'App',
  components: {
    TheNavbar,
  },
}
</script>

<style>
@import "assets/css/style.css";
</style>
