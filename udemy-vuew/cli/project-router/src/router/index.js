
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import About from '../components/About'
import ViewProfile from "../components/ViewProfile";
Vue.use(VueRouter);

export default new VueRouter({

    routes:[

        {
            path:'/',
            name:'Home',
            component:Home
        },

        {
            path:'/about',
            name:'About',
            component:About
        },
        {
            path:'/profile/:user_id',
            name:'ViewProfile',
            component:ViewProfile
        }

    ],
    mode:'history'



})