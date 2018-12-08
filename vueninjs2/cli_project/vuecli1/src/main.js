import Vue from 'vue'
import App from './App.vue'
import Ninjas from './components/ninja.vue'

Vue.config.productionTip = false;
/*Vue.component('ninjas',Ninjas);*/


new Vue({
  el:'#app',
  render: h => h(App),
})
