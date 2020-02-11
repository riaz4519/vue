<template>
    <!-- Button trigger modal -->


    <!-- Modal -->
    <div class="modal fade" id="addModal" tabindex="-1" role="dialog" aria-labelledby="viewModal" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Add New Record</h5>
                    <button type="button" class="close"  data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">


                    <label for="name">View Task</label>
                    <p name="name" id="name" class="form-control" v-model="rec.name"></p>



                </div>
                <div class="modal-footer">
                    <button type="button" @click="closeModal" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ViewModalComponent",
        props:['rec'],
        data(){
            return{

                record:'',
                success:'',
                created:false,
                errors:[],

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

            }
        }
    }
</script>

<style scoped>

</style>
