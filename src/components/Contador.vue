<template>
  <h2>{{ titulo }}</h2>
  <p>{{ counter }} <sup>2</sup> = {{ obtenerCuadradoComputada }}</p>
  <p>{{ counter }} <sup>2</sup> = {{ obtenerCuadradoComputada}}</p>
  <p>{{ counter }} <sup>2</sup> = {{ obtenerCuadradoComputada }}</p>

</template>

<script>
export default {
  props:["titulo"],
  data(){
    return{
      counter:5,
    }
  },
  methods:{
    obtenerCuadrado(){
      console.log("se calcula el cuadrado")
      return this.counter*this.counter;
    }
  },
  computed:{
    obtenerCuadradoComputada(){
      console.log("se calcula el cuadrado computado")
      return this.counter*this.counter;
    }
  }
};
</script>

<style>
h2 {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: rgb(0, 255, 166);
}
</style>    