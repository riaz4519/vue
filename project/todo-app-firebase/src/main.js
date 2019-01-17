import Vue from 'vue'
import App from './App.vue'


import 'materialize-css'

import 'materialize-css/dist/css/materialize.css'
import 'material-design-icons/iconfont/material-icons.css'

window.$ = require('jquery')
window.jQuery = require('jquery')
import 'materialize-css/dist/js/materialize'
import vueRouter from 'vue-router'

Vue.use(vueRouter);

import routes from './router/router'

const router = new vueRouter({

  routes:routes,
    mode:'history'

});




Vue.config.productionTip = false

new Vue({

  router:router,
  render: h => h(App),
}).$mount('#app')




