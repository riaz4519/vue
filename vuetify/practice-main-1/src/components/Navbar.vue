<template>

    <nav>
        <v-toolbar app>
            <v-toolbar-side-icon class="grey--text" @click="drawer=!drawer">

            </v-toolbar-side-icon>
            <v-toolbar-title class="headline text-uppercase">
                <span>Practice</span>
                <span class="font-weight-light">MATERIAL DESIGN</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn fab small color="primary" router to="/home">
                <v-icon dark>home</v-icon>
            </v-btn>
        </v-toolbar>

        <v-navigation-drawer flat v-model="drawer"  app width="250">

            <v-list >

                <v-list-tile avatar>
                    <v-list-tile-avatar>
                        <img src="https://randomuser.me/api/portraits/men/85.jpg">
                    </v-list-tile-avatar>

                    <v-list-tile-content>
                        <v-list-tile-title>John Leider</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>

                <v-divider></v-divider>

                <v-list-tile router to="/home">

                    <v-list-tile-action>

                        <v-icon>home</v-icon>

                    </v-list-tile-action>

                    <v-list-tile-title>Home</v-list-tile-title>

                </v-list-tile>


                <v-list-tile router to="/grid">

                    <v-list-tile-action >

                        <v-icon>grid_on</v-icon>

                    </v-list-tile-action>
                    <v-list-tile-title>Grid</v-list-tile-title>

                </v-list-tile>

            </v-list>





        </v-navigation-drawer>

    </nav>



</template>

<script>

    export default{

        data(){

            return {

                drawer:false

            }
        }

    }

</script>