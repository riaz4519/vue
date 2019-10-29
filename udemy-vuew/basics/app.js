
Vue.component('grettings',{
    template:'<p>Hello this is {{name}} <button v-on:click="changeName()">changeName</button> </p>',
    data:function () {
        return {
            name:"Fahim"
        }
    },
    methods:{

        changeName:function () {

            this.name = "Your Name"
        }


    },
});
new Vue({

    el:"#app",
    data:{

        title:"data",

    },
    methods:{




    },



});