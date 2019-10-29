<template>

    <div id="blogs">

        <h2>{{ title}}</h2>

    </div>
    
</template>

<script>
    export default {
        name: "Blogs",
        data:function () {

            return {
                title:"Blogs"
            }
        },
        beforeCreate() {
            alert('Before Created')
        },
        created(){

            alert('created')
        }
    }
</script>

<style scoped>

</style>