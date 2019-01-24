<template>
    <div class="conversation">

        <h1>{{ contact ? contact.name : 'select a Contact'}}</h1>

        <MessageFeed :contact="contact" :messages="messages"></MessageFeed>
        <MessageComposer @send="sendMessage"/>

    </div>

</template>


<script>
    import MessageComposer from './MessageComposer.vue'
    import MessageFeed from './MessageFeed.vue'
    export default{
        components:{

            'MessageComposer':MessageComposer,
            'MessageFeed':MessageFeed

        },
        props:{
            contact:{
                type:Object,
                default:null
            },
            messages:{
                type: Array,
                default: []

            }



        },
        methods:{
            sendMessage(text){
                console.log(text);

            }
        }





    }
</script>
<style lang="scss" scoped>
    .conversation {
        flex: 5;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    h1 {
        font-size: 20px;
        padding: 10px;
        margin: 0;
        border-bottom: 1px dashed lightgray;
    }
    }
</style>