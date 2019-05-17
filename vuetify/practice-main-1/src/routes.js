import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import  App from './App.vue'
/*grid*/
import Grid from './views/Grid.vue'
var routes = [

    {path:'/',name:'home',component:App},
    {path:'/grid',name:'grid',component:Grid}
];

export  default new VueRouter({

    mode:'history',
    routes:routes,

})