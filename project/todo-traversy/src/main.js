import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;
import router from './router/index'

import 'materialize-css'
import 'materialize-css/dist/css/materialize.css'

window.$ = require('jquery')
window.JQuery = require('jquery')

import 'materialize-css/dist/js/materialize'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee ,faPlus } from '@fortawesome/free-solid-svg-icons'


import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faCoffee,faPlus );

Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({

  render: h => h(App),
    router:router,
}).$mount('#app');
