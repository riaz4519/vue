<template>
    <div class="container">
        <div class="row justify-content-center mt-2">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">All Todo Tasks <span class="float-right"><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addModal">+</button></span></div>

                    <div class="card-body">
                        <ul class="list-group" >
                            <li class="list-group-item" v-for="task in tasks.data">{{ task.id}}-{{ task.name}} <span class="float-right">
                                <a data-toggle="modal" href="#editModal" class="btn btn-outline-info btn-sm">Edit</a> |
                                <button v-on:click="delRecord" class="btn btn-outline-danger btn-sm">Delete</button> |
                                <a class="btn btn-outline-info btn-sm"  data-toggle="modal" href="#viewModal">Preview</a>
                            </span></li>
                        </ul>
                        <pagination :data="tasks" @pagination-change-page="getResults"></pagination>
                    </div>
                    <div class="card-footer text-right"><small class="pull-right">Copyrights &copy; 2018,Fahim Md Riaz</small></div>

                </div>
            </div>
        </div>
        <add-modal-component @recordadded="refreshRecord"></add-modal-component>
    </div>
    
</template>

<script>

    import AddModalComponent from "./AddModalComponent";
    import Pagination from 'laravel-vue-pagination';
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
            },
            refreshRecord(data){

                this.tasks = data.data;
            },
            updateRecord:function () {

                axios.post('/tasks',{
                    'name':this.record
                }).then(data => {
                    this.$emit('recordadded',data);
                    this.created = true;
                    this.success = "Task Added Successfully";
                    this.record = '';

                }).catch(error => {

                    this.errors = error.response.data.errors.name;
                    console.log(this.errors);
                });


            }

        },
        components:{

            AddModalComponent,
            Pagination,
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
