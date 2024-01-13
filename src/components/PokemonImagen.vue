<template>
  <div class="pokemon_Container">
    <img :src="imagenFuente" alt="no ingreso" class="ocultar" />
    <img :src="imagenFuente" alt="no ingreso" v-if="show" />
  </div>
</template>

<script>
export default {
  props: {
    pokemonID: {
      type: Number,
      requerid: true,
    },
    show: {
      type: Boolean,
      requerid: true,
      default: false,
    },
  },
  computed: {
    imagenFuente() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonID}.svg`;
      //return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"+this.pokemonID+".svg"
    },
  },
};
</script>

<style scoped>
.ocultar {
  filter: brightness(0);
}
img {
  height: 200px;
  position: absolute;
  right: 42%;
}
.pokemon_Container {
  height: 200px;
}
</style>