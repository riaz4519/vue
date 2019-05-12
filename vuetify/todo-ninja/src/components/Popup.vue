<template>

    <v-dialog max-width="600px">

        <v-btn flat slot="activator" class="primary">Add new Prject</v-btn>

        <v-card>

            <v-card-title>
                <h2>Add a new project</h2>
            </v-card-title>

            <v-card-text>

                <v-form class="px-3">

                    <v-text-field prepend-icon="folder" label="title" v-model="title"></v-text-field>

                    <v-textarea prepend-icon="edit" label="Information" v-model="content"></v-textarea>

                    <v-layout row wrap class="justify-end">
                        <v-btn flat class="success mx-0 mt-3" @click="submit">Add Project</v-btn>
                    </v-layout>


                </v-form>

            </v-card-text>


        </v-card>

    </v-dialog>

</template>

<script>

    export  default{

        data(){
            return {
                title:'',
                content:''
            }
        },
        methods:{

            submit:function () {
                console.log(this.title,this.content)
            }

        }


    }

</script>