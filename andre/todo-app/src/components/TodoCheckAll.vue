<template>
    <div id="TodoCheckAll">
        <label><input type="checkbox" :checked="!anyRemaining" @change="allChecked"> check All </label>
    </div>
</template>

<script>
    export default {
        name: "TodoCheckAll",
        computed:{
          anyRemaining(){

              return this.$store.getters.anyRemaining;
          }
        },
        methods:{

            allChecked(){
                this.$store.commit('checkAll',event.target.checked);

            }

        }
    }
</script>

<style scoped>

</style>