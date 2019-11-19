<template>

    <div class="sign-up">
        <p>Lets create you account</p>
        <input type="text" placeholder="Email" v-model="email">
        <input type="password" placeholder="password" v-model="password">
        <br>
        <button @click="signUp">Sign Up</button>
        <span>Or go back to <router-link :to="{name:'Login'}">Login</router-link></span>

    </div>

</template>

<script>
    import firebase from 'firebase'
    export default {
        name: "SignUP",
        data(){
            return {
                email:'',
                password:''

            }
        },
        methods:{
            signUp:function () {
                let navigate =  this.$router;
                firebase.auth().createUserWithEmailAndPassword(this.email,this.password)
                    .then(
                        function () {
                            navigate.replace('home')
                        },
                        function (err) {

                            alert('opps. '+err.message);
                        }
                )
            }

        }
    }
</script>

<style scoped>
    .sign-up{
        margin-top: 40px;

    }
    input{
        margin:10px 0;
        width:20%;
        padding: 15px;
    }
    button{
        margin-top: 10px;
        width:10%;
        cursor: pointer;
    }
    span{
        display: block;
        margin-top:10px;
        font-size: 11px;
    }


</style>