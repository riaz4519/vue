import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Welcome from '../components/Welcome'
import Chat from "../components/Chat";

export default new VueRouter({

    routes:[
        {
            path:'/',
            name:'Home',
            component:Welcome
        },
        {
            path:'/chat',
            name:'Chat',
            component:Chat,
            props:true,
            beforeEnter:(to,from,next)=>{

                if (to.params.name){

                    next()
                    //console.log(to.params.name)
                }else{

                    next({name:'Home'})
                }
            }


        }
    ],
    mode:'history'
})