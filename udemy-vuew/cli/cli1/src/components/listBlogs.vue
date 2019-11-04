<template>
    <div v-theme:column="'narrow'" id="show-blogs">

        <h1>All Title List</h1>

        <input type="text" v-model="search" id="search" placeholder="search blogs">

        <div v-rainbow class="single-blog" v-for="(blog,index) in filteredBlogs" v-bind:key="index">

            <h2>{{ blog.title | to-uppercase}}</h2>


        </div>

    </div>

</template>

<script>
    import searchMixins from '../mixins/searchMixins'
    export default {
        name: "showblogs",
        data:function(){

            return {

                blogs:[],
                search:'',
            }
        },
        filters:{
            'to-uppercase':function (value) {
                return value.toUpperCase()
            },
            'snippet':function (value) {

                return value.slice(0,100) +"..."
            }
        },

        computed:{



        },
        mixins:[searchMixins],

        directives:{

            'theme':{
                bind(el,binding,vnode){

                    if (binding.value == 'wide'){

                        el.style.maxWidth = "1200px"

                    }
                    else if (binding.value == 'narrow'){

                        el.style.maxWidth = "500px"
                    }

                    if (binding.arg == 'column'){

                        el.style.background = '#ddd'
                        el.style.padding = '20px'

                    }

                }
            },
            'rainbow':{
                bind(el,binding,vnode){

                    el.style.color = "#"+ Math.random().toString().slice(2,8)
                }
            }

        },

        created() {

            this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function (data) {

                this.blogs = data.body.slice(0,10)

            })
        }
    }
</script>

<style scoped>
    #show-blogs{
        max-width: 800px;
        margin: 0 auto;
    }
    .single-blog{
        padding: 20px;
        margin: 20px 0;
        box-sizing: border-box;
        background: #eee;
    }
    #search{
        width: 100%;
        padding: 4px;
        border-radius: 3px;
        outline: cornflowerblue;
    }

</style>