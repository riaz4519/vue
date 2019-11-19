import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false
let app = '';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGg4gC9mxBGMIaAjCB-BcMgxqSynsJmFE",
  authDomain: "vue-1-f73cf.firebaseapp.com",
  databaseURL: "https://vue-1-f73cf.firebaseio.com",
  projectId: "vue-1-f73cf",
  storageBucket: "vue-1-f73cf.appspot.com",
  messagingSenderId: "107343689213",
  appId: "1:107343689213:web:259a8efd55b01d55349594"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(function () {



  if (!app){
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }

});


