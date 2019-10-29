<template>

    <footer>
        <p>{{ title }}</p>
    </footer>
    
</template>

<script>
    export default {
        name: "Footer",
        props:{
            title:String,
        },
        data:function () {

            return {
                copyright:"Copyright 2019 Fahim"
            }
        }
    }
</script>

<style scoped>

    footer{
        background: #222;
        padding: 6px;
    }
    p{
        color: lightgreen;
        text-align: center;
    }

</style>