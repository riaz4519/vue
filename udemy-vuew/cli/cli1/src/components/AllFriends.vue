<template>
    <div id="all-friends">

        <h2>All Friends</h2>

        <div v-for="(friend,index) in friends" v-bind:key="index">

            <span @click="unfriend(friend.name)">{{ friend.name}}</span>

        </div>

    </div>
</template>

<script>
    export default {
        name: "AllFriends",
        props:[
            'friends'
        ],
        data:function () {

            return {


            }
        },
        methods:{

            unfriend:function (name) {

                this.$emit('delete',{name:name})

            }

        }
    }
</script>

<style scoped>

</style>