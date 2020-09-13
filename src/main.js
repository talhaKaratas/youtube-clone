import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'

let firebaseConfig = {
  apiKey: "AIzaSyA6Td92cG-_aOhbxurvBYnDxYAp1b7pHBA",
  authDomain: "clone-1222f.firebaseapp.com",
  databaseURL: "https://clone-1222f.firebaseio.com",
  projectId: "clone-1222f",
  storageBucket: "clone-1222f.appspot.com",
  messagingSenderId: "54029761637",
  appId: "1:54029761637:web:32f6074ec7271d7d4d1a8c",
  measurementId: "G-JCPKTGM1W7"
}

firebase.initializeApp(firebaseConfig)
firebase.analytics()

import {router} from './router/routes'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
