import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

Vue.config.productionTip = false

//importing router from routes.js

import router from './routes'

new Vue({
  render: h => h(App),
    router,
}).$mount('#app')
