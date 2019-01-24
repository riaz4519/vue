<template>
    <div class="chat-app">

        <Conversation :contact="selectedContact" :messages="messages" ></Conversation>
        <ContactsList :contacts="contacts" @selected="startConversationWith"></ContactsList>

    </div>
</template>

<script>
    import Conversation from './Conversation.vue'
    import ContactsList from './ContactsList.vue'

    export default {

        props:{
            user:{
                type:Object,
                required:true,
            }

        },

        components:{

            Conversation,
            ContactsList



        },

        data(){
            return{

                selectedContact:null,
                messages:[],
                contacts:[],

            }
        },
        mounted() {
            axios.get('/contacts').then((response) =>{



                this.contacts = response.data;

            })

        },
        methods:{
            startConversationWith(contact){

                axios.get(`/conversation/${contact.id}`).then((response) => {

                    this.messages = response.data;

                    console.log(response.data)


                    this.selectedContact = contact;

                })

            }
        }
    }
</script>

<style lang="scss" scoped>
    .chat-app {
        display: flex;
    }
</style>
