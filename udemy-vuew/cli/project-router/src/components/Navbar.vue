<template>
    <nav class="main-nav">

        <ul>
            <li><router-link :to="{name:'Home'}">home</router-link></li>
            <li><router-link :to="{name:'About'}">About</router-link></li>
        </ul>

        <h2>Profile links</h2>

        <ul>
            <li v-for="(id,index) in userIds" :key="index">
                <router-link :to="{name:'ViewProfile',params:{user_id:id}}">Profile{{ id }}</router-link>
            </li>
        </ul>

        <button @click="goBack">Go Back</button>
        <button @click="redirectToHome">Redirect to Home</button>
        <button @click="goForward">Go Forward</button>
    </nav>
</template>

<script>
    export default {

        name:"Navbar",
        data(){
            return {

                userIds:[1,2,3,4,5,6,7]

            }
        },
        methods:{

            redirectToHome:function () {

                this.$router.push({name:'Home'})

            },
            goBack:function () {
                
                this.$router.go(-1)
                
            },
            goForward:function () {
              this.$router.go(1)
            }
            
        }

    }
</script>

<style scoped>

    ul{
        list-style-type: none;
        padding: 0;


    }
    ul li{
        display: inline;
        padding: 5px;
    }
    a{
        color: #42b983;
    }
    .router-link-exact-active{

        color: purple;

    }

</style>