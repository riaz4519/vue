
<template>

        <nav>
           <v-toolbar   flat app color>

               <v-toolbar-side-icon class="grey--text" @click="drawer=!drawer">

               </v-toolbar-side-icon>
               <v-toolbar-title class="text-uppercase grey--text">
                   <span class="font-weight-light">Todo</span>
                   <span>Ninja</span>
               </v-toolbar-title>

               <v-spacer></v-spacer>


               <v-toolbar-items class="hidden-sm-and-down">

                   <v-btn flat>Link One</v-btn>
                   <v-btn flat>Link Two</v-btn>
                   <v-btn flat>Link Three</v-btn>
                   <v-btn flat color="grey">

                       <span>Sign Out</span>

                       <v-icon right>exit_to_app</v-icon>

                   </v-btn>
               </v-toolbar-items>



           </v-toolbar>

            <!--navigation drawer-->

            <v-navigation-drawer   v-model="drawer" app class="name">

                <v-list>

                    <v-list-tile v-for="(link,index) in links" :key="index" router :to="link.route">

                        <v-list-tile-action >
                            <v-icon class="white--text">{{ link.icon}}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title class="white--text">{{ link.text}}</v-list-tile-title>

                        </v-list-tile-content>
                    </v-list-tile>

                </v-list>

            </v-navigation-drawer>
        </nav>



</template>

<script>

    export default{

        data(){

            return {

                drawer:false,

                links:[

                    { icon: 'dashboard', text: 'Dashboard', route: '/' },
                    { icon: 'folder', text: 'My Projects', route: '/projects' },
                    { icon: 'person', text: 'Team', route: '/team' },

                ]

            }
        }


    }

</script>