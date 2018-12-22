<template>
  <div id="app">

    <form-helper>


      <div slot="form-header">

        <h3>This is the title of the form</h3>
        <p>Information about the form</p>

      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name" required>
        <input type="password" placeholder="password" required>

      </div>
      <div slot="form-controls">

        <button @click="handleSubmit">Submit</button>

      </div>

    </form-helper>

  </div>
</template>

<script>

  import formHelper from './components/formHelper.vue'


export default {

  data(){

      return{
          title:"This is the title"
      }

  },
  name: 'app',
  components: {
    'form-helper':formHelper,
  }
}
</script>



