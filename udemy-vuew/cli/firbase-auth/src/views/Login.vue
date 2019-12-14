<template>

    <div class="login">
        <h3>Sign in</h3>
        <input v-model="email" type="text" placeholder="Email">
        <input type="password" v-model="password" placeholder="Password">
        <br>
        <button @click="login">Log in</button>
        <p>Don't have an accountant? <router-link :to="{ name:'SignUp'}">Sign Up</router-link></p>
    </div>
    
</template>

<script>
    import firebase from 'firebase'
    export default {
        name: "Login",
        data(){

            return {

                email:'',
                password:''

            }
        },
        methods:{
            login:function () {
                let navigate = this.$router;
                firebase.auth().signInWithEmailAndPassword(this.email,this.password).then(
                    function () {

                        navigate.replace('home')
                    }
                ).catch(function (err) {



                    console.log(err.message)
                })
            }
        },

    }
</script>

<style scoped>

   .login{
       margin-top: 40px;
   }
    input{
        margin:10px 0;
        width: 20%;
        padding:15px;
        
    }
    button{
        margin-top: 10px;
        width: 10%;
        cursor: pointer;
    }
    p{
        margin-top: 20px;
        font-size: 13px;
    }
    p a{
        text-decoration: underline;
        cursor: pointer;
    }

</style>