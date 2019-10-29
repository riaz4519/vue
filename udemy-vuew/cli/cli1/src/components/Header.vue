<template>
    <header>
        <h1 v-on:click="changeTitle()">{{ title }}</h1>
    </header>
</template>

<script>
    export default {
        name: "Header",
        props:{
          title:String,
        },
        data:function () {

            return {

            }
        },
        methods:{

            changeTitle:function () {
                this.$emit('changeTitle',{change:"New Title"})
            }
        }

    }
</script>

<style scoped>

    header{

        background: lightgreen;
        padding: 10px;

    }

    h1{

        color: #222;
        text-align: center;
    }

</style>