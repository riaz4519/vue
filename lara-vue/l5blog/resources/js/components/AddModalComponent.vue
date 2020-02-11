<template>
    <!-- Button trigger modal -->


    <!-- Modal -->
    <div class="modal fade" id="addModal" tabindex="-1" role="dialog" aria-labelledby="addModalTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Add New Record</h5>
<<<<<<< HEAD
                    <button type="button" class="close" @click="clearModal" data-dismiss="modal" aria-label="Close">
=======
                    <button type="button" class="close" @click="closeModal" data-dismiss="modal" aria-label="Close">
>>>>>>> bd6560d8d92ff3e3fceee7af70ee0ce4e0b476f1
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
<<<<<<< HEAD
                    <p class="alert alert-success" v-if="success.length >0">{{ success }}</p>
=======

                    <p class="alert alert-success" v-if="success.length >0 && this.record.length <1">{{ success }}</p>
>>>>>>> bd6560d8d92ff3e3fceee7af70ee0ce4e0b476f1
                    <label for="name">Name</label>
                    <textarea name="name" id="name" class="form-control" v-model="record"></textarea>

                    <ul class="list-unstyled" v-if="errors.length > 0">
<<<<<<< HEAD
                        <li v-for="error in errors" class="text-danger">{{ error }}</li>

                    </ul>
                </div>
                <div class="modal-footer">
                    <button type="button" @click="clearModal" class="btn btn-secondary" data-dismiss="modal">Close</button>
=======

                        <li class="alert alert-danger" v-for="error in errors">{{ error }}</li>

                    </ul>

                </div>
                <div class="modal-footer">
                    <button type="button" @click="closeModal" class="btn btn-secondary" data-dismiss="modal">Close</button>
>>>>>>> bd6560d8d92ff3e3fceee7af70ee0ce4e0b476f1
                    <button type="button" class="btn btn-primary" v-on:click="addRecord">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AddModalComponent",
        data(){
            return{

                record:'',
                success:'',
<<<<<<< HEAD
                errors:[],
                created:false
=======
                created:false,
                errors:[],

>>>>>>> bd6560d8d92ff3e3fceee7af70ee0ce4e0b476f1
            }
        },
        methods:{

            addRecord:function(){

                axios.post('/tasks',{
                    'name':this.record
                }).then(data => {
                    this.$emit('recordadded',data);
                    this.created = true;
                    this.success = "Task Added Successfully";
                    this.record = '';

<<<<<<< HEAD
                }).catch(error =>{
                    this.errors = error.response.data.errors.name;

                } );

                //empty the record
=======
                }).catch(error => {

                    this.errors = error.response.data.errors.name;
                    console.log(this.errors);
                });

                //empty the record

            },
            closeModal:function () {

                this.record = '';
                this.success = '';
                this.created = false;
>>>>>>> bd6560d8d92ff3e3fceee7af70ee0ce4e0b476f1

            },
            clearModal:function () {

                this.errors = [];
                this.success = '';
                this.record = '';
                //this.created = false;
            }
        }
    }
</script>

<style scoped>

</style>
