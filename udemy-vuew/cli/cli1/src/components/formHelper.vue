<template>
    <div id="form-helper">
      <form>
          <div id="form-header">
              <slot name="form-header"></slot>
          </div>
          <div id="form-fields">
              <slot name="form-fields"></slot>
          </div>
          <div id="form-controls">
              <slot name="form-controls"></slot>
          </div>
          
          <div id="useful-links">
              <ul>
                  <li><a href="">Link 1</a></li>
                  <li><a href="">Link 2</a></li>
                  <li><a href="">Link 3</a></li>
                  <li><a href="">Link 4</a></li>

              </ul>
          </div>
          
      </form>
    </div>
</template>

<script>
    export default {
        name: "formHelper"
    }
</script>

<style scoped>

</style>