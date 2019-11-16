import Vue from  'vue'
import VueRouter from 'vue-router'

import Gmap from "../components/home/Gmap";

Vue.use(VueRouter)

export default new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            name:'Gmap',
            component:Gmap

        }
    ]

})