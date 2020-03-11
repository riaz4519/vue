<template>
    <div id="TodoClearCompleted">
        <button v-if="showClearCompletedButton" @click="clearCompleted">Clear Completed</button>
    </div>
</template>

<script>
    export default {
        name: "TodoClearCompleted",


        computed:{
            showClearCompletedButton(){
                return this.$store.getters.showClearCompletedButton;
            }
        },
        methods:{
            clearCompleted(){

                this.$store.dispatch('clearCompleted');
            }
        }
    }
</script>

<style scoped>

</style>