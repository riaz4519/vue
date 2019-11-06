<template>

    <div id="blogs">

        <h2>{{ title}}</h2>

        <div v-for="(post,index) in posts" v-bind:key="post.id">

            <h2>{{ post.title}}</h2>
            <article>{{ post.body}}</article>

        </div>

    </div>
    
</template>

<script>
    import axios from 'axios'
    export default {
        name: "Blogs",
        data:function () {

            return {
                title:"Blogs",
                posts:[]
            }
        },

        created(){

            axios.get('https://jsonplaceholder.typicode.com/posts').then(response =>{

                this.posts = response.data.slice(0,10)

            }).catch(err => {

                console.log(err)
            })

        }
    }
</script>

<style scoped>

</style>