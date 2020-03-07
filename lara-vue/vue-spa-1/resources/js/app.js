require('./bootstrap');

import Vue from 'vue';

import MainApp from './components/MainApp';

//routes
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import {routes} from "./router";

const router = new VueRouter({
    routes,
    mode:"history"
});

//vuex

import Vuex from 'vuex';
Vue.use(Vuex);
import StoreData from './store';

const store = new Vuex.Store(StoreData);

const app = new Vue({
    el: '#app',
    router,
    store,
    components:{
        MainApp,
    }
});
