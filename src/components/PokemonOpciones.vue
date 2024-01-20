<template>
  <div class="option_Container">
    <ul >
      <li v-for="pokemon in pokemons" :key="pokemon.id" @click="$emit('selecciono',pokemon.id)">{{pokemon.nombre}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props:{
    pokemons:{
      typo:Array,
      required:true,
    }
  }
};
</script>

<style scoped>

ul{
    list-style: none;
}
li{
    background: white;
    border-radius: 5px;
    border: 1px solid rgb(0, 0, 0,0.2);
    width: 250px;
    margin-bottom: 10px;
    cursor: pointer;
}
li:hover{
    background: rgb(0, 0, 0,0.1);
}
.option_Container{
    display: flex;
    justify-content: center;
}
</style>