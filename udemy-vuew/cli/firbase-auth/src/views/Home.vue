<template>
  <div class="home">
   <h1>Home</h1>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
// @ is an alias to /src

import firebase from 'firebase'
export default {
  name: 'home',
  components: {

  },
  methods:{
    logout:function () {

      let navigate = this.$router;
      firebase.auth().signOut().then(function () {

        navigate.replace('login')
      })
    }
  }
}
</script>
