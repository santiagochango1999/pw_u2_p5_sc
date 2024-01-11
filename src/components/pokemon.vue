<template>
  <div class="container">
    <p>Ingresa un id:</p>
    <input @Keypress.enter="consumirApi()" v-model="id" type="text" />

    <!-- <div class="devolucion" v-if="preguntavalida !== true"> -->
    <h1>name:{{name}}</h1>
    <h1>weight:{{weight}}</h1>
    <h1>baseEsperiencia:{{baseEsperiencia}}</h1>

  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      name: null,
      weight: null,
      baseEsperiencia: null,
      preguntavalida: false,
    };
  },
  methods: {
    async consumirApi() {
      const { name, weight, base_experience } = await fetch(
        this.construirURLAPI(this.id)
      ).then((r) => r.json());

      this.name = name;
      this.weight = weight;
      this.baseEsperiencia = base_experience;
    },
    construirURLAPI(id) {
      return "https://pokeapi.co/api/v2/pokemon/" + id;
    },
  },
};
</script>

<style scoped>
input {
  width: 250px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
}
/* outline: none; nos sirve para quitar el foco que se pone cuando hacemos click */
input:focus {
  outline: none;
}
p,
h2,
h1 {
  color: aliceblue;
  font-size: 20px;
  margin-top: 10px;
}
</style>