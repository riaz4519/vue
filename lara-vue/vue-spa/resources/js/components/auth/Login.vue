<template>
    <div id=" " class="login row justify-content-center">

        <div class="col-md-4">
            <div class="card">
                <div class="card-header">Login</div>
                <div class="card-body">
                    <form >
                        <div class="form-group row">
                            <label for="email">Email:</label>
                            <input type="email" v-model="form.email" class="form-control" placeholder="Email Address">
                        </div>
                        <div class="form-group row">
                            <label for="password">Email:</label>
                            <input type="email" v-model="form.password" class="form-control" placeholder="enter password">
                        </div>
                        <div class="form-group row">
                            <input type="submit" value="login">
                        </div>
                    </form>
                </div>

            </div>
        </div>

    </div>
</template>

<script>

    import {login} from "../../helpers/auth";

    export default {
        name: "Login",
        data(){
            return {
                form:{

                    email:'',
                    password:''
                },
                error:null,
            }
        },
        methods:{
            autheticate(){
                this.$store.dispatch('login');
                login(this.data.form)
                    .then((res) => {
                        this.$store.commit('loginSuccess',res);
                        this.$router.push({path:'/'})
                    })
                    .catch((error)=>{

                        this.$store.commit('loginFailed',{error});

                    })
            }
        }
    }
</script>

<style scoped>

</style>
