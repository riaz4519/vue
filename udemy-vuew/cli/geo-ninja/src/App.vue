<template>
  <div id="app">

    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/layouts/Navbar'
export default {
  name: 'app',
  components: {

    Navbar
  }
}
</script>

<style>

</style>
