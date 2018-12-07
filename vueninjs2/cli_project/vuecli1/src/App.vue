<template>
  <div >

    <h1>{{ title }}</h1>
    <p>{{ greetings()}}</p>
    <ninjas></ninjas>

  </div>
</template>

<script>


export default {

    data(){
      return {
          title:'welcome to your vuejs.app'
      }
    },
    methods:{

        greetings:function () {


            return 'Hello world'


        }
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
