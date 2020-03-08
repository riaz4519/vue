import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

//event bus
window.eventBus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
