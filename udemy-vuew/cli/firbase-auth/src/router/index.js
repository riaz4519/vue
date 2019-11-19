import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../views/Login";
import SignUp from "../views/SignUp";
import firebase from 'firebase';

Vue.use(VueRouter)



const router = new VueRouter({
  routes: [
    {
      path:'*',
      redirect:Login,
    },
    {
      path:'/',
      redirect: Login

    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta:{
        requiresAuth:true
      }
    },

    {

      path:'/login',
      name:'Login',
      component:Login,


    },
    {
      path:'/sign-up',
      name:'SignUp',
      component:SignUp,
    }
  ]

});

router.beforeEach(function(to,from,next){

  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record =>record.meta.requiresAuth);
  
  if (requiresAuth && !currentUser) next({name:'Login'});
  else if (!requiresAuth && currentUser) next({name:'home'});
  else next()
  

});

export default router
