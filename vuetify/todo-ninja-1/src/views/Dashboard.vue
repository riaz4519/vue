<template>
  <div class="dashboard">

    <h1 class="subheading grey--text">Dashboard</h1>


    <v-container class="my-5" >


      <v-layout row wrapclass="mb-3">
        <v-btn small flat color="grey">
          <v-icon left small @click="sortBy()">folder</v-icon>
          <span class="caption text-lowercase">By project name</span>
        </v-btn>

        <v-btn small flat color="grey">
          <v-icon left small @click="sortBy()">person</v-icon>
          <span class="caption text-lowercase">By person</span>
        </v-btn>
      </v-layout>

      <v-card flat class="pa-3 " v-for="(project,index) in projects" :key="index">

        <v-layout  row wrap :class="`pa-3 project ${project.status}`">

          <v-flex xs12 md6>
            <div class="caption grey--text">Project Title</div>
            <div>{{ project.title}}</div>
          </v-flex>

          <v-flex xs6 sm4 md2>
            <div class="caption grey--text"> Person</div>
            <div>{{ project.person}}</div>


          </v-flex>

          <v-flex xs6 sm4 md2>

            <div class="caption grey--text">Due By</div>
            <div>{{ project.due}}</div>


          </v-flex>

          <v-flex xs2 sm4 md2>

            <div class="right">

              <v-chip :class="`${project.status} white--text caption my-2`">{{ project.status}}</v-chip>

            </div>


          </v-flex>

        </v-layout>

        <v-divider></v-divider>

      </v-card>

    </v-container>

  </div>
</template>

<script>


  export default {

      data(){

          return {
            projects:
            [

              { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
              { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
              { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
              { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},

            ]
          }
      },
      methods:{

          sortBy() {


              console.log('fsdfs');

          }

      }

  }
</script>

<style >

  .project.complete{

      border-left: 4px solid #3cd1c2 ;
  }

  .project.ongoing{

    border-left: 4px solid orange;
  }

  .project.overdue{

    border-left: 4px solid tomato;
  }
  .v-chip.complete{
    background: #3cd1c2;
  }
  .v-chip.ongoing{
    background: orange;
  }
  .v-chip.overdue{
    background: tomato;
  }

</style>
