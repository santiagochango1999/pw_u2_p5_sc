<template>
  <img v-if="img !== null" :src="img" alt="No se puede visualizar" />
  <div class="dark"></div>
  <div class="container">
    <input v-model="pregunta" type="text" />
    <p>Recuerda que debes terminar con el signo de interogacion (?)</p>

    <div v-if="preguntavalida!==false">
      <h2>{{ pregunta }}</h2>
      <h1>{{ respuesta }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pregunta: null,
      respuesta: null,
      img: null,
      preguntavalida: false,
    };
  },
  watch: {
    pregunta(value, oldvalue) {
      this.preguntavalida=false;
      if (!value.includes("?")) return;
      //consumo del Api
      this.consumirApi();
      this.preguntavalida=true;
    },
  },
  methods: {
    async consumirApi() {
      this.respuesta="pensando";
      this.respuesta="pensando.";
      this.respuesta="pensando..";
      this.respuesta="pensando...";
      const { answer, image } = await fetch("https://yesno.wtf/api").then((r) =>
        r.json()
      );
      
      this.respuesta = answer==='yes'?'SI!':'NO!';
      this.img = image;
    },
    construirURLAPI(id){
      return 'https://pokeapi.co/api/v2/pokemon/'+id;

    }
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