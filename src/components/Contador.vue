<template>
  <h2>{{ titulo }}</h2>
  <p>{{ counter }} <sup>2</sup> = {{ obtenerCuadradoComputada }}</p>
  <button v-on:click="sumar()"> +1 </button>
  <button v-on:click="restar()"> -1 </button>
</template>

<script>
export default {
  //props: ["titulo","valor"],

  /* props: {
    titulo: String,
    valor: Number,
  }, */
  props: {
    titulo: String,
    valor: {
      type:Number,
      required:false,
      default:100,
      validator(value){
        return value>100;
      }
    }
  },
  data() {
    return {
      counter: this.valor,
    };
  },

  methods: {
    obtenerCuadrado() {
      console.log("se calcula el cuadrado");
      return this.counter * this.counter;
    },
    sumar(){
      return this.counter++;
    },
    restar(){
      return this.counter--;
    }
  },

  computed: {
    obtenerCuadradoComputada() {
      console.log("se calcula el cuadrado computado");
      return this.counter * this.counter;
    },
  },
};
</script>

<style>
h2 {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: rgb(0, 255, 166);
}

p{
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

button{
  background: turquoise;
  border-radius: 5px;
  border:1px solid white;
  color: white;
  cursor: pointer;
  margin: 0px 5px;
  padding: 5px 15px;

}
button:hover{
  background: black;
}

</style>    