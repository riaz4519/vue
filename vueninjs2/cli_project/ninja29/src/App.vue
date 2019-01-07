  <template>
  <div>

  <router-view></router-view>


  </div>
</template>

<script>

  import  addBlog from './components/addBlog.vue'
  import  showBlog from  './components/showBlog.vue'
  import  listBlog from './components/listBlogs.vue'
  export default{

      components:{

          'show-blog':showBlog,
          'add-blog':addBlog,
          'list-blog':listBlog

      },

      data(){

          return {

          }
      },
      methods:{

      }

  }

</script>