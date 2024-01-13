<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <Contador titulo="Contador1" :valor="10" />
  <Contador titulo="Contador2" :valor="calcularvalor()"/>

  <Contador titulo="Contador3" /> -->
  <!-- <Calculadora/> -->
 <!--  <pokemon/> -->
 <PokemonPage/>
</template>

<script>
/* import Contador from "./components/Contador.vue";
 */
//import Calculadora from "./components/Calculadora.vue";
//import Pregunta from "./components/Pregunta.vue"

//import pokemon from "./components/pokemon.vue";
import PokemonPage from "./pages/PokemonPage.vue";

export default {
  name: "App",
  components: {
    //Contador,
    //Calculadora,
    //Pregunta,
    //pokemon,
    PokemonPage,
    
  },
  /* methods: {
    calcularvalor() {
      return 5 + 5 * 10;
    },
  }, */
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; 
}
</style>
