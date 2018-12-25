<template>
  <div id="app">


    <keep-alive>


      <component v-bind:is="component"></component>

    </keep-alive>



    <button v-on:click="component = 'form-one'">show form one</button>
    <button v-on:click="component = 'form-two'">show form Two</button>


  </div>
</template>

<script>

 import formOne from './components/formOne.vue'
 import formTwo from './components/formTwo.vue'


export default {



  data(){

      return{
          title:"This is the title",
          component:'form-two'
      }

  },
  name: 'app',
  components: {

      'form-one':formOne,
      'form-two':formTwo


  }
}
</script>



