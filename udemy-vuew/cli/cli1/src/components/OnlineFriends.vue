<template>

    <div id="online-friends">

        <h2>Online Friend</h2>
        <div v-for="(friend,index) in friends" v-bind:key="index">

            <span v-if="friend.online">{{ friend.name}}</span>

        </div>

    </div>
    
</template>

<script>
    export default {
        name: "OnlineFriends",
        props:['friends'],
        data:function () {

            return {

            }
        }
    }
</script>

<style scoped>

</style>