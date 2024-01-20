<template>
  <h1>Adivina el pokemon</h1>
  <PokemonImagen pokemonID="6" :show="true" />
  <PokemonOpciones />
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
  mounted() {
    console.log("se monto el componente Pokemon pag");
    this.cargaInicial()
  },
  methods: {
    async cargaInicial() {
      const arregloPokemons = await obtenerPokemonFachada();
      console.log("desde componente");
      console.log(arregloPokemons);
    },
  },
};
</script>

<style>
</style>