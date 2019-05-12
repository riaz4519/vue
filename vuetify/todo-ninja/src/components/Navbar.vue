
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

               <!--drop down menu-->

               <v-menu offset-y>

                   <v-btn flat slot="activator" color="grey">

                       <v-icon left>expand_more</v-icon>
                       <span>Menu</span>

                   </v-btn>

                   <v-list>

                       <v-list-tile v-for="(link,index) in links" :key="index" router :to="link.route">

                           <v-list-tile-action>
                               <v-icon small>{{ link.icon}}</v-icon>
                           </v-list-tile-action>

                           <v-list-tile-title>{{ link.text}}</v-list-tile-title>

                       </v-list-tile>

                   </v-list>

               </v-menu>





               <v-toolbar-items class="hidden-sm-and-down">

                   <v-btn flat color="grey">

                       <span>Sign Out</span>

                       <v-icon right>exit_to_app</v-icon>

                   </v-btn>
               </v-toolbar-items>



           </v-toolbar>

            <!--navigation drawer-->

            <v-navigation-drawer   v-model="drawer" app class="name">

                <v-layout column align-center>

                    <v-flex class="mt-5">

                        <v-avatar  size="100">
                            <img src="/favicon.ico">
                        </v-avatar>

                        <p class="white--text subheading mt-1">Fahim md riaz</p>

                    </v-flex >



                    <v-flex class="mt-4 mb-3">

                        <Popup />

                    </v-flex>

                </v-layout>

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

    import Popup from './Popup.vue'
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
        },
        components:{
            Popup
        }



    }

</script>