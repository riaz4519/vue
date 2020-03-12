import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '../src/routes.js'
import {store} from './store/store'
import Master from './components/layouts/Master'



Vue.config.productionTip = false;

//event bus
window.eventBus = new Vue();
Vue.use(VueRouter);



const router = new VueRouter({
  routes,
  mode:"history"
});

new Vue({
  store:store,
  router:router,
  render: h => h(Master),
}).$mount('#app')
