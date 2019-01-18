import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from '../components/Dashboard.vue'
import ViewEmployee from '../components/ViewEmployee.vue'
import NewEmployee from '../components/NewEmployee.vue'
import EditEmployee from '../components/EditEmployee.vue'







Vue.use(VueRouter)

export default new VueRouter({

    mode:'history',

    routes:[
        {path:'/',name:'dashboard',component:Dashboard},
        {path:'/new',name:'new-employee',component:NewEmployee},
        {path:'/edit/:employee_id',name:'edit-employee',component:EditEmployee},
        {path:'/:employee_id',name:'view-employee',component:ViewEmployee},
    ]

})