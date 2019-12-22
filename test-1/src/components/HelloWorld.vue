<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
      <button @click="getData">get data</button>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
    getData:function () {
        const scrape = require('aliexpress-product-scraper');
        const product = scrape('32504733682');

        product.then(res =>{
            console.log(res);
        })
    }
  },
  created() {

    const scrape = require('aliexpress-product-scraper');
    const product = scrape('32504733682');

    product.then(res =>{
      console.log(res);
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
