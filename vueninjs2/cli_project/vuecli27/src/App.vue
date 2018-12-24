<template>
  <div id="app">


    <form-one></form-one>
    <form-two></form-two>

  </div>
</template>

<script>

 import formOne from './components/formOne.vue'
 import formTwo from './components/formTwo.vue'


export default {



  data(){

      return{
          title:"This is the title"
      }

  },
  name: 'app',
  components: {

      'form-one':formOne,
      'form-two':formTwo


  }
}
</script>



