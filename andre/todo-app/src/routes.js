import Landing from "./components/marketing/Landing";
import App from "./App";
import About from "./components/marketing/About";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import TestTodos from "./components/marketing/TestTodos";
const routes = [
    {
        path:'',
        name:'home',
        component:Landing,

    },
    {
        path:'/todo',
        name:'todo',
        component:App,
    },
    {
        path:'/about',
        name:'about',
        component:About,
    },
    {
        path:'/login',
        name:'login',
        component:Login,
    },
    {
        path:'/register',
        name:'register',
        component:Register,
    },
    {
        path:'/todos/:id',
        name:'todos',
        component:TestTodos,
    },
];

export default routes;