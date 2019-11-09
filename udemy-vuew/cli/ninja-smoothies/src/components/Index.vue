<template>
  <div class="index container">
    <div class="card" v-for="smoothie in smoothies" :key="smoothie.id">
      <div class="card-content">
        <i class="material-icons delete" @click="deleteSmoothie(smoothie.id)">delete</i>
        <h2 class="indigo-text">{{ smoothie.title}}</h2>
        <ul class="ingredients">
          <li v-for="(ingedient,index) in  smoothie.ingedients" :key="index">
            <span class="chip">{{ingedient}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data(){

    return {
      smoothies:[
        {
          title:'Ninja brew',slug:'ninja-brew',ingedients:['bananas','coffee','milk'],id:1
        },
        {
          title:'Ninja true',slug:'ninja-true',ingedients:['mango','salt','milk'],id:2
        },
      ]
    }
  },
  methods:{
    deleteSmoothie:function (smoothieId) {

      this.smoothies = this.smoothies.filter( (smoothie)=>{

        return smoothie.id != smoothieId


      })

    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
  .index{
    display: grid;
    grid-template-columns:1fr 1fr 1fr;
    grid-gap: 30px;
    margin-top: 60px;
  }
  .index h2{

    font-size:1.8em ;
    margin-top: 0px;
  }
  .index .ingredients{

    margin: 30px auto;
  }
  .index .ingredients li{
    display: inline;
  }
  .index .delete{

    position: absolute;
    top: 4px;
    right: 4px;
    cursor: pointer;
    color: #aaa;
    font-size: 1.4em;

  }

</style>
