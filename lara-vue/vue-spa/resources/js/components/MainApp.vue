<template>
    <div id="main-app">

        <header-tab></header-tab>
        <router-view></router-view>

    </div>
</template>

<script>
    import Header from './Header'
    export default {

        name:"main-app",
        components:{
            'header-tab' :Header,

        }



    }
</script>
