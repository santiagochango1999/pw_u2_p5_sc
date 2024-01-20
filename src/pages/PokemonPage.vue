<template>
  <h1 v-if="!pokemonGanador">
    Espere porfavor estamos cargando el juego...........
  </h1>
  <div v-else>
    <h1>Adivina el pokemon</h1>
    <PokemonImagen :pokemonID="pokemonGanador.id" :show="mostrarPokemon" />
    <PokemonOpciones @selecciono="revisarClick($event)" :pokemons="pokemonsArr" />
  </div>
</template>

<script>
import PokemonImagen from "../components/PokemonImagen.vue";
import PokemonOpciones from "../components/PokemonOpciones.vue";
import obtenerPokemonFachada from "../helpers/pokemonHelper";

export default {
  components: {
    PokemonImagen,
    PokemonOpciones,
  },
  beforeCreate() {
    console.log("Antes de crear el componente");
  },
  created() {
    console.log("se creo el componente");
  },
  beforeMount() {
    console.log("Antes de que se monte el componente POkemonPage");
  },
  mounted() {
    console.log("se monto el componente Pokemon pag");
    this.cargaInicial();
  },
  beforeUpdate() {
    console.log("Antes de que se actualize el componente");
  },
  updated() {
    console.log("se actualiza el componente");
  },
  beforeDestroy() {
    console.log("Antes de destruir");
  },
  destroyed() {
    console.log("Destruir");
  },
  methods: {
    async cargaInicial() {
      const arregloPokemons = await obtenerPokemonFachada();
      console.log("desde componente");
      console.log(arregloPokemons);
      this.pokemonsArr = arregloPokemons;
      const indiceGanador = Math.floor(Math.random() * 4);
      this.pokemonGanador = this.pokemonsArr[indiceGanador];
    },
    revisarClick(datoRecibido) {
      console.log("dio click  desde padre: "+datoRecibido);
      if(this.pokemonGanador.id===datoRecibido){
        this.mostrarPokemon=true;
      }
    },
    
  },
  data() {
    return {
      pokemonsArr: [],
      pokemonGanador: null,
      mostrarPokemon: false,
    };
  },
};
</script>

<style>
</style>