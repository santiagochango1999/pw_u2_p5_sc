<template>
  <div class="container">
    <p>Ingresa un id:</p>
    <input v-model="id" type="text" @keypress.enter="consumirApi()" />

    <form class="devolucion" v-if="preguntavalida !== false" action="">
      <label>name:</label>
      <input v-model="name" type="text" />
      <label>weight:</label>
      <input v-model="weight" type="text" />
      <label>baseEsperiencia:</label>
      <input v-model="baseEsperiencia" type="text" />
    </form>
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
      this.preguntavalida = true;
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
label {
  color: aliceblue;
  font-size: 20px;
  margin-top: 10px;
}
form {
  display: grid;
  justify-content: center;
  align-items: center;
}

</style>