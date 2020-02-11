require('./bootstrap');

import  Vue from 'vue';
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import {routes} from './routes/routes'
import StoreData from './store/store'
import MainApp from './components/MainApp'

Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store(StoreData);

const router = new VueRouter({
    routes,

    mode:"history",
});

const app = new Vue({
    el: '#app',
    router,
    store,
    components: {
        'main-app':MainApp,
    }
});
