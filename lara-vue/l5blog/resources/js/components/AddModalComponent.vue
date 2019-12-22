<template>
    <!-- Button trigger modal -->


    <!-- Modal -->
    <div class="modal fade" id="addModal" tabindex="-1" role="dialog" aria-labelledby="addModalTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Add New Record</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p class="alert alert-success" v-if="success.length >0 && this.record.length <1">{{ success }}</p>
                    <label for="name">Name</label>
                    <textarea name="name" id="name" class="form-control" v-model="record"></textarea>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
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
                created:false
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
                }).catch(error => console.log(error));

                //empty the record
                this.record = '';

            }
        }
    }
</script>

<style scoped>

</style>
