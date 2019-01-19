<template>

    <div id="dashboard">

        <h3>Dash board</h3>

        <div class="fixed-action-btn">
            <router-link to="/new" class="btn-floating btn-large red"><font-awesome-icon icon="plus" /></router-link>
        </div>

    </div>

</template>

<script>

    import db from './firebaseInit'

    export default{
        name:'dashboard',
        data(){
            return {

                employee:[]

            }
        },
        created(){

            db.collection('').get();




        }

    }

</script>