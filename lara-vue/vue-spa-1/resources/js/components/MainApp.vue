<template>
    <div id="main-app">
        <header/>
        <router-view></router-view>
    </div>
</template>

<script>
    import Header from './Header';
    export default {
        name:"main-app",
        components:{
            Header,
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
