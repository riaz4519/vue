<template>
  <div id="app">

      <show-blogs></show-blogs>
      <list-blogs></list-blogs>

  </div>
</template>

<script>


import ShowBlogs from './components/showblogs'
import ListBlogs from './components/listBlogs'

export default {
  name: 'app',
  components:{
    ShowBlogs,
      ListBlogs


  },

  data(){

    return {




    }
  },

methods:{



}

}
</script>

<style>

</style>
