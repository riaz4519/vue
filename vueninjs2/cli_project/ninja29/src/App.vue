  <template>
  <div>


    <app-header></app-header>

  <router-view></router-view>


  </div>
</template>

<script>

  import  addBlog from './components/addBlog.vue'
  import  showBlog from  './components/showBlog.vue'
  import  listBlog from './components/listBlogs.vue'

  import header from './components/header.vue'

  export default{

      components:{

          'show-blog':showBlog,
          'add-blog':addBlog,
          'list-blog':listBlog,
          'app-header':header,

      },

      data(){

          return {

          }
      },
      methods:{

      }

  }

</script>