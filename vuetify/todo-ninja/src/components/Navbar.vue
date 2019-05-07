
<template>

        <nav>
           <v-toolbar  flat app color>

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

               <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>

           </v-toolbar>
        </nav>



</template>

<script>

    export default{


    }

</script>