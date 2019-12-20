<template>
    <div class="container">
        <div class="row justify-content-center mt-2">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">All Todo Tasks <span class="float-right"><button class="btn btn-outline-primary">+</button></span></div>

                    <div class="card-body">
                        <ul class="list-group" >
                            <li class="list-group-item" v-for="task in tasks">{{ task.id}}-{{ task.name}} <span class="float-right">
                                <button class="btn btn-outline-info btn-sm">Edit</button> |
                                <button class="btn btn-outline-danger btn-sm">Delete</button> |
                                <button class="btn btn-outline-info btn-sm">Preview</button>
                            </span></li>
                        </ul>
                    </div>
                    <div class="card-footer text-right"><small class="pull-right">Copyrights &copy; 2018,Fahim Md Riaz</small></div>

                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
    export default {
        name: "TasksComponent",
        data(){

            return{

                tasks:{},

            }
        },
        methods:{

        },
        created(){

            axios.get("/tasks").then((response) => {
                this.tasks = response.data

            } ).catch()

        }
    }
</script>

<style scoped>

</style>