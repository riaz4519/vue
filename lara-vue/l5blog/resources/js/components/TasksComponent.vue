<template>
    <div class="container">
        <div class="row justify-content-center mt-2">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">All Todo Tasks <span class="float-right"><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addModal">+</button></span></div>

                    <div class="card-body">
                        <ul class="list-group" >
                            <li class="list-group-item" v-for="task in tasks.data">{{ task.id}}-{{ task.name}} <span class="float-right">
                                <button class="btn btn-outline-info btn-sm">Edit</button> |
                                <button class="btn btn-outline-danger btn-sm">Delete</button> |
                                <button class="btn btn-outline-info btn-sm">Preview</button>
                            </span></li>
                        </ul>
                        <pagination :data="tasks" @pagination-change-page="getResults"></pagination>
                    </div>
                    <div class="card-footer text-right"><small class="pull-right">Copyrights &copy; 2018,Fahim Md Riaz</small></div>

                </div>
            </div>
        </div>
        <add-modal-component></add-modal-component>
    </div>
    
</template>

<script>

    import AddModalComponent from "./AddModalComponent";
    export default {
        name: "TasksComponent",
        data(){

            return{

                tasks:{},

            }
        },
        methods:{
            getResults(page = 1) {
                axios.get('/tasks?page=' + page)
                    .then(response => {
                        this.tasks = response.data;
                    }).catch(error => console.log(error));
            }

        },
        components:{

            AddModalComponent
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