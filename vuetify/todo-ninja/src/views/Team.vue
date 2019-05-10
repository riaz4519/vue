<template>
    <div class="team">

        <h1 class="subheading grey--text">Team</h1>


        <v-container class="my-5" >

            <v-layout row wrap>

                <v-flex  xs12 sm6 md4 lg3 v-for="(person,index) in team" :key="index">

                    <v-card flat class="text-xs-center ma-3">

                        <v-responsive class="pt-4">

                            <v-avatar size="100" class="grey lighten-4">

                                <img :src="person.avatar" >

                            </v-avatar>

                        </v-responsive>

                        <v-card-text>

                            <div class="subheading">{{ person.name}}</div>
                            <div class="grey--text">{{ person.role}}</div>

                        </v-card-text>

                        <v-card-actions >

                            <v-btn flat color="grey">

                                <v-icon small left>message</v-icon>

                                <span>Message</span>

                            </v-btn>

                        </v-card-actions>

                    </v-card>


                </v-flex>

            </v-layout>

        </v-container>



    </div>
</template>

<script>


    export default {

        data(){

            return {

                team: [
                    { name: 'The Net Ninja', role: 'Web developer',avatar:'/favicon.ico' },
                    { name: 'Ryu', role: 'Graphic designer' ,avatar:'/favicon.ico'},
                    { name: 'Chun Li', role: 'Web developer' ,avatar:'/favicon.ico'},
                    { name: 'Gouken', role: 'Social media maverick',avatar:'/favicon.ico' },
                    { name: 'Yoshi', role: 'Sales guru',avatar:'/favicon.ico'}
                ]

            }
        }

    }
</script>
