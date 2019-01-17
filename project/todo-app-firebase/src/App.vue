<template>
  <div id="app">

    <img src="./assets/logo.png">

  <products></products>

  </div>
</template>

<script>

import products from './components/Products.vue'

export default {
  name: 'app',
  components: {
      products
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
