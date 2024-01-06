<template>
  <img
    src="https://yesno.wtf/assets/no/30-d37eee83c3c2180de4edb7da6fa9f5b7.gif"
    alt="No se puede visualizar"
  />
  <div class="dark"></div>
  <div class="container">
    <input v-model="pregunta" type="text" />
    <p>Recuerda que debes terminar con el signo de interogacion (?)</p>
    <h2>{{ pregunta }}</h2>
    <h1>SI, NO...........</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pregunta: "Voy a pasar de semestre",
    };
  },
  watch: {
    pregunta(value, oldvalue) {
      if (!value.includes("?")) return;
      //consumo del Api
      this.consumirApi()
    },
  },
  methods: {
    async consumirApi() {
      const {answer,image} = await fetch("https://yesno.wtf/api").then((respuesta) =>
        respuesta.json()
      );
      console.log(answer);
      console.log(image);
    },
  },
};
</script>

<style scoped>
.dark,
img {
  /* cuando queremos que ocupe el 100 porciento de nuestra pantalla medinate la sigla al final vh o vw*/
  height: 100vh;
  width: 100vw;
  max-height: 100%;
  max-width: 100%;
  /* position : fixed =este estilo realiza como si estuviera flotando y no sobrepone a ningun elemento como una marca de agua */
  position: fixed;
  /* para garantizar que empieze desde los bordes toca poner top:0px y left:0px*/
  top: 0px;
  left: 0px;
}
.dark {
  background: rgba(0, 0, 0, 0.5);
}
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
.container {
  /* par poner sobre las demas cosas position:relative */
  position: relative;
}
p,
h2,
h1 {
  color: aliceblue;
  font-size: 20px;
  margin-top: 10px;
}
H2 {
  margin-top: 150px;
}
</style>