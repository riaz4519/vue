<template >
  <div id="app" class="container">
    <img alt="Vue logo" src="./assets/logo.png" class="logo" v-model="newTodo">
   <todo-list></todo-list>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import TodoList from './components/TodoList'

export default {
  name: 'App',
    data(){
      return{

      }
    },
  components: {
    HelloWorld,
    TodoList
  }
}
</script>

<style>
  *{
    box-sizing: border-box;
  }
  .container{
    max-width: 500px;
    margin: 0 auto;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
    font-size: 24px;
}
</style>
