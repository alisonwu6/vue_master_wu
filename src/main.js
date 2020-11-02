import Vue from 'vue'
import firebase from 'firebase'
import App from './App.vue'
import router from './router'
import store from './store'
import AppDate from '@/components/AppDate'
Vue.component('AppDate', AppDate);

Vue.config.productionTip = false

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_048q9EPsBIaoFeNZCopWwooT7tmXfkU",
  authDomain: "vue-master-forum.firebaseapp.com",
  databaseURL: "https://vue-master-forum.firebaseio.com",
  projectId: "vue-master-forum",
  storageBucket: "vue-master-forum.appspot.com",
  messagingSenderId: "401013922871",
  appId: "1:401013922871:web:fd1e96f6df32115ff473b2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch('fetchAuthUser')
  }
})

new Vue({
  router,
  store,   // store: store
  render: h => h(App),
  beforeCreate () {
    // in order to run code on every page
    store.dispatch('fetchUser', {id: store.state.authId})
  }
}).$mount('#app')