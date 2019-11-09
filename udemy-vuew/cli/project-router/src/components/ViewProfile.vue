<template>

    <div class="view-profile">

        <h2>Profile for {{ updateId }}</h2>

    </div>
    
</template>

<script>
    export default {
        name: "ViewProfile",
        data:function () {
            return{

                userId:this.$route.params.user_id

            }
        },
        methods:{


        },
        computed:{

            updateId:function () {

                 return this.$route.params.user_id

            }

        },
        watch:{




        }
    }
</script>

<style scoped>

</style>