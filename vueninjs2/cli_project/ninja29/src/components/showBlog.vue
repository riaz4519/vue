<template>
    <div v-theme:column="'narrow'" id="show-blogs">
        <input type="text" v-model="search" placeholder="Search Box">
        <h1>All Blog Articles</h1>
        <div v-for="blog in filteredBlog" class="single-blog">
            <router-link v-bind:to="'/blog/'+blog.id"><h2 v-rainbow>{{ blog.title | to-uppercase}}</h2></router-link>
            <article>{{ blog.body | snippet }}</article>
        </div>
    </div>
</template>

<script>
    import searchMixin from '../searchMixin'
    export default {
        data () {
            return {
                blogs: [],
                search:''
            }
        },
        methods: {
        },
        created() {
            this.$http.get('https://vue-1-f73cf.firebaseio.com/posts.json').then(function(data){

                console.log(data);
                //this.blogs = data.body.slice(0,10);

            });
        },
        computed:{
            filteredBlog:function () {

                return this.blogs.filter((blog) =>{

                    return blog.title.match(this.search);
                });
            }
        },
        filters:{

            'to-uppercase':function (value) {

                return value.toUpperCase();

            }



        },
        directives:{
            'rainbow':{
                bind(el,binding,vnode){

                    el.style.color = "#"+Math.random().toString().slice(2,8);

                }
            }
        },
        mixins:[searchMixin]
    }
</script>

<style>
    #show-blogs{
        max-width: 800px;
        margin: 0px auto;
    }
    .single-blog{
        padding: 20px;
        margin: 20px 0;
        box-sizing: border-box;
        background: #eee;
    }
</style>