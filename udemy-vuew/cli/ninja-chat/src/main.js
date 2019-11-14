import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import router from './router/index'
import VueChatScroll from 'vue-chat-scroll'

Vue.use(VueChatScroll)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
